$(document).ready(function(){
    
	$('.nav-menu-main').css('height', 'auto');
	$('.nav-menu-main ul').hide();
	$('.nav-menu-main h3').click(function(){
        $(this).next().slideToggle(150);
        $(this).next().siblings('ul:visible').slideUp(150);
        $(this).toggleClass('corrente');
        $(this).siblings('.nav-menu-main h3').removeClass('corrente');
	});

	$('.nav-menu-main a').click(function(){
        
        if( $(this).hasClass("acnot") === true) {
            alert('opção bloqueada');
        }
        else if( $(this).hasClass("acper") === true) {
            alert('opção em andamento');
        }
        else {
            createLinkNav($(this));
        }
	});
    
    
    $('.dropmenu > li > a').click(function() {
        $('.dropmenu > li > ul').hide();
        
        $(this).parent().find('ul').show();
        
    });
    
    $(document).on('click', function(event) {
      if ($(event.target).closest('.dropmenu').length <= 0) {
        $('.dropmenu > li > ul').hide();
      }
    });
    
});

function createLinkNav(eLink) {
    var textoLink = $(eLink).data("link");
    //var textoLink = $(eLink).attr("data-link");
    
    var temp = $(eLink).data();
            
    if (textoLink !== undefined){
        var vURL = textoLink + ".html";
        
        $.ajax({
            url: vURL,
            dataType: 'html',
            type: 'GET',
            success: function(data){
                 $(".content-page").html(data);
            },
            statusCode: {
                404: function() {
                    alert('Página não encontrada.');
                }
            },
            error: function(xhr, er){
                var vTextError = '\n-----------------------------------------------------------------------';
                vTextError    += '\n- Ocorreu uma falha no processo                 ';
                vTextError    += '\n- Código erro:   ' + er;
                vTextError    += '\n- Texto do erro: ' + xhr.statusText;
                vTextError    += '\n-----------------------------------------------------------------------';
                
                alert(vTextError);
            }
        });
    }
    else { alert('não existe o link para o destino desejado'); }       
}
 