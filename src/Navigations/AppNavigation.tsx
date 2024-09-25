import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Utils/types";
import { NavScreens } from "../Types/Screens";
import TabNavigation from "./TabNavigation";
import Login from "../Screens/Auth/Login";
import Otp from "../Screens/Auth/otp";
import { NavigationContainer } from "@react-navigation/native";
import Calendar from "../Screens/Calendar";
import Notification from "../Screens/Notification";

const AuthStack = createNativeStackNavigator<RootStackParamList>();
const NonAuthStack = createNativeStackNavigator<RootStackParamList>();

const isSignedIn = true;

const NonAuthStackScreens = () => (
    <NonAuthStack.Navigator>
      <NonAuthStack.Screen
        name={NavScreens.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <NonAuthStack.Screen
        name={NavScreens.OTP}
        component={Otp}
        options={{ headerShown: false }}
      />
    </NonAuthStack.Navigator>
  );
  
  const AuthStackScreens = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavScreens.TAB_NAVIGATION}
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen 
      name={NavScreens.NOTIFICATION}
      component={Notification}
      />
      <AuthStack.Screen 
      name={NavScreens.CALENDAR}
      component={Calendar}
        options={{ presentation: 'modal' }}/>
    </AuthStack.Navigator>
  );
  
  const AppNavigation = () => {
    return (
      <NavigationContainer>
        {isSignedIn ? <AuthStackScreens /> : <NonAuthStackScreens />}
      </NavigationContainer>
    );
  };
  
  export default AppNavigation;