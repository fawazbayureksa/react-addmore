import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [inputList, setInputList] = useState([
    {
      firstName: '',
      lastName: '',
    },
  ]);

  const handleChange = (e, index) => {
    // mengambil name dan value dari target yang onChange
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;

    setInputList(list);
  };

  const hanleAddInput = () => {
    setInputList([...inputList, { firstName: '', lastName: '' }]);


    // const list = [...inputList];
    // list.push({ firstName: '', lastName: '' });
    // setInputList(list);
  
  
  };

  return (
    <>
      <div>
        <h1>Membuat tombol Add More dengan Reac JS</h1>
      </div>

      {inputList.map((item, i) => {
        return (
          <div key={i} className="flex">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={item.firstName}
              onChange={(e) => handleChange(e, i)}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={item.lastName}
              onChange={(e) => handleChange(e, i)}
            />
            <input
              type="button"
              value="Add"
              className="button"
              onClick={hanleAddInput}
            />
          </div>
        );
      })}
      <pre>{JSON.stringify(inputList, null, 2)}</pre>
    </>
  );
}
