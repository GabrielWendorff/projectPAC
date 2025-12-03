from flask import Blueprint, jsonify, request, current_app, session
from .. import db
from ..models import Volunteer

volunteers = Blueprint('volunteers', __name__, url_prefix='/api/volunteers')


def require_login():
    def _decorator(func):
        def wrapper(*args, **kwargs):
            if not session.get('user_id'):
                return jsonify({'success': False, 'message': 'Unauthorized'}), 401
            return func(*args, **kwargs)
        wrapper.__name__ = func.__name__
        return wrapper
    return _decorator


@volunteers.route('/', methods=['GET'])
@require_login()
def list_volunteers():
    vs = Volunteer.query.all()
    return jsonify([{'id': v.id, 'name': v.name, 'phone': v.phone, 'email': v.email} for v in vs])


@volunteers.route('/', methods=['POST'])
@require_login()
def create_volunteer():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    if not name or not email or not phone:
        return jsonify({'success': False, 'message': 'Dados incompletos'}), 400
    v = Volunteer(name=name, email=email, phone=phone)
    try:
        db.session.add(v)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Volunteer added successfully!', 'id': v.id}), 201
    except Exception as e:
        db.session.rollback()
        current_app.logger.exception('create_volunteer')
        return jsonify({'success': False, 'message': str(e)}), 500


@volunteers.route('/<int:id>', methods=['GET'])
@require_login()
def get_volunteer(id):
    v = Volunteer.query.get_or_404(id)
    return jsonify({'id': v.id, 'name': v.name, 'phone': v.phone, 'email': v.email})


@volunteers.route('/<int:id>', methods=['PUT'])
@require_login()
def update_volunteer(id):
    data = request.get_json() or {}
    v = Volunteer.query.get_or_404(id)
    v.name = data.get('name') or v.name
    v.phone = data.get('phone') or v.phone
    v.email = data.get('email') or v.email
    db.session.commit()
    return jsonify({'message': 'Volunteer updated successfully!'}), 200


@volunteers.route('/<int:id>', methods=['DELETE'])
@require_login()
def delete_volunteer(id):
    v = Volunteer.query.get_or_404(id)
    db.session.delete(v)
    db.session.commit()
    return jsonify({'message': 'Volunteer deleted successfully!'}), 200
