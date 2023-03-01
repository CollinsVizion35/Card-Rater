import React, { useRef, useEffect, useState, useContext } from "react";

import { AppPass } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import CardImg from "./imgs/carder.png.png"
import countryImg from "./imgs/Flag-Argentina.webp"
import clubImg from "./imgs/psgLogo.png"
import playerImg from "./imgs/messiP2.png"

import {
  onSnapshot,
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";




function Rater() {
  useEffect(() => {
    document.title = "VCR - Create your Idea Footballing Rater";
  }, []);
//   const {
//     name,
//     setName
//   } = AppPass();

  const save2Ref = useRef();
  const confirmedRef = useRef();
  const unconfirmedRef = useRef();
  

  const data = {
    name: name,
    
  };


  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);

  async function handleEditBtn(e) {
    save2Ref.current.style.display = "flex";
  }

  async function handleEditBtn2() {
    //   e.preventDefault();
    try {
      // setError(false);

      await addDoc(collection(db, "Junior Sec School"), data);
      storeInformationToDB();
      confirmedRef.current.style.display = "flex";
      setTimeout(() => {
        confirmedRef.current.style.display = "none";
      }, 2000);
    } catch (e) {
      //   setError(true);
      console.log(e.message);
      unconfirmedRef.current.style.display = "flex";
      setTimeout(() => {
        unconfirmedRef.current.style.display = "none";
      }, 2000);
    }
    save2Ref.current.style.display = "none";
    localStorage.clear();
  }

  async function storeInformationToDB() {
    try {
      await updateProfile({
        displayName: undefined || {},

        data,
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  const handleEditBtn3 = () => {
    save2Ref.current.style.display = "none";
  };

  useEffect(() => {
    save2Ref.current.style.display = "none";
  }, []);

  return (
    <>
    {/* main */}
      <div className="major-Bg text-center lg:flex flex-row overflow-visible">
       
        <div className="class lg:w-[50vw]  flex flex-col  lg:pt-10 pt-[7em]">

          
        <div className="class w-[50vw] mx-auto py-3">
            <label className="mb-3 text-md text-[#34FEF8] font-bold uppercase">
              Player's NAME
            </label>
            <br />
            <input
              type="text"
              placeholder="Firstname"
              onChange={(e) => setName(e.target.value)}
              className="rounder border-[5px] lg:w-[10rem] w-auto h-[6rem] bg-[#01112B] p-2 text-sm border border-[#34FEF8] text-[#34FEF8]"
            />
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
         <div>
           <label className="mb text-md text-[#34FEF8] font-bold uppercase">
             Position
           </label>
           <br />
           <div
             className="z-[1000]"
             //  style={{transform: 'translate(-50%, -50%)'}}
           >
             <div className="rounded-lg border-[#34FEF8] px-6">
               <select
                 onChange={(e) => {
                   // selectedClass();
                   setClassRoom(e.target.value);
                 }}
                 className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
               >
                 <option
                   value="Select a Category"
                   selected
                   className="block"
                   disabled
                 >
                   Select your Preferred Playing Position
                 </option>
                 <option
                  className="py-2" 
                  value="GK">
                   GoalKeeper
                 </option>
                 <option
                  className="py-2" 
                  value="RB">
                   Right Back
                 </option>
                 <option
                  className="py-2" 
                  value="RCB">
                   Right Center Back
                 </option>
                 <option
                  className="py-2" 
                  value="CB">
                   Center Back
                 </option>
                 <option
                  className="py-2" 
                  value="LCB">
                   Left Center Back
                 </option>
                 <option
                  className="py-2" 
                  value="LB">
                   Left Back
                 </option>
                 <option
                  className="py-2" 
                  value="RWB">
                   Right Wing Back
                 </option>
                 <option
                  className="py-2" 
                  value="LWB">
                   Left Wing Back
                 </option>
                 <option
                  className="py-2" 
                  value="RDM">
                   Right Defensive Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="DM">
                   Defensive Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="LDM">
                   Left Defensive Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="RM">
                   Right Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="RCM">
                   Right Center Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="CM">
                   Center Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="LCM">
                   Left Center Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="LM">
                   Left Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="RAM">
                   Right Attacking Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="AM">
                   Attacking Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="LAM">
                   Left Attacking Midfielder
                 </option>
                 <option
                  className="py-2" 
                  value="RW">
                   Right Winger
                 </option>
                 <option
                  className="py-2" 
                  value="LW">
                   Left Winger
                 </option>
                 <option
                  className="py-2" 
                  value="SS">
                   Second Striker
                 </option>
                 <option
                  className="py-2" 
                  value="RS">
                   Right Striker
                 </option>
                 <option
                  className="py-2" 
                  value="LS">
                   Left Striker
                 </option>
                 <option
                  className="py-2" 
                  value="CF">
                   Center Foward
                 </option>
               </select>
               
             </div>
           </div>
         </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>
         
          <div>
            <label className="mb text-md text-[#34FEF8] font-bold uppercase">
              Position
            </label>
            <br />
            <div
              className="z-[1000]"
              //  style={{transform: 'translate(-50%, -50%)'}}
            >
              <div className="rounded-lg border-[#34FEF8] px-6">
                <select
                  onChange={(e) => {
                    // selectedClass();
                    setClassRoom(e.target.value);
                  }}
                  className="rounder resize-none w-full h-[6rem] bg-[#01112B] text-base border-[5px] border-[#34FEF8] text-[#34FEF8] mb-2 mt-2 p-3 pl-4 pt-0 placeholder-opacity-60 placeholder-[#34FEF8]"
                >
                  <option
                    value="Select a Category"
                    selected
                    className="block"
                    disabled
                  >
                    Select your Preferred Playing Position
                  </option>
                  <option
                   className="py-2" 
                   value="GK">
                    GoalKeeper
                  </option>
                  <option
                   className="py-2" 
                   value="RB">
                    Right Back
                  </option>
                  <option
                   className="py-2" 
                   value="RCB">
                    Right Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="CB">
                    Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LCB">
                    Left Center Back
                  </option>
                  <option
                   className="py-2" 
                   value="LB">
                    Left Back
                  </option>
                  <option
                   className="py-2" 
                   value="RWB">
                    Right Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="LWB">
                    Left Wing Back
                  </option>
                  <option
                   className="py-2" 
                   value="RDM">
                    Right Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="DM">
                    Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LDM">
                    Left Defensive Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RM">
                    Right Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RCM">
                    Right Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="CM">
                    Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LCM">
                    Left Center Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LM">
                    Left Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RAM">
                    Right Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="AM">
                    Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="LAM">
                    Left Attacking Midfielder
                  </option>
                  <option
                   className="py-2" 
                   value="RW">
                    Right Winger
                  </option>
                  <option
                   className="py-2" 
                   value="LW">
                    Left Winger
                  </option>
                  <option
                   className="py-2" 
                   value="SS">
                    Second Striker
                  </option>
                  <option
                   className="py-2" 
                   value="RS">
                    Right Striker
                  </option>
                  <option
                   className="py-2" 
                   value="LS">
                    Left Striker
                  </option>
                  <option
                   className="py-2" 
                   value="CF">
                    Center Foward
                  </option>
                </select>
                
              </div>
            </div>
          </div>

          
          

          {/* submit button */}
          <button
            onClick={() => {
              handleEditBtn();
              //   handleContext();
            }}
            className="w-[19.6875rem]  bg-gradient-to-br from-white via-red-300 to-red-500 border-none mx-auto rounded-lg py-2 text-white my-5"
          >
            Save
          </button>
          {/* style={{ display: "none" }} */}
          <div
            
            ref={save2Ref}

            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] bg-[#EF8E87] rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
          >
            <h3 className="w-[19.6875rem] bg-[#EF8E87] rounded-lg py-2 text-white my-5">
              Are you sure you want to save new Informations
            </h3>
            <div className="flex flex-row">
              <button
                onClick={handleEditBtn3}
                className="w-[5em] mr-2 text-[#EF8E87] hover:bg-[#EF8E87] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center"
              >
                No
              </button>
              <button
                onClick={() => {
                  handleEditBtn2();
                  //   handleContext();
                }}
                className="w-[5em] ml-2 text-[#EF8E87] hover:bg-[#EF8E87] hover:border hover:border-white hover:text-white rounded-lg py-2 bg-white my-5  justify-center items-center text-center"
              >
                Yes
              </button>
            </div>
          </div>

          {/* confirmed alert */}
          <div
            
            ref={confirmedRef}

            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] lg:h-[10rem] bg-white rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
          >
            <h3 className="text-2xl text-[#EF8E87]">
              Result submitted successfully
            </h3>
          </div>

          {/* unconfirmed alert */}
          <div
            
            ref={unconfirmedRef}

            className="fixed hidden lg:left-[50%] lg:top-[25%] lg:w-[19.6875rem] lg:h-[10rem] bg-white rounded-lg py-2 text-white lg:my-5 flex justify-center items-center text-center flex-col"
          >
            <h3 className="text-xl text-[#EF8E87] p-1">
              Result submission not successful
            </h3>
            <h5 className="text-[#EF8E87]">Fill up all empty credentials</h5>
          </div>
        </div>
        

        <div className="lg:w-[50vw] mt-10 text-white relative">
                <img src={CardImg} alt="card rater" />
                <div className="absolute top-0">
                  <div className="absolute top-[2.7em] left-[2.9em] text-4xl text-[#3E361D]">98</div>
                  <div className="absolute top-[4.7em] left-[3.2em]  text-3xl text-[#3E361D]">LWF</div>
                  <img src={countryImg} alt="country" className=" absolute top-[7em] left-[2.9em] z-[99999999999]"/>
                  <img src={clubImg} alt="club" className="w-[30px] absolute"/>
                  <img src={playerImg} alt="player" className="w-[100px] absolute"/>
                  <div className="absolute  text-4xl text-[#3E361D]">Messi</div>
                  <div className="absolute  text-4xl text-[#3E361D]">99</div>
                  <div className="absolute  text-4xl text-[#3E361D]">98</div>
                  <div className="absolute  text-4xl text-[#3E361D]">99</div>
                  <div className="absolute  text-4xl text-[#3E361D]">97</div>
                  <div className="absolute  text-4xl text-[#3E361D]">97</div>
                  <div className="absolute  text-4xl text-[#3E361D]">99</div>
                </div>
        </div>
      </div>
    </>
  );
}

export default Rater;
