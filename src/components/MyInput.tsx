import React, { FC, ReactElement } from 'react';

const MyInput: FC = (props: {}): ReactElement => {
    return (
        <div>
            <input type="text" {...props}/>
        </div>
    );
}

export default MyInput;
