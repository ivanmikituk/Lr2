function tr1(){
    let now = new Date();
    alert(now);
}
function tr2(){
    let Jan01_1970 = new Date(0);
    alert(Jan01_1970);

    let Jan02_1970 = new Date(24*3600*1000)
    alert(Jan02_1970);

}
function tr3(){
    let Dec31_1969 = new Date(-24*3600*1000)
    alert(Dec31_1969);

}
function tr4(){
    let date = new Date("2021-01-26");
    alert(date);

}
function tr5(){
    new Date(2011,0,1,0,0,0,0);
    new Date(2011,0,1);
}
function tr6(){

    let date = new Date(2011,0,1,2,3,4,567)
    alert(date);

}

function tr7(){
    let Date = new Date();
    alert(date.getHours());

}
function tr8(){
    alert(new Date().getTimezoneOffset());

}
function tr9(){
    let today =new Date();
    today.setHours(0);
    alert(today);

    today.setHours(0,0,0,0);
    alert(today);

}
function tr10(){
    let date = new Date(2013,0,32);
    alert(date);
}
function tr11(){
    let date = new Date(2016,1,28);
    date.setDate(date.getDate+2);
    alert(date);
}
function tr12(){
    let date = new Date();
    date.setSeconds(date.getSeconds()+70);
    alert(date);
}
function tr13(){
    let date = new Date(2016,0,2);
    date.setDate(1);
    alert(date);
    date.setDate(0);
    date.setDate(date);
}
function tr14(){
    let date = new Date();
    aler(+date);

}
function tr15(){
    let start = new Date();
    for (let i = 0; i < 100000; i++) {
        let DoSomething=i*i*i;
        
    }
    let end=new Date();

    alert("Цикл зайняв"+end+"-"+start+"мс");
}

function diffSubtract(date1, date2) {
    return date2 - date1
   }
   
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
   }

function tr17() {

    function diffSubtract(date1, date2) {
    return date2 - date1
   }
   
   function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
   }
}
function tr18(){
       
       function bench(f) {
        let date1 = new Date(0);
        let date2 = new Date();
       
        let start = Date.now();
        for (let i = 0; i < 100000; i++) f(date1, date2);
        return Date.now() - start;
       }
       
       alert( 'Час diffSubtract: ' + bench(diffSubtract) + 'мс' );
       alert( 'Час diffGetTime: ' + bench(diffGetTime) + 'мс' );
}
function tr19(){
    function bench(f) {
        let datel = new Date(0);
        let date2 = new Date();
        
        let start = Date.now();
        for (let i = 0; i < 100000; i++) f(datel, date2);
        return Date.now() - start;
        
        }
        
        let timel = 0;
        let time2 = 0;
        for (let i = 0; i < 10; i++) {
            timel += bench(diffSubtract);
            time2 += bench(diffGetTime);
        }
        alert( 'Загальний час для diffSubtract' + timel );
        alert( 'Загальний час для diffGetTime' + time2 );
    
}    

function tr20(){
    let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
    alert(ms)
}
function tr21(){
    let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
    alert(date)
}
