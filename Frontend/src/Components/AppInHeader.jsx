import React from "react";
import Header from "./Header";

function AppInHeader() {
  return (
    <>
    <Header/>
    <div class="pt-20 container mx-auto ">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h2 class="text-teal-600 font-bold text-lg">FINANCE</h2>
          <hr class="border-t-2 border-teal-200 my-2" />
          <ul class="space-y-1">
            <li>Accounting</li>
            <li>Invoicing</li>
            <li>Expenses</li>
            <li>Spreadsheet (BI)</li>
            <li>Documents</li>
            <li>Sign</li>
          </ul>
        </div>

        <div>
          <h2 class="text-pink-600 font-bold text-lg">SALES</h2>
          <hr class="border-t-2 border-pink-200 my-2" />
          <ul class="space-y-1">
            <li>CRM</li>
            <li>Sales</li>
            <li>POS Shop</li>
            <li>POS Restaurant</li>
            <li>Subscriptions</li>
            <li>Rental</li>
          </ul>
        </div>

        <div>
          <h2 class="text-blue-600 font-bold text-lg">WEBSITES</h2>
          <hr class="border-t-2 border-blue-200 my-2" />
          <ul class="space-y-1">
            <li>Website Builder</li>
            <li>eCommerce</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Live Chat</li>
            <li>eLearning</li>
          </ul>
        </div>

        <div>
          <h2 class="text-purple-600 font-bold text-lg">SUPPLY CHAIN</h2>
          <hr class="border-t-2 border-purple-200 my-2" />
          <ul class="space-y-1">
            <li>Inventory</li>
            <li>Manufacturing</li>
            <li>PLM</li>
            <li>Purchase</li>
            <li>Maintenance</li>
            <li>Quality</li>
          </ul>
        </div>

        <div>
          <h2 class="text-indigo-600 font-bold text-lg">HUMAN RESOURCES</h2>
          <hr class="border-t-2 border-indigo-200 my-2" />
          <ul class="space-y-1">
            <li>Employees</li>
            <li>Recruitment</li>
            <li>Time Off</li>
            <li>Appraisals</li>
            <li>Referrals</li>
            <li>Fleet</li>
          </ul>
        </div>

        <div>
          <h2 class="text-orange-600 font-bold text-lg">MARKETING</h2>
          <hr class="border-t-2 border-orange-200 my-2" />
          <ul class="space-y-1">
            <li>Social Marketing</li>
            <li>Email Marketing</li>
            <li>SMS Marketing</li>
            <li>Events</li>
            <li>Marketing Automation</li>
            <li>Surveys</li>
          </ul>
        </div>

        <div>
          <h2 class="text-orange-600 font-bold text-lg">SERVICES</h2>
          <hr class="border-t-2 border-orange-200 my-2" />
          <ul class="space-y-1">
            <li>Project</li>
            <li>Timesheets</li>
            <li>Field Service</li>
            <li>Helpdesk</li>
            <li>Planning</li>
            <li>Appointments</li>
          </ul>
        </div>

        <div>
          <h2 class="text-purple-600 font-bold text-lg">PRODUCTIVITY</h2>
          <hr class="border-t-2 border-purple-200 my-2" />
          <ul class="space-y-1">
            <li>Discuss</li>
            <li>Approvals</li>
            <li>IoT</li>
            <li>VoIP</li>
            <li>Knowledge</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default AppInHeader;
