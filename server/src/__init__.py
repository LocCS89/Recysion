import os
from flask import Flask, Blueprint
from pymongo import MongoClient
from src.routes import api

# Serve static
if not os.path.exists('images'):
    os.mkdir("images")
static = Blueprint('images', __name__, static_folder="images")


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY=os.environ.get("dev"))
    else:
        app.config.from_mapping(test_config)

    # # Setup db
    # mongo_client = MongoClient('localhost', 27017)
    # db = mongo_client.flask_db

    # db.init_app(app)
    # Register blueprint
    app.register_blueprint(api)

    return app
