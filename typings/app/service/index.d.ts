// This file is created by egg-ts-helper@1.30.3
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportData from '../../../app/service/data';
import ExportGetData from '../../../app/service/getData';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    data: AutoInstanceType<typeof ExportData>;
    getData: AutoInstanceType<typeof ExportGetData>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
