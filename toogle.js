
//  var x = document.getElementById("myDIV").firstChild;

// document.addEventListener('click',function(event){
//     if(document.getElementById("topRight").style.backgroundColor.value === 'white'){
//         document.getElementById("myDiv").style.backgroundColor = 'black'

//     }else {
//         document.getElementById("myDiv").style.backgroundColor = 'white'
//     }
//     // var x = event.currentTarget;
//     // console.log(x)
// })

// var box = event.target.tagName
// var box = document.querySelectorAll('div')
document.addEventListener('click', function (event) {
    var box = event.target;
    console.log(box)
    if (box.style.backgroundColor === 'white') {
        box.style.backgroundColor = 'black'
    } else {
        box.style.backgroundColor = 'white'

    }
});




// console.log(event.target.nodeName)
// if (box.style.backgroundColor === 'white') {
// } else {
// }