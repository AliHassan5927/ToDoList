import { height, totalSize, width } from '@services/dimensions';
import { Image as RNImage } from 'react-native';

export const SplashImage = ({ source, styles = {} }) => {
  return (
    <RNImage
      source={source}
      style={[{ height: height(100), width: width(100) }, styles]}
    />
  );
};
export const Image = ({
  src,
  resizeMode,
  style,
  height,
  width,
  borderRadius,
}) => {
  const defaultSize = totalSize(20);
  return (
    <RNImage
      source={src}
      resizeMode={resizeMode ? resizeMode : 'contain'}
      style={[
        {
          height: height ?? defaultSize,
          width: width ?? defaultSize,
          borderRadius: borderRadius,
        },
        style,
      ]}
    />
  );
};
