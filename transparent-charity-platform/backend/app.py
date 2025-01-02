from app import create_app
from app.utils.blockchain import contract, web3

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
