// filter
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $('.itemBox').show('1000');
    }
    else{
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  })
  // add active class on selected item
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})

 // modal 
 
 document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
   	  const src = e.target.getAttribute("src");
   	  document.querySelector(".modal-img").src = src;
   	  const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
   	  myModal.show();
   }
 })
  


