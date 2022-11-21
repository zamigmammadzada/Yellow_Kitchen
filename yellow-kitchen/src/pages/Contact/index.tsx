import PageContainer from "../../components/PageContainer";
import Grid from '@mui/material/Grid';
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import SendOutlined from "@mui/icons-material/SendOutlined"
import * as yup from "yup"

const validationSchema = yup.object({
    name: yup.string().required('yazmalisan'),
    email: yup.string().email('Enter a valid email').required('yazmalisan'),
    mesaj: yup.string().required('yazmalisan').min(30, 'minimum 30 simvol olmalidir')

})

const Contact = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            mesaj: ''
        },
        validationSchema,
        onSubmit: (fields) => {
            console.log(fields)
            formik.resetForm()
        }
    })

    return (
        <PageContainer>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ px: 5, pt: 5, justifyContent: 'center' }}>
                    <Grid item xs={12}>
                    <Typography textAlign="center" variant="h3">Contact with us</Typography>
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <TextField
                            fullWidth
                            rows={13}
                            multiline
                            name="mesaj"
                            label="Mesaj"
                            value={formik.values.mesaj}
                            onChange={formik.handleChange}
                            error={formik.touched.mesaj && Boolean(formik.errors.mesaj)}
                            helperText={formik.touched.mesaj && formik.errors.mesaj}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={7}>
                        <Button type="submit" color="primary" variant="contained" fullWidth startIcon={<SendOutlined />}>Send a message</Button>
                    </Grid>
                </Grid>
            </form>
        </PageContainer>
    )
}
export default Contact;