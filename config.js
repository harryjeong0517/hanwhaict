/* ==========================================================================
 * 한화시스템 ICT 부스 이벤트앱 - 설정 파일
 * 문구·설문·솔루션 설명은 이 파일만 고치면 방문객 화면과 운영자 화면에 함께 반영됩니다.
 * (경품 재고·당첨 비율, PDF·영상 링크, 운영자 비밀번호는 구글 시트에서 수정합니다)
 * ========================================================================== */
window.EVENT_CONFIG = {

  /* Apps Script 웹앱 URL. 비워 두면 '데모 모드'(이 브라우저에만 저장)로 동작합니다. */
  API_URL: 'https://script.google.com/macros/s/AKfycbw-Ayf_aOqYJN_LrOEwUWdXTG1SBD8FF_RhcDq1cBqrU0WAFkk-6PyZtDxkuT4E4c77tg/exec',

  event: {
    client: '한화시스템 ICT',
    expo: 'WIS',                                  // 전시회 이름
    booth: '',                                    // 예: 'Hall C · C-123'  (비우면 표시 안 함)
    dates: '',                                    // 예: '2027. 4. 21 – 4. 23' (비우면 표시 안 함)
    headline: '부스 방문 등록하고\n즉석 경품 받아 가세요',
    sub: '1분 설문에 참여하시면 그 자리에서 경품을 드리고, 관심 솔루션 자료를 휴대폰으로 바로 보실 수 있습니다.',
    drawInfo: '현장 추첨 시간은 부스 안내판에서 확인해 주세요. 당첨자 발표 때 부스에 계셔야 경품을 받을 수 있습니다.',
    logo: 'data:image/png;base64,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'   // 로고 이미지 (data URI 또는 파일 경로). 비우면 주황 사각형 표시
  },

  goals: { mql: 1000, sql: 10 },

  /* 솔루션 7종 - id 는 구글 시트 Contents 탭의 solution 값과 같아야 합니다. */
  solutions: [
    { id: 'mes', name: 'XPERION MES', tagline: '생산·품질·공정을 하나로 잇는 제조실행시스템',
      desc: '모듈형 구조라 산업 특성에 맞게 확장할 수 있고, 현장 데이터를 실시간으로 모아 생산 가시성과 추적성을 높입니다.' },
    { id: 'iot', name: 'XPERION IoT', tagline: '설비와 자산을 연결하는 산업용 IoT 플랫폼',
      desc: '공장 설비 데이터를 수집·관리해 한 플랫폼에서 모니터링하고, 데이터에 근거한 의사결정을 돕습니다.' },
    { id: 'wms', name: 'XPERION WMS', tagline: 'Low Code 기반의 자체 개발 창고관리시스템',
      desc: '지표 기반 운영 관리, Rule 기반 프로세스, 멀티 센터·화주 기능으로 물류 운영을 현장에 맞게 조정합니다.' },
    { id: 'plm', name: 'XPERION PLM', tagline: '제품 정보를 한곳에서 관리하는 제품수명주기관리',
      desc: '설계부터 생산, 변경 이력까지 제품 데이터를 연결해 개발 협업과 변경 관리를 지원합니다.' },
    { id: 'haru', name: 'HARU', tagline: '데이터 기반 통합 HR 솔루션',
      desc: '필요한 인사 모듈만 골라 도입할 수 있고, PC와 모바일에서 임직원과 인사 담당자가 함께 사용합니다.' },
    { id: 'tomms', name: 'TOMMS', tagline: '장비 수명주기 전반을 관리하는 MRO 솔루션',
      desc: '실시간 모니터링과 AI 기반 예측정비, 부품 수요예측으로 장비 가용성을 높이고 유지보수 비용을 줄입니다.' },
    { id: 'esg', name: 'ESG ON', tagline: 'ESG 경영관리 통합 지원 시스템',
      desc: '공시·평가 대응, 리스크 관리, 공급망 관리까지 ESG 데이터를 한곳에서 관리합니다.' }
  ],

  /* 설문 - 보기의 id 는 리드 점수 계산에 쓰이므로 바꾸지 마세요. label(보이는 글자)은 자유롭게 수정 가능 */
  survey: [
    { key: 'industry', q: '어떤 업종에서 일하시나요?', options: [
      { id: 'defense', label: '방산·항공' }, { id: 'electronics', label: '전자·반도체·배터리' },
      { id: 'chemical', label: '화학·소재·에너지' }, { id: 'machinery', label: '기계·자동차·부품' },
      { id: 'logistics', label: '물류·유통' }, { id: 'finance', label: '금융·서비스' },
      { id: 'public', label: '공공·교육' }, { id: 'etc', label: '기타' } ] },
    { key: 'companySize', q: '회사 규모는 어느 정도인가요?', options: [
      { id: 's0', label: '50명 미만' }, { id: 's50', label: '50 – 299명' },
      { id: 's300', label: '300 – 999명' }, { id: 's1000', label: '1,000명 이상' } ] },
    { key: 'role', q: '솔루션 도입에서 어떤 역할을 맡고 계신가요?', options: [
      { id: 'decision', label: '최종 의사결정' }, { id: 'evaluate', label: '도입 검토·평가 담당' },
      { id: 'user', label: '실무 사용자' }, { id: 'research', label: '정보 수집 중' },
      { id: 'other', label: '학생·기타' } ] },
    { key: 'interests', multi: true, fromSolutions: true, q: '관심 있는 솔루션을 모두 골라 주세요' },
    { key: 'challenge', q: '지금 가장 해결하고 싶은 과제는 무엇인가요?', options: [
      { id: 'visibility', label: '생산·품질 현황을 실시간으로 보기' }, { id: 'equipment', label: '설비 데이터 수집과 예지보전' },
      { id: 'logistics', label: '물류·창고 운영 효율' }, { id: 'product', label: '설계·제품 정보 관리' },
      { id: 'hr', label: '인사·조직 운영' }, { id: 'esg', label: 'ESG 공시·평가 대응' },
      { id: 'etc', label: '기타' } ] },
    { key: 'timeline', q: '도입을 검토하는 시기는 언제쯤인가요?', options: [
      { id: 'm3', label: '3개월 이내' }, { id: 'm6', label: '6개월 이내' }, { id: 'y1', label: '1년 이내' },
      { id: 'undecided', label: '아직 정하지 않음' }, { id: 'none', label: '계획 없음' } ] }
  ],

  /* 개인정보 동의 문구 (초안) - 실제 운영 전에 한화시스템 담당 부서의 검토를 받아 확정하세요. */
  consent: {
    privacyTitle: '개인정보 수집·이용 동의 (필수)',
    privacyBody: [
      '수집 항목: 이름, 회사명, 부서, 직책, 이메일, 휴대폰 번호, 설문 응답, 자료 열람 기록',
      '수집 목적: 부스 방문 등록, 경품 추첨 및 지급, 솔루션 자료 제공, 상담 요청 대응',
      '보유 기간: 행사 종료 후 1년 또는 동의 철회 시까지',
      '처리 위탁: 행사 운영 대행사 (주)마케팅피플 (이벤트 운영 및 경품 지급)',
      '동의를 거부할 수 있으며, 거부하시면 이벤트에 참여하실 수 없습니다.'
    ],
    marketingTitle: '마케팅 정보 수신 동의 (선택)',
    marketingBody: [
      '한화시스템 ICT의 솔루션 소식, 세미나·행사 안내를 이메일과 문자로 받습니다.',
      '동의하지 않아도 이벤트에 참여할 수 있으며, 언제든 수신을 거부할 수 있습니다.'
    ]
  }
};
