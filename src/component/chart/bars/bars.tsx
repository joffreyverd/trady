import React, { useState, useEffect, useRef, ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { Chart, BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip } from 'chart.js';
import styles from './bars.module.scss';

Chart.register(BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip);

function Bars(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;
  const labels = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [65, 59, -12, 81, 56, 55, 40, -21, 24, 43, 32, 116];
  const backgroundColor = [];
  data.forEach((result) => {
    let color = result >= 0 ? '#00b399' : '#f96e8f';
    backgroundColor.push(color);
  })
  const fontColor = themeState ? '#fff' : '#26272d';

  let config = {
    type: 'bar', data: {
      labels: labels,
      datasets: [{ label: '', data, backgroundColor }],
    },
    options: {
      scales: {
        y: { ticks: { color: fontColor }, beginAtZero: true },
        x: { ticks: { color: fontColor } }
      },
      plugins: {
        title: {
          display: true, text: 'Monthly revenus ($)', color: fontColor,
          font: { family: 'Roboto', weight: 'bold', size: 20 },
        },
      },
    },
  };

  useEffect(() => {
    if (chartInstance) {
      config.options.plugins.title.color = fontColor;
      config.options.scales.x.ticks.color = fontColor;
      config.options.scales.y.ticks.color = fontColor;
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
      <canvas id='bars' ref={canvasRef} />
    </div >
  );
}

export default Bars;
