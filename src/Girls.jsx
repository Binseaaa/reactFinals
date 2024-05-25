import { useState } from "react";

export default function App() {
    const [girls, setGirls] = useState(
        ["Fiona", "Vincy", "Christine", "Aubrey"])
    
    function handleAddGF() {
        const gfInput = document.getElementById('gfInput').value;

        setGirls(gf => [...gf, gfInput])
        document.getElementById('gfInput').value = ""
    }

    function handleRemoveGF(index) {
        setGirls(girls.filter((el,i) => i !== index));
    }

    return(
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>GirlFriends</h1>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {girls.map((gf, index) => (
                    <li key={index} className="Item" style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{gf}</span>
                        <button style={{ backgroundColor: '#FF4500', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px' }} onClick={() => handleRemoveGF(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input type="text" id="gfInput" placeholder="Type a girlfriend" style={{ marginTop: '20px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}/>
            <button onClick={handleAddGF} style={{ marginTop: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 15px', cursor: 'pointer' }}>Add GF</button>
        </div>
    )
}