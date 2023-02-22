import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { LogoPink, LogoPuple } from "../../Css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";

export const Footer = () => {
  return (
    <Container sx={{ mt: "100.71px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item lg={3}>
            <Box>
              <Box display="flex" alignItems="center">
                <Box display="flex" alignItems="flex-end">
                  <LogoPuple />
                  <LogoPink />
                </Box>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="900"
                  fontSize="20px"
                  lineHeight="160%"
                  ml={3}
                  sx={{ color: "#212353;" }}
                >
                  DataWarehouse
                </Typography>
              </Box>
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="500"
                fontSize="16px"
                lineHeight="180%"
                letterSpacing="0.01em"
                sx={{ color: "#212353", mt: "67.18px" }}
              >
                Warehouse Society, 234 Bahagia Ave Street PRBW 29281
              </Typography>
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="400"
                fontSize="16px"
                lineHeight="180%"
                letterSpacing="0.01em"
                sx={{ color: " #212353" }}
              >
                {"info@warehouse.project 1-232-3434 (Main)"}
              </Typography>
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="400"
                fontSize="12px"
                lineHeight="180%"
                letterSpacing="0.01em"
                sx={{ color: " #212353", margin: "118.32px 0 130.21px 0" }}
              >
                © Datawarehouse™, 2020. All rights reserved. Company
                Registration Number: 21479524.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box ml="140.38px">
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="900"
                fontSize="16px"
                lineHeight="250%"
                letterSpacing="0.01em"
                sx={{ color: " #212353" }}
              >
                About
              </Typography>

              <Box mt="30.8px">
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Profile
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Features
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Careers
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  DW News
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box ml="140.38px">
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="900"
                fontSize="16px"
                lineHeight="250%"
                letterSpacing="0.01em"
                sx={{ color: " #212353" }}
              >
                Help
              </Typography>

              <Box mt="30.8px">
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Support
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Features
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Sign up
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Guide
                </Typography>
                <Typography
                  fontFamily="Avenir"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="250%"
                  letterSpacing="0.01em"
                  sx={{ color: " #212353" }}
                >
                  Q&A
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box ml="140.38px">
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="900"
                fontSize="16px"
                lineHeight="250%"
                letterSpacing="0.01em"
                sx={{ color: " #212353" }}
              >
                Social Media
              </Typography>
              <Box mt="30.8px">
                <FacebookOutlinedIcon fontSize="large" />
                <TwitterIcon fontSize="large" sx={{ mx: 0.5 }} />
                <LinkedInIcon fontSize="large" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
