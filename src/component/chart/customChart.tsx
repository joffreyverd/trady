import React, { useState, useEffect, useRef, ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { Chart, ChartConfiguration } from 'chart.js';
import styles from './customChart.module.scss';

type Props = {
  id: string,
  Chart: typeof Chart,
  config: ChartConfiguration,
  updateTheme: () => void,
  optionalClass: string
};

function CustomChart(props: Props): ReactElement {
  const { id, Chart, config, updateTheme, optionalClass } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chartInstance, setChartInstance] = useState(null);
  const { themeState } = useContext(ThemeContext);
  const theme = themeState ? styles.dark : styles.light;
  const className = optionalClass === 'barsContainer' ?
    styles.barsContainer : styles.doughnutContainer;

  const buildChart = () => {
    const newChartInstance: Chart = new Chart(canvasRef.current, config);
    setChartInstance(newChartInstance);
  };

  useEffect(() => {
    if (chartInstance) {
      updateTheme();
      chartInstance.destroy();
      buildChart();
    }
  }, [themeState]);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    buildChart();
  }, [canvasRef]);

  return (
    <div className={`${className} ${theme}`}>
      <canvas id={id} ref={canvasRef} />
    </div>
  );
}

export default CustomChart;
