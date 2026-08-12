import React , {useState} from 'react';
import Error from '../FormError';

function ViduBai16(props){
    const[getInputs,setInputs]=useState({
        email:"Email",
        pass:"",
        chkbox: false
    })
    const[getErr,setErr]=useState({})

    const XULYLOGIN=(e)=>{
        const InputName=e.target.name;
        const value=e.target.type=="checkbox"?e.target.checked:e.target.value;

        setInputs(state=>({...state,[InputName]:value}));
    }

    const XULYSUBMIT=(e)=>{
        e.preventDefault();
        
        let ErrSubmit={};
        let kiemtra=true;

        if(getInputs.email==""||getInputs.email=="Email"){
            ErrSubmit.email="Chua nhap mail"
            kiemtra=false;
        }
        if(getInputs.pass==""){
            ErrSubmit.pass="Chua nhap pass"
            kiemtra=false;
        }
        if(getInputs.chkbox==""||getInputs.chkbox==false){
            ErrSubmit.chkbox="Chua xac nhan"
            kiemtra=false;
        }

        if(!kiemtra){
            setErr(ErrSubmit);
        } else {
            setErr({})
            alert("Login thanh cong");
            setTimeout(function(){
                setInputs({
                    email:"Email",
                    pass:"",
                    chkbox:false
                })
            },10000);
        }
    }

    return(
        <>
        {<Error getErr={getErr}/>}
        <h4>Login to your account</h4>
        <form onSubmit={XULYSUBMIT}>
            <input type="text" value={getInputs.email} name="email" onChange={XULYLOGIN}/>
            <br/>
            <input type="password" value={getInputs.pass} name="pass" onChange={XULYLOGIN}/>
            <br/>
            <input type="checkbox" checked={getInputs.chkbox} name="chkbox" onChange={XULYLOGIN}/>
            <br/>
            <button type="submit" style={{backgroundColor: 'red'}}>Login</button>
        </form>
        </>
    )
}
export default ViduBai16;