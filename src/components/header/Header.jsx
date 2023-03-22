import { 
  faCalendarDays, 
  faEyeLowVision, 
  faFaceSmile, 
  faHeartCircleCheck, 
  faHospitalAlt, 
  faPerson, 
  faTooth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [city, setCity] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1, 
    minor: 0
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions(prev=>{return {
      ...prev, [name]: operation === "i" ? options[name] +1 : options[name] -1,
    };
    });
  };

  const handleSearch = ()=>{
    navigate("/clinics", {state:{city, date, options}});
  };

  return (
    <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faHospitalAlt} />
                <span>Hospital OPD Clinics</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTooth} />
                <span>Dental Clinics</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faFaceSmile} />
                <span>Cosmetic Clinics</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faHeartCircleCheck} />
                <span>Cardio Clinics</span>
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faEyeLowVision} />
                <span>Eye Clinics</span>
                </div>
            </div>

            { type !== "list" &&
            <>
            <h1 className="headerTitle">Doc999 Makes Booking Appointments Easy!</h1>
            <p className="headerDesc">Book your medical appointments and channel a doctor with ease!</p>
            <button className="headerBtn">Sign In / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faHospitalAlt} className="headerIcon"/>
                <input 
                type="text" 
                placeholder="Which health center?" 
                className="headerSearchInput" 
                onChange={e=>setCity(e.target.value)}/>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                  {`${format(date[0].startDate, 
                  "dd/MM/yyyy"
                  )} to ${format(date[0].endDate, 
                  "dd/MM/yyyy")}`}</span>
                {openDate && 
                <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()} />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.minor} minor`}</span>
                {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                  <button 
                  disabled={options.adult <=1}
                  className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton"onClick={()=>handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Minor</span>
                  <div className="optionCounter">
                  <button 
                  disabled={options.minor <=0}
                  className="optionCounterButton" onClick={()=>handleOption("minor", "d")}>-</button>
                  <span className="optionCounterNumber">{options.minor}</span>
                  <button className="optionCounterButton" onClick={()=>handleOption("minor", "i")}>+</button>
                  </div>
                </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Book</button>
              </div>
            </div>
            </>}
        </div>
    </div>
  );
};

export default Header