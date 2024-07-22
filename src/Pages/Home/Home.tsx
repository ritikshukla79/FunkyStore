import Button from '@mui/material/Button';
import home from '../../assets/home.png';
import '../Home/Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <img className='image-home' src={home} />
      <Button variant="contained" size="medium" className='shop-now'
              onClick={() => {navigate('/products')}}>
          Shop Now
      </Button>
    </div>
  );
}

export default Home;