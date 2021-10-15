import React from 'react'
import { View } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { extends } from '../../../.eslintrc';

const RadioComponent = (props) => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
            />
        </View>
    );
}

extends default RadioComponent