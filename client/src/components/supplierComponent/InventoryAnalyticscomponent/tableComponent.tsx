
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('This Year', 'SAR', 2026.22, 42, 4.0),
    createData('Last Year', 237, 9.0, 37, 4.3),
];
const TableComponent = () => {
    return (
        <TableContainer component={Paper} className='table-class'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Summary</TableCell>
                        <TableCell >Currency</TableCell>
                        <TableCell >Sales Fulfilled</TableCell>
                        <TableCell >YoY %</TableCell>
                        <TableCell >Units Fullfilled</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell >{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent;