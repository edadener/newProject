import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Part2: FC = (): JSX.Element => {
    return (
        <Grid item xs={12} p={2}>
            <Box textAlign="center">
                <Typography variant="h2" fontWeight="bold">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h2" fontWeight="bold">
                    Lorem ipsum dolor sit.
                </Typography>
                <Typography fontWeight="bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, saepe!
                </Typography>
                <Typography fontWeight="bold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia!
                </Typography>
                <Typography fontWeight="bold">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Typography>
            </Box>
        </Grid>
    )
}
export default Part2;