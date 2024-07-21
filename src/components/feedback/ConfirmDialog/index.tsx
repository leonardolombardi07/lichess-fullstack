import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description: React.ReactNode;
  onConfirm: () => void;
  onClose: () => void;
  confirmText?: string;
  cancelText?: string;
  error?: string | null;
}

export default function ConfirmDialog({
  open,
  title,
  description,
  onConfirm,
  onClose,
  cancelText,
  confirmText,
  error,
}: ConfirmDialogProps) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        {title && <DialogTitle>{title}</DialogTitle>}

        <DialogContent>
          {description ? (
            typeof description === "string" ? (
              <DialogContentText>{description}</DialogContentText>
            ) : (
              description
            )
          ) : null}
        </DialogContent>

        <DialogActions>
          {cancelText && (
            <Button onClick={onClose}>{cancelText || "Cancel"}</Button>
          )}
          <Button onClick={onConfirm}>{confirmText || "Ok"}</Button>
        </DialogActions>

        {error && (
          <Alert severity="error">
            <AlertTitle>Erro</AlertTitle>
            {error}
          </Alert>
        )}
      </Dialog>
    </div>
  );
}
