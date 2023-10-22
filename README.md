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
- (DELETE) : /academic-semesters/:id (Authenticated by Admin and Super admin)
