function ArrVD1(props){
    function renderArr(){
        let {arr}=props // Let arr=props.arr
        if(arr.length>0){
            return arr.map((value,key)=>{
                return(
                    <li key={key}>
                        {value}
                    </li>
                )
            })
        }
    }
    return(
        <div>
            tra theo array
            <ul>
                {renderArr()}
            </ul>
        </div>
    )
}
export default ArrVD1;