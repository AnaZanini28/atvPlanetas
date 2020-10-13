var inputPeso = document.getElementById('peso'); 
var mostraPeso = document.getElementById('mostraPeso');   
var btnCalcula = document.getElementById('btnCalcula'); 
var selectPlaneta = document.getElementById('planeta');   

btnCalcula.addEventListener('click', calcula);

function calcula(){ 

    var planeta = parseInt(selectPlaneta.options[selectPlaneta.selectedIndex].value);  
    var peso = parseFloat(inputPeso.value);  
    var pesoPlaneta = 0;
 
    if (isNaN(peso)){
        alert('Peso inválida');
    } else{
        switch (planeta){ 
            case 1: 
                pesoPlaneta = peso*0.37; 
                mostraPeso.innerText = 'Seu peso em Mercúrio é: '+pesoPlaneta+' kg.';
            break;
            case 2:
                pesoPlaneta = peso *0.88; 
                mostraPeso.innerText = 'Seu peso em Vênus é: '+pesoPlaneta+' kg.'; 
            break;
            case 3:
                pesoPlaneta = peso*0.38; 
                mostraPeso.innerText = 'Seu peso em Marte é: '+pesoPlaneta+' kg.'; 
            break;
            case 4: 
                pesoPlaneta = peso*2.64; 
                mostraPeso.innerText = 'Seu peso em Júpiter é: '+pesoPlaneta+' kg.'; 
            break;
            case 5:
                pesoPlaneta = peso*1.15; 
                mostraPeso.innerText = 'Seu peso em Saturno é: '+pesoPlaneta+' kg.'; 
            break; 
            case 6:
                pesoPlaneta = peso*1.17; 
                mostraPeso.innerText = 'Seu peso em Urano é: '+pesoPlaneta+' kg.'; 
            break;
            case 7:
                pesoPlaneta = peso*1.18; 
                mostraPeso.innerText = 'Seu peso em Netuno é: '+pesoPlaneta+' kg.'; 
            break;

    /*  
    os dados acima foram pegos no site
        https://recreio.uol.com.br/planetario/qual-seria-o-seu-peso-em-outros-planetas.phtml
    
    case 1: 
            pesoPlaneta = (peso / 10)*0.37; 
            mostraPeso.innerText = 'Seu peso em Mercúrio é: '+pesoPlaneta+' kg.';
        break;
        case 2:
            pesoPlaneta = (peso / 10)*0.88; 
            mostraPeso.innerText = 'Seu peso em Vênus é: '+pesoPlaneta+' kg.'; 
        break;
        case 3:
            pesoPlaneta = (peso / 10)*3.38; 
            mostraPeso.innerText = 'Seu peso em Marte é: '+pesoPlaneta+' kg.'; 
        break;
        case 4: 
            pesoPlaneta = (peso / 10)*2.64; 
            mostraPeso.innerText = 'Seu peso em Júpiter é: '+pesoPlaneta+' kg.'; 
        break;
        case 5:
            pesoPlaneta = (peso / 10)*1.15; 
            mostraPeso.innerText = 'Seu peso em Saturno é: '+pesoPlaneta+' kg.'; 
        break; 
        case 6:
            pesoPlaneta = (peso / 10)*1.17; 
            mostraPeso.innerText = 'Seu peso em Urano é: '+pesoPlaneta+' kg.'; 
        break;
    */
    }
    }  

}
