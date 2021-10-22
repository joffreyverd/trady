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
  handleRowClick: any,
};

type Columns = {
  columns: TableHeader[],
};

type FiltersOptions<F> = {
  id: number,
  label: string,
  type: string,
  values: F[],
  state: F,
  setState: Dispatch<SetStateAction<F>>,
};

type Fields = {
  id: string,
  label: string,
  type: string,
  value: string,
  options: string[],
};

type ReactTableRow = {
  id: number,
  cells: [],
  getRowProps: () => []
};

type CheckboxProps = {
  id: number,
  label: string,
  type: string,
  values: boolean[],
  state: boolean,
  setState: Dispatch<SetStateAction<boolean>>
};

type DropdownProps = {
  id: number,
  label: string,
  type: string,
  values: string[],
  state: string,
  setState: Dispatch<SetStateAction<string>>
};
