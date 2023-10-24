import React, { useState } from "react"; /* ADIM 0 */
import sahteVeri from "../../sahte-veri";

export default function Input(props) {
  const { reset, gonderi, inputDegistir } = props;

  //   const [inputDeğeri, setInputDeğeri] = useState("");

  //   const inputuDeğiştir = (evt) => {
  //     const { value } = evt.target;
  //     setInputDeğeri(value);
  //   };

  //   const [gonderiler, setGonderiler] = useState(sahteVeri);
  //   const reset = (gonderiID) => {
  //     const yorumEkle = gonderiler.map((gonderi) => {
  //       if (gonderi.id == gonderiID) {
  //         gonderi.comments.push({
  //           id: 30,
  //           username: "teafıkasjd",
  //           text: inputDeğeri,
  //         });
  //       }
  //       return gonderi;
  //     });
  //     gonderiyiBegen();
  //     setGonderiler(yorumEkle);
  //   };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: "royalblue",
  };

  return (
    <div>
      <input id="input" type="text" onChange={inputDegistir} />
      <button id="resetInput" onClick={() => reset(gonderi.id)}>
        Yorum yap
      </button>
    </div>
  );
}
