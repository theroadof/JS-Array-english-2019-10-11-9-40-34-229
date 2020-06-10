// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
//a不是array类型，是string类型
//b是array


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = a.map(function(item,index,array){
    return item*2;
})
document.write(b+'<br>');


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = colors.reduce(function(pre,cur,index,array){
    return pre+" "+cur;
})
var case2 = colors.reduce(function(pre,cur,index,array){
    return pre+'+'+cur;
})
var case3 = colors.reduce(function(pre,cur,index,array){
    return pre+','+cur;
})
document.write(case1+'<br>'+case2+'<br>'+case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var b = a.sort(function(var1,var2){
    if(var1>var2){
        return -1;
    }else if(var1<var2) {
        return 1;
    }else{
        return 0;
    }
})
document.write(b+'<br>')


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function fun(array){
    var maxNum =1;
    var maxElem;
    var b = array.reduce(function(arr,item){
        if(arr[item]){
            arr[item]++;
        }else{
            arr[item]=1;
        }
        if(arr[item]>maxNum){
            maxElem=item;
            maxNum=arr[item];
        }
        return arr;
    },{})
    return maxElem+'';
}

document.write(fun(a));