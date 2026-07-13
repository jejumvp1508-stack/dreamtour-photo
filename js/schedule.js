/*
  =====================================================================
   일정(타임테이블) 페이지 렌더링 (schedule.js)
  =====================================================================
  ✅ 세로 타임라인 + 클릭하면 펼쳐지는 아코디언 형태로 렌더링합니다.
  ✅ 일정 내용 자체를 바꾸려면 js/content.js 의 schedule 배열을 수정하세요.
  =====================================================================
*/

function scheduleItemHtml(item, index) {
  const chips = [];
  if (item.difficulty) chips.push('<span class="info-chip chip-difficulty">난이도 ' + escapeHtml(item.difficulty) + "</span>");
  if (item.distance) chips.push('<span class="info-chip chip-distance">🚶 ' + escapeHtml(item.distance) + "</span>");
  if (item.meal && item.meal.hasAllergyInfo) chips.push('<span class="info-chip chip-allergy">⚠️ 알레르기 주의</span>');
  if (item.meal && item.meal.vegetarianOption) chips.push('<span class="info-chip chip-veg">🥗 채식 옵션</span>');

  let mealHtml = "";
  if (item.meal) {
    mealHtml =
      '<div class="recommend-box" style="background:var(--color-danger-bg);">' +
      '<div class="rec-title" style="color:#991b1b;">🍽️ 식사 안내</div>' +
      (item.meal.allergyNote ? "<div>" + escapeHtml(item.meal.allergyNote) + "</div>" : "") +
      (item.meal.vegetarianOption
        ? '<div style="margin-top:4px; color:#166534; font-weight:700;">' + escapeHtml(item.meal.vegetarianOption) + "</div>"
        : "") +
      "</div>";
  }

  let recommendHtml = "";
  if (item.freeTimeRecommendation && item.freeTimeRecommendation.length) {
    recommendHtml =
      '<div class="recommend-box">' +
      '<div class="rec-title">✨ 추천 동선 (우선순위 순)</div>' +
      "<ol>" +
      item.freeTimeRecommendation.map((r) => "<li>" + escapeHtml(r) + "</li>").join("") +
      "</ol>" +
      "</div>";
  }

  const travelHtml = item.travelTimeToNext
    ? '<div class="travel-next">🚌 다음 장소까지: ' + escapeHtml(item.travelTimeToNext) + "</div>"
    : "";

  return (
    '<div class="timeline-item" id="schedule-item-' + item.id + '">' +
    '<div class="timeline-card">' +
    '<button class="timeline-head" onclick="this.closest(\'.timeline-item\').classList.toggle(\'open\')">' +
    '<div class="time-box"><div class="time">' + escapeHtml(item.time) + "</div>" +
    (item.endTime ? '<div class="time-end">~' + escapeHtml(item.endTime) + "</div>" : "") +
    "</div>" +
    '<div class="head-main">' +
    '<div class="title">' + escapeHtml(item.title) + "</div>" +
    '<div class="loc">' + escapeHtml(item.location) + "</div>" +
    "</div>" +
    '<span class="chevron">▾</span>' +
    "</button>" +
    '<div class="timeline-body"><div class="timeline-body-inner">' +
    (item.description ? '<div class="desc">' + escapeHtml(item.description) + "</div>" : "") +
    (chips.length ? '<div class="info-row">' + chips.join("") + "</div>" : "") +
    mapButtonHtml(item.mapUrl, "이 장소 지도 보기") +
    mealHtml +
    recommendHtml +
    travelHtml +
    "</div></div>" +
    "</div>" +
    "</div>"
  );
}

// 현재 시각 기준으로 "다음 일정" 을 계산합니다 (당일 참가자가 스크롤하면서 확인하기 쉽도록)
function findNextScheduleItem(schedule) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  for (const item of schedule) {
    const [h, m] = item.time.split(":").map(Number);
    if (h * 60 + m >= nowMinutes) return item;
  }
  return null; // 오늘 일정이 모두 지난 경우
}

document.addEventListener("DOMContentLoaded", function () {
  const c = window.CONTENT;
  const root = document.getElementById("schedule-content");

  if (!c.schedule || !c.schedule.length) {
    root.innerHTML = '<p style="color:var(--color-muted);">등록된 일정이 없습니다.</p>';
    return;
  }

  root.innerHTML = '<div class="timeline">' + c.schedule.map(scheduleItemHtml).join("") + "</div>";

  // --- "다음 일정" 스티키 바 세팅 ---
  const bar = document.getElementById("next-schedule-bar");
  const nextItem = findNextScheduleItem(c.schedule);
  if (nextItem) {
    bar.innerHTML =
      '<span class="tag">다음 일정</span>' +
      "<span>" + escapeHtml(nextItem.time) + " · " + escapeHtml(nextItem.title) + "</span>";
  } else {
    bar.innerHTML = '<span class="tag">오늘 일정</span><span>모든 일정이 종료되었습니다. 수고하셨습니다!</span>';
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY > 120) bar.classList.add("show");
    else bar.classList.remove("show");
  });
});
