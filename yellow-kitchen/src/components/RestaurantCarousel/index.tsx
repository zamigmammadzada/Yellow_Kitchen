import Carousel from "react-multi-carousel";
import Box from "@mui/material/Box"
import "react-multi-carousel/lib/styles.css";
import restaurantMealImg from "../../assets/img/home/restaurants/meal.png";
import restaurantLogo from "../../assets/img/home/restaurants/vietnamese.png";
import RestaurantCard from "./RestaurantCard";

const items = [

    {
        key: 1,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: 'Vietnamese',
    },
    {
        key: 2,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: 'Believe',
    },
    {
        key: 3,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: "santimuka",
    },
    {
        key: 4,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: 'baki restoran',
    },
    {
        key: 5,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: 'rufan resto',
    },
    {
        key: 6,
        restaurantMealImg,
        restaurantLogo,
        restaurantName: 'rufan mall',
    },
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

const RestaurantCarousel = () => {
    return (
        <Box sx={{
            '& ul': {
                gap: "20px"
            }
        }}>
            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                className=""
            >
                {items.map((item) => <RestaurantCard {...item} />)}
            </Carousel>
        </Box>
    )
}
export default RestaurantCarousel;