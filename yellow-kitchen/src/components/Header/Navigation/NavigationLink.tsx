import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";


interface Props {
    to: string;
    pageName: string;
    isEnd?: boolean;
}


const NavigationLink = ({ to, pageName, isEnd = false }: Props) => {
    return (
        <NavLink
            end={isEnd}
            style={({ isActive }: { isActive: boolean; }) => isActive ? {textDecoration:'underline'} : { textDecoration: 'none' }}
            to={to}>
            <Typography component="span" sx={{ color: 'primary.main' }}>{pageName}</Typography>
        </NavLink>
    )
}

export default NavigationLink;