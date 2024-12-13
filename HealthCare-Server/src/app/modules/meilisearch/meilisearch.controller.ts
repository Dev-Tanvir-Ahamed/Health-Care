import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MeilisearchService } from './meilisearch.services';

const getDoctorsFromMeili = catchAsync(async (req: Request, res: Response) => {
  const { searchTerm, limit } = req.query;

  const numberLimit = Number(limit) || 10;

  const result = await MeilisearchService.getAllDoctors(
    numberLimit,
    searchTerm as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Doctor Retrieved Successfully',
    data: result,
  });
});

export const MeiliSearchController = {
  getDoctorsFromMeili,
};
