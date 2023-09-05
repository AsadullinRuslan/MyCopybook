import React from 'react';

const MyInput = (props) => {
    return (
        <div>
            <input type="text" {...props}/>
        </div>
    );
}

export default MyInput;
