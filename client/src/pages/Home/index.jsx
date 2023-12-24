import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../components/Header'
import FlashSales from '../../components/HomePageComponents/FlashSales'
import BrowseByCategory from '../../components/HomePageComponents/BrowseByCategory'
import MusicExperience from '../../components/HomePageComponents/MusicExperience'
import NewArrival from '../../components/HomePageComponents/NewArrival'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'

const Home = () => {
  return (
    <>
    <Header/>
    <FlashSales title="Flash Sales"/>
    <BrowseByCategory />
    <FlashSales  title="Best Selling Products" />
    <MusicExperience/>
    <FlashSales  title="Explore Our Products" />
    <NewArrival/>
    <ServicesSection/>
    </>
  )
}

export default Home