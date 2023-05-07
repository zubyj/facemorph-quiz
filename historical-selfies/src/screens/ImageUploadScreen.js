/*
1. Allows users to pick an image form their device's image library.
2. Uploads the selected image and a hardcoded image to the server.
3. Sends the selected image and a hardcoded image to the server's upload endpoint
4. The server's upload endpoint will return image refs
5. Navigates to ImageViewScreen with the image refs.
*/

import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import UploadImageButton from '../components/UploadImageButton';

const faceImages = {
    tomCruise: require('../../assets/images/faces/tom-cruise.jpeg'),
    nikolaTesla: require('../../assets/images/faces/nikola-tesla.webp'),
    abrahamLincoln: require('../../assets/images/faces/abraham-lincoln.jpeg'),
    tobeyMaguire: require('../../assets/images/faces/tobey-maguire.jpeg'),
};

export default function ImageUploadScreen({ navigation }) {

    const [randomFace, setRandomFace] = useState(null);

    const [imageUrl, setImageUrl] = useState('');

    if (imageUrl) {
        return (
            <View style={styles.container}>
                <Text>
                    {imageUrl}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <UploadImageButton
                setImageUrl={setImageUrl}
            />
        </View>
    );

    // const getRandomFace = () => {
    //     const randomIndex = Math.floor(Math.random() * faces.length);
    //     console.log('random face object ' + faces[randomIndex]);
    //     return faces[randomIndex];
    // };

    // const uploadRandomImage = async (randomFace) => {
    //     let randomFaceKey = randomFace.img_require;

    //     let randomFaceAsset = Asset.fromModule(faceImages[randomFaceKey]);
    //     await randomFaceAsset.downloadAsync(); // Download the asset if it's not already cached

    //     // Convert the image to base64
    //     const base64Img = await FileSystem.readAsStringAsync(randomFaceAsset.localUri, {
    //         encoding: FileSystem.EncodingType.Base64,
    //     });

    //     // Upload the base64 image
    //     return await uploadImage(`data:image/jpeg;base64,${base64Img}`, false);
    // };

    // const saveImage = async (uri) => {
    //     const fileName = uri.split('/').pop();
    //     const newPath = FileSystem.documentDirectory + fileName;
    //     try {
    //         await FileSystem.moveAsync({
    //             from: uri,
    //             to: newPath,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const uploadImage = async (img, isFirstImg) => {
    //     try {
    //         const data = new FormData();
    //         data.append('firstImageRef', img);

    //         const response = await fetch(MORPH_ENDPOINT, {
    //             method: 'POST',
    //             headers: {
    //                 Authorization: 'ImageMorpherV1',
    //             },
    //             body: data,
    //         });

    //         if (!response.ok) {
    //             setIsValid(false);
    //             throw response;
    //         }

    //         const resJson = await response.json();
    //         console.log('Image upload success');
    //         setIsValid(true);
    //         return resJson;
    //     } catch (error) {
    //         console.log('Image upload failed');
    //         if (isFirstImg) {
    //             console.log('Your image failed');
    //         } else {
    //             console.log('Server image failed');
    //         }
    //         console.log(JSON.stringify(error));
    //         setIsValid(false);
    //     }
    // };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
