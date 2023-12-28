import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import { enableScreens } from 'react-native-screens';
import { CustomTab } from '../Utils/CustomTab';

//import SideMenu from '../Utils/Sidemenu';
import HomeScreen from '../Screens/HomeScreens/HomeScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
const Stack = createStackNavigator();


export default function App() {
  enableScreens();

  React.useEffect(() => {
    NetInfo.addEventListener(state => {
      StatusBar.setBarStyle('dark-content', true);
      StatusBar.setBackgroundColor('#ffff');
      //StatusBar.setHidden(true);
      if (!state.isConnected) {
        alert('Something Went Wrong...');
      }
     })

  }, []);


  const beforeLoggedIn = {
  
   
    LoginScreen: LoginScreen,
    
   
  };
  const tabs = {
    MyTabs: CustomTab,
  };
  const tabsInner = {
    HomeScreen:HomeScreen
  };
  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Object.entries({
          ...beforeLoggedIn,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
  function BottomTab() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {Object.entries({
         // ...tabs,
          ...tabsInner,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }

  // const DrawerNavigator = () => {
  //   return (
  //     <Drawer.Navigator
  //       screenOptions={{ headerShown: false,drawerStyle: {
  //         backgroundColor: '#fff',
  //         width: "75%",
  //       }, }}
  //       drawerContent={props => <SideMenu {...props} />}>
  //       <Drawer.Screen name="Home" component={BottomTab} />
  //     </Drawer.Navigator>
  //   );
  // };

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
     
        {/* <Stack.Screen name={'InitialScreen'} component={InitialScreen} /> */}
        <Stack.Screen name={'BottomTab'} component={BottomTab} />
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const My_Home_Tab = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={PastSessionScreen} /> 
    </Stack.Navigator>
  );
};

export { My_Home_Tab };

const My_club_Tab = () => {
  const tabsInner = {
    TutorResultScreen : TutorResultScreen
    
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FindTutorScreen" component={FindTutorScreen} />
      {Object.entries({
          ...tabsInner,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
    </Stack.Navigator>
  );
};

export { My_club_Tab };
