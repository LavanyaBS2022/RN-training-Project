import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { NavScreens } from '../Types/Screens';
import { RootStackParamList } from '../Utils/types';


type NotificationProps = NativeStackScreenProps<RootStackParamList, NavScreens.NOTIFICATION>;
const Notification: React.FC<NotificationProps> = ({ route }) => {
    const { notification } = route.params;
    return (
        <View style={{ backgroundColor: 'grey' }}>
            <Text>Title: {notification.title}</Text>
            <Text>Message: {notification.message}</Text>
        </View>
    )
}

export default Notification