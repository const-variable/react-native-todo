import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import _get from 'lodash.get';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {addList} from '../redux/actions';
import Colors from '../config/colors';

class TodoHome extends PureComponent {
  state = {
    inputText: '',
  };

  handleChange = (text) => {
    this.setState({
      inputText: text,
    });
  };

  handleSubmit = () => {
    const {addListAction} = this.props;
    addListAction(this.state.inputText);
    this.setState({
      inputText: '',
    });
  };

  handleListClick = (id, title) => () => {
    const {navigation} = this.props;
    navigation.navigate('Details', {id: id, title: title});
  };

  render() {
    const {lists} = this.props;
    const {inputText} = this.state;
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.title}>Todo Lists {`(${lists.length})`}</Text>
            <TextInput
              placeholder="Add list name here.."
              style={styles.textInput}
              onChangeText={this.handleChange}
              onSubmitEditing={this.handleSubmit}
              value={inputText}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={lists}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={this.handleListClick(item.id, item.title)}>
                <Text style={styles.textStyle}>
                  <Text style={styles.index}>{index + 1}.</Text> {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(list) => list.id}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.cream,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  title: {
    color: Colors.darkBlue,
    fontWeight: '800',
    fontSize: 26,
  },
  textInput: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 3,
    borderColor: Colors.ligthGrey,
    borderWidth: 1,
    height: 40,
  },
  index: {
    color: Colors.blue,
    fontWeight: '600',
  },
  textStyle: {
    color: Colors.darkBlue,
    fontSize: 22,
    marginVertical: 5,
  },
});

const mapStateToProps = (state) => {
  const lists = _get(state, 'todoReducer.lists');
  return {
    lists: lists,
  };
};

export default connect(mapStateToProps, {
  addListAction: addList,
})(TodoHome);
