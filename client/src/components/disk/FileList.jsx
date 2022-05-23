import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';
import ListFiles from './ListFiles';
import PlateFiles from './PlateFiles';

const FileList = () => {
  const { files, view } = useSelector((state) => state.files);

  if (files.length === 0) {
    return <div className="loader">Файлы не найдены</div>;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: '75vh',
        padding: '1rem',
        margin: '0.75rem 0',
      }}
    >
      {view === 'list' ? (
        <ListFiles files={files} />
      ) : (
        <PlateFiles files={files} />
      )}
    </Paper>
  );
};

export default FileList;
