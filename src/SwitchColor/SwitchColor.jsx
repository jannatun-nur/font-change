
import { useState } from "react";

const SwitchColor = () => {
  const [color, setColor] = useState("black");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [inputText, setInputText] = useState("");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    const mainField = document.getElementById("text-field");
    mainField.style.color = newColor;
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
    const mainField = document.getElementById("text-field");
    mainField.style.fontFamily = event.target.value;

  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
   
  };

  const handleAddText = () => {
    const mainField = document.getElementById("text-field");
        mainField.innerText = inputText;
        setInputText("");
        
   
  };
 

  return (
    <div className="lg:flex lg:justify-evenly columns-1">
      <section 
      
      id="text-field" className=" border border-black font-bold text-2xl w-full lg:w-5/12 h-24 lg:h-36 mt-36">
        <h1 style={{ color, fontFamily: selectedFont }} className="text-2xl">
          {inputText}
        </h1>
      </section>

      <section className="mt-20">
        <div>
          <h1 style={{ fontFamily: selectedFont }}
          className="font-bold text-gray-800 mb-4">Font Changer</h1>
          <select value={selectedFont} 
          className="border border-gray-800 bg-white text-gray-800 mb-10"
          onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
        <p className="font-bold text-gray-800 my-3">Color Switcher</p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleColorChange("red")}
            className="bg-red-500 rounded-md"
          ></button>
          <button
            onClick={() => handleColorChange("blue")}
            className="bg-blue-600 rounded-md"
          ></button>
          <button
            onClick={() => handleColorChange("green")}
            className="bg-green-600 rounded-md text-green-600"
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange("pink")}
            className="bg-pink-500 rounded-md text-pink-500"
          >
            Pink
          </button>
          <button
            onClick={() => handleColorChange("yellow")}
            className="bg-yellow-400 rounded-md text-yellow-400 "
          >
            
          </button>
          <button
            onClick={() => handleColorChange("purple")}
            className="bg-purple-500 rounded-md text-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => handleColorChange("gray")}
            className="bg-gray-500 rounded-md text-gray-500"
          >
            Gray
          </button>
        </div>

        {/* add text field */}
        <p className="my-4 text-gray-800 font-bold ">Add Text</p>
        <input
          name="text"
          id="text-input"
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="bg-white border border-black"
        />
        <button 
        className="text gray-800 font-bold font-serif ml-4"
        onClick={handleAddText}>Add</button>
      </section>
    </div>
  );
};

export default SwitchColor;
