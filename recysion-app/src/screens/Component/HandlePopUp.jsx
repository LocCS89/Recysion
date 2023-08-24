import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs'; // Thư viện để làm việc với file system
const HandlePopUp = () => {
  const [latestData, setLatestData] = useState({
    coordinates1: {
      x: 0,
      y: 0,
    },
    coordinates2: {
      x: 0,
      y: 0,
    },
  });

  useEffect(() => {
    // Tìm và xử lý tệp JSON mới nhất trong thư mục 'detach'
    findAndProcessLatestJson();
  }, []);

  const findAndProcessLatestJson = async () => {
    try {
      const detectedFolderPath = RNFS.DocumentDirectoryPath + '../../../../server/static/detected'; // Đường dẫn tới thư mục 'detach'
      const files = await RNFS.readdir(detectedFolderPath); // Lấy danh sách tệp trong thư mục

      const jsonFiles = files.filter((file) => file.endsWith('.json')); // Lọc tệp JSON

      jsonFiles.sort((a, b) => {
        const aTimestamp = RNFS.statSync(detectedFolderPath + '/' + a).ctime;
        const bTimestamp = RNFS.statSync(detectedFolderPath + '/' + b).ctime;
        return bTimestamp - aTimestamp;
      });

      if (jsonFiles.length > 0) {
        const latestJsonFileName = jsonFiles[0];
        const latestJsonContent = await RNFS.readFile(
          detectedFolderPath + '/' + latestJsonFileName,
          'utf8'
        );
        const latestJson = JSON.parse(latestJsonContent);

        // Cập nhật state với dữ liệu từ tệp JSON mới nhất
        setLatestData(latestJson);
      }
    } catch (error) {
      console.error('Error processing JSON files:', error);
    }
  };

  const boxStyle = {
    position: 'absolute',
    left: Math.min(latestData.x1, latestData.x2),
    top: Math.min(latestData.y1, latestData.y2),
    width: Math.abs(latestData.x2 - latestData.x1),
    height: Math.abs(latestData.y2 - latestData.y1),
    borderColor: '5C8D89',
    borderWidth: 2,
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={boxStyle} onPress={console.log('Thanh cong')}>
        {latestData.custom_text}
      </TouchableOpacity>
    </View>
  );
};

export default HandlePopUp;
