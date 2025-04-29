---
layout: "lesson"
lang: "tr"
title: "İlk LaTeX dökümanınız"
description: "Bu ders bir LaTeX dökümanının temel yapısını, nasıl PDF elde edeceğinizi ve LaTeX'i kontrol etmek için kullanılan özel karakterleri gösterir."
toc-anchor-text: "LaTeX dökümanları"
toc-description: "Bir dökümanın temel yapısı"
---

# İlk LaTeX dökümanınız

İlk LaTeX dosyamız çok basit olacak: amacımız size bir dökümanın nasıl göründüğü ve nasıl dizgilendiği göstermek. Ayrıca bu [`learnlatex.org` üzerindeki örnekleri nasıl kullanacağınızı](help) tecrübe etmek için ilk şansınız.

Eğer yerel bir LaTeX kurulumunuz var ise (kendi bilgisayarınıza kurulum yaptıysanız), metin düzenleyicinizde `ilk.tex` isimli bir dosya oluşturun ve aşağıdaki metni ya kopyala-yapıştır ile ya da yazarak bu dosyanın içeriğine taşıyın. Eğer online bir sistem kullanıyorsanız 'LaTeX Online' veya 'Overleaf ile aç' butonlarına tıklayabilirsiniz. Yerel kurulum yapmış olsanız bile online sistemleri de denemenizi öneriyoruz; farklı sistemlerin nasıl çalıştığını tecrübe etmek yararınıza olacaktır.

```latex
\documentclass{article}
\usepackage[T1]{fontenc}

\begin{document}
Merhaba dünya!

Bu benim ilk LaTeX dökümanım.
\end{document}
```
Dosyayı kaydedin ve PDF dökümanı elde etmek için dizginleyin; eğer yerel kuruluma sahipseniz basmanız gereken buton kullandığınız metin editörüne göre değişecektir. Çıktı olarak yukarıdaki yazı ve sayfa numarasından oluşan bir PDF elde etmeniz gerekmekte; sayfa numaraları LaTeX tarafından otomatik olarak eklenir.

`ilk.pdf` dosyasını dilediğiniz PDF görüntüleyicisi ile inceleyebilirsiniz. Bizce harika görünüyor, tebrikler!

## Hatalarla başaçıkmak

Hatalar günlük hayatın bir parçası.

Öncelikle yukarıda verilen her satırı tamamen aynı şekilde yazdığınızdan emin olun.
Bazen küçük görünen farklılıklar çıktıda büyük değişikliklere, hatta dökümanın çalışmamasına sebep olabilmekte.
Eğer problemi çözemiyorsanız yukarıdaki satırları yeniden kopyalayıp yapıştırmayı deneyin.

Eğer dizgilemeniz soru işareti ile bitiyorsa sırasıyla `x` ve `<Enter>` tuşlarına basarak çıkabilirsiniz.

LaTeX'in verdiği hata mesajları yardımcı olabilmeleri için tasarlanmıştır ancak kelime işlemcilerdeki mesajlardan farklıdırlar. Bazı düzenleyiciler (text editor) hata mesajının tümünü görüntülemeyi zorlaştırır, bu nedenle önemli detayları kaçırabilirsiniz. LaTeX her zaman yaptığı işlerin kaydını tutar, bu kayıtlara `.log` uzantılı metin dosyasından ulaşılabilir. Bu dosyada karşılaştığınz hataların tümünü görebilirsiniz, bir sorun yaşadığınız zaman uzman LaTeX kullanıcıları sizden log dosyanızın bir kopyasını isteyecektir.

## Ne öğrendiniz?

İlk döküman temel kavramları göstermekte.
LaTeX dökümanları metin ve komutların birleşiminden oluşur.
Komutlar ters eğik çizgi ile başlar
ve bazen süslü parantezler içinde argümanlar içerirler
(veya bazen köşeli parantez içinde opsiyonel argümanlar).
Sonrasında ise LaTeX'e dosyanızı dizgilemesini söyleyerek PDF çıktısı elde edersiniz.

