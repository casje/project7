/***********************************************************
*  BIBLIOTECA PRINCIPAL (MAIN) DA SOLUÇÃO.                 *
*  UTILIZA-LA APENAS PARA INCLUIR FUNÇÕES GLOBAIS.         *
* -------------------------------------------------------- *
*  VERSÃO: 1.0                                             *
*  AUTOR:  CLAUDIO ALVES JR                                *
*  DATA:   09/10/2015                                      *
************************************************************/

$(document).ready(function(){    
    $('div.nav-menutop-content').niceScroll({cursorcolor:"#777", cursorwidth:"8px", autohidemode:false, zindex: 999});
    
    $('div.nav-menutop-content').mouseover(function() {
        $('div.nav-menutop-content').getNiceScroll().resize();
    });

    
	$('.nav-menutop-text').each(function(index) {
        var vTextoMsg = $(this).text().trim();
        var vValueHidden = vTextoMsg;
        
        if(vTextoMsg.trim().length > 50){
            vTextoMsg = vTextoMsg.substring(0, 50) + "...";
        }
        
        $(this).text(vTextoMsg);
        
        var vCampoHidden = "<input type=\"hidden\" name=\"text-" + index + "\" id=\"text-" + index + "\" value=\"" + vValueHidden + "\" />";        
        $(this).parent().append(vCampoHidden);
        
    });  
    
    
    $('.nav-menutop-title').each(function(index) {
        var vTextoMsg = $(this).text().trim();
        
        if(vTextoMsg.trim().length > 40){
            vTextoMsg = vTextoMsg.substring(0, 40) + "...";
        }
        
        $(this).text(vTextoMsg);        
    }); 
    
    $('.nav-menutop-content ul li a').click(function() {
        var vTexto = '------------------------------------------------------------\n';
        vTexto    += '- Titulo: ' + $(this).find('.nav-menutop-title').text();
        vTexto    += '\n';
        vTexto    += '- Texto: ' + $(this).parent().find("input[id^='text-']").val();
        vTexto    += '\n';
        vTexto    += '------------------------------------------------------------';
        
        alert(vTexto);
    });
    
    $('.nav-menutop-search input').keypress(function(event) {
        if (event.keyCode == 10 || event.keyCode == 13) {
            event.preventDefault();
        }
    });
    
});

