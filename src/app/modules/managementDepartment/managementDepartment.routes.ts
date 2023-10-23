import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validations';
import { ManagementDepartmentController } from './managementDepartment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllFromDB);
router.get('/:id', ManagementDepartmentController.getByIdFromDB);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ManagementDepartmentValidation.create),
  ManagementDepartmentController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.update),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ManagementDepartmentController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ManagementDepartmentController.deleteByIdFromDB
);

export const managementDepartmentRoutes = router;
