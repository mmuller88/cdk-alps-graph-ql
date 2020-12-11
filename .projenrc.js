const { AwsCdkConstructLibrary } = require('projen');

const deps = [
  'alps-unified-ts',
];

const project = new AwsCdkConstructLibrary({
  authorAddress: 'damadden88@googlemail.com',
  authorName: 'Martin Mueller',
  name: 'cdk-alps-graph-ql',
  defaultReleaseBranch: 'main',
  cdkVersion: '1.75.0',
  repository: 'https://github.com/mmuller88/cdk-alps-graph-ql.git',
  deps: deps,
  // peerDeps: deps,
  bundledDeps: deps,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-appsync',
    '@aws-cdk/aws-iam',
  ],
  python: {
    distName: 'cdk-alps-graph-ql',
    module: 'cdk_alps_graph_ql',
  },
  releaseBranches: ['main'],
  keywords: [
    'cdk',
    'aws',
    'alps',
    'appsync',
    'graphql',
  ],
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log', 'tmp'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();
