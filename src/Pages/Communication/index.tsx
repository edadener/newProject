import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";
import FollowUs from "../../components/FollowUs";
import PhoneIcon from "@mui/icons-material/Phone";

const Communication: FC = (): JSX.Element => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          height="50%"
          width="50%"
          textAlign="center"
          my={4}
          p={2}
          sx={{ border: "1px solid #cbccd0", borderRadius: 3 }}
        >
          <h4 className="footerHeader">BİZE ULAŞIN</h4>
          <Typography fontSize={20}>
            <PhoneIcon fontSize="medium" />
            <a href="tel:08505327000" className="homeLink">
              0850 532 70 00
            </a>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          height="50%"
          width="50%"
          textAlign="center"
          my={4}
          p={2}
          sx={{ border: "1px solid #cbccd0", borderRadius: 3 }}
        >
          <FollowUs />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Communication;
