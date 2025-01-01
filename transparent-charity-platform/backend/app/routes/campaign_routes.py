from flask import Blueprint

campaign_bp = Blueprint('campaign', __name__)

@campaign_bp.route('/', methods=['GET'])
def get_campaigns():
    return {"message": "Campaign routes placeholder"}, 200
