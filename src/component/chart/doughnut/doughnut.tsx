import React, { useState, useEffect, useRef, ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { Chart, DoughnutController, ArcElement, Legend, Title, Tooltip } from 'chart.js';
import styles from './doughnut.module.scss';

Chart.register(DoughnutController, ArcElement, Legend, Title, Tooltip);

function Doughnut(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;
  const fontColor = themeState ? '#fff' : '#26272d';
  const borderColor = themeState ? '#222531' : '#fff';

  let config = {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Pie chart',
        data: [10, 20, 30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 5,
        borderColor: borderColor,
      }],
      labels: ['BUSD', 'BTC', 'ETH'],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Assets allocation',
          color: fontColor,
          font: { family: 'Roboto', weight: 'bold', size: 20 },
        },
        legend: {
          position: 'bottom',
          labels: {
            color: fontColor,
            padding: 25,
            usePointStyle: true,
            font: { family: 'Roboto' },
          },
        },
      },
    },
  };

  useEffect(() => {
    if (chartInstance) {
      config.data.datasets[0].borderColor = borderColor;
      config.options.plugins.title.color = fontColor;
      config.options.plugins.legend.labels.color = fontColor;
      chartInstance.destroy();
      buildChart();
    }
  }, [themeState])

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    buildChart();
  }, [canvasRef]);

  function buildChart() {
    const newChartInstance = new Chart(canvasRef.current, config);
    setChartInstance(newChartInstance);
  }

  return (
    <div className={`${styles.chartContainer} ${theme}`}>
      <canvas id='doughnut' ref={canvasRef} />
    </div>
  );
}

export default Doughnut;
