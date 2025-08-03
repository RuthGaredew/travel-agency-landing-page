import Booking from "./BookingSteps";
import HeroSection from "./heroSection";
import OfferedServices from "./OfferedServices";
import Destinations from "./TopDestinations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Subscription from "./Subscription";
import Logos from "./logos";


export default function Home() {
  return (
    <>
    <div>
      <HeroSection/>
      <OfferedServices/>
      <Destinations/>
      <Booking/> 
      <Testimonials/>
      <Logos/>
      <Subscription/>
      <Footer/>
    </div>
    </>
  );
}
