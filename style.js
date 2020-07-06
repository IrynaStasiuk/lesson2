// 1--створити масив та вивести його в консоль:- з 5 числових значень
let num= [5,6,7,8,9];
console.log(num);
// 2- з 5 стічкових значень
let str=['vasya','lena','petya','tanya'];
console.log(str);
// 3- з 5 значень стрічкового, числового та булевого типу
let mix=['katya',5,9,true,false];
console.log(mix);
// 4-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emp=[];
emp[0]=12;
emp[1]='sasha';
emp[2]=true;
console.log(emp);
// 5 За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <10; i++) {
    document.write('<div>hello</div>');
}
// 6- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i <10; i++) {
    document.write(`<div>hello ${i}</div>`);
}
// 7- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let wh=0;
while(wh<20){
        document.write(`<h1>Hello</h1>`);
        wh++;
}
// 8- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let wh1=0      
while(wh1<20){
    document.write(`<h1>Hello ${wh1}</h1>`);
    wh1++;
}
// 9- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arNum=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0;  i< 10; i++) {
    console.log(i)
}
// 10- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arStr=['vasya','kolya','petya','tanya','olya','vera','vova','lyuba','sasha','roma'];
for (let i= 0; i < 10; i++) {
    console.log(arStr[i])
}
// 11- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mix1=[1,'vasya',12,true,'petya',13,false,'kolya',15,true];
for (let i=0; i<10; i++){
    console.log(mix1[i])
}
// 12- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (let i=0; i<mix1.length; i++){
    if(typeof (mix1[i]) === 'boolean'){
        console.log(mix1[i])
    }
}
// 13- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let i=0; i<mix1.length; i++){
    if(typeof (mix1[i]) === 'number'){
        console.log(mix1[i])
    }
}
// 14- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let i=0; i<mix1.length; i++){
    if(typeof (mix1[i]) === 'string'){
        console.log(mix1[i])
    }
}
// 15- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі
let arr1 =[];
arr1[0]='vera';
arr1[1]=45;
arr1[2]=false;
arr1[3]='vova';
arr1[4]=25;
arr1[5]=true;
arr1[6]='dima';
arr1[7]=18;
arr1[8]=true;
arr1[9]='end';
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}
// 16-Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=10;i++){
    console.log(i)
    document.write(i)
    document.write('<br>')
}
// 17-Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i=1; i<=100; i++){
    console.log(i);
    document.write(i);
    document.write ('<br>');
}
// 18-Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=1; i<=100;i=i+2){
    console.log(i);
    document.write(i)
    document.write('<br>')
}
// 19 Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let i=1; i<=100;i++){
    if (i%2===0){
    console.log(i);
    document.write(i)
    document.write('<br>')
    }
}
// 20- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=1; i<=100;i++){
    if (i%2===1){
    console.log(i);
    document.write(i)
    document.write('<br>')
    }
}
// 21- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
for(min=0;min<2;min++){
    for(sec=0;sec<60;sec++){
        console.log(min+'хв'+sec+'сек');
        
    }
}
// 22- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for(let h=0;h<3;h++){
//     for(let m=0;m<60;m++){
//         if(h===2 && m===20){
//             break;
//         }
//         for(s=0;s<60;s++){
//             console.log(h+'год'+m+'хв'+s+'сек');
        
//         }
//     }
// }
// 23- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters=['a','b','c'];
let word1=''
for( const lett1 of letters){ 
    word1+=lett1
}
console.log(word1);
//  24 - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let word2=''
let counter=0;
while (counter<letters.length) {
     word2 +=letters[counter]
    counter ++ ;
}
console.log(word2);
// 25- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr2=['a','b','c'];
let num1=[1,2,3];
for(let i=0;i<num1.length;i++){
    if(arr2.length<6){
    arr2.push(num1[i]);}
}
    console.log(arr2);
// 26- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let num26=[1,2,3];
let num261=[];
for(let num26Elem of num26){
    num261.unshift(num26Elem);
}
console.log(num261);

//    27 - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let num2=[1,2,3];
let num3=[4,5,6];
for(let i=0;i<num3.length;i++){
    num2.push(num3[i]);
}
    console.log(num2);
