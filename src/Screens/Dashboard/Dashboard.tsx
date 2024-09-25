import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../Utils/types";
import { NavScreens, TabScreens } from "../../Types/Screens";
import { Text, View, Button, StyleSheet, Alert } from 'react-native';
 
type DashboardProps = NativeStackScreenProps<RootStackParamList, TabScreens.DASHBOARD>;

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {

    // const [name, setname] = useState<string>('')

    // useEffect(() => {
    //     Alert.alert('Hi')
    // },[])

    const goToNotification=()=>{
        navigation.navigate(NavScreens.NOTIFICATION,{notification:{id:20,
            title:"Test Title",
            message:"some important message"
        }})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard Screen</Text>
            <Button title='Go to Notification' onPress={goToNotification}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:'black'
    },
});

export default Dashboard;
