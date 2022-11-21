import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface Props {
    restaurantMealImg: string;
    restaurantLogo: string;
    restaurantName: string;
}

const RestaurantCard = ({ restaurantMealImg, restaurantLogo, restaurantName }: Props) => {
    return (
        <Card sx={{ maxWidth: 400, margin:'15px 0px' }}>
            <Paper sx={{backgroundColor:"rgba(255,255,255,0.3)"}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={restaurantMealImg}
                    alt={restaurantName}
                />
                <CardContent>
                    <img
                        style={{ display: "block", maxWidth: 100, margin: '0 auto' }}
                        src={restaurantLogo}
                        alt={restaurantName} />
                </CardContent>
            </Paper>
        </Card>
    )
}
export default RestaurantCard;