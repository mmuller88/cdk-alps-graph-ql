import { App, Stack } from '@aws-cdk/core';
import { AlpsGraphQL } from '../src';
import '@aws-cdk/assert/jest';
import { join } from 'path';

describe('create the AlpsGraphQL', () => {
  describe('correctly', () => {
    test('from alps yaml', () => {
      // GIVEN
      const app = new App();
      const stack = new Stack(app, 'testing-stack');

      // WHEN
      new AlpsGraphQL(stack, 'AlpsGraphQL', {
        name: 'demo',
        alpsSpecFile: 'src/todo-alps.yaml',
        tmpFile: join(__dirname, '../tmp/schema.graphql'),
      });

      // THEN
      expect(stack).toHaveResource('AWS::AppSync::GraphQLApi');
      expect(stack).toHaveResource('AWS::AppSync::GraphQLSchema');
    });
  });

  describe('failed', () => {
    test('invalid specFile format', () => {
      // GIVEN
      const app = new App();
      const stack = new Stack(app, 'testing-stack');

      expect(() => {
        new AlpsGraphQL(stack, 'AlpsGraphQL', {
          name: 'demo',
          alpsSpecFile: 'src/abs',
          tmpFile: join(__dirname, '../tmp/schema.graphql'),
        });
      }).toThrowError();

      expect(() => {
        new AlpsGraphQL(stack, 'AlpsGraphQL', {
          name: 'demo',
          alpsSpecFile: 'src/index.ts',
          tmpFile: join(__dirname, '../tmp/schema.graphql'),
        });
      }).toThrowError();

    });
  });

});

