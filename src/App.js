import './App.css';
import {React,useState} from 'react';
import Wheel from './components/Wheel';

function App() {
  const [spinning,setSpinning]=useState(false);
  const [winners,setWinners]=useState([]);
  const [openModal,setOpenModal]=useState(false);
  const [duration,setDuration]=useState(10);
  const [fontColor,setFontColor]=useState('#FFFFFF');
  const [wheelColor,setWheelColor]=useState('#d38c12');

  const [items, setItems] = useState(() => {
    const value = window.localStorage.getItem("itemsList");
    return value !== null
      ? JSON.parse(value)
      : [
          "Ali",
          "Beatriz",
          "Charles",
          "Diya",
          "Eric",
          "Fatima",
          "Gabriel",
          "Hanna",
        ];
  });

  function cancelModal() {
    setOpenModal(false);
  }


  function removeWinnerModal() {
    const winner = winners[winners.length - 1];
    const index = items.indexOf(winner);
    items.splice(index, 1);
    setItems(items);
    setOpenModal(false);
    console.log(`Removed ${winner} from entries.`);
    localStorage.setItem("itemsList", JSON.stringify(items));
  }

  return (
    <></>
  )
}

export default App;
