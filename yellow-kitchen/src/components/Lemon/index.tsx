import { Typography } from "@mui/material";
import Box from "@mui/material/Box"

interface Props {
    text: string;
    label: string;
}

const YellowLemon = ({ text, label }: Props) => {
    return (
        <Box sx={{
            width: '100px',
            height: '100px',
        }}>
            <Box sx={{
                width: '100px',
                height: '100px',
                border: "2px solid #FFE145",
                position: "relative",
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                zIndex: 5,
                borderRadius: '50%',
                "&::before": {
                    content: '""',
                    position: "absolute",
                    borderRadius: '50%',
                    zIndex: -1,
                    width: 'inherit',
                    backgroundColor: "#FFE145",
                    bottom: '-20px',
                    height: '100px'
                }
            }}>
                <Typography fontWeight={700} sx={{
                    fontSize: 40,
                    paddingTop:'30px'
                }}>{text}</Typography>
            </Box>
            <Typography fontWeight={700} sx={{
                fontSize: 20,
                textAlign: "center",
                marginTop:'20px'
            }}>{label}</Typography>
        </Box>
    )
}
export default YellowLemon;