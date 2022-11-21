import Footer from '../Footer';
import Header from '../Header';
import styles from './index.module.css'
import Paper from  "@mui/material/Paper"
interface Props {
    children: React.ReactElement;
}

const PageContainer = ({ children }: Props) => {
    return (
        <Paper sx={{ borderRadius: 0, boxShadow:'none' }}>
            <Header />
            <main style={{padding:"20px 0 60px"}}>
                {children}
            </main>
            <Footer />
        </Paper>
    )
}
export default PageContainer;