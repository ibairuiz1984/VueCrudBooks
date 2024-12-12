<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      listarLibros();
    });

    const libros = ref([]);
    const listarLibros = async () => {
      try {
        const response = await axios.get("http://localhost:3000/libros");
        libros.value = response.data.sort((a, b) => {
          const removeArticle = (title) => title.replace(/^(El|La|Los|Las|The)\s+/i, "").toLowerCase();
          return removeArticle(a.title).localeCompare(removeArticle(b.title));
        });
      } catch (e) {
        console.error("Error al listar libros:", e);
      }
    };

    const toggleReadStatus = async (libro) => {
      try {
        libro.read = !libro.read; // Cambiar estado localmente
        await axios.patch(`http://localhost:3000/libros/${libro.id}`, {
          read: libro.read,
        }); // Actualizar el servidor
      } catch (e) {
        console.error("Error al actualizar el estado del libro:", e);
      }
    };

    return { libros, toggleReadStatus };
  },
};
</script>

<template>
  <div>
    <h1>Inicio</h1>
    <div class="libros-grid">
      <div v-for="libro in libros" :key="libro.id" class="libro-card">
        <img :src="libro.cover" :alt="libro.title" class="libro-cover" />
        <h2>{{ libro.title }}</h2>
        <p><strong>Autor:</strong> {{ libro.author }}</p>
        <p><strong>Género:</strong> {{ libro.genre }}</p>
        <p>{{ libro.description }}</p>
        <button @click="toggleReadStatus(libro)">
          {{ libro.read ? "Marcar como no leído" : "Marcar como leído" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.libros-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.libro-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.libro-cover {
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 5px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>