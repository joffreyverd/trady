function chargeFieldsWithValues(fields: any, row: any): any {
  fields.forEach((field) => {
    if (field.id in row) {
      field.value = row[field.id];
    }
  });
  return fields;
}

export default chargeFieldsWithValues;
