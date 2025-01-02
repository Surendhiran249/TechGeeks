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

# Account Setup
private_key = os.getenv("PRIVATE_KEY")  # Private key of Ganache account
account_address = os.getenv("ACCOUNT_ADDRESS")  # Ganache account address
nonce = web3.eth.get_transaction_count(account_address)
print(f"Nonce for {account_address}: {nonce}")