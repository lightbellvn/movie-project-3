import React, { Component } from 'react'
import Header from './Header/Header'
import './MenuStyle.css'
import Carousel from '../Carousel/Carousel'
import NavBar from './Navbar/NavBar'


export default class IndexMenu extends Component {
    render() {
        return (
            <div className='mainTop'>
                <Header />
               <NavBar />
                <Carousel/>


            </div>
        )
    }
}
