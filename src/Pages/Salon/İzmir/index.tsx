import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

const İzmir: FC = (): JSX.Element => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <Box>
          <img src="/image/1.jpg" alt="#" />
          <Typography color="gray">Üçyol</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <img src="/image/2.jpg" alt="#" />
          <Typography color="gray">Buca</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default İzmir;
