
var preincludes={};

function llexamples() {
    var p = document.getElementsByTagName("pre");
    for(var i=0;i<p.length;i++) {
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
	if(p[i].textContent.indexOf("\\documentclass") !== -1) {
	    // latexonline
	    var r = document.createElement("button");
	    r.innerText="LaTeX online";
	    r.setAttribute("onclick",'latexonlinecc("pre' + i + '")');
	    r.setAttribute("id","lo-pre" + i);
	    p[i].parentNode.insertBefore(r, p[i].nextSibling);
	    // overleaf
	    var o = document.createElement("button");
	    o.innerText="Open in OverLeaf";
	    o.setAttribute("onclick",'openinoverleaf("pre' + i + '")');
	    p[i].parentNode.insertBefore(o, p[i].nextSibling);
	    var f=document.createElement("span");
	    f.innerHTML="<form style=\"display:none\" id=\"form-pre" + i +"\" action=\"https://www.overleaf.com/docs\" method=\"post\" target=\"_blank\"><input id=\"encoded_snip-pre" + i + "\" name=\"encoded_snip[]\" value=\"\" /></form>";
	    p[i].parentNode.insertBefore(f, p[i].nextSibling);
	}
    }
}

function latexonlinecc(nd) {
    var fconts="";
    if(typeof(preincludes) == "object") {
      if(typeof(preincludes[nd]) == "object") {
	  var incl=preincludes[nd];
	  for(const prop in incl) {
	      fconts=fconts+"\n\\begin{filecontents}{" +
		  incl[prop] +
		  "}\n" +
		  document.getElementById(prop).innerText +
		  "\n\\end{filecontents}\n";
	  }
      }
  }
    var p = document.getElementById(nd);
    if(p.innerText.indexOf("biblatex") !== -1) {
	fconts=fconts + "\n\\RequirePackage[backend=bibtex]{biblatex}\n";
    }
    var b = document.getElementById('lo-' + nd);
    var ifr= document.getElementById(nd + "ifr");
    if(ifr == null) {
	ifr=document.createElement("iframe");
	ifr.setAttribute("width","100%");
	ifr.setAttribute("height","500em");
	ifr.setAttribute("id",nd + "ifr");
	p.parentNode.insertBefore(ifr, b.nextSibling);
	d=document.createElement("button");
	d.innerText="Delete Output";
	d.setAttribute("id","del-" + nd);
	d.setAttribute("onclick",'deleteoutput("' + nd + '")');
	p.parentNode.insertBefore(d, b.nextSibling);
    }
    // that looks to have all lines but still need to zap comments for some reason..
    // alert(encodeURIComponent(fconts));
    ifr.setAttribute("src","https://latexonline.cc/compile?text=" + encodeURIComponent(fconts.replace(commentregex,'') + p.innerText));
}

const commentregex = / %.*/;

// https://www.overleaf.com/devs
function openinoverleaf(nd) {
    var fconts="";
    if(typeof(preincludes) == "object") {
      if(typeof(preincludes[nd]) == "object") {
	  var incl=preincludes[nd];
	  for(const prop in incl) {
	      fconts=fconts+"\n\\begin{filecontents}{" +
		  incl[prop] +
		  "}\n" +
		  document.getElementById(prop).innerText +
		  "\n\\end{filecontents}\n";
	  }
      }
  }
  var p = document.getElementById(nd);
  document.getElementById('encoded_snip-' + nd ).value =encodeURIComponent(fconts + p.innerText);
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


window.addEventListener('load', llexamples, false);
