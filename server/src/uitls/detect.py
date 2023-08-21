"""
detect(img_path) -> draw boxes, new image, replace _before => _after
"""
import torch
import cv2
import os


MODEL_PATH = "../torch_model/best.pt"
model = torch.hub.load('ultralytics/yolov5', model=MODEL_PATH)

def detect_and_draw(image_path):
    results = model(image_path)
    img_with_boxes = results.render()[0] 
    processed_image_path = image_path.replace("_before", "_after")
    cv2.imwrite(processed_image_path, img_with_boxes[:, :, ::-1])  
    return processed_image_path

detect_and_draw("./demo.jpg")