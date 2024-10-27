import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="md:px-16 lg:px-24 bg-gray-700 text-white py-10">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 mx-auto">
          <div className="">
            <h3 className="text-xl font-semibold">E-Shop</h3>
            <p className="mt-4">Your one-step fot all your needs. Shop with use and experience the best online shopping experiences</p>
          </div>
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to='/' className="hover:underline">Home</Link></li>
              <li><Link to='/shop' className="hover:underline">Shop</Link></li>
              <li><Link to='/contact' className="hover:underline">Contact</Link></li>
              <li><Link to='/about' className="hover:underline">About</Link></li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-lg font-semibold">Follow us</h4>
            <div className="mt-4 flex items-center space-x-4 text-2xl">
              <a href="#" className="hover:text-gray-400 duration-300"><FaFacebook/></a>
              <a href="#" className="hover:text-gray-400 duration-300"><FaTwitter/></a>
              <a href="#" className="hover:text-gray-400 duration-300"><FaGithub/></a>
              <a href="#" className="hover:text-gray-400 duration-300"><FaLinkedin/></a>
            </div>
            <form className="flex items-center justify-center mt-10" method="" action="">
              <input 
              type="email"
              placeholder="Enter Email" 
              className="w-full p-2 rounded-lg bg-gray-800 border-gray-600 focus:outline-none"/>
              <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg">Subcsribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 e-shop All right reserved</p>
            <div className="flex space-x-4 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer
