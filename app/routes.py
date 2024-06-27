import hashlib

from flask import jsonify,render_template, request
from . import db
from flask import current_app as app
from .models import User

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'username': user.username, 'email': user.email} for user in users])

@app.route('/')
def index():
    return render_template('index.html')


def verify_password(stored_password, provided_password):
    return stored_password == hashlib.md5(provided_password.encode()).hexdigest()

@app.route('/verify_password', methods=['POST'])
def verify_password_route():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and verify_password(user.password, password):
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False}), 401

@app.route('/volunteers')
def volunteer():
    return render_template('volunteersview.html')