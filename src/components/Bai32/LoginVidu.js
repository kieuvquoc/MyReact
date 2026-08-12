import React , {useState} from 'react';
import ErrorLogin from './ErrorLogin'

function LoginViduB32(props){

    let setUserLocal=localStorage.getItem("DangKi");
    let chuyenJson=JSON.parse(setUserLocal);
    console.log(chuyenJson)

    const [getInputs,setInputs]=useState({
        mail: "",
        pass: ""
    })

    const [getErr, setErr] = useState({});

    function XuLyForm(e){
        let name=e.target.name;
        let value=e.target.value;

        setInputs(state=>({...state,[name]:value}))
    }

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        return regex.test(email);
    }

    function XuLySubmit(e){
        e.preventDefault();

        let kiemtra=true;
        let ErrSubmit={}
        
        if(!isEmail(getInputs.mail)){
            ErrSubmit.mail="Vui long nhap mail";
            kiemtra=false;
        } else if(getInputs.mail!==chuyenJson.mail){
            ErrSubmit.mail="Mail kh dung";
            kiemtra=false;
        }

        if(getInputs.pass==""){
            ErrSubmit.pass="Vui long nhap pass";
            kiemtra=false;
        } else if(getInputs.pass!==chuyenJson.pass){
            ErrSubmit.pass="pass kh dung";
            kiemtra=false;
        }

        if(!kiemtra){
            setErr(ErrSubmit)
        }
        else {
            setErr({});
            alert("Login thanh cong");
            setTimeout(()=>{
                setInputs({
                    mail: "",
                    pass: ""
                })
            },5000)
        }
    }

    return(
        <>  
            {<ErrorLogin Err={getErr}></ErrorLogin>}
            <form onSubmit={XuLySubmit}>
                mail: 
                <input type="text" name="mail" value={getInputs.mail} onChange={XuLyForm} placeholder="Email"/>
                <p></p>
                pass: 
                <input type="password" name="pass" value={getInputs.pass} onChange={XuLyForm} />
                <p></p>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default LoginViduB32;