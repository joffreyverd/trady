const operations = [
    { Header: 'Status', accessor: 'status' },
    { Header: 'Side', accessor: 'side' },
    { Header: 'Pair', accessor: 'pair' },
    { Header: 'Open Date', accessor: 'open' },
    { Header: 'Average Entry', accessor: 'buy' },
    { Header: 'Cost', accessor: 'cost' },
    { Header: 'Average Exit', accessor: 'sell' },
    { Header: 'Return $', accessor: 'returnD' },
    { Header: 'Return %', accessor: 'returnP' },
];

const resume = [
    { Header: 'Status', accessor: 'status' },
    { Header: 'Side', accessor: 'side' },
    { Header: 'Pair', accessor: 'pair' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Cost', accessor: 'cost' },
    { Header: 'Average Entry', accessor: 'averageEntryPrice' },
    { Header: 'Average Exit', accessor: 'averageExitPrice' },
    { Header: 'Return $', accessor: 'returnD' },
    { Header: 'Return %', accessor: 'returnP' },
];

const history = [
    { Header: 'Action', accessor: 'action' },
    { Header: 'Date', accessor: 'date' },
    { Header: 'Time', accessor: 'time' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Price $', accessor: 'price' },
    { Header: 'Value $', accessor: 'value' },
    { Header: 'Fees $', accessor: 'fees' },
];

const targets = [
    { Header: 'Action', accessor: 'action' },
    { Header: 'Size', accessor: 'size' },
    { Header: 'Price $', accessor: 'price' },
    { Header: 'Value $', accessor: 'value' },
    { Header: 'Return $', accessor: 'returnD' },
    { Header: 'Return %', accessor: 'returnP' },
]

const monthlyHistory = [
    { Header: 'Month', accessor: 'month' },
    { Header: 'Return $', accessor: 'returnD' },
    { Header: 'Return %', accessor: 'returnP' },
    { Header: 'Profit Factor', accessor: 'profitFactor' },
    { Header: 'Trades', accessor: 'trades' },
    { Header: 'Win %', accessor: 'win' },
    { Header: 'Fees', accessor: 'fees' },
]

export { operations, resume, history, targets, monthlyHistory }
