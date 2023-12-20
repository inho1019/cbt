const nca2 = [
    {
        question: 'SSD Server가 보장하는 기본 IOPS는 얼마인가요?',
        answer: [
          { text: '1,000 IOPS', type: false },
          { text: '2,000 IOPS', type: false },
          { text: '3,000 IOPS', type: false },
          { text: '4,000 IOPS', type: true },
        ],
    },
    {
        question: '이미지 프로세싱 / 렌더링 / 과학 연산 / 머신 러닝 등 고성능 연산처리에 최적화된 서버는?',
        answer: [
          { text: 'CPU Server', type: false },
          { text: 'GPU Server', type: true },
          { text: 'IPU Server', type: false },
          { text: 'G-Rander', type: false },
        ],
    },
    {
        question: '단독으로 제공된 서버 위에서 하나의 클라우드 서버만을 생성해 제공하는 서비스의 서버는?',
        answer: [
          { text: 'VDS', type: true },
          { text: 'CDS', type: false },
          { text: 'CDN', type: false },
          { text: 'VPC', type: false },
        ],
    },
    {
        question: '물리 서버를 가상화 환경 없이 단독으로 제공하는 서비스의 서버는?',
        answer: [
          { text: 'Technical Server', type: false },
          { text: 'One Care Server', type: false },
          { text: 'Bare Metal Server', type: true },
          { text: 'Virtualization Server', type: false },
        ],
    },
    {
        question: '방대한 양의 데이터를 분석하여 정보를 생산하고 복잡한 연산을 빠르게 해결하기 위한 대규모 컴퓨팅 서비스의 서버는?',
        answer: [
          { text: 'High Solution Computing', type: false },
          { text: 'High Create Computing', type: false },
          { text: 'High Calculate Computing', type: false },
          { text: 'High Performance Computing', type: true },
        ],
    },
  ]
export default nca2;