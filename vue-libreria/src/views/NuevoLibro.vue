<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const title = ref("");
    const author = ref("");
    const description = ref("");
    const genre = ref("");
    const cover = ref("");

    const addBook = async () => {
      if (!title.value || !author.value || !description.value || !genre.value || !cover.value) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const newBook = {
        title: title.value,
        author: author.value,
        description: description.value,
        genre: genre.value,
        cover: cover.value,
        read: false,
      };

      try {
        await axios.post("http://localhost:3000/libros", newBook);
        alert("Libro agregado exitosamente.");
        title.value = "";
        author.value = "";
        description.value = "";
        genre.value = "";
        cover.value = "";
      } catch (e) {
        console.error("Error al agregar el libro:", e);
        alert("Hubo un error al agregar el libro.");
      }
    };

    return {
      title,
      author,
      description,
      genre,
      cover,
      addBook,
    };
  },
};
</script>

<template>
  <div>
    <h1>Nuevo Libro</h1>
    <form @submit.prevent="addBook" class="formulario">
      <div class="form-group">
        <label for="title">Título:</label>
        <input id="title" v-model="title" type="text" placeholder="Ingresa el título del libro" required />
      </div>
      <div class="form-group">
        <label for="author">Autor:</label>
        <input id="author" v-model="author" type="text" placeholder="Ingresa el autor del libro" required />
      </div>
      <div class="form-group">
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="description" placeholder="Ingresa una descripción del libro" required></textarea>
      </div>
      <div class="form-group">
        <label for="genre">Género:</label>
        <input id="genre" v-model="genre" type="text" placeholder="Ingresa el género del libro" required />
      </div>
      <div class="form-group">
        <label for="cover">URL de la portada:</label>
        <input id="cover" v-model="cover" type="url" placeholder="Ingresa la URL de la portada del libro" required />
      </div>
      <button type="submit" class="btn">Agregar Libro</button>
    </form>
  </div>
</template>

<style>
.formulario {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
