import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Components
import CommentCardFlex from "../../../components/Comments";

// Constantes
import icon from "../../../constants/icons";
import { fetchComments, selectCommentsState } from "../../../store/comments";

function Comments() {
  const dispatch = useDispatch();
  const { dtComments } = useSelector(selectCommentsState);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <Box p={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Comentarios de Usuarios
      </Typography>

      {dtComments.length === 0 ? (
        <Typography variant="body1">No hay comentarios.</Typography>
      ) : (
        dtComments.map((comment, index) => {


          return (
            <CommentCardFlex
              key={index}
              altAvatar={comment.alias?.[0] ?? "U"}
              srcAvatar="" // Sin imagen por ahora
              titleCardHeader={comment.alias}
              subheaderCardHeader={comment.formattedDate}
              icon={<icon.Delete />} // Icono de eliminar
              description={comment.text || comment.texto || ""}
            />
          );
        })
      )}
    </Box>
  );
}

export default Comments;
