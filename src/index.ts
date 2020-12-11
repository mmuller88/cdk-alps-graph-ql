// import { join } from 'path';
import * as fs from 'fs';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';
import { Alps, FormatType } from 'alps-unified-ts';
export interface AlpsGraphQLProps extends appsync.GraphqlApiProps {
  /**
   * ALPS Spec File. Must be YAML.
   */
  readonly alpsSpecFile: string;
}

export class AlpsGraphQL extends appsync.GraphqlApi {

  constructor(scope: cdk.Construct, id: string, props: AlpsGraphQLProps) {
    // convert ALPS yaml to graph ql schema file in tmp/schema.graphql
    const sdl = Alps.unified(Alps.loadYaml(props.alpsSpecFile), { formatType: FormatType.SDL });
    fs.writeFileSync('tmp/schema.graphql', sdl);
    super(scope, id, {
      ...props,
      schema: appsync.Schema.fromAsset('tmp/schema.graphql'),
    });

    new cdk.CfnOutput(this, 'GraphQlUrl', { value: this.graphqlUrl });
  }
}