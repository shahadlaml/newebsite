
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



//filter projects toggle btn
$(document).ready(function(){




  $('.btnproject').click(function(event){

    event.preventDefault();


		var attr = $(this).attr('id');

    $('.btnweek').removeClass("active");
    $(this).addClass("active");

    $('.all-1').hide();
    if (attr == 'week1'){
      $('.'+attr).show();
    }
    else if (attr == 'logo'){
      $('.'+attr).show();
    }

    else if (attr == 'visual'){
      $('.'+attr).show();
    }

    else if (attr == 'illustration'){
      $('.'+attr).show();
    }

    else if (attr == 'ui'){
      $('.'+attr).show();
    }

    else if (attr == 'book'){
      $('.'+attr).show();
    }

    else if (attr == 'iconbtn'){
      $('.'+attr).show();
    }

    else{
      $('.all-1').show();
    }



  })


});
