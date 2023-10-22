import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();
router.post('/', AcademicDepartmentController.insertIntoDB);
router.get('/:id', AcademicDepartmentController.getDataById);
router.patch('/:id', AcademicDepartmentController.updateOneIntoDB);
router.delete('/:id', AcademicDepartmentController.deleteOneFromDB);
router.get('/', AcademicDepartmentController.getAllFromDB);

export const academicDepartmentRoutes = router;
