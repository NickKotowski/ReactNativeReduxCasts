import React from 'react';
import { View } from 'react-native';

//In JSX expressions that contain both an opening tag and a closing tag,
//the content between those tags is passed as a special prop: props.children.
//There are several different ways to pass children.
//see: https://facebook.github.io/react/docs/jsx-in-depth.html

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
