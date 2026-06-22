// MoneyBox Remit — Portal v2 shared interactions
(function(){
  // language toggle
  var lb=document.getElementById('langBtn');
  if(lb){lb.addEventListener('click',function(){
    var en=document.body.classList.toggle('en');
    lb.textContent=en?'한국어':'EN';
  });}
  // mobile nav
  var mn=document.getElementById('mnav');
  var mb=document.getElementById('menuBtn');
  var mx=document.getElementById('mnavX');
  if(mn&&mb){
    mb.addEventListener('click',function(){mn.classList.add('open')});
    if(mx)mx.addEventListener('click',function(){mn.classList.remove('open')});
    mn.addEventListener('click',function(e){if(e.target===mn)mn.classList.remove('open')});
    mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('open')})});
  }
  // faq accordion
  document.querySelectorAll('.faq__q').forEach(function(q){
    q.addEventListener('click',function(){q.parentElement.classList.toggle('open')});
  });
})();
