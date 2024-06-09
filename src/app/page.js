"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./globals.css";
import NavBar from '../components/NavBar';
import Banner from "../components/Banner";
import Features from "../components/Features";
import Testomonial from "@/components/Testomonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div>
      <NavBar/> 
      <Banner/>
      <Features/>
      <Testomonial/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Page;
