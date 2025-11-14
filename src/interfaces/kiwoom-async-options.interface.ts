import { FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { KiwoomOptions } from '@interfaces/kiwoom-options.interface';

export type KiwoomAsyncOptions = Pick<ModuleMetadata, 'imports'> & Pick<FactoryProvider<KiwoomOptions>, 'useFactory' | 'inject'>;
