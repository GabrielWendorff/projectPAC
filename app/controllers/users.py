import hashlib
from flask import Blueprint, jsonify, request, current_app
from .. import db
from ..models import User

users = Blueprint('users', __name__, url_prefix='/api/users')


def password_hash(password_provided):
    return hashlib.md5(password_provided.encode()).hexdigest()


@users.route('/', methods=['GET'])
def list_users():
    us = User.query.all()
    return jsonify([{'id': u.id, 'username': u.username, 'email': u.email} for u in us])


@users.route('/', methods=['POST'])
def create_user():
    data = request.get_json() or {}
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if not username or not email or not password:
        return jsonify({'success': False, 'message': 'Dados incompletos'}), 400
    u = User(username=username, email=email, password=password_hash(password))
    try:
        db.session.add(u)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Manager added successfully!', 'id': u.id}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.exception('create_user')
        return jsonify({'success': False, 'message': str(e)}), 500


@users.route('/verify', methods=['POST'])
def verify_user():
    data = request.get_json() or {}
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'success': False}), 400
    user = User.query.filter_by(username=username).first()
    if user and user.password == password_hash(password):
        return jsonify({'success': True}), 200
    return jsonify({'success': False}), 401


@users.route('/<int:id>', methods=['GET'])
def get_user(id):
    u = User.query.get_or_404(id)
    return jsonify({'id': u.id, 'username': u.username, 'email': u.email})


@users.route('/<int:id>', methods=['PUT'])
def update_user(id):
    data = request.get_json() or {}
    u = User.query.get_or_404(id)
    if data.get('username'):
        u.username = data.get('username')
    if data.get('email'):
        u.email = data.get('email')
    if data.get('password'):
        u.password = password_hash(data.get('password'))
    db.session.commit()
    return jsonify({'message': 'Manager updated successfully!'}), 200


@users.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    u = User.query.get_or_404(id)
    db.session.delete(u)
    db.session.commit()
    return jsonify({'message': 'Manager deleted successfully!'}), 200
