const showRS1 = () => arguments[0] + arguments[1]

const showRS2 = (year, quarter) => year + quarter

const showRS3 = (text) => text

const showRS4 = (year, quarter) => { return year + quarter }

const showRS5 = (year, quarter) => { return year, quarter }

console.log(showRS1('12021', 'Q3'));
console.log(showRS2('22021', 'Q3'));
console.log(showRS3('32021', 'Q3'));
console.log(showRS4('42021', 'Q3'));
console.log(showRS5('52021', 'Q3'));
let a = 5;
console.log(++a);
console.log(a++);