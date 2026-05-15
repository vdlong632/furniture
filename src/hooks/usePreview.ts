import { useEffect, useState } from 'react';
import { getPreviewUrl } from 'utils/preview';

export const usePreview = (file: File | string | null | undefined): string | null => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const url = getPreviewUrl(file);
    setPreview(url);
    if (file instanceof File && url) {
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  return preview;
};
