/*
  =====================================================================
   [운영팀 전용] 행사 콘텐츠 데이터 파일
  =====================================================================
  이 파일은 editor.html(콘텐츠 편집기)에서 자동으로 생성되었습니다.
  editor.html을 열어 다시 수정하거나, 이 파일을 텍스트 편집기로 직접 열어
  큰따옴표 안의 값을 고쳐도 됩니다.
  =====================================================================
*/

window.CONTENT = {
  "eventName": "2026 드림투어 27회차",
  "eventSubtitle": "제주 드림투어",
  "date": "2026-07-15",
  "dateDisplay": "2026년 7월 15일 (수)",
  "sectionsEnabled": {
    "rainPlan": true,
    "staff": false,
    "meetingSummary": true,
    "checklist": true,
    "faq": true,
    "survey": true
  },
  "heroImage": "images/IMG_2513.JPG",
  "heroTagline": "제주의 바다와 숲을 함께 걷는 하루",
  "notice": {
    "active": true,
    "text": "우천 시 실내 프로그램으로 대체됩니다. 당일 변동 공지는 단체 카톡방을 확인해주세요."
  },
  "rainPlan": {
    "hasIndoorAlternative": true,
    "description": "우천 시 도보 프로그램은 취소되고, 드림타워 3층 실내 체험관 프로그램으로 대체 진행됩니다. 우산은 개인 지참 부탁드립니다.",
    "decisionTime": "당일 오전 8시경, 기상 상황에 따라 최종 공지"
  },
  "contact": {
    "name": "김민지",
    "role": "현장 총괄 담당자",
    "phone": "010-1234-5678"
  },
  "staff": [
    {
      "name": "김민지",
      "role": "현장 총괄",
      "phone": "010-1234-5678",
      "photo": "images/staff-1.jpg"
    },
    {
      "name": "박서준",
      "role": "도보 프로그램 가이드",
      "phone": "010-2345-6789",
      "photo": "images/staff-2.jpg"
    },
    {
      "name": "이하늘",
      "role": "버스/이동 담당",
      "phone": "010-3456-7890",
      "photo": "images/staff-3.jpg"
    }
  ],
  "meetingSummary": {
    "time": "13:00",
    "location": "드림타워 지하 2층 주차장 입구",
    "mapUrl": "https://maps.google.com/?q=드림타워+지하주차장"
  },
  "schedule": [
    {
      "id": 1,
      "time": "13:00",
      "endTime": "13:20",
      "title": "드림타워 버스 주차장 집결",
      "location": "드림타워 지하 2층 주차장 입구",
      "mapUrl": "https://maps.google.com/?q=드림타워+지하주차장",
      "description": "출발 전 명단 확인 및 인원 점검을 진행합니다. 늦어도 12시 50분까지는 도착해주세요.",
      "travelTimeToNext": "버스 이동 약 20분",
      "difficulty": null,
      "distance": null,
      "meal": null,
      "freeTimeRecommendation": null,
      "photo": null,
      "photoUpload": {
        "enabled": false
      }
    },
    {
      "id": 2,
      "time": "13:40",
      "endTime": "15:30",
      "title": "곶자왈 숲길 트레킹",
      "location": "제주 곶자왈 도립공원",
      "mapUrl": "https://maps.google.com/?q=제주+곶자왈+도립공원",
      "description": "울창한 원시림 숲길을 따라 가볍게 걷는 코스입니다. 편한 신발과 모자를 착용해주세요. 중간에 20분 휴식 시간이 있습니다.",
      "travelTimeToNext": "버스 이동 약 15분",
      "difficulty": "보통",
      "distance": "총 도보 2.3km",
      "meal": null,
      "freeTimeRecommendation": null,
      "photo": null,
      "photoUpload": {
        "enabled": true
      }
    },
    {
      "id": 3,
      "time": "15:45",
      "endTime": "17:00",
      "title": "제주 해녀의 집 - 자유 관람 및 간식",
      "location": "제주 해녀의 집",
      "mapUrl": "https://maps.google.com/?q=제주+해녀의집",
      "description": "해녀 문화 전시 관람 후 자유 시간을 가집니다. 근처 해안 산책로도 함께 즐겨보세요.",
      "travelTimeToNext": "도보 이동 약 5분",
      "difficulty": "쉬움",
      "distance": "총 도보 0.8km",
      "meal": null,
      "freeTimeRecommendation": [
        "1순위: 해녀 전시관 관람 (15분 소요)",
        "2순위: 해안 산책로 사진 촬영 포인트 방문",
        "3순위: 인근 카페에서 휴식 (도보 3분 거리)"
      ],
      "photo": null,
      "photoUpload": {
        "enabled": false
      }
    },
    {
      "id": 4,
      "time": "17:10",
      "endTime": "18:30",
      "title": "저녁 식사 - 제주 흑돼지 전문점",
      "location": "돈사돈 본점",
      "mapUrl": "https://maps.google.com/?q=돈사돈+본점",
      "description": "제주 흑돼지 구이와 지역 반찬으로 저녁 식사를 진행합니다.",
      "travelTimeToNext": null,
      "difficulty": null,
      "distance": null,
      "meal": {
        "hasAllergyInfo": true,
        "allergyNote": "돼지고기, 새우젓(갑각류), 밀가루(부침류)가 포함되어 있습니다. 알레르기가 있으신 분은 사전에 담당자에게 꼭 알려주세요.",
        "vegetarianOption": "채식 옵션 있음 (사전 신청자에 한해 나물 정식으로 대체 제공)"
      },
      "freeTimeRecommendation": null,
      "photo": null,
      "photoUpload": {
        "enabled": false
      }
    },
    {
      "id": 5,
      "time": "18:40",
      "endTime": null,
      "title": "드림타워 도착 및 해산",
      "location": "드림타워 지하 2층 주차장",
      "mapUrl": "https://maps.google.com/?q=드림타워+지하주차장",
      "description": "안전하게 귀가하시기 바라며, 오늘 하루 함께해주셔서 감사합니다. 설문조사 참여를 부탁드립니다!",
      "travelTimeToNext": null,
      "difficulty": null,
      "distance": null,
      "meal": null,
      "freeTimeRecommendation": null,
      "photo": null,
      "photoUpload": {
        "enabled": false
      }
    }
  ],
  "locations": [
    {
      "order": 1,
      "name": "드림타워 지하 2층 주차장 (집결지)",
      "description": "행사 시작 집결 장소입니다. 지하 2층 입구에서 스태프가 대기합니다.",
      "address": "제주특별자치도 제주시 노형동 000-00",
      "mapUrl": "https://maps.google.com/?q=드림타워+지하주차장"
    },
    {
      "order": 2,
      "name": "제주 곶자왈 도립공원",
      "description": "숲길 트레킹이 진행되는 장소입니다.",
      "address": "제주특별자치도 제주시 조천읍 선흘리 000",
      "mapUrl": "https://maps.google.com/?q=제주+곶자왈+도립공원"
    },
    {
      "order": 3,
      "name": "제주 해녀의 집",
      "description": "전시 관람 및 자유 시간이 있는 장소입니다.",
      "address": "제주특별자치도 제주시 구좌읍 000",
      "mapUrl": "https://maps.google.com/?q=제주+해녀의집"
    },
    {
      "order": 4,
      "name": "돈사돈 본점 (저녁 식사)",
      "description": "저녁 식사가 진행되는 장소입니다.",
      "address": "제주특별자치도 제주시 000",
      "mapUrl": "https://maps.google.com/?q=돈사돈+본점"
    }
  ],
  "mapEmbedQuery": "드림타워 지하주차장",
  "checklist": [
    "편한 운동화",
    "얇은 겉옷 (일교차 대비)",
    "선크림 / 모자 / 선글라스",
    "개인 물병",
    "우산 또는 우비 (우천 대비)",
    "여유분 마스크",
    "카메라 또는 스마트폰 (사진 촬영용)"
  ],
  "faq": [
    {
      "q": "집합 장소를 못 찾겠어요. 어떻게 하나요?",
      "a": "당일 담당자(김민지, 010-1234-5678)에게 바로 전화 주세요. 화면 하단 전화 버튼을 누르면 바로 연결됩니다."
    },
    {
      "q": "차량으로 이동해도 되나요? 개인 차량은 어디에 주차하나요?",
      "a": "개인 차량 이용 시 드림타워 지하주차장에 주차 후 도보로 집결 장소까지 이동해주세요. 주차비는 자체 부담입니다."
    },
    {
      "q": "우천 시에는 어떻게 진행되나요?",
      "a": "우천 시 도보 프로그램은 실내 대체 프로그램으로 변경됩니다. 자세한 내용은 홈 화면의 '우천 시 안내' 섹션을 확인해주세요."
    },
    {
      "q": "식사 시 알레르기가 있으면 어떻게 하나요?",
      "a": "일정표의 저녁 식사 항목에서 알레르기 정보를 확인하실 수 있습니다. 사전에 담당자에게 미리 알려주시면 대체 메뉴를 준비해드립니다."
    },
    {
      "q": "몸이 불편해서 트레킹 코스를 다 걷기 어려운데 괜찮을까요?",
      "a": "곶자왈 트레킹 코스는 난이도 '보통', 총 도보 2.3km입니다. 중간에 휴식 시간이 있으며, 어려우신 경우 스태프에게 말씀해주시면 별도 안내해드립니다."
    },
    {
      "q": "사진은 어디서 볼 수 있나요?",
      "a": "행사 종료 후 단체 카톡방을 통해 사진이 공유될 예정입니다."
    }
  ],
  "survey": {
    "url": "https://forms.gle/example-survey-link",
    "duration": "약 3분"
  }
};