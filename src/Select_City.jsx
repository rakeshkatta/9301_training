import React, {useState} from 'react';


const data = {
    countries: [
        {
            name: "USA",
            states: [
                {
                    name : "TX" ,
                    Cities: ["Austin", "Houston", "Dallas"] 
                 },
                 {
                    name : "CA" ,
                    Cities: ["San Franscisco", "Los Ang", "Oakland"] 
                 },
                 
            ]
        },
        {
            name: "ABC",
            states: [
                {
                    name : "A" ,
                    Cities: ["AA", "BB", "CC"] 
                 },
                 {
                    name : "C" ,
                    Cities: ["CC", "DD", "EE"] 
                 },
                 
            ]
        }
    ]
}

export const SelectCity = () => {
    const [selectedCounrty, setSelectedCounrty] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();

    const availableStates = data.countries.find((c) => c.name ===  selectedCounrty);
    const availableCities = availableStates?.Cities?.find((s) => s.name ===  selectedState);

    return (
        <>
        <div>
            <label>Country</label>
            <select 
                value={selectedCounrty}
                placeholder="Select State"
                onChange={(e) => setSelectedCounrty(e.target.value)}
            >
                <option>Select Counrty</option> 
                {
                    data.countries.map((country, key) => {
                        return (
                            <option value={country.name} key={key}>{country.name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div>
            <label>State</label>
            <select 
                value={selectedState}
                placeholder="Select State"
                onChange={(e) => setSelectedState(e.target.value)}
            >
                <option>Select Country</option> {
                    availableStates?.states.map((state, key) => {
                        return (
                            <option value={state.name} key={key}>{state.name}</option>
                        )
                    })
                }
            </select>
        </div>
        <div>
            <label>City</label>
            <select 
                value={selectedCity}
                placeholder="Select City"
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option>Select City</option> {
                    availableCities?.Cities?.map((city, key) => {
                        return (
                            <option value={city.name} key={key}>{city.name}</option>
                        )
                    })
                }
            </select>
        </div>
        </>
    )
} 