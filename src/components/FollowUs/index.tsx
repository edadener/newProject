import { FC } from "react";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const FollowUs: FC = (): JSX.Element => {
  return (
    <>
      <h4 className="footerHeader">BİZİ TAKİP ET</h4>
      <IconButton>
        <a
          href="https://www.instagram.com/pandansakademi?igsh=MTZlbHQ0dGYwOW41aA=="
          target="_blank"
          className="iconLink"
        >
          <InstagramIcon fontSize="large" />
        </a>
      </IconButton>
      <IconButton>
        <a
          href="https://www.facebook.com/profile.php?id=100088221897122&mibextid=uzlsIk"
          target="_blank"
          className="iconLink"
        >
          <FacebookIcon fontSize="large" />
        </a>
      </IconButton>
      <IconButton>
        <a
          href="https://www.facebook.com/profile.php?id=100088221897122&mibextid=uzlsIk"
          target="_blank"
          className="iconLink"
        >
          <YouTubeIcon fontSize="large" />
        </a>
      </IconButton>
    </>
  );
};

export default FollowUs;
