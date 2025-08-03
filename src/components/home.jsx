import Booking from "./BookingSteps";
import HeroSection from "./heroSection";
import OfferedServices from "./OfferedServices";
import Destinations from "./TopDestinations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Subscription from "./Subscription";


export default function Home() {
  return (
    <>
    <div>
      <HeroSection/>
      <OfferedServices/>
      <Destinations/>
      <Booking/> 
      <Testimonials/>
      <Subscription/>
      <Footer/>
    </div>
    </>
  );
}
