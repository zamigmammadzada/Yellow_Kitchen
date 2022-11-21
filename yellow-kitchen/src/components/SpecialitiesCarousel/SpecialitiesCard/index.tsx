import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
    icon: string;
    specialityName: string;
}

const SpecialitiesCard = ({ icon, specialityName }: Props) => {
    return (
        <Card sx={{ maxWidth: 400 ,margin:'10px 0'}}>
            <Paper elevation={10} sx={{ padding:'10px 0' }}>
                <img style={{ display: 'block', maxWidth: 50, margin: '0 auto 5px' }} src={icon} alt={specialityName} />
                <Typography variant='body2' textAlign="center" >{specialityName}</Typography>
            </Paper>
        </Card>
    )
}
export default SpecialitiesCard;