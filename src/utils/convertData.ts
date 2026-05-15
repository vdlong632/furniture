export const capitalizeFirstLetter = (text: string) => {
  if (!text) return '';

  const cleaned = text.replace(/_/g, ' ');

  return cleaned
    .split(' ')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : ''))
    .join(' ');
};

export const formatPhoneNumber = (raw?: string | null) => {
  if (!raw) return '';
  let digits = raw.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  if (digits.length !== 10) return raw;
  const area = digits.slice(0, 3);
  const mid = digits.slice(3, 6);
  const last = digits.slice(6);
  return `(${area}) ${mid}-${last}`;
};
