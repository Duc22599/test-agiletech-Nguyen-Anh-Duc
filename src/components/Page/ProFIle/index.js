import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { LeftBar } from "./LeftBar";
import { ButtonNav } from "../../Css";
import { SelectTag } from "./SelectTag";
import { useEffect, useState } from "react";
import { instance } from "../../../CallApi";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NewAdd } from "../../Modal";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleOpenEdit = (id) => {
    navigate(`/${id}`);
  };

  const getPost = () => {
    setLoading(false);

    instance
      .get(`posts?page=${currentPage}`)
      .then((res) => {
        setPostList(res.data.posts);
        setTotalPage(res.data?.total_page);
        setLoading(true);
      })
      .catch((erro) => setLoading(false));
  };

  const handleDelete = (id) => {
    instance.delete(`posts/${id}`).then((res) => getPost());
  };

  const handlePageClick = (currentPage) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => {
    getPost();
  }, [currentPage]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <LeftBar />
        </Grid>
        <Grid item xs={6} md={10}>
          <Box margin="0 120px">
            <Box
              mt="121px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ButtonNav onClick={handleOpen} variant="contained">
                Add new
              </ButtonNav>
              <Box display="flex">
                <TextField
                  value={searchTitle}
                  onChange={(e) => {
                    setSearchTitle(e.target.value);
                  }}
                  id="outlined-search"
                  label="Title"
                  type="search"
                  size="small"
                />

                <SelectTag
                  setPostList={setPostList}
                  setTotalPage={setTotalPage}
                />
              </Box>
            </Box>
            {loading ? (
              <>
                <TableContainer sx={{ mt: "34.72px" }} component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" sx={{ border: 1 }}>
                          ID
                        </TableCell>
                        <TableCell sx={{ border: 1 }} align="center">
                          Title
                        </TableCell>
                        <TableCell sx={{ border: 1 }} align="center">
                          Description
                        </TableCell>
                        <TableCell sx={{ border: 1 }} align="center">
                          Tags
                        </TableCell>
                        <TableCell sx={{ border: 1 }} align="center">
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {postList
                        .filter((value) => {
                          if (searchTitle === "") {
                            return value;
                          } else if (
                            value.title
                              .toLowerCase()
                              .includes(searchTitle.toLowerCase())
                          ) {
                            return value;
                          }
                        })
                        .map((post, index) => (
                          <TableRow key={post.id}>
                            <TableCell
                              sx={{ border: 1 }}
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {index}
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="center">
                              {post.title}
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="center">
                              {post.description}
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="center">
                              {post.tags}
                            </TableCell>
                            <TableCell sx={{ border: 1 }} align="center">
                              <Box display="flex" justifyContent="center">
                                <Button>
                                  <ModeEditIcon
                                    onClick={() => {
                                      handleOpenEdit(post.id);
                                    }}
                                  />
                                </Button>

                                <Button>
                                  <DeleteIcon
                                    onClick={() => handleDelete(post.id)}
                                  />
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <>
                <Box display="flex" justifyContent="center">
                  <CircularProgress />
                </Box>
              </>
            )}
            <Box sx={{ float: "right", my: 5 }}>
              <Pagination
                hidePrevButton
                hideNextButton
                onChange={(e) => {
                  handlePageClick(e.target.textContent);
                }}
                count={totalPage}
                variant="outlined"
                color="primary"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <NewAdd
        open={open}
        onClose={handleClose}
        setOpen={setOpen}
        getPost={getPost}
      />
    </Box>
  );
};
