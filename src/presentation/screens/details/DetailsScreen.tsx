import { useRoute } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";

interface DetailsProps extends StackScreenProps<RootStackParams,'Details'>{};

export const DetailsScreen = ({ route }: DetailsProps) => {
  const { movieId } = route.params;
  const { isLoading, movie } = useMovie(movieId);
  if(isLoading) return <Text>Cargando..</Text>
  return (
    <View>
      <MovieHeader movie={movie!}/>
    </View>
  );
};