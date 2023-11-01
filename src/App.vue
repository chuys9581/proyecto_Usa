<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo-findmypet">
      <img class="findmypet" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698788972/gnnatyqtxc64ee5byips.png" alt="logo de empresa" />
      <div>
        <h1 class="letter-logo">Find My</h1>
        <h2 class="letter-logo2">Pet</h2>
      </div>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/nfc-y-qr">Nfc & Qr</RouterLink>
        <RouterLink to="/llaveros">LLaveros</RouterLink>
        <RouterLink to="/about">Nosotros</RouterLink>
        <RouterLink to="/perfil">Perfil</RouterLink>
      </nav>
    </div>
    <div>
      <img class="carrito-compras" src="https://res.cloudinary.com/dgjw8rpxa/image/upload/v1698794847/bi7oxjv6isbtbqvm6aeh.png" alt="imagen de carrito de compras" />
    </div>
  </header>


  <RouterView />
</template>

<style scoped>
.wrapper{
  margin-left: -8rem;
}
.logo-findmypet{
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-left: -6rem;
}

.findmypet{
  padding: 2rem;
  width: 5rem;
  height: 6rem;
}

.letter-logo{
  width: 8rem;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-left: -2.5rem;
}

.letter-logo2{
  width: 8rem;
  font-size: 1.5rem;
  margin-top: -1.8rem;
  margin-left: -2.5rem;
}

.carrito-compras{
  width: 2rem;
  height: 1.5rem;
  margin-top: 3.4rem;
  margin-left: -3rem;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-top: 3.5rem;
  display: flex;
}

nav a.router-link-exact-active {
  color: #F86C25 ;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: space-around;
  }
}
</style>
