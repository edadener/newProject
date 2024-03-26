import { Grid } from "@mui/material";
import { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Home: FC = (): JSX.Element => {

  return (
    <Grid container>
      <Header />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </Grid>
  )
}

export default Home;
