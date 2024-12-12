// Chức năng thêm/xóa giỏ hàng
document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thêm vào giỏ hàng thành công!');
    });
});
// Xử lý nút "Thêm vào giỏ hàng"
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const productName = this.closest('.card').querySelector('.card-title').textContent;
      alert(`${productName} đã được thêm vào giỏ hàng!`);
    });
  });
  // Xử lý tìm kiếm
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn trang reload
    const query = document.getElementById('searchInput').value.toLowerCase();
  
    if (query.trim() === "") {
        alert("Vui lòng nhập từ khóa để tìm kiếm!");
        return;
    }
  
    // Ví dụ: Chuyển hướng tới trang sản phẩm với kết quả tìm kiếm
    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
  });