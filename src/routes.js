import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/Home';
import StepByStepScreen from './pages/StepByStep';

const AppNavigator = createStackNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null,
        }),
    },
    stepByStep: {
        screen: StepByStepScreen,
        navigationOptions: () => ({
            title: 'Passo a passo',
        }),
    },
}, {
        initialRouteName: 'home',
    });

export default createAppContainer(AppNavigator);
