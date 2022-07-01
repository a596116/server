// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlog from '../../../app/model/blog';
import ExportTest from '../../../app/model/test';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Blog: ReturnType<typeof ExportBlog>;
    Test: ReturnType<typeof ExportTest>;
    User: ReturnType<typeof ExportUser>;
  }
}
