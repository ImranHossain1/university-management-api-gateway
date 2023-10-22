import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validations';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();
router.post(
  '/',
  validateRequest(AcademicSemesterValidation.academicSemesterCreate),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.insertIntoDB
);
router.get('/:id', AcademicSemesterController.getDataById);
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.updateOneIntoDB
);
router.delete('/:id', AcademicSemesterController.deleteOneFromDB);
router.get('/', AcademicSemesterController.getAllFromDB);

export const academicSemesterRoutes = router;
