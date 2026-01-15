import { useState } from "react";

function fhEll(fhnev, jelszo, felhasznalok) {
    for(let felhasznalo of felhasznalok) {
        if(felhasznalo.felh === fhnev && felhasznalo.jsz === jelszo) {
            console.log("Sikeres bejelentkezés!");
            return;
        }
    }
    console.log("Hibás felhasználónév vagy jelszó!");
}
function Bejelentkez() {
    let [felhasznalok, setFelhasznalok] = useState([
        {felh:"Belus01999", jsz:"123"},
        {felh:"Guszti2003", jsz:"456"},
        {felh:"Anna_07", jsz:"789"}
    ]);
    let [fhnev, setFhnev] = useState("");
    let [jelszo, setJelszo] = useState("");
    return (
        <div>
            <h2>Bejelentkezés</h2>
            
                <label>Felhasználónév:</label>
                <input onChange={(text) => {setFhnev(text.target.value)}} />
                <br />
                <label>Jelszó:</label>
                <input onChange={(asd) => {setJelszo(asd.target.value)}} />
                <br />
                <button onClick={() => {fhEll(fhnev, jelszo)}}>Bejelentkezés</button>
            
        </div>
    );
}
export default Bejelentkez;