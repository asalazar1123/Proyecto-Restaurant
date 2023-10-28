import { Card, CardMedia, Box, Typography } from "@mui/material";

export const Portada = () => {
  return (
    <Box
      sx={{ display: "flex", gap: 2, marginTop: 3, justifyContent: "center" }}
    >
      <Card>
        <Box sx={{ position: "relative", width: 550, height: 700 }}>
          <CardMedia
            component="img"
            image="https://w7.pngwing.com/pngs/315/485/png-transparent-korean-cuisine-chinese-cuisine-vegetable-soup-napa-cabbage-cabbage-leaf-vegetable-food-recipe.png"
            alt="foto1"
            sx={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "10px",
              color: "white",
              borderRadius: 10,
            }}
          >
            <Typography
              p={3}
              variant="h4"
            >
              Ingredientes Frescos, Saber auténtico
            </Typography>
            <Typography variant="h6">
              En nuestro restaurante coreano, la frescura es la clave de nuestro
              éxito culinario. Cada día, seleccionamos cuidadosamente los
              ingredientes más frescos y de la más alta calidad para crear
              platos que reflejan la autenticidad y la esencia de la cocina
              coreana.
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card>
        <Box sx={{ position: "relative", width: 550, height: 700 }}>
          <CardMedia
            component="img"
            image="https://marcandoelpolo.com/wp-content/uploads/2015/01/Comida-Corea-rotator.jpg"
            alt="foto1"
            sx={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "10px",
              color: "white",
              borderRadius: 10,
            }}
          >
            <Typography
              p={3}
              variant="h3"
            >
              Nuestra Filosofía
            </Typography>
            <Typography variant="h6">
              En nuestro restaurante de comida coreana, nuestra filosofía es
              simple pero profunda: ofrecer autenticidad y sabor en cada bocado.
              Cada plato que servimos es una celebración de la rica herencia
              culinaria de Corea, elaborado con amor y respeto por las
              tradiciones centenarias.
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card>
        <Box sx={{ position: "relative", width: 550, height: 700 }}>
          <CardMedia
            component="img"
            image="https://www.thefork.es/blog/s3/files/styles/lightbox_content/public/body-images/kimchi.jpeg?itok=d0Zbd1pU"
            alt="foto1"
            sx={{ width: "100%", height: "100%" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "10px",
              color: "white",
              borderRadius: 10,
            }}
          >
            <Typography
              p={3}
              variant="h3"
            >
              Nuestro Compromiso con un Buen Servicio
            </Typography>
            <Typography variant="h6">
              En nuestro restaurante coreano, el sabor auténtico no es la única
              cosa que valoramos. También nos enorgullecemos de ofrecer un
              servicio excepcional a nuestros comensales. Creemos que una
              experiencia culinaria excepcional no solo se trata de la comida,
              sino también de cómo te sientes en nuestro restaurante.
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
