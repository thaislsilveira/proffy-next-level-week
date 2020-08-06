import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../Componetns/PageHeader';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default TeacherList;
