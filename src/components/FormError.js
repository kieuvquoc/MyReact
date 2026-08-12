function Error(props){
    function XuLyLoi(){
        let getErr=props.getErr //{getErr}=props
        if(Object.keys(getErr).length>0){
            return Object.keys(getErr).map((key,index)=>{
                return(
                    <li key={index}>{getErr[key]}</li>
                )
            })
        }
        // if(getErr.length>0){
        //     return getErr.map((value,key)=>{
        //         return(
        //             <li key={key}>{value}</li>
        //         )
        //     })
        // }
    }
    return(
        <ul>
            <li>{XuLyLoi()}</li>
        </ul>
    )
}
export default Error;