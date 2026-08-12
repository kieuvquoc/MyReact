import React , {useState} from 'react';
import ErrorRegis from './ErrorRegis'

function RegisViduB32(props){

    const [ getInputs, setInputs ]=useState({
        mail:"",
        pass:"",
        avatar:null,
        sex:""
    })

    const [ getErr, setErr ]=useState({})

    function XuLyFile(e){
        let files=e.target.files[0]
        setInputs(state=>({...state,avatar:files}))
    }

    function XuLyForm(e){
        const name=e.target.name;
        const value=e.target.value;

        setInputs(state=>({...state,[name]:value}))
    }

    function XuLySubmit(e){
        e.preventDefault();
        
        let ErrSubmit={};
        let kiemtra=true;

        if(!isEmail(getInputs.mail)){
            ErrSubmit.mail="Chua nhap mail";
            kiemtra=false;
        }

        if(getInputs.pass==""){
            ErrSubmit.pass="Chua nhap pass";
            kiemtra=false;
        }

        if(getInputs.avatar==null){
            ErrSubmit.avatar="Chua chon avatar";
            kiemtra=false;
        } else {
            // console.log(getInputs.avatar)

            let getSize=getInputs.avatar.size;

            let getNameFile=getInputs.avatar.name;
            let tachFile = getNameFile.split('.').pop().toLowerCase();

            let ArrDuoiFile = ["png", "jpg", "jpeg"];

            if(getSize>1024*1024){
                ErrSubmit.avatar="kich thuoc qua lon"
                kiemtra=false;
            } else if(!ArrDuoiFile.includes(tachFile)){
                ErrSubmit.avatar="sai dinh dang"
                kiemtra=false;
            }
        }

        if(getInputs.sex==""){
            ErrSubmit.sex="Chua chon gioi tinh";
            kiemtra=false;
        }

        if(!kiemtra){
            setErr(ErrSubmit)
        } else {
            setErr({})
            alert("Register thanh cong");
            let luu={
                mail:getInputs.mail,
                pass:getInputs.pass
            }
            localStorage.setItem("DangKi", JSON.stringify(luu));
            setTimeout(() => {
                setInputs({
                    mail:"",
                    pass:"",
                    avatar:null,
                    sex:""
                })
            }, 5000);
        }
    }

    let arrSex=[
        {
            "id":"",
            "name":"vui long chon"
        },
        {
            "id":"1",
            "name":"Male"
        },
        {
            "id":"2",
            "name":"Famale"
        }
    ]

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        return regex.test(email);
    }

    function selectSex(){
        if(arrSex.length>0){
            return arrSex.map((value,index)=>{
                return(
                    <option key={index} value={value.id}>{value.name}</option>
                )
            })
        }
    }


    return(
        <>
        {<ErrorRegis getErr={getErr}></ErrorRegis>}
        <form onSubmit={XuLySubmit} encType="multipart/form-data">
            <input type="text" name="mail" value={getInputs.mail} onChange={XuLyForm} placeholder="Email"/>
            <p></p>
            <input type="password" name="pass" value={getInputs.pass} onChange={XuLyForm}/>
            <p></p>
            <input type="file" name="avatar" onChange={XuLyFile}/>
            <p></p>
            <select name="sex" value={getInputs.sex} onChange={XuLyForm}>
                {selectSex(arrSex)}
            </select>
            <button type="submit">Register</button>
        </form>
        </>
    )
}
export default RegisViduB32