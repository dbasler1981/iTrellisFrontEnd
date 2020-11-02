import React, { useState } from "react";
import students from "./services/StudentService";

function App() {
  const [inputList, setInputList] = useState([{ 
    id:0,name: "", meals: "", hotels: "", taxi: "", planeTickets: ""
  }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e,index) => {
    setInputList([...inputList, {id:index+1, name: "", meals: "", hotels: "", taxi: "", planeTickets: "" }]);
  };

  const handleSubmitClick = () => {
    const list = [...inputList];
    return students.createStudents(JSON.stringify(list));
  };
  return (
    <div className="App">
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="name"
              placeholder="Enter Name"
              value={x.name}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="meals"
              placeholder="Enter Meals costs"
              value={x.meals}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="hotels"
              placeholder="Enter Hotels costs"
              value={x.hotels}
              onChange={e => handleInputChange(e, i)}
            />

            <input
              className="ml10"
              name="taxi"
              placeholder="Enter taxis costs"
              value={x.taxi}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="planeTickets"
              placeholder="Enter plane ticket costs"
              value={x.planeTickets}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={e =>handleAddClick(e,i)}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleSubmitClick()}>Submit</button>}
            </div>
            <label
              name="name"
              placeholder="Enter Name"
              value="Darren"
            />
    </div>
  );
}

export default App;