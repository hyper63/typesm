import { default as test } from 'tape'
import Either from './either.js'

const { of, Left, Right, tryCatch, fromNullable } = Either

test('Either of', t => {
  t.plan(1)
  of('foo')
    .map(x => x.toUpperCase())
    .fold(
      x => t.ok(false),
      result => t.equal(result, 'FOO')
    )

})

test('fromNullable', t => {
  t.plan(1)
  fromNullable(null) 
    .fold(
      _ => t.ok(true),
      _ => t.ok(false)
    )
})

test('fromNullable 2', t => {
  t.plan(1)
  fromNullable(1)
    .fold(
      _ => t.ok(false),
      _ => t.ok(true)
    )
})

test('tryCatch', t => {
  t.plan(1)
  const fn = () => {
    throw new Error('Error')
  }

  tryCatch(fn)
    .fold(
      e => t.ok(true),
      _ => t.ok(false)
    )
})

test('tryCatch 2', t => {
  t.plan(1)
  const fn = () => 'No Error'
  
  tryCatch(fn)
    .fold(
      _ => t.ok(false),
      _ => t.ok(true)
    )
})


