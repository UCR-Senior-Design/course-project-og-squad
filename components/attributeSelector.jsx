// AttributeSelector.js
import React from "react";

const options = [
  { label: "Gluten Free", icon: "🌾" },
  { label: "High Protein", icon: "💪" },
  { label: "Vegan", icon: "🌱" },
  // Add other relevant options here
];

export default function AttributeSelector({ formData, setFormData }) {
  const handleOptionSelection = (option) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedOption: option,
    }));
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">Select one option:</label>
      <div className="space-y-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="option"
              value={option.label}
              onChange={() => handleOptionSelection(option.label)} // Update selected option
              className="form-radio"
            />
            <span className="text-lg">{option.icon}</span>
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
