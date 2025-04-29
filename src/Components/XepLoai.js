import React, { useState } from "react";

function XepLoai() {
    const [input, setInput] = useState({});
    const [diemTB, setDiemTB] = useState('');
    const [xepLoai, setXepLoai] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({
            ...values,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const average = (Number(input.diemToan) + Number(input.diemLy)) / 2;
        setDiemTB(average);

        if (average >= 9) {
            setXepLoai("Xuất sắc");
        } else if (average >= 8) {
            setXepLoai("Giỏi");
        } else if (average >= 7) {
            setXepLoai("Khá");
        } else if (average >= 6) {
            setXepLoai("Trung bình");
        } else if (average >= 5) {
            setXepLoai("Yếu");
        } else {
            setXepLoai("Kém");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nhập điểm toán: </label>
                    <input type="number" name="diemToan" value={input.diemToan || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Nhập điểm lý: </label>
                    <input type="number" name="diemLy" value={input.diemLy || ''} onChange={handleChange} />
                </div>
                <button>Submit</button>
            </form>

            <div>
                <h1>Điểm Trung Bình: {diemTB}</h1>
                <h1>Xếp Loại: {xepLoai}</h1>
            </div>
        </div>
    );
}

export default XepLoai;
 