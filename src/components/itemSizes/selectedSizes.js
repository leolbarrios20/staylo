import React, {useState} from "react";

import Select from "react-select";

const SelectedSizes = () => {
  const [selectedSizes, setSelectedSizes] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSizes(value);
  };

  const sizes = [
    { label: "S", value: "Small" },
    { label: "M", value: "Medium" },
    { label: "L", value: "Large" },
    { label: "XL", value: "Extra Large" },
    { label: "XXL", value: "Extra Extra Large" },
  ];

  return (
    <div>
      <p className="SizeParagraph"> Talle: {selectedSizes} </p>
      <Select
        className="Select"
        defaultValue={{ label: "L", value: "Large" }}
        options={sizes}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default SelectedSizes;
