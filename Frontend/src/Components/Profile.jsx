import React from "react";
import krishhackz from "../img/KrishHackz.jpg";
import Header from "./Header";

function Profile() {
  document.title = "Odoo - Home";
  return (
    <>
      <Header />
      <div class="container mx-auto pt-20 p-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-2/3">
            <h1 class="text-3xl font-bold mb-6">My account</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
                <img
                  alt="Shopping bag icon"
                  class="mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/Wp2UdQC7U_j1eiXrueo_RrOot5x12KTDCZjqqx9XTkk.jpg"
                  width="50"
                />
                <div>
                  <h2 class="text-lg font-semibold">Your Orders</h2>
                  <p class="text-gray-600">Follow, view or pay your orders</p>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
                <img
                  alt="Invoice icon"
                  class="mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/WNxQe9asTh-gweh0fMOkA39m39M462SX9W88akhqlXM.jpg"
                  width="50"
                />
                <div>
                  <h2 class="text-lg font-semibold">Your Invoices</h2>
                  <p class="text-gray-600">
                    Follow, download or pay your invoices
                  </p>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-md flex items-center">
                <img
                  alt="Clock icon"
                  class="mr-4"
                  height="50"
                  src="https://storage.googleapis.com/a1aa/image/jPO3bdDb_NPjs0XFoUpKo3msjsKl2d07FHydoH6QRes.jpg"
                  width="50"
                />
                <div>
                  <h2 class="text-lg font-semibold">Timesheets</h2>
                  <p class="text-gray-600">
                    Review all timesheets related to your projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 mt-6 md:mt-0 md:ml-6">
            <div class="bg-white mt-10 p-6 rounded-lg shadow-md">
              <div class="flex items-center mb-4">
                <img
                  alt="User avatar"
                  class="mr-4"
                  height="50"
                  src={krishhackz}
                  width="50"
                />
                <div>
                  <h2 class="text-xl font-semibold">Krish Khinchi</h2>
                  <p class="text-gray-600">
                    <i class="fas fa-map-marker-alt"></i>
                    Ahmedabad, India
                  </p>
                  <p class="text-gray-600">
                    <i class="fas fa-envelope"></i>
                    krishhackz.in@outlook.com
                  </p>
                </div>
              </div>
              <a class="text-teal-600 hover:underline mb-4 block" href="#">
                <i class="fas fa-edit"></i>
                Edit information
              </a>
              <h3 class="text-lg font-semibold mb-2">Useful Links</h3>
              <ul class="list-none">
                <li>
                  <a class="text-teal-600 hover:underline" href="#">
                    My Partner Dashboard
                  </a>
                </li>
                <li>
                  <a class="text-teal-600 hover:underline" href="#">
                    My Apps Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
