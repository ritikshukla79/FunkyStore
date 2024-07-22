import "./Header.css";
import logo from "../../assets/logo.png";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from '@mui/icons-material/Home';
import { Tooltip } from "@mui/material";
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  return (
    <header color="primary" >
      <img src={logo} alt="Logo" />
      <Tooltip title="Home" placement="bottom">
      <HomeIcon color="primary" className="iconHome" onClick={() => {navigate('/')}}/>
      </Tooltip>
      <Tooltip title="Contact us" placement="bottom">
        <PhoneOutlinedIcon className="iconPhone " color="primary" />
      </Tooltip>
      <Tooltip title="Log in" placement="bottom">
        <LoginIcon className="iconLogin" color="primary" />
      </Tooltip>
    </header>
  );
}

export default Header;
