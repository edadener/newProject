import { FC } from "react";
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

const Header: FC = (): JSX.Element => {

    return (
        <Grid item xs={12}>
            <AppBar position="static" sx={{backgroundColor: "#fff"}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ mr: 1 }} color="primary" />
                        <Typography variant="h6" color="#000">
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            <Button sx={{ my: 2, color: '#000', display: 'block' }}>
                                page1
                            </Button>
                            <Button sx={{ my: 2, color: '#000', display: 'block' }}>
                                page2
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Grid>
    )
}
export default Header;