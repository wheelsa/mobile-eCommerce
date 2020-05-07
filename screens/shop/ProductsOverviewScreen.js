import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import ProductsItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductsItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={()=>{}}
          onAddToCart={()=>{}}

        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
