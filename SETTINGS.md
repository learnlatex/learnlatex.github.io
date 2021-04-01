---
layout: "page"
lang: "en"
title: Site Settings
permalink: /SETTINGS
---
# Site Settings (User Preferences)

## Hic Sunt Dracones

By default no cookies are used by this site, but any options set on
this page are set in cookies, use of the menu items below indicates
acceptance for cookies to be used on this site.


## Default Return


## Default Return


<input name="ret" id="pdfjs" type="radio" onclick="rlSetReturn('pdfjs')"> <label for="pdfjs">PDF.js</label>


<input name="ret" id="pdf" type="radio" onclick="rlSetReturn('pdf')"> <label for="pdf">PDF</label>


<input name="ret" id="make4ht" type="radio" onclick="rlSetReturn('make4ht')"> <label for="make4ht">make4ht</label>


<input name="ret" id="log" type="radio" onclick="rlSetReturn('log')"> <label for="log">log</label>

<script>
  document.getElementById(rldefaultreturn).checked=true;
</script>



## Default Engine


<input name="engine" id="pdflatex" type="radio" onclick="rlSetEngine('pdflatex')"> <label for="pdflatex">pdflatex</label>
<input name="engine" id="pdflatex-dev" type="radio" onclick="rlSetEngine('pdflatex-dev')"> <label for="pdf">pdflatex-dev</label>
<input name="engine" id="latex" type="radio" onclick="rlSetEngine('latex')"> <label for="latex">latex</label>
<input name="engine" id="latex-dev" type="radio" onclick="rlSetEngine('latex-dev')"> <label for="pdf">latex-dev</label>
<input name="engine" id="lualatex" type="radio" onclick="rlSetEngine('lualatex')"> <label for="lualatex">lualatex</label>
<input name="engine" id="lualatex-dev" type="radio" onclick="rlSetEngine('lualatex-dev')"> <label for="pdf">lualatex-dev</label>
<input name="engine" id="xelatex" type="radio" onclick="rlSetEngine('xelatex')"> <label for="xelatex">xelatex</label>
<input name="engine" id="xelatex-dev" type="radio" onclick="rlSetEngine('xelatex-dev')"> <label for="pdf">xelatex-dev</label>
<input name="engine" id="platex" type="radio" onclick="rlSetEngine('platex')"> <label for="platex">platex</label>
<input name="engine" id="platex-dev" type="radio" onclick="rlSetEngine('platex-dev')"> <label for="pdf">platex-dev</label>
<input name="engine" id="uplatex" type="radio" onclick="rlSetEngine('uplatex')"> <label for="uplatex">uplatex</label>
<input name="engine" id="uplatex-dev" type="radio" onclick="rlSetEngine('uplatex-dev')"> <label for="pdf">uplatex-dev</label>


<input name="engine" id="pdftex" type="radio" onclick="rlSetEngine('pdftex')"> <label for="pdftex">pdftex</label>
<input name="engine" id="tex" type="radio" onclick="rlSetEngine('tex')"> <label for="tex">tex</label>
<input name="engine" id="luatex" type="radio" onclick="rlSetEngine('luatex')"> <label for="luatex">luatex</label>
<input name="engine" id="xetex" type="radio" onclick="rlSetEngine('xetex')"> <label for="xetex">xetex</label>
<input name="engine" id="ptex" type="radio" onclick="rlSetEngine('ptex')"> <label for="ptex">ptex</label>
<input name="engine" id="uptex" type="radio" onclick="rlSetEngine('uptex')"> <label for="uptex">uptex</label>


<input name="engine" id="context" type="radio" onclick="rlSetEngine('context')"> <label for="contex">context</label>



<script>
  document.getElementById(rldefaultengine).checked=true;
</script>
