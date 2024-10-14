import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ProductDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text>Product Name</Text>
      <Text>Product Image</Text>
      <Text>Product Price</Text>

      <TouchableOpacity
        onPress={() => {
          alert("Bought!");
        }}
        style={{
          backgroundColor: "purple",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Purchase
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;
