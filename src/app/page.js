"use client";
import "./globals.css";
import NavBar from '../components/NavBar';
import Banner from "../components/Banner";
import Features from "../components/Features";
import Testomonial from "@/components/Testomonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const Page = () => {
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
