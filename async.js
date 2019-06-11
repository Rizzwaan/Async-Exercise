function one(){
  setTimeout(function(){
    console.log(1);
  },1000)
  
}


function two(){
  setTimeout(() =>console.log(2), 1000 )
  
}

function three(){
  setTimeout(function(){
    console.log(3)
  },1000);
}


three();
one();
two();


// function doHomeWork(subject, callback){
//   console.log(`Completed ${subject} Homework`);
//   callback();
// }

// doHomeWork('Math', function(){
//    console.log('Start next homework');
// });



