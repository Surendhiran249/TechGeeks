# models/donation.py
from app import db  # Import db from the Flask app initialization

class DonationModel(db.Model):
    __tablename__ = 'donations'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)  # Amount in ETH
    method = db.Column(db.String(50), nullable=False)
    transaction_hash = db.Column(db.String(66), unique=True, nullable=False)  # Blockchain TX Hash
    status = db.Column(db.String(20), nullable=False, default="pending")
