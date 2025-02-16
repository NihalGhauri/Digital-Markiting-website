import Image from "next/image"

export default function Hero() {
  return (
    <section id="home" className="py-8 md:py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] lg:h-[600px] mb-8 lg:mb-0 order-first lg:order-last">
            <Image src="/RDS-1-02-212.webp" alt="Digital Marketing" fill className="object-cover rounded-xl" priority />
          </div>
          <div className="text-center lg:text-left order-last lg:order-first">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
              Digital Marketing Made Simple
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 max-w-[600px] mx-auto lg:mx-0 text-sm md:text-base">
              Direct Your Business Value From Social Media. Creating The Best Design On Investment For Your Business And
              Campaign Management.
            </p>
            {/* <div className="grid grid-cols-3 gap-4 mb-6 md:mb-8">
              <div className="p-2 md:p-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">+150%</h3>
                <p className="text-xs md:text-sm text-gray-600">Revenue Increased</p>
              </div>
              <div className="p-2 md:p-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">+20M</h3>
                <p className="text-xs md:text-sm text-gray-600">Active Users</p>
              </div>
              <div className="p-2 md:p-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">+87k</h3>
                <p className="text-xs md:text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>
            <Button size="lg" className="w-full sm:w-auto">
              DETAILS NOW
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

