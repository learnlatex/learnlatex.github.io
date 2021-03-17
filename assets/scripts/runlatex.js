// runlatex.js for TeXLive.net and Overleaf
// Copyright 2020 2021 David Carlisle
// MIT Licence

var preincludes={};

var buttons ={
    "edit":             "edit",
    "copy":             "copy",
    "Open in Overleaf": "Open in Overleaf",
    "LaTeX Online":     "LaTeX Online",
    "Delete Output":    "Delete Output",
    "Compiling PDF":    "Compiling PDF"
}

var latexcgihost="https://texlive.net/cgi-bin/latexcgi";

var editors=[];

const commentregex = / %.*/;
const norunregex = /^\s*([/%#\*]+ *!TEX.*[^a-zA-Z]none *|[^% \t\\][^\\]*)(\n|$)/i;
const engineregex = /% *!TEX.*[^a-zA-Z](((pdf|xe|lua|u?p)?latex(-dev)?)|context|(pdf|xe|lua|u?p)?tex) *\n/i;
const returnregex = /% *!TEX.*[^a-zA-Z](pdfjs|pdf|log) *\n/i;
const makeindexregex = /% *!TEX.*[^a-zA-Z]makeindex( [a-z0-9\.\- ]*)\n/ig;

function llexamples() {
    var p = document.getElementsByTagName("pre");
    var editor;
    var acemode;
    for(var i=0;i<p.length;i++) {
	acemode="ace/mode/latex";
	p[i].setAttribute("id","pre" + i);
	var pretext=p[i].innerText;
	// class=noedit on pre or {: .class :} after closing ``` in markdown
	if(!(p[i].classList.contains('noedit') || p[i].parentNode.parentNode.classList.contains('noedit'))) {
	    if(pretext.match(norunregex)) {
		acemode="ace/mode/text";
	    } else {
		// space
		var s = document.createElement("div");
		s.setAttribute("class",'ace-spacer');
		p[i].parentNode.insertBefore(s, p[i].nextSibling);
		// latexonline
		var r = document.createElement("button");
		r.innerText=buttons["LaTeX Online"];
		r.setAttribute("class","llbutton");
		r.setAttribute("onclick",'latexcgi("pre' + i + '")');
		r.setAttribute("id","lo-pre" + i);
		p[i].parentNode.insertBefore(r, p[i].nextSibling);
		// overleaf
		var o = document.createElement("button");
		o.innerText=buttons["Open in Overleaf"];
		o.setAttribute("class","llbutton");
		o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
		p[i].parentNode.insertBefore(o, p[i].nextSibling);
		var f=document.createElement("span");
		// action=\"https://httpbin.org/post\"
		// action=\"https://www.overleaf.com/docs\"
		f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +
		    "\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"></form>";
		p[i].parentNode.insertBefore(f, p[i].nextSibling);
		var f2=document.createElement("span");
		f2.innerHTML="<form style=\"display:none\" id=\"form2-pre" + i +
		    "\" name=\"form2-pre" + i +
		    "\" enctype=\"multipart/form-data\" action=\"" +
		    latexcgihost +
		    "\" method=\"post\" target=\"pre" + i +
		    "ifr\"></form>";
		p[i].parentNode.insertBefore(f2, p[i].nextSibling);
	    }
	    p[i].textContent=pretext.replace(/\s+$/,'');
	    editor = ace.edit(p[i]);
	    ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12') ;
	    editor.setTheme("ace/theme/textmate");
	    editor.getSession().setMode(acemode);
	    editor.setOption("minLines",1);
	    editor.setOption("maxLines",100);
	    editor.setShowPrintMargin(false);
	    editor.resize();
	    editors["pre" + i]=editor;
	}
    }
}


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
    var t = editors[nd].getValue();

    var engv="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	engv=eng[1].toLowerCase();
    
	if(engv == "pdftex" || engv == "luatex" || engv == "xetex" || engv == "ptex" || engv == "uptex") {
	    t = "% Force main document for Overleaf\n\\let\\tmp\n\\documentclass\n" + t;
	}
    }
    addinput(fm,"encoded_snip[]","\n" + t);
    addinput(fm,"snip_name[]","document.tex");
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		if(editors[prop]==null) {
		    addinput(fm,"encoded_snip[]",document.getElementById(prop).textContent);
		} else {
		    addinput(fm,"encoded_snip[]",editors[prop].getValue());
		}
		addinput(fm,"snip_name[]",incl[prop]);
	    }
	}
    }
    if(eng != null) {
	if(engv.indexOf("platex") != -1 || engv.indexOf("ptex") != -1 || engv=="tex") {
	    addinput(fm,"encoded_snip[]","$latex = '" + engv + "';\n$bibtex = 'pbibtex';\n$dvipdf = 'dvipdfmx %O -o %D %S';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv="latex_dvipdf";
	} else if(engv == "pdftex" || engv == "luatex" || engv == "xetex") {
	    addinput(fm,"encoded_snip[]","$pdflatex = '" + engv + "';");
	    addinput(fm,"snip_name[]","latexmkrc");
	    engv="pdflatex";
	}

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
    var t = editors[nd].getValue();
    addtextarea(fm,"filecontents[]",t);
    addinputnoenc(fm,"filename[]","document.tex");
    if(typeof(preincludes) == "object") {
	if(typeof(preincludes[nd]) == "object") {
	    var incl=preincludes[nd];
	    for(prop in incl) {
		if(editors[prop]==null) {
		    addtextarea(fm,"filecontents[]",document.getElementById(prop).textContent);
		} else {
		    addtextarea(fm,"filecontents[]",editors[prop].getValue());
		}
		addinputnoenc(fm,"filename[]",incl[prop]);
	    }
	}
    }
    var engv="pdflatex";
    var eng=t.match(engineregex);
    if(eng != null) {
	engv=eng[1].toLowerCase();
    }
    addinput(fm,"engine",engv);
    var rtn = t.match(returnregex);
    var rtnv = "";
    if(rtn == null) {
	// ES6 / IE
	if (typeof Symbol == "undefined") addinput(fm,"return","pdf");
    } else {
	rtnv=rtn[1].toLowerCase();
	addinput(fm,"return",rtnv);
    }
    var mki = makeindexregex.exec(t);
    while (mki != null) {
	addinputnoenc(fm,"makeindex[]",mki[1]);
	mki = makeindexregex.exec(t);
    }
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
        d.setAttribute("class","llbutton");
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    var  loading=document.createElement("div");
    loading.id=nd+"load";
    loading.textContent=buttons["Compiling PDF"] + " . . .";
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
