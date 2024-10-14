'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './assets/logo.png'; // เปลี่ยนจาก absolute path เป็น relative path
import forest from './assets/03.jpg';
const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="bg-black text-white shadow-md absolute inset-x-0 top-0 z-50 h-16"> {/* กำหนดความสูงของ Navbar */}
        <nav aria-label="Global" className="flex items-center justify-between h-full p-4 lg:px-6"> {/* ใช้ h-full ให้เต็มความสูง */}
          <div className="flex items-center lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src={logo}
                className="h-12 w-auto max-w-full object-contain" // กำหนดให้โลโก้ไม่เกินขนาดแถบ
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8"> {/* ให้ช่องว่างระหว่างลิงก์น้อยลง */}
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src={logo}
                  className="h-12 w-auto max-w-full object-contain" // ปรับขนาดโลโก้ในเมนูมือถือ
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* Add your header image here */}
      <img
        src={forest} // Replace with your desired image URL
        alt="Header"
        className="w-full h-80 object-cover mt-16" // Added mt-16 to create space below the navbar
      />
      <div className="absolute inset-y-0 left-0 flex items-center justify-start pl-10"> {/* ปรับ left-0 และ justify-start เพื่อจัดข้อความทางซ้าย */}
        <h1 className="text-white text-4xl font-bold">Welcome to Come Camp</h1> {/* Customize your text here */}
      </div>
    </div>
  );
}
