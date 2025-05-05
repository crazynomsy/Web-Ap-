import React, { useEffect } from 'react';
import { View,Text,Image, ActivityIndicator } from 'react-native';

import styles from './Detail.style';
import useFetch from '../pages/hooks/useFetch/useFetch';
import Config from 'react-native-config';


function Detail ({route}) {
    const {data,error,loading} = useFetch(`${Config.API_URL}/${id}`);
    const {id} = route.params;
    console.log(id);

    if(loading) {
        return <ActivityIndicator size='large' />

    }

    if(error) {
        return <Text>{error}</Text>
    }
    return (
        <View>
            <Image style={styles.image} />
            <View style={styles.body_container}></View>
                <Text style={styles.title}>detail</Text>
                <Text style={styles.desc}>detail</Text>
                <Text style={styles.price}>detail</Text>
            
        </View>
    )
}
export default Detail;