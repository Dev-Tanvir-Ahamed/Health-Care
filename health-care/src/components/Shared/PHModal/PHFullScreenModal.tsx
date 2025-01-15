import CloseIcon from "@mui/icons-material/Close";
import {
  DialogContent,
  IconButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
};
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenModal({
  open = false,
  setOpen,
  title = "",
  children,
}: TModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Stack
          my={5}
          sx={{ mx: 3 }}
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h5" component="h1">
            {title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent sx={{ mx: 1 }}>{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
