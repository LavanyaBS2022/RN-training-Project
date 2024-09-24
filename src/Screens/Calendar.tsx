import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Utils/types";
import { NavScreens } from "../Types/Screens";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';

type CalendarProps = NativeStackScreenProps<RootStackParamList, NavScreens.CALENDAR>;

const CalendarScreen: React.FC<CalendarProps> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calendar</Text>
            <Calendar
                style={styles.calendar}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    calendar: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        padding: 20,
    },
});

export default CalendarScreen;
