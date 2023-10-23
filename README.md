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

## Courses:

- (POST) : /courses/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Advance database",
    "code": "CSE118",
    "credits": 3,
    "preRequisiteCourses": [
        {
            "courseId": "1e2aba3f-9153-4c5f-a3f4-003ba2be5355"
        }
    ]
}
```

- (GET): /courses/ (OPEN ROUTE)
- (GET): /courses/:id (OPEN ROUTE)
- (PATCH): /courses/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Advance database",
    "code": "CSE118",
    "credits": 3,
    "preRequisiteCourses": [
        {
            "courseId": "1e2aba3f-9153-4c5f-a3f4-003ba2be5355"
        }
    ]
}
```

- (DELETE) : /courses/:id (Authenticated by Admin and Super admin)

## Offered Course:

- (POST) : /offered-courses/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "courseIds": [
        "3bc5804f-f6ab-42b9-8d9d-b5e55558f4d0"
    ],
    "academicDepartmentId": "eb66d33d-a611-47cb-8f10-051ee6534176",
    "semesterRegistrationId": "f9f7394b-4a68-410d-bde3-df8a9d7bbd17"
}
```

- (GET): /offered-courses/ (OPEN ROUTE)
- (GET): /offered-courses/:id (OPEN ROUTE)
- (PATCH): /offered-courses/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "courseId": "4e37d95e-9cd1-4139-82e8-a51d6a5a5fab"
}
```

- (DELETE) : /offered-courses/:id (Authenticated by Admin and Super admin)

## Semester Registration:

- (POST) : /semester-registrations/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startDate": "2023-10-09T16:27:12.552Z",
    "endDate": "2023-10-09T16:27:12.552Z",
    "minCredit": 6,
    "maxCredit": 18,
    "academicSemesterId": "4fad990c-b8dd-49c7-b5d1-52da5d71cc6c"
}
```

- (GET): /semester-registrations/ (OPEN ROUTE)
- (GET): /semester-registrations/:id (OPEN ROUTE)
- (PATCH): /semester-registrations/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startDate": "2023-10-09T16:27:12.552Z",
    "endDate": "2023-10-09T16:27:12.552Z",
    "minCredit": 6,
    "maxCredit": 18,
    "academicSemesterId": "4fad990c-b8dd-49c7-b5d1-52da5d71cc6c"
}
```

- (DELETE) : /semester-registrations/:id (Authenticated by Admin and Super admin)
- (POST): /semester-registrations/:id/start-new-semester(Authenticated by Admin and Super admin)

- (GET): /semester-registrations/my-registration (Authenticated by Student)
- (GET): /semester-registrations/my-semester-registration-courses (Authenticated by Student)

- (POST) : /semester-registrations/start-registration (Authenticated by Student)
- (POST) : /semester-registrations/confirm-registration (Authenticated by Student)

- (POST): /semester-registrations/enroll-into-course (Authenticated by Student)
- (POST): /semester-registrations/withdraw-from-course (Authenticated by Student)
