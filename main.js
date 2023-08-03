// alert('chien dep trai')
console.log('chien dep trai 12345');
// let fullName=`Nguyen Huu Chien`;
// let age=21;

// // bai 1---cac ham co ban js
// alert('chien rat rat dep trai');
// confirm('xac nhan ban du tuoi');
// prompt("xac nha du tuoi");

//setinterval sau bn giay chay lap lai code 1 lan
// let i=0;
// let timer = setInterval(() => {
//     alert(age);
//     i++;
//     if(i===5){
//         clearInterval(timer);
//     }
// }, 1000);


//settimeout sau bn giay se chay code
// let timer1=setTimeout(() => {
//     alert(fullName);
// },5000)

//bai 2-----cac toan tu
// //toan tu so hoc
// let a=1+2;
// console.log(a);
// //toan tu gan
// let myname=`chien dep trai vip pro`;
// console.log('my name is: ',myname,`and my math:${a}`);
// //toan tu so sanh
// let b=3;
// if(a===b){
//     console.log(`a bang b`);
// }
// //toan tu logic
// let x=1,y=2;
// if(x >= 0 && y >= 0){
//     console.log('x va y lon hon khong')
// }

// //bai 3---toan tu so hoc
// //cong +
// let a=9,b=5,c=3;
// console.log('cong a b c=',a+b+c)
// //tru -
// console.log('c tru b tru a =',c-b-a)
// //nhan *
// console.log(`a nhan b =`,a*b)
// //nhan luy thua **
// console.log(`luy thua c=`,b**c)
// //chia /
// console.log(`a chia b=`,a/b)
// //chia lay phan du %
// console.log(`a chia b lay phan du=`,a%b)
// //tang 1 gia tri so ++
// a++;
// console.log(`a tang len 1 lan=`,a)
// //giam 1 gia tri so --
// a--;
// console.log(`a  giam 1 gia tri so`,a)

// //bai 4 ++ --
// //prefix & postfix--- tien to tang xong gan gia tri ,
// //hau to gan gia tri xong tang
// let a=6;
// a++;
// console.log(a);
// a--;
// console.log(a);
// ++a;
// console.log(a);
// --a;
// console.log(a);


// //bai 5 toan tu gan
// let a=1;
// a += 2;
// console.log(a)

// //bai 6 toan t chuoi
// let firstName=`Son`;
// let lastName=`chien`;
// console.log(firstName,``+lastName);


// //bai 7 ===/ ==
// let a=1;
// let b=2;
// if(a===b){
//     console.log('a bang b')
// }else{
//     console.log('a khac b')
// }

// //bai 8 kieu du lieu boolean
// let a=1,b=2;
// let isSuccess= a>b;

// console.log(isSuccess);

// //bai 9 if else

// let isSuccess= 1<2
// if(isSuccess){
//     console.log(`dieu kien dung`)
// }else{
//     console.log(`dieu kien sai`)
// }


// //bai 10
// let a=1,b=2,c=3;
// if(a>0 && b>0 && c>0){
//     console.log(`dieu kien dung 123`)
// }else if(!(a==1)){
//     console.log(`dieu kien van dung`)
// }

// let tuoi =21;
// console.log(typeof tuoi.toString())
// // lam tron so thap phan
// let pi=3.7476767;
// console.log(pi.toFixed(2))


// let arr=[
//     'javascript',
//     'php',
//     'Ruby',
// ]
// console.log(arr.join(", "))
// arr.splice(1, 0, 'Java')

// console.log(arr);

// let arr1=['1', '2', '3']
// console.log(arr.concat(arr1))
// console.log(arr.slice(0))

// let showDialog=(message)=>{
//     console.log(message)
// }
// showDialog('test message',)

// let cong=(a,b)=>{
//     return a+b;
// }
// console.log(cong(5,9))

// cong=(a,b)=>{
//     return a+b;
// }
// console.log(cong(5,8))


// let myInfo={
//     name: 'chien',
//     age: 21,
//     address: 'ha noi',
//     getname: function (){
//         return this.name;
//     }
// }
// myInfo.email='chien@gmail.com';




// delete myInfo.email;

// console.log('my object:', myInfo.getname());

//object constructor

// function user(firstName,lastName,avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
// }
// console.log(typeof user);
// let author=new user('chien','nguyen','deptrai');
// let user1=new user('vu','nguyen','deptrai');

