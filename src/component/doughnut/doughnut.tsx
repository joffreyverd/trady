import { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement } from 'chart.js';
import styles from './doughnut.module.scss';

Chart.register(DoughnutController, ArcElement);

function Doughnut(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    /* eslint-disable no-new */
    new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
        ],
        datasets: [{
          label: 'Pie chart',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
          borderColor: '#222531',
        }],
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
