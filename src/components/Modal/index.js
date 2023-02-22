import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { instance } from "../../CallApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 400,
  p: 4,
};

export const NewAdd = ({ open, onClose, setOpen, getPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = () => {
    instance
      .post(`posts`, {
        title: title,
        description: description,
        tags: [tags],
      })
      .then((res) => {
        setOpen(false);
        getPost();
        setTitle("");
        setDescription("");
        setTags("");
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <Typography textAlign={"center"} mb={3} variant="h4" component="h4">
            New Post
          </Typography>
          <Box mx="100px" display={"flex"} flexDirection="column">
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-text" size="small">
                Title
              </InputLabel>
              <OutlinedInput
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                size="small"
                id="outlined-adornment-text"
                type="text"
                label="Title"
              />
            </FormControl>
            <FormControl sx={{ my: 4 }}>
              <InputLabel htmlFor="outlined-adornment-description" size="small">
                description
              </InputLabel>
              <OutlinedInput
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                size="small"
                id="outlined-adornment-description"
                type="text"
                label="description"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="outlined-adornment-tags" size="small">
                tags
              </InputLabel>
              <OutlinedInput
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
                size="small"
                id="outlined-adornment-tags"
                type="text"
                label="tags"
              />
            </FormControl>

            <Box alignSelf={"center"}>
              <Button onClick={handleSubmit} sx={{ mt: 3 }} variant="contained">
                Post
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
