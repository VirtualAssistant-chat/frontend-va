import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  IconButton,
  Drawer,
  Box,
  Divider,
  useTheme,
} from "@mui/material";
import { IconArrowBarLeft, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../buttons/FilledButton";
import {
  DRAWER_TITLE,
  DRAWER_WIDTH,
  NEW_REQUEST_BUTTON,
} from "../../constants/sideBar/contentSectionConst";
import ContextList from "./ContextList/ContextList";
import CreateContextDialog from "../../features/chat/components/context/CreateContextDialog";
import { createContextByAUser } from "../../app/services/contextService";
import useAlert from "../../hooks/alerts/UseAlert";
import {
  ERROR_CREATING_CONTEXT_CONTENT,
  ERROR_CREATING_CONTEXT_TITLE,
  SUCCESSFULLY_REQUEST_CREATION_CONTENT,
  SUCCESSFULLY_REQUEST_CREATION_TITLE,
} from "../../constants/context/contextAlertCons";
import { USER_ID } from "../../constants/user/mokedUserCons";

export default function CustomDrawer({
  open,
  handleDrawerClose,
  contextList,
  fetchContextData,
}) {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [idContext, setIdContext] = useState(null);
  const navigate = useNavigate();
  const alert = useAlert();
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleNewRequest = async () => {
    try {
      const context = {
        title,
        userRequest: {
          idGoogle: "",
          idUser: USER_ID,
          spotifyToken: "",
        },
      };
      const createResponse = await createContextByAUser(context);

      if (!createResponse?.idContext) {
        throw new Error();
      }
      navigate(`/chat/${createResponse.idContext}`);
      setIdContext(createResponse.idContext);
      alert.success(
        SUCCESSFULLY_REQUEST_CREATION_TITLE,
        SUCCESSFULLY_REQUEST_CREATION_CONTENT,
      );
    } catch (error) {
      alert.error(ERROR_CREATING_CONTEXT_TITLE, ERROR_CREATING_CONTEXT_CONTENT);
    }
    handleCloseDialog();
  };

  const styles = {
    drawer: {
      "& .MuiDrawer-paper": {
        width: `${DRAWER_WIDTH}px`,
        overflow: "hidden",
        padding: "20px 52px",
        boxSizing: "border-box",
        boxShadow: theme.rectangle.shadow.boxShadow,
      },
    },
    drawerHeader: {
      marginBottom: "26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    divider: {
      margin: "30px 0 15px 0",
      backgroundColor: theme.palette.grey.light,
    },
    contextList: {
      overflowY: "auto",
    },
  };

  return (
    <Drawer variant="persistent" sx={styles.drawer} anchor="left" open={open}>
      <Box data-testid="drawerHeader" sx={styles.drawerHeader}>
        <Typography variant="h3_18">{DRAWER_TITLE}</Typography>
        <IconButton onClick={handleDrawerClose}>
          <IconArrowBarLeft />
        </IconButton>
      </Box>
      <FilledButton
        text={NEW_REQUEST_BUTTON}
        onClick={handleOpenDialog}
        icon={<IconPlus />}
      />
      <Divider sx={styles.divider} />
      <div style={styles.contextList}>
        <ContextList
          requestData={contextList}
          idContextSelect={idContext}
          setIdContext={setIdContext}
        />
      </div>
      {contextList && contextList.length > 0 && (
        <Divider data-testid="divider" />
      )}
      <CreateContextDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onCreate={handleNewRequest}
        title={title}
        setTitle={setTitle}
        fetchContextData={fetchContextData}
      />
    </Drawer>
  );
}

CustomDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  contextList: PropTypes.arrayOf(
    PropTypes.shape({
      idContext: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      idUser: PropTypes.number.isRequired,
    }),
  ).isRequired,
  fetchContextData: PropTypes.func,
};

CustomDrawer.defaultProps = {
  fetchContextData: () => {},
};
