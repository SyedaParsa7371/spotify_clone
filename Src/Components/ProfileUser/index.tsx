import { FC } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
function UserList() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
            <TouchableOpacity>

            </TouchableOpacity>
           

            
            <View>
                <View style={styles.userContainer}>

                    <View style={styles.userInnerContainer}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{width: 150, height: 175 }}
                        />
                        <Text style={styles.userText}>Ed Sheeran,Katy Perry, Pitbull and more</Text>
                    </View>


                    <View style={styles.userInnerContainer}>
                        <Image
                            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
                            style={{width: 150, height: 175 }}
                        />
                        <Text style={styles.userText}>Ed Sheeran, Katy Perry, Pitbull and more</Text>
                    </View>
                </View>

            </View>
        </View>
         </ScrollView>
    )
}



export default UserList