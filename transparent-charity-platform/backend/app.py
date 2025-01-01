from app import create_app
from web3 import Web3
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

# Blockchain Setup
ganache_url = os.getenv("GANACHE_URL")
web3 = Web3(Web3.HTTPProvider(ganache_url))
if not web3.is_connected():
    print("Failed to connect to Ganache")
else:
    print("Connected to Ganache")

# Load Smart Contract
contract_address = os.getenv("CONTRACT_ADDRESS")
with open("path_to_abi.json", "r") as abi_file:
    contract_abi = abi_file.read()
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

# Flask App Initialization
app = create_app()

# Add blockchain-related routes directly in app.py
@app.route('/total-donations', methods=['GET'])
def total_donations():
    total = contract.functions.getTotalDonations().call()
    return {"total": web3.from_wei(total, "ether")}

@app.route('/all-donors', methods=['GET'])
def all_donors():
    donors = contract.functions.getAllDonors().call()
    return {"donors": donors}

@app.route('/donation-history/<address>', methods=['GET'])
def donation_history(address):
    history = contract.functions.getDonationHistory(address).call()
    history_in_ether = [web3.from_wei(amount, "ether") for amount in history]
    return {"history": history_in_ether}

@app.route('/donation-count', methods=['GET'])
def donation_count():
    count = contract.functions.getDonationCount().call()
    return {"count": count}

if __name__ == '__main__':
    app.run(debug=True)
