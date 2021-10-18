import React, { ReactElement, useContext } from 'react';
import CustomChart from 'component/chart/customChart';
import { ThemeContext } from 'context/themeContext';
import { Chart, BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip } from 'chart.js';

Chart.register(BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip);

function Bars(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const labels = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [65, 59, -12, 81, 56, 55, 40, -21, 24, 43, 32, 116];
  const fontColor = themeState ? '#fff' : '#26272d';

  function getBackgroundcolor(): string[] {
    const backgroundColor = [];
    data.forEach((result) => {
      const color = result >= 0 ? '#00b399' : '#f96e8f';
      backgroundColor.push(color);
    });
    return backgroundColor;
  }

  const config = {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{ label: '', data, backgroundColor: getBackgroundcolor }],
    },
    options: {
      scales: {
        y: { ticks: { color: fontColor }, beginAtZero: true },
        x: { ticks: { color: fontColor } }
      },
      plugins: {
        title: {
          display: true,
          text: 'Monthly revenus ($)',
          color: fontColor,
          font: { family: 'Roboto', weight: 'bold', size: 20 },
        },
      },
    },
  };

  function updateTheme() {
    config.options.plugins.title.color = fontColor;
    config.options.scales.x.ticks.color = fontColor;
    config.options.scales.y.ticks.color = fontColor;
  }

  return (
    <CustomChart
      id='bars'
      Chart={Chart}
      config={config}
      updateTheme={updateTheme}
      optionalClass='barsContainer'
    />
  );
}

export default Bars;
