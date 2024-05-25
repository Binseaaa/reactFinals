import { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: 'Vince',
    netWorth: 10000000,
    address: 'Cahayag'
  });

  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [netWorthInput, setNetWorthInput] = useState('');

  function handeNameChange(event) {
    setNameInput(event.target.value);
  }

  function handeAddressChange(event) {
    setAddressInput(event.target.value);
  }

  function handeNetWorthChange(event) {
    setNetWorthInput(event.target.value);
  }

  function handleSubmit() {
    // if (!nameInput || !addressInput || !netWorthInput) {
    //   alert('Please fill in the input fields.');
    //   return;
    // }
    setPerson(prevPerson => {
      return {
        ...prevPerson,
        name: nameInput || prevPerson.name,
        address: addressInput || prevPerson.address,
        netWorth: netWorthInput || prevPerson.netWorth
      };
    });
    
    // Reset input fields after submission
    setNameInput('');
    setAddressInput('');
    setNetWorthInput('');
  }

  return (
    <div>
      <h1>Person Info</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{person.name}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{person.address}</td>
          </tr>
          <tr>
            <th>Net Worth</th>
            <td>{person.netWorth}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={nameInput} onChange={handeNameChange} /><br />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={addressInput} onChange={handeAddressChange} /><br />
          <label htmlFor="netWorth">Net Worth</label>
          <input type="text" id="netWorth" value={netWorthInput} onChange={handeNetWorthChange} />
        </div>
        <button onClick={handleSubmit}>Update</button>
      </div>
    </div>
  );
}
