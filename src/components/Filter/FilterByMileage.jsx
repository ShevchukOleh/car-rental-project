import { useState } from "react";
import { Input, Label, Span } from "./Filter.styled";

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
    <div style={{ display: 'grid' }}>
      <Label htmlFor="">Сar mileage / km</Label>
      <div style={{display: 'flex'}}>
        <div style={{display: 'block', position: 'relative'}}>
          <Input
            style={{borderTopLeftRadius: '14px', borderBottomLeftRadius: '14px', borderRight: '1px solid #8A8A8933'}}
            type="number"
            id="minMileage"
            value={mileageRange.minMileage}
            onChange={handleMinMileageChange}
          />
          <Span>From</Span>
        </div>

        <div style={{display: 'block', position: 'relative'}}>
          <Input
            style={{borderTopRightRadius: '14px', borderBottomRightRadius: '14px', borderLeft: '1px solid #8A8A8933'}}
            type="number"
            id="maxMileage"
            value={mileageRange.maxMileage}
            onChange={handleMaxMileageChange}
          />
          <Span>To</Span>
        </div>
      </div>
    </div>
  );
};