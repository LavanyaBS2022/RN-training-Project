import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList, RootStackParamList } from "../Utils/types";
import { NavScreens, TabScreens } from "../Types/Screens";
import {  BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from '../Screens/Profile/Profile';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../Screens/Dashboard/Dashboard';
import { Calendar } from 'react-native-calendars';
import Favourite from '../Components/Icons/favourite';
import CustomIcon from '../Components/Icons/favourite';


type TabNavigationProps = NativeStackScreenProps<RootStackParamList, NavScreens.TAB_NAVIGATION>;

const TabNavigation: React.FC<TabNavigationProps> = ({navigation}) => {
    const Tab = createBottomTabNavigator<TabParamList>();
    const icons = {
        Dashboard: 'view-dashboard',
        Profile: 'account-box',
        calendar:'calendar',
        Favourite:'heart'
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
                    <Icon
                        name={icons.calendar}
                        size={28}
                        color="black"
                        onPress={() => navigation.navigate(NavScreens.CALENDAR)}
                        style={{ marginRight: 15 }} 
                    />
              <CustomIcon
                        name={icons.Favourite}
                        size={28}
                        color="black"
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