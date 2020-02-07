UPDATE inspections 
SET 
    date = ${data.date},
    sighted = ${data.sighted},
    strength = ${data.strength},
    temper = ${data.temper},
    population = ${data.population},
    queen_cells = ${data.queen_cells},
    laying_pattern = ${data.laying_pattern},
    scent = ${data.scent},
    equipment_condition = ${data.equipment_condition},
    hive_condition = ${data.hive_condition},
    foundation_type = ${data.foundation_type},
    diseases = ${data.diseases},
    treatments = ${data.treatments},
    note = ${data.note}
WHERE id = ${id}