from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(50), nullable=False)

    def __init__(self, email, password, role):
        self.email = email
        self.password = password
        self.role = role

    def to_dict(self):
        return {"email": self.email, "role": self.role}
