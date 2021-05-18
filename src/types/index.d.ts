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
}

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
}

type Position = {
    action: string,
    date: string,
    time: string,
    size: number,
    price: number,
    value: number,
    fees: number,
}

type Targets = {
    action: string,
    size: number,
    price: number,
    value: number,
    returnD: number,
    returnP: number
}

type TableHeader = {
    Header: string,
    accessor: string,
}

type Table = {
    columns: TableHeader[],
    data: Operation[] | Position[] | ResumePosition[] | Targets[],
    pagination: boolean,
    filter: boolean,
    goTo: string,
}

type Columns = {
    columns: TableHeader[],
}
