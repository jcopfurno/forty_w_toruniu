import { useState } from 'react'
import './App.css'
import Footer from './Footer.js'
import Header from './header/Header.js'
import Home from "./pages/Home.js"
import Kontakt from "./pages/Kontakt.js"

import Fort_IV from "./pages/FortyGlowne/Fort_IV.js"
import Fort_VII from "./pages/FortyGlowne/Fort_VII.js"
import Fort_XI from "./pages/FortyGlowne/Fort_XI.js"

import Fort_I from "./pages/FortyPosrednie/Fort_I.js"
import Fort_VI from "./pages/FortyPosrednie/Fort_VI.js"
import Fort_VIII from "./pages/FortyPosrednie/Fort_VIII.js"
import Fort_X from "./pages/FortyPosrednie/Fort_X.js"
import Fort_XII from "./pages/FortyPosrednie/Fort_XII.js"
import Fort_XIV from "./pages/FortyPosrednie/Fort_XIV.js"

import BastionI from "./pages/ObiektyRdzenia/BastionI.js"
import BateriaDobrzynska from "./pages/ObiektyRdzenia/BateriaDobrzynska.js"
import BramaKolejowa from "./pages/ObiektyRdzenia/BramaKolejowa.js"
import FortJakuba from "./pages/ObiektyRdzenia/FortJakuba.js"
import FortKolejowy from "./pages/ObiektyRdzenia/FortKolejowy.js"
import MagazynProwiantowy from "./pages/ObiektyRdzenia/MagazynProwiantowy.js"
import PrzyczolekMostowy from "./pages/ObiektyRdzenia/PrzyczolekMostowy.js"

import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <body>
        <Header></Header>

        <Routes>

        <Route path = "/forty_w_toruniu/" element = {<Home/>} />
        <Route path = "/forty_w_toruniu/kontakt" element = {<Kontakt/>} />

        <Route path = "/forty_w_toruniu/forty_glowne/fort_iv" element = {<Fort_IV/>} />
        <Route path = "/forty_w_toruniu/forty_glowne/fort_vii" element = {<Fort_VII/>} />
        <Route path = "/forty_w_toruniu/forty_glowne/fort_xi" element = {<Fort_XI/>} />

        <Route path = "/forty_w_toruniu/forty_posrednie/fort_i" element = {<Fort_I/>} />
        <Route path = "/forty_w_toruniu/forty_posrednie/fort_vi" element = {<Fort_VI/>} />
        <Route path = "/forty_w_toruniu/forty_posrednie/fort_viii" element = {<Fort_VIII/>} />
        <Route path = "/forty_w_toruniu/forty_posrednie/fort_x" element = {<Fort_X/>} />
        <Route path = "/forty_w_toruniu/forty_posrednie/fort_xii" element = {<Fort_XII/>} />
        <Route path = "/forty_w_toruniu/forty_posrednie/fort_xiv" element = {<Fort_XIV/>} />

        <Route path = "/forty_w_toruniu/obiekty_rdzenia/bastion_i" element = {<BastionI/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/bateria_dobrzynska" element = {<BateriaDobrzynska/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/brama_kolejowa" element = {<BramaKolejowa/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/fort_jakuba" element = {<FortJakuba/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/fort_kolejowy" element = {<FortKolejowy/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/magazyn_prowiantowy" element = {<MagazynProwiantowy/>} />
        <Route path = "/forty_w_toruniu/obiekty_rdzenia/przyczolek_mostowy" element = {<PrzyczolekMostowy/>} />

        </Routes>

        <Footer></Footer>
      </body>
    </>
  )
}

export default App
