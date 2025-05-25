import React from 'react'

const Projects = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-2 mb-17 md:grid-cols-2 '>
        <div className="pt-10 w-full transition-all hover:scale-105">
          <div className="flex flex-col mb-6">
            <img alt="Voice Auth" loading="lazy" width="370" height="370" className="rounded-sm hover:blur-xs transition-all" src="/assets/votp.png" />
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3 text-xl">Voice OTP Authentication</h1>
              <p className="bg-gray-200 text-gray-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800">
                offline
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse"></div>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                ReactJS
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Python
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Flask
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Nemo
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                MongoDB
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                ECAPA-TDNN
              </span>
            </div>
            <p className="text-sm mt-2">Implemented voiceprint based 2FA (Two-factor authentication) using ECAPA-TDNN model.</p>
          </div>
          <div className="flex gap-4 justify-start">
            <a target='_blank' href="https://github.com/anant-c/voice-otp-auth"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="hover:scale-125 transition-all" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            {/* <a target='_blank' href=""> */}
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="hover:scale-125 transition-all cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            {/* </a> */}
          </div>
        </div>

        <div className="pt-10 w-full transition-all hover:scale-105">
          <div className="flex flex-col mb-6">
            <img alt="Voice Auth" loading="lazy" width="370" height="370" className="rounded-sm hover:blur-xs transition-all" src="/assets/traffic-sign.png" />
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3 text-xl"> Traffic Sign Advisory & Navigation System</h1>
              <p className="bg-gray-200 text-gray-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800">
                offline
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse"></div>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Python
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Flask
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                OpenCV
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Ultralytics
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                YOLOv8
              </span>
            </div>
            <p className="text-sm mt-2">Trained a YOLOv8n object detection model on the Self-Driving Cars Image Dataset for traffic sign recognition.</p>
          </div>
          <div className="flex gap-4 justify-start">
            <a target='_blank' href="https://github.com/anant-c/traffic-sign-detection"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="hover:scale-125 transition-all" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            {/* <a target='_blank' href=""> */}
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="hover:scale-125 transition-all cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            {/* </a> */}
          </div>
        </div>
        

        <div className="pt-10 w-full transition-all hover:scale-105">
          <div className="flex flex-col mb-6">
            <img alt="Voice Auth" loading="lazy" width="370" height="370" className="rounded-sm hover:blur-xs transition-all" src="/assets/crud.png" />
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3 text-xl"> CRUD E-Commerce</h1>
              <p className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800">
                online
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                React
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                TailwindCSS
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                ShadCN
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                MongoDB
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Express
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                NodeJS
              </span>
            </div>
            <p className="text-sm mt-2">Learnt CRUD operations with MERN stack.</p>
          </div>
          <div className="flex gap-4 justify-start">
            <a target='_blank' href="https://github.com/anant-c/crud-Ecommerce"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="hover:scale-125 transition-all" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a target='_blank' href="https://crud-ecommerce-yfsz.onrender.com/">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="hover:scale-125 transition-all cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </a>
          </div>
        </div>

        <div className="pt-10 w-full transition-all hover:scale-105">
          <div className="flex flex-col mb-6">
            <img alt="Voice Auth" loading="lazy" width="370" height="370" className="rounded-sm hover:blur-xs transition-all" src="/assets/batteryfy.png" />
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3 text-xl"> Batteryfy</h1>
              <p className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800">
                online
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                React
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                TailwindCSS
              </span>
            </div>
            <p className="text-sm mt-2">Landing Page for a startup offering EV charging stations with hospitality services.</p>
          </div>
          <div className="flex gap-4 justify-start">
            <a target='_blank' href="https://github.com/anant-c/EV_HUB"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="hover:scale-125 transition-all" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a target='_blank' href="https://ev-hub.vercel.app/">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="hover:scale-125 transition-all cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </a>
          </div>
        </div>

        <div className="pt-10 w-full transition-all hover:scale-105">
          <div className="flex flex-col mb-6">
            <img alt="Voice Auth" loading="lazy" width="370" height="370" className="rounded-sm hover:blur-xs transition-all" src="/assets/todo.png" />
            <div className="flex justify-between items-center">
              <h1 className="font-bold mb-3 text-xl">The OG TODO</h1>
              <p className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-1 font-bold border border-gray-800">
                online
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                React
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                TailwindCSS
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                ShadCN
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                MongoDB
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                Express
              </span>
              <span className="text-xs rounded-md bg-zinc-200 px-1 text-zinc-900 border border-zinc-800 font-extrabold  flex">
                NodeJS
              </span>
            </div>
            <p className="text-sm mt-2">Learnt CRUD operations with MERN stack.</p>
          </div>
          <div className="flex gap-4 justify-start">
            <a target='_blank' href="https://github.com/anant-c/todo-fullStack"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="hover:scale-125 transition-all" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a target='_blank' href="https://todo-fullstack-q5on.onrender.com/">
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="hover:scale-125 transition-all cursor-pointer" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            </a>
          </div>
        </div>
      </div> 
  )
}

export default Projects