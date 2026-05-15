import { Stack, Typography } from '@mui/material';
import { ButtonCustom, ButtonOutLine } from 'app/components/elements/ButtonCustom';
import { DialogConfirm } from 'app/components/elements/DialogConfirm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCreateAsNew: () => void;
  onViewExisting: () => void;
};

export const ModalDuplicateClient = ({ isOpen, onClose, onCreateAsNew, onViewExisting }: Props) => {
  return (
    <DialogConfirm isOpen={isOpen} onClose={onClose} maxWidth={540}>
      <Stack gap={2} alignItems="flex-start" width="100%">
        <Typography fontSize={24} fontWeight={600} color="#000" textAlign="left">
          Client already exists
        </Typography>
        <Typography fontSize={16} color="#000" sx={{ maxWidth: 520 }}>
          An existing record matches the entered <b>Name</b> and <b>Date of Birth</b>. Choose an
          action to proceed.
        </Typography>
        <Stack direction="row" gap={2} mt={2} justifyContent="center" width="100%">
          <ButtonOutLine
            label="Create as new client"
            onClick={onCreateAsNew}
            sx={{ width: 200, height: 44 }}
          />
          <ButtonCustom
            label="View existing profile"
            onClick={onViewExisting}
            sx={{ width: 200, height: 44 }}
          />
        </Stack>
      </Stack>
    </DialogConfirm>
  );
};
