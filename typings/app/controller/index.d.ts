// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportData from '../../../app/controller/data';
import ExportGetData from '../../../app/controller/getData';
import ExportHome from '../../../app/controller/home';
import ExportUpload from '../../../app/controller/upload';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    data: ExportData;
    getData: ExportGetData;
    home: ExportHome;
    upload: ExportUpload;
    user: ExportUser;
  }
}
