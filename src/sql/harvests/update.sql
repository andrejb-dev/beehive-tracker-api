UPDATE harvests 
SET 
    date = ${data.date},
    product_key = ${data.product_key},
    quantity = ${data.quantity},
    unit_code = ${data.unit_code},
    note = ${data.note}
WHERE id = ${id}