const SignIn = ({signedIn},{setSignedIn}) => {
    return(
        <div>
            
            <button onClick={()=>setSignedIn(!signedIn)}>{signedIn?<span>Sign in</span>:<span>Sign out</span>}</button>

            
        </div>
    )
}
export default SignIn;