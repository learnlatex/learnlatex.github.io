function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
    if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	p[i].setAttribute("id","pre" + i);
	var r = document.createElement("button");
	r.innerText="latexonline.cc";
	r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	p[i].parentNode.insertBefore(r, p[i].nextSibling);
	var b = document.createElement("button");
	b.innerText="edit";
	b.setAttribute("onclick","pre" + i + '.contentEditable="true"');
	p[i].parentNode.insertBefore(b, p[i].nextSibling);
	var o = document.createElement("button");
	o.innerText="Open in OverLeaf";
	o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	p[i].parentNode.insertBefore(o, p[i].nextSibling);
    }
    }
}

function latexonlinecc(nd) {
    var p = document.getElementById(nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	p.parentNode.insertBefore(ifr, p.nextSibling);
    }
    ifr.setAttribute("src","https://latexonline.cc/compile?text=" + encodeURIComponent(p.innerText));
}


// based on code from texnique.fr
function openinoverleaf(nd) {
    alert("OverLeaf link not yet operational");
}

window.addEventListener('load', llexamples, false);
