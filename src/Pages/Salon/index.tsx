import { FC, useState } from "react";
import Header from "../../components/Header";
import { Grid, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import İzmir from "./İzmir";
import İstanbul from "./İstanbul";

enum cityEnum {
  İzmir = 0,
  İstanbul = 1,
}

const Salon: FC = (): JSX.Element => {
  const [value, setValue] = useState(cityEnum.İzmir);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box className="tabContainer">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            TabIndicatorProps={{
              style: {
                background: "#fff",
              },
            }}
          >
            <Tab label="İZMİR" className="tabStyle" />
            <Tab label="İSTANBUL" className="tabStyle" />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {value === cityEnum.İzmir && <İzmir />}
        {value === cityEnum.İstanbul && <İstanbul />}
      </Grid>
    </Grid>
  );
};

export default Salon;
