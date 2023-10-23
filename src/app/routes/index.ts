import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/academic-department',
    routes: academicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/semester-registrations',
    routes: semesterRegistrationRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
