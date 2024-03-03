import { Module } from '@nestjs/common';
import { DateUtils } from '@/shared/common/utils/date.utils';
import { ArrayUtils } from '@/shared/common/utils/array.utils';
import { StringUtils } from '@/shared/common/utils/string.utils';

@Module({
  providers: [StringUtils, ArrayUtils, DateUtils],
  exports: [StringUtils, ArrayUtils, DateUtils],
})
export class CommonModule {}
