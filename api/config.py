import os
basedir = os.path.abspath(os.path.dirname(__name__))

DEFAULT_DB_URI = f"sqlite:///{os.path.join(basedir, 'app.db')}"

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY") or "secretest-of-secrets"
    
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") or DEFAULT_DB_URI
    SQLALCHEMY_TRACK_MODEIFICATIONS = False