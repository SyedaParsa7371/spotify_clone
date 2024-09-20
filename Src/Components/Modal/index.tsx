import React, { FC } from 'react';
import { Modal, View, TouchableOpacity, Image, Text, Pressable } from 'react-native';
import styles from './style';
import { SongModalProps } from '../../Utils/Interface';
import IoniconsIcon from '../IoniconButton';




const SongModal: FC<SongModalProps> = ({ visible, onClose, selectedSong, onShare, onAlbum }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          {/* <View>
            <TouchableOpacity onPress={onAlbum} style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 10 }}>
                < IoniconsIcon  name="albums" color='white' />
                </View>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.modalText}>View Album</Text>
              </View>
            </TouchableOpacity>
          </View> */}

          <View style={{marginTop:10}}>
            <TouchableOpacity onPress={onShare} style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 12 }}>
                <Image
                  source={require('../../Utils/Images/share_icon.png')}
                  style={styles.shareImg}
                />
              </View>
              <View style={{ marginLeft: 27 }}>
                <Text style={styles.modalText}>Share Song</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Pressable style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default SongModal;
