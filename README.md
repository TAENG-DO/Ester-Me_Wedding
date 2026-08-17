<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <!-- 모바일 화면 비율 맞춤 설정 (필수!) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>우리 결혼합니다</title>
  
  <style>
    /* 깔끔한 모바일 기본 스타일링 */
    body {
      font-family: 'Noto Serif KR', serif, sans-serif;
      margin: 0; padding: 0;
      background-color: #fcfbf9;
      color: #333;
      text-align: center;
    }
    .container { max-width: 430px; margin: 0 auto; padding: 20px; background: #fff; }
    h1 { font-size: 20px; color: #8a735c; margin-top: 40px; }
    .main-img { width: 100%; border-radius: 8px; margin: 20px 0; }
    .info-text { line-height: 1.8; font-size: 15px; margin: 30px 0; }
    .account-box { background: #f7f5f0; padding: 15px; border-radius: 8px; margin: 20px 0; }
    button {
      background: #8a735c; color: white; border: none; 
      padding: 8px 16px; border-radius: 4px; cursor: pointer;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- 메인 타이틀 & 사진 -->
    <h1>결혼합니다</h1>
    <!-- 가지고 계신 사진 파일명으로 변경하세요 (예: main.jpg) -->
    <img src="main.jpg" alt="메인 사진" class="main-img">

    <!-- 신랑 신부 이름 & 예식 일시 -->
    <p style="font-size: 18px; font-weight: bold;">홍길동 & 김영희</p>
    <p class="info-text">
      2026년 10월 24일 토요일 오후 2시<br>
      OO웨딩홀 3층 그랜드홀
    </p>

    <hr style="border: 0.5px solid #eee; margin: 30px 0;">

    <!-- 초대의 글 -->
    <div class="info-text">
      서로가 마주보며 다져온 사랑을<br>
      이제 한 곳을 바라보며 함께 걸어가려 합니다.<br>
      저희의 뜻깊은 시작을 축복해 주시면 감사하겠습니다.
    </div>

    <!-- 오시는 길 -->
    <h3>📍 오시는 길</h3>
    <p class="info-text">
      서울시 강남구 테헤란로 123 OO웨딩홀<br>
      (지하철 2호선 OO역 3번 출구 도보 5분)
    </p>

    <!-- 마음 전하실 곳 (계좌번호) -->
    <h3>💌 마음 전하실 곳</h3>
    <div class="account-box">
      <p>신랑측 계좌: OO은행 123-456-78901 (홍길동)</p>
      <button onclick="copyToClipboard('123-456-78901')">계좌번호 복사</button>
    </div>

  </div>

  <!-- 간단한 복사기능 자바스크립트 -->
  <script>
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('계좌번호가 복사되었습니다!');
      });
    }
  </script>
</body>
</html>
