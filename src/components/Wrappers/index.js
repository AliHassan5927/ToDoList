import React from 'react';
import { SafeAreaView as View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { styles } from './styles';

export const MainWrapper = ({ children, style }) => {
  return <View style={[styles.mainContainer, style]}>{children}</View>;
};

export const ComponentWrapper = ({ children, style, animation, duration }) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[styles.compContainer, style]}>
      {children}
    </Animatable.View>
  );
};

export const Wrapper = ({ children, style, flex, animation, duration }) => {
  return (
    <Animatable.View
      animation={animation}
      duration={duration}
      style={[{ flex: flex }, style]}>
      {children}
    </Animatable.View>
  );
};

export const RowWrapper = ({ children, style }) => {
  return (
    <Animatable.View style={[styles.rowCompContainer, style]}>
      {children}
    </Animatable.View>
  );
};

