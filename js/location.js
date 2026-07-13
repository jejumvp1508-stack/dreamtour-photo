/*
  =====================================================================
   오시는 길 / 지도 페이지 렌더링 (location.js)
  =====================================================================
  ✅ 지도는 구글맵 API 키 없이 쓸 수 있는 "간단 임베드" 방식을 사용합니다.
     (js/content.js 의 mapEmbedQuery 값을 지도에 검색할 장소명으로 사용)
  ✅ 장소 목록은 js/content.js 의 locations 배열 순서대로 번호가 매겨집니다.
     동선 순서를 바꾸고 싶으면 배열의 순서를 바꾸거나 order 값을 수정하세요.
  =====================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  const c = window.CONTENT;
  const root = document.getElementById("location-content");

  // ---------------- 구글맵 임베드 (API 키 불필요한 간단 embed 방식) ----------------
  let embedHtml = "";
  if (c.mapEmbedQuery) {
    const src = "https://maps.google.com/maps?q=" + encodeURIComponent(c.mapEmbedQuery) + "&output=embed";
    embedHtml =
      '<div class="map-embed-wrap">' +
      '<iframe src="' + src + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="집결지 지도"></iframe>' +
      "</div>";
  }

  // ---------------- 집결 정보 요약 ----------------
  let meetingHtml = "";
  if (c.meetingSummary) {
    meetingHtml =
      '<div class="card">' +
      '<div class="section-title">📍 집결 장소</div>' +
      '<div style="font-weight:800; font-size:15px;">' + escapeHtml(c.meetingSummary.location) + "</div>" +
      '<div style="font-size:13px; color:var(--color-muted); margin:4px 0 12px;">집결 시각 ' + escapeHtml(c.meetingSummary.time) + "</div>" +
      mapButtonHtml(c.meetingSummary.mapUrl, "집결지 길찾기") +
      "</div>";
  }

  // ---------------- 오늘의 동선 (번호 마커 리스트) ----------------
  let routeHtml = "";
  if (c.locations && c.locations.length) {
    const sorted = [...c.locations].sort((a, b) => (a.order || 0) - (b.order || 0));
    routeHtml =
      '<div class="card">' +
      '<div class="section-title">🚩 오늘의 동선 (순서대로)</div>' +
      '<div class="route-list">' +
      sorted
        .map(
          (loc) =>
            '<div class="route-item">' +
            '<div class="marker">' + escapeHtml(loc.order) + "</div>" +
            '<div class="route-body">' +
            '<div class="route-name">' + escapeHtml(loc.name) + "</div>" +
            (loc.description ? '<div class="route-desc">' + escapeHtml(loc.description) + "</div>" : "") +
            (loc.address ? '<div class="route-addr">📌 ' + escapeHtml(loc.address) + "</div>" : "") +
            mapButtonHtml(loc.mapUrl, "이 장소 길찾기") +
            "</div>" +
            "</div>"
        )
        .join("") +
      "</div>" +
      "</div>";
  }

  root.innerHTML = embedHtml + meetingHtml + routeHtml;
});
