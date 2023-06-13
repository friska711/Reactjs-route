import { useReducer } from "react";

export const Nilai = () => {
    const [nilai, dispatchNilai] = useReducer ((state, action) => {
        switch (action.type) {
            case 'SET_NILAI_MTK':
                state = {...state, nilaiMTK: action.payload};
                break;
            case 'SET_NILAI_BAHASA':
                state = {...state, nilaiBAHASA: action.payload};
                break;
            case 'SET_NILAI_IPA':
                state = {...state, nilaiIPA: action.payload};
                break
            default: ;
        }
        const totalNilai = parseInt (state.nilaiMtk)
            + parseInt (state.nilaiBahasa) + parseInt(state.nilaiIpa);
        if (totalNilai >= 225) {
            state = { ...state, lulus: true} ;
        }
        return state;
    }, {
        nilaiMtk: 0,
        nilaiBahasa: 0,
        nilaiIpa: 0,
        lulus: false
    });
     return <div>
        <h2>Nilai</h2>

        <label>Nilai MTK:</label>
        <input value={nilai.nilaiMtk} onChange={(event) => {
            dispatchNilai ({ type: 'SET_NILAI_MTK', payload:event.target})
        }}/><br/>

        <label>Nilai Bahasa:</label>
        <input value={nilai.nilaiBahasa} onChange={(event) => {
            dispatchNilai ({ type: 'SET_NILAI_BAHASA', payload:event.target})
        }}/><br/>

        <label>Nilai IPA:</label>
        <input value={nilai.nilaiIpa} onChange={(event) => {
            dispatchNilai ({ type: 'SET_NILAI_IPA', payload:event.target})
        }}/>
        { nilai.lulus ? <p>Lulus</p> : <p>Tidak Lulus</p>}
     </div>
}
