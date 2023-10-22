# university-management-api-gateway

Initial URL: http://localhost:3030/api/v1

## Academic Semester:

- (POST) : /academic-semesters (Authenticated by Admin and Super admin)

```json
sample input:
{
  "year": 2031,
  "title": "Summer",
  "code": "02",
  "startMonth": "january",
  "endMonth": "June"
}
```

- (GET) : /academic-semesters (OPEN ROUTE)
- (GET) : /academic-semesters/:id (OPEN ROUTE)
- (PATCH) : /academic-semesters/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
  "year": 2031,
  "title": "Summer",
  "code": "02",
  "startMonth": "january",
  "endMonth": "June"
}
```

- (DELETE) : /academic-semesters/:id (Authenticated by Admin and Super admin)

## Academic Faculty:

- (POST) : /academic-faculties/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Department of CSE"
}
```

- (GET) : /academic-faculties/ (OPEN ROUTE)
- (GET) : /academic-faculties/:id (OPEN ROUTE)
- (PATCH) : /academic-faculties/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Department of CSE"
}
```

- (DELETE) : /academic-faculties/:id (Authenticated by Admin and Super admin)

## Academic Department:

- (POST) : /academic-department/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Software Engineering",
    "academicFacultyId": "56a4223b-db24-41e1-904f-a58033f2c4c8"
}
```

- (GET): /academic-department/ (OPEN ROUTE)
- (GET): /academic-department/:id (OPEN ROUTE)
- (PATCH): /academic-department/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Programming Language"
}
```

- (DELETE) : /academic-department/:id (Authenticated by Admin and Super admin)

## Building:

- (POST) : /buildings/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Building D"
}
```

- (GET): /buildings/ (OPEN ROUTE)
- (GET): /buildings/:id (OPEN ROUTE)
- (PATCH): /buildings/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Building D"
}
```

- (DELETE) : /buildings/:id (Authenticated by Admin and Super admin)

## Rooms:

- (POST) : /rooms/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "roomNumber": "501",
    "floor": "5",
    "buildingId": "dfdf3121-2dd9-4684-be63-bced367de027"
}
```

- (GET): /rooms/ (OPEN ROUTE)
- (GET): /rooms/:id (OPEN ROUTE)
- (PATCH): /rooms/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "roomNumber": "501",
    "floor": "5",
    "buildingId": "dfdf3121-2dd9-4684-be63-bced367de027"
}
```

- (DELETE) : /rooms/:id (Authenticated by Admin and Super admin)
