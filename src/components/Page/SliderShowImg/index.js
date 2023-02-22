import Carousel from "react-material-ui-carousel";
import React, { useEffect, useState } from "react";
import { instance } from "../../../CallApi";
import SlideContent from "./Slider";
import { Box, Container, Divider, Typography } from "@mui/material";

const CarouselUser = () => {
  const [slide, setSlide] = useState([]);
  const imgSilde = () => {
    instance.get("galleries").then((res) => {
      setSlide(res.data);
    });
  };
  useEffect(() => {
    imgSilde();
  }, []);

  return (
    <Container sx={{ mt: "119.59px" }}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          borderRadius: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "0 10px",
          backgroundColor: "#9C69E2",
        }}
      >
        <Typography
          fontFamily="Helvetica"
          fontStyle="normal"
          fontWeight="700"
          fontSize="40px"
          lineHeight="130%"
          color="#FFFFFF"
          p="5%"
        >
          Testimonials
        </Typography>
        <Carousel navButtonsAlwaysVisible={true}>
          {slide.map((item) => (
            <SlideContent key={item.id} item={item} />
          ))}
        </Carousel>
      </Box>

      <Divider sx={{ mt: "88.73px" }} />
    </Container>
  );
};

export default CarouselUser;
