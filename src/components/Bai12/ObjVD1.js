const ObjVD1 =(props)=>{
    function renderObjVD1(){
        let {obj}=props // Let obj=props.obj
        if(Object.keys(obj).length>0){
            return Object.keys(obj).map((key)=>{
                return(
                    <li key={key}>
                        {obj[key]}
                    </li>
                )
            })
        }
    }
    return (
        <div>
            Tra theo obj
            <ul>
                {renderObjVD1()}
            </ul>
        </div>
    )
}
export default ObjVD1;