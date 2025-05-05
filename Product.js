import React, {useState,useEffect} from 'react';
import { SafeAreaView,FlatList, ActivityIndicator,Text} from 'react-native';

import Config from 'react-native-config';


import ProductCard from '../ProductCard/ProductCard';
import useFetch from '../pages/hooks/useFetch/useFetch';



function Product ({navigation}) {
   const {data,loading,error} = useFetch(Config.API_URL);

   const handleProduct = (id) => {
      navigation.navigate('DetailScreen', {id});
   }
   

    const renderProduct = ({item}) => <ProductCard product={item} 
     onSelect={() => handleProduct(item.id)}/>;

    if(loading) {
        return <ActivityIndicator size='large' />;
    }
    if (error) {
        return <Text>{error}</Text>
    }

    return (
        <SafeAreaView>
            <FlatList 
            data={data} renderItem={renderProduct} />
            
        </SafeAreaView>
    )
}
export default Product;
