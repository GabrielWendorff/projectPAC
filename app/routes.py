import hashlib

from flask import jsonify, render_template, request
from app import db
from flask import current_app as app
from .models import User, Volunteer

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

@app.route('/add_volunteer', methods=['POST'])
def add_volunteer():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')

    if not name or not email or not phone:
        return jsonify({'success': False, 'message': 'Dados incompletos'}), 400

    new_volunteer = Volunteer(name=name, email=email, phone=phone)

    try:
        db.session.add(new_volunteer)
        db.session.commit()
        return jsonify({'success': True}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/get_volunteers', methods=['GET'])
def get_volunteers():
    volunteers = Volunteer.query.all()
    volunteers_list = [{
        'id': volunteer.id,
        'name': volunteer.name,
        'phone': volunteer.phone,
        'email': volunteer.email
    } for volunteer in volunteers]
    return jsonify(volunteers_list)

@app.route('/get_volunteers/<int:id>', methods=['GET'])
def get_volunteer(id):
    volunteer = Volunteer.query.get_or_404(id)
    volunteer_info = {
        'id': volunteer.id,
        'name': volunteer.name,
        'phone': volunteer.phone,
        'email': volunteer.email
    }
    return jsonify(volunteer_info)


@app.route('/delete_volunteer/<int:id>', methods=['DELETE'])
def delete_volunteer(id):
    volunteer = Volunteer.query.get_or_404(id)
    db.session.delete(volunteer)
    db.session.commit()
    return jsonify({'message': 'Volunteer deleted successfully!'}), 200

@app.route('/edit_volunteer/<int:id>', methods=['PUT'])
def edit_volunteer(id):
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')

    volunteer = Volunteer.query.get_or_404(id)
    volunteer.name = name
    volunteer.phone = phone
    volunteer.email = email
    db.session.commit()

    return jsonify({'message': 'Volunteer updated successfully!'}), 200

def password_hash(password_provided):
    return hashlib.md5(password_provided.encode()).hexdigest()

@app.route('/add_manager', methods=['POST'])
def add_manager():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'success': False, 'message': 'Dados incompletos'}), 400

    hashed_password = password_hash(password)
    new_manager = User(username=username, email=email, password=hashed_password)

    try:
        db.session.add(new_manager)
        db.session.commit()
        return jsonify({'success': True}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/get_managers', methods=['GET'])
def get_managers():
    Users = User.query.all()
    managers_list = [{
        'id': User.id,
        'username': User.username,
        'password': User.password,
        'email': User.email
    } for User in Users]
    return jsonify(managers_list)


@app.route('/get_manager/<int:id>', methods=['GET'])
def get_manager(id):
    manager = User.query.get_or_404(id)
    manager_info = {
        'id': manager.id,
        'username': manager.username,
        'password': manager.password,
        'email': manager.email
    }
    return jsonify(manager_info)

@app.route('/delete_manager/<int:id>', methods=['DELETE'])
def delete_manager(id):
    manager = User.query.get_or_404(id)
    db.session.delete(manager)
    db.session.commit()
    return jsonify({'message': 'Manager deleted successfully!'}), 200

@app.route('/edit_manager/<int:id>', methods=['PUT'])
def edit_manager(id):
    data = request.json
    username = data.get('username')
    email = data.get('email')

    manager = User.query.get_or_404(id)
    manager.username = username
    manager.email = email
    db.session.commit()

    return jsonify({'message': 'Manager updated successfully!'}), 200

@app.route('/manager')
def manager():
    return render_template('admin.html')