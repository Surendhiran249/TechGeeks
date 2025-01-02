from flask import Blueprint, jsonify

campaign_bp = Blueprint('campaign', __name__)

# Example campaigns data
campaigns_data = [
    {"id": 1, "title": "Education for All", "description": "Providing resources to schools.", "details": "Delivering textbooks, computers, and trained teachers to underprivileged schools in rural areas."},
    {"id": 2, "title": "Healthcare Support", "description": "Providing medical aid.", "details": "Free health checkups, distributing essential medicines, and setting up mobile health clinics."},
    {"id": 3, "title": "Food Distribution", "description": "Feeding the hungry.", "details": "Partnering with NGOs to distribute meals to homeless shelters and slums."},
    {"id": 4, "title": "Disaster Relief", "description": "Helping disaster victims.", "details": "Providing food, water, and shelter to victims of natural disasters."},
    {"id": 5, "title": "Women Empowerment", "description": "Training women for employment.", "details": "Providing vocational training and financial support to help women achieve independence."},
    {"id": 6, "title": "Environmental Conservation", "description": "Protecting our planet.", "details": "Planting trees, cleaning rivers, and promoting eco-friendly practices."},
    {"id": 7, "title": "Animal Welfare", "description": "Caring for animals.", "details": "Rescuing stray animals, setting up shelters, and promoting adoption."},
    {"id": 8, "title": "Youth Leadership Programs", "description": "Developing leaders of tomorrow.", "details": "Organizing workshops and training programs to empower youth."},
]

@campaign_bp.route('/', methods=['GET'])
def get_campaigns():
    return jsonify(campaigns_data), 200
