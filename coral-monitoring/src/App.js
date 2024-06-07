import React from 'react';
import Dashboard from './components/Dashboard';
import SpeciesIdentification from './components/SpeciesIdentification';
import EnvironmentalDegradation from './components/EnvironmentalDegradation';

const App = () => {
    return (
        <div>
            <h1>Monitoramento e Conservação de Recifes de Coral</h1>
            <Dashboard />
            <SpeciesIdentification />
            <EnvironmentalDegradation />
        </div>
    );
};

export default App;
