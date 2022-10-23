import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Preview, MoviesList } from "../components";

const main = [
  {
    image: require("../images/mav2.jpg"),

  },

];

const moviesData = [

  {
    category: "Comedia",
    data: [
      {
        image: require("../images/jim1.jpg"),
      },
      {
        image: require("../images/jim3.jpg"),
      },
      {
        image: require("../images/jim4.jpg"),
      },
      {
        image: require("../images/jim2.jpg"),
      },
    
    ],
  },
  
 
  {
    category: "Acción",
    data: [
      {
        image: require("../images/mib.jpg"),
      },
      {
        image: require("../images/mav1.jpg"),
      },
      {
        image: require("../images/mav2.jpg"),
      },
      {
        image: require("../images/mav3.jpg"),
      },
      {
        image: require("../images/mib.jpg"),
      },
     
   
    ],
  },
 


  {
    category: "Romance",
    data: [
      {
        image: require("../images/ro1.jpg"),
      },
      {
        image: require("../images/ro2.jpg"),
      },
      {
        image: require("../images/ro3.jpg"),
      },
      {
        image: require("../images/ro4.jpg"),
      },
   
    ],
  },
];

export function Movies() {
  return (
    <View style={styles.container}>
      <MoviesList swiperdata={main} moviesData={moviesData} />
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
