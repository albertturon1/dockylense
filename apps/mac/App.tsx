import './global.css';
import {View} from 'react-native';
import {Button} from './src/components/ui/button';
import {Providers} from '@/providers';
import {Text} from '@/components/ui/text';

export default function App() {
  return (
    <Providers>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">Nativewind!</Text>
        <Button>
          <Text>Button</Text>
        </Button>
      </View>
    </Providers>
  );
}
