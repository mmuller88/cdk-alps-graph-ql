import { join } from 'path';
import * as cdk from '@aws-cdk/core';
import { AlpsGraphQL } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };

    const stack = new cdk.Stack(app, 'alps-graph-ql-stack', { env });

    new AlpsGraphQL(stack, 'AlpsGraphQL', {
      name: 'demo',
      alpsSpecFile: 'src/todo-alps.yaml',
      tmpFile: join(__dirname, '../tmp/schema.graphql'),
    });

    this.stack = [stack];
  }
}

new IntegTesting();
