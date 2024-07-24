import "./Header.css";
import logo1 from "../../assets/logo1.jpg";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import { Badge, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartItems } from "../../Reduxe/slice/cartSlice/cartSlice.selector";

function Header() {
  const navigate = useNavigate();
  const cartItem = useSelector(cartItems);

  return (
    <header color="primary">
      <img
        src={logo1}
        alt="Logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <Tooltip title="Home" placement="bottom">
        <HomeIcon
          className="iconHome"
          onClick={() => {
            navigate("/");
          }}
        />
      </Tooltip>
      <Tooltip title="Contact us" placement="bottom">
        <PhoneOutlinedIcon className="iconPhone " />
      </Tooltip>
      <Tooltip title="Cart" placement="bottom">
        <Badge badgeContent={cartItem.length} color="info" className="iconCart">
          <ShoppingCartTwoToneIcon
            onClick={() => {
              navigate("/cart");
            }}
          />
        </Badge>
      </Tooltip>
      <Tooltip title="Log in" placement="bottom">
        <LoginIcon className="iconLogin" />
      </Tooltip>
    </header>
  );
}

export default Header;
