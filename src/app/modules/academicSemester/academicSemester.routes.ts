import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();
router.post('/', AcademicSemesterController.insertIntoDB);
router.get('/:id', AcademicSemesterController.getDataById);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);
router.delete('/:id', AcademicSemesterController.deleteOneFromDB);
router.get('/', AcademicSemesterController.getAllFromDB);

export const academicSemesterRoutes = router;
