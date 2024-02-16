import { Colors } from '@constants';
import React from 'react';
import { RegularText } from '..';

const ErrorMessage = ({ message, style }) => {

    if (message)
        return (
            <RegularText
                style={{
                    color: Colors.error,
                    fontSize: 13,
                    ...style
                }}
            >
                {message}
            </RegularText>
        );
}

export default ErrorMessage;