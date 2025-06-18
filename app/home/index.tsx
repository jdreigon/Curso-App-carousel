import MainSlideshow from "@/presentation/components/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {

    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery } = useMovies();

    //nowPlayingQuery.isError para ver si hay error

    //Creamos un Cargando...
    // return (
    //     <View className="justify-center items-center flex-1">
    //         <ActivityIndicator color={"purple"} size={40}/>
    //     </View>
    // )

    if(nowPlayingQuery.isLoading){
        return (
            <View className="justify-center items-center flex-1">
                <ActivityIndicator color={"purple"} size={40}/>
            </View>
        );

    }    


    return (
        <View className="mt-2" style={{paddingTop: safeArea.top}}>
            <Text className="text-3xl font-bold px-4 mb-2">Home</Text>
            {/* <Text>
                {JSON.stringify(nowPlayingQuery.data)}
            </Text> */}

            {/* Carousel de imagenes */}
            <MainSlideshow movies={nowPlayingQuery.data ?? []}/>



        </View>
    );
};

export default HomeScreen