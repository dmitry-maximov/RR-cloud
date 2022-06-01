import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import File from './File';

const ListViewFiles = ({ files }) => {
  debugger;
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> </TableCell>
          <TableCell align="center">Наименование</TableCell>
          <TableCell align="center">Дата</TableCell>
          <TableCell align="center">Тип</TableCell>
          <TableCell align="center">Размер</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {files.map((file) => (
          <File key={file.id} file={file} />
        ))}
      </TableBody>
    </Table>
  );
};

export default ListViewFiles;
