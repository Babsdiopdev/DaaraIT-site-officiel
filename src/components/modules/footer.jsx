import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="w-full md:h-[500px] h-[650px]">
      <div class="bg-[#0C1F3C] mx-auto w-full md:h-[450px] h-[600px] flex justify-center items-center">
        <div class="grid grid-cols-2 md:gap-[200px] gap-6   lg:py-8 md:grid-cols-4">
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class=" hover:underline">
                  Contact Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Ordering & Payment
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Shipping
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Return
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  About Adobe Xd kid
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Press Enquiries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class=" hover:underline">
                  Contact Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Ordering & Payment
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Shipping
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Return
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  About Adobe Xd kid
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Work With Us
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li class="mb-4">
                <Link href="#" class="hover:underline">
                  Press Enquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-white mx-auto w-full h-[50px]  flex justify-center items-center">
        <span class="text-md  text-[#000000] dark:text-gray-300 sm:text-center">
          © Copyright 2023 <Link to="#">Daara-it</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
