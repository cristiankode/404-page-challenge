import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./tailwind.output.css";
import Header from "./components/Header";
import LogoError from "./Scarecrow.png";

function App() {
  return (
    <div>
      <div className="p-4 md:p-8">
        <Header title="4040 NOT FOUND"/>
      </div>
      <section className="flex-row md:flex pt-30 pl-5 pr-5 md:pt-32 md:pl-16 md:pr-16">
        <div className="container mx-auto md:w-1/2">
          <img src={LogoError} alt="logo-4040" className="md:w-10/12 xl:w-3/5 ml-0 md:ml-0 xl:ml-64 pt-10 md:pt-0 pb-10 md:pb-20 px-5" />
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-8 space-y-12">
          <div className="w-full md:w-2/2 lg:w-full xl:w-10/12">
            <p className="font-bold text-4xl tracking-widest md:text-4xl lg:text-4xl xl:text-5xl text-gray-800">I have a bad news for you</p>
          </div>
          <div className="w-11/12 md:w-4/6 lg:w-3/5 xl:w-6/12 tracking-widest text-gray-700 text-sm md:text-base xl:text-2xl">The page you are looking for might be removed or is temporarily unavalaible</div>
          <div className="flex flex-shrink">
            <button type="button" className="transition duration-500 ease-in-out bg-gray-800 transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 text-white font-bold py-2 px-4 text-xs h-16 w-56">BACK TO HOMEPAGE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
