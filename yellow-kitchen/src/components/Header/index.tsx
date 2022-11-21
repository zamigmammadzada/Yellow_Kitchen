import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ColorModeContext } from "../../context/ColorModeContext";
import PageLogo from '../PageLogo';
import BurgerMenu from './Menu';
import NavigationLink from './Navigation/NavigationLink';


const Header = () => {
    const colorMode = useContext(ColorModeContext)
    return (
        <AppBar color='secondary' position='sticky'>
            <Toolbar>
                <PageLogo />
                <Box sx={{
                    flexGrow: 1,
                    display: {
                        xs: 'none',
                        sm: 'block'
                    },
                    '& > *': {
                        margin: {
                            sm: '0 10px',
                            md: '0 20px'
                        },
                        color: 'primary.main',
                        textUnderlineOffset: 5
                    }
                }}>
                    <NavigationLink to="/" pageName="Home" isEnd />
                    <NavigationLink to="/about" pageName="About" />
                    <NavigationLink to="/contact" pageName="Contact" />
                </Box>
                <IconButton sx={{
                    mx: 1,
                }} color="primary" onClick={() => {
                    colorMode.toggleColorMode()
                }}>{colorMode.mode === 'dark' ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}</IconButton>
                <Button sx={{
                    mx: 1,
                    display: {
                        xs: "none",
                        sm: 'block'
                    }
                }} color="inherit">Login</Button>
                <BurgerMenu sx={{
                    display: {
                        xs: 'inline-flex',
                        sm: 'none',
                    }
                }}>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Profile</MenuItem>
                </BurgerMenu>
            </Toolbar>
        </AppBar>
    )
}
export default Header;