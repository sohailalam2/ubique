### end

Last index in array or matrix


#### Syntax

ubique.end(x,dim)


#### Description

Last index in array or matrix. Indexing is in the range [0...N-1]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | values
|`dim	(only` | number | for matrix) -1: [rows,columns], 0: rows, 1: column (def: -1)


#### Examples

```js
ubique.end([5,6,3]);
// 2

ubique.end([[4,5,0],[-1,2,-3]]);
// [1, 2]

ubique.end([[4,5,0],[-1,2,-3]],0);
// 1
```

