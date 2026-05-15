/**
 * Returns a preview URL for a file or string.
 * For File: creates blob URL (caller must revoke when done).
 * For string: returns as-is.
 * For null/undefined: returns null.
 */
export function getPreviewUrl(file: File | string | null | undefined): string | null {
  if (file instanceof File) {
    return URL.createObjectURL(file);
  }
  if (typeof file === 'string') {
    return file;
  }
  return null;
}
