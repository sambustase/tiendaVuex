<template>
    <div>
      <h1>Tienda 32 bits</h1>
      <h3>Tienda de juegos</h3>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="juego in juegos" :key="juego.codigo">
            <td>{{ juego.codigo }}</td>
            <td>{{ juego.nombre }}</td>
            <td>
              <input type="number" v-model.number="juego.stock" @blur="actualizarStock(juego.codigo, juego.stock)" />
            </td>
            <td>$ {{ juego.precio }}</td>
            <td>
              <button @click="actualizarStock(juego.codigo, juego.stock)">Actualizar Stock</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'Videojuegos',
    computed: {
      ...mapState(['juegos'])
    },
    methods: {
      ...mapActions(['obtenerJuegos', 'actualizarStock']),
      async fetchJuegos() {
        await this.obtenerJuegos();
      }
    },
    created() {
      this.fetchJuegos();
    }
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  input[type="number"] {
    width: 60px;
    padding: 5px;
  }
  button {
    padding: 5px 10px;
    background-color: #42b883;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #358e72;
  }
  </style>
  