import React,{useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import './Header.css';
import HeaderOption from './HeaderOption';
import Sidebar from './Sidebar';
import symbolImage from '../../assets/logo.png';
const Header = () => {
  const user = useSelector((state) => state.login.user);
  const isMobile = useMediaQuery('(max-width:600px)');

  const [active,setActive] = useState(true);
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  useEffect(() =>{
   
      setActive(!active);
    
  },[isDrawerOpen])

  const changeDrawerState = () =>{
    setIsDrawerOpen(false);
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
            <Avatar style={{cursor:'pointer'}} alt="me" src={user?.photoURL}>{user?.displayName[0].toUpperCase()}</Avatar>
          </div>
         
          :
          <div className='nav-bar'>
            <HeaderOption route="/" title="Home" />
            <HeaderOption route="/about" title="About" />
            <HeaderOption route="/tophospitals" title="Top Hospitals" />
            <HeaderOption route="/reviews" title="Reviews" />
            <HeaderOption route="/blog" title="Blogs" />
            <Avatar style={{cursor:'pointer'}} alt="me" src={user?.photoURL}>{user?.displayName[0].toUpperCase()}</Avatar>
          </div>
        }
       
    </div>
  )
}

export default Header


{/* <MenuIcon onClick={renderSidebar} style={{marginRight:'12px',cursor:'pointer'}}/> */}