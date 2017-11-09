var body = document.querySelector('body');
var lastkey = 5000;
var ctrlActive = false;
var shiftActive= false;
var altActive  = false;
var captureAllKeystrokes = true;
var infoActive=true;

function toggleKeystrokeCapture() {
    if (captureAllKeystrokes==true) {captureAllKeystrokes=false;setBGColor("captureKeystrokes", "#999999");document.getElementById("keycapmode").innerText="No";} else {captureAllKeystrokes=true;setBGColor("captureKeystrokes", "#666666");document.getElementById("keycapmode").innerText="Yes";}
}
function add(className, displayState){
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}
function setBGColor(idname, color) {
    var element = document.getElementById(idname);

    element.style.background = color;
}
function remAddedCSS(className) {
    var elements = document.getElementsByClassName(className)

    for (var i=0; i < elements.length; i++) {
        elements[i].style.display = '';
    }
}
body.onkeydown = function(e) {
     var key=e.keyCode;
    if(captureAllKeystrokes==true) {
        e.preventDefault();
    }
if (key==5000) {
    if (infoActive==false){
        document.getElementById("k5000").classList.add('show');
        infoActive=true;
        add("notinfo", "none");
        remAddedCSS("info");
        return;
    }
    } else if (key!=16 && key!=17 && key!=18){
        document.getElementById("k5000").classList.remove('show');
        infoActive=false;
        if (shiftActive==true && key!=16){
        buttonClicked(16);
    }
        if (ctrlActive==true && key!=17){
        buttonClicked(17);
    }
        if (altActive==true && key!=18){
        buttonClicked(18);
    }
        } else if (key==16) {
            if(shiftActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noshift", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
            }
        } else if (key==17) {
            if(ctrlActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noctrl", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
            }
        }  else if (key==18) {
            if(altActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noalt", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
            }
        }
if (e.keyCode==16) {
    if (shiftActive==false) {shiftActive=true;} else {shiftActive=false;}
    if (shiftActive==true) {
        add("noshift", "none");
        document.getElementById("shiftleft").classList.add('show');
        document.getElementById("shiftright").classList.add('show');
    } else {
        if (infoActive==false) {remAddedCSS("noshift");}
        document.getElementById("shiftleft").classList.remove('show');
        document.getElementById("shiftright").classList.remove('show');
    }
    if (shiftActive==true && infoActive==true) {
        if (ctrlActive==true) {
            buttonClicked(17);
        }
        if (altActive==true) {
            buttonClicked(18);
        }

    }
    return;
}
if (e.keyCode==17)   {
    if (ctrlActive==false) {ctrlActive=true;} else {ctrlActive=false;}

    if (ctrlActive==true) {
        add("noctrl", "none");
        document.getElementById("ctrlleft").classList.add('show');
        document.getElementById("ctrlright").classList.add('show');
    } else {
        if (infoActive==false) {remAddedCSS("noctrl");}
        document.getElementById("ctrlleft").classList.remove('show');
        document.getElementById("ctrlright").classList.remove('show');
    }
    if (ctrlActive==true && infoActive==true) {
        if (shiftActive==true) {
            buttonClicked(16);
        }
        if (altActive==true) {
            buttonClicked(18);
        }

    }
    return;
}
if (e.keyCode==18) {
    if(altActive==false) {altActive=true;} else {altActive=false;}

    if (altActive==true) {
        add("noalt", "none");
        document.getElementById("altleft").classList.add('show');
        document.getElementById("altright").classList.add('show');
    } else {
        if (infoActive==false) {remAddedCSS("noalt");}
        document.getElementById("altleft").classList.remove('show');
        document.getElementById("altright").classList.remove('show');
    }
    if (altActive==true && infoActive==true) {
        if (ctrlActive==true) {
            buttonClicked(17);
        }
        if (shiftActive==true) {
            buttonClicked(16);
        }

    }
    return;
}
if ( document.getElementById('k' + e.keyCode.toString()).classList.contains('show') ) {
document.getElementById('k' + e.keyCode.toString()).classList.remove('show');
lastkey=e.keyCode;
buttonClicked(5000);
} else {
    document.getElementById('k' + e.keyCode.toString()).classList.add('show');
}
if ( document.getElementById('k' + lastkey.toString()).classList.contains('show') && lastkey!=e.keyCode ) {
    document.getElementById('k' + lastkey.toString()).classList.remove('show');
}
lastkey=e.keyCode;
}

