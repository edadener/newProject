import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";
import FollowUs from "../../components/FollowUs";
import PhoneIcon from "@mui/icons-material/Phone";

const Communication: FC = (): JSX.Element => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={8} mb={5}>
        <Box className="boxFrame">
          <h4 className="footerHeader">BİZE ULAŞIN</h4>
          <Typography className="contactUs" mb={3}>
            <PhoneIcon fontSize="medium" />
            <a href="tel:08505327000" className="homeLink">
              0850 532 70 00
            </a>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box className="boxFrame">
          <FollowUs />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Communication;
