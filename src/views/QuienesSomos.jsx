import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const QuienesSomos = () => {
  const JumbotronContainer = styled("div")({
    position: "relative",
    width: 1900,
    height: 800,
  });

  const Img = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 100,
  });

  const TextOverlay = styled("div")({
    position: "absolute",
    borderRadius: 100,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    transition: "background-color 0.3s ease", // Agregar una transición a background-color
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Cambiar el fondo al pasar el mouse
    },
  });

  const TextContainer = styled("div")({
    maxWidth: "800px", // Ajusta el ancho del contenedor del texto
    padding: "20px",
    textAlign: "center",
  });

  return (
    <Box mt={3}>
      <JumbotronContainer>
        <Img
          src="https://a.cdn-hotels.com/gdcs/production50/d1916/51d76cc9-cbe8-4572-a671-545f882f1847.jpg"
          alt="comida"
        />
        <TextOverlay>
          <TextContainer>
            <Typography variant="h3">Quienes Somos</Typography>
            <Typography
              variant="h4"
              mt={8}
            >
              En [Nombre del Restaurante], nos apasiona ofrecer una auténtica
              experiencia culinaria coreana. Nuestra cocina está inspirada en
              siglos de tradición y sabor, desde el delicioso bulgogi, maridado
              a la perfección, hasta el tteokbokki picante y reconfortante.
              Nuestro equipo de chefs, dedicado y apasionado, trabaja
              incansablemente para traerte los sabores auténticos de Corea.
            </Typography>
          </TextContainer>
        </TextOverlay>
      </JumbotronContainer>
    </Box>
  );
};
