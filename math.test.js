const { add } = require('./testing')

// test('add 2 + 3 equals to 5',()=>{
//     beforeEach(console.log("hello")
//     )
//     expect(add(2,3)).toBe(5)
// })

const array = [1,2,3,4]
const val = 'good'
const a = 2
const b = 4

describe('Math functions', () => {
  beforeEach(() => console.log('Start new test'));

  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(5 - 2).toBe(3);
  });

  test('array contain 1',()=>{
    expect(array).toContain(3)	
  })

  test('string',()=>{
    expect(val).toMatch('good')
  })

  test('greater',()=>{
    expect(b).toBeGreaterThan(a)	
  })

});

