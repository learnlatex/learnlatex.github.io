
var preincludes={};

var buttons ={
    "edit":             "edit",
    "copy":             "copy",
    "Open in Overleaf": "Open in Overleaf",
    "LaTeX Online":     "LaTeX Online",
    "Delete Output":    "Delete Output"
}



function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
	p[i].setAttribute("id","pre" + i);
	// class=noedit on pre or {: .class :} after closing ``` in markdown
	if(!(p[i].classList.contains('noedit') || p[i].parentNode.parentNode.classList.contains('noedit'))) {
	// edit
	var b = document.createElement("button");
	b.innerText=buttons["edit"];
	b.setAttribute("onclick",'allowedit("pre' + i + '")');
	p[i].parentNode.insertBefore(b, p[i]);
	// copy
	var c = document.createElement("button");
	c.innerText=buttons["copy"];
	c.setAttribute("onclick",'copytoclipboard("pre' + i + '")');
	p[i].parentNode.insertBefore(c, p[i]);
	if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	    // latexonline
	    var r = document.createElement("button");
	    r.innerText=buttons["LaTeX Online"];
	    r.setAttribute("onclick",'latexcgi("pre' + i + '")');
	    r.setAttribute("id","lo-pre" + i);
	    p[i].parentNode.insertBefore(r, p[i].nextSibling);
	    // overleaf
	    var o = document.createElement("button");
	    o.innerText=buttons["Open in Overleaf"];
	    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	    p[i].parentNode.insertBefore(o, p[i].nextSibling);
	    var f=document.createElement("span");
	    // action=\"https://httpbin.org/post\"
	    // action=\"https://www.overleaf.com/docs\"
	    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"></form>";
	    p[i].parentNode.insertBefore(f, p[i].nextSibling);
	    var f2=document.createElement("span");
	    f2.innerHTML="<form style=\"display:none\" id=\"form2-pre" + i + "\" name=\"form2-pre" + i +"\" enctype=\"multipart/form-data\" action=\"https://latexcgi.xyz/cgi-bin/p2\" method=\"post\" target=\"pre" + i + "ifr\"></form>";
	    p[i].parentNode.insertBefore(f2, p[i].nextSibling);
	}
	}
    }
}

const commentregex = / %.*/;
const engineregex = /% *!TEX.*[^a-zA-Z]((pdf|xe|lua|u?p)latex)/i;


// https://www.overleaf.com/devs
function addinput(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =encodeURIComponent(v);
    f.appendChild(inp);
}

function addinputnoenc(f,n,v) {
    var inp=document.createElement("input");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.value =v;
    f.appendChild(inp);
}

function addtextarea(f,n,v) {
    var inp=document.createElement("textarea");
    inp.setAttribute("type","text");
    inp.setAttribute("name",n);
    inp.textContent=v;
    f.appendChild(inp);
}

function openinoverleaf(nd) {
    var fm = document.getElementById('form-' + nd);
    fm.innerHTML="";
    var p = document.getElementById(nd);
    var t = p.innerText;
    // the lax engine comment syntax confuses overleaf
    addinput(fm,"encoded_snip[]",t.replace(engineregex,''));
    addinput(fm,"snip_name[]","document.tex");
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		addinput(fm,"encoded_snip[]",document.getElementById(prop).innerText);
		addinput(fm,"snip_name[]",incl[prop]);
	    }
	}
    }
    var engv="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	engv=eng[1].toLowerCase();
	if(engv == "platex" || engv == "uplatex") {
	    addinput(fm,"encoded_snip[]","$latex = '" + engv + "';\n$bibtex = 'pbibtex';\n$dvipdf = 'dvipdfmx %O -o %D %S';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv="latex_dvipdf";
	}
    } else if(t.indexOf("fontspec") !== -1) {
	engv="xelatex";
    }
    addinput(fm,"engine",engv);
    fm.submit();
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
    p.setAttribute("spellcheck","false");
    p.innerHTML=p.innerText;
    p.style.border="solid thin green";
}

function deleteoutput(nd){
    var b = document.getElementById('del-' + nd);
    var ifr = document.getElementById(nd + 'ifr');
    b.parentNode.removeChild(b);
    ifr.parentNode.removeChild(ifr);
}

function latexcgi(nd) {
    var fm = document.getElementById('form2-' + nd);
    fm.innerHTML="";
    var p = document.getElementById(nd);
    var t = p.innerText;
    addtextarea(fm,"filecontents[]",t);
    addinputnoenc(fm,"filename[]","document.tex");
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		addtextarea(fm,"filecontents[]",document.getElementById(prop).innerText);
		addinputnoenc(fm,"filename[]",incl[prop]);
	    }
	}
    }
    var engv="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	engv=eng[1].toLowerCase();
    } else if(t.indexOf("fontspec") !== -1) {
	engv="xelatex";
    }
    addinput(fm,"engine",engv);
    var b = document.getElementById('lo-' + nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	ifr.setAttribute("name",nd + "ifr");
	p.parentNode.insertBefore(ifr, b.nextSibling);
	d=document.createElement("button");
	d.innerText=buttons["Delete Output"];
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    var  loading=document.createElement("div");
    loading.id=nd+"load";
    loading.textContent="Loading . . .";
    p.parentNode.insertBefore(loading, ifr);
    // scroll only if really close to the bottom
    var rect = b.getBoundingClientRect();
    if(document.documentElement.clientHeight - rect.bottom < 50){
	window.scrollBy(0,150);
    }
    setTimeout(function () {
	p.parentNode.removeChild(document.getElementById(nd+"load"));
    }, 1000);
    fm.submit();
}

window.addEventListener('load', llexamples, false);
