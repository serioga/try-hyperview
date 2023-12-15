import * as Constants from './constants';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import HyperviewScreen from './HyperviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
  console.log("Constants", Constants)
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,

        // Paddings to handle safe area
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingTop: insets.top,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen
              component={HyperviewScreen}
              initialParams={{ url: Constants.ENTRY_POINT_URL }}
              name={Constants.MAIN_STACK_NAME}
            />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              component={HyperviewScreen}
              name={Constants.MODAL_STACK_NAME}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};
