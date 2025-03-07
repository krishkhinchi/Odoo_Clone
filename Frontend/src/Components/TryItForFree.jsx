import React from "react";

function TryItForFree() {
  return (
    <>
      <div class="bg-gradient-to-b from-purple-800 to-purple-600 text-center py-16">
        <h1 class="text-4xl font-bold text-white">Choose your Apps</h1>
        <p class="text-lg text-white mt-2">
          Free instant access, no credit card required.
        </p>
      </div>
      <div class="max-w-4xl mx-auto ml-0 mt-5 p-4">
        <h2 class="text-gray-700 text-lg font-bold mb-4">WEBSITE</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div class="flex items-center">
              <img
                alt="Website icon"
                class="w-10 h-10 mr-4"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/MT3g-gnMVpnvWfmScycNmh8NuCq7Ve71DPa5xdJJpYU.jpg"
                width="40"
              />
              <span class="text-gray-800 font-medium">Website</span>
            </div>
            <input class="form-radio text-purple-600" name="app" type="radio" />
          </div>
          <div class="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div class="flex items-center">
              <img
                alt="eCommerce icon"
                class="w-10 h-10 mr-4"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/GF-HIiyKBmfKZFZ0hTAJrh5XCXZq2x2KeymBObfP5lU.jpg"
                width="40"
              />
              <span class="text-gray-800 font-medium">eCommerce</span>
            </div>
            <input class="form-radio text-purple-600" name="app" type="radio" />
          </div>
          <div class="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div class="flex items-center">
              <img
                alt="Live Chat icon"
                class="w-10 h-10 mr-4"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/T9_e6tRJrqPpriGhEhO4XiodxAe_hN87jXhQ4yXCtKQ.jpg"
                width="40"
              />
              <span class="text-gray-800 font-medium">Live Chat</span>
            </div>
            <input class="form-radio text-purple-600" name="app" type="radio" />
          </div>
          <div class="bg-white p-4 rounded-lg shadow flex items-center justify-between">
            <div class="flex items-center">
              <img
                alt="eLearning icon"
                class="w-10 h-10 mr-4"
                height="40"
                src="https://storage.googleapis.com/a1aa/image/mrMWi8jzJJmE-1ko9ZMvS0J8Umaj74smzffueQOJ8j8.jpg"
                width="40"
              />
              <span class="text-gray-800 font-medium">eLearning</span>
            </div>
            <input class="form-radio text-purple-600" name="app" type="radio" />
          </div>
        </div>
      </div>
      <div class="w-full max-w-4xl p-4 mt-5">
        <h1 class="text-xl font-bold text-gray-800 mb-4">SALES</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="CRM icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/eD0yrJf4wsjItwZM5-ZLR-MYO4yJw4ZN2hfkdSUzUC4.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">CRM</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Sales icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/QWaGv7MivwjS1NqLvPGCzizdbTffnwcZLZDU95Bepy8.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Sales</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Invoicing icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/axeGdGJ22J44U7TP07_U7_ckCNYMNOi2uKVnh6qQgGw.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Invoicing</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Sign icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/kBgaJMQ5T46WPwJCfcsQFc4o9XAKPRKtOBAxcBmFN3Q.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Sign</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Point of Sale icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/H8qhi0UZU4QNzAoYssFvXgZ3nqu2OgyQ90rjXNpyUlA.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Point of Sale</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Restaurant icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/qaBk6jEi01LkwfWi9VQI0XNWul3glnPxvLtC0fTROAE.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Restaurant</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Subscriptions icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/xnZ4wJTVWauDb9RqK7WkBILQEuwwVqTDa6vyD9YO5sw.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Subscriptions</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Rental icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/h7hmAQ_YXlPxOF5zb4lXrKvuTgdaIPjmkaYC2DHIvR4.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Rental</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
          <div class="flex items-center bg-white p-4 rounded-lg shadow">
            <img
              alt="Field Service icon"
              class="w-10 h-10 mr-4"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/4ZRdY5r-FnGBvDgIQh0B4OODtbxal2FgsA_0LQvUmBQ.jpg"
              width="40"
            />
            <span class="text-gray-800 font-medium">Field Service</span>
            <input class="ml-auto" name="sales-option" type="radio" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TryItForFree;
