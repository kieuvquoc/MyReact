import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Vidu2B from './Vidu2B'

function Vidu2A(){
    const[getData,setData]=useState('')

    const obj={
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }
    let JsonString=JSON.stringify(obj);

    useEffect(()=>{
        setData(JsonString)
    },[])

    return(
        <>
        {<Vidu2B data={getData}></Vidu2B>}
        </>
    )

}
export default Vidu2A