Bütün LaTeX dosyaları `\begin{document}` ve tamamlayıcısı olan `\end{document}` komutlarını içerir.
Bu iki komut arasında kalan alan ise içeriğinizin yer aldığı alandır ve *gövde (document body)* olarak adlandırılır.
Bu örnekte gövde iki paragraftan oluşmaktadır (LaTeX'de paragraflar bir veya daha fazla
satır boşluğu ile ayrılır).
`\begin{document}` komutundan önce gelen alan ise  *giriş (preamble)* olarak adlandırılır,
sayfa düzenine yön veren komutlar bu alanda yer alır.
`\usepackage` komutu ise [bir sonraki derste](lesson-06) anlatılmış olup, bu sitedeki
pek çok örnekte font kodlaması için kullanılmıştır.

LaTeX'de farklı `\begin{...}` ve `\end{...}` çiftleri de bulunmaktadır; bunlara ise
*ortam (environment)* ismi verilmiştir.
Bu komutların birbiri ile eşleştirilmesi çok önemlidir, yani her bir `\begin{x}` komutu için `\end{x}` komutu bulunmak zorundadır.
İç içe geçmeleri durumunda ise `\begin{x} ... \begin{y}` komutlarına karşılık sırasıyla `\end{y} ... \end{x}` komutları olmak zorundadır.

LaTeX dosyalarına `%` işaretiyle başlayacak şekilde yorumlarımızı da ekleyebiliriz; haydi dökümanın yapısını göstermek için
bu özelliği kullanalım:

```latex
\documentclass[a4paper,12pt]{article} % Döküman tipi, verilen opsiyonel argümanlarla birlikte
% Select T1 font encoding: suitable for Western European Latin scripts
\usepackage[T1]{fontenc}
% A comment in the preamble
\begin{document}
% Bu bir   yorum   satırı 
Bu da dipnot  içeren basit bir döküman\footnote{merhaba dünya!}.

Burası da yeni bir paragraf.
\end{document}
```
Görebileceğiniz üzere yukarıda iki adet paragrafımız var. Bunu sağlamak için boş
satırın nasıl kullanıldığına dikkat edin. Ayrıca, birden fazla yazılan boşluk
karakterinin ise tekmişcesine algılandığını da gözden kaçırmayın.

Bazı durumlarda satır kırılımı yaşamayacak istenen bir boşluk kullanmak isteyebilirsiniz.
LaTeX ile `~` kullanarak bunu elde edebiliriz. Bu karakter arasinda yazıldığı iki metin
arasında boşluk karakteri ekler. Bu özellik dersin ilerleyen kısımlarında çapraz başvuru
(cross reference) kullanmaya başladığımız zaman çok daha kullanışlı olacak.

## Özel karakterler

Muhtemelen şimdiye kadar ``\``, `{` ve `}` karakterlerinin LaTeX için özel bir anlam ifade
ettiğini anlamışsınızdır.
``\`` karakteri LaTeX'e verilen bir komutun başında yer alır. Süslü parantezler `{` ve `}` 
ise _zorunlu argümanların_ gösterimi için kullanılır.

Bunlar dışında bazı özel karakterler daha bulunmaktadır, az önce gördüğümüz istenen boşluk
`~` karakteri buna bir örnek. Bu karakterlerin neredeyse hepsinin normal metinlerde _çok_ az
rastlanan karakterler olmalarından dolayı özel anlamlar onlara verilmiştir. Eğer bu karakterlerden
bazılarını metinde kullanmanız gerekirse [detaylar kısmında](more-03) konuyla ilgili daha fazla
bilgiye erişebilirsiniz. 

## Alıştırma

Online düzenleme ve dizgileme platformları ile tecrübe edinin; dizgilemek için
gerekli butona tıklayın ve çıktıyı görüntüleyin, sonrasında dökümanda değişiklikler
yapın ve tekrar dizgileyin.

İlk dökümanınıza metin eklemeyi deneyin, dökümanı dizgileyin ve PDF dosyanızda
elde ettiğiniz değişiklikleri gözlemleyin. Farklı paragraflar yazın ve kelimeler
arasında değişken sayıda boşluk bırakın. Düzenleyicinizin nasıl çalıştığını keşfedin;
kaynak kodunuza tıklayın ve burada yer alan bir satırın PDF üzerindeki karşılığına
nasıl gideceğinizi öğrenin. Biraz istenen boşluk (hard-space) ekleyip satır geçişlerine
(line breaking) olan etkilerini gözlemleyin.


