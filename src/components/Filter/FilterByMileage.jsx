import { useState } from "react";

export const MileageRangeFilter = ({ onMileageChange, mileageRange }) => {
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
    
  const handleMinMileageChange = (event) => {
    const value = event.target.value;
    setMinMileage(value);
    onMileageChange({ minMileage: value, maxMileage });
  };
    
  const handleMaxMileageChange = (event) => {
    const value = event.target.value;
    setMaxMileage(value);
    onMileageChange({ minMileage, maxMileage: value });
  };

  return (
    <div>
      <input
        type="number"
        id="minMileage"
        value={mileageRange.minMileage}
        onChange={handleMinMileageChange}
      />

      <input
        type="number"
        id="maxMileage"
        value={mileageRange.maxMileage}
        onChange={handleMaxMileageChange}
      />
    </div>
  );
};