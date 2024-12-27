from flask import Flask, jsonify
from web3 import Web3
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Connect to Ganache
ganache_url = os.getenv("GANACHE_URL")
web3 = Web3(Web3.HTTPProvider(ganache_url))

# Load the deployed contract
contract_address = os.getenv("CONTRACT_ADDRESS")
with open("path_to_abi.json", "r") as abi_file:
    contract_abi = abi_file.read()
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

@app.route('/total-donations', methods=['GET'])
def total_donations():
    total = contract.functions.getTotalDonations().call()
    return jsonify({"total": web3.from_wei(total, "ether")})

@app.route('/all-donors', methods=['GET'])
def all_donors():
    donors = contract.functions.getAllDonors().call()
    return jsonify({"donors": donors})

@app.route('/donation-history/<address>', methods=['GET'])
def donation_history(address):
    history = contract.functions.getDonationHistory(address).call()
    history_in_ether = [web3.from_wei(amount, "ether") for amount in history]
    return jsonify({"history": history_in_ether})

@app.route('/donation-count', methods=['GET'])
def donation_count():
    count = contract.functions.getDonationCount().call()
    return jsonify({"count": count})


if __name__ == "__main__":
    app.run(debug=True)
