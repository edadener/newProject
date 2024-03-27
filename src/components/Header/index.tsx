import { FC } from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const Header: FC = (): JSX.Element => {
  return (
    <Grid item xs={12}>
      <AppBar className="sticky-bar">
        <Toolbar>
          <Link to="/">
            <AdbIcon sx={{ mr: 1 }} color="primary" />
          </Link>
          <Box className="box">
            <Link className="headerLink" to="/privateLesson">
              ÖZEL DERSLER
            </Link>
            <Link className="headerLink" to="/danceOrganization">
              DANS ORGANİZASYONLARI
            </Link>
            <Link className="headerLink" to="/salon">
              SALONLAR
            </Link>
            <Link className="headerLink" to="/about">
              HAKKIMIZDA
            </Link>
            <Link className="headerLink" to="/communication">
              İLETİŞİM
            </Link>
            <Link className="headerLink" to="/blog">
              BLOG
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default Header;
