"use client";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Obfuscate from "react-obfuscate";

export default function Contact() {
  const [sent, setSent] = useState({
    status: false,
    message: ""
  })
  const [formData, setFormData] = useState({
    fullname: "",
    emailAddress: "",
    tel: "",
    company: "",
    service: "",
    message: "",
  });

  const fullname = useRef()
  const emailAddress = useRef()
  const tel = useRef()
  const company = useRef()
  const service = useRef()
  const message = useRef()

  async function handleFormSubmission(e) {
    e.preventDefault();

    console.log(formData);

    const data = {
      fullname: formData.fullname,
      email: formData.emailAddress,
      tel: formData.tel,
      message: formData.message,
      company: formData.company,
      service: formData.service
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/hello";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    setFormData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      tel: "",
      message: "",
      company: "",
      service: ""
    });

    setSent({
      status: result.status,
      message: result.message
    })

    setTimeout(()=>{
      setSent({
        status: false,
        message: ""
      })
    },3000)
  }

  function focus(params) {
    params.current.focus();
  }

  return (
    <>
    <Head>
    <title>Contact Us</title>
    </Head>
    <section className="md:pt-10 pt-6 z-[10] relative">
    <main className="flex min-h-screen flex-col items-center justify-between md2:px-24 md:px-12 sm:px-8 px-4 py-24">
      <section className="pt-28">
        <div className="md2:pb-28 md:pb-20 sm:pb-16 pb-12 w-full">
          <h1 className="md2:text-6xl sm:text-5xl text-4xl font-semibold">
            Have a project in Mind? Let&apos;s talk.
          </h1>
          <p className="text-medium text-xl my-4">
            We can&apos;t wait to hear your ideas.
          </p>
        </div>

        <div className="md2:grid md2:grid-cols-3 flex flex-col-reverse gap-24">
          <div className="md2:col-span-2">
            <form onSubmit={(e) => handleFormSubmission(e)}>
              <div onClick={()=>focus(fullname)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  01
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="name">
                  What’s your name?
                </label>
                <input
                  ref={fullname}
                  className="sm:col-span-1 border-none outline-none text-xl sm:text-2xl placeholder:font-light"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe *"
                  value={formData.fullname}
                  onChange={(e)=>setFormData({...formData, fullname: e.target.value})}
                />
              </div>
              <div onClick={()=>focus(emailAddress)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  02
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="email">
                  What’s your email address?
                </label>
                <input
                  ref={emailAddress}
                  className="sm:col-span-1 border-none outline-none text-xl sm:text-2xl placeholder:font-light"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@doe.com *"
                  value={formData.emailAddress}
                  onChange={(e)=>setFormData({...formData, emailAddress: e.target.value})}
                />
              </div>
              <div onClick={()=>focus(tel)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  03
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="tel">
                  What&apos;s your phone number? <span className="text-xs text-black text-opacity-50">(optional)</span>
                </label>
                <input
                  ref={tel}
                  className="sm:col-span-1 border-none outline-none text-xl sm:text-2xl placeholder:font-light"
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="+234 701 000 0000"
                  value={formData.tel}
                  onChange={(e)=>setFormData({...formData, tel: e.target.value})}
                />
              </div>
              <div onClick={()=>focus(company)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  04
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="company">
                  What&apos;s the name of your organization?
                </label>
                <input
                  ref={company}
                  className="sm:col-span-1 border-none outline-none text-xl sm:text-2xl placeholder:font-light"
                  type="text"
                  id="company"
                  name="company"
                  placeholder="John & Doe ®"
                  required
                  value={formData.company}
                  onChange={(e)=>setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div onClick={()=>focus(service)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  05
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="service">
                  What services are you looking for?
                </label>
                <input
                  ref={service}
                  className="sm:col-span-1 border-none outline-none text-xl sm:text-2xl placeholder:font-light"
                  type="text"
                  id="service"
                  name="service"
                  placeholder="Construction, Library, Web Development..."
                  required
                  value={formData.service}
                  onChange={(e)=>setFormData({...formData, service: e.target.value})}
                />
              </div>
              <div onClick={()=>focus(message)} className="md2:pt-0 pt-0 md2:px-16 pl-8 py-6 md2:py-14 sm:max-w-[90%] mb-10 border-b relative grid">
                <h6 className="absolute left-0 top-0 text-[#B5BBBD] font-normal text-base">
                  06
                </h6>
                <label className="mb-3 text-xl sm:text-2xl" htmlFor="message">
                  Your message
                </label>
                <textarea
                  ref={message}
                  className="sm:col-span-1 border-none resize-none outline-none text-base placeholder:text-xl sm:placeholder:text-2xl placeholder:font-light"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Hello, can you help me with ... *"
                  required
                  value={formData.message}
                  rows={8}
                  onChange={(e)=>setFormData({...formData, message: e.target.value})}
                />
              </div>
              <div className=" max-w-[90%] mb-10 relative grid gap-10">
                <div className="flex md:gap-3 gap-1 items-center">
                  <input required type="checkbox" className="text-wk-blue " />
                  <label className="text-neutral-600 text-sm font-light">
                    I am bound by the terms of the Service I accept{" "}
                    <Link href="">Privacy Policy</Link>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-wk-blue disabled:opacity-50 text-white py-4 px-12 rounded-lg text-xl"
                  >
                    Send it!
                  </button>
                  
                  <p className={`mt-3 ease-in-out transition-opacity duration-300 ${sent.status === true ? "opacity-100" : "opacity-0"}`}>{sent.status}</p>
                </div>
              </div>
            </form>
          </div>
          <div className="md2:col-span-1">
            <p className="capitalize text-[#B5BBBD] text-xl">Contact us</p>

            <ul className="my-6 grid gap-6">
              <li className="hover:text-wk-blue text-black transition-colors ease-out duration-500 flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <Obfuscate
                  email="contact@walkiya.com.ng"
                  headers={{
                    cc: "donmicky@gmail.com, opeyemija@gmail.com, victormichael307@gmail.com",
                  }}
                />
              </li>
              <li className="hover:text-wk-blue text-black transition-colors ease-out duration-500 flex gap-4 items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
                <Link href="https://goo.gl/maps/Ys5zukHng5qXhzCa7">
                  HSE 133, AB Bagare Street, NAF Valley Estate, Abuja, Nigeria
                </Link>
              </li>
              <li className="hover:text-wk-blue text-black transition-colors ease-out duration-500 flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <Obfuscate tel="+234 905 227 3795" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </section>
    </>
  );
}
