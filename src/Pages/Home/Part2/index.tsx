import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Part2: FC = (): JSX.Element => {
    return (
        <Grid item xs={12} p={2}>
            <Box textAlign="center">
                <Typography variant="h2" fontWeight="bold">
                    Neden Pandans Akademi?
                </Typography>
                <Typography fontWeight="bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, saepe!
                </Typography>
                <Typography fontWeight="bold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia!
                    <a href="#" style={{ color: "#000" }}> devamı...</a>
                </Typography>
            </Box>
        </Grid>
    )
}
export default Part2;