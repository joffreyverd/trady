import React, { useState, useEffect, useRef, ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import styles from './chart.module.scss';

function CustomChart(props): ReactElement {
  const { id, Chart, config, updateTheme, optionalClass } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;
  const className = optionalClass === 'barsContainer' ?
    styles.barsContainer : styles.doughnutContainer;

  useEffect(() => {
    if (chartInstance) {
      updateTheme();
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
    <div className={`${className} ${theme}`}>
      <canvas id={id} ref={canvasRef} />
    </div >
  );
}

export default CustomChart;
