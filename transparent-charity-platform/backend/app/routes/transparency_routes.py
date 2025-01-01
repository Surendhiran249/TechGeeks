from flask import Blueprint

transparency_bp = Blueprint('transparency', __name__)

@transparency_bp.route('/', methods=['GET'])
def get_transparency_data():
    return {"message": "Transparency routes placeholder"}, 200
