function chargeFieldsWithValues(fields, row) {
    fields.map((field) => {
        if (field.id in row) {
            field.value = row[field.id];
        }
    });
    return fields;
}

export { chargeFieldsWithValues };
