import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useContext } from "react"
import { ColorModeContext } from "../../context/ColorModeContext"

const PageLogo = () => {
    const colorMode = useContext(ColorModeContext)
    return <Box sx={{ flexGrow: 1 }}>
        <Typography
            sx={{
                fontWeight: 700,
                position: "relative",
                color: colorMode.mode === "dark" ? '#e8e8e8' : 'black',
                letterSpacing: 2,
                zIndex: 10
            }}>
            yellowkitchen
            <Typography component="span" sx={{
                height: 10,
                bgcolor: "#FFE145",
                width: 60,
                position: 'absolute',
                left: 0,
                bottom: 0,
                zIndex: -1
            }}></Typography></Typography>
    </Box>
}

export default PageLogo;