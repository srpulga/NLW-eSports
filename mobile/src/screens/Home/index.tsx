
import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { styles } from './styles';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import logoImg from '../../assets/logo-nlw-esports.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.79:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <Image 
          source={logoImg}
          style={styles.logo}
          />
          <Heading
            title="Find your duo!"
            subtitle="Select the game you want to play..."
          />

          <FlatList
            data={games}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <GameCard 
                data={item}
                onPress={() => handleOpenGame(item)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentList}
          />

      </SafeAreaView>
    </Background>
  );
}