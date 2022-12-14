import LOGO from '../assets/LOGO.svg'
import{ HiUserCircle} from 'react-icons/hi2';
import './styles/header.css'


const Header=()=>{
 

    return(
        <header className="header" >
        <div className='headerCon'>
            <div className='logo' >
                <img src={LOGO} alt='just a logo'  
                    className='icon'
                    onClick={()=>window.location.href="/"}/>
            </div>
            <div className='iconCon'>
                <HiUserCircle 
                className='avatar'
                size={30}
                color={'#A2B8C8'}
                />
            </div>
        </div>
        </header>

    )
    
}


export default Header

