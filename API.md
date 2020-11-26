# API Reference

**Classes**

Name|Description
----|-----------
[AlpsGraphQL](#cdk-alps-graph-ql-alpsgraphql)|*No description*


**Structs**

Name|Description
----|-----------
[AlpsGraphQLProps](#cdk-alps-graph-ql-alpsgraphqlprops)|*No description*



## class AlpsGraphQL  <a id="cdk-alps-graph-ql-alpsgraphql"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IResource](#aws-cdk-core-iresource), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IGraphqlApi](#aws-cdk-aws-appsync-igraphqlapi), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IConstruct](#aws-cdk-core-iconstruct), [IResource](#aws-cdk-core-iresource)
__Extends__: [GraphqlApi](#aws-cdk-aws-appsync-graphqlapi)

### Initializer




```ts
new AlpsGraphQL(scope: Construct, id: string, props: AlpsGraphQLProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AlpsGraphQLProps](#cdk-alps-graph-ql-alpsgraphqlprops)</code>)  *No description*
  * **name** (<code>string</code>)  the name of the GraphQL API. 
  * **authorizationConfig** (<code>[AuthorizationConfig](#aws-cdk-aws-appsync-authorizationconfig)</code>)  Optional authorization configuration. __*Default*__: API Key authorization
  * **logConfig** (<code>[LogConfig](#aws-cdk-aws-appsync-logconfig)</code>)  Logging configuration for this api. __*Default*__: None
  * **schema** (<code>[Schema](#aws-cdk-aws-appsync-schema)</code>)  GraphQL schema definition. Specify how you want to define your schema. __*Default*__: schema will be generated code-first (i.e. addType, addObjectType, etc.)
  * **xrayEnabled** (<code>boolean</code>)  A flag indicating whether or not X-Ray tracing is enabled for the GraphQL API. __*Default*__: false
  * **alpsSpecFile** (<code>string</code>)  ALPS Spec File. 




## struct AlpsGraphQLProps  <a id="cdk-alps-graph-ql-alpsgraphqlprops"></a>






Name | Type | Description 
-----|------|-------------
**alpsSpecFile** | <code>string</code> | ALPS Spec File.
**name**🔹 | <code>string</code> | the name of the GraphQL API.
**authorizationConfig**?🔹 | <code>[AuthorizationConfig](#aws-cdk-aws-appsync-authorizationconfig)</code> | Optional authorization configuration.<br/>__*Default*__: API Key authorization
**logConfig**?🔹 | <code>[LogConfig](#aws-cdk-aws-appsync-logconfig)</code> | Logging configuration for this api.<br/>__*Default*__: None
**schema**?🔹 | <code>[Schema](#aws-cdk-aws-appsync-schema)</code> | GraphQL schema definition. Specify how you want to define your schema.<br/>__*Default*__: schema will be generated code-first (i.e. addType, addObjectType, etc.)
**xrayEnabled**?🔹 | <code>boolean</code> | A flag indicating whether or not X-Ray tracing is enabled for the GraphQL API.<br/>__*Default*__: false



