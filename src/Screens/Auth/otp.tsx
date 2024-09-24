import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../Utils/types";
import { NavScreens } from "../../Types/Screens";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

type OtpProps= NativeStackScreenProps<RootStackParamList, NavScreens.OTP>;

const Otp:React.FC<OtpProps>=({navigation})=>{
const [otp, setOtp]= useState('');
const [message,setMessage]=useState('');

    const verify=()=>{
        if(otp==='1234'){
            setMessage('OTP Verified');
        }else{
            setMessage('Invalid OTP');
        }
    }

    return(
        <View style={styles.container}>
                        <Text style={styles.headerText}>Enter OTP</Text>
            <TextInput  style={styles.input} 
                placeholder='Enter OTP' 
                value={otp}
                onChangeText={setOtp} 
                />
            <Button title='verify' onPress={verify}/>
            {message!==''&&(
                <Text style={styles.message}>{message}</Text>
            )}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
     alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'black',
        width:300,
        margin:12,
        color:'black',
        borderRadius:8,
        backgroundColor:'grey'
    },
    message: {
        marginTop: 20,
        backgroundColor: 'grey',
        color: 'white',
        padding: 10,
        textAlign: 'center',
        width: '80%',
    },
    headerText:{
        fontSize: 30,
        color:'black',
        marginBottom:30,
    }
})

export default Otp;