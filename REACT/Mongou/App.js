/**
 * Aplicación principal para visualización de películas
 * @author Luis Venegas
 */
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";

/**
 * Componente principal de la aplicación
 * @returns {React.Component} Componente App
 */
const App = () => {
  // Estados para almacenar películas y estado de carga
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efecto para cargar datos al iniciar
  useEffect(() => {
    // Obtener datos del servidor
    fetchMoviesData();
  }, []);

  /**
   * Función para obtener datos de películas del servidor
   */
  const fetchMoviesData = () => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar películas:", error);
        setLoading(false);
      });
  };

  // Mostrar indicador de carga mientras se obtienen los datos
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  /**
   * Renderiza cada elemento de la lista de películas
   * @param {Object} param0 - Item a renderizar
   * @returns {React.Component} Componente de tarjeta de película
   */
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.poster ? (
        <Image source={{ uri: item.poster }} style={styles.poster} />
      ) : (
        <View style={[styles.poster, styles.noPoster]}>
          <Text>No Image</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.plot}>{item.fullplot || "Sin descripción"}</Text>
      </View>
    </View>
  );

  // Renderizar lista de películas
  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
    />
  );
};

/**
 * Estilos para los componentes de la aplicación
 */
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  noPoster: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  plot: {
    fontSize: 12,
    color: "gray",
  },
});

export default App;