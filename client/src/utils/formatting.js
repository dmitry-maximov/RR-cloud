export const formatDate = (date) => {
  date = new Date(date);
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
};

export const formatDateWithOutTimeZone = (date) => {
  return date.split('T')[0];
};

export const formatSize = (length) => {
  var i = 0,
    type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб'];
  while ((length / 1000) | 0 && i < type.length - 1) {
    length /= 1024;
    i++;
  }
  return length.toFixed(2) + ' ' + type[i];
};