// user.prototype.className='D15CNPM2'
// console.log(author.className);
// console.log(user1);

//object date
// let date=new Date();

// console.log( date.getFullYear(), date.getMonth(), date.getDate())
// console.log(`ngay : ${date.getDate()}, thang : ${date.getMonth()}`)

//if else

// let date=2;
// if(date===2){
//     console.log('hom nay la thu hai');
// }else if(date===3){
//     console.log('hom nay la thu ba');
// }

//switch case

// let date=4;

// switch(date){
//     case 2: 
//         console.log('hom nay la thu hai');
//         break;
//     case 3:
//         console.log('hom nay la thu ba');	
//         break;
//     case 4:
//         console.log('hom nay la thu tu');
//         break;
//     case 5:
//         console.log('hom nay la thu nam');
//         break;
//     case 6:
//         console.log('hom nay la thu sau');
//         break;
//     case 7:
//         console.log('hom nay la thu bay');
//         break;
//     case 8:
//         console.log('hom nay la chu nhat');
//         break;
//     default:
//         console.log('khong xac dinh');
//         break;
// }

//toan tu ba ngoi

// let course={
//     name:'javascript',
//     coin: 250,
// }
// // if(course.coin>0){
// //     console.log('gia cua khoa hoc la: ',course.coin);
// // }else{
// //     console.log('khong xac dinh duoc gia cua khoa hoc');
// // }

// let result=course.coin===250 ? console.log('gia cua khoa hoc la: ',course.coin) : console.log('khong xac dinh duoc gia cua khoa hoc');
// let a=1,b=2;

// let c=a>0 ? a : b;

// console.log('c=',c);

//vong lap loop
//for
// for(let i=1;i=100;i++) {
//     console.log('yêu chien nhất trên đời',i);
// }

//for of

// let myInfo={
//     name:'chien',
//     age:21,
//     address: 'hanoi'
// }
// console.log(Object.values(myInfo));
// console.log(object.keys(myInfo));
// for(let value of Object.keys(myInfo)) {
//     console.log(myInfo[value]);
// }


// //while loop
// let myarr=['Js','C','php'];

// let i=0;
// while(i<myarr.length) {
//     console.log(myarr[i]);
//     i++;
// }

//do while loop

// let i=0;

// let isSuccess = false;

// do{
//     i++;
//     console.log('nap the lan',i);
//     if(true){
//         isSuccess = true;
//     }
    
// } while(!isSuccess&&isSuccess<3);

// break and continue
// for(let i=0;i<10;i++){
//     if(i%2!==0){
//         continue;
//     }
//     console.log(i);
//     // if(i>=5){
//     //     break;
//     // }
// }

// let myArr=[[1,2],[7,3],[4,5]];

// for(let i=0;i<myArr.length;i++){
//     for(let j=0;j<myArr[i].length;j++){
//         console.log(myArr[i][j]);
//     }
// }


// for(let i=0;i<=100;i+=5){
//     console.log(i);
// }
// for(let i=100; i>0; i-=5){
//     console.log(i);
// }

//array
let course=[
    {
        id:1,
        name:'javascript',
        coin:200
    },
    {
        id:1,
        name:'C++',
        coin:250
    },
    {
        id:1,
        name:'PHP',
        coin:260
    },
    {
        id:1,
        name:'Python',
        coin:300
    }
];

// course.forEach(function(courses,index){
//     console.log(index ,courses);
// });
// let isFree=course.every(function(course,index){
//     return course.coin===0;
// });
// console.log(isFree)

// let somearr=course.some(function(course,index){
//     return course.coin===0;
// });

// let newCourses=course.map((course,index, originArray)=>{
//     // console.log(course);
//     return {
//         id: course.id,
//         name: `khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinTex: `gia: ${course.coin}`,
//         index: index,
//     };
// });
// console.log(newCourses);

// let newArr=course.map((course,index)=>{
//     return `<h2>${course.name}</h2>`;
// })
// console.log(newArr.join(' '));


//reduce
let i=0; 
let totalCoin=course.reduce((accumulator,currentValue,currentindex,originArray)=>{
    i++;
    let total= accumulator+ currentValue.coin;
    console.table({
        'luot chay':i,
        'bien luu tru':accumulator,
        'gia khoa hoc':currentValue.coin,
        'tich tru duoc':total,
    });
    
    return total;
},0);

console.log(totalCoin);