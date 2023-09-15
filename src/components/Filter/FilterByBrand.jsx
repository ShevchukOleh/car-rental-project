export const FilterByBrand = ({cars, onBrandChange, selectedBrand}) => {    
    const handleBrandChange = (event) => {
        const brand = event.target.value;
        onBrandChange(brand);
    };

    const uniqueCarBrands = [...new Set(cars.map(car => car.make))].sort();

    return (
        <div>
            <label htmlFor="carBrand">Car brand</label>
            <select id="carBrand" value={selectedBrand} onChange={handleBrandChange}>
                <option value="">Enter the text</option>
                {uniqueCarBrands.map((make, index) => (
                    <option key={index} value={make}>{make}</option>
                ))}
            </select>
        </div>
    )
}