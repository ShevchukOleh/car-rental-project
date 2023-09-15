export const FilterByPrice = ({onPriceChange, selectedPrice}) => {    
    const handlePriceChange = (event) => {
        const price = event.target.value;
        onPriceChange(price);
    };

    return (
        <div>
            <label htmlFor="hourlyPrice">Price/ 1 hour</label>
            <select id="hourlyPrice" value={selectedPrice} onChange={handlePriceChange}>
                <option value="">Any price</option>
                {[...Array(15)].map((_, i) => (
                    <option key={i} value={`${i * 10}`}>{`$${i * 10}`}</option>
                ))}
            </select>
        </div>
    )
}