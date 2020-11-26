import { join } from 'path';
import * as appsync from '@aws-cdk/aws-appsync';
// import * as iam from '@aws-cdk/aws-iam';
import * as cdk from '@aws-cdk/core';
// import * as yaml from 'js-yaml';

export interface AlpsGraphQLProps {
  /**
   * Optional mapping from openApi spec operationId to Lambda name.
   * Per default it uses a Lambda integration with using the openApi spec operationId property as Lambda name
   */
  // readonly operationIdLambdaMapping?: Record<string, string>;
  /**
   * ALPS Spec File. Must be YAML.
   */
  readonly alpsSpecFile: string;
}

export class AlpsGraphQL extends cdk.Construct {

  operationIdLambdaMapping?: Record<string, string>;

  constructor(scope: cdk.Construct, id: string, props: AlpsGraphQLProps) {
    super(scope, id);
    // this.operationIdLambdaMa

    const specFile = props.alpsSpecFile;
    // const specFile = 'src/todo-alps.yaml';

    // convert ALPS yaml to graph ql schema file in tmp/schema.graphql
    unified(specFile);

    // const region = cdk.Stack.of(this).region;
    // const accountId = cdk.Stack.of(this).account;

    new appsync.GraphqlApi(this, 'Api', {
      name: 'demo',
      schema: appsync.Schema.fromAsset(join(__dirname, '../tmp/schema.graphql')),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.IAM,
        },
      },
      xrayEnabled: true,
    });

  }
}

function unified(alpSpec: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execSync } = require('child_process');
  execSync(`node_modules/unified/src/index.js -f ${alpSpec} -t s -o tmp/schema.graphql`);
};