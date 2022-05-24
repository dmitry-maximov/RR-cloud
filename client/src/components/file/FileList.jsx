import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import ListViewFiles from './ListViewFiles';
import PlateViewFiles from './PlateViewFiles';

const FileList = () => {
  const { files, view } = useSelector((state) => state.files);

  // if (files.length === 0) {
  //   return <div>Файлы не найдены</div>;
  // }

  return (
    <Paper
      elevation={0}
      sx={{
        height: '75vh',
        padding: '1rem',
        margin: '0.75rem 0',
        overflowY: 'auto',
      }}
    >
      {view === 'list' ? (
        <ListViewFiles files={files} />
      ) : (
        <PlateViewFiles files={files} />
      )}
    </Paper>
  );
};

export default FileList;
