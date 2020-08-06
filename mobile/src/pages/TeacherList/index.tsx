import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../Componetns/PageHeader';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  );
}

export default TeacherList;
