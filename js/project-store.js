/*
  =====================================================================
   프로젝트(행사 초안) 저장소 (project-store.js)
  =====================================================================
  ✅ 이 파일은 여러 행사 초안을 브라우저(localStorage)에 저장해두고,
     projects.html(프로젝트 목록)과 editor.html(편집기)에서 공통으로
     불러다 쓰는 헬퍼 함수 모음입니다.
  ✅ localStorage는 "이 브라우저에만" 저장됩니다 — 다른 컴퓨터/브라우저와
     자동으로 공유되지 않습니다. 실제로 사이트에 반영하려면 지금처럼
     편집기의 "content.js 파일 저장" 버튼으로 다운로드해서 배포해야 합니다.
  =====================================================================
*/

const PROJECT_INDEX_KEY = "dreamtour_project_index";
const PROJECT_KEY_PREFIX = "dreamtour_project_";

function generateProjectId() {
  return "p" + Date.now() + Math.random().toString(36).slice(2, 7);
}

function loadProjectIndex() {
  try {
    return JSON.parse(localStorage.getItem(PROJECT_INDEX_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveProjectIndex(list) {
  localStorage.setItem(PROJECT_INDEX_KEY, JSON.stringify(list));
}

// 목록 화면에 보여줄 정보(이름/날짜/수정시각)와 함께 프로젝트 메타 목록을 최신순으로 반환합니다.
function listProjects() {
  return loadProjectIndex().sort((a, b) => b.updatedAt - a.updatedAt);
}

function getProjectContent(id) {
  try {
    return JSON.parse(localStorage.getItem(PROJECT_KEY_PREFIX + id));
  } catch (e) {
    return null;
  }
}

// 프로젝트 내용을 저장하고, 목록 화면용 메타데이터(이름/날짜/수정시각)도 함께 갱신합니다.
function saveProjectContent(id, contentObj) {
  localStorage.setItem(PROJECT_KEY_PREFIX + id, JSON.stringify(contentObj));

  const idx = loadProjectIndex();
  const label = (contentObj.eventName || "").trim() || "(제목 없음)";
  const dateDisplay = contentObj.dateDisplay || contentObj.date || "";
  const now = Date.now();

  const existing = idx.find((p) => p.id === id);
  if (existing) {
    existing.label = label;
    existing.dateDisplay = dateDisplay;
    existing.updatedAt = now;
  } else {
    idx.push({ id, label, dateDisplay, updatedAt: now, createdAt: now });
  }
  saveProjectIndex(idx);
}

function deleteProject(id) {
  localStorage.removeItem(PROJECT_KEY_PREFIX + id);
  saveProjectIndex(loadProjectIndex().filter((p) => p.id !== id));
}

// "몇 분 전" 처럼 사람이 읽기 쉬운 상대 시각 문구로 바꿔줍니다.
function formatRelativeTime(timestamp) {
  const diffSec = Math.round((Date.now() - timestamp) / 1000);
  if (diffSec < 60) return "방금 전";
  const diffMin = Math.round(diffSec / 60);
  if (diffMin < 60) return diffMin + "분 전";
  const diffHour = Math.round(diffMin / 60);
  if (diffHour < 24) return diffHour + "시간 전";
  const diffDay = Math.round(diffHour / 24);
  return diffDay + "일 전";
}
