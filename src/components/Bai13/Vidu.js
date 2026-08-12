import React , { useState , useEffect } from 'react'

const Vidu =(props)=>{
    const [getItem,setItem] = useState("")

    const [getItem2,setItem2] = useState("")

    const [getTextArea, setTextArea] = useState("")

    const [getSelect, setSelect] = useState("")

    const [getIsGoing, setIsGoing] = useState(true)

    const [getIsGuest, setIsGuest] = useState(2)

    const [ getTime, setTime] = useState("hi, tui kiem tra set value = null/underfined")

    const [getEr1,setEr1] = useState("")

    const [getEr2,setEr2] = useState("")

    const [getEr3, setEr3] = useState("")

    const [getEr4, setEr4] = useState("")

    const [getEr5, setEr5] = useState("")

    const [getEr6, setEr6] = useState("")

    function thaydoi1(e){
        setItem(e.target.value);
    }

    function thaydoi2(e){
        setItem2(e.target.value);
    }

    function thaydoi3(e){
        setTextArea(e.target.value);
    }

    function thaydoi4(e){
        setSelect(e.target.value);
    }

    function RenderList(e){
        if(e.target.type==="checkbox"){
            setIsGoing(e.target.checked)
        } else setIsGuest(e.target.value)
    }

    useEffect(()=>{
        const time = setTimeout(()=>{
            setTime("")
        },10000)

        return()=>clearTimeout(time);
    },[])

    function submitForm(e){
        e.preventDefault();
        
        if(getItem==""){
            setEr1("Nhap input1")
        } else setEr1("")

        if(getItem2==""){
            setEr2("Nhap input2")
        } else setEr2("")

        if(getTextArea==""){
            setEr3("Nhap textArea")
        } else setEr3("")

        if(getSelect==""){
            setEr4("Chua chon")
        } else setEr4("")

        if(!getIsGoing){
            setEr5("Chua chon")
        } else setEr5("")

        if(getIsGuest==""){
            setEr6("Chua chon")
        } else setEr6("")

        if( getItem!=""&&getItem2!=""&&getTextArea!=""&&getSelect!=""&&getIsGoing!=""&&getIsGuest!=""){
            console.log("Submit thanh cong")
        }
    }

    return(
        <>
            <h1>Xu ly form</h1>
            <form onSubmit={submitForm}>

                <input type="text" value={getItem} onChange={thaydoi1}/>
                <p>{getEr1}</p>
                <input type="text" value={getItem2} onChange={thaydoi2}/>
                <p>{getEr2}</p>

                <textarea type="text" value={getTextArea} onChange={thaydoi3}></textarea>
                <p>{getEr3}</p>

                <select value={getSelect} onChange={thaydoi4}>
                    <option value="">Chon di</option>
                    <option value="1">Da Lat</option>
                    <option value="2">Da Nang</option>
                </select>
                <p>{getEr4}</p>

                <label>Is going</label>
                  <input type="checkbox" name="Is going" checked={getIsGoing} onChange={RenderList}/>
                  <p>{getEr5}</p>

                <label>Is guest</label>
                  <input type="number" name="Is guest" value={getIsGuest} onChange={RenderList}/>
                  <p>{getEr6}</p>

                <label>Test null value:</label>
                <input type="text" value={getTime} onChange={(e) => setTime(e.target.value)} />

                <button type="submit">gui</button>
            </form>
        </>
   )
}
export default Vidu;