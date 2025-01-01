from web3 import Web3
import os
from dotenv import load_dotenv

load_dotenv()

# Connect to Ganache
ganache_url = os.getenv("GANACHE_URL")
web3 = Web3(Web3.HTTPProvider(ganache_url))

# Load the deployed contract
contract_address = os.getenv("CONTRACT_ADDRESS")
with open("path_to_abi.json", "r") as abi_file:
    contract_abi = abi_file.read()
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

# Simulate a donation
def simulate_donation(sender_address, private_key, amount_ether):
    try:
        # Convert Ether to Wei
        amount_wei = web3.to_wei(amount_ether, "ether")

        # Create a transaction to call the donate function
        transaction = contract.functions.donate().build_transaction({
            'from': sender_address,
            'value': amount_wei,
            'gas': 3000000,
            'nonce': web3.eth.get_transaction_count(sender_address)
        })
        print(transaction)

        # Sign the transaction with the sender's private key
        signed_tx = web3.eth.account.sign_transaction(transaction, private_key)

        # Send the transaction
        tx_hash = web3.eth.send_raw_transaction(signed_tx.raw_transaction)

        # Wait for the transaction receipt
        receipt = web3.eth.wait_for_transaction_receipt(tx_hash)


        print(f"Donation successful! Transaction hash: {tx_hash.hex()}")
        return receipt
    except Exception as e:
        print(f"Error during donation: {e}")

# Replace these values with your test account details
SENDER_ADDRESS = "0xf62C22833aB927829522f1451A042bAa6090BeCA"
PRIVATE_KEY = "0xf87c4ca0865148e3079e6024df1eb29ce697c0c05e961c9eb548cc962cc7ce2e"

if __name__ == "__main__":
    # Simulate a donation of 1 Ether
    simulate_donation(SENDER_ADDRESS, PRIVATE_KEY, 30)
