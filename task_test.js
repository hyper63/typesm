import { default as test } from 'tape'
import Task from './task.js'
import path from 'path'
import fs from 'fs'


test('Task', t => {
  t.plan(1)
  Task.of('foo')
    .map(x => x.toUpperCase())
    .fork(
      x => t.ok(false),
      result => t.equal(result, 'FOO')
    )
})

test('ReadFile', t => {
  t.plan(1)
  const readFile = Task.fromNode(fs.readFile)
  readFile(path.resolve() + '/task_test.js', 'utf-8')
    .fork(
      e => t.ok(false),
      r => {
        console.log(r)
        t.ok(true)
      }
    )
})





