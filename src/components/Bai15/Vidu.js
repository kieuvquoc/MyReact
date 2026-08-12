import React , {useState, useEffect} from 'react';

function ViduBai15(props){
    const [getMail,setMail]=useState("Email");
    const [getPass,setPass]=useState("");
    const [getCkb,setCkb]=useState(false);

    const [getErMail,setErMail]=useState("");
    const [getErPass,setErPass]=useState("");
    const [getErCkb,setErCkb]=useState("");

    function kiemtraMail(e){
        setMail(e.target.value);
    }
    function kiemtraPass(e){
        setPass(e.target.value);
    }
    function kiemtraCkb(e){
        setCkb(e.target.checked);
    }

    function KiemTraLogin(e){
        e.preventDefault();

        let kiemtra=true;
        
        if(getMail==="Email"||getMail===""){
            setErMail("Chua nhap mail");
            kiemtra=false;
        }
        else {
            setErMail("");
        }
        if(getPass===""){
            setErPass("Chua nhap pass");
            kiemtra=false;
        }
        else {
            setErPass("");
        }
        if(getCkb===false||getCkb===""){
            setErCkb("Chua xac minh");
            kiemtra=false;
        }
        else {
            setErCkb("");
        }

        if(kiemtra){
            alert("Login thanh cong");
            setTimeout(function(){
                setMail("Email"); 
                setPass("");
                setCkb(false);
            },10000);
        }
    }

    return(
        <>
        <h4>Login to your account</h4>
        <form onSubmit={KiemTraLogin}>
            <input type="mail" value={getMail} onChange={kiemtraMail}/>
            <p className="form-text text-muted">{getErMail}</p>
            <input type="password" value={getPass} onChange={kiemtraPass}/>
            <p className="form-text text-muted">{getErPass}</p>
            <input type="checkbox" checked={getCkb} onChange={kiemtraCkb}/>
            <p className="form-text text-muted">{getErCkb}</p>
            <button type="submit" style={{backgroundColor: 'red'}}>Login</button>
        </form>
        </>
    )
}
export default ViduBai15;