import { useState } from 'react';
import { useAreaContext } from "../../../Context/Area";
import EditModal from '../AreaEditModal/AreaEditModal';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateArea } from '../../../services';

const AreasDataTable = (props) => {
    const { areas, deleteAreas, updateAreas } = useAreaContext();
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
        // Add your delete logic here
        console.log("we are here--", id);
        deleteAreas(id);
    }

    const handleUpdate = (id) => {
        setOpen(true);
        setId(id);
        console.log("Eddddddit thiiiiis", id);
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
                                areas.map((el, index) => {
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
            <EditModal open={open} setOpen={setOpen} id={id}/>
        </>
    );
}

export default AreasDataTable;