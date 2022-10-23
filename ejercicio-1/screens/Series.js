import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SeriesList } from "../components";

const DataImg = [
  {
    image: require("../images/ri.jpg"),
  },

];
const seriesData = [
  {
    category: "Comedia",
    data: [
     
      {
        title: "Rick and Morty",
        image: require("../images/co.jpg"),
        description: "10 temporadas",
      },

    ],
  },
  {
    category: "Accion",
    data: [
      {
        title: "Vikingos",
        image: require("../images/accion.jpg"),
        description: "10 temporadas",
      },
 

    ],
  },
  {
    category: "Romance",
    data: [
    
 
      {
        title: "La boda",
        image: require("../images/romance1.jpg"),
        description: "1 temporada",
      },
    ],
  },
];
export function Series() {
  return (
    <View style={styles.container}>
      <SeriesList swiperdata={DataImg} seriesData={seriesData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a2866bb8",
    alignItems: "center",
    justifyContent: "center",
  },
});
