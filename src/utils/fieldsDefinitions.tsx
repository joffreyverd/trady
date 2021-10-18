const operationFields = [
  { label: 'Pair', type: 'text', id: 'pair', value: '', options: [] },
  { label: 'Action', type: 'dropdown', id: 'action', value: '', options: ['Buy', 'Sell'] },
  { label: 'Date', type: 'date', id: 'date', value: '', options: [] },
  { label: 'Time', type: 'time', id: 'time', value: '', options: [] },
  { label: 'Size', type: 'number', id: 'size', value: '', options: [] },
  { label: 'Price ($)', type: 'number', id: 'price', value: '', options: [] },
  { label: 'Fees ($)', type: 'number', id: 'fees', value: '', options: [] },
];

const createPosition = [
  { label: 'Action', type: 'dropdown', id: 'action', value: '', options: ['Buy', 'Sell'] },
  { label: 'Date', type: 'date', id: 'date', value: '', options: [] },
  { label: 'Time', type: 'time', id: 'time', value: '', options: [] },
  { label: 'Size', type: 'number', id: 'size', value: '', options: [] },
  { label: 'Price ($)', type: 'number', id: 'price', value: '', options: [] },
  { label: 'Fees ($)', type: 'number', id: 'fees', value: '', options: [] },
];

const editPosition = [
  { label: 'Action', type: 'dropdown', id: 'action', value: '', options: ['Buy', 'Sell'] },
  { label: 'Date', type: 'date', id: 'date', value: '', options: [] },
  { label: 'Time', type: 'time', id: 'time', value: '', options: [] },
  { label: 'Size', type: 'number', id: 'size', value: '', options: [] },
  { label: 'Price ($)', type: 'number', id: 'price', value: '', options: [] },
  { label: 'Fees ($)', type: 'number', id: 'fees', value: '', options: [] },
];

const editTarget = [
  { label: 'Action', type: 'dropdown', id: 'action', value: '', options: ['Buy', 'Sell'] },
  { label: 'Size', type: 'number', id: 'size', value: '', options: [] },
  { label: 'Price ($)', type: 'number', id: 'price', value: '', options: [] },
];

export { operationFields, createPosition, editPosition, editTarget };
