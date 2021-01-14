# typesm - functional javascripts types for ESM

A Type library with core ADTs.

* Id
* Either
* Task
* Fn

## Why

A clear and basic fp library that works with esm and with no dependencies.

## Install

```
yarn add @hyper63/types
```

## Usage Example

``` js
import Id from '@hyper63/typesm'

Id.of(1)
  .map(x => x + 1)
  .extract()

```


