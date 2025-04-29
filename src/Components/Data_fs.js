function data_fs(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {
                    id: 1,
                    name: "Awesome Soft Hat",
                    name_category: "Thời trang nam",
                    code: "19331-4141",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94tkO8QAo3kXzYr6TnLkDBUpQRJJ8UH7qDQ&s",
                    price: "788.00",
                    old_price: "529.00",
                },
                {
                    id: 2,
                    name: "Elegant Cotton Shirt",
                    name_category: "Thời trang nữ",
                    code: "29381-5141",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSlL5_N6bnMgjSmMn2wN1034XpMoA-60qZA&s",
                    price: "450.00",
                    old_price: "600.00",
                },
                {
                    id: 3,
                    name: "Modern Wooden Shoes",
                    name_category: "Giày dép",
                    code: "48291-7852",
                    image: "https://www.mecaworks.com/wp-content/uploads/2023/05/2_1_a3ec15c5-fe0f-4f5c-96b7-a341178dac7f.jpg",
                    price: "320.00",
                    old_price: "400.00",
                },
                {
                    id: 4,
                    name: "Handcrafted Steel Watch",
                    name_category: "Phụ kiện",
                    code: "58293-1245",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7LpvKdcC5T_mwnrtT5gURWNHSmfWys_6IQ&s",
                    price: "999.00",
                    old_price: "1299.00",
                },
                {
                    id: 5,
                    name: "Stylish Leather Bag",
                    name_category: "Thời trang nữ",
                    code: "78219-4521",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3M359-6wsgYI-jyit-hWIoJmvt_VlhGrCw&s",
                    price: "1200.00",
                    old_price: "1400.00",
                },
                {
                    id: 6,
                    name: "Durable Cotton Socks",
                    name_category: "Phụ kiện",
                    code: "88213-1542",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdipNyvdS3XCABFcA4gsV5wcPTHsJtLx370Q&s",
                    price: "30.00",
                    old_price: "50.00",
                },
                {
                    id: 7,
                    name: "Trendy Sports Jacket",
                    name_category: "Thời trang nam",
                    code: "98124-3215",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2SJ9vvY76D-8wJNdtzycsNcsxV4HfwRsZw&s",
                    price: "850.00",
                    old_price: "950.00",
                },
                {
                    id:8,
                    name: "Comfortable Wool Scarf",
                    name_category: "Phụ kiện",
                    code: "39215-7845",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOO-qeoGZ3_6xnyTZ8BBNb_tIuBcn22hH7PQ&s",
                    price: "150.00",
                    old_price: "200.00",
                },
                {
                    id: 9,
                    name: "Casual Canvas Backpack",
                    name_category: "Balo, Túi xách",
                    code: "58124-7841",
                    image: "https://m.media-amazon.com/images/I/51nFKIAwx3L.jpg",
                    price: "450.00",
                    old_price: "500.00",
                },
                {
                    id: 10,
                    name: "Intelligent Granite Pants",
                    name_category: "Thời trang nam",
                    code: "81541",
                    image: "https://images.asos-media.com/products/jack-jones-intelligence-ace-carrot-fit-linen-pants-in-stone/203294217-4?$n_640w$&wid=513&fit=constrain",
                    price: "13.00",
                    old_price: "729.00",
                }
            ];
            return products;
        default:
            return [];
    }
}

export default data_fs;
