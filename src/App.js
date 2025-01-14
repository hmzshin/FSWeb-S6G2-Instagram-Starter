/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import sahteVeri from "./sahte-veri";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [arama, setArama] = useState(null); // arama verilerini tutmak için değişken
  const gonderiyiBegen = (gonderiID) => {
    // const [gonderiId, setGonderiID] = useState(gonderiId);
    // setGonderiID(gonderiId + 1);
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */

    const guncelGonderi = gonderiler.map((gonderi) => {
      if (gonderiID === gonderi.id) {
        gonderi.likes = gonderi.likes + 1;
      }
      return gonderi;
    });

    setGonderiler(guncelGonderi);
  };

  const [inputDeğeri, setInputDeğeri] = useState("");

  const inputDegistir = (evt) => {
    const { value } = evt.target;
    setInputDeğeri(value);
  };

  const reset = (gonderiID) => {
    const yorumEkle = gonderiler.map((gonderi) => {
      if (gonderi.id == gonderiID) {
        gonderi.comments.unshift({
          id: 30,
          username: "teafıkasjd",
          text: inputDeğeri,
        });
      }
      return gonderi;
    });
    setGonderiler(yorumEkle);
  };

  return (
    <div className="App">
      <AramaCubugu />
      <Gonderiler
        gonderiyiBegen={gonderiyiBegen}
        gonderiler={gonderiler}
        reset={reset}
        inputDegistir={inputDegistir}
      />
    </div>
  );
};

export default App;
