import React from 'react'
import Header from "./Header";

function CommunityInHeader() {
  return (
    <>
    <Header/>
    <footer class="pt-20 py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div>
                    <h3 class="text-orange-500 font-bold mb-2">LEARN</h3>
                    <hr class="border-t-2 border-orange-200 mb-4"/>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-700">Tutorials</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Documentation</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Certifications</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Training</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Podcast</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-teal-600 font-bold mb-2">GET THE SOFTWARE</h3>
                    <hr class="border-t-2 border-teal-200 mb-4"/>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-700">Download</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Compare Editions</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Releases</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-purple-600 font-bold mb-2">COLLABORATE</h3>
                    <hr class="border-t-2 border-purple-200 mb-4"/>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-700">Github</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Forum</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Events</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Translations</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Become a Partner</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Register your Accounting Firm</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-blue-600 font-bold mb-2">GET SERVICES</h3>
                    <hr class="border-t-2 border-blue-200 mb-4"/>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-700">Find a Partner</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Find an Accountant</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Meet an advisor</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Customer References</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Implementation Services</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Development Services</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Support</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Upgrades</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-orange-500 font-bold mb-2">EMPOWER EDUCATION</h3>
                    <hr class="border-t-2 border-orange-200 mb-4"/>
                    <ul>
                        <li class="mb-2"><a href="#" class="text-gray-700">Education Program</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Scale Up! Business Game</a></li>
                        <li class="mb-2"><a href="#" class="text-gray-700">Visit Odoo</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-8 flex justify-center space-x-4">
                <a href="#" class="text-gray-500"><i class="fab fa-github"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-youtube"></i></a>
                <a href="#" class="text-gray-500"><i class="fas fa-times"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-tiktok"></i></a>
                <a href="#" class="text-gray-500"><i class="fab fa-spotify"></i></a>
            </div>
            <div class="mt-4 flex justify-center space-x-4 text-gray-500">
                <span>+91 79 4050 0100</span>
                <span>WhatsApp with Us</span>
                <span>Get a demo</span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default CommunityInHeader