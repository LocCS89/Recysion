"""
POST /: 
- Recieve image with userId => Response Pending Message
- Save to database, assign status PENDING and get _id of this
- Save image in img folder with image name is _id + "_before"
- Predict image, draw result in image and save with suffix "_after"
- Notify to app when complete (send id of image)

GET /:
- Get by userId
"""
import functools
import os
from pathlib import Path
from flask import Blueprint, request
import threading
from pymongo import MongoClient

mongo_client = MongoClient('localhost', 27017)
db = mongo_client.flask_db
request_collection = db.requests

api = Blueprint("api", __name__, url_prefix="/api")

images = []
is_running = False
update_queue = False


def run():
    global images
    global is_running
    global update_queue
    if is_running:
        return
    is_running = True
    if update_queue:
        # Do somethings
        update_queue = False

    while len(images) > 0:
        current = images.pop(0)
        handle_image(current)
    is_running = False


def handle_image(info):
    pass


def on_update_queue():
    global update_queue
    update_queue = True
    if not is_running:
        run()


@api.get('/')
def get_data():
    # global is_running
    # th = threading.Thread(target=on_update_queue)
    # th.start()
    return {"message": "running"}


@api.post('/')
def push_to_queue():
    if 'image' not in request.files:
        return {"error": "You must upload image!"}
    user_id = request.form.get("user_id")
    doc_id = request_collection.insert_one(
        {"user_id": user_id, "status": "pending"}).inserted_id

    # Get image and set name of image
    image = request.files['image']
    img_suffix = image.filename.split('.')[-1]
    image_name = f"{doc_id}_before.{img_suffix}"

    # Save file and push to queue
    img_path = os.path.join("static", image_name)
    image.save(img_path)
    images.append(image_name)
    os.system(f"python3 yolov5/detect.py --weights torch_model/best.pt --source {img_path} --project=static")
    # global is_running
    # th = threading.Thread(target=on_update_queue)
    # th.start()
    return {"message": "running"}
