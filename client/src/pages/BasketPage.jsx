import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketFiles } from '../actions/file.basket';
import HeaderDisk from '../components/disk/HeaderDisk';
import FileList from '../components/file/FileList';

const BasketPage = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getBasketFiles(sort));
  }, [sort]);

  return (
    <div>
      <HeaderDisk basket />
      <FileList />
    </div>
  );
};

export default BasketPage;
