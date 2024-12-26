from flask import Flask, jsonify
from web3 import Web3
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Connect to Ganache
ganache_url = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(ganache_url))

# Load the deployed contract
contract_address = "0x468D7187Eea8a1B69D80B317270A8b94305252A9"
with open("path_to_abi.json", "r") as abi_file:
    contract_abi = abi_file.read()
contract = web3.eth.contract(address=contract_address, abi=contract_abi)

@app.route('/total-donations', methods=['GET'])
def total_donations():
    total = contract.functions.getTotalDonations().call()
    return jsonify({"total": web3.from_wei(total, "ether")})


if __name__ == "__main__":
    app.run(debug=True)
