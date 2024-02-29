import { FC } from "react";
import { Grid, Typography } from "@mui/material";

const Footer: FC = (): JSX.Element => {
    return (
        <Grid item xs={12} pt={3} bgcolor="#f5f7f9">
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="h6">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h6">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                    <Typography color="gray">
                        Lorem.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Footer;