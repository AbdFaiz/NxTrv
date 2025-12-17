import Blog from "./components/Blog";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import Subscribe from "./components/Subscribe";
import Top from "./components/Top";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <Top />
    <Blog />
    <Review />
    <Subscribe />
    <Footer />
   </>
  );
}
