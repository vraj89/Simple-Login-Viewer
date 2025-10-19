import './App.css'
import { useContext } from 'react';
import { mycontext } from './App.jsx';

function Header(){
   
    const {name,setName,user,setUser}=useContext(mycontext)
   
    return(
    
        <header className='hwala' >
            <div >My app</div>
            <div className={user?'userhide':'userdip'}> {name}</div>

        </header>

    )
}

export default Header;