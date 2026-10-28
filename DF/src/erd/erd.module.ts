import { HttpStatus, Module } from '@nestjs/common';
import { mytableModule } from './mytable/mytable.module';   
import { hierarchy_tableModule } from './hierarchy_table/hierarchy_table.module';   
import { testModule } from './test/test.module';   
import { testchildModule } from './testchild/testchild.module';   
import { testchild1Module } from './testchild1/testchild1.module';   
import { test1Module } from './test1/test1.module';   
import { test2Module } from './test2/test2.module';   
import { testchild2Module } from './testchild2/testchild2.module';   

import { RuleService } from "src/ruleService";
import { CodeService } from "src/codeService";
import { RedisService } from "src/redisService";


@Module({
  imports: [mytableModule,hierarchy_tableModule,testModule,testchildModule,testchild1Module,test1Module,test2Module,testchild2Module],
  controllers:[],
  providers:[RuleService,CodeService,RedisService]
})
export class ErdModule {}
