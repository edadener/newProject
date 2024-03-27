import { FC } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Part4: FC = (): JSX.Element => {
  return (
    <Grid item xs={12} pt={2} pb={3}>
      <Grid
        container
        p={5}
        justifyContent="flex-end"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight="bold" p={1}>
            Pandans Akademi Hakkında
          </Typography>
          <Typography variant="h5" fontWeight="bold" p={2}>
            Sık Sorulan Sorular
          </Typography>
          <Button variant="outlined" color="inherit">
            <Link className="homeLink" to="/questions">
              Daha Fazla Bilgi
            </Link>
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <img src="/image/four.jpg" alt="#" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Part4;
