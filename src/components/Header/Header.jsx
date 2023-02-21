import React,{useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logout from '../Logout';
import { Drawer } from '@mui/material';
import './Header.css';
import HeaderOption from './HeaderOption';
import Sidebar from './Sidebar';
import symbolImage from '../../assets/logo.png';
const Header = () => {
  const user = useSelector((state) => state.login.user);
  const isMobile = useMediaQuery('(max-width:600px)');


  // console.log(user);

  const [active,setActive] = useState(true);
  const [logoutFlag,setLogoutFlag] = useState(false);
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  useEffect(() =>{
    if(isDrawerOpen)
      setActive(true);
    else
      setActive(false);
    
  },[isDrawerOpen])

  const changeDrawerState = () =>{
    setIsDrawerOpen(false);
  }

  const handleLogout =() =>{
    setLogoutFlag(!logoutFlag);
  }
  
  return (
    <div className='header-container'>
        <img src={symbolImage} alt='' />
        {isMobile ?
          <div className='nav-bar'>
            <div onClick={() => setIsDrawerOpen(true)} className='hamburger-wrapper'>
              <div className={active? "activeHamburger" : "hamburger"} ></div> 
            </div>
              
            <Drawer 
              anchor='left'
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Sidebar onClick={changeDrawerState} />
            </Drawer>
            <Avatar onClick={handleLogout} style={{cursor:'pointer',backgroundColor:'white',width: '35px', height: '35px'}} alt="me" src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" ></Avatar>
          </div>
         
          :
          <div className='nav-bar'>
            <HeaderOption route="/" title="Home" />
            <HeaderOption route="/about" title="About" />
            <HeaderOption route="/tophospitals" title="Top Hospitals" />
            <HeaderOption route="/reviews" title="Reviews" />
            <HeaderOption route="/blog" title="Blogs" />
            <Avatar onClick={handleLogout} style={{cursor:'pointer',backgroundColor:'white',width: '32px', height: '32px'}} alt="me" src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" ></Avatar>
          </div>
        }

        {logoutFlag && <Logout /> }
       
    </div>
  )
}

export default Header


{/* <MenuIcon onClick={renderSidebar} style={{marginRight:'12px',cursor:'pointer'}}/> */}