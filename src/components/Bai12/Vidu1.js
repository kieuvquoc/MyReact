import ArrVD1 from './ArrVD1'
import ObjVD1 from './ObjVD1'

const arr=["ip1","ip2","ip3","ip4","ip5"]
const obj={
    name:"Quoc",
    age:21
}

const Vidu1B12=()=> {
    return(
        <div>
        <ArrVD1 arr={arr}/>
        <ObjVD1 obj={obj}/>
        </div>
    )   
}
export default Vidu1B12;