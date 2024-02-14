import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const imageOptions = {
    mediaType: 'photo',
    selectionLimit: 1,
    quality: 0.5,
};

export const capture_photo = async () => {
    let result
    try {
        result = await launchCamera(imageOptions);
    } catch {
        result = false
    }
    return result.assets?.[0]
};

export const open_gallery = async () => {
    let result
    try {
        result = await launchImageLibrary(imageOptions);
    } catch {
        result = false
    }
    return result.assets?.[0]
}


