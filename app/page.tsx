import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
  <Header />
  <Hero />
  <Services />
  <Pricing />
  <Cases />
  <Reviews />
  <LeadForm />
  <Contacts />
  <Footer />
</>
  );
}