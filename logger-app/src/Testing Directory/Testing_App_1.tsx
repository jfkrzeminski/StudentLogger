import React from 'react';
import MyButton from './Button_Test';

//      ./ - means file in current directory
//      .. - refers to a file one directory out


function NewTestApp(){
    return(
        <div>
            <h1>Welcome to the Button Show</h1>
            <MyButton />
        </div>
    );
}

export default NewTestApp;