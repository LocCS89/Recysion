import os
from flask import Flask, Blueprint, send_from_directory
from pymongo import MongoClient
from src.routes import api

# Serve static
if not os.path.exists('static'):
    os.mkdir("static")
if not os.path.exists('static/detected'):
    os.mkdir("static/detected")
# static = Blueprint('images', __name__, static_folder="images", url_prefix="/images")


def create_app(test_config=None):
    app = Flask(__name__,
                instance_relative_config=True,
                static_url_path='/static',
                static_folder="../static")
    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY=os.environ.get("dev"))
    else:
        app.config.from_mapping(test_config)

    @app.route('/images/<path:path>')
    def send_image(path):
        return send_from_directory('images', path)

    # # Setup db
    # mongo_client = MongoClient('localhost', 27017)
    # db = mongo_client.flask_db

    # db.init_app(app)
    # Register blueprint
    app.register_blueprint(api)

    return app
