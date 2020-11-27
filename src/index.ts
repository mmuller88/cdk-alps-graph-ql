// import { join } from 'path';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';

export interface AlpsGraphQLProps extends appsync.GraphqlApiProps {
  /**
   * ALPS Spec File. Must be YAML.
   */
  readonly alpsSpecFile: string;
  /**
   * Workaround for unified cli
   */
  readonly tmpFile: string;
}

export class AlpsGraphQL extends appsync.GraphqlApi {

  constructor(scope: cdk.Construct, id: string, props: AlpsGraphQLProps) {
    // convert ALPS yaml to graph ql schema file in tmp/schema.graphql
    unified(props.alpsSpecFile);
    super(scope, id, {
      ...props,
      // schema: appsync.Schema.fromAsset(join(__dirname, '../tmp/schema.graphql')),
      schema: appsync.Schema.fromAsset(props.tmpFile),
    });
  }
}

function unified(alpSpec: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execSync } = require('child_process');
  execSync(`node_modules/unified/src/index.js -f ${alpSpec} -t s -o tmp/schema.graphql`);
};