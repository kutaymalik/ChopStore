import React from "react";
import LottieView from "react-native-web-lottie";

const Loading = () => {
    return <LottieView source={require('../../assets/loading.json')} autoPlay />
}

export default Loading;

