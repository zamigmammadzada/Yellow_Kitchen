import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, SxProps, Theme } from '@mui/material';
import Menu from '@mui/material/Menu';
import * as React from 'react';

interface Props {
    children: React.ReactElement[];
    sx: SxProps<Theme> | undefined;
}

export default function BurgerMenu({ children, sx }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                    mx: 1,
                    ...sx
                }}
                onClick={handleClick}
                aria-controls={open ? 'burger-menu' : undefined}
                id="burger-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="burger-menu"
                aria-labelledby="burger-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {children}
            </Menu>
        </div >
    );
}
