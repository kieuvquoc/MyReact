const ErrorRegis=(props)=>{
    let {getErr}=props;
    function Error(){
        if(Object.keys(getErr).length>0){
        return Object.keys(getErr).map((value,key)=>{
            return(
                <li key={key}>{getErr[value]}</li>
            )
        })
    }
    }
    return(
        <ul>
            {Error()}
        </ul>
    )
}
export default ErrorRegis