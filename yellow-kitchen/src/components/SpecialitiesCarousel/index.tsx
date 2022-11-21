import Carousel from "react-multi-carousel";
import Box from "@mui/material/Box"
import "react-multi-carousel/lib/styles.css";
import veganIcon from "../../assets/img/home/specialities/vegan.png";
import burgerIcon from "../../assets/img/home/specialities/burger.png";
import RestaurantCard from "./SpecialitiesCard";
import SpecialitiesCard from "./SpecialitiesCard";

const items = [
    {
        key: 1,
        icon: veganIcon,
        specialityName: 'Vietnamese',
    },
    {
        key: 2,
        icon: burgerIcon,
        specialityName: 'Believe',
    },
    {
        key: 3,
        icon: burgerIcon,
        specialityName: "santimuka",
    },
    {
        key: 4,
        icon: burgerIcon,
        specialityName: 'baki restoran',
    },
    {
        key: 5,
        icon: veganIcon,
        specialityName: 'rufan resto',
    },
    {
        key: 6,
        icon: burgerIcon,
        specialityName: 'rufan mall',
    },
]

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 10,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    }
}

const SpecialitiesCarousel = () => {
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
                {items.concat(items, items, items, items, items).map((item) => <SpecialitiesCard {...item} />)}
            </Carousel>
        </Box>
    )
}
export default SpecialitiesCarousel;