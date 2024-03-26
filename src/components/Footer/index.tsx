import { FC } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: FC = (): JSX.Element => {
    return (
        <Grid item xs={12} p={5} bgcolor="#f5f7f9">
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h6">
                        Keşfet
                    </Typography>
                    <Typography color="gray">
                        Özel Dersler
                    </Typography>
                    <Typography color="gray">
                        Salonlar
                    </Typography>
                    <Typography color="gray">
                        Bize Ulaşın
                    </Typography>
                    <Typography color="gray">
                        Sıkça Sorulan Sorular
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">
                        Hakkında
                    </Typography>
                    <Typography color="gray">
                        Kurumsal
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6">
                        Bizi Takip Et
                    </Typography>
                    <IconButton><InstagramIcon fontSize="large" /></IconButton>
                    <IconButton><YouTubeIcon fontSize="large" /></IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Footer;