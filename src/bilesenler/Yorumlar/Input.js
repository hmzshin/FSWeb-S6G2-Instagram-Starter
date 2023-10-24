import React, { useState } from "react"; /* ADIM 0 */
import sahteVeri from "../../sahte-veri";

export default function Input(props) {
  const { post } = props;

  const [inputDeğeri, setInputDeğeri] = useState("");

  const inputuDeğiştir = (evt) => {
    const { value } = evt.target;
    setInputDeğeri(value);
  };

  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const reset = (gonderiID) => {
    const gonderiEsle = gonderiler.map((gonderi) => {
      if (gonderi.id == gonderiID) {
        gonderi.comments.unshift({
          id: 30,
          username: "teafıkasjd",
          text: { inputDeğeri },
        });
      }
      return gonderi;
    });
    setGonderiler(gonderiEsle);
  };

  console.log("asdasdasdasdadsasd", gonderiler);

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.3em",
    color: inputDeğeri.length <= 10 ? "royalblue" : "crimson",
  };

  return (
    <div>
      <input id="input" type="text" onChange={inputuDeğiştir} />
      <button id="resetInput" onClick={() => reset(post)}>
        Yorum yap
      </button>
    </div>
  );
}
