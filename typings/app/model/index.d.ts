// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/model/test';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Test: ReturnType<typeof ExportTest>;
    User: ReturnType<typeof ExportUser>;
  }
}
