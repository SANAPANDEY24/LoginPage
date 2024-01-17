var a;
function pass()
{
    if(a==1)
    {
        document.getElementById("password").type="password";
        document.getElementById("pass-icon").src="EYECLOSE.webp";
        a=0;
    }
    else
    {
        
        document.getElementById("password").type="text";
        document.getElementById("pass-icon").src="EYEOPEN.webp";
        a=1;
    }
    
}