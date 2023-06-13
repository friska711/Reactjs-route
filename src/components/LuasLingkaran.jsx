import { useEffect } from "react";
import { useState } from "react";

export const LuasLingkaran = () => {
    const [jariJari, setJariJari] = useState (0)
    const [hasil, setHasil] = useState (0)

    useEffect( () => {
        setHasil(22/7 * jariJari * jariJari)
    }, [jariJari])

    return <div>
        Jari jari:
        <input type="number" value={jariJari} onChange={(e) => setJariJari(e.target.value)} /><br/>

        Luas 
        : {hasil}
    </div>
}
export default LuasLingkaran