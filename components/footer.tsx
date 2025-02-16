import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white  py-8 md:py-12 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Viral Spark Media Agency</h3>
            <p className="text-gray-400 text-sm">
              A top tier marketplace that helps market and build products that people love.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Our services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">SEO Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-white transition-colors cursor-pointer">Digital Marketing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Social Media</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
  <h4 className="font-semibold mb-4">Quick link</h4>
  <ul className="space-y-2 text-gray-400 text-sm">
    <li>
      <Link
        href="#about"
        className="hover:text-white transition-colors cursor-pointer"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        href="#services"
        className="hover:text-white transition-colors cursor-pointer"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        href="#contact"
        className="hover:text-white transition-colors cursor-pointer"
      >
        Contact Us
      </Link>
    </li>
  </ul>
</div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4">Contact us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>karachi, Pakistan</li>
              <li>viralsparkmediaagency@gmail.com</li>
            </ul>
          </div>
        </div>
      <div className="border-t border-gray-700 mt-10 md:mt-16 pt-6 text-center text-gray-500 text-sm space-y-2">
  <p className="font-medium">
    © 2025 <span className="text-white font-semibold">Viral Spark Media Agency</span>. All rights reserved.
  </p>
  <p className="text-gray-400">
made with <span className="text-red-500 ">&hearts;</span> by {''}
    <Link
  href="https://nihal-khan.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
              // className="text-black font-bold font-serif relative inline-block hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-blue-400 before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100
              // hover:translate-x-1"
               className="text-white font-bold font-serif relative inline-block hover:text-black bg-clip-text  transition-all duration-300 before:absolute before:inset-0 before:bg-blue-100 before:from-transparent before:to-transparent before:z-[-1] before:transition-transform before:duration-300 before:origin-left before:scale-x-0 hover:before:scale-x-100 hover:translate-x-2 shadow-lg"

>
  Nihal Khan Ghouri
</Link>

  </p>
</div>


      </div>
    </footer>
  )
}

