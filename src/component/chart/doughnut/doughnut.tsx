import React, { ReactElement, useContext } from 'react';
import CustomChart from 'component/chart/customChart';
import { ThemeContext } from 'context/themeContext';
import { Chart, DoughnutController, ArcElement, Legend, Title, Tooltip } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Legend, Title, Tooltip);

function Doughnut(): ReactElement {
  const { themeState } = useContext(ThemeContext);
  const fontColor = themeState ? '#fff' : '#26272d';
  const borderColor = themeState ? '#222531' : '#fff';

  const config = {
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

  function updateTheme() {
    config.data.datasets[0].borderColor = borderColor;
    config.options.plugins.title.color = fontColor;
    config.options.plugins.legend.labels.color = fontColor;
  }

  return (
    <CustomChart
      id='doughnut'
      Chart={Chart}
      config={config}
      updateTheme={updateTheme}
      optionalClass='doughnutContainer'
    />
  );
}

export default Doughnut;
