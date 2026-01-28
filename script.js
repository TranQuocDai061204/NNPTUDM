fetch("https://api.escuelajs.co/api/v1/products")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("products");
    data.forEach(product => {
      const item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>Giá:</strong> ${product.price} USD</p>
        <img src="${product.images[0]}" alt="${product.title}" />
      `;
      container.appendChild(item);
    });
  })
  .catch(error => console.error("Lỗi khi tải dữ liệu:", error));