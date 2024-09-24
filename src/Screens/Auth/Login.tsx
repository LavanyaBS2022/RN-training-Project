import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from "../../Utils/types";
import { NavScreens } from "../../Types/Screens";
import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet ,Text} from "react-native";

type LoginProps = NativeStackScreenProps<RootStackParamList, NavScreens.LOGIN>;

const Login: React.FC<LoginProps> = ({ navigation }) => {
    const [mobNumber, setMobNumber] = useState('');

    const goToOtp = () => {
        if (mobNumber === '12345678') {
            navigation.navigate(NavScreens.OTP);
        }
    }
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={styles.headerText}>Login</Text>
            <TextInput style={styles.input} placeholder="Enter your number" value={mobNumber} onChangeText={setMobNumber} />
            <Button title="Get OTP" onPress={goToOtp}  />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        color:'black',
        borderRadius:8,
        backgroundColor:'grey'
    },
    headerText:{
        fontSize: 30,
        color:'black',
        marginBottom:30,
    }
})

export default Login;



