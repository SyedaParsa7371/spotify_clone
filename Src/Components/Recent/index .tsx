import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native"
import styles  from "./style"
import { useNavigation } from "@react-navigation/native"

function RecentSong(){

    const navigation = useNavigation()
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

       
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
            <View>
                <View style={styles.recentContainer}>

                    <View style={styles.recentInnerContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('PlayListScreen')}}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175 }}
                        />
                         </TouchableOpacity>
                        <Text style={styles.recentTitle}>Belivers</Text>
                        <Text style={styles.recentText}>Song.Imagine Dragons</Text>
                    </View>
                    <View style={styles.recentInnerContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('PlayListScreen')}}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175 }}
                        />
                         </TouchableOpacity>
                        <Text style={styles.recentTitle}>Belivers</Text>
                        <Text style={styles.recentText}>Song.Imagine Dragons</Text>
                    </View>
                    <View style={styles.recentInnerContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('PlayListScreen')}}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175 }}
                        />
                         </TouchableOpacity>
                        <Text style={styles.recentTitle}>Belivers</Text>
                        <Text style={styles.recentText}>Song.Imagine Dragons</Text>
                    </View>

                   
                </View>

            </View>
        </View>
        </ScrollView>
    )
}
export default RecentSong