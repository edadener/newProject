import { FC } from "react";
import Header from "../../components/Header";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

const PrivateLesson: FC = (): JSX.Element => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>PrivateLesson</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PrivateLesson;
