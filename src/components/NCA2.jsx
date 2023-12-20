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
          { text: 'TensorFlow Server', type: false },
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
    {
        question: '100 TB 규모의 스토리지 용량을 가진 전용 어플라이언스를 통해 대용량 데이터를 이전하게 해주는 서비스는?',
        answer: [
          { text: 'App Teleporter', type: false },
          { text: 'Data Teleporter', type: true },
          { text: 'Storage Teleporter', type: false },
          { text: 'DNS Teleporter', type: false },
        ],
    },
    {
        question: '네이버 클라우드 Load Balancer가 지원하는 부하 분산 방식이 아닌것은?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Least Connection', type: false },
          { text: 'Source IP Hash', type: false },
          { text: 'Fail Over', type: true },
        ],
    },
    {
        question: '외부에 있는 고객의 네트워크와 네이버 클라우드 플랫폼에 있는 네트워크를 암호화된 터널링 통신으로 연결하여 서비스를 구성할 수 있게 해주는 서비스는?',
        answer: [
          { text: 'IPsec VPN', type: true },
          { text: 'IPsec VPC', type: false },
          { text: 'UDPsec VPN', type: false },
          { text: 'UDPsec VPC', type: false },
        ],
    },
    {
        question: '비공인 IP를 가진 다수의 서버를 인터넷 상의 공인 IP를 가진 고객의 호스트와 연결해주는 서비스는?',
        answer: [
          { text: 'CDN Connection', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'Multiple Connection', type: false },
          { text: 'Client CDN', type: false },
        ],
    },
    {
        question: 'DNS 기반의 다양한 방법을 통해 네트워크 트래픽을 안정적으로 로드 밸런싱하는 GSLB 상품은?',
        answer: [
          { text: 'Global CDN', type: false },
          { text: 'CDN+', type: false },
          { text: 'Global Traffic Manager', type: false },
          { text: 'Global Route Manager', type: true },
        ],
    },
    {
        question: 'Global Route Manager가 지원하는 로드밸런싱 방식이 아닌것은?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Least Connection', type: true },
          { text: 'Fail Over', type: false },
        ],
    },
    {
        question: 'Cloud DB for MySQL의 자동백업 데이터는 최대 몇일까지 보관되나요?',
        answer: [
          { text: '10일', type: false },
          { text: '30일', type: true },
          { text: '60일', type: false },
          { text: '90일', type: false },
        ],
    },
    {
        question: 'Cloud DB for Redis의 자동백업 데이터는 최대 몇일까지 보관되나요?',
        answer: [
          { text: '7일', type: true },
          { text: '14일', type: false },
          { text: '30일', type: false },
          { text: '90일', type: false },
        ],
    },
    {
        question: 'Cloud DB for Redis의 Shard 구성은 최소 몇개~ 최대 몇개까지 구성 가능한가요?',
        answer: [
          { text: '동일 스펙으로 최소 1개부터 ~ 최대 3개까지 구성', type: false },
          { text: '동일 스펙으로 최소 2개부터 ~ 최대 8개까지 구성', type: false },
          { text: '동일 스펙으로 최소 3개부터 ~ 최대 10개까지 구성', type: true },
          { text: '동일 스펙으로 최소 5개부터 ~ 최대 20개까지 구성', type: false },
        ],
    },
    {
        question: 'Cloud DB for Redis의 Shard 구성에서 각 Shard당 Slave Node는 최대 몇개까지 가능한가요?',
        answer: [
          { text: '2개', type: false },
          { text: '4개', type: true },
          { text: '8개', type: false },
          { text: '12개', type: false },
        ],
    },
    {
        question: 'Cloud DB for MSSQL의 자동백업 데이터는 최대 몇일까지 보관되나요?',
        answer: [
          { text: '7일', type: false },
          { text: '14일', type: false },
          { text: '30일', type: true },
          { text: '90일', type: false },
        ],
    },
    {
        question: 'Cloud DB for MSSQL의 읽기 가능 슬레이브는 최대 몇대까지 가능한가요?',
        answer: [
          { text: '2대', type: false },
          { text: '3대', type: false },
          { text: '4대', type: false },
          { text: '5대', type: true },
        ],
    },
    {
        question: 'Classic 환경에서 이용 가능한 Cloud DB for MSSQL의 버전은?',
        answer: [
          { text: 'MSSQL 2016 Standard edition', type: true },
          { text: 'MSSQL 2017 Standard edition', type: false },
          { text: 'MSSQL 2018 Standard edition', type: false },
          { text: 'MSSQL 2019 Standard edition', type: false },
        ],
    },
    {
        question: 'VPC 환경에서 이용 가능한 Cloud DB for MSSQL의 버전은?',
        answer: [
          { text: 'MSSQL 2016 Standard edition', type: false },
          { text: 'MSSQL 2017 Standard edition', type: false },
          { text: 'MSSQL 2018 Standard edition', type: false },
          { text: 'MSSQL 2019 Standard edition', type: true },
        ],
    },
    {
        question: 'MySQL의 기본 포트는?',
        answer: [
          { text: '3300', type: false },
          { text: '3303', type: false },
          { text: '3306', type: true },
          { text: '3309', type: false },
        ],
    },
    {
        question: 'CUBRID의 기본 포트는?',
        answer: [
          { text: '8000', type: false },
          { text: '8001', type: true },
          { text: '8002', type: false },
          { text: '8004', type: false },
        ],
    },
    {
        question: 'Redis의 기본포트는?',
        answer: [
          { text: '3306', type: false },
          { text: '4479', type: false },
          { text: '6379', type: false },
          { text: '8129', type: false },
        ],
    },
    {
        question: 'PostgreSQL의 기본포트는?',
        answer: [
          { text: '5432', type: true },
          { text: '4321', type: false },
          { text: '4312', type: false },
          { text: '3210', type: false },
        ],
    },
    {
        question: 'MariaDB의 기본포트는?',
        answer: [
          { text: '3300', type: false },
          { text: '3303', type: false },
          { text: '3306', type: true },
          { text: '3309', type: false },
        ],
    },
    {
        question: '개인정보 등 중요 정보 자원을 보안이 한층 강화된 별도 Zone에서 관리하게 해주는 서비스는?',
        answer: [
          { text: 'Private Zone', type: false },
          { text: 'Secure Zone', type: true },
          { text: 'Secret Zone', type: false },
          { text: 'Hidden Zone', type: false },
        ],
    },
    {
        question: '모든 고객에게 기본으로 제공되는 무료 보안 서비스?',
        answer: [
          { text: 'Rudis Security', type: false },
          { text: 'Standard Security', type: false },
          { text: 'Free Security', type: false },
          { text: 'Basic Security', type: true },
        ],
    },
    {
        question: 'IP 주소/포트 기반 필터링 기능으로 서버로의 네트워크 접근을 관리하는 Security 서비스는?',
        answer: [
          { text: 'VCG', type: false },
          { text: 'ACP', type: false },
          { text: 'VCP', type: false },
          { text: 'ACG', type: true },
        ],
    },
    {
        question: '바이너리 위·변조, 메모리 변조, 후킹, 디바이스 환경 조작 등 모바일 애플리케이션 실행 중 발생할 수 있는 보안 위협을 탐지하는 Security 서비스는?',
        answer: [
          { text: 'Memory Safer', type: false },
          { text: 'Hook Safer', type: false },
          { text: 'App Safer', type: true },
          { text: 'AND Safer', type: false },
        ],
    },
    {
        question: '회원이 개발한 웹사이트가 해킹 또는 다른 보안문제로 인해 악성코드를 배포하는지 검사하는 Security 서비스는?',
        answer: [
          { text: 'Site Safer', type: true },
          { text: 'Web Safer', type: false },
          { text: 'Http Safer', type: false },
          { text: 'Secure Safer', type: false },
        ],
    },
    {
        question: '고객의 웹 사이트에 업/다운로드 되는 파일의 악성코드 여부를 손쉽게 검사할 수 있는 Security 서비스는?',
        answer: [
          { text: 'Web Safer', type: false },
          { text: 'Upload Safer', type: false },
          { text: 'Download Safer', type: false },
          { text: 'File Safer', type: true },
        ],
    },
    {
        question: 'IDS, Anti-DDos, Anti-Virus, IPS, WAF와 같은 다양한 보안 상품들을 이용하여 제공되는 Security 서비스는?',
        answer: [
          { text: 'Virus Monitoring', type: false },
          { text: 'Security Monitoring', type: true },
          { text: 'Private Monitoring', type: false },
          { text: 'Item Monitoring', type: false },
        ],
    },
    {
        question: '외부에서 기업 내부 네트워크에 접속할 때 암호화된 터널링 통신 구축을 위한 Security 서비스는?',
        answer: [
          { text: 'SSL VPN', type: true },
          { text: 'UDP VPN', type: false },
          { text: 'TCP VPN', type: false },
          { text: 'NSL VPN', type: false },
        ],
    },
    {
        question: 'Security Monitoring에서 제공되는 대표적인 보안상품이 아닌것은?',
        answer: [
          { text: 'WAF', type: false },
          { text: 'Anti-Virus', type: false },
          { text: 'IDS', type: false },
          { text: 'Anti-IPS', type: true },
        ],
    },
    {
        question: '고객의 웹 서비스에 대한 주요 취약점을 자동으로 진단하는 Security 서비스는?',
        answer: [
          { text: 'IPS', type: false },
          { text: 'WAF', type: false },
          { text: 'WSC', type: true },
          { text: 'IDS', type: false },
        ],
    },
    {
        question: '서버의 운영체제 및 WAS의 보안 설정이 올바르게 되어 있는지 점검하는 Security 서비스는?',
        answer: [
          { text: 'IPS', type: false },
          { text: 'SSC', type: true },
          { text: 'WAF', type: false },
          { text: 'WSC', type: false },
        ],
    },
    {
        question: 'System Security Checker에서 WAS 취약점 진단 대상이 아닌것은?',
        answer: [
          { text: 'Apache', type: false },
          { text: 'Tomcat', type: false },
          { text: 'NginX', type: false },
          { text: 'Jenkins', type: true },
        ],
    },
    {
        question: '모바일 앱의 정보 유출 위험을 비롯하여 잠재적인 보안 취약점에 대응할 수 있도록 점검하는 Security 서비스는?',
        answer: [
          { text: 'ASC', type: true },
          { text: 'WSC', type: false },
          { text: 'SSC', type: false },
          { text: 'IPS', type: false },
        ],
    },
    {
        question: '고객이 보안 인증이나 규제에 대응하는 데 필요한 사항들을 알기 쉽게 정리한 가이드를 제공하는 Security 서비스는?',
        answer: [
          { text: 'App Security Checker', type: false },
          { text: 'Responsibility Matrix', type: false },
          { text: 'Compliance Guide', type: true },
          { text: 'Certificate Manager', type: false },
        ],
    },
    {
        question: '고객의 중요 정보 암호화에 사용된 키를 고객이 설정한 보안 정책에 따라 엄격히 관리하고 안전하게 보호할 수 있게 해주는 Security 서비스는?',
        answer: [
          { text: 'Key Management Service', type: true },
          { text: 'Certificate Manager', type: false },
          { text: 'Private CA', type: false },
          { text: 'Compliance Guide', type: false },
        ],
    },
    {
        question: 'SSL 인증서의 손쉬운 등록 및 관리를 할 수 있게 해주는 Security 서비스는?',
        answer: [
          { text: 'App Security Checker', type: false },
          { text: 'Responsibility Matrix', type: false },
          { text: 'Compliance Guide', type: false },
          { text: 'Certificate Manager', type: true },
        ],
    },
    {
        question: '사람의 목소리를 텍스트로 바꾸어주는 가장 뛰어난 한국어 음성 인식률을 가진 음성 인식 API 서비스는?',
        answer: [
          { text: 'CSR', type: true },
          { text: 'TTS', type: false },
          { text: 'TTL', type: false },
          { text: 'CAP', type: false },
        ],
    },
    {
        question: '얼굴과 관련된 다양한 정보를 제공하는 얼굴 인식 API 서비스는?',
        answer: [
          { text: 'CNR', type: false },
          { text: 'CSR', type: false },
          { text: 'CFR', type: true },
          { text: 'FFL', type: false },
        ],
    },
    {
        question: '고품질 음성 합성 기술로 다양하고 자연스러운 목소리 제공하는 서비스는?',
        answer: [
          { text: 'CLOVA Voice', type: false },
          { text: 'CSS', type: false },
          { text: 'CPV', type: true },
          { text: 'CVS', type: false },
        ],
    },
    {
        question: '사용자의 질문 의도를 이해하여 고객 대응 등을 자동으로 할 수 있게 해주는 서비스는?',
        answer: [
          { text: 'CLOVA Chatbot', type: true },
          { text: 'CLOVA Autobot', type: false },
          { text: 'CLOVA GPT', type: false },
          { text: 'CLOVA API', type: false },
        ],
    },
    {
        question: '인쇄물 상의 글자와 이미지를 디지털 데이터로 자동으로 추출하는 기술을 제공하는 서비스는?',
        answer: [
          { text: 'CLOVA PCT', type: false },
          { text: 'CLOVA OCR', type: true },
          { text: 'CLOVA CSR', type: false },
          { text: 'CLOVA API', type: false },
        ],
    },
    {
        question: '입력한 텍스트를 인공신경망 기반 번역 알고리즘을 통해 여러 나라의 언어로 자동 번역해주는 API 서비스는?',
        answer: [
          { text: 'Papago NMT', type: true },
          { text: 'Papago KNR', type: false },
          { text: 'Papago KRA', type: false },
          { text: 'Papago AI', type: false },
        ],
    },
    {
        question: '대표적인 딥 러닝 프레임워크와 머신러닝 패키지들이 설치된 서버(GPU 선택 가능)를 제공하는 서비스는?',
        answer: [
          { text: 'Keras Server', type: false },
          { text: 'Bare Metal Server', type: false },
          { text: 'TensorFlow Server', type: true },
          { text: 'Pytorch Server', type: false },
        ],
    },
    {
        question: '주요 신체 영역을 인식하여 좌표 정보를 제공하는 포즈 인식 API 서비스는?',
        answer: [
          { text: 'Emotion Estimation', type: false },
          { text: 'Body Estimation', type: false },
          { text: 'Main Estimation', type: false },
          { text: 'Pose Estimation', type: true },
        ],
    },
    {
        question: '이미지 속 사람 및 자동차 등의 객체를 탐지하고 위치 식별을 위한 API 서비스는?',
        answer: [
          { text: 'Classification', type: false },
          { text: 'OCR', type: false },
          { text: 'Object Detection', type: true },
          { text: 'Shape Recognition Technology', type: false },
        ],
    },
    {
        question: 'Papago NMT에서 한번에 입력할 수 있는 최대 글자 수는?',
        answer: [
          { text: '띄어쓰기 포함 4,000자', type: false },
          { text: '띄어쓰기 포함 5,000자', type: true },
          { text: '띄어쓰기 포함 6,000자', type: false },
          { text: '띄어쓰기 포함 7,000자', type: false },
        ],
    },
    {
        question: 'Pose Estimation에서 제공하는 신체부위 좌표 개수는?',
        answer: [
          { text: '12개', type: false },
          { text: '15개', type: false },
          { text: '18개', type: true },
          { text: '24개', type: false },
        ],
    },
    {
        question: '고객 서버에서 질의한 IP 주소에 대하여 지역정보 DB를 검색하고 해당 지역의 정보를 고객 서버로 전달하는 서비스는?',
        answer: [
          { text: 'Maps', type: false },
          { text: 'API Gateway', type: false },
          { text: 'Pinpoint', type: false },
          { text: 'GeoLocation', type: true },
        ],
    },
    {
        question: 'Jenkins에서 사용하는 포트번호는?',
        answer: [
          { text: '8080 Port', type: false },
          { text: '8060 Port', type: false },
          { text: '18080 Port', type: true },
          { text: '8100 Port', type: false },
        ],
    },
    {
        question: 'SourceCommit, SourceBuild, SourceDeploy 상품을 통합하여 리파지토리, 빌드, 배포로 이어지는 소프트웨어 출시 프로세스를 자동화하는 서비스는?',
        answer: [
          { text: 'SourceBand', type: false },
          { text: 'SourcePipeline', type: true },
          { text: 'SourceGit', type: false },
          { text: 'Jenkins', type: false },
        ],
    },
    {
        question: 'CDN 연동이 필수인 서비스가 아닌 것은?',
        answer: [
          { text: 'Live Station', type: false },
          { text: 'VOD Station', type: false },
          { text: 'Image Optimizer', type: false },
          { text: 'Media Connect Center', type: true },
        ],
    },
    {
        question: 'Object Storage 연동이 필수인 서비스가 아닌것은?',
        answer: [
          { text: 'CLOVA Speech', type: false },
          { text: 'Live Station', type: false },
          { text: 'VOD Transcoder', type: false },
          { text: 'Cloud Hadoop', type: true },
        ],
    },
    {
        question: '사용자의 웹사이트에 검색 기능을 제공하는 상품으로 네이버 형태소 분석 처리기를 기반으로 만들어진 상품은?',
        answer: [
          { text: 'CLOVA Search', type: false },
          { text: 'Search Engine Service', type: false },
          { text: 'Cloud Hadoop', type: false },
          { text: 'Cloud Search', type: true },
        ],
    },
    {
        question: '',
        answer: [
          { text: '', type: false },
        ],
    },
  ]
export default nca2;