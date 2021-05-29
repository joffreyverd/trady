import React, { useEffect, useRef, ReactElement } from 'react';
import { Chart, BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip } from 'chart.js';
import styles from './bars.module.scss';

Chart.register(BarController, LinearScale, CategoryScale, BarElement, Title, Tooltip);

function Bars(): ReactElement {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const labels = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = [65, 59, -12, 81, 56, 55, 40, -21, 24, 43, 32, 116];
    const backgroundColor = [];
    data.map((result) => {
        let color = result >= 0 ? '#00b399' : '#f96e8f';
        backgroundColor.push(color);
    })

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        /* eslint-disable no-new */
        new Chart(canvasRef.current, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '',
                    data,
                    backgroundColor,
                }],
            },
            options: {
                scales: {
                    y: { ticks: { color: '#fff' }, beginAtZero: true },
                    x: { ticks: { color: '#fff' } }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly revenus ($)',
                        color: '#fff',
                        font: {
                            family: 'Roboto',
                            weight: 'bold',
                            size: 20,
                        },
                    },
                },
            },
        });
    }, [canvasRef]);

    return (
        <div className={styles.chartContainer}>
            <canvas id='bars' ref={canvasRef} />
        </div >
    );
}

export default Bars;
