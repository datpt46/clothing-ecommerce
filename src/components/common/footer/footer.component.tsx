import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import footerData, { footerItemProps } from "./footer.data";
import { FooterSection } from "./footerSection.component";

const styles = {
  footerContainer: {
    width: "100%",
    marginTop: "50px",
  },
  cardContainer: {
    borderRadius: "0",
    border: "none",
    bgcolor: "background.default",
    color: "color.default",
  },
  listContainer: {
    textAlign: "center",
  },
  listItem: {
    "& > *": {
      textAlign: "center",
    },
  },
  logoSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
  socialContainer: {
    width: "100%",
    maxWidth: "200px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    "& > *": {
      display: "inline-block",
    },
  },
};

export const Footer = () => {
  return (
    <Box sx={{ ...styles.footerContainer }}>
      <Paper sx={{ ...styles.cardContainer }}>
        <Container>
          <Grid container spacing={3}>
            <Grid sx={{ ...styles.logoSection }} item xs={12} sm={12} md={3}>
              <Typography variant="h4" component="p" textAlign="center">
                CEO TEAM
              </Typography>
              <Box sx={{ ...styles.socialContainer }}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Box>
            </Grid>
            {footerData.map(({ id, title, links }: footerItemProps) => (
              <FooterSection key={id} title={title} links={links} />
            ))}
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};
