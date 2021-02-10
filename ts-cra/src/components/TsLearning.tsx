export const tsLearning = () => {
  let someValue: unknown = 'this is a string'
  let strLength: Number = (someValue as String).length


  return (
    <div>
      tsLearning
      <div>{ }</div>
    </div>
  )
}


//acxess properties checks
interface SquareConfig {
  color?: string;
  width: number;
  age?: string;
}

function createSquare(config: SquareConfig): { color: string; area: number, age: string } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
    age: '22'
  };
}

let mySquare = createSquare({ age: 'fver', color: 'string', width: 333, hi: 'kkk' } as SquareConfig)


//indexes type
//1
interface StringArray {
  [index: number]: string
}
let myArray: StringArray
myArray = ['bob', 'marley']
let myStr = myArray[0]

//2
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
interface NotOkay {
  [x: string]: Animal
  [x: number]: Dog
}

//3
interface Num {
  [index: string]: number | string;
  length: string;
  name: number;
  hi: string;
}
let array: Num = { length: 'fff', name: 1111 } as Num
let myArray2 = array['my']


