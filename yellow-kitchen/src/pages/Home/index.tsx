import PageContainer from "../../components/PageContainer";
import Grid from '@mui/material/Grid';
import { Box, Button, Paper, Stack, Typography, Container } from "@mui/material";
import food from '../../assets/img/home/plate.png'
import rucola from '../../assets/img/home/rucola.png'
import paris from '../../assets/img/home/paris.png'
import delivery from '../../assets/img/home/delivery.png'
import timeEat from '../../assets/img/home/time-eat.png'
import RestaurantCarousel from "../../components/RestaurantCarousel";
import SpecialitiesCarousel from "../../components/SpecialitiesCarousel";
import lemons from "assets/img/bg.png"
import YellowLemon from "components/Lemon";

const Home = () => {
    return (
        <PageContainer>
            <>
                <Grid container spacing={2} sx={{ px: 5 }}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography sx={{
                                mt: {
                                    xs: 5,
                                    sm: 15
                                },
                                mb: 3
                            }} variant="h3">Your Food court at home</Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={5} md={4}>
                                <Box sx={{
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: "primary.main",
                                    borderRadius: 1
                                }}>
                                    <Typography textAlign="center" variant="h5" component="h5">Delivery</Typography>
                                    <Typography textAlign="center" variant="body2">Order in</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={5} md={4}>
                                <Box sx={{
                                    borderWidth: 2,
                                    borderStyle: 'solid',
                                    borderColor: "primary.main",
                                    borderRadius: 1
                                }}>
                                    <Typography textAlign="center" variant="h5" component="h5">Take out</Typography>
                                    <Typography textAlign="center" variant="body2">Grab and go</Typography>
                                </Box>

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{
                            position: "relative"
                        }}>
                            <Box sx={{
                                position: "absolute",
                                bottom: 10,
                                left: -100,
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <img style={{
                                    width: 150
                                }} src={rucola} alt="" />
                            </Box>
                            <img style={{
                                width: '100%'
                            }} src={food} alt="" />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    mt: 15,
                    boxShadow: "0 0 10px #eee",
                    width: 'fit-content',
                    py: 1,
                    pl: {
                        xs: 5,
                        md: 10,
                    }
                }}>
                    <Grid item xs={12} sm={4} md={3}>
                        <Stack spacing={2} direction="row">
                            <img src={timeEat} alt="" />
                            <Typography variant="body2">Only fresh and French products</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Stack spacing={2} direction="row">
                            <img src={delivery} alt="" />
                            <Typography variant="body2">Free delivery from 29 euros</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Stack spacing={2} direction="row">
                            <img src={paris} alt="" />
                            <Typography variant="body2">Only fresh and French products</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container sx={{ padding: '0 40px', marginTop: 5, marginBottom: 5 }}>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 5, marginBottom: 5
                    }}>
                        <Typography variant="h4">Restaurants</Typography>
                        <Button variant="contained" color="secondary">show all</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <RestaurantCarousel />
                    </Grid>
                </Grid>
                <Grid container sx={{ padding: '0 40px', marginTop: 5, marginBottom: 5 }}>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 5, marginBottom: 5
                    }}>
                        <Typography variant="h4">Specialities</Typography>
                        <Button variant="contained" color="secondary">show all</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <SpecialitiesCarousel />
                    </Grid>
                </Grid>
                <Grid sx={{
                    background: `url('${lemons}') no-repeat`,
                    backgroundSize: 'cover',
                    padding: "30px 0px 100px",
                    display: 'flex',
                    justifyContent: "center"
                }}>
                    <Container maxWidth="sm" sx={{ display:"flex", justifyContent:"space-between", flexWrap:'wrap', gap:{
                        xs:'60px 0px'
                    } }}>
                        <YellowLemon text="1" label="kitchen" />
                        <YellowLemon text="2" label="specialties" />
                        <YellowLemon text="3" label="deniz resto" />
                        <YellowLemon text="4" label="transport costs" />
                    </Container>
                </Grid>
            </>
        </PageContainer>
    )
}
export default Home;