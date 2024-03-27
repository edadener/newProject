import { Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

const NotFoundPage: FC = (): JSX.Element => {
  return (
    <>
      <Typography align="center" variant="h3">
        404 Not Found
      </Typography>
      <Typography align="center" variant="h5">
        <Link to="/">Anasayfaya dönmek için tıklayın..</Link>
      </Typography>
    </>
  );
};

export default NotFoundPage;
