var numpantalla="0";
var pantallaconnumero="si" //si o no
var usarpunto="no"; //si o no
var numespera=0;
var operapendiente="";
var solucion="";


function ingresarnumero(x)
{
    if(x!==".")
    {
        if(numpantalla=="0" || pantallaconnumero=="si")
        {
            document.calculadora.txtboxnros.value=x;
            numpantalla=x;
        }
        else if(x!=".")
        {
            document.calculadora.txtboxnros.value+=x;
            numpantalla+=x;
        }
    }
    if(x==" . " && usarpunto=="no" && numpantalla=="0")
    {
        document.calculadora.txtboxnros.value="0.";
            numpantalla=x;
            usarpunto="si";
    }

else if(x==" . " && usarpunto=="no")
{
    document.calculadora.txtboxnros.value +=x;
    numpantalla +=x;
    usarpunto="si"
}

else if(x==" . " && usarpunto=="si")
{
    pantallaconnumero="no";
}




}
 var numpantalla="0";
var pantallaconnumero="si" //si o no
var usarpunto="no"; //si o no
var numespera=0;
var operapendiente="";
var solucion="";


function ingresarnumero(x)
{
    if(x!==" . ")
    {
        if(numpantalla=="0" || pantallaconnumero=="si")
        {
            document.calculadora.txtboxnros.value=x;
            numpantalla=x;
        }
        else if(x!=".")
        {
            document.calculadora.txtboxnros.value+=x;
            numpantalla+=x;
        }
    }
    if(x==" . " && usarpunto=="no" && numpantalla=="0")
    {
        document.calculadora.txtboxnros.value="0.";
            numpantalla=x;
            usarpunto="si";
    }

else if(x==" . " && usarpunto=="no")
{
    document.calculadora.txtboxnros.value +=x;
    numpantalla +=x;
    usarpunto="si"
}

else if(x==" . " && usarpunto=="si")
{
    pantallaconnumero="no";
}

}


function ingresaoperacion(y)
{

if(operapendiente =="")
{
    numespera=document.calculadora.txtboxnros.value;
    document.calculadora.txtboxnros.value +=y;
    operapendiente = y;
    pantallaconnumero =="si"
    numpantalla = "";
    usarpunto = "no";
}


}


function resultado()
{
    if(operapendiente !="")
    {
        solucion=numespera+operapendiente+numpantalla;
        document.calculadora.txtboxnros.value=eval (solucion);
        numpantalla=eval(solucion);
        pantallaconnumero="si";
        operapendiente = "";
        usarpunto ="no";
    }
}

function raiz()
{
    if(operapendiente =="")
    {
        document.calculadora.txtboxnros.value=Math.sqrt(numpantalla);
        pantallaconnumero = "si";
        operapendiente = "";
        usarpunto = "no";
    }
}


function limpiar()
{
    numpantalla="0"
    pantallaconnumero="si"
    usarpunto="no"
    numespera=0;
    solucion="";
    document.calculadora.txtboxnros.value="0"
}