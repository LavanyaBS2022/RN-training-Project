import { TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderIcons from '../../Utils/Interfaces/HederIcon'
import { NavScreens } from "../../Types/Screens";
const HeaderIcon: React.FC<HeaderIcons> = ({navigation}) => {
    return (
        <TouchableOpacity >
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Icon name='heart'
                    size={28}
                    style={{ color: 'black', marginRight: 20 }}
                />
                <Icon
                    name='calendar'
                    size={28}
                    color='black'
                    onPress={()=>navigation?.navigation.navigate(NavScreens.CALENDAR)}
                    
                />

            </View>
        </TouchableOpacity>

    )
}

export default HeaderIcon;