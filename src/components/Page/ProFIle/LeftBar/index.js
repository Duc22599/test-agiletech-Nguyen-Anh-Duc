import React from "react";
import { Box, Typography } from "@mui/material";
import { LogoPink, LogoPuple } from "../../../Css";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../../CallApi";

export const LeftBar = () => {
  const navigate = useNavigate();

  const hanleLogout = () => {
    instance.delete(`auth/logout`).then((res) => {
      sessionStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#D9D9D9",
        height: "100%",
        minHeight: "700px",
        py: 1,
      }}
    >
      <Box
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
        p={2}
        display="flex"
        alignItems=" flex-end"
        justifyContent={"center"}
      >
        <LogoPuple></LogoPuple>
        <LogoPink></LogoPink>
      </Box>

      <Box p={5}>
        <Typography
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20px"
          lineHeight="160%"
          letterSpacing="0.005em"
          sx={{ color: "#212353", cursor: "pointer", mb: "10px" }}
        >
          Posts
        </Typography>
        <Typography
          onClick={hanleLogout}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20px"
          lineHeight="160%"
          letterSpacing="0.005em"
          sx={{ color: "#212353", cursor: "pointer" }}
        >
          LogOut
        </Typography>
      </Box>
    </Box>
  );
};
