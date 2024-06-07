import React, { useEffect, useState } from 'react';
import { loadData } from '../utils/dataLoader';

const SpeciesIdentification = () => {
    const [data, setData] = useState([]);
    const [endangeredSpecies, setEndangeredSpecies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadData();
            setData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const species = data.filter(d => d.status === 'endangered').map(d => d.species);
        setEndangeredSpecies([...new Set(species)]);
    }, [data]);

    return (
        <div>
            <h2>Identificação de Espécies Ameaçadas</h2>
            <ul>
                {endangeredSpecies.map((species, index) => (
                    <li key={index}>{species}</li>
                ))}
            </ul>
        </div>
    );
};

export default SpeciesIdentification;
