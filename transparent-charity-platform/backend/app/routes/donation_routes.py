from flask import Blueprint

donation_bp = Blueprint('donation', __name__)

@donation_bp.route('/', methods=['GET'])
def get_donations():
    return {"message": "Donation routes placeholder"}, 200
