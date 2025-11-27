from .volunteers import volunteers as volunteers_bp
from .users import users as users_bp

def register_controllers(app):
    app.register_blueprint(volunteers_bp)
    app.register_blueprint(users_bp)
