import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";
import Footer from "../../components/Footer";

const About: FC = (): JSX.Element => {
  return (
    <Grid container spacing={3}>
      <Header />
      <Grid item xs={12}>
        <Box component="main">
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <img src="/image/5.jpg" alt="#" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" fontWeight="bold">
          HAKKIMIZDA | PANDANS AKADEMİ
        </Typography>
      </Grid>
      <Grid item xs={12} mb={5}>
        <Typography align="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          voluptates odio molestiae alias ex tenetur, consequuntur aliquid
          dolorum quidem inventore? Adipisci ad delectus nemo quos aspernatur
          officiis neque ullam architecto sit, assumenda corrupti expedita
          accusamus laborum velit aliquid aut, nam animi debitis. Earum atque
          quasi adipisci repellendus! Laudantium error maxime quia, a
          necessitatibus consectetur. Velit repellendus voluptas distinctio vero
          quod, possimus laborum molestiae sit animi illum quaerat aperiam
          repellat, amet, ducimus commodi. Similique magnam reprehenderit iusto
          architecto qui maiores. Recusandae voluptatem nulla voluptas commodi
          quas reiciendis assumenda, sequi dolore, aperiam debitis alias, hic
          sunt porro unde qui cumque! Enim, ab!
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default About;
