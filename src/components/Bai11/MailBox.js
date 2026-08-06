function MailBox(props){
    const xx=props.xx;
    return(
        <div>
            <h1>Hallloooooooo</h1>
            {
                xx.length>0&&
                <h3>Ban co {xx.length} tin nhan moi</h3>
            }
        </div>
    )
}
export default MailBox;