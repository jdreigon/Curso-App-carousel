import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { Text, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';



interface Props {
    movies: Movie[];
}

const MainSlideshow = ({movies}: Props) => {

    const ref = useRef<ICarouselInstance>(null);

    console.log(movies)

    return(
        
        <View className='h-[250px] w-full'>

             {/* <Text>
                {JSON.stringify(movies)}
            </Text>
             */}
            <Carousel
                ref={ref}
                data={movies}
                renderItem={ ({item}) => <Text>{item.title}</Text> }
                width={200} //ancho de cada tarjeta
                height={350}

            />
            
        </View>
        
    )
}

export default MainSlideshow;