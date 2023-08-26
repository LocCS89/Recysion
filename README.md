# RECYSION

An app-based solution to waste recycling by integrating AI suggestion and connection among the recycling community.

## Installation

Requirements: npm, python, git

[model installation](https://drive.google.com/file/d/1-mD-N16e5QOon-LHGHUlZT_fNX72_fY7/view?usp=sharing)

[ngrok installation](https://ngrok.com/docs/getting-started/)

```bash
git clone https://github.com/tuanna-kite/recysion-project
cd server
git clone https://github.com/ultralytics/yolov5  
pip install -qr requirements.txt
cd ..
pip install -qr requirements.txt
npm install --global yarn
yarn
npx expo
mv detect.py yolov5 -i
```

## Usage

```bash
.\venv\Scripts\activate
cd server
flask run --port=3001
```
NEW TERMINAL
```bash
.\path\to\ngrok.exe http 3001
```
NEW TERMINAL
```bash
cd ..
cd recysion-app
yarn start
```

Install 'expo' application on your mobile devices
## Contributing

We are free to receive any feedback or critism, please contribute for better version of Recysion
