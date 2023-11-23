import { useState } from 'react';
import { useUserContext } from "../../../Context/User";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from '@mui/material/';
import EditModal from "../UserEditModal/UserEditModal";

const UserDataTable = () => {
    const { users } = useUserContext();
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // console.log("UserDataTable------");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleUpdate = (id) => {
        setOpen(true);
    }

    const handleDelete = (id) => {
        console.log("id----", id);
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: "150px" }}> ID </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Firstname </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Lastname </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Email </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Edit </TableCell>
                                <TableCell style={{ minWidth: "150px" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map((el, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={el.id}>
                                            <TableCell>{el.id}</TableCell>
                                            <TableCell>{el.firstname}</TableCell>
                                            <TableCell>{el.lastname}</TableCell>
                                            <TableCell>{el.email}</TableCell>
                                            <TableCell>
                                                <Button variant="contained" startIcon={<EditIcon />} onClick={() => { handleUpdate(el.id) }}>
                                                    Edit
                                                </Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(el.id)} >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={1}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <EditModal open={open} setOpen={setOpen} />
        </>
    );
}

export default UserDataTable;