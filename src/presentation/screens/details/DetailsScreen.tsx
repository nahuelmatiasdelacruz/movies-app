import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { ScrollView } from "react-native-gesture-handler";
import { FullScreenLoader } from "../../components/loaders/FullScreenLoader";

interface DetailsProps extends StackScreenProps<RootStackParams,'Details'>{};

export const DetailsScreen = ({ route }: DetailsProps) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);
  if(isLoading){
    return <FullScreenLoader/>
  }
  return (
    <ScrollView>
      <MovieHeader title={movie?.originalTitle!} originalTitle={movie?.originalTitle!} poster={movie?.poster!}/>
      <MovieDetails movie={movie!} cast={cast!}/>
    </ScrollView>
  );
};