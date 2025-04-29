import React, { useState } from "react";

const menu = [
  { name: "Cà phê sữa", price: 12000 },
  { name: "Cà phê đá", price: 10000 },
  { name: "Sting dâu", price: 8000 },
  { name: "Trà đá", price: 2000 },
];

export default function Menu() {
  const [money, setMoney] = useState("");

  const [selected, setSelected] = useState([]);

  const [result, setResult] = useState("");

  // Khi người dùng tick chọn/bỏ chọn món
  function toggleSelect(itemName) {
    if (selected.includes(itemName)) {
      setSelected(selected.filter(name => name !== itemName)); // Nếu đã chọn thì bỏ chọn
    } else {
      setSelected([...selected, itemName]); // Nếu chưa chọn thì thêm vào
    }
  }

  function pay() {
    let total = 0;
    for (let name of selected) {
      const item = menu.find(m => m.name === name);
      total += item.price;
    }

    if (Number(money) >= total) {
      setResult(`Thanh toán thành công! Tổng tiền: ${total.toLocaleString()}₫`);
    } else {
      setResult(`Không đủ tiền! Cần: ${total.toLocaleString()}₫. Vui lòng nhập lại.`);
      setMoney(""); 
    }
  }

  return (
    <div style={{ width: "400px", margin: "30px auto", padding: "20px", background: "#eef", borderRadius: "10px" }}>
      <h1 style={{ textAlign: "center" }}>MENU</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>Nhập số tiền hiện tại (₫):</label>
        <input
          type="number"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          placeholder="VD: 50000"
        />
      </div>

      <div style={{ background: "white", padding: "10px", borderRadius: "8px" }}>
        {menu.map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={selected.includes(item.name)}
                onChange={() => toggleSelect(item.name)}
              />
              {item.name}
            </label>
            <span>{item.price.toLocaleString()}₫</span>
          </div>
        ))}
      </div>

      <button
        onClick={pay}
        style={{ width: "100%", marginTop: "20px", background: "orange", padding: "10px", color: "white", fontWeight: "bold", borderRadius: "5px", border: "none" }}
      >
        Thanh toán
      </button>

      {result && (
        <div style={{ marginTop: "20px", textAlign: "center", color: "red" }}>
          {result}
        </div>
      )}
    </div>
  );
}
