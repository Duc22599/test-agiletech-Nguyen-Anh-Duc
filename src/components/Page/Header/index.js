import React from "react";
import { Box, Container, Typography } from "@mui/material";
import image from "../../../Img/image1.png";
import { useNavigate } from "react-router-dom";

import { ButtonMore, ButtonNav, LogoPink, LogoPuple } from "../../Css";
import { instance } from "../../../CallApi";

export const Header = () => {
  const getToken = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const hanleLogout = () => {
    instance.delete(`auth/logout`).then((res) => {
      sessionStorage.removeItem("token");
      window.location.reload();
    });
  };
  return (
    <Container sx={{ mt: 6 }}>
      <Box display="flex" justifyContent="space-between" mb="129.19px">
        <Box display="flex" alignItems=" flex-end" sx={{ cursor: "pointer" }}>
          <LogoPuple></LogoPuple>
          <LogoPink></LogoPink>
        </Box>

        {getToken ? (
          <div>
            <ButtonNav
              onClick={() => navigate("/profile")}
              sx={{ fontFamily: "Inter" }}
              variant="contained"
            >
              ProFile
            </ButtonNav>
            <ButtonNav
              onClick={hanleLogout}
              sx={{ fontFamily: "Inter", ml: 2 }}
              variant="contained"
            >
              LogOut
            </ButtonNav>
          </div>
        ) : (
          <>
            <ButtonNav
              onClick={() => navigate("/login")}
              sx={{ fontFamily: "Inter" }}
              variant="contained"
            >
              Sign In
            </ButtonNav>
          </>
        )}
      </Box>

      <Box display="flex">
        <Box display={"flex"} flexDirection="column" gap={"49.69px"}>
          <Typography
            variant="h6"
            fontWeight="800px"
            fontSize="80px"
            lineHeight="110%"
            maxHeight="119.25px"
            maxWidth="700"
            with="100%"
            sx={{ color: "#212353" }}
          >
            Save your data storage here.
          </Typography>

          <Typography
            variant="body2"
            width="100%"
            fontWeight={500}
            fontSize="18px"
            maxHeight="119.25px"
            maxWidth="377.64px"
            lineHeight="160%"
            margin="49.69px 0"
            sx={{ color: "#4B5D68" }}
          >
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </Typography>

          <Box>
            <ButtonMore variant="contained">
              <Typography
                fontStyle="normal"
                fontWeight="800"
                fontSize="18px"
                lineHeight="160%"
                p="15.9px 36.77px"
                display="flex"
                alignItems="center"
                textAlign="center"
                color="#FFFFFF"
              >
                Learn More
              </Typography>
            </ButtonMore>
          </Box>
        </Box>
        <Box
          alignSelf="center"
          sx={{
            width: "100%",
            maxWidth: "759.25px",
            height: "401.49px",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "100%",
          }}
        ></Box>
      </Box>
    </Container>
  );
};
