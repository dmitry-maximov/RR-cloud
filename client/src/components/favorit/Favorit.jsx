import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritFiles } from '../../actions/file';
import HeaderDisk from '../disk/HeaderDisk';
import FileList from '../file/FileList';

const Favorit = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFavoritFiles(sort));
  }, [sort]);

  return (
    <div>
      <HeaderDisk />
      <FileList />
    </div>
  );
};

export default Favorit;
