// 페이지 로딩 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});


// 이미지 클릭 시 크게 보기
document.querySelectorAll(".gallery img").forEach((image) => {
  image.addEventListener("click", () => {
    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,.9)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";
    overlay.style.padding = "20px";

    const enlarged = document.createElement("img");

    enlarged.src = image.src;
    enlarged.style.maxWidth = "100%";
    enlarged.style.maxHeight = "90vh";
    enlarged.style.objectFit = "contain";

    overlay.appendChild(enlarged);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });

    document.body.appendChild(overlay);
  });
});
