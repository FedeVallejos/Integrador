



function Calcular()
{
     totalPersonas = document.getElementById('cantidad').value;
     categoriaPersona = document.getElementById('categorias').value;
     descuento = 0;
     valorTicket = 200;


    
    
    
                switch (categoriaPersona)
                {
                
                            case '1':

                                        descuento = valorTicket-((200*80)/100);
                                        console.log(descuento);
                                        valorTicket = descuento*totalPersonas;
                                break;
                            case '2':

                                        descuento = valorTicket-((200*50)/100);
                                        valorTicket = descuento*totalPersonas;
                                break;
                            case '3':

                                        descuento = valorTicket-((200*15)/100);
                                        valorTicket = descuento*totalPersonas;
                                break; 



                }

                

   document.getElementById("total_Pagar").innerHTML = valorTicket;


}