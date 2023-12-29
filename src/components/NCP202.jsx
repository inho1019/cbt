const ncp202 = [
    {
        question: '이미지 옵티마이저에서 다음과 같은 쿼리스트링이 의미하는 것이 아닌 것은?',
        answer: [
          { text: '리사이즈 & 크롭', type: true },
          { text: '가로의 크기는 512', type: false },
          { text: '워터마크 삽입', type: false },
          { text: '우측 상단을 기준 가로 11픽셀, 세로 10픽셀 이동하여 워터마크를 찍음', type: false },
        ],
      },
      {
        question: 'VOD Station 상품에서 제공되는 DRM 기능과 관련된 설명으로 틀린 것은?',
        answer: [
          { text: '동영상 파일을 암호화 할 때 사용하는 기술이다', type: false },
          { text: 'VOD Station에서는 자체 DRM 기능을 제공한다.', type: true },
          { text: '불법 다운로드 리스크를 줄일 수 있다', type: false },
          { text: '3가지 유형이 제공된다', type: false },
        ],
      },
      {
        question: '이미지 옵티마이저에서 만들어진 섬네일을 호출하는 URL의 구성 요소가 아닌 것은?',
        answer: [
          { text: 'CDN 도메인', type: false },
          { text: '오브젝트 스토리지 내의 파일명', type: false },
          { text: '섬네일 생성 옵션', type: false },
          { text: '토큰키', type: true },
        ],
      },
      {
        question: 'L7 헬스 체크 기능을 지원하지 않는 로드밸런서 타입은 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: true },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: 'Application Load Balancer 에서 URL 기반으로 분기하기 위한 조건은 무엇인가?',
        answer: [
          { text: 'Host Header', type: false },
          { text: 'Path Pattern', type: true },
          { text: 'URL Path', type: false },
          { text: 'URL 라우팅', type: false },
        ],
      },
      {
        question: '다음 중 UDP로만 제공되는 서비스는 무엇인가?',
        answer: [
          { text: 'DNS 서비스', type: false },
          { text: '넷바이오스 서비스', type: false },
          { text: 'NTP 서비스', type: true },
          { text: 'RPC 서비스', type: false },
        ],
      },
      {
        question: '이더넷에서 MTU의 최대 사이즈는 몇 바이트인가?',
        answer: [
          { text: '256', type: false },
          { text: '1024', type: false },
          { text: '1500', type: true },
          { text: '64000', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 로드밸런서에 대한 설명으로 옳은 것을 고르시오',
        answer: [
          { text: 'Classic 환경에는 총 두 가지 종류의 로드밸런서가 존재한다.', type: false },
          { text: 'VPC 환경에서는 로드밸런서 생성 시 멀티존 생성이 필수적이다', type: false },
          { text: '서비스할 프로토콜의 종류에 따라 Application/Network 타입으로 갈라진다', type: true },
          { text: '세션 유지 기능이 필요한 경우, Network 로드밸런서를 사용해야 한다', type: false },
        ],
      },
      {
        question: 'Private subnet이 외부와 통신할 수 있도록 (A) 서비스를 추가하였고, Private Subnet의 (B)의 Outbound-rule을 수정하여 외부에 통신할 시에는 A서비스를 향하도록 수정해야 합니다. A, B에 알맞은 것은?',
        answer: [
          { text: 'A : NAT gateway, B : Routing Table', type: true },
          { text: 'A : Internet gateway, B : Routing Table', type: false },
          { text: 'A : Internet gateway, B : NACL', type: false },
          { text: 'A : NAT gateway, B : NACL', type: false },
        ],
      },
      {
        question: 'IP헤더에서 TTL은 몇 Bit가 할당되어 있는가?',
        answer: [
          { text: '4', type: false },
          { text: '6', type: false },
          { text: '8', type: true },
          { text: '10', type: false },
        ],
      },
      {
        question: 'VOD Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'VOD Transcode는 CDN과 연계가 가능하다', type: false },
          { text: 'Input은 Object Storage를 사용할 수 있다', type: false },
          { text: '썸네일 설정시 각 output당 10개의 썸네일이 추출된다', type: false },
          { text: 'Output 경로는 File Storage와 Object Storage에 설정할 수 있다.', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 GRM에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: 'IP, 도메인 리소스에 대한 분기가 가능하다', type: false },
          { text: '도메인 리소스에 대한 헬스 체크 설정이 가능하다', type: true },
          { text: '헬스 체크에 대한 로그는 제공하지 않는다', type: false },
          { text: 'GRM 리소스 타입은 동일하게 설정해야 한다. (IP와 도메인을 같이 GRM에 바인드할 수 없다.)', type: false },
        ],
      },
      {
        question: 'Image Optimizer 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: 'Cloud Log Analytics 상품과의 연동이 필수이다', type: false },
          { text: '변환 Rule의 경우 실제 적용되기까지 약간의 시간이 소요된다', type: false },
          { text: '변환 Rule은 엑셀 파일을 통해 다량으로 불러올 수 있다', type: false },
          { text: '변환된 이미지 미리보기 기능은 제공되지 않는다', type: true },
        ],
      },
      {
        question: 'DSR 기능이 적용되어 보다 빠르고 효율적인 서비스를 구성할 수 있는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: 'Image Optimizer의 경우 이미지에 효과를 줄 수 있는 필터 기능을 사용할 수 있습니다. 사용 가능한 필터가 아닌 것은 무엇인가요?',
        answer: [
          { text: '샤픈', type: false },
          { text: '블러', type: false },
          { text: '흑백', type: false },
          { text: '파스텔', type: true },
        ],
      },
      {
        question: '다음 중 로드밸런서의 Target group에 대한 설명 중 옳은 것을 모두 고르시오',
        answer: [
          { text: '한 대의 서버는 하나의 Target Group에만 속할 수 있다', type: false },
          { text: '하나의 Target group은 하나의 로드밸런서에만 할당이 가능하다', type: true },
          { text: '로드밸런서 생성 후 Target group을 수정할 수 있다', type: false },
          { text: 'Target Group은 Zone과 Subnet에 상관없이 동일 VPC내 모든 대상(서버)을 등록할 수 있습니다.', type: true },
        ],
      },
      {
        question: 'VOD Station 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: 'DRM 기능이 제공된다', type: false },
          { text: 'Media Encryption 기능이 제공된다', type: false },
          { text: '송출할 영상 파일은 NAS에 올려야 한다', type: true },
          { text: 'HLS, DASH 프로토콜을 지원한다', type: false },
        ],
      },
      {
        question: '경로 기반 라우팅 기능을 지원하는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: false },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: true },
        ],
      },
      {
        question: 'CIDR에서 서브넷이 27bit인 경우 몇 개의 IP를 사용할 수 있는가?',
        answer: [
          { text: '1', type: false },
          { text: '6', type: false },
          { text: '14', type: false },
          { text: '30', type: true },
        ],
      },
      {
        question: 'VPC 플랫폼에서 로드밸런서 생성시 Small, Medium. Large 성능을 선택할 수 있습니다. 성능의 기준은 무엇인가요 ?',
        answer: [
          { text: '네트워크 대역폭 (bps)', type: false },
          { text: '초당 연결 수 (CPS)', type: true },
          { text: '초당 패킷 수 (PPS)', type: false },
          { text: '리얼 서버 대수', type: false },
        ],
      },
      {
        question: 'VOD Station에서 Subtitle Output format은 무엇인가?',
        answer: [
          { text: 'VTT', type: true },
          { text: 'SRT', type: false },
          { text: 'TIML', type: false },
          { text: 'CAP', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC환경에서 서버 NIC 하나에 적용할 수 있는 ACG의 개수는?',
        answer: [
          { text: '2개', type: false },
          { text: '3개', type: true },
          { text: '4개', type: false },
          { text: '5개', type: false },
        ],
      },
      {
        question: 'VOD Station 서비스와 연동이 되어 있는 서비스들을 모두 고르시오',
        answer: [
          { text: 'NAS', type: false },
          { text: 'Certificate Manager', type: false },
          { text: 'Object Storage', type: true },
          { text: 'CDN', type: true },
        ],
      },
      {
        question: '하나의 VPC에 ACG를 최대 몇 개까지 생성 가능한가요 ?',
        answer: [
          { text: '5개', type: false },
          { text: '100개', type: false },
          { text: '300개', type: false },
          { text: '500개', type: true },
        ],
      },
      {
        question: '다음 중, 로드밸런서에 SSL인증서를 추가하기 위해 연동해야 하는 서비스는 ?',
        answer: [
          { text: 'SSL Manager', type: false },
          { text: 'Ceritificate Manager', type: true },
          { text: 'SSL-Offload', type: false },
          { text: 'Global ceritificate', type: false },
        ],
      },
      {
        question: 'HTTP 2.0 기능을 지원하는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: false },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: true },
        ],
      },
      {
        question: '이미지 옵티마이저에서 섬네일 생성 규칙을 만드는 방법은?',
        answer: [
          { text: 'Query String', type: true },
          { text: 'Post', type: false },
          { text: 'Get', type: false },
          { text: 'URL', type: false },
        ],
      },
      {
        question: '네이버클라우드 CDN+에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: '오리진으로 네이버 클라우드 플랫폼의 Object Storage만 사용할 수 있다', type: true },
          { text: '국내 서비스에 최적화된 CDN 상품이다', type: false },
          { text: '개인 소장 도메인을 CDN 서비스 도메인으로 사용할 수 있다.', type: false },
          { text: 'CDN 도메인을 HTTPS로 사용하기 위해서는 오리진에서도 HTTPS를 지원해야 한다.', type: false },
        ],
      },
      {
        question: 'IP 주소에 해당하는 MAC Address를 얻기 위한 프로토콜은?',
        answer: [
          { text: 'ARP', type: true },
          { text: 'TCP', type: false },
          { text: 'NTP', type: false },
          { text: 'FTP', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 로드밸런서에서 제공하는 밸런싱 매소드 중 다음이 지칭하는 것을 고르시오. “정적 해쉬 테이블에 있는 소스 IP를 찾아 실제 서버의 풀로 요청을 배분하는 방식”',
        answer: [
          { text: 'Round-Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Least-Connection', type: false },
          { text: 'Source IP Hash', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VOD Tanscoder에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: '트랜스 코딩된 파일에 캡션 기능을 제공한다', type: true },
          { text: '변환 필요 파일은 네이버 클라우드 플랫폼 Object Storage에 있어야 한다', type: false },
          { text: '트랜스 코딩된 파일은 잡 생성시 지정한 Object Storage 버킷에 저장된다', type: false },
          { text: 'Custom Preset 기능을 제공한다', type: false },
        ],
      },
      {
        question: 'GRM에서 제공하는 로드밸런싱 타입이 아닌 것을 고르시오',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Source IP Hash', type: true },
          { text: 'Weighted', type: false },
          { text: 'Geolocation', type: false },
        ],
      },
      {
        question: '다음 중 HA 솔루션 등에 활용하기 위한 보조 IP 기능을 제공해주는 상품 이름은?',
        answer: [
          { text: 'Network Interface – Secondary IP', type: true },
          { text: 'Network Interface – HA IP', type: false },
          { text: 'Server – Secondary IP', type: false },
          { text: 'Server – HA IP', type: false },
        ],
      },
      {
        question: 'Video Player에서 설정 가능한 기능이 아닌 것은 무엇인가?',
        answer: [
          { text: '재생 속도 조절', type: false },
          { text: '브라우저 최소화시 자동 정지', type: false },
          { text: '자막 지원', type: false },
          { text: '영상 다운로드', type: true },
        ],
      },
      {
        question: '네이버클라우드픗랫폼 Cloud DB for My-SQL에서 DB 및 User 생성에 대해 옳은 것은?',
        answer: [
          { text: '쿼리를 통해 DB 및 User 생성이 가능하다', type: false },
          { text: '쿼리를 통해 DB 생성만 가능하다', type: false },
          { text: '쿼리를 통해 User 생성만 가능하다', type: false },
          { text: '쿼리를 통해 DB와 User를 생성하는 것은 불가능하며, 콘솔을 통해 기능을 제공하고 있다', type: true },
        ],
      },
      {
        question: '다음 중 Cloud Advisor 상품의 리포트 기능에서 제공하지 않는 점검 항목은?',
        answer: [
          { text: 'NAS 스토리지 ACL 관리', type: true },
          { text: 'Sub Account 의 Access Key 관리', type: false },
          { text: 'Object Storage 버킷 권한', type: false },
          { text: 'ACG 포트 관리', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL의 재시작 기능과 관련하여 잘못된 것은?',
        answer: [
          { text: '재시작을 실행하면 2가지 옵션(Without Fail-over, With Fail-over)가 제공된다', type: false },
          { text: '재부팅 예약이 가능하다', type: true },
          { text: 'With Fail-over의 경우, 서비스 다운타임이 짧으며, 사용자가 설정한 SSMS 내용이 그대로 유지된다', type: false },
          { text: 'Without Fail-over 옵션 선택시, 서비스 다운 타임이 몇 분 이상 걸릴 수 있다', type: false },
        ],
      },
      {
        question: '다음 중 VPC 플랫폼 기반 Cloud Hadoop 상품의 특징으로 올바른 설명은?',
        answer: [
          { text: '컴퓨팅 노드와 스토리지 노드가 분리되어 제공된다', type: true },
          { text: '기본 저장소로 NAS Storage가 제공된다', type: false },
          { text: '고가용성은 지원되지 않는다', type: false },
          { text: '작업자노드는 최대 4대까지 생성 가능하다', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL 대한 설명 중 틀린 것을 고르시오',
        answer: [
          { text: 'Cloud DB for MS-SQL 상품의 경우, Standard type과 High-memory 타입을 선택할 수 있다', type: false },
          { text: '데이터 스토리지는 기본 10GB가 자동 할당되며, 10GB단위로 2TB까지 자동 증가합니다', type: true },
          { text: 'Cloud DB for MS-SQL 상품은 Standard 타입에서 High-memory 타입으로 스펙업이 가능합니다', type: false },
          { text: 'Cloud DB for MS-SQL 상품은 Standalone으로 생성 시, 서버가 1대만 생성됩니다', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL에서 수행 가능한 작업이 아닌 것은?',
        answer: [
          { text: '재시작 기능', type: false },
          { text: 'DB Server 삭제', type: false },
          { text: 'DB Server 일시 정지 기능', type: true },
          { text: 'Monitoring', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL 생성 시 자동 생성되는 항목을 모두 고르시오',
        answer: [
          { text: 'Private Domain', type: true },
          { text: 'ACG', type: true },
          { text: 'Public Domain', type: false },
          { text: 'Event Alarm', type: false },
        ],
      },
      {
        question: '다음 WMS Monitoring 지표와 관련된 단어들 중, 올바른 뜻풀이가 아닌 것은?',
        answer: [
          { text: 'Load Time: 웹페이지를 로딩하는데 걸리는 시간', type: false },
          { text: 'File Request: 업로드한 구성요소들의 목록', type: true },
          { text: 'Scenario: 테스트 시나리오 내용', type: false },
          { text: 'Today Event: 테스트 URL에서 금일 발생한 이벤트 수', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼 VPC 환경에서의 Cloud DB for Redis 상품에 대한 설명 중 틀린 내용은?',
        answer: [
          { text: 'CPU는 기본 4core로 제공된다', type: false },
          { text: 'Cluster 기능이 제공된다', type: false },
          { text: '자동 Fail-Over 기능이 제공된다', type: false },
          { text: 'Shard는 최대 20개까지 구성 가능하다', type: true },
        ],
      },
      {
        question: '회사 정책상 클라우드에서 발생하는 로그를 영구 보관해야 한다. 이럴 경우, CLA에 설정해줘야 하는 옵션은?',
        answer: [
          { text: 'Log expansion를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Archive Log를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Export Log를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: true },
          { text: 'Log store를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
        ],
      },
      {
        question: '다음 중 WMS 상품에 대한 내용으로 올바른 것은?',
        answer: [
          { text: '알람 기능은 제공되지 않는다', type: false },
          { text: '웨일 브라우저 기반의 테스트만 가능하다', type: false },
          { text: '여러 국가에서의 웹 서비스 응답 속도를 확인할 수 있다', type: false },
          { text: '모니터링은 초 단위로 가능하다', type: true },
        ],
      },
      {
        question: 'Cloud DB for MSSQL에 대한 스토리지에 대한 설명으로 맞는 것은?',
        answer: [
          { text: '운영체제를 위한 기본 디스크는 50GB가 기본 제공됩니다', type: false },
          { text: '운영체제가 설치되는 기본 디스크는 용량 변경 불가능합니다', type: true },
          { text: '최초 DB 생성 시 HDD로만 생성이 가능합니다', type: false },
          { text: '데이터를 저장하기 위한 스토리지 증가시 50GB 단위로 과급됩니다', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop Cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'Zookeeper', type: false },
          { text: 'Hbase', type: false },
          { text: 'Impala', type: true },
          { text: 'Zepplin Notebook', type: false },
        ],
      },
      {
        question: 'VPC 환경에서 Cloud DB 상품을 이용할 시 갖는 특징으로 올바르지 않은 것은?',
        answer: [
          { text: '멀티 존 기능이 지원된다', type: false },
          { text: '멀티 리전 기능이 제공된다', type: true },
          { text: 'Private Subnet에서 생성 시 Public 도메인 생성이 불가능하다', type: false },
          { text: 'ACG가 자동으로 생성된다', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼 Cloud DB for MySQL에서 제공하는 이벤트 항목 중, SlowQueryCount 항목에 대해 옳은 설명은?',
        answer: [
          { text: '1초 이상 실행되는 쿼리 개수', type: true },
          { text: '쿼리 요청 시간이 2초 이상 걸리는 쿼리 개수', type: false },
          { text: 'Query_time이 3초 이상 걸리는 쿼리 개수', type: false },
          { text: '슬로우쿼리 기준값은 10초이다', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 Analytics 상품에 해당되지 않는 것은?',
        answer: [
          { text: 'Cloud Data Streaming Service', type: false },
          { text: 'Cloud Search', type: false },
          { text: 'Real User Analytics', type: false },
          { text: 'CAPTCHA', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL의 백업 기능에 대해 잘못 설명한 것은?',
        answer: [
          { text: '백업 파일은 별도 데이터 스토리지에 저장됩니다.', type: false },
          { text: '사용자가 백업 시간을 설정할 수 없으므로, 임의의 시간에 백업이 시작됩니다', type: true },
          { text: '백업 완료 시점 기준의 데이터로 복구가 가능합니다', type: false },
          { text: 'Stand Alone 서버도 DB 백업 및 복구 기능이 사용 가능합니다', type: false },
        ],
      },
      {
        question: '서비스 페이지 (PC 또는 웹)에 접속하는 실 사용자 데이터를 수집하여 국가, 브라우저, Device 별로 웹페이지 속도와 PV Count 를 분석해주는 네이버클라우드플랫폼 서비스는 무엇인지 고르시오',
        answer: [
          { text: 'ELSA', type: false },
          { text: 'RUA', type: true },
          { text: 'CLA', type: false },
          { text: 'WMS', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL 설정 시 옳지 않은 것은?',
        answer: [
          { text: 'MySQL의 기본 포트 번호(3306)를 사용하는 것은 보안상 취약할 수 있으므로 변경해서 사용하는 것을 권장합니다', type: false },
          { text: 'Cloud DB for MySQL 상품에서 DB 서버를 생성하기 위해서는 최초 1회 CLA 상품 사용 동의를 하셔야만 합니다', type: false },
          { text: 'DB 백업 파일 보관 기간을 최소 1일에서 최대 30일까지 선택할 수 있습니다', type: false },
          { text: '백업 파일에 대한 별도의 요금은 부과되지 않습니다', type: true },
        ],
      },
      {
        question: '다음 중, CLA와 연계된 서비스는?',
        answer: [
          { text: 'Object Storage', type: true },
          { text: 'File Storage', type: false },
          { text: 'NAS', type: false },
          { text: 'Block Storage', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MySQL에 제공되는 High-memory 타입의 최고 VM사양은?',
        answer: [
          { text: '16vCPU, 128GB', type: false },
          { text: '32vCPU, 128GB', type: false },
          { text: '32vCPU, 256GB', type: true },
          { text: '48vCPU, 256GB', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for Redis의 백업 데이터 최대 보관일은?',
        answer: [
          { text: '5일', type: false },
          { text: '7일', type: true },
          { text: '10일', type: false },
          { text: '14일', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL 설명으로 틀린 것은?',
        answer: [
          { text: 'DB서버의 기본 생성 대수는 고가용성 선택 여부에 따라 달라진다', type: false },
          { text: '고가용성 선택 시 기본 2대의 DB 서버가 생성된다', type: false },
          { text: 'Standby Master DB는 평상 시에는 동기화 작업 외에 다른 용도로 사용 불가하다', type: false },
          { text: 'DB 서버의 스펙의 변경 시, 마스터 데이터베이스의 스펙만 변경된다', type: true },
        ],
      },
      {
        question: 'VPC 환경에서의 Network Interface에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '서버 생성 시, 최대 3개의 Network Interface 생성이 가능하다.', type: false },
          { text: '각 NIC에는 Secondary IP를 부여할 수 있다.', type: false },
          { text: '하나의 NIC에는 최대 3개의 Secondary IP를 추가할 수 있다.', type: true },
          { text: '실제 Secondary IP 활성화를 위해서는 Network script를 일부 수정해야한다.', type: false },
        ],
      },
      {
        question: 'VPC 플랫폼 로드밸런서에서 지원하는 프로토콜의 연결 관계가 잘못 짝지어진 것은 무엇인가?',
        answer: [
          { text: 'TCP - Network Load Balancer', type: false },
          { text: 'Proxy TCP - Network Proxy Load Balancer', type: false },
          { text: 'HTTP - Network Load Balancer', type: true },
          { text: 'HTTPS - Application Load Balancer', type: false },
        ],
      },
      {
        question: '다음과 같이 서브넷을 192.168.31.0/23을 만들었다. 그렇다면 IP 주소 대역은 어떻게 되는가?',
        answer: [
          { text: '192.168.31.0~192.168.31.255', type: false },
          { text: '192.168.30.0~192.168.31.255', type: true },
          { text: '192.168.31.0~192.168.32.255', type: false },
          { text: '192.168.0.0~192.168.255.255', type: false },
        ],
      },
      {
        question: '이더넷에서 MTU의 최대사이즈는 몇 바이트인가?',
        answer: [
          { text: '256', type: false },
          { text: '1024', type: false },
          { text: '1500', type: true },
          { text: '64000', type: false },
        ],
      },
      {
        question: 'Live Station에서 Output Protocol이 아닌 것은 무엇인가?',
        answer: [
          { text: 'HLS', type: false },
          { text: 'MPEG-DASH', type: false },
          { text: 'RTMP', type: false },
          { text: 'RTSP', type: true },
        ],
      },
      {
        question: 'VOD Station 상품에서 제공되는 DRM 기능과 관련된 설명으로 틀린 것은?',
        answer: [
          { text: '동영상 파일을 암호화할 때 사용하는 기술이다', type: false },
          { text: 'VOD Station에서는 자체 DRM 기능을 제공한다.', type: true },
          { text: '불법 다운로드 리스크를 줄일 수 있다.', type: false },
          { text: '3가지 유형이 제공된다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 GRM에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
          { text: 'IP, 도메인 리소스에 대한 분기가 가능하다', type: false },
          { text: '도메인 리소스에 대한 헬스체크 설정이 가능하다.', type: true },
          { text: '헬스체크에 대한 로그는 제공하지 않는다.', type: false },
          { text: 'GRM 리소스 타입은 동일하게 설정해야 한다.(IP와 도메인을 같이 GRM에 바인드할 수 없다.)', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서의 로드밸런서 상품에 대한 설명으로 잘못 된 것을 모두 고르시오.',
        answer: [
          { text: 'Public Subnet에 생성 가능하다.', type: false },
          { text: 'Application 로드밸런서는 Proxy 타입이다.', type: true },
          { text: '부하처리 성능에 따라 Small / Medium / Large 중 선택할 수 있다.', type: false },
          { text: '성능은 최대 10만 CPS까지 지원한다.', type: true },
        ],
      },
      {
        question: 'VOD Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'VOD Transcoder는 CDN과 연계가 가능하다', type: true },
          { text: 'Input은 Object Storage를 사용할 수 있다', type: false },
          { text: '썸네일 설정시 각 output당 10개의 썸네일이 추출된다.', type: false },
          { text: 'Output 경로는 File Storage와 Object Storage에 설정할 수 있다.', type: false },
        ],
      },
      {
        question: 'Live Station 상품에서는 다른 플랫폼에 동시 송출을 할 수 있는 기능이 제공됩니 다. 이 때 해당 기능을 부르는 명칭은 무엇인가요?',
        answer: [
          { text: 'Re-Stream', type: true },
          { text: 'Re-Play', type: false },
          { text: 'Re-Wind', type: false },
          { text: 'Re-Watch', type: false },
        ],
      },
      {
        question: 'VOD 트랜스코더에서 Job 생성시 Job 상태에 대한 설명으로 올바르지 않은 것은?',
        answer: [
          { text: 'Fail: 정상적으로 Job이 수행되지 않음', type: false },
          { text: 'Progressing: Job 수행 중', type: false },
          { text: 'Submitted: Job 수행 완료', type: true },
          { text: 'Cancel: Submitted 상태였던 Job 수행 취소', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 ACG에 대한 설명으로 틀린 것은 무엇인가요?',
        answer: [
          { text: '서버에 연결되어있는 맵핑 정보를 변경할 수 있다.', type: false },
          { text: 'VPC에 의존적이다.', type: false },
          { text: 'White List 방식의 방화벽이다.', type: false },
          { text: 'Inbound에 대해서만 룰 적용이 가능하다.', type: true },
        ],
      },
      {
        question: 'VOD Station에서 Subtitle Output format은 무엇인가?',
        answer: [
          { text: 'VTT', type: true },
          { text: 'SRT', type: false },
          { text: 'TIME', type: false },
          { text: 'CAP', type: false },
        ],
      },
      {
        question: '다음 중 Live station에 대한 설명 중 옳은 것을 모두 고르시오',
        answer: [
          { text: 'Output Protocol 은 기본 HLS & DASH 프로토콜로 지정된다.', type: true },
          { text: 'Live Station 은 반드시 CDN 과 함께 사용한다.', type: true },
          { text: 'Custom 화질을 지정할 수 있는 기능은 추후 제공될 예정이다.', type: true },
          { text: '채널이 생성 중인 상태는 ‘준비’ 상태로 콘솔에 표기된다.', type: false },
        ],
      },
      {
        question: 'Live Station에서 원본 영상을 별도 파일로 Storage 에 저장하여 보관할 수 있으며, 현재 라이브중인 영상을 최대 여섯 시간전까지 되돌려 볼 수 있는 기능을 사용하기 위해 설정해줘야 하는 옵션은?',
        answer: [
          { text: '즉시 녹화 설정', type: false },
          { text: 'Recording', type: false },
          { text: 'Stream', type: false },
          { text: 'DVR 설정', type: true },
        ],
      },
      {
        question: '다음 중, 네이버클라우드 플랫폼의 로드밸런서 생성시 기본적으로 적용되는 분배 알고리즘은?',
        answer: [
          { text: 'Least-connection', type: false },
          { text: 'SourcelP Hash', type: false },
          { text: 'Round-robin', type: true },
          { text: 'Weighted', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VOD Transcoder에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: 'job 생성 후 설정은 언제든 변경 가능하다.', type: true },
          { text: '동시 최대 5개의 미디어 파일 포맷으로 변환이 가능하다.', type: false },
          { text: 'Job 실행 결과에 대한 알람을 받을 수 있다.', type: false },
          { text: 'Thumbnail 설정이 가능하다', type: false },
        ],
      },
      {
        question: 'DSR 기능이 적용되어 보다 빠르고 효율적인 서비스를 구성할 수 있는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: 'VOD Station 상품에 대한 설명으로 틀린 것은??',
        answer: [
          { text: 'DRM 기능이 제공된다.', type: false },
          { text: 'Media Encryption 기능이 제공된다.', type: false },
          { text: '송출할 영상 파일은 NAS에 올려야 한다', type: true },
          { text: 'HLS, DASH 프로토콜을 지원한다', type: false },
        ],
      },
      {
        question: 'CDN 서비스에서 캐싱된 콘텐츠가 원본 서버에 변경되었는지 여부를 확인하는 주기를 지정하는 것은?',
        answer: [
          { text: 'Referrer', type: false },
          { text: 'Secure Token', type: false },
          { text: 'Purge', type: false },
          { text: 'Cache expiry', type: true },
        ],
      },
      {
        question: 'CDN 서비스의 Access log는 어디에 저장됩니까?',
        answer: [
          { text: 'NAS', type: false },
          { text: 'Archive Storage', type: false },
          { text: 'Object storage', type: true },
          { text: 'Block storage', type: false },
        ],
      },
      {
        question: 'VPC 생성시 생성 가능한 IP 주소 범위가 아닌 것은 무엇인가?',
        answer: [
          { text: '10.0.0.0/12', type: false },
          { text: '192.168.0.0/24', type: false },
          { text: '192 168.0.0/12', type: true },
          { text: '172.168.0.0/16', type: false },
        ],
      },
      {
        question: 'Video Player 에서 설정 가능한 기능이 아닌 것은 무엇인가?',
        answer: [
          { text: '재생 속도 조절', type: false },
          { text: '브라우저 최소화시 자동 정지', type: false },
          { text: '자막 지원', type: false },
          { text: '영상 다운로드', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 로드밸런서에서 제공되지 않는 로드 분배 알고리즘은 무엇인가?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted Round Robin', type: true },
          { text: 'Least Connection', type: false },
          { text: 'Source IP Hash', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 로드밸런서에서 제공하는 밸런싱 매소드 중 다음이 지칭하는 것을 고르시오. "정적 해쉬 테이블에 있는 소스 IP를 찾아 실제 서버의 풀로 요청을 배분하는 방식"',
        answer: [
          { text: 'Round-Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Least-Connection', type: false },
          { text: 'Source IP hash', type: true },
        ],
      },
      {
        question: 'VPC 내에 Public Subnet에 위치시킬 수 없는 Resource는 무엇인가?',
        answer: [
          { text: 'Cloud DB for MySQL', type: false },
          { text: '베어메탈 서버', type: false },
          { text: 'GPU 서버', type: false },
          { text: 'Kubernetes Service', type: true },
        ],
      },
      {
        question: '이미지 옵티마이저에서 섬네일 생성 규칙을 만드는 방법은?',
        answer: [
          { text: 'Query String', type: true },
          { text: 'Post', type: false },
          { text: 'Get', type: false },
          { text: 'URL', type: false },
        ],
      },
      {
        question: '"이것"이 지칭하는 상품은? "이것을 이용하면 네이버 클라우드 플랫폼 Classic 환경에서 다수 VM에 공인 IP를 할당하지 않고 단일 SNAT IP를 쉐어해서 사용할 수 있다."',
        answer: [
          { text: '공인 IP', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'CDN+', type: false },
          { text: 'GRM', type: false },
        ],
      },
      {
        question: 'Private Subnet에서 외부와 통신하기 위해 추가 생성이 필요한 서비스는?',
        answer: [
          { text: 'NAT Gateway', type: true },
          { text: 'VPC Peering', type: false },
          { text: 'Internet gateway', type: false },
          { text: 'Network ACL', type: false },
        ],
      },
      {
        question: 'Cloud DB for MS-SQL 대한 설명 중 틀린 것을 고르시오',
        answer: [
          { text: 'Cloud DB for MSSQL 상품의 경우, Standard type과 High-memory 타입을 선택할 수 있다.', type: false },
          { text: '데이터스토리지는 기본 10GB가 자동 할당된다. 10GB단위로 2TB까지 자동 증가한다.', type: true },
          { text: 'Cloud DB for MSSQL 상품은 Standard 타입에서 High-memory 타입으로 스펙업이 가능하다.', type: false },
          { text: 'Cloud DB for MSSQL 상품은 Standalone으로 생성 시, 서버가 1대만 생성된다.', type: false },
        ],
      },
      {
        question: '다음 중, Cloud Activity Tracer에서 수집된 로그에서 확인할 수 있는 정보가 아닌 것은?',
        answer: [
          { text: '작업내역', type: false },
          { text: '작업상태', type: true },
          { text: '계정유형', type: false },
          { text: '접속내역', type: false },
        ],
      },
      {
        question: '다음 Cloud Log Analytics 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '데이터는 최대 200GB 까지 저장 가능하다.', type: true },
          { text: '로그는 Object Storage로 내보낼 수 있다.', type: false },
          { text: '이용하기 위해선 서버에 Agent 설치가 필요하다.', type: false },
          { text: '대시보드를 통해 다양한 데이터를 실시간으로 확인할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중 VPC 플랫폼 기반 Cloud Hadoop 상품의 특징으로 올바른 설명은?',
        answer: [
          { text: '컴퓨팅 노드와 스토리지 노드가 분리되어 제공된다.', type: true },
          { text: '기본 저장소로 NAS Storage가 제공된다.', type: false },
          { text: '고가용성은 지원되지 않는다', type: false },
          { text: '작업자노드는 최대 4대까지 생성 가능하다.', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL의 재시작기능과 관련하여 잘못된 것은?',
        answer: [
          { text: '재시작을 실행하면 2가지 옵션(Without Fail-over, with Fail-over)가 제공된다.', type: false },
          { text: '재부팅 예약이 가능하다.', type: false },
          { text: 'With Fail-over의 경우, 서비스 다운타임이 짧으며 사용자가 설정한 SSMS 내용이 그대로 유지된다.', type: true },
          { text: 'Without Fail-over 옵션 선택 시, 서비스 다운 타임이 몇 분 이상 걸릴 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중 Cloud Advisor 상품의 리포트 기능에서 제공하지 않는 점검 항목은?',
        answer: [
          { text: 'NAS 스토리지 ACL 관리', type: true },
          { text: 'Sub Account의 Access Key 관리', type: false },
          { text: 'Object Storage 버킷 권한', type: false },
          { text: 'ACG 포트 관리', type: false },
        ],
      },
      {
        question: '다음 중, 네이버클라우드플랫폼 Cloud DB for MS-SQL의 Config group에 대한 설명 중 잘못된 것을 (모두) 고르시오.',
        answer: [
          { text: 'Cloud DB 서비스에 적용 가능한 Config group을 생성, 변경, 삭제할 수 있다.', type: false },
          { text: '기본 제공되는 Config group은 변경 및 삭제할 수 없다.', type: false },
          { text: '삭제하려는 Config group이 적용된 서버가 있더라도 삭제가 가능하다', type: true },
          { text: 'Principal DB와 Mirror DB에 서로 다른 Config Group 값에 적용 가능하다.', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'Zookeeper', type: false },
          { text: 'Hbase', type: false },
          { text: 'Impala', type: true },
          { text: 'Zepplin Notebook', type: false },
        ],
      },
      {
        question: 'NCP 모범 사례에 따라 리소스를 프로비저닝 하는데 도움이 되도록 실시간 지침을 제공하는 management 상품은?',
        answer: [
          { text: 'Organization', type: false },
          { text: 'Cloud Resource Management', type: false },
          { text: 'NAVER Cloud Advisor', type: false },
          { text: 'Cloud Advisor', type: true },
        ],
      },
      {
        question: '다음 중 네이버클라우드플랫폼 Cloud DB 생성 시에 자동 생성되거나 설정되는 것이 아닌 것은?',
        answer: [
          { text: 'Public 도메인', type: true },
          { text: 'Private 도메인', type: false },
          { text: 'ACG', type: false },
          { text: 'Event History', type: false },
        ],
      },
      {
        question: 'Cloud insight에 대한 설명 중 잘못된 것을 모두 고르시오',
        answer: [
          { text: '선택한 메트릭에 대한 알람 레벨은 info,warning 으로 실행이 가능하다.', type: true },
          { text: '서버와 관련된 메트릭을 수집이기 위해선 에이전트 설치가 필요하다.', type: true },
          { text: '실제 에이전트가 잘 동작하는지 확인하기 위해서 Linux에서는 ps -ef | grep agent 명령어로 확인이 가능하다.', type: false },
          { text: '통보 알람 기능을 제공한다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에서 각 DB 서버들의 역할을 설명한 것 중 옳지 않은 것은?',
        answer: [
          { text: 'Master : 각 DB 서비스의 Master DB 역할을 수행중인 DB Server입니다.', type: false },
          { text: 'Standby Master : 고가용성을 선택할 경우 Master DB 장애시 생성되어 자동으로 Master로 변경됩니다.', type: false },
          { text: 'Stand Alone : 고가용성을 선택하지 않을 경우 Stand Alone으로 1대만 생성되며, 장애 시 자동 복구 또는 백업을 지원하지 않습니다. 가급적 개발 DB로 사용을 권장합니다.', type: true },
          { text: 'Recovery : 백업으로부터 복구할 경우 Recovery 역할로 생성되며, 데이터 복구를 위해 읽기전용으로 제공됩니다. Recovery 역할인 DB서버로 다시 서비스하고자 할 경우 신규 DB 서비스 생성"을 통해 서비스 가능한 새로운 DB로 변경할 수 있습니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop Cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'HDFS', type: false },
          { text: 'PRESTO', type: false },
          { text: 'TAJO', type: true },
          { text: 'RANGER', type: false },
        ],
      },
      {
        question: '다음 중 CLA 서비스와 자동으로 연계된 서비스가 아닌 것은?',
        answer: [
          { text: 'Server', type: false },
          { text: 'Cloud DB', type: false },
          { text: 'Image Optimizer', type: false },
          { text: 'Object Storage', type: true },
        ],
      },
      {
        question: '회사 정책 상 클라우드에서 발생하는 로그를 영구보관 해야한다. 이럴 경우, CLA에 설정해줘야 하는 옵션은?',
        answer: [
          { text: 'Log expansion를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Archive Log를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Export Log를 통해 Object storage 상에 로그가 저장될 시 있도록 설정', type: true },
          { text: 'Log store를 통해 Object storage상에 로그가 저장될 수 있도록 설정', type: false },
        ],
      },
      {
        question: '다음 중, CLA (Cloud Log Analytics) 에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: 'Cloud DB for MySQL 로고, 아파치 로그 등이 템플릿으로 제공됩니다.', type: false },
          { text: '고객의 데이터는 논리적으로 분리된 개별 저장소에 2개 이상의 복제본으로 분산 저장됩니다.', type: false },
          { text: '저장된 데이터가 100GB를 초과하면 최대 30%까지 과거 데이터부터 매일 삭제될 수 있습니다.', type: false },
          { text: '다른 연계상품을 사용하고 있을 경우에는 연계상품이 해지될 때 CLA 데이터가 삭제됩니다.', type: true },
        ],
      },
      {
        question: '다음 중, CLA와 연계된 서비스는?',
        answer: [
          { text: 'Object Storage', type: true },
          { text: 'File Storage', type: false },
          { text: 'NAS', type: false },
          { text: 'Block Storage', type: false },
        ],
      },
      {
        question: 'Cloud DB for Redis 상품에서 제공되는 CPU core 개수는?',
        answer: [
          { text: '1core', type: false },
          { text: '2core', type: false },
          { text: '3core', type: false },
          { text: '4core', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL에 대한 설명으로 옳지 않은 것은?',
        answer: [
          { text: '고가용성 지원 선택 시 이중화를 위해 액티브 마스터 DB와 스탠바이 마스터 DB 총 2대의 서버가 기본생성됩니다.', type: false },
          { text: '슬레이브 DB는 데이터베이스의 읽기부하분산을 위해 생성하는 복제 DB로 한 대 단위로 생성됩니다.', type: false },
          { text: '기본 제공되는 100GB의 디스크는 운영체제를 위한 디스크로 별도로 증설이나 추가되지 않으며, 이용 요금에 포함되어 있습니다.', type: true },
          { text: 'DB 데이터를 저장하기 위한 데이터 스토리지는 별도로 사용량에 따른 시간 요금으로 과금됩니다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '자동 Fail over 기능을 제공합니다.', type: false },
          { text: '최대 5대까지 복제 슬레이브 DB 확장이 가능합니다.', type: true },
          { text: '매일 자동으로 DB백업이 진행되며 이에 전에 60일까지 보관됩니다.', type: true },
          { text: 'Slow Query 를 해결하기 위한 자동화된 튜닝을 제공합니다.', type: false },
        ],
      },
      {
        question: '다음 중, Sub account에 대한 설명 중 옳은 것을 모두 고르시오.',
        answer: [
          { text: '서브계정들이 이용할 수 있는 권한들을 묶어 놓은 것은 정책(policy)이다.', type: true },
          { text: '2차 인증까지 설정이 가능하다.', type: true },
          { text: '서브 계정을 일시정지 할 수 있는 기능을 제공한다.', type: true },
          { text: '서브계정에 대한 비밀번호 만료일은 사용자가 변경이 불가능하다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL 상품의 백업에 관련된 내용 중 틀린 것은?',
        answer: [
          { text: 'Stand Alone 서버도 DB 백업에 사용할 수 있습니다.', type: false },
          { text: '기본적인 백업이 하루 한번씩 매일 수행되며, 사용자 설정에 따라 최대 30일까지 보관할 수 있습니다.', type: false },
          { text: 'backup 파일 복원 요청시 신규 VM이 생성되며, DB 서버는 Recovery 모드로 복권되며 데이터 조회만 가능합니다.', type: false },
          { text: '손쉬운 backup 방법은 백업 요청서를 작성하여 신청하고 서버에 Agent를 설치하면 됩니다.', type: true },
        ],
      },
      {
        question: '다음 중, Cloud DB for MySQL에 제공되는 High-memory 타입의 최고 VM사양은?',
        answer: [
          { text: '16VCPU, 128GB', type: false },
          { text: '32VCPU, 128GB', type: false },
          { text: '32CPU, 256GB', type: true },
          { text: '48VCPU, 256GB', type: false },
        ],
      },
      {
        question: '다음 중 Cloud DB for MySQL 에 대한 설명으로 맞는 것은?',
        answer: [
          { text: '매일 자동으로 DB백업이 진행되며 최대 6개월까지 보관됩니다.', type: false },
          { text: '최대 4대까지 복제 슬레이브 DB확장이 가능하여 읽기 부하 분산이 가능합니다.', type: false },
          { text: '장애 또는 이벤트 발생시 사용자의 메일과 SMS로 장애 현황을 알려드립니다.', type: true },
          { text: '기본 10GB 데이터 스토리지를 제공하며, 10GB 단위로 3TB까지 자동으로 용량이 증가합니다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에 대한 설명으로 옳지 않은 것은?',
        answer: [
          { text: '다양한 유형의 서버타입을 제공하며 서비스 중에 한 번의 재시작만으로 서버 타입을 변경할 수 있습니다.', type: false },
          { text: '네이버 서비스에서 안정성이 검증된 버전을 제공합니다.', type: false },
          { text: '기본 10GB 데이터 스토리지를 제공하며, 10GB 단위로 6TB까지 자동으로 용량이 증가합니다.', type: false },
          { text: '마스터DB가 스탠바이 DB로 Fail-over 할 때 DNS방식으로 이동화를 제공함으로써, 어플리케이션의 변경이 필요합니다.', type: true },
        ],
      },
      {
        question: '다음 중 Cloud Insight 상품에 대한 내용으로 올바르지 않은 것은?',
        answer: [
          { text: '감시대상에 대해 알람을 받을 수 있다.', type: false },
          { text: '감시대상 상품은 VPC와 Classic 플랫폼이 상이하다', type: false },
          { text: '사용자가 별도로 agent 설치를 해야한다.', type: true },
          { text: 'Notification Recipient 메뉴를 통해 통보 대상자를 생성할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중, 네이버클라우드플랫폼 VPC 환경에서의 Cloud Insight에 대한 설명 중 옳지 않은 것은?',
        answer: [
          { text: '상품들의 성능 지표를 통합 관리하고, 장애 발생 시 담당자에게 장애 정보를 신속히 전달할 수 있는 모니터링 서비스', type: false },
          { text: '수집된 네이버 클라우드 플랫폼 및 사용자 애플리케이션의 성능 지표를 하나의 Dashboard로 시각화하여 정보를 보여준다.', type: false },
          { text: 'Sub Account는 Cloud insight를 이용할 방법이 없다.', type: true },
          { text: 'Cloud Insight는 수집한 성능 지표를 최대 1년간 보관한다.', type: false },
        ],
      },
      {
        question: '다음 중 CDN 서비스에서 원본으로 설정이 가능한 스토리지는?',
        answer: [
          { text: 'Archive Storage', type: false },
          { text: 'Object Storage', type: true },
          { text: 'Block storage', type: false },
          { text: 'NAS', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 ACG 룰이 적용되는 장치는 무엇인가요?',
        answer: [
          { text: '서버', type: false },
          { text: '서버 NIC', type: true },
          { text: 'IP', type: false },
          { text: 'Subnet', type: false },
        ],
      },
      {
        question: 'Certificate Manager와 연동이 가능한 서비스를 모두 고르시오.',
        answer: [
          { text: 'Load-balancer', type: true },
          { text: 'CDN', type: true },
          { text: 'Global Route Manger', type: false },
          { text: 'VPC', type: false },
        ],
      },
      {
        question: '210.118.23.45/28 IP 주소의 IP 대역은?',
        answer: [
          { text: '210.118.23.1 - 210.118.23.62', type: false },
          { text: '210.118.23.1- 210.118.23.254', type: false },
          { text: '210.118.20.1- 210.118.23.254', type: false },
          { text: '210.118.23.32-210.118.23.47', type: true },
        ],
      },
      {
        question: 'D Class IP 주소의 주소 대역은?',
        answer: [
          { text: '0.0.0.0 -127.255.255.255', type: false },
          { text: '128.0.0.0 - 191.255.255.255', type: false },
          { text: '224.0.0.0 - 239.255.255.255', type: true },
          { text: '240.0.0.0 - 255.255.255.255', type: false },
        ],
      },
      {
        question: '다음 중 CDN 서비스에서 콘텐츠에 대한 접근을 제한할 수 있는 것을 모두 고르시오.',
        answer: [
            { text: 'Ignore Query String', type: false },
            { text: 'Referrer Domain', type: true },
            { text: 'BYPASS', type: false },
            { text: 'Secure-Token', type: true },
        ],
      },
      {
          question: 'VOD 트랜스코더를 통해 만들어진 영상의 파일 확장자는 무엇인가?',
          answer: [
              { text: 'AVI', type: false },
              { text: 'MP4', type: true },
              { text: 'MOV', type: false },
              { text: 'WMV', type: false },
          ],
      },
      {
        question: '다음 중 Network ACL에 대한 설명 중 옳은 것을 모두 고르시오.',
        answer: [
          { text: 'VPC에 종속적이다.', type: true },
          { text: '서버의 NIC단위로 적용이 된다.', type: false },
          { text: 'default de all permit이다.', type: true },
          { text: '설정된 우선순위 보다는 모든 규칙을 확인하고 반영한다.', type: false },
        ],
      },
      {
        question: 'VPC 생성시 생성 가능한 IP 주소 범위가 아닌 것은 무엇인가?',
        answer: [
          { text: '10.0.0.0/8', type: false },
          { text: '127.0.0.0/8', type: true },
          { text: '172.16.0.0/12', type: false },
          { text: '192.168.0.0/16', type: false },
        ],
      },
      {
        question: '타 계정과 VPC Peering시 필요한 정보가 아닌 것은 무엇인가?',
        answer: [
          { text: '로그인 ID', type: false },
          { text: 'VPC ID', type: false },
          { text: 'VPC 명', type: false },
          { text: 'VPC 네트웍 주소', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 플랫폼의 네트워크 환경에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
          { text: '서버 당 할당할 수 있는 공인 IP의 최대 갯수는 2개이다.', type: false },
          { text: 'Private Subnet을 이용해서 외부와 단절된 사설 네트워크를 생성할 수 있다.', type: true },
          { text: 'Private Subnet에서 외부 인터넷으로 연결이 필요한 경우, Internet Gateway를 생성한 후 연동해야 한다.', type: false },
          { text: 'Network Interface의 Secondary IP 기능을 이용하면 HA 솔루션 등에 활용이 가능하다.', type: true },
        ],
      },
      {
        question: '이미지 옵티마이저에서 리사이즈 및 크롭 옵션이 아닌 것은?',
        answer: [
          { text: 'W', type: false },
          { text: 'align', type: false },
          { text: 'bgcolor', type: true },
          { text: 'faceopt', type: false },
        ],
      },
      {
        question: 'GRM의 로드밸런싱 타입 중, 각 리소스별로 가중치를 주어 요청에 대한 트래픽을 분산하는 방식은?',
        answer: [
          { text: 'GeoLocation', type: false },
          { text: 'Round-robin', type: false },
          { text: 'Weighted', type: true },
          { text: 'Fail-over', type: false },
        ],
      },
      {
        question: '다음 중, WMS에서 \'입력한 로그를 포함하고 있는 모든 로그를 필터링하고 싶을 때 선택하는 필터링 옵션은?',
        answer: [
          { text: 'url', type: false },
          { text: 'urlprefix', type: true },
          { text: 'js', type: false },
          { text: 'Jsprefix', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼에서 제공하는 Analytics 상품이 아닌 것은?',
        answer: [
          { text: 'Elasticsearch Service', type: false },
          { text: 'Cloud Data Streaming Service', type: false },
          { text: 'Cloud Platform Analytics', type: true },
          { text: 'Data Analytics Service', type: false },
        ],
      },
      {
        question: '다음 중, Cloud Activity Tracer에 대한 설명 중 잘못된 것은?',
        answer: [
          { text: 'Console 활동에 대한 로그만 수집이 가능하다.', type: true },
          { text: 'Cloud Log Analytics와도 연계가 되어 계정 활동 로그 수집 및 분석이 가능하다.', type: false },
          { text: '메인 계정 뿐만 아니라 서브계정에 대한 활동 로그도 수집한다.', type: false },
          { text: 'Cloud Activity Tracer 페이지 자체적으로 검색 및 필터링 기능을 제공한다.', type: false },
        ],
      },
      {
        question: '모든 계정의 비용을 통합 결제하고, 모든 계정의 비용을 중앙에서 확인할 수 있으며, 계정 별로 이용 가능한 상품과 그 한도를 정책으로 만들어 관리할 수 있도록 도와주는 상품은?',
        answer: [
          { text: 'Organization', type: true },
          { text: 'Sub Account', type: false },
          { text: 'Cloud Log Analytics', type: false },
          { text: 'Cloud Account Management', type: false },
        ],
      },
      {
        question: 'Cloud Hadoop의 근간 스토리지로 사용 가능한 것을 모두 고르시오.',
        answer: [
          { text: 'Object Storage', type: true },
          { text: 'Archive Storage', type: false },
          { text: 'NAS', type: false },
          { text: 'Block Storage', type: true },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 DB 서버의 특징으로 옳지 않은 것은?',
        answer: [
          { text: '설치형 DB의 경우 클릭 한 번으로 HA 구성이 가능하다.', type: true },
          { text: 'CDB for MySQL은 스토리지 용량이 최대 6TB까지 자동 증설된다.', type: false },
          { text: 'CDB for MSSQL의 경우 스토리지 용량이 최대 2TB까지 자동 증설된다.', type: false },
          { text: 'CDB 상품은 자체 백업 기능을 제공한다.', type: false },
        ],
      },
      {
        question: '다음 중 Sub Account 상품에 대한 설명으로 올바르지 않은 것은?',
        answer: [
          { text: '다수의 사용자가 동일한 인프라를 이용해야 할 때 사용한다.', type: false },
          { text: '서브계정은 스스로 API Key 발급이 불가능하다.', type: true },
          { text: '2차인증 설정이 가능하다.', type: false },
          { text: '비밀번호 만료일 설정이 가능하다.', type: false },
        ],
      },
      {
        question: 'CDN+에 요청된 Log에서 얻을 수 있는 정보를 모두 고르시오.',
        answer: [
          { text: '접속한 서버 IP', type: true },
          { text: 'Client가 요청한 URI', type: true },
          { text: '응답 코드 (2xx, 3xx, 4xx 등)', type: true },
          { text: 'Cache Hit/Miss 정보 (TCP_HIT, TCP_MISS 등)', type: true },
        ],
      },
      {
        question: 'D Class IP 주소의 대역은?',
        answer: [
          { text: '0.0.0.0 - 127.255.255.255', type: false },
          { text: '128.0.0.0 - 191.255.255.255', type: false },
          { text: '224.0.0.0 - 239.255.255.255', type: true },
          { text: '240.0.0.0 - 255.255.255.255', type: false },
        ],
      },
      {
        question: '이미지 옵티마이저에서 만들어진 섬네일을 호출하는 URL의 구성요소가 아닌 것은?',
        answer: [
          { text: 'CDN 도메인', type: false },
          { text: '오브젝트 스토리지 내의 파일명', type: false },
          { text: '섬네일 생생 옵션', type: false },
          { text: '토큰키', type: true },
        ],
      },
      {
        question: 'VDN Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'VOD Transcoder는 CDN과 연계가 가능하다.', type: false },
          { text: 'Input Object Storage를 사용할 수 있다.', type: false },
          { text: '썸네일 설정시 각 output당 10개의 썸네일이 추출된다.', type: false },
          { text: 'Output File Storage Object Storage에 설정할 수 있다', type: true },
        ],
      },
      {
        question: '다음중 UDP로만 제공되는 서비스는 무엇인가?',
        answer: [
          { text: 'DNS 서비스', type: false },
          { text: '넷 바이오스 서비스', type: false },
          { text: 'NTP 서비스', type: true },
          { text: 'RPC 서비스', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 로드밸런서에 대한 설명으로 옳은 것을 고르시오',
        answer: [
          { text: '환경에는 총 두 가지 종류의 로드밸런서가 존재한다.', type: true },
          { text: 'VPC 환경에서는 로드밸런서 생성시 멀티존 생성이 필수적이다.', type: false },
          { text: '서비스할 프로토콜의 종류에 따라 Application/Network 타입으로 갈라진다.', type: false },
          { text: '세션 유지 기능이 필요한 경우, Network 로드밸런서를 사용해야한다.', type: false },
        ],
      },
      {
        question: '이미지 옵티마이저에서 리사이즈 및 크롭 옵션이 아닌 것은?',
        answer: [
          { text: 'w', type: false },
          { text: 'align', type: false },
          { text: 'bgcolor', type: true },
          { text: 'faceopt', type: false },
        ],
      },
      {
        question: '네이버클라우드 플랫폼 Global DNS 상품이 지원하는 레코드 타입이 아닌 것을 고르시오',
        answer: [
          { text: 'A', type: false },
          { text: 'NS', type: false },
          { text: 'CNAME', type: false },
          { text: 'SOA', type: true },
        ],
      },
      {
        question: '다음 네 개의 상품 중 세 개의 상품은 네이버 클라우드 플랫폼의 네트워크망과 외부망간의 통신이 필요로 할 때 사용됩니다. 나머지 이질적인 상품 하나는 무엇인가요?',
        answer: [
          { text: 'Cloud Connect', type: false },
          { text: 'Cloud Insight', type: true },
          { text: 'IPSEC VPN', type: false },
          { text: 'SSL VPN', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 ACG 룰이 적용되는 장치는 무엇인가요?',
        answer: [
          { text: '서버', type: false },
          { text: '서버 NIC', type: true },
          { text: 'IP', type: false },
          { text: 'Subnet', type: false },
        ],
      },
      {
        question: 'CIDR에서 서브넷이 27bit인 경우 몇개의 IP를 사용할 수 있는가?',
        answer: [
          { text: '1', type: false },
          { text: '6', type: false },
          { text: '14', type: false },
          { text: '30', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 GRM IP 리소스 타입의 헬스 체크 interval로 설정할 수 없는 것을 고르시오.',
        answer: [
          { text: '30', type: false },
          { text: '60', type: false },
          { text: '120', type: true },
          { text: '180', type: false },
        ],
      },
      {
        question: '다음 중 TCP 프로토콜을 이용하는 서비스가 아닌것을 고르시오.',
        answer: [
          { text: 'SSH', type: false },
          { text: 'FTP', type: false },
          { text: 'NTP', type: true },
          { text: 'RDP', type: false },
        ],
      },
      {
        question: '다음의 설명이 지칭하는 용어는? "CDN 캐시서버(엣지서버)에서 캐싱된 데이터를 지우는 기능"',
        answer: [
          { text: 'HIT', type: false },
          { text: 'Streaming', type: false },
          { text: 'Purge', type: true },
          { text: 'Cache expiry', type: false },
        ],
      },
      {
        question: '네이버클라우드 CDN+에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: '오리진으로 네이버 클라우드 플랫폼의 Object Storage 만 사용할 수 있다.', type: true },
          { text: '국내 서비스에 최적화된 CDN 상품이다.', type: false },
          { text: '개인 소장 도메인을 CDN 서비스 도메인으로 사용할 수 있다.', type: false },
          { text: 'CDN 도메인을 HTTPS로 사용하기 위해서는 오리진에서도 HTTPS를 지원해야 한다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 로드밸런서에서 제공되지 않는 로드 분배 알고리즘은 무엇인가?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted Round Robin', type: true },
          { text: 'Least Connection', type: false },
          { text: 'Source IP Hash', type: false },
        ],
      },
      {
        question: 'OSI 7 Layer의 2계층에 해당하는 네트워크 장비는?',
        answer: [
          { text: '라우터', type: false },
          { text: '로드밸런서', type: false },
          { text: '스위치', type: true },
          { text: '방화벽', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 로드밸런서에서 제공하는 밸런싱 매소드 중 다음이 지칭하는 것을 고르시오. "정적 해쉬 테이블에 있는 소스 IP를 찾아 실제 서버 풀로 요청을 배분하는 방식"',
        answer: [
          { text: 'Round-Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Least-Connection', type: false },
          { text: 'Source IP hash', type: true },
        ],
      },
      {
        question: 'GRM에서 제공하는 밸런싱 메소드가 아닌 것을 고르시오.',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Source IP hash', type: true },
          { text: 'Weighted', type: false },
          { text: 'Geolocation', type: false },
        ],
      },
      {
        question: '다음 중, Cloud Activity Tracer에서 수집된 로그에서 확인할 수 있는 정보가 아닌 것은?',
        answer: [
          { text: '작업내역', type: false },
          { text: '작업상태', type: false },
          { text: '계정유형', type: false },
          { text: '접속내역', type: true },
        ],
      },
      {
        question: '네이버클라우드플랫폼 Cloud DB for MySQL에서 DB 및 User 생성에 대해 옳은 것은?',
        answer: [
          { text: '쿼리를 통해 DB 및 User 생성이 가능하다', type: false },
          { text: '쿼리를 통해 DB 생성만 가능하다', type: false },
          { text: '쿼리를 통해 User 생성만 가능하다', type: false },
          { text: '쿼리를 통해 DB와 USER를 생성하는 것은 불가능하며, 콘솔을 통해 기능을 제공하고 있다.', type: true },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL의 재시작 기능과 관련하여 잘못된 것은?',
        answer: [
          { text: '재시작을 실행하면 2가지 옵션(Without Fail-over, With Fail-over)가 제공된다.', type: false },
          { text: '재부팅 예약이 가능하다', type: false },
          { text: 'With Fail-over의 경우, 서비스 다운타임이 짧으며, 사용자가 설정한 SSMS 내용이 그대로 유지된다.', type: false },
          { text: 'Without Fail-over 옵션 선택 시, 서비스 다운 타임이 몇 분 이상 걸릴 수 있다.', type: true },
        ],
      },
      {
        question: '다음 중, 네이버클라우드플랫폼 Cloud DB for MS-SQL의 Config group에 대한 설명 중 잘못된 것을 (모두) 고르시오',
        answer: [
          { text: 'Cloud DB 서비스에 적용 가능한 Config group을 생성, 변경, 삭제할 수 있다.', type: false },
          { text: '기본 제공되는 Config group은 변경 및 삭제할 수 없다.', type: false },
          { text: '삭제하려는 Config group이 적용된 서버가 있더라도 삭제가 가능하다.', type: true },
          { text: 'Principal DB와 Mirror DB에 서로 다른 Config group 값이 적용 가능하다.', type: true },
        ],
      },
      {
        question: '다음 중, 네이버클라우드플랫폼 VPC 환경에서의 Cloud Insight에 대한 설명 중 옳지 않은 것은?',
        answer: [
          { text: '상품들의 성능 지표를 통합 관리하고, 장애 발생 시 담당자에게 장애 정보를 신속히 전달할 수 있는 모니터링 서비스', type: false },
          { text: '수집된 네이버 클라우드 플랫폼 및 사용자 애플리케이션의 성능 지표를 하나의 Dashboard로 시각화하여 정보를 보여준다', type: false },
          { text: 'Sub Account Cloud Insight를 이용할 방법이 없다.', type: true },
          { text: 'Cloud Insight는 수집한 성능 지표를 최대 1년간 보관한다.', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼 Cloud DB for MySQL에서 제공하는 이벤트 항목 중 Slow Query Count 항목에 대해 옳은 설명은?',
        answer: [
          { text: '1초 이상 실행되는 쿼리 개수', type: true },
          { text: '쿼리 요청시간이 2초 이상 걸리는 쿼리 개수', type: false },
          { text: 'Query_time이 3초 이상 걸리는 쿼리개수', type: false },
          { text: '슬로우쿼리 기준값은 10초이다.', type: false },
        ],
      },
      {
        question: '다음 중 클래식 플랫폼에서 Preinstall Image로 제공하고 있지 않은 DBMS는?',
        answer: [
          { text: 'MariaDB', type: false },
          { text: 'Redis', type: false },
          { text: 'Aurora', type: true },
          { text: 'MSSQL', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼에서 제공하는 Analytics 상품이 아닌 것은?',
        answer: [
          { text: 'Elasticsearch Service', type: false },
          { text: 'Cloud Data Streaming Service', type: false },
          { text: 'Cloud Platform Analytics', type: true },
          { text: 'Data Analytics Service', type: false },
        ],
      },
      {
        question: '다음중 Cloud DB for MySQL 상품 특징이 아닌 것은?',
        answer: [
          { text: 'Cloud DB 상품은 고가용성 지원을 설정할 경우, Active master DB와 Standby master DB, 총 2대의 서버가 기본 생성된다.', type: false },
          { text: '슬레이브 DB는 데이터베이스의 읽기부하 분산을 위해 생성하는 복제 DB로 한 대 단위로 생성된다.', type: false },
          { text: '기본 제공되는 50GB의 디스크는 운영체제를 위한 디스크로 추가 증설이 가능하고, 이용 요금에 포함되지 않음', type: true },
          { text: 'DB 데이터를 저장하기 위한 데이터 스토리지는 별도로 사용량에 따른 시간 요금으로 과금', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에서 설정할 수 있는 DB이벤트 항목이 아닌것은?',
        answer: [
          { text: 'Connections', type: false },
          { text: 'Slow Query', type: false },
          { text: 'Replication', type: false },
          { text: 'Backup', type: true },
        ],
      },
      {
        question: '다음 중, Cloud Activity Tracer에 대한 설명 중 옳지 않은 것은?',
        answer: [
          { text: 'Cloud Activity Tracer는 155개 종류의 네이버클라우드플랫폼 계정 활동 로그를 자동으로 수집하고 기록합니다.', type: false },
          { text: 'Cloud Activity Tracer를 사용하기 위해서는 에이전트 설치가 필요합니다.', type: false },
          { text: 'Cloud Activity Tracer는 CLA와의 연동이 필수적입니다.', type: true },
          { text: 'Cloud Activity Tracer는 로그 필터링 기능을 제공하고 있습니다.', type: false },
        ],
      },
      {
        question: '다음 중 Cloud DB for MySQL에 대한 설명으로 맞는 것은?',
        answer: [
          { text: '매일 자동으로 DB 백업이 진행되며 최대 6개월까지 보관됩니다.', type: false },
          { text: '최대 4대까지 복제 슬레이브 DB 확장이 가능하며 읽기 부하 분산이 가능합니다.', type: false },
          { text: '장애 또는 이벤트 발생시 사용자의 메일과 SMS로 빠르게 장애 현황을 알려드립니다.', type: true },
          { text: '기본 10GB 데이터 스토리지를 제공하며, 10GB 단위로 3TB까지 자동으로 용량이 증가합니다.', type: false },
        ],
      },
      {
        question: '서비스 페이지 (PC 또는 웹)에 접속하는 실 사용자 데이터를 수집하여 국가, 브라우저, Device 별로 웹 페이지 속도와 PV Count 분석해주는 네이버클라우드 플랫폼 서비스는 무엇인지 고르시오.',
        answer: [
          { text: 'ELSA', type: false },
          { text: 'RUA', type: true },
          { text: 'CLA', type: false },
          { text: 'WMS', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에 대한 설명으로 틀린것은?',
        answer: [
          { text: '자동 Fail-over 기능을 제공합니다', type: false },
          { text: '최대 5대까지 복제 슬레이브 DB 확장이 가능합니다.', type: false },
          { text: '매일 자동으로 DB 백업이 진행되며 데이터는 최대 30일까지 보관됩니다.', type: false },
          { text: 'Slow Query를 해결하기 위한 자동화된 튜닝을 제공합니다.', type: true },
        ],
      },
      {
        question: '다음 중, WMS에서 측정 가능한 국가가 아닌 곳은?',
        answer: [
          { text: '가나', type: true },
          { text: '미국', type: false },
          { text: '싱가폴', type: false },
          { text: '일본', type: false },
        ],
      },
      {
        question: '현재 네이버클라우드 플랫폼을 통해서 사용할 수 있는 Database Service가 아닌 것은?',
        answer: [
          { text: 'Cloud DB for ORACLE', type: true },
          { text: 'PostgreSQL', type: false },
          { text: 'Cloud DB for MySQL', type: false },
          { text: 'MariaDB', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL의 백업 기능에 대해 잘못 설명한 것은?',
        answer: [
          { text: '백업 파일은 별도 데이터 스토리지에 저장됩니다.', type: false },
          { text: '사용자가 백업 시간을 설정할 수 없으므로, 임의의 시간에 백업이 시작됩니다.', type: false },
          { text: '백업 완료 시점 기준의 데이터로 복구가 가능합니다.', type: false },
          { text: 'Stand Alone 서버도 DB 백업 및 복구 기능이 사용 가능합니다.', type: true },
        ],
      },
      {
        question: '210.118.23.45/28 IP 주소의 IP 대역은?',
        answer: [
          { text: '210.118.23.1-210.118.23.62', type: false },
          { text: '210.118.23.1 210.118.23.254', type: false },
          { text: '210.118.20.1-210.118.23.254', type: false },
          { text: '210.118.23.32-210.118.23.47', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서의 로드밸런서 상품에 대한 설명으로 잘못된 것을 모두 고르시오.',
        answer: [
          { text: 'Public Subnet에 생성 가능하다.', type: true },
          { text: 'Application 로드 밸런서는 Proxy 타입이다.', type: false },
          { text: '부하처리 성능에 따라 Small/Medium/ Large 중 선택할 수 있다.', type: false },
          { text: '성능은 최대 10만 CPS까지 지원한다', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 플랫폼의 네트워크 환경에 대한 설명으로 옳은 것을 모두 고르시오',
        answer: [
          { text: '서버 당 할당할 수 있는 공인 IP의 최대 갯수는 2개이다.', type: false },
          { text: 'Private Subnet을 이용해서 외부와 단절된 사설 네트워크를 생성할 수 있다.', type: true },
          { text: 'Private Subnet에서 외부 인터넷으로 연결이 필요한 경우, Internet Gateway를 생성한 후 연동해야 한다.', type: false },
          { text: 'Network Interface Secondary IP 기능을 이용하면 HA 솔루션 등에 활용이 가능하다.', type: true },
        ],
      },
      {
        question: '다음 네이버클라우드 플랫폼 VPC 환경에서의 로드밸런서 상품에 대한 설명 중 틀린것은?',
        answer: [
          { text: 'Target Group은 하나 이상의 등록된 대상에 요청을 분배하는데 사용됩니다.', type: false },
          { text: 'Target Group Zone Subnet0|| 상관없이 동일 VPC내 모든 대상(서버)을 등록할 수 있습니다.', type: false },
          { text: 'Target Group은 편의를 위해 존재하는 상품으로, Target Group 생성 없이도 로드 밸런서에 서버를 연결(bind)할 수 있습니다.', type: true },
          { text: 'Target Group은 등록 대상에 대하여 정의한 헬스체크를 수행합니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VOD Transcoder에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: '트랜스코딩된 파일에 캡션 기능을 제공한다.', type: true },
          { text: '변환 필요 파일은 네이버 클라우드 플랫폼 Object Storage에 있어야 한다.', type: false },
          { text: '트랜스 코딩된 파일은 잡 생성시 지정한 Object Storage 버킷에 저장된다.', type: false },
          { text: 'Custom Preset 기능을 제공한다.', type: false },
        ],
      },
      {
        question: 'IP 주소에 해당되는 MAC Address를 얻기 위한 프로토콜은?',
        answer: [
          { text: 'ARP', type: true },
          { text: 'TCP', type: false },
          { text: 'NTP', type: false },
          { text: 'FTP', type: false },
        ],
      },
      {
        question: '다음 중 HA 솔루션 등에 활용하기 위한 보조 IP 기능을 제공해주는 상품이름은?',
        answer: [
          { text: 'Network Interface - Secondary IP', type: true },
          { text: 'Network Interface - HAIP', type: false },
          { text: 'Server – Secondary IP', type: false },
          { text: 'Server - HP IP', type: false },
        ],
      },
      {
        question: '다음 Cloud Log Analytics 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '데이터는 최대 200GB까지 저장 가능하다.', type: true },
          { text: '로그는 Object Storage로 내보낼 수 있다.', type: false },
          { text: '이용하기 위해선 서버에 Agent 설치가 필요하다.', type: false },
          { text: '대시보드를 통해 다양한 데이터를 실시간으로 확인할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL에서 수행가능한 작업이 아닌 것은?',
        answer: [
          { text: '재시작 가능', type: false },
          { text: 'DB Server 삭제', type: false },
          { text: 'DB Server 일시 정지 기능', type: true },
          { text: 'Monitoring', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS-SQL 대한 설명 중 틀린 것을 고르시오',
        answer: [
          { text: 'Cloud DB for MSSQL 상품의 경우, Standard type과 High-memory 타입을 선택할 수 있습니다', type: false },
          { text: '데이터 스토리지는 기본 10GB가 자동 할당되며, 10GB 단위로 2TB까지 자동 증가합니다', type: false },
          { text: 'Cloud DB for MSSQL Standard 타입에서 High-memory 타입으로 스펙업이 가능합니다.', type: true },
          { text: 'Cloud DB for MSSQL 상품은 Standalone으로 생성 시, 서버가 1대만 생성됩니다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL에서 각 DB 서버들의 역할을 설명한 것중 옳지 않은 것은?',
        answer: [
          { text: 'Master: 각 DB 서비스의 Master DB 역할을 수행중인 DB Server 입니다.', type: false },
          { text: 'Standby Master : 고가용성을 선택할 경우 Master DB 장애 시 생성되며 자동으로 Master로 변경됩니다.', type: true },
          { text: 'Stand Alone : 고가용성을 선택하지 않을 경우 Stand Alone 으로 1대만 생성되며, 장애 시 자동 복구 또는 백업을 지원하지 않습니다. 가급적 개발 DB로 사용을 권장합니다.', type: false },
          { text: 'Recovery : 백업으로부터 복구할 경우 Recovery 역할로 생성되며, 데이터 복구를 위해 읽기 전용으로 제공됩니다. Recovery 역할인 DB 서버로 다시 서비스 하고자 할 경우 “신규 DB 서비스 생성"을 통해 서비스 가능한 새로운 DB로 변경할 수 있습니다.', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL 으로의 접근 방식에 대한 설명을 잘못된 것은?',
        answer: [
          { text: '포트포워딩을 이용하여 접근', type: true },
          { text: '네이버클라우드 플랫폼 VM에서 Private 도메인 이용하여 접근', type: false },
          { text: 'SSL VPN을 이용하여 접근', type: false },
          { text: 'Public 도메인을 이용하여 접근', type: false },
        ],
      },
      {
        question: '다음중 Cloud DB for MySQL 상품 특징이 아닌 것은?',
        answer: [
          { text: 'Cloud DB 상품은 고가용성 지원을 설정할 경우, Active master DB와 Standby master DB, 총 2대의 서버가 기본 생성된다.', type: false },
          { text: '슬레이브 DB는 데이터베이스의 읽기부하 분산을 위해 생성하는 복제 DB로 한 대 단위로 생성된다.', type: false },
          { text: '기본 제공되는 100GB의 디스크는 운영체제를 위한 디스크로 추가 증설이 가능하고, 이용 요금에 포함되지 않음', type: true },
          { text: 'DB 데이터를 저장하기 위한 데이터 스토리지는 별도로 사용량에 따른 시간 요금으로 과금', type: false },
        ],
      },
      {
        question: 'URL만 등록하면 웹 페이지 응답 속도 및 정상 동작 여부를 실시간으로 확인할 수 있으며 사용자가 웹 서비스를 이용하는 행동 패턴을 고려해 시나리오를 작성할 수 있는 네이버 클라우드 플랫폼 서비스는?',
        answer: [
          { text: 'Effective Log Search & Analytics(ELSA)', type: false },
          { text: 'Network Traffic Monitoring', type: false },
          { text: 'Web service Monitoring System(WMS)', type: false },
          { text: 'Real User Analytics(RUA)', type: true },
        ],
      },
      {
        question: '다음 중, Cloud DB for Redis의 백업 데이터 최대 보관일은?',
        answer: [
          { text: '5일', type: false },
          { text: '7일', type: true },
          { text: '10일', type: false },
          { text: '14일', type: false },
        ],
      },
      {
        question: '다음 중, CLA와 연계된 서비스는?',
        answer: [
          { text: 'Object Storage', type: true },
          { text: 'File Storage', type: false },
          { text: 'NAS', type: false },
          { text: 'Block Storage', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 GRM (Global Route Manager)에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
          { text: 'IP, 도메인 리소스에 대한 분기가 가능하다', type: false },
          { text: '도메인 리소스에 대한 헬스체크 설정이 가능하다.', type: true },
          { text: '헬스체크에 대한 로그는 제공하지 않는다.', type: false },
          { text: 'GRM 리소스 타입은 동일하게 설정해야 한다. (IP와 도메인을 같이 GRM에 바인드할 수 없다.)', type: false },
        ],
      },
      {
        question: 'TCP/IP에서 인터넷 계층에 속하지 않는 프로토콜은?',
        answer: [
          { text: 'TCP', type: true },
          { text: 'IPv6', type: false },
          { text: 'ARP', type: false },
          { text: 'IPv6', type: false },
        ],
      },
      {
        question: 'GRM에서 제공하는 메소드 중 다음이 지칭하는 것을 고르시오. "사용자의 캐시 DNS를 기준으로 대륙, 혹은 구간 단위 분기가 가능하며, 사용자가 직접 CIDR Map 구성도 가능하다."',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Source IP hash', type: false },
          { text: 'GeoLocation', type: true },
        ],
      },
      {
        question: 'VOD Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'Preset은 1~5까지 설정 가능하다.', type: false },
          { text: 'Codec H.265만 지원한다.', type: true },
          { text: 'Thumbnail을 자동 생성한다.', type: false },
          { text: 'Output File Storage2 Object Storage에 저장할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중 포트 번호와 프로토콜이 잘못 짝 지어진 것은?',
        answer: [
          { text: '22-SSH', type: false },
          { text: '23-FTP', type: true },
          { text: '53-DNS', type: false },
          { text: '143-imap', type: false },
        ],
      },
      {
        question: '다음의 설명 중 "이것이 지칭하는 상품은? "이것을 이용하면 네이버 클라우드 플랫폼 Classic 환경에서 다수 VM에 공인IP를 할당하지 않고 단일 SNAT IP를 쉐어해서 사용할 수 있다."',
        answer: [
          { text: '공인 IP', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'CDN+', type: false },
          { text: 'GRM', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Live Station에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
          { text: 'Thumbnail 기능을 제공한다.', type: false },
          { text: 'CDN+ (국내 전용) 상품과의 연동만을 지원한다.', type: false },
          { text: '채널 유지 비용은 발생하지 않는다.', type: true },
          { text: '라이브 영상을 네이버클라우드 플랫폼 Object Storage에 저장할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중, WMS에서 입력한 로그를 포함하는 모든 로그를 필터링하고 싶을 때 선택하는 필터링 옵션은?',
        answer: [
          { text: 'url', type: false },
          { text: 'uriprefix', type: true },
          { text: 'js', type: false },
          { text: 'Jsprefix', type: false },
        ],
      },
      {
        question: '다음 중 네이버클라우드플랫폼 Cloud DB 생성시에 자동 생성되거나 설정되는 것이 아닌 것은?',
        answer: [
          { text: 'Public 도메인', type: true },
          { text: 'Private 도메인', type: false },
          { text: 'ACG', type: false },
          { text: 'Event History', type: false },
        ],
      },
      {
        question: '다음 중, MS-SQL의 default 접속포트는?',
        answer: [
          { text: '1433', type: true },
          { text: '3389', type: false },
          { text: '3306', type: false },
          { text: '6379', type: false },
        ],
      },
      {
        question: '다음 중, CLA (Cloud Log Analytics)에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: 'Cloud DB for MySQL 로그, 아파치 로그 등이 템플릿으로 제공됩니다.', type: false },
          { text: '고객의 데이터는 논리적으로 분리된 개별 저장소에 2개 이상의 복제본으로 분산 저장됩니다.', type: false },
          { text: '저장된 데이터가 100GB를 초과하면 최대 30%까지 과거 데이터부터 매일 삭제될 수 있습니다.', type: false },
          { text: '다른 연계상품을 사용하고 있을 경우에는 연계상품이 해지될 때 CLA 데이터가 삭제됩니다.', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL 상품의 백업에 관련된 내용 중 틀린 것은?',
        answer: [
          { text: 'Stand Alone 서버도 DB 백업에 사용할 수 있습니다.', type: false },
          { text: '기본적인 백업이 하루 한번씩 매일 수행되며, 사용자 설정에 따라 최대 30일까지 보관할 수 있습니다.', type: false },
          { text: 'backup 파일 복원 요청 시 신규 VM이 생성되며, DB 서버는 Recovery 모드로 복원되며 데이터 조회만 가능합니다', type: false },
          { text: '손쉬운 backup 방법은 백업 요청서를 작성하여 신청하고 서버에 Agent를 설치하면 됩니다.', type: true },
        ],
      },
      {
        question: '별도의 설정 없이 클라이언트의 IP를 확인할 수 있는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: '다음 중 Private subnet에서 외부와 통신하기 위해 추가 생성이 필요한 서비스는?',
        answer: [
          { text: 'NAT Gateway', type: true },
          { text: 'VPC Peering', type: false },
          { text: 'Internet gateway', type: false },
          { text: 'Network ACL', type: false },
        ],
      },
      {
        question: 'IP주소에 해당하는 MAC Address를 얻기 위한 프로토콜은?',
        answer: [
          { text: 'ARP', type: true },
          { text: 'TCP', type: false },
          { text: 'NTP', type: false },
          { text: 'FTP', type: false },
        ],
      },
      {
        question: 'VPC 내에 Public Subnet에 위치시킬 수 없는 Resource는 무엇인가?',
        answer: [
          { text: 'Cloud DB for MySQL', type: false },
          { text: '베어메탈 서버', type: false },
          { text: 'GPU 서버', type: false },
          { text: 'Kubernetes Service', type: true },
        ],
      },
      {
        question: '다음 중 TCP 프로토콜을 이용하는 서비스가 아닌 것을 고르시오.',
        answer: [
          { text: 'SSH', type: false },
          { text: 'FTP', type: false },
          { text: 'NTP', type: true },
          { text: 'RDP', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 Analytics 상품에 해당되지 않는 것은?',
        answer: [
          { text: 'Cloud Data Streaming Service', type: false },
          { text: 'Cloud Search', type: false },
          { text: 'Real User Analytics', type: false },
          { text: 'CAPTCHA', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL 설정시 옳지 않은 것은?',
        answer: [
          { text: 'MySQL의 기본 포트 번호 (3306) 를 사용하는 것은 보안상 취약할 수 있으므로 변경해서 사용하는 것을 권장합니다', type: false },
          { text: 'Cloud DB for MySQL 상품에서 DB 서버를 생성하기 위해서는 최초 1회 CLA 상품 사용 동의를 하셔야만 합니다.', type: false },
          { text: 'DB 백업 파일 보관 기간을 최소 1일에서 최대 30일까지 선택할 수 있습니다.', type: false },
          { text: '백업파일에 대한 별도의 요금은 부과되지 않습니다', type: true },
        ],
      },
      {
        question: 'Live Station에서 Output Protocol이 아닌 것은 무엇인가?',
        answer: [
          { text: 'HLS', type: false },
          { text: 'MPEG-DASH', type: false },
          { text: 'RTMP', type: false },
          { text: 'RTSP', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL에 대한 설명으로 옳지 않은 것은?',
        answer: [
          { text: '다양한 유형의 서버타입을 제공하여 서비스 중에 한 번의 재시작만으로 서버 타입을 변경할 수 있습니다.', type: false },
          { text: '네이버 서비스에서 안정성이 검증된 버전을 제공합니다.', type: false },
          { text: '기본 10GB 데이터 스토리지를 제공하며, 10GB 단위로 6TB까지 자동으로 용량이 증가합니다.', type: false },
          { text: '마스터 DB가 스탠바이DB Fail-over할 때 DNS 방식으로 이중화를 제공함으로써 어플리케이션의 변경이 필요합니다.', type: true },
        ],
      },
      {
        question: '다음 중, Cloud DB for MySQL에 제공되는 High-memory 타입의 최고 VM사양은?',
        answer: [
          { text: '16vCPU, 128GB', type: false },
          { text: '32vCPU, 128GB', type: false },
          { text: '32vCPU, 256GB', type: true },
          { text: '48vCPU, 256GB', type: false },
        ],
      },
      {
        question: 'CDN+에 요청된 Log에서 얻을 수 있는 정보를 모두 고르시오.',
        answer: [
          { text: '접속한 서버 IP', type: true },
          { text: 'Client가 요청한 URI', type: true },
          { text: '응답 코드 (2xx, 3xx, 4xx 등)', type: true },
          { text: 'Cache HivMiss 정보 (TCP_HIT.TCP_MISS 등)', type: true },
        ],
      },
      {
        question: 'Live Station에서 Input Protocol은 무엇인가?',
        answer: [
          { text: 'HLS', type: false },
          { text: 'MPEG-DASH', type: false },
          { text: 'RTMP', type: true },
          { text: 'RTSP', type: false },
        ],
      },
      {
        question: '이미지 옵티마이저에서 섬네일 생성 규칙을 만드는 방법은?',
        answer: [
          { text: 'Query String', type: true },
          { text: 'Post', type: false },
          { text: 'Get', type: false },
          { text: 'URL', type: false },
        ],
      },
      {
        question: 'CDN서비스의 Access log는 어디에 저장됩니까?',
        answer: [
          { text: 'NAS', type: false },
          { text: 'Archive Storage', type: false },
          { text: 'Object Storage', type: true },
          { text: 'Block Storage', type: false },
        ],
      },
      {
        question: '다음 중 Cloud Advisor 상품의 리포트 기능에서 제공하지 않는 점검 항목은?',
        answer: [
          { text: 'NAS 스토리지 ACL 관리', type: true },
          { text: 'Sub Account의 Access Key 관리', type: false },
          { text: 'Object Storage 버킷 권한', type: false },
          { text: 'ACG 포트 관리', type: false },
        ],
      },
      {
        question: 'VOD Station 서비스와 연동이 되어 있는 서비스들을 모두 고르시오.',
        answer: [
          { text: 'NAS', type: false },
          { text: 'Certificate Manager', type: false },
          { text: 'Object Storage', type: true },
          { text: 'CDN', type: true },
        ],
      },
      {
        question: 'Image Optimizer의 경우 이미지에 효과를 줄 수 있는 필터 기능을 사용할 수 있습니다. 사용 가능한 필터가 아닌 것은 무엇인가요?',
        answer: [
          { text: '샤픈', type: false },
          { text: '블러', type: false },
          { text: '흑백', type: false },
          { text: '파스텔', type: true },
        ],
      },
      {
        question: 'VOD Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'Video Codec H.264, 265가 지원된다', type: false },
          { text: 'Audio Codec AAC 이다.', type: false },
          { text: '최대 해상도는 720P 이다.', type: true },
          { text: 'Frame rate는 60까지 지원한다.', type: false },
        ],
      },
      {
        question: '다음 중 Real User Analytics 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '대시보드를 통해 최근 300분 이내 발생한 정보 확인이 가능하다.', type: true },
          { text: '데이터 수집을 위해서는 RUA 에서 제공하는 수집코드를 개발코드에 삽입해야 한다.', type: false },
          { text: '프로젝트 단위로 생성이 가능하다.', type: false },
          { text: '대시보드를 통해 직관적인 확인이 가능하다.', type: false },
        ],
      },
      {
        question: 'VOD Station 상품에서 제공되는 DRM 기능과 관련된 설명으로 틀린 것은?',
        answer: [
          { text: '동영상 파일을 암호화 할 때 사용하는 기술이다', type: false },
          { text: 'VOD Station 에서는 자체 DRM 기능을 제공 한다.', type: true },
          { text: '불법 다운로드 리스크를 줄일 수 있다.', type: false },
          { text: '3가지 유형이 제공된다.', type: false },
        ],
      },
      {
        question: '다음과 같이 서브넷을 192.168.1.0/23 올만 들었다. 그렇다면 IP 주소 대역은 어떻게 되는가?',
        answer: [
          { text: '192.168.31.0 192.168.31.255', type: false },
          { text: '192.168.30.0 192.168.31.255', type: true },
          { text: '192.168.31.0 192.168.32.255', type: false },
          { text: '192.168.0.0 192.168.255.255', type: false },
        ],
      },
      {
        question: 'L7 헬스 체크 기능을 지원하지 않는 로드밸런 서 타입은 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: '이더넷에서 MTU 의 최대사이즈는 몇 바이트인 가?',
        answer: [
          { text: '256', type: false },
          { text: '1024', type: false },
          { text: '1500', type: true },
          { text: '64000', type: false },
        ],
      },
      {
        question: 'Live Station 상품에서는 다른 플랫폼에 동시 송출을 할 수 있는 기능이 제공됩니다. 이 때 해당 기능을 부르는 명칭은 무엇인가요?',
        answer: [
          { text: 'Re-stream', type: true },
          { text: 'Re-Play', type: false },
          { text: 'Re-Wind', type: false },
          { text: 'Re-Watch', type: false },
        ],
      },
      {
        question: 'Live Station에서 Output Protocol 이 아닌 것은 무엇인가?',
        answer: [
          { text: 'HLS', type: false },
          { text: 'MPEG-DASH', type: false },
          { text: 'RTMP', type: false },
          { text: 'RTSP', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 GRM에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: 'IP 도메인 리소스에 대한 분기가 가능하다', type: false },
          { text: '도메인 리소스에 대한 헬스체크 설정이 가능하다', type: true },
          { text: '헬스체크에 대한 로그는 제공하지 않는다.', type: false },
          { text: 'GRM 리소스 타입은 동일하게 설정해야 한다. (IP 와 도메인을 같이 GRM에 바인드할 수 없다.)', type: false },
        ],
      },
      {
        question: '다음 중 ACG 와 Network ACL 의 설명 중 잘 못된 것을 모두 고르시오.',
        answer: [
          { text: 'Network ACL과 ACG 모두 Inbound/outbound 룰에 대해 설정이 가능하다.', type: false },
          { text: 'ACG는 서버 당 4개가 적용 가능하다.', type: true },
          { text: 'ACG Defualt 로 All deny 이나 Network ACL All Permit 이다.', type: false },
          { text: 'Network ACL 은 서버 NIC 단위로 적용되나, ACG는 Subnet 단위로 적용된다.', type: true },
        ],
      },
      {
        question: '경로 기반 라우팅 기능을 지원하는 Load Balancer 는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: false },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: true },
        ],
      },
      {
        question: '다음 네 개의 상품 중 세 개의 상품은 네이버 클라우드 플랫폼의 네트워크망과 외부 망간의 통신을 필요로 할 때 사용됩니다. 나머지 이질적인 상품 하나는 무엇인가요?',
        answer: [
          { text: 'Cloud Connect', type: false },
          { text: 'Cloud Insight', type: true },
          { text: 'IPSEC VPN', type: false },
          { text: 'SSL VPN', type: false },
        ],
      },
      {
        question: 'Image Optimizer 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: 'Cloud Log Analytics 상품과의 연동이 필수이다', type: false },
          { text: '변환 Rule 의 경우 실제 적용되기 까지 약간의 시간이 소요된다.', type: false },
          { text: '변환 Rule 은 엑셀파일을 통해 다량으로 불러 올 수 있다.', type: false },
          { text: '변환된 이미지 미리보기 기능은 제공되지 않는다.', type: true },
        ],
      },
      {
        question: '별도의 설정 없이 클라이언트의 IP를 확인할 수 있는 Load Balancer는 무엇인 가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: true },
          { text: 'Network Proxy Load Balancer', type: false },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: '하나의 VPC에 ACG를 최대 몇 개까지 생성 가능한가요?',
        answer: [
          { text: '5 개', type: false },
          { text: '100 개', type: false },
          { text: '300 개', type: false },
          { text: '500 개', type: true },
        ],
      },
      {
        question: 'Video Player에서 설정 가능한 기능이 아닌 것은 무엇인가?',
        answer: [
          { text: '재생 속도 조절', type: false },
          { text: '브라우저 최소화시 자동 정지', type: false },
          { text: '자막 지원', type: false },
          { text: '영상 다운로드', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 로드밸런서에서 제하는 밸런싱 매소드 중 다음이 지칭하는 것을 고르시오. 정적 해쉬 테이블에 있는 소스 IP를 찾아 실제 서버의 풀로 요청을 배분하는 방식',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted', type: false },
          { text: 'Least Connection', type: false },
          { text: 'Source IP hash', type: true },
        ],
      },
      {
        question: '네이버클라우드 CDN+ 에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: '오리진으로 네이버 클라우드 플랫폼의 Object Storage 만 사용할 수 없다', type: true },
          { text: '국내 서비스에 최적화된 CDN 상품이다', type: false },
          { text: '개인 소장 도메인을 CDN 서비스 도메인으로 사용할 수 있다', type: false },
          { text: 'CDN 도메인을 HTTPS 로 사용하기 위해서는 오리진에서도 HTTPS 를 지원해야 한다.', type: false },
        ],
      },
      {
        question: '다음 중 포트번호와 서비스가 잘못 연결된 것을 고르시오',
        answer: [
          { text: 'SSH - 22', type: false },
          { text: 'Telnet - 23', type: false },
          { text: 'DNS - 53', type: false },
          { text: 'IMAP – 93', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Live Station에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
          { text: 'Thumbnail 기능을 제공한다', type: false },
          { text: 'CDN+ (국내 전용) 상품과의 연동만을 지원한다', type: false },
          { text: '채널 유지 비용은 발생하지 않는다', type: true },
          { text: '라이브 영상을 네이버클라우드 플랫폼 Object Storage에 저장할 수 있다', type: false },
        ],
      },
      {
        question: '각 계정 당 생성할 수 있는 VPC 개수 는?',
        answer: [
          { text: '3 개', type: true },
          { text: '4 개', type: false },
          { text: '5 개', type: false },
          { text: '6 개', type: false },
        ],
      },
      {
        question: '다음의 설명 중 이것 이 지칭하는 상품은 ? “이것을 이용하면 네이버 클라우드 플랫폼 Classic 환경에서 다수 VM 에 공인 IP 를 할당하지 않고 단일 SNAT IP 를 쉐어해서 사용할 수 있다',
        answer: [
          { text: '공인 IP', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'CDN+', type: false },
          { text: 'GRM', type: false },
        ],
      },
      {
        question: 'VPC 생성시 생성 가능한 IP 주소 범위가 아닌 것은 무엇인가?',
        answer: [
          { text: '10.0.0.0/12', type: false },
          { text: '192.168.0.0/24', type: true },
          { text: '192.168.0.0/12', type: false },
          { text: '172.168.0.0/16', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS SQL 대한 설명 중 틀린 것을 고르시오',
        answer: [
          { text: 'Cloud DB for MSSQL 상품의 경우, Standard type 과 High memory 타입을 선택할 수 있습니다', type: false },
          { text: '데이터스토리지는 기본 10GB 가 자동 할당 되며, 10GB 단위로 2TB 까지 자동 증가합니다.', type: false },
          { text: 'Cloud DB for MSSQL 상품은 Standard 타입에서 High memory 타입으로 스펙 업이 가능합니다', type: true },
          { text: 'Cloud DB for MSSQL 상품은 Standalone 으로 생성 시, 서버가 1 대만 생성됩니다.', type: false },
        ],
      },
      {
        question: '다음 중, WMS에서 입력한 로그를 포함하고 있는 모든 로그를 필터링 하고 싶을 때 선택하는 필터링 옵션은?',
        answer: [
          { text: 'url', type: false },
          { text: 'urlprefix', type: true },
          { text: 'js', type: false },
          { text: 'Jsprefix', type: false },
        ],
      },
      {
        question: '다음 중, Cloud DB for MS SQL에서 수행 가능한 작업이 아닌 것은',
        answer: [
          { text: '재시작 기능', type: false },
          { text: 'DB Server 삭제', type: false },
          { text: 'DB Server 일시 정지 기능', type: true },
          { text: 'Monitoring', type: false },
        ],
      },
      {
        question: '다음 Cloud DB for MSSQL 상품의 Slave DB에 대한 설명으로 틀린 내용은',
        answer: [
          { text: 'Slave DB 는 log shipping 방식으로 생성된다', type: false },
          { text: '읽기 기능 시간을 최대 20 시간까지 설정 가능 하다', type: false },
          { text: 'Slave DB 의 스펙을 변경해도, Principal 및 Mirror 서버의 스펙은 변경되지 않는다', type: true },
          { text: 'Slave DB 는 BI 및 Batch 성 작업에 적합하다.', type: false },
        ],
      },
      {
        question: '다음 중 Cloud Insight 상품에 대한 내용으로 올바르지 않은 것은',
        answer: [
          { text: '감시대상에 대해 알람을 받을 수 있다', type: false },
          { text: '감시대상 상품은 VPC 와 Classic 플랫폼이 상이하다', type: false },
          { text: '사용자가 별도로 agent 설치를 해야 한다', type: true },
          { text: 'Notification Recipient 메뉴를 통해 통보 대상자를 생성할 수 있다', type: false },
        ],
      },
      {
        question: '다음 중 ELSA(Effective Log Search &Analytics) 상품에 대한 설명으로 틀린 것은',
        answer: [
          { text: 'Mobile App Crash 정보를 쉽게 파악할 수 있게 도와준다', type: false },
          { text: 'Log Search 항목에서는 로그 수집 정보를 그래프로 확인할 수 있다', type: false },
          { text: '실시간으로 발생하는 로그를 수집할 수 있다', type: false },
          { text: '수집된 데이터는 60 일 후 삭제 된다.', type: true },
        ],
      },
      {
        question: 'Cloud DB for MySQL서버 접근 관련 내용 중 틀린 것은?',
        answer: [
          { text: 'SSL VPN 상품을 사용하면 local PC 에 Client 를 설치하여 DB 서버로 접근할 수 있다.', type: false },
          { text: '사용자가 할당 받은 DB 전용 Private Domain 을 사용하면 NCP 외부에서도 DB 서버로 접근할 수 있다', type: true },
          { text: '외부에서 통신하는 데이터는 네트워크 사용량으로 과금된다', type: false },
          { text: 'DB 접근을 위해 ACG 에 접근소스와 허용할 포트를 정의해야 한다', type: false },
        ],
      },
      {
        question: '다음 중 CLA 와 자동으로 연계된 서비스가 아닌 것은',
        answer: [
          { text: 'server', type: true },
          { text: 'Cloud DB', type: false },
          { text: 'Image Optimizer', type: false },
          { text: 'Object Storage', type: false },
        ],
      },
      {
        question: '회사 정책 상 클라우드에서 발생하는 로그를 영구보관해야한다 . 이럴 경우 , CLA 에 설정해줘야 하는 옵션은?',
        answer: [
          { text: 'Log expanslon를 통해 Object storage 상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Archive Log 를 통해 Object storage 상에 로그가 저장될 수 있도록 설정', type: false },
          { text: 'Export Log 를 통해 Object storage 상에 로그가 저장될 수 있도록 설정', type: true },
          { text: 'Lof stone 를 통해 Object storage 상에 로그가 저장될 수 있도록 설정', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 DB 서버의 특징으로 올바르지 않은 것은',
        answer: [
          { text: '설치형 DB 의 경우 클릭 한번으로 HA 구성이 가능하다', type: true },
          { text: 'CDB for MySQL 은 스토리지 용량이 최대 6TB 까지 자동 증설된다', type: false },
          { text: 'CDB for MSSQL 의 경우 스토리지 용량이 최대 2TB 까지 자동 증설된다', type: false },
          { text: 'CDB 상품은 자체 백업 기능을 제공한다.', type: false },
        ],
      },
      {
        question: '서브 계정들이 작업한 내역을 볼 수 있는 서비스는?',
        answer: [
          { text: 'Cloud Activity Tracer', type: true },
          { text: 'Account Tracer', type: false },
          { text: 'Cloud Activity Analytics', type: false },
          { text: 'Cloud Log Analytics', type: false },
        ],
      },
      {
        question: '모든 계정의 비용을 통합 결제하고, 모든 계정의 비용을 중앙에서 확인할 수 있으며, 계정 별로 이용 가능한 상품과 그 한도를 정책으로 만들어 관리할 수 있도록 도와주는 상품은?',
        answer: [
          { text: 'Organization', type: true },
          { text: 'Sub Account', type: false },
          { text: 'Cloud Log Analytics', type: false },
          { text: 'Cloud Account Management', type: false },
        ],
      },
      {
        question: '다음 중, CLA (Cloud Log에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: 'Cloud DB for MySQL 로그, 아파치 로그 등 이 템플릿으로 제공됩니다', type: false },
          { text: '고객의 데이터는 논리적으로 분리된 개별 저장 소에 2 개 이상의 복제본으로 분산 저장됩니다.', type: false },
          { text: '저장된 데이터가 100GB 를 초과하면 최대 30% 까지 과거 데이터부터 매일 삭제될 수 있습니다', type: false },
          { text: '다른 연계상품을 사용하고 있을 경우에는 연 계상품이 해지될 때 CLA 데이터가 삭제됩니다', type: true },
        ],
      },
      {
        question: '다음과 같이 서브넷 10.0.0.0/15 을 만들었다 그렇다면 IP 주소 대역은 어떻게 되는가?',
        answer: [
          { text: '10.0.0.0 ~ 10.255.255.255', type: false },
          { text: '10.0.0.0 ~ 10.0.255.255', type: false },
          { text: '10.0.0.0 ~ 10.1.255.255', type: true },
          { text: '10.0.0.0 ~ 10.7.255.255', type: false },
        ],
      },
      {
        question: 'Application Load Balancer에서 URL 기반으로 분기하기 위한 조건은 무엇인가?',
        answer: [
          { text: 'Host Header', type: false },
          { text: 'Path Pattern', type: true },
          { text: 'URL Path', type: false },
          { text: 'URL 라우팅', type: false },
        ],
      },
      {
        question: 'Live station에서 원본 영상을 별도 파일로 Storage에 저장하여 보관할 수 있으며, 현재 라이브 중인 영상을 최대 여섯시간 전까지 되돌려 볼 수 있는 기능을 사용하기 위해 설정해야 하는 옵션은?',
        answer: [
          { text: '즉시 녹화 설정', type: false },
          { text: 'Recording', type: true },
          { text: 'Stream', type: false },
          { text: 'DVR 설정', type: false },
        ],
      },
      {
        question: 'GRM의 로드밸런싱 타입 중, 각 리소스별로 가중치를 주어 요청에 대한 트래픽을 분산하는 방식은?',
        answer: [
          { text: 'GeoLocation', type: false },
          { text: 'Round robin', type: false },
          { text: 'Weighted', type: true },
          { text: 'Fail Over', type: false },
        ],
      },
      {
        question: 'VPC 생성시 생성 가능한 IP 주소 범위가 아닌 것은 무엇인가?',
        answer: [
          { text: '1 0.0.0.0/8', type: false },
          { text: '127.0.0.0/8', type: true },
          { text: '172.16.0.0/12', type: false },
          { text: '192.168.0.0/16', type: false },
        ],
      },
      {
        question: '다음 중, 로드밸런서에 SSL 인증서를 추가하기 위해 연동해야 하는 서비스는?',
        answer: [
          { text: 'SSL Manager', type: false },
          { text: 'Certificate Manager', type: true },
          { text: 'SSL Offload', type: false },
          { text: 'Global certificate', type: false },
        ],
      },
      {
        question: '다음 중 VPC 플랫폼 기반 Cloud Hadoop 상품의 특징으로 올바른 설명은?',
        answer: [
          { text: '컴퓨팅 노드와 스토리지 노드가 분리되어 제공된다', type: true },
          { text: '기본 저장소로 NAS Storage가 제공된다', type: false },
          { text: '고가용성은 지원되지 않는다', type: false },
          { text: '작업자노드는 최대 4 대까지 생성 가능하다', type: false },
        ],
      },
      {
        question: '다음 Cloud DB for Redis 상품에 대한 설명으로 올바른 것은?',
        answer: [
          { text: '최근 8 주 이내의 모니터링 지표를 확인할 수 있다.', type: false },
          { text: 'OS Dashboard는 지원되지 않는다', type: false },
          { text: '백업 기능을 이용하기 위해서는 상품 이용 신청서를 작성해야 한다', type: false },
          { text: '백업은 매일 1 번씩 진행되며, 최대 7일까지 보관이 가능하다', type: true },
        ],
      },
      {
        question: '다음 중 WMS 상품에 대한 내용으로 올바른 것은?',
        answer: [
          { text: '알람 기능은 제공되지 않는다', type: false },
          { text: '웨일 브라우저 기반의 테스트만 가능하다', type: true },
          { text: '여러 국가에서의 웹 서비스 응답 속도를 확인할 수 있다', type: false },
          { text: '모니터링은 초 단위로 가능하다', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 A Cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'HDFS', type: false },
          { text: 'PRESTO', type: false },
          { text: 'TAJO', type: true },
          { text: 'RAMGER', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop Cluster에 포함된 웹 기반의 관리도구는 무엇인가요?',
        answer: [
          { text: 'Hive', type: false },
          { text: 'Spark', type: false },
          { text: 'Ambari', type: true },
          { text: 'Hue', type: false },
        ],
      },
      {
        question: 'VPC 환경에서 Cloud DB 상품을 이용할 시 갖는 특징으로 올바르지 않은 것은?',
        answer: [
          { text: '멀티 존 기능이 지원된다', type: true },
          { text: '멀티 리전 기능이 제공된다', type: false },
          { text: 'Private Subnet에 생성 시 Public 도메인 생성이 불가능하다', type: false },
          { text: 'ACG가 자동으로 생성된다', type: false },
        ],
      },
      {
        question: '다음 중 Cloud Log Analytics 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '시스템의 로그를 수집하고 분석할 수 있도록 도와주는 상품이다', type: false },
          { text: '네이버 클라우드 플랫폼에서 제공되는 특정 템플릿 로그에 한해 수집이 가능하다', type: true },
          { text: 'Custom Log 기능을 통해 사용자가 원하는 로그를 지정하여 수집할 수 있다.', type: false },
          { text: '고객의 데이터는 논리적으로 분리된 개별 저장소에 2 개 이상의 복제본으로 분산 저장된다', type: false },
        ],
      },
      {
        question: '다음 중 Sub Account 상품에 대한 설명으로 올바르지 않은 것은?',
        answer: [
          { text: '다수의 사용자가 동일한 인프라를 이용해야 할 때 사용한다', type: false },
          { text: '서브계정은 스스로 API Key 발급이 불가능하다', type: false },
          { text: '2차 인증 설정이 가능하다', type: false },
          { text: '비밀번호 만료일 설정이 가능하다', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 운영 노하우를 바탕으로 도출한 자체 모범 사례와 사용자의 이용 내용을 비교 분석하여 좀 더 안전하고 효율적인 서비스가 가능하도록 지원하는 서비스는?',
        answer: [
          { text: 'Cloud Consultant', type: false },
          { text: 'Cloud Advisor', type: true },
          { text: 'Cloud Tip', type: false },
          { text: 'Cloud Analysis', type: false },
        ],
      },
      {
        question: '다음 WMS Monitoring 지표와 관련된 단어들 중, 올바른 뜻풀이가 아닌 것은?',
        answer: [
          { text: 'Load Time: 웹페이지를 로딩하는데 걸리는 시간', type: false },
          { text: 'File Requests: 업로드한 구성요소들의 목록', type: false },
          { text: 'Scenario: 테스트 시나리오 내용', type: true },
          { text: 'Today Event: 테스트 URL에서 금일 발생한 이벤트 수', type: false },
        ],
      },
      {
        question: 'VPC 생성시 생성 가능한 IP 주소 범위가 아닌 것은 무엇인가?',
        answer: [
          { text: '10.0.0.0/8', type: false },
          { text: '127.0.0.0/8', type: true },
          { text: '172.16.0.0/12', type: false },
          { text: '192.168.0.0/16', type: false },
        ],
      },
      {
        question: '다음 중 Live station에 대한 설명 중 옳은 것을 모두 고르시오',
        answer: [
          { text: 'Output Protocol은 기본 HLS & DASH 프로토콜로 지정된다', type: true },
          { text: 'Live Station은 반드시 CDN과 함께 사용되야 한다.', type: false },
          { text: 'Custom 화질을 지정할 수 있는 기능은 추후 제공될 예정이다', type: false },
          { text: '채널이 생성 중인 상태는 준비 상태로 콘솔에 표기된다', type: true },
        ],
      },
      {
        question: 'VPC 플랫폼에서 로드밸런서 생성시 Small, Medium, Large 성능을 선택할 수 있습니다. 성능의 기준은 무엇인가요?',
        answer: [
          { text: '네트웍대역폭(bps)', type: false },
          { text: '초당연결수(CPS)', type: true },
          { text: '초당패킷수(PPS)', type: false },
          { text: '리얼서버대수', type: false },
        ],
      },
      {
        question: 'CDN 서비스에서 원본으로 설정이 가능한 스토리지는?',
        answer: [
          { text: 'Archive Storage', type: false },
          { text: 'Object Storage', type: true },
          { text: 'Block Storage', type: false },
          { text: 'NAS', type: false },
        ],
      },
      {
        question: '다음 중, 네이버클라우드 플랫폼의 로드밸런서 생성시 기본적으로 적용되는 분배 알고리즘은?',
        answer: [
          { text: 'Least connection', type: false },
          { text: 'SourceIP Hash', type: false },
          { text: 'Round robin', type: true },
          { text: 'Weighted', type: false },
        ],
      },
      {
        question: 'VOD Station 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: 'DRM 기능이 제공된다', type: true },
          { text: 'Media Encryption 기능이 제공된다', type: false },
          { text: '송출할 영상 파일은 NAS에 올려야 한다', type: false },
          { text: 'HLS, DASH 프로토콜을 지원한다', type: false },
        ],
      },
      {
        question: 'CDN 서비스에서 접속자가 요청한 콘텐츠가 유효한 형태로, CDN 캐시 서버에 있어 접속자의 요청에 대해서 바로 응답할 때의 상태를 의미하는 것은?',
        answer: [
          { text: 'MISS', type: false },
          { text: 'HIT', type: true },
          { text: 'BYPASS', type: false },
          { text: 'Purge', type: false },
        ],
      },
      {
        question: 'VOD Station에서 Subtitle Output format은 무엇인가?',
        answer: [
          { text: 'VTT', type: true },
          { text: 'SRT', type: false },
          { text: 'TTML', type: false },
          { text: 'CAP', type: false },
        ],
      },
      {
        question: 'VOD Transcoder를 통해 만들어진 영상의 파일 확장자는 무엇인가?',
        answer: [
          { text: 'AVI', type: false },
          { text: 'MP4', type: true },
          { text: 'MOV', type: false },
          { text: 'WMV', type: false },
        ],
      },
      {
        question: 'Cloud Insight에 대한 설명 중 잘못 된 것을 모두 고르시오',
        answer: [
          { text: '선택한 메트릭에 대한 알람 레벨은 info, warning으로 설정이 가능하다', type: false },
          { text: '서버와 관련된 메트릭을 수집하기 위해선 에이전트 설치가 필요하다', type: true },
          { text: '실제 에이전트가 잘 동작하는지 확인하기 위해선 Linux에서 ps ef | grep agent 명령어로 확인이 가능하다', type: true },
          { text: '통보 알람 기능을 제공한다', type: false },
        ],
      },
      {
        question: 'Cloud Hadoop의 근간 스토리지로 사용 가능한 것을 모두 고르시오',
        answer: [
          { text: 'Object Storage', type: true },
          { text: 'Archive Storage', type: false },
          { text: 'NAS', type: false },
          { text: 'Block Storage', type: true },
        ],
      },
      {
        question: 'Private Subnet이 외부와 통신할 수 있도록 (A) 서비스를 추가하였고 Private subnet의 (B)의 Outbound rule을 수정하여 외부에 통신할 시에는 A 서비스를 향하도록 수정해야 합니다. A.B에 알맞은 것은?',
        answer: [
          { text: 'A - NAT gateway B - Route table', type: false },
          { text: 'A - Internet gateway B - Route table', type: false },
          { text: 'A - Internet gateway B - NACL', type: false },
          { text: 'A - NAT Gateway B - NACL', type: true },
        ],
      },
      {
        question: '다음 중 Network ACL에 대한 설명 중 옳은 것을 모두 고르시오',
        answer: [
          { text: 'VPC에 종속적이다', type: true },
          { text: '서버의 NIC 단위로 적용된다', type: false },
          { text: 'default 설정은 all permit이다', type: true },
          { text: '설정된 우선 순위보다는 모든 규칙을 확인하고 반영한다', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop Cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'Zookeeper', type: false },
          { text: 'Hbase', type: false },
          { text: 'Impala', type: true },
          { text: 'Zepplin Notebook', type: false },
        ],
      },
      {
        question: 'Linux 서버에서 시스템 부팅 메시지를 저장하는 로그 파일은 무엇인가요?',
        answer: [
          { text: '/var/log/dmesg', type: true },
          { text: '/var/log/wtmp', type: false },
          { text: '/var/log/access', type: false },
          { text: '/var/log/secure', type: false },
        ],
      },
      {
        question: '리눅스에서 ICMP와 TTL을 이용하여 경로를 확인할 수 있는 프로그램은?',
        answer: [
          { text: 'Traceroute', type: true },
          { text: 'Tracert', type: false },
          { text: 'Tcpdump', type: false },
          { text: 'Tcpview', type: false },
        ],
      },
      {
        question: '다음 중 Cloud LOG Analytics 상품에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '시스템의 로그를 수집하고 분석할 수 있도록 도와주는 상품이다.', type: false },
          { text: '네이버 클라우드 플랫폼에서 제공되는 특정 템플릿 로그에 한해 수집이 가능하다.', type: true },
          { text: 'Custom LOG 기능을 통해 사용자가 원하는 로그를 지정하여 수집할 수 있다.', type: false },
          { text: '고객의 데이터는 논리적으로 분리된 개별 저장소에 2개 이상의 복제본으로 분산 저장된다.', type: false },
        ],
      },
      {
        question: 'Cloud DB For MySQL에서 로드밸런서 사용에 대한 설명으로 옳지 않은 것은?',
        answer: [
          { text: 'Cloud DB for Mysql에서 로드밸런스 한 대 이상의 Slave DB 서버를 로드밸런서로 묶어 읽기 부하 분산을 하기 위해 사용합니다.', type: false },
          { text: '읽기 부하 분산을 위해 사용하므로 생성한 DB Server 중 Slave DB Server만 로드밸런서로 묶어 사용할 수 있습니다.', type: true },
          { text: '로드밸런서를 Public 타입으로 생성하며 Slave DB와 연결해야한다.', type: false },
          { text: '반드시 동일한 DB 서비스에 속한 Slave 서버만을 선택하여 로드밸런서를 생성하여야 합니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Hadoop Cluster에 포함되지 않은 컴포넌트는 무엇인가요?',
        answer: [
          { text: 'Zookeeper', type: false },
          { text: 'Hbasse', type: false },
          { text: 'mahout', type: true },
          { text: 'Zepplin Notebook', type: false },
        ],
      },
      {
        question: '다음 중, Cloud Activity Tracer에서 수집된 로그에서 확인할 수 있는 정보가 아닌 것은?',
        answer: [
          { text: '작업내역', type: false },
          { text: '작업상태', type: false },
          { text: '계정유형', type: false },
          { text: '접속 디바이스', type: true },
        ],
      },
      {
        question: '다음 중, Sub Account에 대한 설명 중 옳지 않은 것은?',
        answer: [
          { text: 'Sub Account 대시보드에서 서브 계정 수, 그룹 수, 정책 수를 확인 할 수 있다.', type: false },
          { text: '서브 계정의 정보를 수정 및 삭제는 가능하나 일시정지 기능은 제공되고 있지 않다.', type: true },
          { text: '다수의 서브 계정에 동일한 정책이 반영되도록 그룹 기능을 제공한다.', type: false },
          { text: '서브 계정들이 이용할 수 있는 권한들을 묶어 정책으로 제공한다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Video Player에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
          { text: '최신 네이버 플레이어를 사용 할 수 있다.', type: false },
          { text: '해상도 선택 기능이 제공된다.', type: false },
          { text: 'Sub Account에게 권한을 따로 부여할 수 있다.', type: false },
          { text: 'CDN 서비스 연동이 불가능하다.', type: true },
        ],
      },
      {
        question: 'DSR 기능이 적용되어 보다 빠르고 효율적인 서비스를 구성할 수 있는 Load Balancer는 무엇인가?',
        answer: [
          { text: 'Classic Load Balancer', type: false },
          { text: 'Network Load Balancer', type: false },
          { text: 'Network Proxy Load Blancer', type: true },
          { text: 'Application Load Balancer', type: false },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 네트워크 상품에 대한 설명으로 올바르지 않은 것은?',
        answer: [
          { text: '하나의 게정은 리전 당 3개의 VPC를 생성 할 수 있다.', type: true },
          { text: 'NAT Gatway는 Public Subnet에만 연동이 가능하다.', type: false },
          { text: 'VPC 환경에서는 3가지 종류의 로드밸런서가 존재한다.', type: false },
          { text: 'CDN+는 다양한 상품과 연동이 가능하다.', type: false },
        ],
      },
      {
        question: 'Sub account 서비스에서 서브 계정들에게 부여할 접근 유형으로 알맞은 것을 모두 고르시오.',
        answer: [
          { text: 'Console access', type: true },
          { text: 'API Gateway', type: true },
          { text: 'CLI', type: true },
          { text: 'Sub URL', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 로드밸런서에 대한 설명으로 옳은 것을 고르시오.',
        answer: [
          { text: '총 두 가지 종류의 로드밸런서가 제공된다.', type: false },
          { text: 'VPC 환경에서는 로드밸런서 생성 시 멀티존 생성이 필수적이다.', type: false },
          { text: '서비스할 프로토콜의 종류에 따라 Application/Netwrok 타입으로 갈라진다.', type: true },
          { text: '세션 유지 기능이 필요한 경우, Network 로드밸런서를 사용해야 한다', type: false },
        ],
      },
]

export default ncp202;