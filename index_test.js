import { default as test } from 'tape'
import { Id } from './index.js'

test('Id', t => {
  t.plan(1)
  const result = Id.of(1)
    .map(x => x + 1)
    .extract()

  t.equal(result, 2)
})

