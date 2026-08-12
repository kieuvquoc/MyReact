const ErrorLogin=(props)=>{
    let {Err}=props
    const Error=()=>{
        if(Object.keys(Err).length>0){
        return Object.keys(Err).map((value,index)=>{
            return(
                <li key={index}>{Err[value]}</li>
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
export default ErrorLogin