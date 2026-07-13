/*
  =====================================================================
   사진업로드 페이지 렌더링 (upload.js)
  =====================================================================
  ✅ js/content.js 의 schedule 배열에서 photoUpload.enabled 가 true인
     활동만 모아서, 각각 사진 업로드 칸을 보여줍니다.
  ✅ 어떤 활동에 업로드를 받을지는 편집기(editor.html)의 "시간별 일정"
     패널에서 "📸 참가자에게 이 활동 사진 업로드 받기" 체크박스로 켜고 끕니다.
  =====================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  const c = window.CONTENT;
  const root = document.getElementById("upload-content");

  const uploadItems = (c.schedule || []).filter((item) => item.photoUpload && item.photoUpload.enabled);

  if (!uploadItems.length) {
    root.innerHTML = '<p style="color:var(--color-muted);">이번 회차는 사진 업로드가 필요한 활동이 없습니다.</p>';
    return;
  }

  uploadItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      '<div class="section-title">🕒 ' + escapeHtml(item.time) + " · " + escapeHtml(item.title) + "</div>" +
      (item.location ? '<p style="font-size:12.5px; color:var(--color-muted); margin-bottom:10px;">' + escapeHtml(item.location) + "</p>" : "");
    card.appendChild(buildUploadCard(item));
    root.appendChild(card);
  });
});
