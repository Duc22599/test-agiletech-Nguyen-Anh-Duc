import { Box, Container, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../Img/image3.png";
import image4 from "../../../Img/image4.png";
import image5 from "../../../Img/image5.png";
import image6 from "../../../Img/image6.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";

export const Section = () => {
  return (
    <Box mt="164.29px">
      <Typography
        variant="h4"
        color="#212353"
        textAlign="center"
        fontWeight="700"
        fontSize="40px"
        lineHeight="130%"
        mb="49.24px"
      >
        Features
      </Typography>
      <Typography
        width="575.12px"
        variant="body2"
        color="#4B5D68"
        textAlign="center"
        fontWeight="500"
        fontSize="18px"
        lineHeight="160%"
        mx="auto"
        mb="98.48px"
      >
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </Typography>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item lg={6}>
              <Box
                sx={{
                  width: "500px",
                  height: "352.56px",
                  backgroundColor: "rgba(104,201,186,0.1)",
                  borderRadius: "75% 15% 0 0;",
                }}
                display="flex"
                alignItems="center"
              >
                <Box
                  mr="30px"
                  component="img"
                  src={image1}
                  width="228.47px"
                  height="207.79px"
                />

                <Box>
                  <Typography
                    //   mt="48.26px"
                    variant="h4"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="130%"
                    color="#212353"
                  >
                    Search Data
                  </Typography>
                  <Typography
                    fontFamily="Avenir"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="160%"
                    width="216.66px"
                    margin="19.7px 0"
                  >
                    Don’t worry if your data is very large, the Data Warehoue
                    provides a search engine, which is useful for making it
                    easier to find data effectively saving time.
                  </Typography>

                  <Typography
                    color="#212353"
                    letterSpacing="0.005em"
                    display="flex"
                  >
                    Learn more
                    <ArrowRightAltIcon sx={{ ml: 1, color: "#9C69E2" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  width: "500px",
                  height: "352.56px",
                  backgroundColor: "rgba(156,105,226,0.1)",
                  borderRadius: "75% 15% 0 0;",
                }}
                display="flex"
                alignItems="center"
              >
                <Box
                  mr="30px"
                  component="img"
                  src={image4}
                  width="228.47px"
                  height="207.79px"
                />

                <Box>
                  <Typography
                    //   mt="48.26px"
                    variant="h4"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="130%"
                    color="#212353"
                  >
                    24 Hours Access
                  </Typography>
                  <Typography
                    fontFamily="Avenir"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="160%"
                    width="216.66px"
                    margin="19.7px 0"
                  >
                    Access is given 24 hours a full morning to night and meet
                    again in the morning, giving you comfort when you need data
                    when urgent.
                  </Typography>

                  <Typography
                    color="#212353"
                    letterSpacing="0.005em"
                    display="flex"
                  >
                    Learn more
                    <ArrowRightAltIcon sx={{ ml: 1, color: "#9C69E2" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  width: "500px",
                  height: "352.56px",
                  backgroundColor: "rgba(240,99,184,0.1)",
                  borderRadius: "75% 15% 0 0;",
                }}
                display="flex"
                alignItems="center"
              >
                <Box
                  mr="30px"
                  component="img"
                  src={image5}
                  width="228.47px"
                  height="207.79px"
                />

                <Box>
                  <Typography
                    //   mt="48.26px"
                    variant="h4"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="24px"
                    lineHeight="130%"
                    color="#212353"
                  >
                    Print Out
                  </Typography>
                  <Typography
                    fontFamily="Avenir"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="160%"
                    width="216.66px"
                    margin="19.7px 0"
                  >
                    Print out service gives you convenience if someday you need
                    print data, just edit it all and just print it.
                  </Typography>

                  <Typography
                    color="#212353"
                    letterSpacing="0.005em"
                    display="flex"
                  >
                    Learn more
                    <ArrowRightAltIcon sx={{ ml: 1, color: "#9C69E2" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box
                sx={{
                  width: "500px",
                  height: "352.56px",
                  backgroundColor: "rgba(45,156,219,0.1)",
                  borderRadius: "75% 15% 0 0;",
                }}
                display="flex"
                alignItems="center"
              >
                <Box
                  mr="30px"
                  component="img"
                  src={image6}
                  width="228.47px"
                  height="207.79px"
                />

                <Box>
                  <Box>
                    <Typography
                      variant="h4"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize="24px"
                      lineHeight="130%"
                      color="#212353"
                    >
                      Security Code
                    </Typography>
                  </Box>
                  <Typography
                    fontFamily="Avenir"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="160%"
                    width="216.66px"
                    margin="19.7px 0"
                  >
                    Data Security is one of our best facilities. Allows for your
                    files to be safer. The file can be secured with a code or
                    password that you created, so only you can open the file.
                  </Typography>

                  <Typography
                    color="#212353"
                    letterSpacing="0.005em"
                    display="flex"
                  >
                    Learn more
                    <ArrowRightAltIcon sx={{ ml: 1, color: "#9C69E2" }} />
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
