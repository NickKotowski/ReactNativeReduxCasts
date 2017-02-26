import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


//wird gerufen mit zwei Variablen. Einmal "onpress", also was beim click passiert
// und "children", (hier in diesem Fall) als Text erscheint. Könnte aber selbst JSX sein
//(also sehr anpassbar)
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
//<Button></Button> =
  return (
    //from react-native documentation: touchable object with opacity "effect"
    //button is also available but limited scope to customize
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
//styles wie in CSS, ohne "-", zusammen schreiben
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  //flex: flex/(sum of all flex) = 1/1 
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
