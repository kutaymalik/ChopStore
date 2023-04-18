import React from "react";
import LottieView from 'react-native-web-lottie';

const Error = () => {
    return <LottieView source={require('../../assets/error.json')} autoPlay />;
}

export default Error;