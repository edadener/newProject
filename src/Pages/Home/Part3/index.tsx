import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Part3: FC = (): JSX.Element => {
  return (
    <Grid item xs={12} pt={2} pb={3}>
      <Grid container p={5} textAlign="center">
        <Grid item xs={6}>
          <Box>
            <img src="/image/one.jpg" alt="#" />
            <Typography variant="h6" fontWeight="bold">
              <Link className="homeLink" to="/about">
                Özel Dersler
              </Link>
            </Typography>
            <Typography color="gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
              voluptatibus!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img src="/image/two.jpg" alt="#" />
            <Typography variant="h6" fontWeight="bold">
              <Link className="homeLink" to="/salon">
                Salonlar
              </Link>
            </Typography>
            <Typography color="gray">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
              voluptatibus!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Part3;
