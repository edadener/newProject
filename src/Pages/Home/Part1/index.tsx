import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Part1: FC = (): JSX.Element => {
    return (
        <Grid item xs={12}>
            <video src="https://marsathletic-p.mncdn.com/macfit_reklam_v01.mp4" autoPlay loop muted style={{ width: "100%" }} />
            <Box sx={{ position: "absolute", top: "60%", left: "30%", textAlign: "center" }}>
                <Typography variant="h2" color="#fff">
                    Lorem ipsum dolor sit.
                </Typography>
                <Typography variant="h2" color="#fff">
                    Lorem ipsum dolor sit.
                </Typography>
                <Typography variant="h6" color="#fff">
                    Lorem ipsum dolor sit amet.
                </Typography>
            </Box>
        </Grid>
    )
}
export default Part1;