import { useState } from "react";

const pathologies = [
  {
    title: "Blépharite",
    content: "Appliquer des compresses chaudes..."
  }
];

export default function PaupiereApp() {
  const [openItem, setOpenItem] = useState(null);
  return (
    <div>
      <h1>Paupière App</h1>
      {pathologies.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => setOpenItem(openItem === idx ? null : idx)}>
            {item.title}
          </button>
          {openItem === idx && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
