import { NavigationContainer } from '@react-navigation/native';
import { Background } from '../components/Background';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
