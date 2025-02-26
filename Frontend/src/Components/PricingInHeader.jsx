import React from "react";
import Header from "./Header";

function PricingInHeader() {
  return (
    <>
      <Header />
      <div class="pt-32 text-center py-10">
        <h1
          class="text-4xl font-bold"
          style={{fontFamily: "mainFont", fontSize: 80}}
        // style="font-family: 'Pacifico', cursive;"
        >
          You are not dreaming!
        </h1>
        <div class="pt-5 flex justify-center items-center mt-4">
        <input type="checkbox" />
        <span class="slider round"></span> 
          <span class="mr-3 ml-2"> Yearly</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <span class="ml-2">Monthly</span>
        </div>
      </div>
      <div class="flex justify-center space-x-4 px-4">
        <div class="border rounded-lg shadow-lg p-6 w-64">
          <div class="border-b-4 border-blue-500 pb-4">
            <h2 class="text-xl font-bold">One App Free</h2>
            <p class="text-4xl font-bold text-blue-500">Rs 0</p>
            <p class="text-sm mt-2">For one app only, unlimited users</p>
          </div>
        </div>
        <div class="border rounded-lg shadow-lg p-6 w-64">
          <div class="border-b-4 border-red-500 pb-4">
            <h2 class="text-xl font-bold">Standard</h2>
            <p class="text-4xl font-bold text-red-500">
              Rs 580{" "}
              <span class="line-through text-gray-500 text-lg">725 Rs</span>
            </p>
            <p class="text-sm mt-2">/ user / month</p>
            <p class="text-sm mt-2">All apps</p>
          </div>
        </div>
        <div class="border rounded-lg shadow-lg p-6 w-64">
          <div class="border-b-4 border-teal-500 pb-4">
            <h2 class="text-xl font-bold">Custom</h2>
            <p class="text-4xl font-bold text-teal-500">
              Rs 890{" "}
              <span class="line-through text-gray-500 text-lg">1,150 Rs</span>
            </p>
            <p class="text-sm mt-2">/ user / month</p>
            <p class="text-sm mt-2">All apps</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingInHeader;
