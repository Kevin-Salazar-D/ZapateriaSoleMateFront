// Material UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

function CommentCardFlex({
  widthCard = 890,
  altAvatar = "Usuario",
  srcAvatar = "",
  titleCardHeader = "Nombre del Usuario",
  subheaderCardHeader = "Fecha del comentario",
  description = "Comentario del usuario...",
  icon = null,
}) {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: widthCard,
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <Stack spacing={3}>
        <Card
          elevation={1}
          sx={{
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <CardHeader
            avatar={<Avatar src={srcAvatar} alt={altAvatar} />}
            action={<IconButton aria-label="opciones">{icon}</IconButton>}
            title={
              <Typography fontWeight={600} variant="subtitle1">
                {titleCardHeader}
              </Typography>
            }
            subheader={subheaderCardHeader}
          />
          <Divider />
          <CardContent>
            <Typography
              variant="body1"
              sx={{ whiteSpace: "pre-line", lineHeight: 1.6 }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default CommentCardFlex;
