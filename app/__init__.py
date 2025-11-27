from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, static_folder='../client/dist', static_url_path='/')
    app.config.from_object('app.config.Config')

    db.init_app(app)

    CORS(app, resources={r"/api/*": {"origins": "*"}})

    with app.app_context():
        from .controllers import register_controllers
        register_controllers(app)

        db.create_all()

    @app.route('/')
    def _serve_react():
        try:
            return send_from_directory(app.static_folder, 'index.html')
        except Exception:
            return 'React front-end not built. Run client build or start dev server.', 200

    return app