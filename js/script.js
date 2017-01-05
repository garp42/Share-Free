$(function() {
            // $('#grand').click( function() {
            //   $('img').animate({ 'border-width': '100'}, {queue: false, duration: 1500 })
            //           .animate({ 'width': '+=100'}, 1500);
            // });

            //icone de compte : changement couleur au passage souris
           	$('#account-icon').mouseover(function(){
           		$('#account-icon').attr('src', 'icons/account32-hover.png');
           	});
           	$('#account-icon').mouseout(function(){
           		$('#account-icon').attr('src', 'icons/account32.png');
           	});
           	//icone message : changement couleur au passage souris
           	$('#message-icon').mouseover(function(){
           		$('#message-icon').attr('src', 'icons/message32-hover.png');
           	});
           	$('#message-icon').mouseout(function(){
           		$('#message-icon').attr('src', 'icons/message32.png');
           	});
            
           	//icone de recherche : changement couleur au passage souris
            $('#search-icon').mouseover(function(){
            	$('#search-icon').attr('src', 'icons/search24-hover.png');
            });
            $('#search-icon').mouseout(function(){
            	$('#search-icon').attr('src', 'icons/search24.png');
            });
            //quand on clique sur l'icone, on est focus sur la recherche
            $('#search-icon').click(function(){
            	$('#search-bar').focus();
            });

            //barre de recherche : changement couleur au focus
            $('#search-bar').focus(function(){
            	$('#search-bar').css('background-color', 'white');
            	$('#search-bar').css('color', 'black');
            });
            $('#search-bar').blur(function(){
            	$('#search-bar').css('background-color', '#898282');
            	$('#search-bar').css('color', 'white');
            });
            
            //image menu : devient flou quand on passe dessus + description apparait
            $('#main-img').mouseover(function(){
                $('#main-img-description h2').css('opacity', '1');
                $('#main-img-description p').css('opacity', '1');
                $('#main-img-description').animate({ 'height': '200' }, {queue:false, duration: 1000});
                $('#main-img img').css('filter', 'blur(5px)').css('transition', '1s');
            });
            $('#main-img').mouseout(function(){
                $('#main-img-description').animate({ 'height': '0'}, {queue:false, duration: 1000}).next('#main-img-description h2').css('opacity', '0');
                $('#main-img-description p').css('opacity', '0');
                $('#main-img img').css('filter', 'blur(0px)').css('transition', '1s');
            });
    
            //login popup
            $('#account-icon').click(function(){
                $('#login').css('opacity', '1').css('z-index', '3').css('transition', '1s');
                $('header').css('filter', 'blur(3px)').css('transition', '1s');
                $('#main').css('filter', 'blur(3px)').css('transition', '1s');
            });
        });
          