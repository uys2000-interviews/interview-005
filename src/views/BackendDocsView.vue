<template>

  <div class="text-xl text-center mt-5"><a href="https://github.com/uys2000-interviews/interview-005-backend#api">Main Api doc</a> is at that <a href="https://github.com/uys2000-interviews/interview-005-backend#api">link</a>. This page is only copied version of it</div>

  <div class="py-10 px-5">
    <h1 id="api">API</h1>
    <h2 id="get-all-users"><strong>Get All Users</strong></h2>
    <p>Method :<code>GET</code><br>Url: <code>/users</code></p>
    <details>
      <summary>Result </summary>

      <pre><code class="language-JSON">{
  &quot;data&quot;: [
  {
      &quot;id&quot;: 1,
      &quot;role&quot;: &quot;Manager&quot;,
      &quot;capabilities&quot;: [
        &quot;ManageBusinessUnits&quot;,
        &quot;UploadData&quot;,
        &quot;ReadData&quot;,
        &quot;EditData&quot;
      ]
    },
    {
      &quot;id&quot;: 2,
      &quot;role&quot;: &quot;SystemAdmin&quot;,
      &quot;capabilities&quot;: [
        &quot;ManageBusinessUnits&quot;,
        &quot;UploadData&quot;,
        &quot;ReadData&quot;,
        &quot;EditData&quot;
      ]
    },
    {
      &quot;id&quot;: 5,
      &quot;role&quot;: &quot;Enginer&quot;,
      &quot;capabilities&quot;: [
        &quot;UploadData&quot;
      ]
    },
    {
      &quot;id&quot;: 4,
      &quot;role&quot;: &quot;Marketing&quot;,
      &quot;capabilities&quot;: [
        &quot;EditData&quot;,
        &quot;ManageProducts&quot;
      ]
    },
    {
      &quot;id&quot;: 6,
      &quot;role&quot;: &quot;Developer&quot;,
      &quot;capabilities&quot;: [
        &quot;ManageBusinessUnits&quot;,
        &quot;UploadData&quot;,
        &quot;ReadData&quot;,
        &quot;EditData&quot;
      ]
    }
  ]
}
</code></pre>
    </details>

    <h2 id="get-user"><strong>Get User</strong></h2>
    <p>Method :<code>GET</code><br>Url: <code>/users/:id</code><br><code>:id</code> represent id
      <code>index number</code> of user in DataBase
    </p>
    <details>
      <summary>Result</summary>

      <pre><code class="language-JSON">{
  &quot;data&quot;: [
    {
      &quot;id&quot;: 2,
      &quot;role&quot;: &quot;SystemAdmin&quot;,
      &quot;capabilities&quot;: [
        &quot;ManageBusinessUnits&quot;,
        &quot;UploadData&quot;,
        &quot;ReadData&quot;,
        &quot;EditData&quot;
      ]
    }
  ]
}
</code></pre>
    </details>

    <details>
      <summary>Not Found Error</summary>

      <pre><code class="language-JSON">{
  &quot;error&quot;: {
    &quot;name&quot;: &quot;QueryResultError&quot;,
    &quot;code&quot;: 0,
    &quot;result&quot;: {
      &quot;command&quot;: &quot;SELECT&quot;,
      &quot;rowCount&quot;: 0,
      &quot;oid&quot;: null,
      &quot;rows&quot;: [],
      &quot;fields&quot;: [
        {
          &quot;name&quot;: &quot;id&quot;,
          &quot;tableID&quot;: 18199,
          &quot;columnID&quot;: 1,
          &quot;dataTypeID&quot;: 23,
          &quot;dataTypeSize&quot;: 4,
          &quot;dataTypeModifier&quot;: -1,
          &quot;format&quot;: &quot;text&quot;
        },
        {
          &quot;name&quot;: &quot;role&quot;,
          &quot;tableID&quot;: 18199,
          &quot;columnID&quot;: 2,
          &quot;dataTypeID&quot;: 1043,
          &quot;dataTypeSize&quot;: -1,
          &quot;dataTypeModifier&quot;: 104,
          &quot;format&quot;: &quot;text&quot;
        },
        {
          &quot;name&quot;: &quot;capabilities&quot;,
          &quot;tableID&quot;: 18199,
          &quot;columnID&quot;: 3,
          &quot;dataTypeID&quot;: 1009,
          &quot;dataTypeSize&quot;: -1,
          &quot;dataTypeModifier&quot;: -1,
          &quot;format&quot;: &quot;text&quot;
        }
      ],
      &quot;_parsers&quot;: [
        null,
        null,
        null
      ],
      &quot;_types&quot;: {
        &quot;_types&quot;: {
          &quot;arrayParser&quot;: {},
          &quot;builtins&quot;: {
            &quot;BOOL&quot;: 16,
            &quot;BYTEA&quot;: 17,
            &quot;CHAR&quot;: 18,
            &quot;INT8&quot;: 20,
            &quot;INT2&quot;: 21,
            &quot;INT4&quot;: 23,
            &quot;REGPROC&quot;: 24,
            &quot;TEXT&quot;: 25,
            &quot;OID&quot;: 26,
            &quot;TID&quot;: 27,
            &quot;XID&quot;: 28,
            &quot;CID&quot;: 29,
            &quot;JSON&quot;: 114,
            &quot;XML&quot;: 142,
            &quot;PG_NODE_TREE&quot;: 194,
            &quot;SMGR&quot;: 210,
            &quot;PATH&quot;: 602,
            &quot;POLYGON&quot;: 604,
            &quot;CIDR&quot;: 650,
            &quot;FLOAT4&quot;: 700,
            &quot;FLOAT8&quot;: 701,
            &quot;ABSTIME&quot;: 702,
            &quot;RELTIME&quot;: 703,
            &quot;TINTERVAL&quot;: 704,
            &quot;CIRCLE&quot;: 718,
            &quot;MACADDR8&quot;: 774,
            &quot;MONEY&quot;: 790,
            &quot;MACADDR&quot;: 829,
            &quot;INET&quot;: 869,
            &quot;ACLITEM&quot;: 1033,
            &quot;BPCHAR&quot;: 1042,
            &quot;VARCHAR&quot;: 1043,
            &quot;DATE&quot;: 1082,
            &quot;TIME&quot;: 1083,
            &quot;TIMESTAMP&quot;: 1114,
            &quot;TIMESTAMPTZ&quot;: 1184,
            &quot;INTERVAL&quot;: 1186,
            &quot;TIMETZ&quot;: 1266,
            &quot;BIT&quot;: 1560,
            &quot;VARBIT&quot;: 1562,
            &quot;NUMERIC&quot;: 1700,
            &quot;REFCURSOR&quot;: 1790,
            &quot;REGPROCEDURE&quot;: 2202,
            &quot;REGOPER&quot;: 2203,
            &quot;REGOPERATOR&quot;: 2204,
            &quot;REGCLASS&quot;: 2205,
            &quot;REGTYPE&quot;: 2206,
            &quot;UUID&quot;: 2950,
            &quot;TXID_SNAPSHOT&quot;: 2970,
            &quot;PG_LSN&quot;: 3220,
            &quot;PG_NDISTINCT&quot;: 3361,
            &quot;PG_DEPENDENCIES&quot;: 3402,
            &quot;TSVECTOR&quot;: 3614,
            &quot;TSQUERY&quot;: 3615,
            &quot;GTSVECTOR&quot;: 3642,
            &quot;REGCONFIG&quot;: 3734,
            &quot;REGDICTIONARY&quot;: 3769,
            &quot;JSONB&quot;: 3802,
            &quot;REGNAMESPACE&quot;: 4089,
            &quot;REGROLE&quot;: 4096
          }
        },
        &quot;text&quot;: {},
        &quot;binary&quot;: {}
      },
      &quot;RowCtor&quot;: null,
      &quot;rowAsArray&quot;: false,
      &quot;duration&quot;: 2
    },
    &quot;query&quot;: &quot;SELECT * FROM users WHERE id=11;&quot;,
    &quot;received&quot;: 0
  }
}
</code></pre>
    </details>

    <h2 id="add-user"><strong>Add User</strong></h2>
    <p>Method :<code>POST</code><br>Url: <code>/users</code> </p>
    <details>
      <summary>Result </summary>

      <pre><code class="language-JSON">{
  &quot;data&quot;: true
}
</code></pre>
    </details>

    <h2 id="update-user"><strong>Update User</strong></h2>
    <p>Method :<code>PUT</code><br>Url: <code>/users/:id</code>
      <code>:id</code> represent id <code>index number</code> of user in DataBase
    </p>
    <details>
      <summary>Body: </summary>

      <pre><code class="language-typescript">class {
  user?: String,
  capabilities?: String[]

}
</code></pre>
    </details>

    <details>
      <summary>Result</summary>

      <pre><code class="language-JSON">{
  &quot;data&quot;: [
    {
      &quot;id&quot;: 2,
      &quot;role&quot;: &quot;SystemAdmin&quot;,
      &quot;capabilities&quot;: [
        &quot;ManageBusinessUnits&quot;,
        &quot;UploadData&quot;,
        &quot;ReadData&quot;,
        &quot;EditData&quot;
      ]
    }
  ]
}
</code></pre>
    </details>

    <h2 id="delete-user"><strong>Delete User</strong></h2>
    <p>Method :<code>DELETE</code><br>Url: <code>/users/:id</code>
      <code>:id</code> represent id <code>index number</code> of user in DataBase
    </p>
    <details>
      <summary>Result</summary>

      <pre><code class="language-JSON">{
  &quot;data&quot;: true
}
</code></pre>
    </details>

  </div>
</template>
<style scoped>
h1 {
  font-size: larger;
  font-weight: bolder;
}

h2 {
  font-size: large;
  font-weight: bolder;
}
code{
  color: orange;
}
a{
  color: orange;
}
</style>