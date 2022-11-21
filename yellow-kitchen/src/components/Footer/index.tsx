import { Grid, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import PageLogo from "../PageLogo";

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: "#3F4255",
            '& *': {
                color: 'white',
                textDecoration: "none"
            },
            '& h6': {
                fontWeight: 700,
                marginBottom: "10px"
            }
        }}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={3}>
                    <PageLogo />
                </Grid>
                <Grid item sm={12} md={3}>
                    <Typography component="h6" variant="h6">About us</Typography>
                    <Typography href="#" display="block" component="a">Concept</Typography>
                    <Typography href="#" display="block" component="a">Franchise</Typography>
                    <Typography href="#" display="block" component="a">Business</Typography>
                    <Typography href="#" display="block" component="a">Restaurant signup</Typography>
                    <Typography href="#" display="block" component="a">For Investors</Typography>
                </Grid>
                <Grid item sm={12} md={3}>
                    <Typography component="h6" variant="h6">Get help</Typography>
                    <Typography href="#" display="block" component="a">Read FAQs</Typography>
                    <Typography href="#" display="block" component="a">Restaurants</Typography>
                    <Typography href="#" display="block" component="a">Specialities</Typography>
                    <Typography href="#" display="block" component="a">Sign up to deliver</Typography>
                    <Typography href="#" display="block" component="a">English</Typography>
                </Grid>
                <Grid item sm={12} md={3}>
                    <Typography component="h6" variant="h6">Contact us</Typography>
                    <Typography href="#" display="block" component="a">Yellow kitchen Paris 11</Typography>
                    <Typography href="#" display="block" component="a">69 avenue de la Republique 75011 Paris</Typography>
                    <Typography href="#" display="block" component="a">0800 111 126</Typography>
                    <Typography href="#" display="block" component="a">contact@yellowkitchens.com</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Footer;