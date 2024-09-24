import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from "../Utils/types";
import { NavScreens, TabScreens } from "../Types/Screens";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from '../Screens/Profile/Profile';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Icons from '../Components/Icons/CustomIcon';


type TabNavigationProps = NativeStackScreenProps<RootStackParamList, NavScreens.TAB_NAVIGATION>;

const TabNavigation: React.FC<TabNavigationProps> = ({ navigation }) => {
    const Tab = createBottomTabNavigator<TabParamList>();
    const icons = {
        Dashboard: 'view-dashboard',
        Profile: 'account-box',
        calendar: 'calendar',
        Favourite: 'heart'
    }
    const getScreenOptions = (route: RouteProp<TabParamList, keyof TabParamList>): BottomTabNavigationOptions => {
        return {
            tabBarIcon: ({ color }) => {
                return (
                    <View>
                        <Icon name={icons[route.name]} style={{ color: color }} size={28} />
                    </View>
                )

            },
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                    <Icons
                        name={icons.calendar}
                        size={28}
                        onPress={() => navigation.navigate(NavScreens.CALENDAR)}
                        style={{ color:"black", marginRight: 15 }}
                    />
                    <Icons name={icons.Favourite}
                        size={28}
                        style={{ color: 'red' }} 
                    />
                </View>
            ),
        };
    };
    return (
        <Tab.Navigator screenOptions={({ route }) => getScreenOptions(route)}>
            <Tab.Screen name={TabScreens.DASHBOARD} component={Dashboard} />
            <Tab.Screen name={TabScreens.PROFILE} component={Profile} />
        </Tab.Navigator>
    );
}

export default TabNavigation;