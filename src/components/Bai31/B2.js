const B2=(props)=>{
    let obj=props.objB2
    return(
        <div>
            <p>ID: {obj.id}</p>
            <p>Name: {obj.name}</p>
            <p>Username: {obj.username}</p>
            <p>Email: {obj.email}</p>
            <p>Address: {obj.address.street}, {obj.address.suite}</p>
            <p>Phone: {obj.phone}</p>
            <p>Website: {obj.website}</p>
            <p>Company: {obj.company.name} - {obj.company.catchPhrase}</p>
        </div>
    )
}
export default B2;