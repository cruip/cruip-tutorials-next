"use client";

import { useState } from "react";

export default function FeatureComparisonTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div className="mx-auto grid max-w-sm text-sm md:-mx-6 md:max-w-none md:grid-cols-4">
      {/* Column with labels */}
      <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
        {/* Pricing toggle */}
        <div className="relative flex flex-col justify-end bg-white px-6 dark:bg-slate-900">
          <div className="border-slate-200 pb-5 dark:border-slate-700 md:border-b">
            {/* Toggle switch */}
            <div className="max-md:text-center">
              <div className="inline-flex items-center whitespace-nowrap">
                <div className="mr-2 text-sm text-slate-500 md:max-lg:sr-only">
                  Monthly
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="peer sr-only"
                    checked={isAnnual}
                    onChange={() => setIsAnnual(!isAnnual)}
                  />
                  <label
                    htmlFor="toggle"
                    className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500"
                  >
                    <span className="sr-only">Pay Yearly</span>
                  </label>
                </div>
                <div className="ml-2 text-sm text-slate-500">
                  Yearly <span className="text-emerald-500">(-20%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* # Platform */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-1"
          aria-hidden="true"
        >
          <div className="mt-4 py-2 font-medium text-slate-900">Platform</div>
        </div>
        {/* Account Access */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-2"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Account Access
          </div>
        </div>
        {/* Custom Domains */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-3"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Custom Domains
          </div>
        </div>
        {/* Receipts Forward */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-4"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Receipts Forward
          </div>
        </div>
        {/* Supplier Management */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-5"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Supplier Management
          </div>
        </div>
        {/* # Features */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-6"
          aria-hidden="true"
        >
          <div className="mt-4 py-2 font-medium text-slate-900">Features</div>
        </div>
        {/* Generate Public URLs */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-7"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Generate Public URLs
          </div>
        </div>
        {/* API Integrations */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-8"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            API Integrations
          </div>
        </div>
        {/* Extra Add-ons */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-9"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Extra Add-ons
          </div>
        </div>
        {/* Admin Roles */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-10"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Admin Roles
          </div>
        </div>
        {/* Admin Roles */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-11"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Admin Roles
          </div>
        </div>
        {/* Enterprise Add-ons */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-12"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Enterprise Add-ons
          </div>
        </div>
        {/* # Support */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-[13]"
          aria-hidden="true"
        >
          <div className="mt-4 py-2 font-medium text-slate-900">Support</div>
        </div>
        {/* Custom Connection */}
        <div
          className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 max-md:hidden md:order-[14]"
          aria-hidden="true"
        >
          <div className="border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            Custom Connection
          </div>
        </div>
      </section>
      {/* End: Column with labels */}

      {/* Essential table */}
      <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
        <div className="relative flex flex-col justify-end bg-white px-4 dark:bg-slate-900 lg:px-6">
          <div className="mb-5 grow">
            <div className="mb-0.5 font-semibold text-slate-900 dark:text-slate-200">
              Essential
            </div>
            <div className="mb-1">
              <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                $
              </span>
              <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                {isAnnual ? "29" : "35"}
              </span>
              <span className="font-medium text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-500">
              Unlimited placeholder texts.
            </div>
          </div>
          <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
            <a
              className="group inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
              href="#0"
            >
              Get Started{" "}
              <span className="ml-1 tracking-normal text-indigo-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                -&gt;
              </span>
            </a>
          </div>
        </div>
        {/* # Platform */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-1 lg:px-6">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Platform
          </div>
        </div>
        {/* Account Access */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-2 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              400 <span className="md:sr-only">Account Access</span>
            </span>
          </div>
        </div>
        {/* Custom Domains */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-3 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              4 <span className="md:sr-only">Custom Domains</span>
            </span>
          </div>
        </div>
        {/* Receipts Forward */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-4 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Receipts Forward</span>
            </span>
          </div>
        </div>
        {/* Supplier Management */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-5 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              1 <span className="md:sr-only">Supplier Management</span>
            </span>
          </div>
        </div>
        {/* # Features */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-6 lg:px-6">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Features
          </div>
        </div>
        {/* Generate Public URLs */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-7 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Generate Public URLs</span>
            </span>
          </div>
        </div>
        {/* API Integrations */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-8 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">API Integrations</span>
            </span>
          </div>
        </div>
        {/* Extra Add-ons */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-9 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Extra Add-ons</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-10 lg:px-6">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-11 lg:px-6">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Enterprise Add-ons */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-12 lg:px-6">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Enterprise Add-ons</span>
            </span>
          </div>
        </div>
        {/* # Support */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-[13] lg:px-6">
          <div className="sr-only mt-4 py-2 font-medium text-slate-900">
            Support
          </div>
        </div>
        {/* Custom Connection */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-[14] lg:px-6">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Custom Connection</span>
            </span>
          </div>
        </div>
      </section>
      {/* End: Essential table */}

      {/* Perform table */}
      <section className="dark md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
        <div className="relative flex flex-col justify-end bg-white px-4 dark:bg-slate-900 lg:px-6">
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
          <div className="mb-5 grow">
            <div className="mb-0.5 font-semibold text-slate-900 dark:text-slate-200">
              Perform
            </div>
            <div className="mb-1">
              <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                $
              </span>
              <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                {isAnnual ? "49" : "54"}
              </span>
              <span className="font-medium text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-500">
              Unlimited placeholder texts.
            </div>
          </div>
          <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
            <a
              className="group inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
              href="#0"
            >
              Get Started{" "}
              <span className="ml-1 tracking-normal text-indigo-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                -&gt;
              </span>
            </a>
          </div>
        </div>
        {/* # Platform */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-1 lg:px-6">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Platform
          </div>
        </div>
        {/* Account Access */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-2 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              800 <span className="md:sr-only">Account Access</span>
            </span>
          </div>
        </div>
        {/* Custom Domains */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-3 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              10 <span className="md:sr-only">Custom Domains</span>
            </span>
          </div>
        </div>
        {/* Receipts Forward */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-4 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Receipts Forward</span>
            </span>
          </div>
        </div>
        {/* Supplier Management */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-5 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              10 <span className="md:sr-only">Supplier Management</span>
            </span>
          </div>
        </div>
        {/* # Features */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-6 lg:px-6">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Features
          </div>
        </div>
        {/* Generate Public URLs */}
        <div className="flex flex-col justify-end bg-white px-4 dark:bg-slate-900 md:order-7 lg:px-6">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Generate Public URLs</span>
            </span>
          </div>
        </div>
        {/* API Integrations */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-8">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">API Integrations</span>
            </span>
          </div>
        </div>
        {/* Extra Add-ons */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-9">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Extra Add-ons</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-10">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-11">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Enterprise Add-ons */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-12">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Enterprise Add-ons</span>
            </span>
          </div>
        </div>
        {/* # Support */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-[13]">
          <div className="sr-only mt-4 py-2 font-medium text-slate-900">
            Support
          </div>
        </div>
        {/* Custom Connection */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-[14]">
          <div className="flex items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 max-md:sr-only">
            <span>
              <span className="md:sr-only">Custom Connection</span>
            </span>
          </div>
        </div>
      </section>
      {/* End: Perform table */}

      {/* Enterprise table */}
      <section className="md:contents [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
        <div className="relative flex flex-col justify-end bg-white px-6 dark:bg-slate-900">
          <div className="mb-5 grow">
            <div className="mb-0.5 font-semibold text-slate-900 dark:text-slate-200">
              Enterprise
            </div>
            <div className="mb-1">
              <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                $
              </span>
              <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
                {isAnnual ? "79" : "85"}
              </span>
              <span className="font-medium text-slate-500">/mo</span>
            </div>
            <div className="text-sm text-slate-500">
              Unlimited placeholder texts.
            </div>
          </div>
          <div className="border-b border-slate-200 pb-4 dark:border-slate-700">
            <a
              className="group inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 transition-colors duration-150 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
              href="#0"
            >
              Get Started{" "}
              <span className="ml-1 tracking-normal text-indigo-300 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                -&gt;
              </span>
            </a>
          </div>
        </div>
        {/* # Platform */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-1">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Platform
          </div>
        </div>
        {/* Account Access */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-2">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Account Access</span>
            </span>
          </div>
        </div>
        {/* Custom Domains */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-3">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Custom Domains</span>
            </span>
          </div>
        </div>
        {/* Receipts Forward */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-4">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Receipts Forward</span>
            </span>
          </div>
        </div>
        {/* Supplier Management */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-5">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              Unlimited <span className="md:sr-only">Supplier Management</span>
            </span>
          </div>
        </div>
        {/* # Features */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-6">
          <div className="mt-4 py-2 font-medium text-slate-900 md:sr-only">
            Features
          </div>
        </div>
        {/* Generate Public URLs */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-7">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Generate Public URLs</span>
            </span>
          </div>
        </div>
        {/* API Integrations */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-8">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">API Integrations</span>
            </span>
          </div>
        </div>
        {/* Extra Add-ons */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-9">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Extra Add-ons</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-10">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Admin Roles */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-11">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Admin Roles</span>
            </span>
          </div>
        </div>
        {/* Enterprise Add-ons */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-12">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Enterprise Add-ons</span>
            </span>
          </div>
        </div>
        {/* # Support */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-[13]">
          <div className="sr-only mt-4 py-2 font-medium text-slate-900">
            Support
          </div>
        </div>
        {/* Custom Connection */}
        <div className="flex flex-col justify-end bg-white px-6 dark:bg-slate-900 md:order-[14]">
          <div className="flex h-full items-center border-b border-slate-200 py-2 text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <svg
              className="mr-3 shrink-0 fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
            >
              <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
            </svg>
            <span>
              <span className="md:sr-only">Custom Connection</span>
            </span>
          </div>
        </div>
      </section>
      {/* End: Enterprise table */}
    </div>
  );
}
