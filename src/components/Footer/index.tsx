import { FC } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FollowUs from "../FollowUs";

const Footer: FC = (): JSX.Element => {
  return (
    <Grid item xs={12} p={3} bgcolor="#f5f7f9">
      <Grid container>
        <Grid item xs={4}>
          <h4 className="footerHeader">KEŞFET</h4>
          <Link className="footerLink" to="/privateLesson">
            Özel Dersler
          </Link>
          <Link className="footerLink" to="/danceOrganization">
            Dans Organizasyonları
          </Link>
          <Link className="footerLink" to="/salon">
            Salonlar
          </Link>
          <Link className="footerLink" to="/communication">
            Bize Ulaşın
          </Link>
          <Link className="footerLink" to="/questions">
            Sıkça Sorulan Sorular
          </Link>
        </Grid>
        <Grid item xs={4}>
          <h4 className="footerHeader">HAKKINDA</h4>
          <Link className="footerLink" to="/">
            Kurumsal
          </Link>
        </Grid>
        <Grid item xs={4}>
          <FollowUs />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Footer;
