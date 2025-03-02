    import React from 'react'
    import { FaFacebook } from "react-icons/fa6";
    import { IoLogoInstagram } from "react-icons/io5";
    import { FaXTwitter } from "react-icons/fa6";
    import { FaLinkedin } from "react-icons/fa";

    function Footer() {
    return (
            <footer className="bg-gray-900 text-white pt-16 pb-6 ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="text-2xl font-bold mb-4">Blog<span className="text-indigo-400">Space</span></div>
                        <p className="text-gray-400 mb-6">A community of passionate writers and readers sharing ideas, stories, and knowledge across various topics and interests.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-6 h-10 rounded-fullflex items-center justify-center transition-colors">
                            <FaFacebook className='w-full h-full ' />
                            </a>
                            <a href="#" className="w-6 h-10 rounded-full flex items-center justify-center transition-colors">
                                <FaXTwitter className='w-full h-full '/>
                            </a>
                            <a href="#" className="w-6 h-10 rounded-full flex items-center justify-center  transition-colors">
                            <IoLogoInstagram className='w-full h-full ' />
                            </a>
                            <a href="#" className="w-6 h-10 rounded-full  flex items-center justify-center transition-colors">
                            <FaLinkedin className='w-full h-full '/>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Featured</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Archives</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lifestyle</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Write for Us</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 text-center">
                    <p>&copy; 2025 BlogSpace. All rights reserved.</p>
                </div>
            </div>
        </footer>
        

    )
    }

    export default Footer
