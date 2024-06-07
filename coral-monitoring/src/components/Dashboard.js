import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { loadData } from '../utils/dataLoader';
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData();
      setData(data);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: data.map(d => d.date),
    datasets: [{
      label: 'Índice de Saúde dos Recifes',
      data: data.map(d => d.health_index),
      borderColor: 'rgba(75,192,192,1)',
      fill: false
    }]
  };

  return (
    <div>
      <h2>Dashboard de Saúde dos Recifes</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Dashboard;
