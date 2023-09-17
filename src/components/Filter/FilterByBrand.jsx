import { Label, Select } from "./Filter.styled";

export const FilterByBrand = ({cars, onBrandChange, selectedBrand}) => {    
    const handleBrandChange = (event) => {
        const brand = event.target.value;
        onBrandChange(brand);
    };

    const uniqueCarBrands = [...new Set(cars.map(car => car.make))].sort();
    
    return (
        <div style={{display: "grid"}}>
            <Label htmlFor="carBrand">Car brand</Label>
            <Select style={{width: '224px'}} id="carBrand" value={selectedBrand} onChange={handleBrandChange}>
                <option value="">Enter the text</option>
                {uniqueCarBrands.map((make, index) => (
                    <option key={index} value={make}>{make}</option>
                ))}
            </Select>
        </div>
    )
}