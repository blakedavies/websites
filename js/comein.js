$(document).ready(function(){$('#benefits div.layer div.container div.wrapper div.box-a, #benefits div.layer div.container div.wrapper div.box-b, #benefits div.layer div.container div.wrapper div.box-c, #benefits div.layer div.container div.wrapper div.box-d, #benefits div.layer div.container div.wrapper div.box-e, #benefits div.layer div.container div.wrapper div.box-f, #pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-a, #pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-b').addClass("hidden");});$(window).scroll(function(){function elementScrolled(elem){var docViewTop=$(window).scrollTop();var docViewBottom=docViewTop+$(window).height()/1.3;var elemTop=$(elem).offset().top;return((elemTop<=docViewBottom)&&(elemTop>=docViewTop));} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-a')){$('#benefits div.layer div.container div.wrapper div.box-a').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-a').removeClass("hidden");} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-b')){$('#benefits div.layer div.container div.wrapper div.box-b').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-b').removeClass("hidden");} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-c')){$('#benefits div.layer div.container div.wrapper div.box-c').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-c').removeClass("hidden");} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-d')){$('#benefits div.layer div.container div.wrapper div.box-d').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-d').removeClass("hidden");} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-e')){$('#benefits div.layer div.container div.wrapper div.box-e').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-e').removeClass("hidden");} if(elementScrolled('#benefits div.layer div.container div.wrapper div.box-f')){$('#benefits div.layer div.container div.wrapper div.box-f').addClass("middle visible");$('#benefits div.layer div.container div.wrapper div.box-f').removeClass("hidden");} if(elementScrolled('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-a')){$('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-a').addClass("middle visible");$('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-a').removeClass("hidden");} if(elementScrolled('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-b')){$('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-b').addClass("middle visible");$('#pricing div.parallax-window div.layer div.container div.wrapper div.box div.table-b').removeClass("hidden");}});