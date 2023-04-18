import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import {API_URL} from '@env';
import ProductCard from "../../Components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";

const Products = ({navigation}) => {

    const {data, loading, error} = useFetch(API_URL);

    const handleProductSelect = (id) => {
        navigation.navigate('DetailPage', {id});
    } 

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    return <FlatList data={data} renderItem={renderProduct} />

};

export default Products;

const styles = StyleSheet.create({
    loading_screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
})