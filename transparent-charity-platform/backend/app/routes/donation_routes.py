from flask import Blueprint, request, jsonify

donation_bp = Blueprint('donation', __name__)

# Simulating the donation data (you can replace it with a database query)
donations = [
    {"name": "John Doe", "amount": 500, "method": "online", "status": "success"},
    {"name": "Jane Smith", "amount": 300, "method": "bank", "status": "pending"},
]

@donation_bp.route('/', methods=['GET'])
def get_donations():
    # Simulating fetching donations (use a database query or blockchain logic)
    return jsonify({"donations": donations}), 200

@donation_bp.route('/', methods=['POST'])
def make_donation():
    data = request.get_json()  # Get data from the frontend (donation details)
    
    # Extract donation details
    amount = data.get('amount')
    name = data.get('name')
    method = data.get('method')
    card_details = data.get('cardDetails')  # This will be used if online payment method is selected
    
    # Validate data
    if not all([amount, name, method]):
        return jsonify({"error": "Missing required fields"}), 400

    # Implement donation logic here (e.g., saving to DB or processing blockchain)
    donations.append({"name": name, "amount": amount, "method": method, "status": "success"})

    # Respond back to frontend with a success message
    return jsonify({"success": True, "message": "Donation received successfully!"}), 200
