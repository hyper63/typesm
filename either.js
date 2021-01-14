// Right :: a -> Right a
const Right = x => 
({
  x,
  chain: fn => fn(x),
  map: fn => Right(fn(x)),
  fold: (_, g) => g(x),
  toString: () => `Right(${x})`
})

// Left :: a -> Left a
const Left = x => 
({
  x,
  chain: _ => Left(x),
  map: _ => Left(x),
  fold: (f, _) => f(x),
  toString: () => `Left(${x})`
})

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

const fromNullable = x => x != null ? Right(x) : Left(x)

const Either = {
  of: Right,
  tryCatch,
  fromNullable,
  Left,
  Right
}

export default Either
