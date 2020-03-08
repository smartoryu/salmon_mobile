/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, CardItem, Text, Icon, Left, View} from 'native-base';
import {Image} from 'react-native';

export const RestaurantCard = ({data}) => {
  return (
    <Card>
      <View>
        <Image
          source={{uri: data.restaurant.featured_image}}
          style={{height: 200, width: '100%'}}
        />
      </View>
      <CardItem
        style={{
          flexDirection: 'column',
          borderWidth: 0,
          marginTop: 0,
          marginHorizontal: 0,
        }}>
        <Left
          style={{
            // borderWidth: 1,
            flex: 1,
            width: '100%',
            marginTop: -10,
            marginBottom: -5,
            marginLeft: -30,
            height: 25,
            alignItems: 'center',
          }}>
          <Text>
            <Icon
              type="FontAwesome"
              name="star"
              style={{fontSize: 13, color: 'gold'}}
            />
            &nbsp;
            <Text style={{fontSize: 13, color: 'black'}}>
              {data.restaurant.user_rating.aggregate_rating}
            </Text>
          </Text>
        </Left>
        <Left
          style={{
            // borderWidth: 1,
            flex: 1,
            marginBottom: -10,
            marginLeft: -30,
            width: '100%',
            height: 25,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
            }}>
            {data.restaurant.name}
          </Text>
        </Left>
      </CardItem>
    </Card>
  );
};
