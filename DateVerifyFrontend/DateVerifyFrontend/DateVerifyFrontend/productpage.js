function showProductPage() {
  document.getElementById('scanner-page').classList.remove('active');
  document.getElementById('product-page').classList.add('active');
}

function markPass() {
  alert('Product Passed! ✅');
  // Later: Move to next page or record result
}

function markFail() {
  alert('Product Failed! ❌');
  // Later: Move to next page or record result
}
