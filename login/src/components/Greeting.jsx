const Greeting = (props)=>{
    const UserGreeting= () =>{return <h1 className="p-5">Welcome</h1>}
    const GuestGreeting= () =>{return <h1 className="p-5">Please Sign Up</h1>}

    let show= <GuestGreeting />

    if(props.LogIn){
        show= <UserGreeting />
    }
    return(
        <div>
            {show}
        </div>
    )
}
export default Greeting