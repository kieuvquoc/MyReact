function Vidu1B(props){
    let {data}=props
    function renderData(){
        if(data.length>0){
            return data.map((value)=>{
                return <li key={value.id}>
                    <p>{value.id}</p>
                    <p>{value.name}</p>
                </li>
            })
        }
    }
    return(
        <ul>
            {renderData()}
        </ul>
    )
}
export default Vidu1B