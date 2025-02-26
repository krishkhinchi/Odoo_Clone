import React from "react";
import Header from "./Header";

function IndustriesInHeader() {
  return (
    <>
    <Header/>
      <div class="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
        <div>
          <h2 class="text-teal-600 text-xl font-bold">RETAIL</h2>
          <hr class="border-t-2 border-teal-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Agriculture Store</li>
            <li>Bakery</li>
            <li>Book Store</li>
            <li>Clothing Store</li>
            <li>Furniture Store</li>
            <li>Grocery Store</li>
            <li>Hardware Store</li>
            <li>Toy Store</li>
          </ul>
        </div>
        <div>
          <h2 class="text-blue-600 text-xl font-bold">SERVICES</h2>
          <hr class="border-t-2 border-blue-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Bike Leasing</li>
            <li>Billboard Rental</li>
            <li>Hair Salon</li>
            <li>Handyman</li>
            <li>Law firm</li>
            <li>Odoo Partner</li>
            <li>Property Owner Association</li>
            <li>Real Estate</li>
            <li>Talent Acquisition</li>
          </ul>
        </div>
        <div>
          <h2 class="text-red-600 text-xl font-bold">CONSTRUCTION</h2>
          <hr class="border-t-2 border-red-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Architecture Firm</li>
            <li>Construction</li>
            <li>Gardening</li>
            <li>Solar Energy</li>
          </ul>
        </div>
        <div>
          <h2 class="text-purple-600 text-xl font-bold">SUPPLY CHAIN</h2>
          <hr class="border-t-2 border-purple-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Beverage Distributor</li>
            <li>Corporate Gifts</li>
            <li>Custom Furniture Production</li>
            <li>Micro Brewery</li>
          </ul>
        </div>
        <div>
          <h2 class="text-purple-600 text-xl font-bold">HEALTH & FITNESS</h2>
          <hr class="border-t-2 border-purple-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Eyewear Store</li>
            <li>Fitness Center</li>
            <li>Sports Club</li>
            <li>Wellness Practitioners</li>
          </ul>
        </div>
        <div>
          <h2 class="text-orange-600 text-xl font-bold">HOSPITALITY</h2>
          <hr class="border-t-2 border-orange-200 my-2" />
          <ul class="space-y-2 text-gray-700">
            <li>Bar and Pub</li>
            <li>Fast Food</li>
            <li>Fine Dining Restaurant</li>
          </ul>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p class="text-purple-600 text-lg font-semibold">...and many more!</p>
        <i class="fas fa-arrow-right text-gray-400"></i>
      </div>
    </>
  );
}

export default IndustriesInHeader;