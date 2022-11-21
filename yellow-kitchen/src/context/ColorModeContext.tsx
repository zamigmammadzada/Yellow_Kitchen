import { createContext, useState, useMemo } from "react";
import { ThemeColorModes } from "../utils/types";
import { ThemeProvider } from "@mui/material";
import { createCustomizedTheme } from "../theme";

interface Props {
    children: React.ReactElement;
}

interface IColorModeContext {
    toggleColorMode: () => void;
    mode: ThemeColorModes;
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => { },
    mode: 'light'
})

const ColorModeContextProvider = ({ children }: Props) => {
    const [mode, setMode] = useState<ThemeColorModes>('light')

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((pre) => pre === 'light' ? 'dark' : 'light')
        },
        mode
    }), [mode])

    const theme = useMemo(() => createCustomizedTheme(mode), [mode])

    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
export default ColorModeContextProvider;