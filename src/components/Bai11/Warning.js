const Warning = (props) =>{
    if(!props.warning){
        return (
            <div>
                {props.children}
            </div>
        )
    }
    else return(
        <div>
            Warning {props.children}
        </div>
    )
}
export default Warning;