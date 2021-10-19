import React, { useState, useEffect, useRef, ReactElement, useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import { ChartType } from 'chart.js';
import styles from './customChart.module.scss';

type Props = {
  id: string,
  Chart: ChartType,
  config: DoughnutConfig | BarsConfig,
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

  function buildChart() {
    const newChartInstance = new Chart(canvasRef.current, config);
    setChartInstance(newChartInstance);
  }

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
