import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";


const Salon: FC = (): JSX.Element => {

    return (
        <Grid container>
            <Header />
            <Grid item xs={12}>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <Typography>Salon</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Salon;