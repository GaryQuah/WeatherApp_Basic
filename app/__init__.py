from flask import Flask
from app.controllers.main_controller import main_controller

def create_app():
    app = Flask(__name__)
    app.register_blueprint(main_controller)  # Register Controller
    return app
