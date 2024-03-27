import { FC } from "react";
import Header from "../../components/Header";
import { Grid, Box, Toolbar, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentlAskedQuestion: FC = (): JSX.Element => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3" align="center" fontWeight="bold">
            SIK SORULAN SORULAR
          </Typography>
          <Typography align="center" variant="h6" pt={3}>
            Pandans Akademi ile ilgili bize en sık sorulan soruları bu bölümde
            topladık.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box width="50%">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight={600}>
                Lorem, ipsum dolor.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FrequentlAskedQuestion;
