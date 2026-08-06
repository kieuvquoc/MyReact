import React from 'react';

function HamTrue(){
    return(
        <div>
            Greeting: True
        </div>
    )
}

function HamFalse(){
    return(
        <div>
            Greeting: False
        </div>
    )
}

function Greeting(props){
    if(props.xx){
        return <HamTrue/>
    }
    else return <HamFalse/>
}

export default Greeting;