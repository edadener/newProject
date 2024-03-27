import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Part2: FC = (): JSX.Element => {
  return (
    <Grid item xs={12} p={2} mt={5}>
      <Box textAlign="center">
        <Typography variant="h3" fontWeight="bold">
          Neden Pandans Akademi?
        </Typography>
        <Typography fontWeight="bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
          saepe!
        </Typography>
        <Typography fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia!
        </Typography>
        <Typography fontWeight="bold">
          <Link className="homeLink" to="/about">
            devamı için tıklayın..
          </Link>
        </Typography>
      </Box>
    </Grid>
  );
};
export default Part2;
