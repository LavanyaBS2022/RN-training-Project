import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../Utils/types";
import { TabScreens } from "../../Types/Screens";
import { Text, View, Button, StyleSheet } from 'react-native';

type ProfileProps = NativeStackScreenProps<RootStackParamList, TabScreens.PROFILE>;

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
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
        color:'black',
    },
});

export default Profile;
