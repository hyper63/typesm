const Task = fork => 
({
  fork,
  map: fn => Task((rej, res) => fork(rej, x => res(fn(x)))),
  chain: fn => 
    Task((rej, res) => fork(rej, x => f(x).fork(rej,res))),
  fold: (f,g) => 
    Task((rej, res) => fork(x => 
      f(x).fork(rej, res), x => g(x).fork(rej, res))),
  concat: other => 
    Task((rej, res) => fork(rej, x => 
      other.fork(rej, y => res(x.concat(y)))))

})

Task.of = x => Task((rej, res) => res(x))
Task.fromPromise = p => (...args) => Task((rej, res) =>
  p(...args).then(res).catch(rej))

Task.fromNode = f => (...args) => Task((rej, res) => 
  f(...args, (err, result) => err ? rej(err) : res(result)))

export default Task
