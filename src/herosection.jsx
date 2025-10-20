import { useContext } from "react";
import { mycontext } from "./App";
import'./App.css'



function Hero(){

    let{name,setName,user,setUser}=useContext(mycontext)

    const handlechang=(event)=>{
      setName(event.target.value);
    }
    const setwala=()=>{
      setUser(!user)
   
    }
    return(
          <>
        <div className="loginsection ">
          <div>
             <div className="text-start">
              <h3 className="loginh3">LOGIN</h3>
               </div>
          </div>
 
    
  <div className="maincontent  text-start m-5">
    <div>
      <p className={ user ? 'parant': 'para'}>you login as {name}</p>
      <p className={user? 'userpara':'parant' }>Enter your name</p>
      <input type="text" name="username" id="userid" value={name} onChange={handlechang}  placeholder="enter your name "  />
      <br />
      <br />
      <button onClick={setwala} id="loginbtn">Login</button>
    </div>

   
  </div>
   
</div>
   <div className="profilebox">
     
     <div className="text-start m-5">
      <h3>Profile</h3>
     </div>
     
     <div className=" user ? profilesection:pfo m-5 ">
       <div>
        <h4 > user name:{name}</h4>
       </div>
     </div>

   </div>
</>
        
    )
}

export default Hero;