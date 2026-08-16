import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Vidu1B from './Vidu1B'
function Vidu1A(){
    const[getData,setData]=useState([])
    const[getLoading,setLoading]=useState(true);
    
    useEffect(()=>{
        async function layData(){
            try{
                let reponse=await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(reponse.data)
            }catch(error){
                console.log(`Da xay ra loi `,error);
            }finally{
                setLoading(false);
            }
        }
    },[])
    return(
        <>
        {<Vidu1B data={getData}></Vidu1B>}
        </>
    )
}
export default Vidu1A;