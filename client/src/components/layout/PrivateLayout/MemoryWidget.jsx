import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import {
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { getDiskInfo } from '../../../actions/disk';
import { formatSize } from '../../../utils/formatting';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.primary : '#308fe8',
  },
}));

const MemoryWidget = () => {
  const dispatch = useDispatch();
  const { space, usedSpace } = useSelector((state) => state.disk);
  const used = formatSize(usedSpace || 0);
  const free = formatSize(space || 0);
  const pr = Math.round((usedSpace / space) * 100);
  useEffect(() => {
    dispatch(getDiskInfo());
  }, []);

  return (
    <div>
      <Typography variant="h6">Занято:</Typography>
      <BorderLinearProgress variant="determinate" value={pr} />
      <Typography
        variant="t"
        sx={{
          padding: '.5rem .25rem',
          float: 'right',
        }}
      >
        {used} из {free}
      </Typography>
    </div>
  );
};

export default MemoryWidget;
