import React, { useState, useRef } from "react";

export default function DashboardPage() {
  // const { logout } = useAuth();
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">

        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

          <div className="flex flex-col flex-grow rounded mt-4">
            <h1>Dashboard page in work!</h1>
          </div>
        </div>
        <footer className="footer px-4 py-6">
          <div className="footer-content">
            <p className="text-sm text-gray-600 text-center">
              © Brandname 2020. All rights reserved.{" "}
              <a href="https://twitter.com/iaminos">by iAmine</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
