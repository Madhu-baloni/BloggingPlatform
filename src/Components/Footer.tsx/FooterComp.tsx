import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <>
      <Divider sx={{ background: "#799351", mt: { xs: 2 } }} />
      <Container>
        <Grid container spacing={1}>
          <Grid
            size={{ xs: 12, md: 4, lg: 3 }}
            sx={{ mt: { xs: "1rem", md: "7rem" } }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Share Your Blog</Typography>

            <Stack direction="row" spacing={2}>
              <FacebookIcon />
              <TwitterIcon />
              <WhatsAppIcon />
              <InstagramIcon />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <List>
              <ListItem sx={{ mt: 2, fontWeight: "bold" }}>Company</ListItem>
              <ListItem>About Us</ListItem>
              <ListItem>Services</ListItem>
              <ListItem>Case Studies</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Contact Us</ListItem>
            </List>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <List>
              <ListItem sx={{ mt: 2, fontWeight: "bold" }}>Community</ListItem>
              <ListItem>Resources </ListItem>
              <ListItem>Faqs</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Careers</ListItem>
            </List>
          </Grid>

          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <List>
              <ListItem sx={{ mt: 2, fontWeight: "bold" }}>
                Get in touch
              </ListItem>
              <ListItem>
                <span>
                  <EmailIcon />
                </span>
                support@Blog<span style={{ color: "#B12C00" }}>&</span>
                pot.com
              </ListItem>
              <ListItem>
                <span>
                  <CallIcon />
                </span>
                +(642) 342 762 44
              </ListItem>
              <ListItem>
                <span>
                  <LocationPinIcon />
                </span>
                442 Belle Terre St Floor 7, San Francisco, AV 4206
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ background: "#799351", mb: { xs: 1, md: 2 } }} />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>
          Copyright © 2021 movie<span style={{ color: "#B12C00" }}>&</span>
          tation. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
