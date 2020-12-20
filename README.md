[![NPM version](https://badge.fury.io/js/cdk-alps-graph-ql.svg)](https://badge.fury.io/js/cdk-alps-graph-ql)
[![PyPI version](https://badge.fury.io/py/cdk-alps-graph-ql.svg)](https://badge.fury.io/py/cdk-alps-graph-ql)
[![Maven version](https://maven-badges.herokuapp.com/maven-central/com.github.mmuller88.cdkAlpsSpecRestApi/cdk-alps-graph-ql/badge.svg)](https://maven-badges.herokuapp.com/maven-central/com.github.mmuller88.cdkAlpsSpecRestApi/cdk-alps-graph-ql)
[![.NET version](https://img.shields.io/nuget/v/com.github.mmuller88.CdkAlpsGraphQl.svg?style=flat-square)](https://www.nuget.org/packages/com.github.mmuller88.CdkAlpsGraphQl/)
![Release](https://github.com/mmuller88/cdk-alps-graph-ql/workflows/Release/badge.svg)

# CDK Alps Graph QL

The CDK Alps Graph QL construct generates an AWS Graph QL out of an ALPS API yaml file such src/todo-alps.yaml. ALPS API is an abstraction of APIs like REST API or Graph QL. More about the ALPS API see in the ALPS API section.

The AWS CDK construct repo was generated with [Projen](https://github.com/projen/projen) as **awscdk-construct**

# Thanks

- To Pahud for the helpful AWS CDK Construct video: https://www.youtube.com/watch?v=cTsSXYOYQPw
- Mike Amundsen for the ALPS API idea and help.

# ALPS API

The ALPS API converter is on GitHub on: https://github.com/mamund/alps-unified

Very useful to understand the idea of ALPS API is this video on YT: https://www.youtube.com/watch?v=oG6-r3UdenE

# Sample

```ts
const app = new cdk.App();

const stack = new cdk.Stack(app, 'alps-graph-ql-stack', { env });

new AlpsGraphQL(stack, 'AlpsGraphQL', {
  name: 'demo',
  alpsSpecFile: 'src/todo-alps.yaml',
});
```

# CDK stack commands

## Diff

```ts
npx cdk --app lib/integ.default.js --profile <profile> diff
```

## Deploy

```ts
npx cdk --app lib/integ.default.js --profile <profile> deploy
```

## Destroy

```ts
npx cdk --app lib/integ.default.js --profile <profile> destroy
```

# Limitations / Issues / TODOS

- only ALPS YAML files are supported. ALPS JSON files will be added
