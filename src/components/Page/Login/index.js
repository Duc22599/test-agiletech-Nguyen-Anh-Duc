import Box from "@mui/material/Box";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { LogoPink, LogoPuple } from "../../Css";
import { instance } from "../../../CallApi";

export function Login() {
  const [userName, setUserName] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post(`/auth/login`, {
        username: userName,
      })
      .then((res) => {
        if (res.data.code === 401) {
          setErrorLogin("Please Try Again");
          return;
        } else {
          sessionStorage.setItem("token", res.data.accessToken);
          navigate("/");
        }
      });
  };

  return (
    <Container sx={{ mt: "79.29px" }}>
      <Box
        onClick={() => {
          navigate("/");
        }}
        display="flex"
        alignItems="flex-end"
        sx={{ cursor: "pointer" }}
      >
        <LogoPuple />
        <LogoPink />
      </Box>

      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          m: "100px 0",
        }}
      >
        <Typography variant="h4" component="h4">
          Sign In
        </Typography>

        <FormControl sx={{ mt: "70px", width: { xs: "70%", md: "30%" } }}>
          <InputLabel htmlFor="outlined-adornment-text" size="small">
            UserName
          </InputLabel>
          <OutlinedInput
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            size="small"
            id="outlined-adornment-text"
            type="text"
            label="UserName"
          />
        </FormControl>

        <Typography sx={{ color: "red", mt: 2 }}>{errorLogin}</Typography>

        <Button
          variant="contained"
          size="medium"
          sx={{ width: { xs: "30%", md: "30%" }, mt: "58px" }}
          type="submit"
        >
          LogIn
        </Button>
      </Box>
    </Container>
  );
}
