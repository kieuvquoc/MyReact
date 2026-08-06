import LoginBTN from './LoginBTN';
import LogoutBTN from './LogoutBTN';
import React, {useState}  from 'react';
import Warning from './Warning';

function Login(){
    const [isToogle,setIsToogle]=useState(true);
    const [showWarning,setShowWarning]=useState(true);

    function handleToogleClick(){
        setShowWarning(!showWarning);
    }

    function HandleLogin(){
        setIsToogle=(!isToogle);
    }

    const HandleLogout=()=>{
        setIsToogle=(!isToogle);
    }

    function renderButton(){
        if(isToogle){
            return <LogoutBTN ClickLogout={HandleLogout}/>
        } return <LoginBTN ClickLogin={HandleLogin}/>
    }
    
    return(
        <div>
            {renderButton()}
            <Warning warning={showWarning}>
                <button onClick={handleToogleClick}>
                    {showWarning ? 'Hide Warning' : 'Show Warning'}
                </button>
            </Warning>
        </div>
    )
}

export default Login;