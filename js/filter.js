
//filter toggle btn
$(document).ready(function(){




  $('.btnweek').click(function(event){

    event.preventDefault();


		var attr = $(this).attr('id');

    $('.btnweek').removeClass("active");
    $(this).addClass("active");

    $('.all').hide();
    if (attr == 'week1'){
      $('.'+attr).show();
    }
    else if (attr == 'week2'){
      $('.'+attr).show();
    }

    else if (attr == 'week3'){
      $('.'+attr).show();
    }

    else if (attr == 'week4'){
      $('.'+attr).show();
    }

    else if (attr == 'week5'){
      $('.'+attr).show();
    }

    else if (attr == 'week6'){
      $('.'+attr).show();
    }

    else if (attr == 'week7'){
      $('.'+attr).show();
    }

    else if (attr == 'week8'){
      $('.'+attr).show();
    }
    else{
      $('.all').show();
    }



  })


});
