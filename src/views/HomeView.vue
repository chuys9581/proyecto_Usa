<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue";
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
      <div class="presentacion">
        <h3 class="letter-presentacion">
          Porque sabemos que amas a tu mascota
        </h3>
        <h3 class="container-name">
          Te presentamos <div class="name-empresa">FIND MY PET</div>
        </h3>
        <h4 class="leyenda">"Nuestra innovadora Tarjeta Inteligente, <br>
          diseñada para brindar máxima seguridad <br> a tus queridas mascotas."
        </h4>
        <ButtonComponent></ButtonComponent>
      </div>
    </div>
  </main>
</template>

<style scoped>

.letter-presentacion{
  font-size: 1.7rem;
}
.container-name{
  margin-top: -1.5rem;
}

.name-empresa{
  color: #F86C25;
  font-size: 1.9rem;
}

.leyenda{
  margin-top: -1rem;
}
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
  right: -54%;
  position: relative;
  bottom: -11%;
}

.huella-container {
  position: relative;
  left: 8%;
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
  left: 18%;
  animation: moverHuella .7s ease-in-out alternate infinite; /* Definimos la animación */
}

.presentacion{
  position: relative;
  left: -57%;
  top: -10%;
  text-align: center;
  z-index: 3;
  font-size: 1.2rem;
}

</style>
