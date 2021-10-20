type Operation = {
  id: number,
  status: string,
  side: string,
  pair: string,
  open: string,
  buy: string,
  cost: string,
  sell: string,
  returnD: string,
  returnP: string,
  setup: string,
};

type ResumePosition = {
  status: string,
  side: string,
  pair: string,
  size: number,
  cost: number,
  averageEntryPrice: number,
  averageExitPrice: number,
  returnD: number,
  returnP: number,
};

type Position = {
  action: string,
  date: string,
  time: string,
  size: number,
  price: number,
  value: number,
  fees: number,
};

type Targets = {
  action: string,
  size: number,
  price: number,
  value: number,
  returnD: number,
  returnP: number,
};

type MonthlyResume = {
  month: string,
  returnD: number,
  returnP: number,
  profitFactor: number,
  trades: number,
  win: number,
  fees: number,
};

type TableHeader = {
  Header: string,
  accessor: string,
};

type Table<T> = {
  columns: TableHeader[],
  data: T[],
  filter: boolean,
  goTo: string,
  action: boolean,
  handleRowClick: () => | null,
};

type Columns = {
  columns: TableHeader[],
};

type FiltersOptions = {
  id: number,
  label: string,
  type: string,
  values: [string],
  state: boolean | string,
  setState: Dispatch<SetStateAction<boolean | string>>,
};

type Fields = {
  label: string,
  type: string,
  id: string,
  value: string,
  options: string[],
};

type DoughnutConfig = {
  type: string,
  data: {
    datasets: [{
      label: string,
      data: number[],
      backgroundColor: string[],
      hoverOffset: number,
      borderColor: string,
    }],
    labels: string[]
  },
  options: {
    responsive: boolean,
    plugins: {
      title: {
        display: boolean,
        text: string,
        color: string,
        font: {
          family: string,
          weight: string,
          size: number
        }
      },
      legend: {
        position: string,
        labels: {
          color: string,
          padding: number,
          usePointStyle: boolean,
          font: {
            family: string
          }
        }
      }
    }
  }
};

type BarsConfig = {
  type: string,
  data: {
    labels: string[],
    datasets: [{
      label: string,
      data: number[],
      backgroundColor: () => string[],
    }]
  },
  options: {
    scales: {
      y: {
        ticks: {
          color: string
        },
        beginAtZero: boolean
      },
      x: {
        ticks: {
          color: string
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: string,
        color: string,
        font: {
          family: string,
          weight: string,
          size: number
        }
      }
    }
  }
};

type ReactTableRow = {
  id: number,
  cells: [],
  getRowProps: () => []
};
