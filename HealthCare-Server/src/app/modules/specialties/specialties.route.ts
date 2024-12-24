import express, { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesValidation } from './specialties.validations';

const router = express.Router();

router.get('/', SpecialtiesController.getAllFromDB);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.DOCTOR),
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = SpecialtiesValidation.create.parse(JSON.parse(req.body.data));
    return SpecialtiesController.insertIntoDB(req, res, next);
  },
);
router.delete(
  '/:id',
  // auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SpecialtiesController.deleteFromDB,
);

export const SpecialtiesRoutes = router;
