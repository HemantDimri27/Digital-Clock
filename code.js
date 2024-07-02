const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


// setInterval(function(){}, time);
setInterval(function () {                                           // repeat function in given interval of time
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();                        
}, 1000);

