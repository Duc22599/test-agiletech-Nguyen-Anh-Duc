import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { instance } from "../../../../CallApi";

export function SelectTag({ setPostList, setTotalPage }) {
  const [tags, setTags] = useState([]);
  const [personName, setPersonName] = useState("");

  useEffect(() => {
    instance.get(`posts/tags`).then((res) => setTags(res.data));
  }, []);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  useEffect(() => {
    instance.get(`posts?tags=${personName}`).then((res) => {
      setPostList(res.data.posts);
      setTotalPage(res.data?.total_page);
    });
  }, [personName]);

  return (
    <Box sx={{ minWidth: 200, ml: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tags</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={personName}
          label="Tags"
          size="small"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {tags.map((tag, index) => (
            <MenuItem key={index} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
