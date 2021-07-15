function myFunction()
{
    document.getElementById('foo').setAttribute("class", "personMove");
} 

//router
var data = [
    { id: 123, name: "Владимир", lastName: "Ларионов", img:"./iconPerson8.png", points: "463" },
    { id: 9, name: "Владимир", lastName: "Сергеев", img: "./iconPerson8.png", points: "521"},
    { id: 231, name: "Вениамин", lastName: "Васильев", img: "./iconPerson8.png", points: "865" },
    { id: 321, name: "Мария", lastName: "Логинова", img: "./iconPerson8.png", points: "865" },
    { id: 492, name: "Борис", lastName: "Казанцев", img: "./iconPerson8.png", points: "784" },
    { id: 452, name: "Полина", lastName: "Калинина", img: "./iconPerson8.png", points: "225" },
    { id: 796, name: "Даниил", lastName: "Воробьёв", img: "./iconPerson8.png", points: "642" },
    { id: 4, name: "Эрик", lastName: "Аксёнов", img: "./iconPerson8.png", points: "150" },
    { id: 1155, name: "Иван", lastName: "Иванов", img: "./iconPerson8.png", points: "100" },
    { id: 12145, name: "Артем", lastName: "Алексеев", img: "./iconPerson8.png", points: "1000" },
];

let idProperty = 123;
let propertyName = "name";
let myProperty = "lastName";
let imgProperty = "img";
let pointProperty = "points"



for (var i = 0; i < data.length; i++) {
    if (data[i].id == idProperty) {
           document.getElementById("numb").innerText = 
                data[i][propertyName];
                document.getElementById("geek").innerText = 
                data[i][myProperty];
                document.getElementById("point").innerText = 
                data[i][pointProperty];
    }
}
let idLength = 9;
let propeName = "name";
let myProper = "lastName";
let imgProper = "img";
let pointProper = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idLength) {
      document.getElementById("number").innerText = 
              data[i][propeName];
              document.getElementById("gek").innerText = 
              data[i][myProper];
              document.getElementById("poin").innerText = 
              data[i][pointProper];
  }
}
let idLoop = 231;
let propName = "name";
let myLast = "lastName";
let imgLoop = "img";
let pointLoop = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idLoop) {
      document.getElementById("num_2").innerText = 
              data[i][propName];
              document.getElementById("gek_2").innerText = 
              data[i][myLast];
              document.getElementById("poin_2").innerText = 
              data[i][pointLoop];
  }
}
let idL = 321;
let propNam = "name";
let myLas = "lastName";
let imgL = "img";
let pointL = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idL) {
      document.getElementById("num_3").innerText = 
              data[i][propNam];
              document.getElementById("gek_3").innerText = 
              data[i][myLas];
              document.getElementById("poin_3").innerText = 
              data[i][pointL];
  }
}
let idLs = 492;
let propN = "name";
let myL = "lastName";
let imgLs = "img";
let pointLs = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idLs) {
      document.getElementById("num_4").innerText = 
              data[i][propN];
              document.getElementById("gek_4").innerText = 
              data[i][myL];
              document.getElementById("poin_4").innerText = 
              data[i][pointLs];
  }
}
let idS = 452;
let propS = "name";
let myS = "lastName";
let imgS = "img";
let pointS = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idS) {
      document.getElementById("num_5").innerText = 
              data[i][propS];
              document.getElementById("gek_5").innerText = 
              data[i][myS];
              document.getElementById("poin_5").innerText = 
              data[i][pointS];
  }
}
let idLsd = 796;
let propSearch = "name";
let mySearch = "lastName";
let imgSearch = "img";
let pointSearch = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idLsd) {
      document.getElementById("num_6").innerText = 
              data[i][propSearch];
              document.getElementById("gek_6").innerText = 
              data[i][mySearch];
              document.getElementById("poin_6").innerText = 
              data[i][pointSearch];
  }
}
let idSl = 4;
let propSl = "name";
let mySl = "lastName";
let imgSl = "img";
let pointSl = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idSl) {
      document.getElementById("num_7").innerText = 
              data[i][propSl];
              document.getElementById("gek_7").innerText = 
              data[i][mySl];
              document.getElementById("poin_7").innerText = 
              data[i][pointSl];
  }
}
let idSlp = 1155;
let propSlp = "name";
let mySlp = "lastName";
let imgSlp = "img";
let pointSlp = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idSlp) {
      document.getElementById("num_8").innerText = 
              data[i][propSlp];
              document.getElementById("gek_8").innerText = 
              data[i][mySlp];
              document.getElementById("poin_8").innerText = 
              data[i][pointSlp];
  }
}
let idSls = 12145;
let propSls = "name";
let mySls = "lastName";
let imgSls = "img";
let pointSls = "points"
for (var i = 0; i < data.length; i++) {
  if (data[i].id == idSls) {

      document.getElementById("num_9").innerText = 
              data[i][propSls];
              document.getElementById("gek_9").innerText = 
              data[i][mySls];
              document.getElementById("poin_9").innerText = 
              data[i][pointSls];
  }
}









	







 // const open = document.getElementById('open');
  //const close = document.getElementById('close');
  //const modal_cont = document.getElementById('modal_container');

  //open.addEventListener('click',() => {
  //  modal_cont.classList.add('show');
 // });
 // close.addEventListener('click',() => {
 //   modal_cont.classList.remove('show');
 // });