function buttonClicked(key) {
if (key==5000) {
    if (infoActive==false){
        document.getElementById("k5000").classList.add('show');
        infoActive=true;
        add("notinfo", "none");
        remAddedCSS("info");
        return;
    }
    } else if (key!=16 && key!=17 && key!=18){
        document.getElementById("k5000").classList.remove('show');
        infoActive=false;
        } else if (key==16) {
            if(shiftActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noshift", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
            }
        } else if (key==17) {
            if(ctrlActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noctrl", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
                            }
        }  else if (key==18) {
            if(altActive==false) {
                add("info", "none");
                remAddedCSS("notinfo");
                add("noalt", "none");
            } else {
                remAddedCSS("info");
                add("notinfo", "none");
            }
        }

if (key==16) {
    if (shiftActive==false) {shiftActive=true;} else {shiftActive=false;}
    if (shiftActive==true) {
        add("noshift", "none");
        document.getElementById("shiftleft").classList.add('show');
        document.getElementById("shiftright").classList.add('show');
    } else {
        if (infoActive==false) {remAddedCSS("noshift");}
        document.getElementById("shiftleft").classList.remove('show');
        document.getElementById("shiftright").classList.remove('show');
    }
        if (shiftActive==true && infoActive==true) {
        if (ctrlActive==true) {
            buttonClicked(17);
        }
        if (altActive==true) {
            buttonClicked(18);
        }
        }
    return;
}
if (key==17)   {
    if (ctrlActive==false) {ctrlActive=true;} else {ctrlActive=false;}

    if (ctrlActive==true) {
        add("noctrl", "none");
        document.getElementById("ctrlleft").classList.add('show');
        document.getElementById("ctrlright").classList.add('show');
    } else {
        if (infoActive==false) {remAddedCSS("noctrl");}

        document.getElementById("ctrlleft").classList.remove('show');
        document.getElementById("ctrlright").classList.remove('show');
    }
    if (ctrlActive==true && infoActive==true) {
        if (shiftActive==true) {
            buttonClicked(16);
        }
        if (altActive==true) {
            buttonClicked(18);
        }

    }
    return;
}
if (key==18) {
    if(altActive==false) {altActive=true;} else {altActive=false;}

    if (altActive==true) {
        add("noalt", "none");
        document.getElementById("altleft").classList.add('show');
        document.getElementById("altright").classList.add('show');
    } else {
        if (infoActive==false){remAddedCSS("noalt");}
        document.getElementById("altleft").classList.remove('show');
        document.getElementById("altright").classList.remove('show');
    }
    if (altActive==true && infoActive==true) {
        if (ctrlActive==true) {
            buttonClicked(17);
        }
        if (shiftActive==true) {
            buttonClicked(16);
        }

    }
    return;
}

if ( document.getElementById('k' + key).classList.contains('show')){
if (key!=5000) {
    buttonClicked(5000);
    document.getElementById('k' + key).classList.remove('show');
    }
} else {
    document.getElementById('k' + key).classList.add('show');
}
if ( document.getElementById('k' + lastkey.toString()).classList.contains('show') && lastkey!=key && key!=5000) {
    document.getElementById('k' + lastkey.toString()).classList.remove('show');
}
lastkey=parseInt(key);
if(key==5000) {
    document.getElementById("k5000").classList.add('show');
}
}

