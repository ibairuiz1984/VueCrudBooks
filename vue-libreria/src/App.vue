<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <a href="#" class="logo">Mis Libros</a>
        <button class="nav-toggle" @click="toggleMenu">☰</button>
        <ul :class="{'nav-links': true, 'active': isMenuOpen}">
          <li><RouterLink to="/">Libros</RouterLink></li>
          <li><RouterLink to="/nuevoLibro">Nuevo Libro</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* General */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  padding: 1rem;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Responsive */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    background-color: #0056b3;
    position: absolute;
    top: 60px;
    right: 10px;
    width: 200px;
    padding: 1rem;
    border-radius: 5px;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }
}
</style>
