import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'mysql://root:@127.0.0.1/teste_costura')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
