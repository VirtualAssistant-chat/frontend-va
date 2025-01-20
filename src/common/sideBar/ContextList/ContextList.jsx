import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  IconButton,
  ListItemText,
  Tooltip,
  useTheme,
} from "@mui/material";
import { IconTrash, IconPencilMinus } from "@tabler/icons-react";

export default function ContextList({
  requestData,
  idContextSelect,
  setIdContext,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleContextClick = (contextId) => {
    navigate(`/chat/${contextId}`);
    setIdContext(contextId);
  };

  const handleEditClick = () => {};

  const textStyles = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    flex: "1",
  };
  return (
    <List data-testid="context-list">
      {[...requestData].reverse().map((context) => (
        <ListItem key={context.idContext} disablePadding>
          <Tooltip title={context.title} style={{ maxWidth: "100%" }}>
            <ListItemButton
              onClick={() => handleContextClick(context.idContext)}
              style={{
                background:
                  context.idContext === idContextSelect
                    ? theme.palette.selectedOption.main
                    : "transparent",
                color:
                  context.idContext === idContextSelect
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                borderRadius: "4px",
              }}
            >
              <ListItemText
                sx={textStyles}
                primary={context.title}
                primaryTypographyProps={{ noWrap: true }}
              />
              {context.idContext === idContextSelect && (
                <div style={{ display: "flex", gap: "4px" }}>
                  <IconButton
                    style={{ color: theme.palette.primary.main }}
                    onClick={handleEditClick}
                  >
                    <IconPencilMinus size={20} />
                  </IconButton>
                  <IconButton style={{ color: theme.palette.primary.main }}>
                    <IconTrash size={20} />
                  </IconButton>
                </div>
              )}
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
    </List>
  );
}

ContextList.propTypes = {
  requestData: PropTypes.arrayOf(
    PropTypes.shape({
      idContext: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      idUser: PropTypes.number.isRequired,
    }),
  ).isRequired,
  idContextSelect: PropTypes.number,
  setIdContext: PropTypes.func,
};

ContextList.defaultProps = {
  idContextSelect: null,
  setIdContext: () => {},
};
