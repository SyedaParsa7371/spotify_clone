import { Image, ScrollView, Text, View } from "react-native"
import { BackIcon, BellIcon, PlayIcon, SpotifyIcon } from "../../Components/IconButton"
import { icons } from "../../Utils/Images"
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";
import IoniconsIcon from "../../Components/IoniconButton";
import PlayCard from "../../Components/PlayCard";

function PlayListScreen() {
    const navigation = useNavigation();
    return (
        <LinearGradient colors={['#5e5e5e', '#181616', '#1a1919']} style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 20 ,marginLeft:9}}>
                    <View>

                        <BackIcon image={icons.backIcon} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ marginLeft: 70 }}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 220, height: 250,marginBottom:15}}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{color:'#a5a1a1',marginHorizontal:10,fontSize:16}}>Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <SpotifyIcon image={icons.login}/>
                    <Text style={{color:'white',fontSize:17,fontWeight:'bold',marginTop:24}}>Spotify</Text>
                </View>
                <View>
                    <Text style={{color:'white',marginLeft:8}}>191,165 likes . 3h 45min</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:25}}>
                    <View style={{flexDirection:'row',marginTop:10}}>

                    <IoniconsIcon name="heart-outline" color="white" />
                    <IoniconsIcon name="ellipsis-vertical-outline" color="white"/>
                    </View>
                    <View style={{marginLeft:300}}>
                    <PlayIcon image={icons.playIcon}/>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                <PlayCard/>
                </View>
                <View style={{marginTop:20}}>
                <PlayCard/>
                </View>
                <View style={{marginTop:20}}>
                <PlayCard/>
                </View>

            </ScrollView>
        </LinearGradient>

    )
}
export default PlayListScreen