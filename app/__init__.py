from flask import Flask
from flask_sqlalchemy import SQLAlchemy
#from flask_migrate import Migrate

db = SQLAlchemy()
#migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    db.init_app(app)
    #migrate.init_app(app, db)

    with app.app_context():
        from . import routes  # Certifique-se de que você tem um módulo 'routes'
        db.create_all()

    return app
