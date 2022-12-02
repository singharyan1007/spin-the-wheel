import "../index.css";
import { React, useState } from "react";
import Wheel from "./Wheel";

function Home() {
    const [spinning, setSpinning] = useState(false);
    const [winners, setWinners] = useState([]);
    const [openModal, setOpenModal] = useState(false);
  
    if (window.localStorage.getItem("duration") === null)
      localStorage.setItem("duration", 10);
  
    if (window.localStorage.getItem("wheelColor") === null)
      localStorage.setItem("wheelColor", "#d38c12");
  
    if (window.localStorage.getItem("fontColor") === null)
      localStorage.setItem("fontColor", "#FFFFFF");
  
    const [duration, setDuration] = useState(
      window.localStorage.getItem("duration")
    );
  
    const [wheelColor, setWheelColor] = useState(
      window.localStorage.getItem("wheelColor")
    );
  
    const [fontColor, setFontColor] = useState(
      window.localStorage.getItem("fontColor")
    );
    const [items, setItems] = useState(() => {
      const value = window.localStorage.getItem("itemsList");
      return value !== null
        ? JSON.parse(value)
        : [
            "30% SITEWIDE OFF",
            "BUY 1 GET 1 FREE",
            "FREE COFFEE MUG ON PURCHASE WORTH 1000+",
            "BUY 2 EFFERVESCENT TABLETS & GET 1 FREE",
            "FREE 50G TEA ON PURCHASE OF RS. 500",
            "HOT CHOCOLATE FREE WITH TEA",
          ];
    });
  
    const selectResultEventHandler = (data) => {
      if (items.length > 0 && spinning !== true) {
        var selectedIndex = data;
        setSpinning(true);
        //disable spinning
        setTimeout(() => {
          setSpinning(false);
        }, window.localStorage.getItem("duration") * 1000);
  
        setTimeout(()=>{
          setWinners(winners.concat(items[selectedIndex]));
        },window.localStorage.getItem("duration")*1000)
  
        setTimeout(() => {
          setOpenModal(true);
        }, window.localStorage.getItem("duration") * 1000);
      }
    };
    let newWinnerIndex=winners.length-1;
  
    return (
      <section className="flex flex-row justify-around w-">
      
        <Wheel
          items={items}
          onChange={selectResultEventHandler}
          spinning={spinning}
          wheelColor={wheelColor}
          fontColor={fontColor}
        />
         {openModal &&
         <div>
          <h1>We have a winner</h1>
          <p>{winners[newWinnerIndex]}</p>
         </div>
         }
  
  
      </section>
    );
}

export default Home