import { Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        marginTop: 3,
        backgroundColor: "#e1f5fe", // Fondo azulado suave
        width: "100%", // Ancho 100%
        padding: "20px 0", // Espaciado en la parte superior e inferior
      }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Typography variant="h6">Columna 1</Typography>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Typography variant="h6">Columna 2</Typography>
          <ul>
            <li>
              <a href="#">Enlace 3</a>
            </li>
            <li>
              <a href="#">Enlace 4</a>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Typography variant="h6">Síguenos</Typography>
          <IconButton
            href="#"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="#"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};
