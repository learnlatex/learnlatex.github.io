function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
    if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	p[i].setAttribute("id","pre" + i);
	// edit
	var b = document.createElement("button");
	b.innerText="edit";
	b.setAttribute("onclick",'allowedit("pre' + i + '")');
	p[i].parentNode.insertBefore(b, p[i]);
	// copy
	var c = document.createElement("button");
	c.innerText="copy";
	c.setAttribute("onclick",'copytoclipboard("pre' + i + '")');
	p[i].parentNode.insertBefore(c, p[i]);
	// latexonline
	var r = document.createElement("button");
	r.innerText="LaTeX online";
	r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	p[i].parentNode.insertBefore(r, p[i].nextSibling);
	// overleaf
	var o = document.createElement("button");
	o.innerText="Open in OverLeaf";
	o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	p[i].parentNode.insertBefore(o, p[i].nextSibling);
	var f=document.createElement("span");
	f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"><input id=\"encoded_snip-pre" + i + "\" name=\"encoded_snip\" value=\"\" /></form>";
	p[i].parentNode.insertBefore(f, p[i].nextSibling);
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
  var p = document.getElementById(nd);
  document.getElementById('encoded_snip-' + nd ).value =encodeURIComponent(p.innerText);
  document.getElementById('form-' + nd).submit();
}


function copytoclipboard(nd){
    var p = document.getElementById(nd);
    var nn=document.createElement("textarea");
    nn.value=p.innerText;
    document.body.appendChild(nn);
    nn.select();
    document.execCommand("copy");
    document.body.removeChild(nn);
}


function allowedit(nd){
    var p = document.getElementById(nd);
    p.contentEditable="true";
    p.style.border="solid thin green";
}


window.addEventListener('load', llexamples, false);
