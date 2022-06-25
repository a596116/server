// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChecktoken from '../../../app/middleware/checktoken';

declare module 'egg' {
  interface IMiddleware {
    checktoken: typeof ExportChecktoken;
  }
}
