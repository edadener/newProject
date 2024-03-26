import { FC } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";

const Header: FC = (): JSX.Element => {

    return (
        <Grid item xs={12}>
            <AppBar className="sticky-bar">
                <Toolbar>
                    <AdbIcon sx={{ mr: 1 }} color="primary" />
                    <Typography variant="h6" color="#000">
                        LOGO
                    </Typography>
                    <Box className="box">
                        <Link className="headerLink" to='/'>ANASAYFA</Link>
                        <Link className="headerLink" to='/privateLesson'>ÖZEL DERSLER</Link>
                        <Link className="headerLink" to='/salon'>SALONLAR</Link>
                        <Link className="headerLink" to='/communication'>İLETİŞİM</Link>
                        <Link className="headerLink" to='/communication'>BLOG</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}
export default Header;