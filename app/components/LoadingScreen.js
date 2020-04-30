import React, {useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import { AppLoading } from 'expo';

import SampleData from '../qoutes'

//1 - LOADING SCREEN
export default function LoadingScreen(props) {

    useEffect(() => checkLocalData(), []);

    function checkLocalData(){
        AsyncStorage.getItem('quotes', (err, data) => {
            if (data === null){
                AsyncStorage.setItem('quotes', JSON.stringify(SampleData.quotes));

                props.navigation.navigate('App');
            }else{
                props.navigation.navigate('App');
            }
        });
    }

    return <AppLoading/>;
}