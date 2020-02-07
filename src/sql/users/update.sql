UPDATE users 
SET 
    name = ${data.name},
    born = ${data.born},
    address_id = ${data.address_id}
WHERE id = ${id}