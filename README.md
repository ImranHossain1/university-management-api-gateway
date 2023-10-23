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

## Offered Course Class Schedule:

- (POST) : /offered-course-class-schedules/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startTime": "16:30",
    "endTime": "17:30",
    "dayOfWeek": "FRIDAY",
    "offeredCourseSectionId": "9583d55c-5008-46e6-8ce6-9099562502fa",
    "semesterRegistrationId": "f3421800-b253-4769-94fa-87a0c88ed604",
    "roomId": "ffe0136b-50e5-4955-9691-21356bd6cf28",
    "facultyId": "a9232359-5ee3-4e44-ba95-72475b33b3da"
}
```

- (GET): /offered-course-class-schedules/ (OPEN ROUTE)
- (GET): /offered-course-class-schedules/:id (OPEN ROUTE)
- (PATCH): /offered-course-class-schedules/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "startTime": "16:30",
    "endTime": "17:30",
    "dayOfWeek": "FRIDAY",
    "offeredCourseSectionId": "9583d55c-5008-46e6-8ce6-9099562502fa",
    "semesterRegistrationId": "f3421800-b253-4769-94fa-87a0c88ed604",
    "roomId": "ffe0136b-50e5-4955-9691-21356bd6cf28",
    "facultyId": "a9232359-5ee3-4e44-ba95-72475b33b3da"
}
```

- (DELETE) : /offered-course-class-schedules/:id (Authenticated by Admin and Super admin)

## Offered Course Sections:

- (POST) : /offered-course-sections/ (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Section E",
    "maxCapacity": 30,
    "offeredCourseId": "29e55dda-32f4-40ea-8fe6-cfc268740905",
    "classSchedules": [
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "THURSDAY",
            "roomId": "96e8e986-faaa-41a6-88ce-a2c543b759fa",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        },
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "TUESDAY",
            "roomId": "3c80dfb2-537a-45d7-b923-430cdbd2039b",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        }
    ]
}
```

- (GET): /offered-course-sections/ (OPEN ROUTE)
- (GET): /offered-course-sections/:id (OPEN ROUTE)
- (PATCH): /offered-course-sections/:id (Authenticated by Admin and Super admin)

```json
sample input:
{
    "title": "Section E",
    "maxCapacity": 30,
    "offeredCourseId": "29e55dda-32f4-40ea-8fe6-cfc268740905",
    "classSchedules": [
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "THURSDAY",
            "roomId": "96e8e986-faaa-41a6-88ce-a2c543b759fa",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        },
        {
            "startTime": "12:30",
            "endTime": "13:30",
            "dayOfWeek": "TUESDAY",
            "roomId": "3c80dfb2-537a-45d7-b923-430cdbd2039b",
            "facultyId": "a251657f-fc32-467c-9c54-4cc9c49bb3c8"
        }
    ]
}
```

- (DELETE) : /offered-course-sections/:id (Authenticated by Admin and Super admin)
