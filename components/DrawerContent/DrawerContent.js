import React from 'react';
import {connect} from 'react-redux';
import _get from 'lodash.get';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../config/colors';

class DrawerContent extends React.PureComponent {
  render() {
    const {userName, navigation} = this.props;
    return (
      <View style={styles.container}>
        <DrawerContentScrollView {...this.props}>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.menuIcon}
              onPress={() => navigation.closeDrawer()}>
              <Icon name="menu" size={25} />
            </TouchableOpacity>
            <Text style={styles.heading}>Todo App</Text>
          </View>
          <View style={styles.userDetailsContainer}>
            <Avatar.Icon size={52} icon="alien" color={Colors.white} />
            <Text style={styles.userDetailsItem}> Hi, @{userName} </Text>
          </View>
          <DrawerItem
            labelStyle={styles.drawerItemLabel}
            style={styles.drawerItem}
            label="Home"
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
          <DrawerItem
            labelStyle={styles.drawerItemLabel}
            style={styles.drawerItem}
            label="Settings"
            icon={({color, size}) => (
              <Icon name="cog-outline" color={color} size={size} />
            )}
            onPress={() => navigation.navigate('Settings')}
          />
        </DrawerContentScrollView>
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 15,
    marginBottom: 10,
  },
  userDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  userDetailsItem: {
    marginLeft: 5,
    fontSize: 18,
  },
  drawerItem: {
    borderRadius: 0,
    borderBottomWidth: 1,
    borderColor: Colors.lightestGrey,
  },
  drawerItemLabel: {
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  const userName = _get(state, 'todoReducer.userName');
  return {
    userName,
  };
};

export default connect(mapStateToProps, null)(DrawerContent);
