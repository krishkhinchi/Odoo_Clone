import React from "react";
import Header from "./Header";

function Database() {
  document.title = "Odoo - Home";
  return (
    <>
      <Header />
      <div class="w-full max-w-4x4 text-center pt-20">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900">Databases</h1>
          <button class="px-4 py-2 bg-purple-700 text-white rounded">
            Create
          </button>
        </div>
        <div class="flex flex-col items-center">
          <img
            alt="Illustration of a smiling document with a purple background"
            class="mb-4"
            height="100"
            src="https://storage.googleapis.com/a1aa/image/39wF8Jww7Y1yxHEkHSFqISJ76N27pz931OXgATc7krY.jpg"
            width="100"
          />
          <h2 class="text-2xl font-semibold text-gray-900 mb-2">
            There is no online database linked to this account!
          </h2>
          <p class="text-gray-700 mb-2">
            If you have an online Odoo database and it's not showing up here, it
            might be not linked to your account.
          </p>
          <a class="text-teal-600" href="#">
            Contact us for assistance.
          </a>
        </div>
      </div>
    </>
  );
}

export default Database;
