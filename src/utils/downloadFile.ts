import axios from 'axios';

export const saveVideoFile = async (url: string, fileName: string) => {
  const response = await axios.get(url, { responseType: 'blob' });
  if (!response) throw new Error('Network response was not ok');
  const blob = response.data;
  const link = document.createElement('a');

  const objectUrl = URL.createObjectURL(blob);

  link.href = objectUrl;
  link.download = fileName;

  link.click();

  URL.revokeObjectURL(objectUrl);
  link.remove();
};
