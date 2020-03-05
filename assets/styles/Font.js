import React from 'react';
import { Text, TextInput } from 'react-native';
import * as Common from './Common';
import Theme from './Theme';

class Font extends React.Component {
    render() {
        let {
            style, text, // common
            size, color, weight, transform, link, center, // text
            placeholder, input, password, multi, label // text input
        } = this.props;

        if (input)
        return(
            <React.Fragment>
                <Font
                    style={{ 
                        alignSelf: 'flex-start', 
                        marginLeft: Common.EXTRA_EXTRA_LARGE_MARGIN + 10
                    }}
                    text={label}
                    color='gray'
                    size='xs'
                    transform='upper'
                />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={Common.MID_GRAY}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={multi ? Theme.textArea : Theme.input}
                    multiline={multi}
                    secureTextEntry={password}
                >{text}</TextInput>
            </React.Fragment>
        );

        else
        return(
            <Text
                style={{
                    ...style,

                    fontSize: size == 'xs' ? Common.EXTRA_SMALL_FONT_SIZE :
                    (size == 's' ? Common.SMALL_FONT_SIZE :
                    (size == 'm' ? Common.MID_FONT_SIZE :
                    (size == 'l' ? Common.LARGE_FONT_SIZE :
                    (size == 'xl' ? Common.EXTRA_LARGE_FONT_SIZE :
                    Common.EXTRA_EXTRA_LARGE_FONT_SIZE)))),

                    color: color == 'white' ? Common.WHITE :
                    (color == 'blue' ? Common.BLUE : 
                    (color == 'gray' ? Common.GRAY :
                    Common.BLACK)),

                    fontFamily: weight == 'bold' ? Common.BOLD_FONT_STYLE :
                    (weight == 'semi' ? Common.SEMI_FONT_STYLE :
                    (weight == 'mid' ? Common.MID_FONT_STYLE :
                    (size == 'light' ? Common.LIGHT_FONT_STYLE :
                    Common.REGULAR_FONT_STYLE))),

                    textTransform: transform == 'cap' ? 'capitalize' :
                    (transform == 'upper' ? 'uppercase' :
                    ('none' ? 'none' : 'lowercase')),

                    textDecorationLine: link ? 'underline' : 'none',
                    textAlign: center ? 'center' : 'left'
                }}
            >{text}</Text>
        );
    }
}

export default Font;