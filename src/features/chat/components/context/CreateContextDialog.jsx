import React, { useEffect } from "react";
import PropTypes from "prop-types";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { IconPlus, IconX } from "@tabler/icons-react";
import FilledButton from "../../../../common/buttons/FilledButton";
import TextFieldCustom from "../../../../common/textField/TextFieldCustom";
import {
  ARIA_LABEL_CLOSE_BUTTON,
  CREATION_CONTEXT_BUTTON_TITLE,
  DIALOG_CONTEXT_TITLE,
  LABEL_FOR_TITLE_CONTEXT_FIELD,
} from "../../../../constants/context/createContextDialogCons";

function CreateContextDialog({
  open,
  onClose,
  onCreate,
  title,
  setTitle,
  fetchContextData,
}) {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onCreate();
    fetchContextData();
  };

  useEffect(() => {
    setTitle("");
  }, [open, setTitle]);

  const styles = {
    dialog: {
      borderRadius: "12px",
      width: "100%",
      maxWidth: "469px",
      margin: 0,
    },
    titleSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    dialogActions: { padding: "0 24px 16px 24px" },
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: styles.dialog,
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <Box sx={styles.titleSection}>
            <Typography variant="h4_16">{DIALOG_CONTEXT_TITLE}</Typography>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label={ARIA_LABEL_CLOSE_BUTTON}
            >
              <IconX />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <TextFieldCustom
            label={LABEL_FOR_TITLE_CONTEXT_FIELD}
            text={title}
            setText={setTitle}
            required
          />
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <FilledButton
            text={CREATION_CONTEXT_BUTTON_TITLE}
            type="submit"
            icon={<IconPlus />}
            onClick={() => {}}
          />
        </DialogActions>
      </form>
    </Dialog>
  );
}

CreateContextDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  fetchContextData: PropTypes.func,
};

CreateContextDialog.defaultProps = {
  fetchContextData: () => {},
};

export default CreateContextDialog;
