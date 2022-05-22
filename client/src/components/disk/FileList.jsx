import React from 'react';
import { useSelector } from 'react-redux';
import File from './File';

const FileList = () => {
  const files = useSelector((state) => state.files.files);

  if (files.length === 0) {
    return <div className="loader">Файлы не найдены</div>;
  }

  return (
    <div>
      {files.map((file) => (
        <File file={file} />
      ))}
    </div>
  );
};

export default FileList;
