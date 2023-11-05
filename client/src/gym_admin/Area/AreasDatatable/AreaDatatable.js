import { useState } from 'react';
import { useAreaContext } from "../../../Context/Area";
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
const AreasDataTable = () => {
    const { areas } = useAreaContext();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
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
                                            <Button variant="contained" startIcon={<EditIcon />}>
                                                Edit
                                            </Button>
                                        </TableCell>

                                        <TableCell>
                                            <Button variant="contained" startIcon={<DeleteIcon />}>
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
    );
}

export default AreasDataTable;