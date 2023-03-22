import "./list.css";
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {

  const location = useLocation();
  const [city, setCity] = useState(location.state.city);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>City</label>
              <input placeholder={city} type="text" />
            </div>
            <div className="lsItem">
              <label>Appointment Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate, 
                  "dd/MM/yyyy"
                  )} to ${format(date[0].endDate, 
                  "dd/MM/yyyy")}`}</span>
                  {openDate && (<DateRange 
                  onChange={(item) => setDate([item.selection])} 
                  minDate={new Date()}
                  ranges={date}
                  />)}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input type="text" className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Minor</span>
                <input type="text" className="lsOptionInput" placeholder={options.minor} />
              </div>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;