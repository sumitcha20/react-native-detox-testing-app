import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addQuotes } from "../actions";

import ListItem from "./ListItem";
import SampleData from '../qoutes'
export default function Home(props) {
    AsyncStorage.setItem('quotes', JSON.stringify(SampleData.quotes));
    const dispatch = useDispatch();
    const { navigation } = props;

    const [isFetching, setIsFetching] = useState(false);

    
    const dataReducer = useSelector((state) => state.dataReducer);
    const { quotes } = dataReducer;

    //==================================================================================================

    useEffect(() => getData(), []);

    //==================================================================================================

    const getData = () => {
        setIsFetching(true);
        AsyncStorage.getItem('quotes', (err, quotes) => {
            if (err) alert(err.message);
            else if (quotes !== null) dispatch(addQuotes(JSON.parse(quotes)));
            setIsFetching(false)
        });
    };

    //==================================================================================================

    const renderItem = ({item, index}) => {
        return (
            <ListItem item={item} index={index} navigation={navigation}/>
        )
    };

    //==================================================================================================

    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else{
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={quotes}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `quotes_${index}`}/>

                <TouchableHighlight style={styles.floatingButton}
                                    underlayColor='#ff7043'
                                    onPress={() => navigation.navigate('NewQuote', {title:"New Quote"})}>
                    <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                </TouchableHighlight>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#F5F5F5'
    },

    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    floatingButton:{
        backgroundColor: '#6B9EFA',
        borderColor: '#6B9EFA',
        height: 55,
        width: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        right: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});