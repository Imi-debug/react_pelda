import {useState} from "react";

function AllapotPelda() {
    let [gyumolcs, setGyumolcs] = useState("zöldalma");
    return (
        <>
        <p>A kedvenc gyümölcsöm: {gyumolcs}</p>
        <p>hmm, meggondoltam magam...</p>
        <button onClick={() => setGyumolcs("banán")}>Banánra váltás</button>
        <p>Mostantol a kedvenc gyumolcsom: {gyumolcs}</p>

        </>
    )
}

export default AllapotPelda;

