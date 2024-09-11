import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native"
import styles  from "./style"

function RecentSong(){
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

       
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
            <View>
                <View style={styles.recentContainer}>

                    <View style={styles.recentInnerContainer}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175 }}
                        />
                        <Text style={styles.recentTitle}>Belivers</Text>
                        <Text style={styles.recentText}>Song.Imagine Dragons</Text>
                    </View>


                    <View style={styles.recentInnerContainer}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175}}
                        />
                        <Text style={styles.recentTitle}>Belivers</Text>
                        <Text style={styles.recentText}>Song.Imagine Dragons</Text>
                    </View>
                    <View style={styles.recentInnerContainer}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{ width: 150, height: 175}}
                        />
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