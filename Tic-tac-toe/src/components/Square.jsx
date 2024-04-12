import { useState } from "react";

function Square() {

    const [value, setvalue] = useState(null);


    function handleclick(e) {
        setvalue("X");
    }

    return <>
        <button onClick={handleclick} className="square" >{value}</button>
    </>
}

export default Square;