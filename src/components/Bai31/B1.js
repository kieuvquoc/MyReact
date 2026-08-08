function B1(props){
    function render(){
        let arr = props.arrB1
        if(arr.length>0){
            return arr.map((value,key)=>{
                return(
                    <li key={value.id}>
                        <p>ID: {value.id}</p>
                        <p>Name: {value.name}</p>
                        <p>Username: {value.username}</p>
                        <p>Email: {value.email}</p>
                        <p>Address: {value.address.street}, {value.address.suite}</p>
                        <p>Phone: {value.phone}</p>
                        <p>Website: {value.website}</p>
                        <p>Company: {value.company.name} - {value.company.catchPhrase}</p>
                    </li>
                )
            })
        } 
    }
    return(
        <div>
            <ul>{render()}</ul>
        </div>
    )
}
export default B1;