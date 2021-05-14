interface Menu {
    title: string,
    action: string
}

interface Balances {
    title: string,
    value: string
}

interface OperationsTableColumns {
    Header: string,
    accessor: string,
}

interface OperationsTableContent {
    id: integer,
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
    pnl: string,
}
