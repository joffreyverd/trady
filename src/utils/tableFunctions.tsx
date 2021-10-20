type Field = {
  label: string,
  type: string,
  id: string,
  value: string,
  options: string[]
};

function chargeFieldsWithValues(fields: Field[], row: ReactTableRow): Field[] {
  fields.forEach((field) => {
    if (field.id in row) {
      field.value = row[field.id];
    }
  });
  return fields;
}

export default chargeFieldsWithValues;
