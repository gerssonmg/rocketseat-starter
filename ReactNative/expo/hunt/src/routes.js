import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import Product from './pages/Product';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'JSHunt'
            },
        },
        Product: {
            screen: Product,
            navigationOptions: {
                //     title: 'Product Describe'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#DA552F'
            }
        }
    })
);

export default Routes;