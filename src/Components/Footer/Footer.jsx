import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className=" py-10 bg-slate-900  border-t-black h-[670px] flex items-center justify-center flex-wrap">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap justify-evenly">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full text-gray-600 flex flex-col items-center ">
                            <h3 className="tracking-px mb-1 text-white text-xs md:text-xl font-bold uppercase text-gray-500">
                                Company
                            </h3>
                            <div className="w-32 border-b-2 border-yellow-400 h-1 rounded-2xl my-2"></div>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-mediumtext-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full  text-gray-600 flex flex-col items-center">
                            <h3 className="tracking-px mb-1 text-white text-xs md:text-xl font-bold font-bold uppercase text-gray-600">
                                Support
                            </h3>
                            <div className="w-32 border-b-2 border-yellow-400 h-1 rounded-2xl my-2"></div>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full  text-gray-600 flex flex-col items-center">
                            <h3 className="tracking-px mb-1 text-white text-xs md:text-xl font-bold font-bold uppercase text-gray-600">
                                Legals
                            </h3>
                            <div className="w-32 border-b-2 border-yellow-400 h-1 rounded-2xl my-2"></div>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-gray-600 hover:text-pink-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer