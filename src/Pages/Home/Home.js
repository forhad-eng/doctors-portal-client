import React from 'react'
import Banner from './Banner'
import ExtraInfo from './ExtraInfo'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExtraInfo />
            <MakeAppointment />
        </div>
    )
}

export default Home
