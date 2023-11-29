import { useState } from 'react';
import { useCategoryContext } from "../../../Context/Category";
import EditModal from '../CategoryEditModal/CategoryEditModal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from '@mui/material/';

const AreasDataTable = (props) => {
    const { categories, delete_category } = useCategoryContext();
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeleteClick = async (id) => {
        delete_category(id);
    }

    const handleUpdate = (id) => {
        setOpen(true);
        setId(id);
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ minWidth: "150px" }}> ID </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Name </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Created at </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Updated at </TableCell>
                                <TableCell style={{ minWidth: "150px" }}> Edit </TableCell>
                                <TableCell style={{ minWidth: "150px" }}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                categories.map((el, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={el.id}>

                                            <TableCell>{el.id}</TableCell>
                                            <TableCell>{el.name}</TableCell>
                                            <TableCell>{el.createdAt}</TableCell>
                                            <TableCell>{el.updatedAt}</TableCell>

                                            <TableCell>
                                                <Button variant="contained" startIcon={<EditIcon />} onClick={() => { handleUpdate(el.id) }}>
                                                    Edit
                                                </Button>
                                            </TableCell>

                                            <TableCell>
                                                <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDeleteClick(el.id)} >
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
            <EditModal open={open} setOpen={setOpen} id={id} />
        </>
    );
}

export default AreasDataTable;