//  28- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let num4=[1,2,3];
for(let i=0;i<3;i++){
    num4.unshift(num3[i])
}
console.log(num4)
// -29 Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let scills =['js', 'css', 'jq'];
let scillElem=scills.shift();
console.log(scillElem)
// 30-- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let scillElement=scills.pop();
console.log(scillElement);
// 31- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let numarr=[1,2,3,4,5];
let numarr1=numarr.slice(3,numarr.length);
console.log(numarr1);

// 32- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let numarr2=numarr.slice(0,2);
console.log(numarr2);
// 33- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let numarr3=numarr.splice(1,2);
console.log(numarr);
// 34- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let numarr4=numarr.splice(3,0,'a','b','c');
console.log(numarr);
// 35- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let numarr5=numarr.splice(1,0,'a','b');
let numarr6=numarr.splice(6,0,'c');
let numarr7=numarr.splice(numarr.length,0,'e')
console.log(numarr);
// 36- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let newarr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<newarr.length;i++){
    if(newarr[i]%2===0){
        console.log(newarr[i]);
        
    }
}
// 37-Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let newarr1=[];
for(let i=0;i<newarr.length;i++){
    newarr1.push(newarr[i]);   
}
  console.log(newarr1);

// 38 =-робити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let randomPart=0;
let random=[2,17,13,6,22,31,45,66,100,-18];
while(randomPart<random.length){
    randomPart++;
    console.log(random);     
}
// 2. перебрати його циклом for
for(i=0;i<random.length;i++){
    console.log(random[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let randomindx=0;
while(randomindx<random.length){
    if(randomindx%2===1){
        console.log(random[randomindx]);   
    }
    randomindx++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for(i=0;i<random.length;i++){
    if(i%2===1){
        console.log(random[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення

while(randomindx<random.length){
    if(randomindx%2===0){
        console.log(random[randomindx]);   
    }
    randomindx++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for(i=0;i<random.length;i++){
    if(i%2===0){
        console.log(random[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for(i=0;i<random.length;i++){
    if(random[i]%3===0){
        random[i]="okten";
    }
}
console.log(random);
// 8. вивести масив в зворотньому порядку.
let random1=[];
while(random.length);{
    random1.unshift(random.shift())
}
console.log(random1);
// 1.1cтворити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
let num11=[];
for(i=0;i<100;i++){
    if(i%2===0){
        num11.push(i);
    }
}
console.log(num11);
// 2. заповнити його 50 непарними числами за допомоги циклу.
let num12=[];
for(i=0;i<100;i++){
    if(i%2===1){
        num12.push(i);
    }
}
console.log(num12);
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let num13=[];
for(let i=0;i<100;i++){
    let j = Math.floor(Math.random()*(732-8)+8);
    num13.push(j);
}
console.log(num13);
// 2. вывести на консоль  каждый третий елемент
let num22=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
for(let i=2;i<num22.length;i=i+3){
    console.log(num22[i])
}
// 3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for(let i=2;i<num22.length;i=i+3){
    if(num22[i]%2===0)
    console.log(num22[i])
}
// 4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
let num44=[]
for(let i=2;i<num22.length;i=i+3){
    if(num22[i]%2===0){
        console.log(num22[i]);
        num44.push(num22[i])
    }
}
console.log(num44)
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for(let i=0;i<num22.length;i++){
    if(num22[i+1]%2===0){
        console.log(num22[i])
    }
}
//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
let vart=[100,250,50,168,120,345,188];
let result=0;
let sum=0;
for(let i=0;i<vart.length;i++){
    sum+=vart[i];
    result=sum/vart.length;
}
console.log(result)
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let randomArr=[12,45,81,24];
let randomArr1=[];
for(let i=0;i<randomArr.length;i++){
    randomArr1.push(randomArr[i]*5);
}
console.log(randomArr1);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.
let arr44=[11,'the',true,22,'random',false,33,'array'];
let arr441=[];
for(let i=0;i<arr44.length;i++){
    if(typeof (arr44[i])=== 'number') {
        arr441.push(arr44[i])
    }
}
console.log(arr441);



