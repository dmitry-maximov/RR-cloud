import { Grid } from '@mui/material';
import File from './File';

const PlateViewFiles = ({ files }) => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="start"
      alignItems="center"
    >
      {files.map((file) => (
        <File key={file.id} file={file} />
      ))}
    </Grid>
  );
};

export default PlateViewFiles;
