import React from "react";
import {
  Avatar,
  Paper,
  styled,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

const SlideImg = styled(Paper)({
  width: "80%",
  height: "330px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const SlideContent = ({ item }) => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <SlideImg elevation={12}>
          <Box alignSelf="flex-start" p={3}>
            <Avatar
              alt="Remy Sharp"
              src={item.imageUrl}
              sx={{ width: 80, height: 80, mr: 3 }}
            />
          </Box>

          <Box alignSelf="flex-start">
            <Box mt="30px" mb="41.07px">
              <Typography
                fontFamily="Avenir"
                fontStyle="normal"
                fontWeight="900"
                fontSize="18px"
                lineHeight="160%"
                letterSpacing="0.005em"
                color="#212353"
              >
                John Fang
              </Typography>
              <Typography>wordfaang@gmail.com </Typography>
            </Box>
            <Typography maxWidth="556.11px">{item.desctiption}</Typography>
          </Box>
        </SlideImg>
      </Box>
    </>
  );
};

export default SlideContent;
