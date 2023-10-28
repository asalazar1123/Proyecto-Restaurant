import { AppBar, Box, Container, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: 10,
          marginTop: 1,
          position: "static",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            alignItems: "center",
            flexWrap: "wrap", // Permite que los elementos se envuelvan en pantallas pequeñas
          }}
        >
          <Box sx={{ alignItems: "center", display: "flex" }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/513/544/original/chopsticks-illustration-eastern-traditional-cuisine-png.png"
              alt="logo"
              width="100"
              height="100"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <Typography variant="h3">Asia Bite</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2, // Espacio entre elementos del menú
            }}
          >
            <Typography variant="h6">Inicio</Typography>
            <Typography variant="h6">Conócenos</Typography>
            <Typography variant="h6">Menú</Typography>
            <Typography variant="h6">Contáctanos</Typography>
            <Typography variant="h6">Reservas</Typography>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};
