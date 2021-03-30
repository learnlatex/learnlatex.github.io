---
layout: "lesson"
lang: "tr"
title: "LaTeX ile çalışmak"
description: "Bu ders TeX sistemlerinin ne olduğunu ve en yaygın sürümlerini açıklar, LaTeX ile birlikte kullanılan bazı metin düzenleyicilerden ve entegre düzenleyiciye sahip online sistemlerden bahseder."
toc-anchor-text: "LaTeX ile çalışmak"
toc-description: "TeX sistemleri ve LaTeX metin düzenleyicileri."
---

# LaTeX ile çalışmak

Birçok bilgisayar programının aksine LaTeX her şeyi bir arada içermez. Bunun yerine birlikte çalışan ayrı programlardan oluşur. Bu programları iki başlık altında gruplandırırsak:

- Bir TeX sistemi
- Bir metin düzenleyici (genellikle LaTeX için tasarlanır)

## TeX sistemleri

LaTeX ile çalışmak için bir adet TeX sistemine ihtiyaç vardır. TeX sistemi, LaTeX'in çalışması için arkaplanda gerekli olan program ve dosyaların tümüne denir, ancak çoğu zaman bunları direkt olarak çalıştırmazsınız.

Günümüzde revaçta olan iki adet TeX sistemi bulunmaktadır,
[MiKTeX](https://miktex.org/) ve [TeX Live](https://tug.org/texlive). İkisi de Windows, macOS ve Linux platformlarında kullanılabilir.
MiKTeX Windows üzerinde daha güçlü bir geçmişe sahip iken;
macOS için TeX Live, [MacTeX](http://www.tug.org/mactex/) isimli bir dağıtıma dahil edilmiştir.
Her iki sistemin de [kendilerine özgü avantajları](https://tex.stackexchange.com/questions/20036) bulunmaktadır. Bu konuda daha fazla bilgi ve tavsiyeye [LaTeX Project ](https://www.latex-project.org/get/)sayfasından erişilebilir. 

Eğer hangi sistemi kullanacağınız konusunda karasız iseniz; Bütün platformlarda kullanılabilir olması ve bazı performans getirilerinden dolayı TeX Live kullanmanızı öneriyoruz.

## Metin Düzenleyicileri

LaTeX dosyaları düz metinlerden oluşmaktadır, bu nedenle herhangi bir metin düzenleyicisi ile düzenlenebilirler. Ancak, tek tıkla dizgileme (typesetting), entegre PDF görüntüleyicileri ve sözdizim vurgulama (syntax highlighting) gibi özellikler barındırmalarından dolayı LaTeX ile birlikte kullanılmak üzere tasarlanmış bir metin düzenleyicisi kullanmak en uygunu olacaktır. Bütün modern LaTeX düzenleyicilerde bulunan ve çok kullanışlı olan SyncTeX özelliği tek tıkla kaynak kodunuzudan PDF'e gitmenizi sağlar.

Burada listeleyebileceğimizden çok daha fazla LaTeX düzenleyicisi bulunmaktadır, [StackExchange'de bulunan detaylı listeye](https://tex.stackexchange.com/questions/339/latex-editors-ides) göz atabilirsiniz.

Basit bir düzenleyici olan [TeXworks](https://tug.org/texworks), Windows ve Linux için TeX Live
ve MiKTeX ile birlikte gelmektedir.[TeXShop](https://pages.uoregon.edu/koch/texshop/)
ise MacTeX paketine dahil edilmiştir.

Hangi düzenleyiciyi kullanırsanız kullanın, düzenleyicinin TeX sistemini tanıyabilmesi ve hatasız bir kurulum gerçekleştirebilmesi için TeX sisteminin _ardından_ kurulmasını tavsiye ediyoruz. 

## Online çalışmak

Günümüzde bilgisayarınıza TeX sistemi ve LaTeX düzenleyici kurulumu yapmadan çalışmanıza olanak veren bazı etkili websiteleri bulunmaktadır. Bu websiteleri dosyalarınızı web arayüzünde düzenlemenize imkan verip, arkaplanda LaTeX'ı çalıştırarak üretilen PDF'i elde etmenizi sağlar.

Bu sitelerden bazıları LaTeX ile MS Word vb. kelime işlemcilerin özelliklerini birleştirirken bazıları da LaTeX kodlarınızı görmenize ve bilgisayarınızda elde edeceğiniz çalışma stiline yaklaşmanıza olanak verir.

Derslerde verilen örnekleri düzenlemeniz ve deneyebilmeniz için kullanıcı kaydı oluşturmadan da kullanabileceğiniz sistemlerden biri olan [TeXLive.net](https://texlive.net) kullanmaktayız. En iyi online düzenleyiciler eksiksiz bir çalışma ortamı sunmak adına kullanmadan önce kayıt olmanızı şart koşarlar, bu sayede çalışmalarınızı kayıt altında tutabilirsiniz. Örneklerimizi en popüler online LaTeX sistemlerinden biri olan [Overleaf](https://www.overleaf.com) ile kullanabilmeniz için de gerekli bağlantıları sağladık. Tabi ki bu online LaTeX sistemleri için örnekler çoğaltılabilir, bunlardan bir diğeri de [Papeeria](https://papeeria.com/).

## Alıştırma

Kendi bilgisayarınıza LaTeX kurulumu yaparak _veya_ online platformlardan birine kayıt olarak çalışmaya başlayabileceğiniz bir ortam edinin. Eğer bilgisayarınıza kurulum yapmayı planlıyorsanız bir metin düzenleyici de seçmeniz gerekecek: TeXworks veya TeX shop ile başlayıp, tecrübe kazandıkça diğer düzenliyicileri de değerlendirmenizi öneriyoruz.

[Verilen bütün örnekleri tarayıcınız üzerinde çalıştırabiliyor olacaksınız](help.md), ancak gerçek dökümanlar üzerinde de çalışabilmenize yardımcı olmak istiyoruz, bu nedenle şu an kendi sisteminizi hazırlamanın tam sırası.
