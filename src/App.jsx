import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "../src/page/Contact"
import Home from "../src/page/Home"
import About from "../src/page/About"
import Layout from "../src/page/Layout"
import NoPage from './page/NoPage';

function App() {

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

