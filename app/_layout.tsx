import {
  //useQuery,
  //useMutation,
  //useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

//import { nowPlayingAction } from '@/core/actions/movies/now-play.action';
import { Stack } from 'expo-router';
import '../global.css';

const queryClient = new QueryClient()

const RootLayout = () => {

  //nowPlayingAction();

  return(
    <QueryClientProvider client={queryClient}>
      <Stack 
        screenOptions={{
          headerShown: false,
        }}
      />
      {/* <View>
         <Text className='text-3xl'>RootLayout</Text>
      </View> */}
    </QueryClientProvider>

    
  )
}

export default RootLayout
