import { FC } from "react";
import Header from "../../components/Header";
import { Box, Grid, Toolbar, Typography } from "@mui/material";

const PrivateLesson: FC = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          ZEYBEK
        </Typography>
        <Typography textAlign="center" ml={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iusto ad,
          dolorem ipsum ipsa repellendus eos excepturi facilis veniam obcaecati
          recusandae, totam impedit exercitationem, consectetur modi dolorum
          adipisci quidem voluptate tempora doloremque hic voluptatibus aliquam
          aliquid itaque! Dolor, quis, quisquam ducimus quod assumenda delectus
          nostrum similique excepturi recusandae id est.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iusto ad,
          dolorem ipsum ipsa repellendus eos excepturi facilis veniam obcaecati
          recusandae, totam impedit exercitationem, consectetur modi dolorum
          adipisci quidem voluptate tempora doloremque hic voluptatibus aliquam
          aliquid itaque! Dolor, quis, quisquam ducimus quod assumenda delectus
          nostrum similique excepturi recusandae id est.
        </Typography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <img src="/image/1.jpg" alt="#" />
      </Grid>
      <Grid item xs={6} textAlign="center">
        <img src="/image/2.jpg" alt="#" />
      </Grid>
      <Grid item xs={6}>
        <Typography textAlign="center" variant="h4" fontWeight="bold">
          İLK DANS
        </Typography>
        <Typography textAlign="center" ml={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iusto ad,
          dolorem ipsum ipsa repellendus eos excepturi facilis veniam obcaecati
          recusandae, totam impedit exercitationem, consectetur modi dolorum
          adipisci quidem voluptate tempora doloremque hic voluptatibus aliquam
          aliquid itaque! Dolor, quis, quisquam ducimus quod assumenda delectus
          nostrum similique excepturi recusandae id est.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iusto ad,
          dolorem ipsum ipsa repellendus eos excepturi facilis veniam obcaecati
          recusandae, totam impedit exercitationem, consectetur modi dolorum
          adipisci quidem voluptate tempora doloremque hic voluptatibus aliquam
          aliquid itaque! Dolor, quis, quisquam ducimus quod assumenda delectus
          nostrum similique excepturi recusandae id est.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PrivateLesson;
