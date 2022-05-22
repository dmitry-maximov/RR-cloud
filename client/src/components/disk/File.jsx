import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDir } from '../../reducers/fileReducer';
import folderLogo from '../../img/folder.png';
import fileLogo from '../../img/file.png';

const File = ({ file }) => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  const openDirectoryHandler = (file) => {
    if (file.type === 'dir') {
      dispatch(setCurrentDir(file.id));
    }
  };

  return (
    <div onClick={() => openDirectoryHandler(file)}>
      <img src={file.type === 'dir' ? folderLogo : fileLogo} />
      <div>{file.name}</div>
    </div>
  );
};

export default File;
