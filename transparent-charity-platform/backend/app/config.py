import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "mysecretkey")
    SQLALCHEMY_DATABASE_URI = 'sqlite:///F:/Hackathons/TechGeeks(VIT Hackathon)/transparent-charity-platform/database/charity_platform.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
