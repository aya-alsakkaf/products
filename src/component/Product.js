import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Product = ({ product }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        width: 120,
        padding: 10,
        borderRadius: 10,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 100, height: 120 }}
        source={{
          uri:
            "https://react-native-mini-project-items.eapi.joincoded.com/" +
            product.image,
        }}
      />
      <Text>{product.name}</Text>
      <Text>{product.price} KWD</Text>
    </TouchableOpacity>
  );
};

export default Product;
