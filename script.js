// ====== Hàm tạo số ngẫu nhiên trong khoảng [min, max], làm tròn 1 chữ số ======
function randomIn(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

// ====== Lấy các phần tử HTML ======
const elTemp = document.getElementById("temp");
const elHum = document.getElementById("hum");
const elSoil = document.getElementById("soil");
const elDist = document.getElementById("dist");
const elSoilBar = document.getElementById("soilBar");
const elDistBar = document.getElementById("distBar");
const elSoilStatus = document.getElementById("soilStatus");
const elBulb = document.getElementById("bulb");
const elLightState = document.getElementById("lightState");
const elSwitch = document.getElementById("lightSwitch");

// ====== Cập nhật dữ liệu cảm biến giả lập ======
function capNhatCamBien() {
  const temp = randomIn(20, 35);    // °C
  const hum = randomIn(40, 90);     // %
  const soil = randomIn(10, 100);   // %
  const dist = randomIn(2, 400);    // cm

  elTemp.textContent = temp;
  elHum.textContent = hum;
  elSoil.textContent = soil;
  elDist.textContent = dist;

  // Thanh tiến trình
  elSoilBar.style.width = soil + "%";
  elDistBar.style.width = (dist / 400) * 100 + "%";

  // Đánh giá độ ẩm đất
  if (soil < 30) {
    elSoilStatus.textContent = "Đất khô - cần tưới nước";
  } else if (soil < 70) {
    elSoilStatus.textContent = "Đất đủ ẩm";
  } else {
    elSoilStatus.textContent = "Đất rất ẩm";
  }
}

// ====== Điều khiển đèn theo công tắc ======
function capNhatDen() {
  const bat = elSwitch.checked;
  elBulb.classList.toggle("on", bat);
  elLightState.textContent = bat ? "BẬT" : "TẮT";
}

elSwitch.addEventListener("change", capNhatDen);

// ====== Khởi động ======
capNhatCamBien();
capNhatDen();
setInterval(capNhatCamBien, 1000); // lặp lại mỗi 1000 ms = 1 giây
