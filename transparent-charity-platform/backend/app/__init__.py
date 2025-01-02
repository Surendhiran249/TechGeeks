from flask import Flask
from app.config import Config
from app.models.user import db
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Enable CORS for all routes, with specific origin (localhost:3000)
    CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

    # Initialize Database
    db.init_app(app)

    # Create tables (this will create the tables in your SQLite file)
    with app.app_context():
        db.create_all()

    # Register Blueprints (routes)
    from app.routes.auth_routes import auth_bp
    from app.routes.donation_routes import donation_bp
    from app.routes.campaign_routes import campaign_bp
    from app.routes.transparency_routes import transparency_bp

    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(donation_bp, url_prefix='/donations')
    app.register_blueprint(campaign_bp, url_prefix='/campaigns')
    app.register_blueprint(transparency_bp, url_prefix='/transparency')

    return app
