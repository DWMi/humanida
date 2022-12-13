import LOGO from '../assets/LOGO.svg'
import{ HiUserCircle} from 'react-icons/hi2';
import './styles/header.css'


const Header=()=>{

    return(
        <header className="header" >
        <div className='headerCon'>

            <div className='logo' >
                <img src={LOGO} alt='just a logo'/>
            </div>
            <div className='iconCon'>
                <HiUserCircle 
                size={30}
                color={'#A2B8C8'}
                    className='icon'
                />
            </div>
        </div>
        </header>

    )
    
}


export default Header

