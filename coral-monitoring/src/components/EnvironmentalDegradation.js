import React, { useEffect, useState } from 'react';
import { loadData } from '../utils/dataLoader';
import { loadModel } from '../ml/model';
import * as tf from '@tensorflow/tfjs';

const EnvironmentalDegradation = () => {
    const [data, setData] = useState([]);
    const [model, setModel] = useState(null);
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadData();
            setData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchModel = async () => {
            const model = await loadModel();
            setModel(model);
        };
        fetchModel();
    }, []);

    const predictDegradation = async () => {
        if (model && data.length > 0) {
            const inputData = data.map(d => [d.health_index, d.temperature, d.ph, d.salinity]);
            const inputTensor = tf.tensor2d(inputData);
            const prediction = model.predict(inputTensor);
            const predictionData = await prediction.array();
            setPredictions(predictionData);
        }
    };

    useEffect(() => {
        predictDegradation();
    }, [model, data]);

    return (
        <div>
            <h2>Detecção de Padrões de Degradação Ambiental</h2>
            <ul>
                {predictions.map((prediction, index) => (
                    <li key={index}>Previsão para o dado {index + 1}: {prediction}</li>
                ))}
            </ul>
        </div>
    );
};

export default EnvironmentalDegradation;
