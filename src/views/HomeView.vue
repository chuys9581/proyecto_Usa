<script setup>
import { ref } from 'vue';

const imageUrl = ref('https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698795904/lmvvud0igftvb3qrv9pd.jpg');
</script>

<template>
  <main class="home">
    <div :style="{ backgroundImage: `url(${imageUrl})` }" class="background-image">
      <div class="wave-container">
        <img class="wave" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698797908/kmefhyxfkmxuteub3ma8.png" alt="imagen de fondo olas" />
      </div>
      <div class="dogs-container">
        <img class="dogs" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698798667/vzfwfnegjxpqrphrpfmd.png" alt="imagen de perros" />
      </div>
      <div class="heart-container">
        <img class="heart" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698809788/l8xy4qjyag2cqoiha5mn.png" alt="imagen de perros" />
      </div>
      <div class="huella-container">
        <img class="huella" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698811852/tcvnzscjholffbnr2mfy.png" alt="imagen de perros" />
      </div>
      <div class="hueso-container">
        <img class="hueso" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698812573/oeiaqlltg5b4mv5er1ob.png" alt="imagen de perros" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.background-image {
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ajusta esto según tus necesidades */
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-image p {
  color: white; /* Ajusta el color según tus necesidades */
}

.dogs-container {
  position: absolute;
  bottom: 0;
  right: 7%;
  z-index: 2;
}

.dogs {
  max-width: 100%;
  height: auto;
  width: 57rem;
}

.wave-container {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.wave, .dogs, .heart {
  max-width: 100%;
  height: auto;
}

.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

.dogs {
  position: relative;
  z-index: 1;
}

.heart-container {
  z-index: 1; /* Asegura que la imagen "heart" esté encima de las otras imágenes */
  right: -35%;
  position: relative;
  bottom: -12%;
}

.huella-container {
  position: relative;
  left: -10%;
  top: 10%;
  animation: moverHuella .7s ease-in-out alternate infinite; /* Definimos la animación */
}

@keyframes moverHuella {
  0% {
    transform: translateY(0); /* Estado inicial */
  }
  100% {
    transform: translateY(5px); /* Estado final, ajusta la distancia del movimiento aquí */
  }
}

.hueso-container {
  position: relative;
  top: -20%;
  animation: moverHuella .7s ease-in-out alternate infinite; /* Definimos la animación */
}

</style>
