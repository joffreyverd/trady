import React, { useEffect, useRef, ReactElement } from 'react';
import { Chart, DoughnutController, ArcElement, Legend, Title, Tooltip } from 'chart.js';
import styles from './doughnut.module.scss';

Chart.register(DoughnutController, ArcElement, Legend, Title, Tooltip);

function Doughnut(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    /* eslint-disable no-new */
    new Chart(canvasRef.current, {
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
          borderColor: '#222531',
        }],
        labels: [
          'BUSD',
          'BTC',
          'ETH',
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Assets allocation',
            color: '#fff',
            font: {
              family: 'Roboto',
              weight: 'bold',
              size: 20,
            },
          },
          legend: {
            position: 'bottom',
            labels: {
              color: '#fff',
              padding: 25,
              usePointStyle: true,
              font: {
                family: 'Roboto',
              },
            },
          },
        },
      },
    });
  }, [canvasRef]);

  return (
    <div className={styles.chartContainer}>
      <canvas id='doughnut' ref={canvasRef} />
    </div>
  );
}

export default Doughnut;
