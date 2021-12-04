// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBiliBili from '../../../app/service/BiliBili';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    biliBili: AutoInstanceType<typeof ExportBiliBili>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
