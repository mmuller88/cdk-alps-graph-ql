import { App, Stack } from '@aws-cdk/core';
import { AlpsGraphQL } from '../src';
import '@aws-cdk/assert/jest';

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
        });
      }).toThrowError();

      expect(() => {
        new AlpsGraphQL(stack, 'AlpsGraphQL', {
          name: 'demo',
          alpsSpecFile: 'src/index.ts',
        });
      }).toThrowError();

    });
  });

});

