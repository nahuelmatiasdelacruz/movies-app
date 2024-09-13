import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native"
import { Movie } from "../../../core/entities/movie.entity"
import { FlatList } from "react-native-gesture-handler";
import { MoviePoster } from "./MoviePoster";
import { useEffect, useRef } from "react";

interface HorizontalCarouselProps {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel = ({movies, title, loadNextPage}: HorizontalCarouselProps) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if(isLoading.current) return;
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached = ( contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;
    if(!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

  useEffect(()=>{
    setTimeout(()=>{
      isLoading.current = false;
    },200);
  },[movies]);

  return (
    <View style={{height: title ? 260 : 220}} >
      {
        title && (<Text style={{fontSize: 30, fontWeight: 300, marginLeft: 10, marginBottom: 10}}>{title}</Text>)
      }
      <FlatList 
        data={movies} 
        renderItem={({item})=>(
            <MoviePoster 
              movie={item} 
              width={140} 
              height={200}
            />
          )}
        keyExtractor={(item)=>item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  )
}