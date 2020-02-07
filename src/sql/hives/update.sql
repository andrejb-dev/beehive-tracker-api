UPDATE hives 
SET 
    active = ${data.active},
    created = ${data.created},
    note = ${data.note}
WHERE id = ${id}