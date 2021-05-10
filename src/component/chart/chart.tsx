// import { Chart, DoughnutController } from 'chart.js';
// import { Context } from 'chartjs-plugin-datalabels';

// Chart.register(DoughnutController);

// const data = {
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//   ],
//   datasets: [{
//     data: [300, 50, 100],
//     backgroundColor: [
//       '#FF6384',
//       '#36A2EB',
//       '#FFCE56',
//     ],
//     hoverBackgroundColor: [
//       '#FF6384',
//       '#36A2EB',
//       '#FFCE56',
//     ],
//   }],
// };

// interface FooContext extends Context {
//   foo?: number;
// }

// const chart = new Chart('foo', {
//   options: {
//     plugins: {
//       datalabels: {
//         rotation: (ctx: FooContext) => ctx.foo || 0,
//         listeners: {
//           click: (ctx: FooContext) => {
//             ctx.foo += (ctx.foo || 0) + 10;
//             return true;
//           },
//         },
//       },
//     },
//   },
// });

// const Test: React.FC<any> = () => (
//   <div>
//     <h2>Doughnut Example</h2>
//     <Chart
//       data={data}
//       width={400}
//       height={400}
//       context={}

//     />
//   </div>
// );

// export default Test;
