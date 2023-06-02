var btn1 = document.getElementById("btn1");
    caja1 = document.getElementById("caja1");
    contador=0;



    function cambio()

    {  if(contador==0)

        {
            caja1.classList.add("azul");
            contador=1;


        }

            else{caja1.classList.remove("azul");
                contador=0;}


    }



    btn1.addEventListener("click", cambio, true)






    var btn2 = document.getElementById("btn2"),
        cuadro2 = document.getElementById("cuadro2"),
        contador=0;



        function cambio2()


        {  if(contador==0)
            {
                    cuadro2.classList.add("verde");
                    contador=2;



            }




                else{cuadro2.classList.remove("verde");
                    contador=0;}
        }




            btn2.addEventListener("click2",cambio2,true)


            var btn3 = document.getElementById("btn3"),
            pieza3 = document.getElementById("pieza3"),
            contador=0;
    
    
    
            function cambio3()
    
    
            {  if(contador==0)
                {
                        pieza3.classList.add("naranja");
                        contador=3;
    
    
    
                }
    
    
    
    
                    else{pieza3.classList.remove("naranja");
                        contador=0;}
            }
    
    
    
    
                btn3.addEventListener("poner",cambio,true)
    