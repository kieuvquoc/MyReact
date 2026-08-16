import React, {useState,useEffect} from 'react'
import axios from 'axios'

function AxiosEx(){
    const [getData,setData]=useState([])
    const [getLoading,setLoading]=useState(true);
    const [getResponse,setResponse]=useState('');

    const [getInput,setInput]=useState({
        post:"",
        delete:""
    })

    useEffect(()=>{
        layData();
    },[])

    async function layData(){
        try{
            let response=await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response);
            setData(response.data);
        }
        catch(error){
            console.log(`Da xay ra loi khi layData`+error);
        }     
        finally{
            setLoading(false);
        }
    }

    const changeInput=(e)=>{
        let name =e.target.name;
        let value=e.target.value;
        setInput(state=>({...state,[name]:value}))
    }

    async function HandlePost(e){
        e.preventDefault();
        
        const data={
            name:getInput.post
        }
        try{
            const response=await axios.post("https://jsonplaceholder.typicode.com/users",data)
            console.log(response);
            setResponse(`Da them thanh cong id ${response.data.id}`);
            setData(data=>([...data,response.data]))
            setInput(input=>({...input,post:""}))
        }
        catch(error){
            console.error("Da xay ra loi ",error);
            setResponse(`Da xay ra loi`);
        } 
    }
    async function HandleDelete(e){
        e.preventDefault();

        const data=getInput.delete
        try{
            let response=await axios.delete(`https://jsonplaceholder.typicode.com/users/${data}`)
            console.log(response);
            setResponse(`Da xoa thanh cong id ${response.data.id}`);
            setData(prevdata => prevdata.filter(item => item.id !== Number(data)));
            setInput(input=>({...input,delete:""}))
        }
        catch(error){
            console.log("da xay ra loi "+error);
            setResponse(`Da xay ra loi`);
        }
    }

    function renderData(){
        if(getLoading){
            return <p>dang tai du lieu</p>
        }
        if(getData.length>0){
            return getData.map((value,key)=>{
                return(
                    <li key={key}>
                        <p>{value.id}</p>
                        <p>{value.name}</p>
                    </li>
                )
            })
        }
    }

    return (
        <>
        <ul>
            {renderData()}
        </ul>
        <form onSubmit={HandlePost}>
            <input type="text"
            name="post" value={getInput.post} onChange={changeInput}/>
            <button type="submit">Them</button>
        </form>
        <form onSubmit={HandleDelete}>
            <input type="text"
            name="delete" value={getInput.delete} onChange={changeInput}/>
            <button type="submit">Xoa</button>
        </form>
        </>
    )
}
export default AxiosEx