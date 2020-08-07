import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/34002389?s=460&u=87794bfaceacc304760b3329b20af09ed10e2c1b&v=4',
          }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Thaís Silveira</Text>
          <Text style={styles.subjext}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Apaixonada por números.
        {'\n'}
        {'\n'}
        Empenhada em ensinar seus alunos da melhor forma possível.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
