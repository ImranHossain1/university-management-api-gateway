import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles
} from './academicSemester.constants';
import { strict } from 'assert';

const academicSemesterCreate = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is Required'
    }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'Title is required'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month is required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month is required'
    })
  })
});
const update = z.object({
  body: z.object({
    title: z.enum([...academicSemesterTitles] as [string, ...string[]]).optional(),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]).optional(),
    year: z.number().optional(),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional(),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]]).optional()
  })
});

export const AcademicSemesterValidation = {
  academicSemesterCreate,
  update
};
