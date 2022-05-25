import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FileList from '../file/FileList';
import { getFiles, uploadFile } from '../../actions/file';
import HeaderDisk from './HeaderDisk';
import DiskUpload from './DiskUpload';
import styled from '@emotion/styled';
import Uploader from '../uploader/Uploader';

const DropArea = styled('div')(({ theme }) => ({
  // color: theme.palette.primary.secondary,
  color: '#566885',
  width: '100%',
  height: '75vh',
  margin: '20px',
  border: 'dashed #566885 2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
}));

const Disk = () => {
  const dispatch = useDispatch();
  const { currentDir } = useSelector((state) => state.files);
  const [dragEnter, setDragEnter] = useState(false);

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const fileUploadHandler = (e) => {
    const files = [...e.target.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
  };

  const dragEnterHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnter(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragEnter(false);
  };

  const dropHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];
    files.forEach((file) => dispatch(uploadFile(file, currentDir)));
    setDragEnter(false);
  };

  return (
    <div>
      {!dragEnter ? (
        <div
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
        >
          <DiskUpload handler={fileUploadHandler} />
          <HeaderDisk />
          <FileList />
        </div>
      ) : (
        <DropArea
          onDrop={dropHandler}
          onDragEnter={dragEnterHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragEnterHandler}
        >
          Перетащите файлы сюда
        </DropArea>
      )}
    </div>
  );
};

export default Disk;
