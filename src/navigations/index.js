import { Colors, Route } from '@constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllTasks, CreateTask, TaskDetail } from '@screens';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import BootSplash from "react-native-bootsplash";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { Screen, Navigator } = createNativeStackNavigator();

const Navigation = () => {
  const { styles } = useStyles()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
      <NavigationContainer onReady={() => BootSplash.hide()}>

        <Navigator
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
          initialRouteName={Route.all_task}>
          <Screen name={Route.all_task} component={AllTasks} />
          <Screen name={Route.task_detail} component={TaskDetail} />
          <Screen name={Route.create_task} component={CreateTask} />

        </Navigator>
      </NavigationContainer>
    </View>
  )
}


export default Navigation;

const useStyles = () => {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      backgroundColor: Colors.background1,
      paddingBottom: insets.bottom
    }

  })
  return { styles }
}
