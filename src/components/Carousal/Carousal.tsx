import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import "./Carousal.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
};

export default function Carousal() {
  return (
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-list-item"
  >
    <img style={{width:'100%',height:'400px'}} src={slide1}/>
    <img style={{width:'100%',height:'400px'}} src={slide2}/>
    <img style={{width:'100%',height:'400px'}} src={slide3}/>
  </Carousel>
  )
}

