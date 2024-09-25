import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
interface IconProps{
    name:string;
    size:number;
    style?:object;
    onPress?:()=>void;
}

const Icons:React.FC<IconProps>=({name,size,style,onPress})=>{
return(
    <TouchableOpacity onPress={onPress}>
         <View>
        <Icon name={name}
        size={size}
        style={style} 
        />
    </View>
    </TouchableOpacity>
   
)
}

export default Icons