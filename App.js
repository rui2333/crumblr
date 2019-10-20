import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchPage from './searchPage.js';
import Login from './Login.js';
import PostPage from './Post.js';
import ItemLists from './ItemLists.js';
import ItemIntro from './itemIntro.js';
const MainNavigator = createStackNavigator({
  Home: {screen: Login},
  SearchPage : {screen: SearchPage},
  PostPage : {screen: PostPage},
  ItemPage : {screen: ItemLists},
  ItemDetail : {screen: ItemIntro}
});

const App = createAppContainer(MainNavigator);

export default App;