import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

interface HeaderIcons{
    name?:string;
    size:number;
    style?:object;
    navigation?:NativeStackScreenProps<RootStackParamList>
    onPress?:()=>void;
}

export default HeaderIcons;