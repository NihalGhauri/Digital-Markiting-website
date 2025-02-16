import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Newsletter from "@/components/newsletter"
import CaseStudies from "@/components/case-studies"
import Footer from "@/components/footer"
import AboutSection from "@/components/About"


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <AboutSection/>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

