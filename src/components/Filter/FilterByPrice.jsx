import { Label, Select } from "./Filter.styled";

export const FilterByPrice = ({onPriceChange, selectedPrice}) => {    
    const handlePriceChange = (event) => {
        const price = event.target.value;
        onPriceChange(price);
    };

    return (
        <div style={{display: "grid"}}>
            <Label htmlFor="hourlyPrice">Price/ 1 hour</Label>
            <Select style={{width: '125px'}} id="hourlyPrice" value={selectedPrice} onChange={handlePriceChange}>
                <option value="">To $</option>
                {[...Array(15)].map((_, i) => (
                    <option key={i} value={`${i * 10}`}>{`$${i * 10}`}</option>
                ))}
            </Select>
        </div>
    )
}