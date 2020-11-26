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



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new AlpsGraphQL(scope: Construct, id: string, props: AlpsGraphQLProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AlpsGraphQLProps](#cdk-alps-graph-ql-alpsgraphqlprops)</code>)  *No description*
  * **alpsSpecFile** (<code>string</code>)  ALPS Spec File. 



### Properties


Name | Type | Description 
-----|------|-------------
**operationIdLambdaMapping**? | <code>Map<string, string></code> | __*Optional*__



## struct AlpsGraphQLProps  <a id="cdk-alps-graph-ql-alpsgraphqlprops"></a>






Name | Type | Description 
-----|------|-------------
**alpsSpecFile** | <code>string</code> | ALPS Spec File.



