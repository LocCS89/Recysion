import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";
import Buttonn from "./Component/Buttonn";
import { Button, Center, Popover, Spinner, Stack } from "native-base";
import DetectedBox from "./Component/DetectedBox";
// import HandlePopUp from "./Component/HandlePopUp";
const API_BASE_URL = "https://649b-42-112-211-205.ngrok-free.app";

export default function CameraPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const onHandleUpload = async (image_uri) => {
    setLoading(true);
    let localUri = image_uri;
    let filename = localUri.split("/").pop();
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("user_id", "test1234");
    formData.append("image", { uri: localUri, name: filename, type });
    try {
      const res = await axios.post(API_BASE_URL + "/api/", formData, {
        headers: {
          // Authorization: user.token ? `Bearer ${user.token}` : "",
          contentType: "multipart/form-data",
          Accept: "application/json",
        },
      });
      console.log(res);
      setBoxes(res.data);
      // HandlePopUp()
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
        await onHandleUpload(data.uri);
        // Pass the base64 image to the model for prediction
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      {loading && (
        <Center position="absolute" bg="rgba(0,0,0,0.25)" w="100%" h="100%" zIndex={2}>
          <Spinner size="lg" />
        </Center>
      )}

      <View style={styles.container}>
        {!image ? (
          <Camera style={styles.camera} type={type} ref={cameraRef} flashMode={flash}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
              }}
            >
              <Buttonn
                title=""
                icon="retweet"
                onPress={() => {
                  setType(type === CameraType.back ? CameraType.front : CameraType.back);
                }}
              />
              <Buttonn
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"}
              />
            </View>
          </Camera>
        ) : (
          <Stack style={styles.camera}>
            <Image source={{ uri: image }} style={styles.camera} />
            {boxes.map(({ custom_text, x1, y1, x2, y2, image_width, image_height }) => (
              <Center
                position="absolute"
                variant="subtle"
                borderWidth="2"
                borderColor="blueGray.600"
                zIndex={4}
                style={{
                  top: String((y1 / image_height) * 100) + "%",
                  left: String((x1 / image_width) * 100) + "%",
                  width: String(((x2 - x1) / image_width) * 100) + "%",
                  height: String(((y2 - y1) / image_height) * 100) + "%",
                }}
              >
                <DetectedBox label={custom_text} />
              </Center>
            ))}
          </Stack>
        )}

        <View style={styles.controls}>
          {image ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 50,
              }}
            >
              <Buttonn
                title="Re-take"
                onPress={() => {
                  setImage(null);
                  setBoxes([]);
                }}
                icon="retweet"
              />
              <Buttonn title="Save" onPress={savePicture} icon="check" />
            </View>
          ) : (
            <Buttonn title="Take a picture" onPress={takePicture} icon="camera" />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});
