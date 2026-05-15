import { DialogConfirm } from './DialogConfirm';

export type ModalConfirmDeleteProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
  confirmLabel?: string;
  cancelLabel?: string;
  maxWidth?: number;
};

/** Shared delete confirmation dialog — pass title and body copy only. */
export const ModalConfirmDelete = ({
  open,
  onClose,
  onConfirm,
  title,
  content,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  maxWidth
}: ModalConfirmDeleteProps) => (
  <DialogConfirm
    isOpen={open}
    onClose={onClose}
    onSubmit={onConfirm}
    textTitle={title}
    textContent={content}
    textCancel={cancelLabel}
    textButton={confirmLabel}
    wrapperContentProps={{
      gap: 2.5
    }}
    scrollAreaSx={{
      gap: 2.5
    }}
    isDelete
    maxWidth={maxWidth}
  />
);
