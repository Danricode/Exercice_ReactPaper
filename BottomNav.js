import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import{StyleSheet} from 'react-native';

const ParamsRoute = () => <Text>Settings</Text>;

const HomeRoute = () => <Text>Home</Text>;

const HistoryRoute = () => <Text>History</Text>;

const AddRoute = () => <Text>Add</Text>;


const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Home', title: 'Home', icon: 'home' },
    { key: 'History', title: 'History', icon: 'history' },
    { key: 'Add', title: 'Add', icon: 'plus' },
    { key: 'Params', title: 'Settings', icon: 'cog' },
    
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    History: HistoryRoute,
    Add: AddRoute,
    Params: ParamsRoute,

  });

  return (
    <BottomNavigation style={styles.bNav}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
    bNav:{
        justifyContent:"flex-end",
      }
})

export default MyComponent;