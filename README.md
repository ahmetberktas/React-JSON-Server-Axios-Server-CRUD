<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Server CRUD</h1>

  <h2>Genel Bakış</h2>
  <p>Bu proje, bir sunucuya bağlı olarak çalışan basit bir To-Do List uygulamasıdır. Kullanıcılar, yapılacak işleri ekleyebilir, düzenleyebilir, silebilir ve tamamlanma durumlarını güncelleyebilirler. Uygulama, React kullanılarak geliştirilmiştir ve Axios ile bir backend sunucusuna bağlanır.</p>

  <h2>Özellikler</h2>
  <ul>
    <li><strong>Listeleme:</strong> Sunucudan alınan To-Do öğeleri listelenir.</li>
    <li><strong>Ekleme:</strong> Yeni bir To-Do öğesi ekleyebilirsiniz.</li>
    <li><strong>Düzenleme:</strong> Mevcut bir To-Do öğesinin başlığını ve durumunu düzenleyebilirsiniz.</li>
    <li><strong>Silme:</strong> Mevcut bir To-Do öğesini silebilirsiniz.</li>
    <li><strong>Durum Güncelleme:</strong> To-Do öğesinin durumunu ("Önemli", "Günlük", "İş") seçebilirsiniz.</li>
  </ul>

  <h2>Kullanılan Teknolojiler</h2>
  <ul>
    <li><strong>React:</strong> Kullanıcı arayüzünü oluşturmak için kullanıldı.</li>
    <li><strong>Axios:</strong> Sunucu ile iletişim kurmak için HTTP istekleri gerçekleştirdi.</li>
    <li><strong>UUID:</strong> Her bir To-Do öğesine benzersiz bir kimlik (ID) atamak için kullanıldı.</li>
    <li><strong>Bootstrap:</strong> Kullanıcı arayüzünü stilize etmek için kullanıldı.</li>
  </ul>

  <h3>Kurulum</h3>
  <ol>
    <li>Depoyu klonlayın:
      <pre><code>git clone https://github.com/ahmetberktas/React-JSON-Server-Axios-Server-CRUD.git</code></pre>
    </li>
    <li>Proje dizinine gidin:
      <pre><code>cd React-JSON-Server-Axios-Server-CRUD</code></pre>
    </li>
    <li>Gerekli paketleri yükleyin:
        <pre><code>npm install</code></pre>
    </li>
    <li>Uygulamayı çalıştırın:
        <pre><code>npm start</code></pre>
    </li>
  </ol>

  <p><strong>Not:</strong> Projenin çalışabilmesi için <code>http://localhost:3000/todos</code> adresinde çalışan bir JSON server'ın bulunması gerekiyor. Bu sunucuyu başlatmak için aşağıdaki komutu kullanabilirsiniz:</p>
<pre><code>npx json-server --watch db.json --port 3000</code></pre>

<h2>Dosya Yapısı</h2>
    <ul>
        <li><strong>App.jsx:</strong> Ana bileşen. Uygulamanın temel yapısını oluşturur ve To-Do öğelerini listelemek için gerekli olan işlemleri yapar.</li>
        <li><strong>Form.jsx:</strong> Yeni bir To-Do öğesi eklemek için kullanılan form bileşeni.</li>
        <li><strong>ListItem.jsx:</strong> Her bir To-Do öğesini listeleyen ve düzenleme/silme işlemlerini gerçekleştiren bileşen.</li>
        <li><strong>Loading.jsx:</strong> To-Do öğeleri yüklenirken gösterilen yükleme bileşeni.</li>
        <li><strong>constants.js:</strong> To-Do durumlarına karşılık gelen metin ve renk bilgilerini içerir.</li>
        <li><strong>helpers.js:</strong> Yardımcı fonksiyonları içerir, örneğin tarih formatlama.</li>
    </ul>

  <h2>Lisans</h2>
  <p>Bu proje MIT Lisansı altında lisanslanmıştır.</p>

</body>
</html>
