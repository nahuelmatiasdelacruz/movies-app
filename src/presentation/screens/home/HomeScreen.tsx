import { Text, View } from "react-native"
import { useMovies } from "../../hooks"
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();
  if(isLoading){
    return <FullScreenLoader/>
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying}/>
        <HorizontalCarousel movies={popular} title='Películas populares' loadNextPage={popularNextPage}/>
        <HorizontalCarousel movies={topRated} title='Mejor calificadas'/>
        <HorizontalCarousel movies={upcoming} title='Proximamente'/>
      </View>
    </ScrollView>
  )
}