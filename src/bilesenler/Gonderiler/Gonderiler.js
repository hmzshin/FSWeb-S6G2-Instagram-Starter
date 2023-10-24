import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler, reset, inputDegistir } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderiler.map((gonderi) => (
        <Gonderi
          gonderiyiBegen={gonderiyiBegen}
          gonderi={gonderi}
          reset={reset}
          inputDegistir={inputDegistir}
          key={gonderi.id}
        />
      ))}
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
