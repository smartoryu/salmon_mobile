// /* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
} from 'react-native';
import {Header} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {getPostList} from '../redux/actions';
import {HomeIcon} from './HomeIcon';
import {RestaurantCard} from './RestaurantCard';

export const Home = ({navigation}) => {
  const Actions = useDispatch();

  const Refresh = useSelector(({Post}) => Post.Refresh);
  const PostList = useSelector(({Post}) => Post.PostList);
  const User = useSelector(({Auth}) => Auth.username);

  useEffect(() => {
    Actions(getPostList());
  }, [Actions]);

  const onRefresh = () => {
    console.log('refresh');
    Actions(getPostList());
  };

  return (
    <View style={style.containerStyle}>
      <Header
        rightComponent={{
          text: `Hello, ${User}`,
          style: {color: 'white', fontSize: 18, fontWeight: '700'},
        }}
        leftComponent={{
          // borderWidth: 1,
          width: 50,
          icon: 'ticket',
          color: 'white',
          size: 25,
          type: 'font-awesome',
        }}
        containerStyle={{
          backgroundColor: 'tomato',
          justifyContent: 'space-around',
          paddingLeft: 25,
          elevation: 3,
          marginTop: Platform.OS === 'ios' ? 0 : -25,
        }}
        rightContainerStyle={{
          // borderWidth: 1,
          flex: 2,
          marginRight: 15,
        }}
      />
      <View
        style={{
          // borderWidth: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 10,
        }}>
        <HomeIcon
          size={25}
          icons={'credit-card'}
          types={'font-awesome'}
          name={'Credit'}
        />
        <HomeIcon
          icons={'food'}
          types={'material-community'}
          name={'Variant'}
        />
        <HomeIcon
          icons={'food-variant'}
          types={'material-community'}
          name={'Recipe'}
        />
        <HomeIcon
          icons={'map-marker'}
          types={'font-awesome'}
          name={'Location'}
        />
        <HomeIcon
          size={28}
          icons={'shopping-cart'}
          types={'font-awesome'}
          name={'Cart'}
        />
        <HomeIcon icons={'pizza'} types={'material-community'} name={'Pizza'} />
        <HomeIcon
          icons={'hamburger'}
          types={'material-community'}
          name={'Burger'}
        />
        <HomeIcon
          size={35}
          icons={'dots-horizontal'}
          types={'material-community'}
          name={'More'}
        />
      </View>

      <FlatList
        data={PostList}
        renderItem={({item}) => (
          <TouchableWithoutFeedback>
            <View style={{width: '50%'}}>
              <RestaurantCard data={item} />
            </View>
          </TouchableWithoutFeedback>
        )}
        style={{width: '98%'}}
        numColumns={2}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        refreshing={Refresh}
      />
    </View>
  );
};

const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
});
