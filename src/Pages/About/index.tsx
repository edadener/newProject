import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";

const About: FC = (): JSX.Element => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>About</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
