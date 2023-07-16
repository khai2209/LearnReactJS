const logger = (log) =>  {
    console.log(log);
} 
logger('Hello');

const sum = (a, b) => a + b;
console.log(sum(2,6));

//return object
const summer = (a,b) => ({a:a,b:b});

// nếu hàm co 1 biến co thể bỏ ()

const course = {
    name: 'JavaScript',
    getname: function() {
        return this.name;
    }
};
console.log(course.getname());
//destructuring: phaan ra
const { 
    a = 'default', 
    b, 
    ...rest  //đặt biến kiểu ... thì ở đây rest là 1 object
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: ?

//rest dùng làm tham số function logger(...rest){}
//spread dùng làm đối số logger(...array);
//vd spread khác
const a1 = [1, 2, 3];
const b2 = [2, 3];
const c3 = [...a1, ...b2];

console.log(c3);

