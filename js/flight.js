/*
  =====================================================================
   항공권 조회 페이지 렌더링 (flight.js)
  =====================================================================
  ✅ js/content.js 의 flight.records 배열에서 참가자가 입력한 성함과
     일치하는 항목을 찾아 항공편/예약번호를 보여줍니다.
  ✅ 항공 정보 입력 폼 링크와 명단은 편집기(editor.html)의 "항공권 정보"
     패널에서 관리합니다.
  =====================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
  const c = window.CONTENT;
  const root = document.getElementById("flight-content");
  const flight = c.flight || { formUrl: "", notice: "", records: [] };
  const records = flight.records || [];

  let html = "";
  if (flight.notice) {
    html += '<div class="card"><div class="flight-notice">' + escapeHtml(flight.notice) + "</div></div>";
  }
  if (flight.formUrl) {
    html +=
      '<a class="btn btn-primary flight-form-link" href="' + escapeHtml(flight.formUrl) +
      '" target="_blank" rel="noopener noreferrer">✈️ 항공 정보 입력하러 가기 (구글폼 열기)</a>';
  }

  if (!records.length) {
    html += '<div class="card"><p class="flight-empty">아직 등록된 항공권 명단이 없습니다. 준비되는 대로 이 페이지에서 조회하실 수 있어요.</p></div>';
    root.innerHTML = html;
    return;
  }

  html +=
    '<div class="card">' +
    '<div class="section-title">🔍 내 항공권 조회</div>' +
    '<div class="flight-search">' +
    '<input type="text" id="flight-search-input" placeholder="성함을 입력하세요" />' +
    '<button type="button" class="btn btn-accent" id="flight-search-btn">조회</button>' +
    "</div>" +
    '<div id="flight-search-result"></div>' +
    "</div>";

  root.innerHTML = html;

  const input = document.getElementById("flight-search-input");
  const btn = document.getElementById("flight-search-btn");
  const resultEl = document.getElementById("flight-search-result");

  function legHtml(label, r, prefix) {
    const date = r[prefix + "Date"];
    const airline = r[prefix + "Airline"];
    const time = r[prefix + "Time"];
    const loc = r[prefix + "Location"];
    const flightNo = r[prefix + "Flight"];
    const reservation = r[prefix + "Reservation"];
    if (!date && !flightNo) return "";
    return (
      '<div class="flight-leg">' +
      '<div class="flight-leg-label">' + label + "</div>" +
      '<div class="flight-leg-main">' + escapeHtml(date) + " · " + escapeHtml(airline) + " " + escapeHtml(flightNo) + "</div>" +
      '<div class="flight-leg-sub">' + escapeHtml(loc) + " 출발 · " + escapeHtml(time) + "</div>" +
      (reservation ? '<div class="flight-reservation">예약번호 <b>' + escapeHtml(reservation) + "</b></div>" : "") +
      "</div>"
    );
  }

  function renderResults(query) {
    const q = query.trim();
    if (!q) {
      resultEl.innerHTML = '<p class="flight-empty">성함을 입력하고 조회 버튼을 눌러주세요.</p>';
      return;
    }
    let matches = records.filter((r) => (r.name || "").trim() === q);
    if (!matches.length) {
      matches = records.filter((r) => (r.name || "").includes(q));
    }
    if (!matches.length) {
      resultEl.innerHTML = '<p class="flight-empty">일치하는 예약을 찾지 못했어요. 성함을 다시 확인해주세요.</p>';
      return;
    }
    resultEl.innerHTML = matches
      .map(
        (r) =>
          '<div class="flight-result-card">' +
          '<div class="flight-result-name">' + escapeHtml(r.name) + "</div>" +
          legHtml("🛫 출발편", r, "departure") +
          legHtml("🛬 복귀편", r, "return") +
          "</div>"
      )
      .join("");
  }

  btn.addEventListener("click", () => renderResults(input.value));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") renderResults(input.value);
  });
});
