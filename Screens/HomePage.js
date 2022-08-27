import React from 'react';
import TheEnd from '../Components/TheEnd';
import TheFooter from '../Components/TheFooter';
import TheMiddleEra from '../Components/TheMiddleEra';
import TheNavBar from '../Components/TheNavBar';
import '../Css/TheNavBar.css'

const HomePage = () => {
    return (
        <>
            <TheNavBar/>
            <TheMiddleEra/>
            <TheEnd/>
            <TheFooter/>
        </>

    )
}

export default HomePage