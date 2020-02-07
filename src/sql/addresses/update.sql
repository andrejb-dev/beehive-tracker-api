UPDATE addresses 
SET 
    street = ${data.street},
    city = ${data.city},
    zip_code = ${data.zip_code},
    gps_location = ${data.gps_location}
WHERE id = ${id}