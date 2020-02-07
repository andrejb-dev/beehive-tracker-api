UPDATE todos 
SET 
    due = ${data.due},
    title = ${data.title},
    description = ${data.description},
    completed = ${data.completed}
WHERE id = ${id}