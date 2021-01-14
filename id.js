// Id : a -> Id
const Id = x => 
({
  x,
  map: fn => Id(fn(x)),
  chain: fn => fn(x),
  extract: () => x,
  concat: other => Id(x + other.extract())
})

Id.of = v => Id(v)

export default Id

