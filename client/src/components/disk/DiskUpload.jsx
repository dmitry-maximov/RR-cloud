import styled from '@emotion/styled';

const StyledDiskUpload = styled('div')({
  display: 'none',
});

const StyledInputDiskUpload = styled('input')({
  display: 'none',
});

const StyledLabelDiskUpload = styled('label')(({ theme }) => ({
  // color: theme.palette.primary.secondary,
  border: '2px dashed #566885',
  padding: '5px 10px',
  cursor: 'pointer',
  marginLeft: '10px',
}));

const DiskUpload = ({ handler }) => {
  return (
    <StyledDiskUpload>
      <StyledLabelDiskUpload htmlFor="disk-upload-input">
        Загрузить файл
      </StyledLabelDiskUpload>
      <StyledInputDiskUpload
        multiple={true}
        onChange={(event) => handler(event)}
        type="file"
        id="disk-upload-input"
      />
    </StyledDiskUpload>
  );
};

export default DiskUpload;
