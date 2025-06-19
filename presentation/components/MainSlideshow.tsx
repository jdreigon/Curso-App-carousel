import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
level: ReanimatedLogLevel.warn,
strict: false, // Reanimated runs in strict mode by default
});

interface Props {
    movies: Movie[];
}

//Dimensions.get('screen').width solo cuando es dimensiones parado, si aumentan o boltean no lo toma en cuenta


const MainSlideshow = ({movies}: Props) => {

    const ref = useRef<ICarouselInstance>(null);
    const width = useWindowDimensions().width;
    //console.log(movies)

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
                style={{
                    width: width,
                    height: 350,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                mode='parallax'   //como se mueve el carrucel
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                defaultIndex={1}

            />
            
        </View>
        
    )
}

export default MainSlideshow;