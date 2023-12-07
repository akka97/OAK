import { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Button } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import EditModal from '../GymEditModal/GymEditModal';
import { useGymContext } from "../../../Context/Gym";

const GymDataTable = () => {
    const { gyms } = useGymContext();
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

    const handleUpdate = async (id) => {
        setOpen(true);
        setId(id);

    }

    const handleDelete = async (id) => {

    }


    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell> ID </TableCell>
                                <TableCell> Name </TableCell>
                                <TableCell> Descrition </TableCell>
                                <TableCell> Address </TableCell>
                                <TableCell> Basic Plan </TableCell>
                                <TableCell> Premium Plan </TableCell>
                                <TableCell> Opening </TableCell>
                                <TableCell> Closing </TableCell>
                                <TableCell> Images </TableCell>
                                <TableCell> Edit </TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                gyms.map((el, index) => {
                                    console.log("gyms----", el.premium_plan);
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={el.id}>

                                            <TableCell>{el.id}</TableCell>
                                            <TableCell>{el.name}</TableCell>
                                            <TableCell>{el.description}</TableCell>
                                            <TableCell>{el.address}</TableCell>
                                            <TableCell>{el.basic_plan == false ? "false" : "true"}</TableCell>
                                            <TableCell>{el.premium_plan == false ? "false" : "true"}</TableCell>
                                            <TableCell>{el.opening}</TableCell>
                                            <TableCell>{el.closing}</TableCell>
                                            <TableCell>{<img src={`http://localhost:3001/${el.image}`} />}</TableCell>
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
            <EditModal open={open} setOpen={setOpen} id={id} />
        </>
    );
}

export default GymDataTable;