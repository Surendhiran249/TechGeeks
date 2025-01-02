from flask import Blueprint, request, jsonify
from app.models.donation import DonationModel, db
from app.utils.blockchain import contract, web3, private_key, account_address  # Ensure 'web3' is initialized properly

donation_bp = Blueprint('donation', __name__)

@donation_bp.route('/', methods=['POST'])
def make_donation():
    try:
        # Get donation data from frontend
        data = request.get_json()
        amount = data.get('amount')  # Amount in ETH
        name = data.get('name')
        method = data.get('method')
        cardDetails = data.get('cardDetails')  # Used only for 'online' method
        
        if not all([amount, name, method]):
            return jsonify({"error": "Missing required fields"}), 400

        # Convert ETH amount to Wei
        amount_in_wei = web3.to_wei(amount, "ether")

        # Get the nonce for the sender's account (this is the number of transactions sent from the address)
        nonce = web3.eth.get_transaction_count(account_address)  # Ensure this is correct

        # Construct the transaction
        transaction = contract.functions.donate(name, method).build_transaction({
            "from": web3.eth.accounts[0],  # Use your test account address
            "value": amount_in_wei,  # Send the converted value in Wei
            "gas": 2000000,
            "gasPrice": web3.to_wei("50", "gwei"),
            "nonce": nonce  # Include the nonce
        })

        # Sign and send the transaction
        signed_tx = web3.eth.account.sign_transaction(transaction, private_key)
        raw_transaction = signed_tx.raw_transaction
        tx_hash = web3.eth.send_raw_transaction(raw_transaction)

        # Wait for the transaction receipt
        receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

        # Save donation details in SQLite
        new_donation = DonationModel(
            name=name,
            amount=amount,
            method=method,
            transaction_hash=tx_hash.hex(),
            status="success"
        )
        db.session.add(new_donation)
        db.session.commit()

        return jsonify({
            "success": True,
            "message": "Donation recorded successfully on blockchain and database.",
            "transactionHash": tx_hash.hex()
        }), 200

    except Exception as e:
        print("Error:", str(e))  # Log the error for debugging
        return jsonify({"error": str(e)}), 500
