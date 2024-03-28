import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";

const DanceOrganization: FC = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Header />
      <Grid item xs={12}>
        <Box component="main">
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <Typography textAlign="center" >
          Zeybek | Kafkas | Sirtaki | Halay | Roman | Oryantel | Vals | Hip-Hop
          | Ankara | Kaşık
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/one.jpg" alt="#" />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/one.jpg" alt="#" />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/one.jpg" alt="#" />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/two.jpg" alt="#" />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/two.jpg" alt="#" />
      </Grid>
      <Grid item xs={4} textAlign="center">
        <img src="/image/two.jpg" alt="#" />
      </Grid>
    </Grid>
  );
};

export default DanceOrganization;
