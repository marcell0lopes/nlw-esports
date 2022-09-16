import React, { useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

import { GameParams } from '../../@types/navigation';

import { Entypo } from '@expo/vector-icons';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleBackToHome() {
    return navigation.navigate('home');
  }

  const insets = useSafeAreaInsets();

  useEffect(() => {
    fetch(`http://192.168.15.12:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
            paddingTop: insets.top,
            justifyContent: 'space-between',
          },
        ]}
        edges={['top', 'bottom']}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackToHome}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image style={styles.logo} source={logoImg} />

          <View style={styles.right} />
        </View>
        <ScrollView contentContainerStyle={{ margin: 0, padding: 0 }}>
          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={duos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DuoCard onConnect={() => {}} data={item} />
            )}
            style={styles.listContainer}
            contentContainerStyle={[
              styles.contentList,
              duos.length === 0 && {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anúncioos publicados ainda.
              </Text>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
