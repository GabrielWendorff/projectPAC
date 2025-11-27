from flask import Blueprint, jsonify, request, current_app
from .. import db
from ..models import Volunteer

volunteers = Blueprint('volunteers', __name__, url_prefix='/api/volunteers')


@volunteers.route('/', methods=['GET'])
def list_volunteers():
    vs = Volunteer.query.all()
    return jsonify([{'id': v.id, 'name': v.name, 'phone': v.phone, 'email': v.email} for v in vs])


@volunteers.route('/', methods=['POST'])
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
def get_volunteer(id):
    v = Volunteer.query.get_or_404(id)
    return jsonify({'id': v.id, 'name': v.name, 'phone': v.phone, 'email': v.email})


@volunteers.route('/<int:id>', methods=['PUT'])
def update_volunteer(id):
    data = request.get_json() or {}
    v = Volunteer.query.get_or_404(id)
    v.name = data.get('name') or v.name
    v.phone = data.get('phone') or v.phone
    v.email = data.get('email') or v.email
    db.session.commit()
    return jsonify({'message': 'Volunteer updated successfully!'}), 200


@volunteers.route('/<int:id>', methods=['DELETE'])
def delete_volunteer(id):
    v = Volunteer.query.get_or_404(id)
    db.session.delete(v)
    db.session.commit()
    return jsonify({'message': 'Volunteer deleted successfully!'}), 200
