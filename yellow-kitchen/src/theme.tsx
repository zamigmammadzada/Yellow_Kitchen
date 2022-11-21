import { createTheme } from "@mui/material";
import { blue, green, grey, purple, red } from "@mui/material/colors";
import { ThemeColorModes } from "./utils/types";


export const createCustomizedTheme = (mode: ThemeColorModes) => createTheme({
    palette: {
        mode: mode,
        primary: {
            main: mode === 'light' ? blue[300] : "#FFE145"
        },
        secondary: {
            main: mode === 'light' ? grey[50] : grey[900]
        }
    }
})

