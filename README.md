# beehive-tracker-api

Rest api services for storing and accessing data from beehive tracker app. 

## Published resources
 + user
     * `GET ../users/:user_email` returns basic info about user
 + yard
     * `POST ../users/:user_email/yards` create new yard
     * `GET ../users/:user_email/yards` get all yards
     * `GET ../users/:user_email/yards/:yard_id` get yard by id
     * `PUT ../users/:user_email/yards/:yard_id` update yard by id
     * `DELETE ../users/:user_email/yards/:yard_id` delete yard by id
 + hive
     * `POST ../users/:user_email/yards/:yard_id/hives` create new hive
     * `GET ../users/:user_email/yards/:yard_id/hives` get all hives in yard
     * `GET ../users/:user_email/yards/:yard_id/hives/:hive_id` get hive by id in this yard
     * `PUT ../users/:user_email/yards/:yard_id/hives/:hive_id` update hive
     * `DELETE ../users/:user_email/yards/:yard_id/hives/:hive_id` delete hive
 + queen
     * `POST ../users/:user_email/yards/:yard_id/hives/:hive_id/queen` create new queen in hive
     * `GET ../users/:user_email/yards/:yard_id/hives/:hive_id/queen` get queen in this hive
     * `PUT ../users/:user_email/yards/:yard_id/hives/:hive_id/queen` update queen in this hive
     * `DELETE ../users/:user_email/yards/:yard_id/hives/:hive_id/queen` delete queen
 + harvest ??
     * `POST /users/:user_id/yards/:yard_id/hives/:hive_id/harvests`
     * `GET /users/:user_id/yards/:yard_id/hives/:hive_id/harvests`
     * `GET /users/:user_id/yards/:yard_id/hives/:hive_id/harvests/harvest_id`
     * `DELETE /users/:user_id/yards/:yard_id/hives/:hive_id/harvests/harvest_id`
 + inspections ??
     * `POST /users/:user_id/yards/:yard_id/hives/:hive_id/inspections`
     * `GET /users/:user_id/yards/:yard_id/hives/:hive_id/inspections`
     * `GET /users/:user_id/yards/:yard_id/hives/:hive_id/inspections/:inspection_id`
     * `DELETE /users/:user_id/yards/:yard_id/hives/:hive_id/inspections/:inspection_id`

## Message forms
### user
```json
{
    "id": 0,
    "email": "email@email.com",
    "password": "******",
    "registered": "2001-01-01 04:14:09",
    "last_signed_in": "2001-01-01 04:14:09",
    "subscription_expiration": "2001-06-01 04:14:09",
    "contributed": "0,0 €"
}
```
### yard
```json
{
    "id": 0,
    "gps_lat": 48.1565,
    "gps_long": 18.1545,
    "name": "Yard name",
    "description": "Longer string longer string longer string longer string longer string longer string",
    "notes": [
        {
            "inserted": "2001-01-01 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        },
        {
            "inserted": "2001-01-02 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        },
        {
            "inserted": "2001-01-03 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        }
    ],
    "hives": [
        {
            "id": 0,
            "name": "Hive name 0",
            "state": "active",
            "created": "2001-01-01 04:14:09",
            "strength": "healthy"
        },
        {
            "id": 1,
            "name": "Hive name 1",
            "state": "active",
            "created": "2001-01-01 04:14:09",
            "strength": "strong"
        },
        {
            "id": 2,
            "name": "Hive name 2",
            "state": "inactive",
            "created": "2001-01-01 04:14:09",
            "strength": "critical"
        },
    ]
}
```
### hive
```json
{
    "id": 0,
    "name": "Hive name 0",
    "state": "active",
    "created": "2001-01-01 04:14:09",
    "strength": "healthy",
    "notes": [
        {
            "inserted": "2001-01-01 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        },
        {
            "inserted": "2001-01-02 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        },
        {
            "inserted": "2001-01-03 04:14:09",
            "title": "Note title",
            "body": "Note text note text note text note text note text note text note text note text note text note text."
        }
    ],
    "inspections": [
        {
            "created": "2001-01-02 04:14:09",
            "temper": "",
            "population": "",
            "scent": "",
            "equipment_condition": "",
            "hive_condition": "",
            "diseases": [
                {"symptoms": "Symproms symproms symproms symproms", "impact": "moderate"},
                {"symptoms": "Symproms symproms symproms symproms", "impact": "heavy"},
                {"symptoms": "Symproms symproms symproms symproms", "impact": "light"}
            ]
        },
        {
            "created": "2001-01-02 04:14:09",
            "temper": "",
            "population": "",
            "scent": "",
            "equipment_condition": "",
            "hive_condition": "",
            "diseases": [
                {"symptoms": "Symproms symproms symproms symproms", "impact": "moderate"},
                {"symptoms": "Symproms symproms symproms symproms", "impact": "heavy"},
                {"symptoms": "Symproms symproms symproms symproms", "impact": "light"}
            ]
        }
    ],
    "harvests": [
        {
            "harvested": "2001-01-02 04:14:09",
            "products": [
                {"product": "honey", "quantity": "10"},
                {"product": "propolis", "quantity": "10"},
                {"product": "wax", "quantity": "10"}
            ]
        },
        {
            "harvested": "2001-01-02 04:14:09",
            "products": [
                {"product": "honey", "quantity": "10"},
                {"product": "propolis", "quantity": "10"},
                {"product": "wax", "quantity": "10"}
            ]
        }
    ],
}
```
### queen
```
todo
```
