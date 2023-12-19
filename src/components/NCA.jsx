const nca = [
    {
        question: 'CDN+ 설정시 설정항목에 대한 설명중 올바르지 않은 것은 무엇인가요?',
        answer: [
          { text: 'Purge : CDN 캐시서버에 지정되어 있는 콘텐츠를 삭제하는 기능', type: false },
          { text: 'Secure Token : 토큰 기반의 인증으로 허용된 접근에만 콘텐츠를 전달', type: false },
          { text: 'Ignore query string : 콘텐츠가 지정된 도메인에만 제공하며 다른 사이트에서 참조되는 것을 방지', type: true },
          { text: 'Access log : CDN 사용 로그를 확인할 수 있는 기능', type: false },
        ],
      },
      {
        question: '사설 Load Balancer에 대한 설명 중 맞는 것은?',
        answer: [
          { text: '로드밸런서는 2개가 생성된다', type: true },
          { text: '접속정보는 IP로 제공된다', type: false },
          { text: 'ACG는 ncloud-private-load-balancer 이다', type: false },
          { text: 'HTTP-Keep-alive를 설정할 수 없다', type: false },
        ],
      },
      {
        question: '다음 중 네이버클라우드플랫폼 로드밸런서에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '하나의 로드밸런서는 최대 50대의 서버를 바인드할 수 있다', type: false },
          { text: '하나의 로드밸런서에 여러 Zone에 있는 서버를 바인드할 수 있다', type: false },
          { text: '계정당 최대 로드밸런서 생성 수는 10대이다', type: false },
          { text: '한 서버가 여러 로드밸런서에 바인드할 수 있다', type: true },
        ],
      },
      {
        question: '네이버클라우드플랫폼 DNS에서 지원되지 않는 레코드는?',
        answer: [
          { text: 'NS', type: false },
          { text: 'AAAA', type: false },
          { text: 'CAA', type: true },
          { text: 'PTR', type: false },
        ],
      },
      {
        question: '로드밸런서를 생성 한 후에만 변경이 가능한 설정을 고르시오 (복수 정답)',
        answer: [
          { text: 'HTTP-Keep-Alive', type: true },
          { text: '로드밸런서 알고리즘', type: false },
          { text: 'Connection Idle Timeout', type: true },
          { text: 'MaxKeepAlive Timeout', type: false },
        ],
      },
      {
        question: 'Load Balancer로 연결 가능한 프롵콜이 아닌것은 무엇인가요?',
        answer: [
          { text: 'TCP', type: false },
          { text: 'UDP', type: true },
          { text: 'HTTPS', type: false },
          { text: 'SSL', type: false },
        ],
      },
      {
        question: '다음 중 CDN+ 설명 중 틀린것은?',
        answer: [
          { text: 'CD+는 HTTP/HTTPS 프로토콜을 통해 다양한 원본 서버와의 콘텐츠 연동을 지원합니다.', type: false },
          { text: '원본 서버로 고객이 보유 중인 다양한 웹 서버 및 네이버 클라우드 플랫폼의 Storage, Server 설정가능합니다.', type: true },
          { text: 'HTTPS로 웹 서비스를 제공하는 경우 콘텐츠가 HTTP로 호출되면 서비스가 불가능합니다.', type: false },
          { text: '레퍼러로 등록된 도메인 기준 접근 허용 기능을 제공합니다.', type: false },
        ],
      },
      {
        question: '다음중 IPSec VPN에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: '웹 기반 콘솔에서 쉽게 신청할 수 있으며 상품 신청 후에 일정 시간 대기 후에 별다른 설정없이 바로 사용가능함', type: true },
          { text: '네트웍크 규모를 고려하여 10Mbps, 20Mbps, 30Mbps 중 하나를 선택하여 사용할 수 있습니다', type: false },
          { text: 'Active-Standby 방식으로 이중으로 구성되어 있씁니다.', type: false },
          { text: '생성된 IPSec VPN 게이트웨이를 경유하여 외부에 있는 고객의 네트워크 간 암호화된 터널링 통신이 가능합니다.', type: false },
        ],
      },
      {
        question: '다음에서 설명하는 기능은 어떤 상품을 설명하는 것일까요? 방화벽과 같이 ACL을 설정하는 외부의 네트웍과 연결시 네이버 클라우드 플랫폼 내에 있는 다수의 서버들이 하나의 공인 IP로 해당 외부 네트웍에 접근하기 위한 상품',
        answer: [
          { text: 'Load Balancer', type: false },
          { text: 'IPSEC VPN', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'API Gateway', type: false },
        ],
      },
      {
        question: 'IPSEC VPN 상품에서 대역폭을 선택할 수 있다. 최대 대역폭은 얼마인가?',
        answer: [
          { text: '10Mbps', type: false },
          { text: '20Mbps', type: false },
          { text: '30Mbps', type: true },
          { text: '40Mbps', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼 로드밸런서에 대한 설명 중 맞는 것은?',
        answer: [
          { text: '22번 포트도 로드밸런싱할 수 있다.', type: false },
          { text: '로드밸런서는 공인과 사설 로드밸런서가 있다', type: false },
          { text: 'L7 로드밸런싱이 된다', type: true },
          { text: '로드밸런서를 사용하면 클라이언트의 IP를 확인할 수 없다', type: false },
        ],
      },
      {
        question: '라이브 스트리밍 서비스를 진행하는 데 필요한 모든 back-end 기능을 지원하여 NAVER Cloud Platform CDN 연동을 통해 원활한 라이브 진행을 할 수 있는 상품은?',
        answer: [
          { text: 'Clova Face Recognition', type: false },
          { text: 'Live Station', type: true },
          { text: 'VOD Transcoder', type: false },
          { text: 'Image Optimizer', type: false },
        ],
      },
      {
        question: '다음중 NAT gateway에 대한 설명을 잘못된 것은?',
        answer: [
          { text: 'NAT Gateway를 사용하면 다수의 서버를 사용하는 고객이 외부 접속을 위해 각 서버마다 별도의 Public IP를 생성하지 않아도 됩니다', type: false },
          { text: 'Auto Scaling 서비스와 연결하여 새로 증설되는 서버가 자동으로 NAT Gateway를 이용핟록 할 수 있습니다', type: false },
          { text: 'Peer Host 목록이 없는 NAT Gateway는 아무런 기능도 수행하지 않으며 요금이 부과되지 않습니다', type: true },
          { text: '하위 프로토콜로는 ICMP, TCP, UDP를 모두 지원하므로 NAT Gateway 서비스를 통래 다양한 애플리케이션을 이용할 수 있습니다', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼 로드밸런서에서 제공되지 않는 로드 분배 알고리즘은?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted Round Robin', type: true },
          { text: 'Least Connection', type: false },
          { text: 'Source IP Hash', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 NAT Gateway 서비스 설명 중 맞는 것은?',
        answer: [
          { text: '지정된 Peer IP 접속 시 비공인 IP를 호출하면 NAT되어 하나의 공인 IP로 통신', type: false },
          { text: '내부의 지정된 서버는 모든 통신이 NAT되어 하나의 공인 IP로 통신', type: true },
          { text: '지정된 Peer IP 접속 시 NAT되어 하나의 사설 IP 통신', type: false },
          { text: '내부의 서버를 Peer IP로 설정하여 하나의 공인 IP로 한정됨', type: false },
        ],
      },
      {
        question: 'Auto Scaling 구성시 구성 가능한 항목이 아닌것을 고르시오',
        answer: [
          { text: 'ACG', type: false },
          { text: 'NAT Gateway', type: false },
          { text: 'Load Balancer', type: false },
          { text: 'Cloud Log Analytics', type: true },
        ],
      },
      {
        question: '서버 패스워드에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '초기 패스워드 서버 생성시 생성한 인증키를 가지고 확인할 수 있다', type: false },
          { text: '서버에서 패스워드를 변경후 잊어버린 경우 네이버클라우드플랫폼 Console 화면에서 관리자 비밀번호 확인을 통해 확인할 수 있다.', type: false },
          { text: '서버 생성시 생성한 인증키는 다른 인증키로 교체할 수 있다', type: true },
          { text: '서버 초기 패스워드는 난수로 부여된다', type: false },
        ],
      },
      {
        question: '오토스케일링 설정시 오토스케일링 그룹에서 설정 가능한 내용이 아닌것은 무엇인가?',
        answer: [
          { text: '오토스케일링으로 생성될 서버의 OS', type: true },
          { text: '오토스케일링에서 사용할 Launch Configuration', type: false },
          { text: '오토스케일링으로 서버 생성시 증가, 감소 정책', type: false },
          { text: '오토스케일링으로 생성되는 서버가 속할 NAT Gateway', type: false },
        ],
      },
      {
        question: '서버 생성시 선택 가능한 스토리지 종류에 대한 설명중 틀린 것을 고르시오',
        answer: [
          { text: 'SSD 타입은 저장장치가 SSD인 디스크이다', type: false },
          { text: 'HDD 타입은 저장장치가 SATA인 디스크이다', type: false },
          { text: '서버 타입에 따라 NVMe 디스크를 사용할 수 있다', type: false },
          { text: 'SSD 타입은 MAX IOPS가 지정된다', type: true },
        ],
      },
      {
        question: '오브젝트 스토리지 설명중 맞는것은?',
        answer: [
          { text: '오브젝트 스토리지는 2개의 인증키 사용이 가능합니다.', type: true },
          { text: '생성된 버킷 이름은 변경할 수 있습니다.', type: false },
          { text: '파일에 대한 공개 여부는 개별 파일에서 설정합니다.', type: false },
          { text: '네이버 클라우드 플랫폼의 다른 계정에 공유할 수 없습니다.', type: false },
        ],
      },
      {
        question: '다음은 Auto Scaling의 구성요소에 대한 설명이다. 잘못 설명된 것은?',
        answer: [
          { text: 'Launch Configuration : 서버 원본 이미지 선택', type: false },
          { text: 'Auto Scaling Group : 자동 bind할 로드밸런서 그룹 지정', type: false },
          { text: 'Scaling 수행 : 예약 일정에 따른 용량 조정 수행', type: false },
          { text: 'Monitoring 설정 : 인증키 및 Launch Configuration 설정', type: true },
        ],
      },
      {
        question: '서버 스토리지에 대한 설명으로 맞는 것은?',
        answer: [
          { text: '부팅 스토리지가 HDD인 경우 추가 스토리지로 HDD만 추가할 수 있다', type: false },
          { text: 'VM 운영 중인 상태에서도 Disk 변경이 가능하다', type: false },
          { text: '디스크의 사이즈를 기존 보다 크게만 변경이 가능하다', type: true },
          { text: 'High-memory, Bare-metal 서버의 경우 스토리지 추가가 지원되지 않는다', type: false },
        ],
      },
      {
        question: 'NAS 상품 설명 중 틀린 것은?',
        answer: [
          { text: '스냅샷 설정 후 볼륨 전체 내용을 복사한다', type: false },
          { text: 'Linux Server와 Windows Server 모두 NAS를 마운트할 수 있습니다.', type: false },
          { text: 'NAS 볼륨은 네이버 클라우드 플랫폼 인프라 내에 있는 서버에서만 마운트가 가능합니다.', type: false },
          { text: '여러 개 계정을 가지고 있는 회원인 경우, 다른 계정에 있는 서버의 사설 IP만 있으면 마운트가 가능합니다.', type: true },
        ],
      },
      {
        question: '네이버클라우드플랫폼에서 수요 변화에 대응하여 탄력적으로 서버를 증가/감소 시키는 서비스는?',
        answer: [
          { text: '람다', type: false },
          { text: '도커', type: false },
          { text: '오토스케일링', type: true },
          { text: '베어메탈', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼서버에 스토리지를 추가할 경우 단일 추가 스토리지당 최대 용량은 얼마인가?',
        answer: [
          { text: '1TB', type: false },
          { text: '2TB', type: true },
          { text: '3TB', type: false },
          { text: '4TB', type: false },
        ],
      },
      {
        question: '다음 상품 중 Networking 카테고리 상품이 아닌것은 무엇인가요?',
        answer: [
          { text: 'IPSEC VPN', type: false },
          { text: 'Load Balancer', type: false },
          { text: 'NAT Gateway', type: false },
          { text: 'SSL VPN', type: true },
        ],
      },
      {
        question: '서버의 하나의 NIC에 두개 이상의 IP를 부여하였을 때 발생할 수 있는 상황은?',
        answer: [
          { text: '기존 IP로는 통신이 되나 추가된 IP로 통신이 되지 않는다', type: false },
          { text: '추가된 IP뿐만 아니라 기존 IP도 통신이 되지 않는다', type: false },
          { text: '서버가 강제 정지된다', type: false },
          { text: '기존 IP는 통신이 안되고 추가된 IP로만 통신이 된다', type: true },
        ],
      },
      {
        question: 'Load Balancer의 헬스 체크에 대한 설명 중 잘못된 것은?',
        answer: [
          { text: '헬스체크 추가는 6초이다', type: false },
          { text: '3번 응답이 없는 경우 Unbind 한다', type: false },
          { text: 'Unbind 됐던 서버가 헬스체크 응답이 1번 성공하면 Bind 한다', type: true },
          { text: 'Unbind 상태에서도 헬스체크 주기는 6초이다', type: false },
        ],
      },
      {
        question: '다음 상품중 상품 생성시 CDN을 생성하는 기능이 없는 상품은 무엇인가요?',
        answer: [
          { text: 'VOD Transcoder', type: true },
          { text: 'Image Optimizer', type: false },
          { text: 'Live Station', type: false },
          { text: 'VOD Station', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 서버를 생성하고 네트워크 구성을 하였을 때 그에 대한 설명으로 틀린것은 무엇인가요?',
        answer: [
          { text: '서버는 기본적으로 10.x.x.x 대역의 IP를 부여받는다', type: true },
          { text: '10.x.x.x 대역의 IP의 Subnet Mask는 255.255.0.0 을 부여받는다', type: false },
          { text: 'Public IP를 생성하더라도 서버에 Public IP 정보가 생성되지는 않는다', type: false },
          { text: '서버는 기본적으로 1Gbps 대역폭의 인터페이스를 생성한다', type: false },
        ],
      },
      {
        question: '클라우드는 기존 Legacy와 비교하여 다양한 장점이 있습니다. 아래 보기 중 클라우드의 장점이 아닌것은 무엇인가요?',
        answer: [
          { text: '동일한 성능의 서버를 비교하였을때 Legacy보다 클라우드가 비용 경쟁력이 높다', type: true },
          { text: '서버 구성시 짧은 시간내에 구성이 가능하다', type: false },
          { text: '기존적인 보안 장비 및 네트웍이 구성되어 있다', type: false },
          { text: '오토 스케일링, 플랫폼과 같은 비용 효율적인 상품들이 준비되어 있다', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼 Block Storage에서 제공하는 기능이 아닌거은?',
        answer: [
          { text: 'Detach/Attach 기능', type: true },
          { text: 'Snapshot 기능', type: false },
          { text: 'Provisoned IOPS', type: false },
          { text: 'Disk Resizing 기능', type: false },
        ],
      },
      {
        question: '현재 네이버클라우드플랫폼에서 제공되지 않는 리전은?',
        answer: [
          { text: '홍콩', type: false },
          { text: '미국동부', type: true },
          { text: '일본', type: false },
          { text: '독일', type: false },
        ],
      },
      {
        question: 'Cloude DB 상품에서 제공하고 있지 않는 DBMS는?',
        answer: [
          { text: 'Oracle', type: true },
          { text: 'MS-SQL', type: false },
          { text: 'MySQL', type: false },
          { text: 'Redis', type: false },
        ],
      },
      {
        question: 'ACG에 대한 설명중 틀린 것은?',
        answer: [
          { text: '아웃바인드에 대한 설정이 가능하다', type: false },
          { text: '접근 허용에 대한 룰을 설정한다', type: false },
          { text: 'ACG하나 당 최대 100개의 룰을 적용할 수 있다.', type: true },
          { text: '서버는 최대 5개의 ACG를 맵핑할 수 있다', type: false },
        ],
      },
      {
        question: 'Auto Scaling으로 생성 가능한 서버는 몇대인가?',
        answer: [
          { text: '10대', type: false },
          { text: '20대', type: false },
          { text: '30대', type: true },
          { text: '40대', type: false },
        ],
      },
      {
        question: '오토스케일링을 구성하고자 할 때 오토 스케일링 그룹을 구성하여야한다. 오토 스케일링 그룹에 대한 설명으로 틀린것을 고르시오',
        answer: [
          { text: '서버 생성 가능한 최대 용량은 30이다', type: false },
          { text: '기대용량은 최소용량보다 크거나 같아야 한다.', type: false },
          { text: '헬스체크 유형에는 서버, 네트웍 트레픽, 로드밸런서가 있다', type: true },
          { text: '스케일링 설정에는 증감변경, 비율변경, 고정값이 있다', type: false },
        ],
      },
      {
        question: '오토스케일링의 Launch Configuration 구성시 구성 가능한 항목이 아닌것은?',
        answer: [
          { text: '생성될 서버의 OS', type: true },
          { text: '사전에 만들어논 내 서버 이미지', type: false },
          { text: 'Int Script', type: false },
          { text: '로드밸런서', type: false },
        ],
      },
      {
        question: '서버 생성시 Init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면 HTTPD를 설치한 후 HTTPD가 자동으로 기동되도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?',
        answer: [
          { text: 'systemctl start httpd', type: false },
          { text: 'chconfig start httpd', type: false },
          { text: 'systemctl enable httpd', type: false },
          { text: 'chconfig on httpd', type: true },
        ],
      },
      {
        question: '서버 생성시 init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면서 HTTPD를 설치하도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?',
        answer: [
          { text: 'install httpd', type: false },
          { text: 'yum install httpd', type: false },
          { text: 'yum install -y httpd', type: true },
          { text: 'yum install -a httpd', type: false },
        ],
      },
      {
        question: 'Auto Scaling 구성시 설정할 수 있는 항목이 아닌것은?',
        answer: [
          { text: 'NAS', type: true },
          { text: 'ACG', type: false },
          { text: 'Load Balancer', type: false },
          { text: 'NAT GAteway', type: false },
        ],
      },
      {
        question: '서버OS와 추가볼륨에 대하여 이미지를 생성하며 서버 장치가 필수적인 기능은?',
        answer: [
          { text: '내서버이미지', type: true },
          { text: '스냅샷', type: false },
          { text: '서버이미지빌더', type: false },
          { text: '라이브스냅샷', type: false },
        ],
      },
      {
        question: '사용중인 VM 에 ACG 관리 작업으로 맞는 것을 고르시오',
        answer: [
          { text: 'VM 기동중에는 ACG변경이 불가능 하므로 VM을 정지시킨 후 ACG를 변경한다', type: false },
          { text: '서버 생성 시에만 ACG를 선택할 수 있으므로 사용중인 VM 을 이미지 생성 후 신규 VM 생성 시 새로운 ACG를 선택한다', type: false },
          { text: 'ACG 목록에서 적용 서버 관리하기 액션을 선택하여 VM의 ACG를 변경한다', type: true },
          { text: 'ACG는 VM당 1개만 선택할 수 있으므로 타 VM과 공유하여 사용하지 않는 것이 좋다', type: false },
        ],
      },
      {
        question: '다음이 설명하는 내용은 Auto Scaling의 어떤 항목인가? "새로운 서버가 생성되었다고 해도 Init-Script 실행이나 업데이트 설치 등의 이유로 실제 서비스를 수행할 수 있을 정도로 준비되기까지는 시간이 소요될 수 있습니다. 이것은 실제 SCaling이 수행중이거나 수행 완료된 이후에 모니터링 이벤트 알람이 발생하더라도 무시하도록 설정란 기간입니다.',
        answer: [
          { text: '쿨다운', type: true },
          { text: '헬스체크', type: false },
          { text: '기대용량', type: false },
          { text: 'Policy', type: false },
        ],
      },
      {
        question: '오토스케일링 구성시 오토 스케일링 그룹에서 설정 가능한 내용이 아닌것은 무엇인가?',
        answer: [
          { text: '오토스케일링으로 생성되는 서버가 속할 로드밸런서', type: false },
          { text: '오토스케일링으로 생성되는 서버가 속할 ACG', type: false },
          { text: '오토스케일링으로 생성되는 서버가 속할 NAT Gateway', type: false },
          { text: '오토스케일링이 동작할 시간 및 주기', type: true },
        ],
      },
      {
        question: '다음중 네이버클라우드플랫폼의 Live Station의 특징이 아닌것은?',
        answer: [
          { text: '방송 서비스 구현에 꼭 필요한 Thumbnail image를 추출하고 직접 관리 할 수 있습니다', type: false },
          { text: 'CDN 서비스는 Live Station의 연계가 되어 있지 않아 CDN 서비스를 별도로 신청해야됩니다', type: false },
          { text: 'Live Station은 사용자가 라이브 방송 도중 일시정지를 하고 다시 재생이 가능하도록 타임머신(Time Shift)기능을 제공합니다', type: false },
          { text: '라이브방송 종료 후 녹화 영상을 저장할 수 있습니다', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있씁니다. Cloud Hadoop 상품은 어떤 카테고리에 속해 있을까요?',
        answer: [
          { text: 'Compute', type: false },
          { text: 'Database', type: false },
          { text: 'Analytics', type: true },
          { text: 'AI-Application Service', type: false },
        ],
      },
      {
        question: '네이버클라우드플랫폼은 CLI를 이용하고자 할 때 사용하는 명령어는 무엇인가?',
        answer: [
          { text: 'Ncpcli', type: false },
          { text: 'Ncloud', type: true },
          { text: 'Ncloudcli', type: false },
          { text: 'Ncli', type: false },
        ],
      },
      {
        question: '다음중 네이버 클라우드 플랫폼에서 제공하는 상품이 아닌것은 무엇인가요?',
        answer: [
          { text: 'Cloud Function', type: false },
          { text: 'Container Registry', type: false },
          { text: 'Outpost', type: true },
          { text: 'SourcePipeline', type: false },
        ],
      },
      {
        question: '다음중 클라우드의 특징에 대해 잘못 설명한 것은 무엇인가요?',
        answer: [
          { text: '동일한 네트웍 사용량을 기준으로 보면 Legacy 인프라보다 클라우드가 저렴하다', type: true },
          { text: 'Scale in/out이 Legacy 인프라보다 자유롭다', type: false },
          { text: '요금은 사용량에 따른 종량제를 기본으로 하지만 상품에 따라 정액제 요금도 존재한다', type: false },
          { text: '서버에서 사용할 수 있는 OS는 제한적이다', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있습니다 VMware on Ncloud 상품은 어떤 카테고리에 있을까요?',
        answer: [
          { text: 'Compute', type: false },
          { text: 'Server', type: false },
          { text: 'Management', type: false },
          { text: 'Hybrid & Private Cloud', type: true },
        ],
      },
      {
        question: 'CLA에 저장할 수 있는 최대 용량은?',
        answer: [
          { text: '100GB', type: true },
          { text: '200GB', type: false },
          { text: '300GB', type: false },
          { text: '사용자가 설정할 수 있다', type: false },
        ],
      },
      {
        question: 'Outbound Mailer에서 메일 제목과 본문에서 스프레드 시트나 DB의 열 데이터를 순차적으로 입력하기 위한 기능은 무엇인가?',
        answer: [
          { text: '변수 치환', type: false },
          { text: '대량 변수 입력', type: false },
          { text: '치환 테그', type: true },
          { text: 'DM 입력', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 App Safer에서 앱 실행환경 탐지가 가능한 부분이 아닌것은 무엇인가?',
        answer: [
          { text: '루팅 탐지', type: false },
          { text: '앱 변조 탐지', type: false },
          { text: '메모리 변조 탐지', type: false },
          { text: 'apk 추출 탐지', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서는 다양한 소통 채널을 통해 사용자와 소통을 진행하고 있습니다. 현제 네이버 클라우드 플랫폼에서 운영하고 있지 않은 채널은 무엇인가요?',
        answer: [
          { text: '블로그', type: false },
          { text: '유투브', type: false },
          { text: '페이스북', type: false },
          { text: '트위터', type: true },
        ],
      },
      {
        question: '다음이 설명하는 상품의 이름은 무엇인가요? 사용자의 웹사이트에 검색 기능을 제공하는 상품으로 네이버 형태소 분석 처리기를 기반으로 만들어진 상품',
        answer: [
          { text: 'Cloud Hadoop', type: false },
          { text: 'Elastic Search', type: false },
          { text: 'Cloud Search', type: true },
          { text: 'CLA', type: false },
        ],
      },
      {
        question: 'Workplace에서 제공되지 않는 기능은 무엇인가요?',
        answer: [
          { text: '결제시스템', type: false },
          { text: '인사시스템', type: false },
          { text: '스프레드 시트', type: true },
          { text: '메신저', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 챗봇 서비스와 채널 연동되는 서비스가 아닌것은 무엇인가?',
        answer: [
          { text: '라인', type: false },
          { text: '톡톡', type: false },
          { text: '페이스북', type: false },
          { text: '트위터', type: true },
        ],
      },
      {
        question: 'Gen2 서버 기준, 서버 정지 시에도 정상 요금이 부과되는 서버는?',
        answer: [
          { text: 'Baremetal 서버', type: true },
          { text: 'Standard 서버', type: false },
          { text: 'Compact 서버', type: false },
          { text: 'High-memory 서버', type: false },
        ],
      },
      {
        question: 'Public IP에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '서버당 1개의 Public IP만 부여가 가능하다.', type: false },
          { text: 'Outbound시에는 NCP NAT IP로 통신한다.', type: true },
          { text: 'Classic 환경에서는 KR-1 존의 Public IP는 KR-2 존의 서버에 부여가 불가능하다.', type: false },
          { text: '서버를 반납해도 Public IP는 반납되지 않는다.', type: false },
        ],
      },
      {
        question: '다음중 네이버 클라우드 플랫폼에서 제공하는 상품이 아닌 것은 무엇인가요?',
        answer: [
          { text: 'Cloud Functions', type: false },
          { text: 'Container Registry', type: false },
          { text: 'Outpost', type: true },
          { text: 'SourcePipeline', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있습니다. "Cloud Hadoop" 상품은 어떤 카테고리에 속해 있을까요?',
        answer: [
          { text: 'Compute', type: false },
          { text: 'Database', type: false },
          { text: 'Analytics', type: true },
          { text: 'AI-Application Service', type: false },
        ],
      },
      {
        question: '다음 중, 사용자가 Agent를 설치해야만 사용할 수 있는 서비스가 아닌 것은?',
        answer: [
          { text: 'Cloud Insight', type: true },
          { text: 'System Security Checker', type: false },
          { text: 'CLA', type: false },
          { text: '백업 서비스', type: false },
        ],
      },
      {
        question: '현재 네이버 클라우드 플랫폼에서 제공되지 않는 리전은?',
        answer: [
          { text: '홍콩', type: false },
          { text: '미국 동부', type: true },
          { text: '일본', type: false },
          { text: '독일', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 제공하고 있지 않은 전문화된 클라우드는 어떤 것인가요?',
        answer: [
          { text: '금융 클라우드', type: false },
          { text: '민간 클라우드', type: false },
          { text: '공공 클라우드', type: false },
          { text: '아카데미 클라우드', type: true },
        ],
      },
      {
        question: '다음 중 콘솔에서 서비스를 신청할 수 없는 서비스는?',
        answer: [
          { text: '백업 서비스', type: true },
          { text: '서버 이미지 생성', type: false },
          { text: '스냅샷 기능', type: false },
          { text: '모니터링 서비스', type: false },
        ],
      },
      {
        question: '서버 정지가 필요한 경우가 아닌 것은? (복수정답)',
        answer: [
          { text: '서버 이미지 생성', type: true },
          { text: '서버 스펙 변경', type: false },
          { text: '서버 반납', type: false },
          { text: '공인 IP 부여', type: true },
        ],
      },
      {
        question: '오토스케일링 설정시 오토스케일링그룹(ASG)에서 설정 가능한 내용이 아닌 것은 무엇인가?',
        answer: [
          { text: '오토스케일링으로 생성될 서버의 OS', type: true },
          { text: '오토스케일링에서 사용할 Launch Configuration', type: false },
          { text: '서버 증가, 감소 정책', type: false },
          { text: '일정 설정', type: false },
        ],
      },
      {
        question: '다음이 설명하는 내용은 Auto Scaling의 어떤 항목인가?',
        answer: [
          { text: '쿨다운', type: true },
          { text: '헬스체크', type: false },
          { text: '기대용량', type: false },
          { text: 'Policy', type: false },
        ],
      },
      {
        question: 'Data Teleporter에 대한 설명으로 잘못된 것은?',
        answer: [
          { text: 'Data Teleporter 한 대당 100TB의 저장용량을 가지며, 내부적으로 디스크 문제가 최소화될 수 있도록 설계되었습니다.', type: false },
          { text: '별도의 요청이 없다면 Data Teleporter는 최초 대여 후 60일 이내에 네이버 클라우드 플랫폼으로 반환되어야 합니다.', type: true },
          { text: 'Data Teleporter는 고객이 신청한 암호화 키로 256비트 암호화되며, 암호화 키는 장치내 그 어디에도 저장되지 않습니다.', type: false },
          { text: 'Linux Server와 Windows Server는 모두 NFS 또는 CIFS 공유 파일시스템으로 연결(mount) 할 수 있습니다.', type: false },
        ],
      },
      {
        question: '다음 중, NAS에 대한 설명 중 잘못된 것은?',
        answer: [
          { text: 'NAS는 임계치 설정에 따른 이벤트 알림 기능을 제공한다.', type: false },
          { text: 'NAS는 일정한 스케줄에 따라 자동 스냅샷을 완성한다.', type: false },
          { text: 'NAS는 리눅스 서버에서 공유 가능한 CIFS 프로토콜을 제공한다.', type: true },
          { text: '네이버클라우드플랫폼에서는 NAS 생성 시 마운트포인트 정보를 제공한다.', type: false },
        ],
      },
      {
        question: '베어메탈에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '3가지 스펙을 제공하고 있다.', type: true },
          { text: 'OS로 Oracle Linux도 제공한다.', type: false },
          { text: '디스크 구성시 RAID 방식을 선택할 수 있다.', type: false },
          { text: '내 서버 이미지, 스냅샷, 추가 스토리지 기능은 제공하지 않는다.', type: false },
        ],
      },
      {
        question: 'Bare Metal 서버에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'RAID 1 구성방식만 제공한다.', type: true },
          { text: '요금제는 시간 요금제만 제공한다.', type: false },
          { text: 'Init Script 사용이 가능하다.', type: false },
          { text: 'Oracle Linux가 제공된다.', type: false },
        ],
      },
      {
        question: '다음 중, 네이버 클라우드 플랫폼 서버에 스토리지 추가와 관련하여 틀리게 설명한 것은?',
        answer: [
          { text: 'Linux의 LVM, Window는 동적디스크 할당을 통해 여러 개의 디스크를 하나의 볼륨으로 묶을 수 있습니다.', type: false },
          { text: '서버에 연결된 디스크를 다른 서버로 옮길 수 있습니다.', type: false },
          { text: '사용 중인 디스크의 크기가 부족할 경우, 최대 15개의 스토리지를 추가할 수 있습니다.', type: false },
          { text: '스토리지 당, 100GB, 500GB, 1TB의 단위의 용량만 추가할 수 있습니다.', type: true },
        ],
      },
      {
        question: '네이버클라우드플랫폼에서 제공하는 GPU 서버는 VM에 최대 몇 개의 GPU를 제공할 수 있는지 올바른 답을 고르시오.',
        answer: [
          { text: '1개', type: false },
          { text: '2개', type: false },
          { text: '4개', type: true },
          { text: '그래픽카드 종류마다 장착할 수 있는 개수가 다르다.', type: false },
        ],
      },
      {
        question: '다음 스토리지 상품 특징에 대한 설명으로 맞는 것은?',
        answer: [
          { text: 'NAS는 10GB, 100GB, 500GB 등 다양한 단위로 스토리지 증가가 가능하다.', type: false },
          { text: 'Block Storage와 NAS는 모두 공유 가능한 스토리지이다.', type: false },
          { text: 'NAS는 동적으로 볼륨 사이즈 조정이 가능하고, 자동 스냅샷 및 이벤트 알람 기능을 제공한다.', type: true },
          { text: 'NAS는 Windows 서버만 이용할 수 있는 스토리지다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서 멀티존 이용이 가능한 상품은? (복수정답)',
        answer: [
          { text: 'Cloud DB for MySQL', type: true },
          { text: 'Load Balancer', type: true },
          { text: 'Server', type: false },
          { text: 'Cloud Hadoop', type: false },
        ],
      },
      {
        question: 'CDN+ 설정 시 설정 항목에 대한 설명 중 올바르지 않은 것은 무엇인가요?',
        answer: [
          { text: 'Purge: CDN 캐시 서버에 저장되어 있는 콘텐츠를 삭제하는 기능', type: false },
          { text: 'Secure Token: 토큰 기반의 인증으로 허용된 접근에만 콘텐츠를 전달', type: false },
          { text: 'Ignore Query String: 콘텐츠가 지정된 도메인에만 제공되며 다른 사이트에서 참조되는 것을 방지', type: true },
          { text: 'Access Log: CDN 사용 로그를 확인할 수 있는 기능', type: false },
        ],
      },
      {
        question: '다음 상품 중 상품 생성 시 CDN을 함께 생성하는 기능이 없는 상품은 무엇인가요?',
        answer: [
          { text: 'VOD Transcoder', type: true },
          { text: 'Image Optimizer', type: false },
          { text: 'Live Station', type: false },
          { text: 'VOD Station', type: false },
        ],
      },
      {
        question: '다음 중 VPC에서 사용 가능한 IP 대역은 무엇인가요?',
        answer: [
          { text: '10.0.0.0/12', type: false },
          { text: '172.17.0.0/16', type: true },
          { text: '192.168.0.0/8', type: false },
          { text: '192.168.1.0/30', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 ACG에 대한 설명으로 옳은 것은 무엇인가요?',
        answer: [
          { text: '프로토콜은 TCP, UDP만 지원한다.', type: false },
          { text: 'Subnet당 100개 생성이 가능하다.', type: false },
          { text: '서버와의 맵핑 정보 변경이 가능하다.', type: true },
          { text: 'Rule에 우선순위가 있다.', type: false },
        ],
      },
      {
        question: 'Image Optimizer에 대한 설명으로 틀린 것을 고르시오.',
        answer: [
          { text: '이미지 리사이즈 기능을 제공한다.', type: false },
          { text: '이미지 크롭 기능을 제공한다.', type: false },
          { text: '이미지 자동회전 기능을 제공한다.', type: false },
          { text: '이미지 일관 변환 및 저장 기능을 제공한다.', type: true },
        ],
      },
      {
        question: '애플리케이션 로드밸런서의 특징으로 틀린 것은 무엇인가요?',
        answer: [
          { text: 'HTTP, HTTPS 프로토콜 지원', type: false },
          { text: '고정 IP 제공', type: false },
          { text: 'URL 기반 분기 가능', type: false },
          { text: '별도의 설정 없이 Client IP 확인 가능', type: true },
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
        question: '네이버 클라우드 플랫폼 VPC의 Subnet에 대한 설명으로 틀린 것은 무엇인가요?',
        answer: [
          { text: 'Private Subnet과 Public Subnet이 있습니다.', type: false },
          { text: '서버들은 Private Subnet과 Public Subnet 모두 위치 시킬 수 있습니다.', type: true },
          { text: '공인 IP가 필요한 로드밸런서는 Public Subnet에 위치합니다.', type: false },
          { text: 'Private Subnet에 있는 서버들은 공인 IP 부여를 할 수 없습니다.', type: false },
        ],
      },
      {
        question: '다음 상품 중 이벤트 설정이 불가능한 상품은 무엇인지 고르시오. (복수정답)',
        answer: [
          { text: 'Server', type: false },
          { text: 'NAS', type: false },
          { text: 'Object Storage', type: true },
          { text: 'CDN+', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 상품 중 Apache Kafka Cluster를 제공하는 서비스 이름은 무엇인가요?',
        answer: [
          { text: 'Cloud Data Streaming Service', type: true },
          { text: 'Cloud Search', type: false },
          { text: 'Data Analytics Service', type: false },
          { text: 'Cloud Advisor', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 Effective Log Search & Analytics의 로그전송 방법이 아닌 것은 무엇인가요?',
        answer: [
          { text: 'HTTPS SDK', type: false },
          { text: 'IOS SDK', type: false },
          { text: 'SOCK SDK', type: true },
          { text: 'LOG SDK', type: false },
        ],
      },
      {
        question: 'Workplace에서 제공되지 않는 기능은 무엇인가요?',
        answer: [
          { text: '결제시스템', type: false },
          { text: '인사시스템', type: false },
          { text: '스프레드 시트', type: true },
          { text: '메신저', type: false },
        ],
      },
      {
        question: 'Cloud DB for MySQL과 관련하여 잘못된 설명은?',
        answer: [
          { text: 'Cloud DB for MySQL은 자동 Fail-over 기능을 제공한다.', type: false },
          { text: 'Cloud DB for MySQL의 최대 백업 파일 보관은 20일이다.', type: true },
          { text: 'Cloud DB for MySQL은 최대 10개의 Slave DB를 생성할 수 있다.', type: false },
          { text: 'Cloud DB for MySQL은 Slave DB로의 읽기 부하분산이 가능하다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서의 ACG에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '아웃바운드에 대한 설정이 가능하다.', type: false },
          { text: '접근 허용에 대한 룰을 설정한다.', type: false },
          { text: 'ACG 하나당 최대 100개의 룰을 적용할 수 있다.', type: false },
          { text: '서버는 최대 5개의 ACG를 맵핑할 수 있다.', type: true },
        ],
      },
      {
        question: 'Security Monitoring에서 제공되지 않는 항목은?',
        answer: [
          { text: 'IDS', type: false },
          { text: 'IPS', type: false },
          { text: 'WAF', type: false },
          { text: '침해탐지', type: true },
        ],
      },
      {
        question: '서버 생성시 init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면서 HTTPD를 설치하도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?',
        answer: [
          { text: 'install httpd', type: false },
          { text: 'yum install httpd', type: false },
          { text: 'yum install -y httpd', type: true },
          { text: 'yum install -a httpd', type: false },
        ],
      },
      {
        question: '마이크로서버에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'Network interface를 만들 수 없다.', type: false },
          { text: '1vCPU, 1GB 메모리이다.', type: false },
          { text: 'OS는 CentOS, Ubuntu, Windows를 지원한다.', type: true },
          { text: '결제수단 최초 등록 월부터 1년간 이용요금이 무료이다.', type: false },
        ],
      },
      {
        question: 'CentOS를 사용중인 VM에서 파일시스템 증설 관련 내용 중 틀린 것은? (복수정답)',
        answer: [
          { text: 'NCP 콘솔에서 Block Storage 크기 변경 액션을 수행하면 사전 설치된 Agent가 자동으로 파일시스템을 확장한다.', type: false },
          { text: '최초 구축 시 Block Storage로 할당하는 부분은 LVM으로 구성하여 파일시스템 확장 필요시 PV, LV를 추가한다.', type: false },
          { text: 'Block Storage 크기 변경 액션을 통해 자유롭게 할당 용량을 증설/감설 할 수 있다.', type: true },
          { text: 'Block Storage 크기 변경 액션을 수행하려면, 대상 블록 스토리지가 사용중일 경우 파일시스템을 연결 해제해야 한다.', type: false },
        ],
      },
      {
        question: '다음 기능을 이용하기 위해, 사전에 서버 정지가 필수적인 기능은?',
        answer: [
          { text: '내 서버 이미지', type: false },
          { text: '스냅샷', type: false },
          { text: '서버 이미지 빌더', type: false },
          { text: '서버 반납', type: true },
        ],
      },
      {
        question: '다음 중 Block Storage에 대한 설명 중 잘못된 것은?',
        answer: [
          { text: '데이터 손실 방지를 최우선으로 설계하여 모든 요소가 이중화 되어 있습니다.', type: false },
          { text: '2000GB까지 생성 가능하며, 서버 1대당 10개의 스토리지를 사용할 수 있습니다.', type: true },
          { text: '기동 중단이나 성능 저하 없이 탄력적으로 성능 변경이 가능합니다.', type: false },
          { text: 'HDD/SDD 두 가지 타입으로 제공되며 목적에 맞게 적절한 스토리지 종류를 선택하여 사용할 수 있습니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 제공하는 GPU 카드는?',
        answer: [
          { text: 'P40', type: false },
          { text: 'T4', type: false },
          { text: 'V100', type: false },
          { text: 'P40, T4, V100 모두 제공', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 서버에 스토리지 추가를 할 경우 단일 추가 스토리지당 최대 용량은 얼마인가요?',
        answer: [
          { text: '1TB', type: false },
          { text: '2TB', type: true },
          { text: '3TB', type: false },
          { text: '4TB', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에 서버를 생성하고 네트워크 구성을 하였을 때, 그에 대한 설명으로 틀린 것은 무엇인가요?',
        answer: [
          { text: '서버는 기본적으로 10.xxx / 172.16xx / 192.168.xx 대역 중 하나의 사설 IP를 부여 받을 수 있다.', type: false },
          { text: '서버의 사설망 네트워크 대역은 최소 /28부터 최대 /16 범위까지 설정 가능하다.', type: false },
          { text: 'Public IP를 연결하면 서버에서 ifconfig/ipconfig 명령어를 칠 시 Public IP가 보인다.', type: true },
          { text: '서버는 기본적으로 1Gps 대역폭의 인터페이스를 생성한다.', type: false },
        ],
      },
      {
        question: '다음 상품 중 Media 카테고리 상품이 아닌 것은 무엇인가요?',
        answer: [
          { text: 'Live Station', type: false },
          { text: 'VOD Station', type: false },
          { text: 'VOD Transcoder', type: false },
          { text: 'Elastic Transcoder', type: true },
        ],
      },
      {
        question: 'Load Balancer 상품에 대한 설명 중 잘못된 것은?',
        answer: [
          { text: 'Classic 플랫폼에서의 헬스체크 주기는 6초이다.', type: false },
          { text: 'Classic 플랫폼에서는 3번 응답이 없는 경우 Unbind한다.', type: false },
          { text: 'VPC 플랫폼에서 한 대의 서버는 여러 Target Group에 포함될 수 없다.', type: true },
          { text: 'VPC 플랫폼에서는 Target Group에서 헬스체크 주기를 수정할 수 있다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC의 NACL에 대한 설명으로 틀린 것은?',
        answer: [
          { text: 'Subnet 단위로 적용된다.', type: false },
          { text: 'Allow Deny 규칙 모두 지원한다.', type: false },
          { text: 'Stateful 방식이다.', type: true },
          { text: '우선순위에 따라 규칙을 반영한다.', type: false },
        ],
      },
      {
        question: 'Load Balancer로 연결 가능한 프로토콜이 아닌 것은 무엇인가요?',
        answer: [
          { text: 'TCP', type: false },
          { text: 'UDP', type: true },
          { text: 'HTTPS', type: false },
          { text: 'SSL', type: false },
        ],
      },
      {
        question: 'VPC 환경에서 Load Balancer를 생성하려고 합니다. Target Group의 디폴트 포트 헬스체크 주기는 얼마인가요?',
        answer: [
          { text: '6초', type: false },
          { text: '10초', type: false },
          { text: '30초', type: true },
          { text: '1분', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 서버 NIC 하나에 적용할 수 있는 ACG의 개수는?',
        answer: [
          { text: '2개', type: false },
          { text: '3개', type: true },
          { text: '4개', type: false },
          { text: '5개', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 로드밸런서에서 제공되지 않는 로드 분배 알고리즘은?',
        answer: [
          { text: 'Round Robin', type: false },
          { text: 'Weighted Round Robin', type: true },
          { text: 'Least Connection', type: false },
          { text: 'Source IP Hash', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서 제공하는 로드밸런서 중 SSL 인증을 지원하는 로드밸런서는 무엇인가요?',
        answer: [
          { text: '애플리케이션 로드밸런서', type: true },
          { text: '네트워크 로드밸런서', type: false },
          { text: '하이브리드 로드밸런서', type: false },
          { text: '애플리케이션 프록시 로드밸런서', type: false },
        ],
      },
      {
        question: '다음 로드밸런서 관련 설명 중 틀린 것은?',
        answer: [
          { text: 'HTTP Keep-Alive: 연결된 Connection을 일정시간 동안 유지하면서 다시 연결을 요청할 때 기존에 연결된 Connection을 재사용하는 옵션', type: false },
          { text: 'Connection ilde Timeout: 로드밸런서와 연결된 Connection을 유지하는 시간으로 해당 시간이 지나면 Connection이 강제로 Close되어 연결 해제', type: false },
          { text: 'Proxy Protocol: 로드밸런서에서 TCP, SSL 프로토콜 이용 시, Proxy 환경에서 Connection을 요청하는 클라이언트의 IP 주소를 확인할 수 있는 프로토콜', type: false },
          { text: '로드밸런서에서 발급된 CNAME을 고객이 보유한 CNAME과 ROOT DOMAIN에 등록가능', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC의 Private Subnet에 대한 설명으로 틀린 것은 무엇인가요?',
        answer: [
          { text: 'Private Subnet에 있는 서버들은 공인 IP 부여를 할 수 없습니다.', type: false },
          { text: 'Private Subnet에 있는 서버들은 Internet Gateway를 통해 외부 인터넷으로 나갈 수 있습니다.', type: true },
          { text: '네이버 클라우드 플랫폼의 일부 상품들은 기본적으로 Public Subnet에 위치해야 합니다.', type: false },
          { text: 'Private Subnet을 Public Subnet으로 전환할 수 없습니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 하나의 계정으로 만들 수 있는 최대 VPC 갯수는 몇개인가요?',
        answer: [
          { text: '1개', type: false },
          { text: '2개', type: false },
          { text: '3개', type: true },
          { text: '4개', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Block Storage에서 제공하는 기능이 아닌 것은?',
        answer: [
          { text: 'Detach / Attach 기능', type: false },
          { text: 'Snapshot 기능', type: false },
          { text: 'Disk 용량 증설', type: false },
          { text: 'Disk 용량 축소', type: true },
        ],
      },
      {
        question: 'Auto Scaling 구성 시 설정할 수 있는 항목이 아닌 것은?',
        answer: [
          { text: 'NAS', type: true },
          { text: 'ACG', type: false },
          { text: 'Load Balancer', type: false },
          { text: 'VPC / Subnet', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 제공하는 로드밸런서 중 세션 유지가 필요한 TCP 기반 애플리케이션에 이용할 수 있는 로드밸런서는 무엇인가요?',
        answer: [
          { text: '애플리케이션 로드밸런서', type: false },
          { text: '네트워크 로드밸런서', type: false },
          { text: '네트워크 프록시 로드밸런서', type: true },
          { text: '애플리케이션 프록시 로드밸런서', type: false },
        ],
      },
      {
        question: 'System Security Checker에서 Linux 서버의 점검 항목이 아닌 것은?',
        answer: [
          { text: 'UMASK 설정관리', type: false },
          { text: 'Guest 계정 사용 제한', type: true },
          { text: '홈 디렉토리 권한 설정', type: false },
          { text: 'Anonymous FTP 비활성화', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 CLI를 이용하고자 할 때 사용하는 명령어는 무엇인가요?',
        answer: [
          { text: 'Ncpcli', type: false },
          { text: 'Ncloud', type: true },
          { text: 'Ncloudcli', type: false },
          { text: 'Ncli', type: false },
        ],
      },
      {
        question: '다음 중 클라우드의 특징에 대해 잘못 설명한 것은 무엇인가요?',
        answer: [
          { text: '동일한 네트웍 사용량을 기준으로 보면 Legacy 인프라보다 클라우드가 저렴하다.', type: true },
          { text: 'Scale-In/Out이 Legacy 인프라보다 자유롭다.', type: false },
          { text: '요금은 사용량에 따른 종량제를 기본으로 하지만 상품에 따라 정액제 요금도 존재한다.', type: false },
          { text: '사용할 수 있는 서버 OS가 제한한다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에는 다양한 상품들이 카테고리로 그룹화되어 있습니다. "VMware on Ncloud" 상품은 어떤 카테고리에 속해 있을까요?',
        answer: [
          { text: 'Compute', type: false },
          { text: 'Server', type: false },
          { text: 'Management', type: false },
          { text: 'Hybrid & Private Cloud', type: true },
        ],
      },
      {
        question: '다음 중 네이버 클라우드 플랫폼의 Live Station의 특징이 아닌 것은?',
        answer: [
          { text: '방송 서비스 구현에 꼭 필요한 Thumbnail image를 추출하고 직접 관리할 수 있습니다.', type: false },
          { text: 'Live Station 생성 시 CDN을 동시에 생성할 수 없기에 별도로 생성 후 따로 연동해줘야 합니다.', type: true },
          { text: 'Live Station은 사용자가 라이브 방송 도중 일시정지를 하고 다시 재생이 가능하도록 타임머신(Time Shift)기능을 제공합니다.', type: false },
          { text: '라이브 방송 종료 후, 녹화 영상을 저장할 수 있습니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 CDN+에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '사용량에 따라 요금이 다르다.', type: false },
          { text: '요금은 일 평균 전송량 X 일 수로 계산된다.', type: true },
          { text: '월 전송량 요금에 월 요청 수 요금이 합산되어 진다.', type: false },
          { text: 'CDN+와 GCDN은 요금 체계가 다르다.', type: false },
        ],
      },
      {
        question: 'Application 서비스 각각의 서비스 명과 설명 중 잘못된 것은?',
        answer: [
          { text: 'Clova Speech Recognition: 사람의 목소리를 텍스트로 바꿔주어 다양한 음성인식 서비스에 활용 가능한 서비스', type: false },
          { text: 'Clova Face Recognition: 이미지 속의 얼굴을 감지하고 인식하여 얻은 다양한 정보를 제공할 수 있는 서비스', type: false },
          { text: 'Papago NMT: 입력한 텍스트를 대규모 학습 데이터를 기반으로 여러 나라의 언어로 자동 번역해주는 서비스', type: false },
          { text: 'Object Detection: 입력한 텍스트를 자연스러운 목소리로 재생해주는 음성 합성 API 서비스', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 App Safer에서 앱 실행 환경 탐지가 가능한 부분이 아닌 것은?',
        answer: [
          { text: '루팅 탐지', type: false },
          { text: '애플리케이션 변조 탐지', type: false },
          { text: '메모리 변조 탐지', type: false },
          { text: 'APK 추출 탐지', type: true },
        ],
      },
      {
        question: 'VPC 플랫폼 상의 상품 의존성 관계를 [상품 : 의존성] 형태로 나타냈을 때, 올바르지 않은 관계는?',
        answer: [
          { text: 'VPC : 리전', type: false },
          { text: 'Subnet : Zone', type: false },
          { text: 'Init Script : Zone', type: true },
          { text: 'Cloud DB : Multi Zone', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서는 다양한 소통 채널을 통해 사용자와 소통을 진행하고 있습니다. 현재 네이버 클라우드 플랫폼에서 운영하고 있지 않은 채널은 무엇인가요?',
        answer: [
          { text: '블로그', type: false },
          { text: '유튜브', type: false },
          { text: '페이스북', type: false },
          { text: '트위터', type: true },
        ],
      },
      {
        question: 'Cloud Log Analytics에 저장할 수 있는 최대 로그 용량은?',
        answer: [
          { text: '100GB', type: true },
          { text: '200GB', type: false },
          { text: '300GB', type: false },
          { text: '사용자가 설정할 수 있다.', type: false },
        ],
      },
      {
        question: 'Outbound Mailer에서 메일 제목과 본문에서 스프레드 시트나 DB의 열 데이터를 순차적으로 입력하기 위한 기능은?',
        answer: [
          { text: '변수 치환', type: false },
          { text: '대량 변수 입력', type: false },
          { text: '치환 태그', type: true },
          { text: 'DM 입력', type: false },
        ],
      },
      {
        question: 'Cloud Log Analytics의 최대 저장 기간은?',
        answer: [
          { text: '30일', type: true },
          { text: '120일', type: false },
          { text: '180일', type: false },
          { text: '사용자가 설정할 수 있다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 챗봇 서비스와 채널 연동되는 서비스가 아닌 것은?',
        answer: [
          { text: '라인', type: false },
          { text: '톡톡', type: false },
          { text: '페이스북', type: false },
          { text: '트위터', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 AI 서비스에서 제공하지 않는 상품은?',
        answer: [
          { text: 'Clova OCR', type: false },
          { text: 'Clova Image Recognition', type: true },
          { text: 'Clova Voice', type: false },
          { text: 'Clova Face Recognition', type: false },
        ],
      },
      {
        question: '클라우드는 기존 Legacy와 비교하여 다양한 장점이 있습니다. 아래 보기 중 클라우드 장점이 아닌 것은?',
        answer: [
          { text: '동일한 성능의 서버를 비교하였을 때 Legacy보다 클라우드가 비용 경쟁력이 높다.', type: true },
          { text: '서버 구성 시 짧은 시간 내에 구성이 가능하다.', type: false },
          { text: '기본적인 보안 장비 및 네트웍이 구성되어 있다.', type: false },
          { text: '오토스케일링 플랫폼과 같이 비용 효율적인 상품들이 준비되어 있다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 제공하지 않는 OS는?',
        answer: [
          { text: 'CentOS', type: false },
          { text: 'Oracle Linux', type: false },
          { text: 'Debian', type: true },
          { text: 'Ubuntu', type: false },
        ],
      },
      {
        question: 'VPC 플랫폼에서 서버 정지 시 요금 할인이 적용되지 않는 서버 타입은?',
        answer: [
          { text: 'Standard', type: false },
          { text: 'High-CPU', type: false },
          { text: 'High-Memory', type: false },
          { text: 'GPU', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼에서 제공하는 시스템 로그 분석 서비스는?',
        answer: [
          { text: 'RUA', type: false },
          { text: 'CLA', type: true },
          { text: 'ELSA', type: false },
          { text: 'SENS', type: false },
        ],
      },
      {
        question: '오토스케일링을 구성하고자 할 때 오토스케일링 그룹(ASG)을 구성하여야 한다. 오토스케일링 그룹에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '하나의 그룹에서 생성 가능한 최대 서버 대수는 30대이다.', type: false },
          { text: '기대 용량은 최소 용량보다 크거나 같아야 한다.', type: false },
          { text: '헬스체크 유형에는 서버, 네트워크 트래픽, 로드밸런서가 있다.', type: true },
          { text: '하나의 ASG에는 최대 10개의 로드밸런서를 연결할 수 있다.', type: false },
        ],
      },
      {
        question: 'VPC 환경 / Classic 2세대 서버의 스펙 중 생성 불가능한 서버 스펙은 무엇인가요?',
        answer: [
          { text: 'vCPU 4개, RAM 8GB', type: false },
          { text: 'vCPU 8개, RAM 8GB', type: true },
          { text: 'vCPU 2개, RAM 8GB', type: false },
          { text: 'vCPU 16개, RAM 128GB', type: false },
        ],
      },
      {
        question: '오토스케일링의 Launch Configuration 구성 시 구성 가능한 항목이 아닌 것을 고르시오.',
        answer: [
          { text: '생성될 서버의 OS', type: false },
          { text: '사전에 만들어 놓은 내 서버 이미지', type: false },
          { text: 'Init Script', type: false },
          { text: '로드밸런서', type: true },
        ],
      },
      {
        question: '서버 생성시 init script를 통해 서버를 구성할 수 있습니다. CentOS 7.x 버전의 서버를 생성하면서 HTTPD를 설치한 후, HTTPD가 자동으로 가동되도록 init script에 명령어를 입력하고자 하는 경우 올바른 명령어는 무엇인가요?',
        answer: [
          { text: 'systemctl start httpd', type: false },
          { text: 'chkconfig start httpd', type: false },
          { text: 'systemctl enable httpd', type: true },
          { text: 'chkconfig on httpd', type: false },
        ],
      },
      {
        question: '백업 상품 신청서 작성 시 필요한 정보가 아닌 것은?',
        answer: [
          { text: '백업 받을 서버의 호스트명', type: false },
          { text: '백업 받을 서버의 비공인 IP', type: false },
          { text: '백업 프로세스의 CPU 사용량 제한 여부', type: true },
          { text: '데이터 사이즈', type: false },
        ],
      },
      {
        question: 'VPC 환경 / Classic 2세대 서버의 Standard 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?',
        answer: [
          { text: 'vCPU 2개, RAM 8GB', type: true },
          { text: 'vCPU 2개, RAM 4GB', type: false },
          { text: 'vCPU 2개, RAM 16GB', type: false },
          { text: 'vCPU 4개, RAM 4GB', type: false },
        ],
      },
      {
        question: '서버 패스워드에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '초기 패스워드는 서버 생성 시 생성한 인증키를 가지고 확인할 수 있다.', type: false },
          { text: '서버에서 패스워드를 변경 후 패스워드를 까먹은 경우 기존에 생성한 인증키를 통해 패스워드를 확인할 수 있다.', type: true },
          { text: '서버 생성 시 생성한 인증키는 다른 인증키로 교체할 수 있다.', type: false },
          { text: '서버 초기 패스워드는 복잡한 문자열로 부여한다.', type: false },
        ],
      },
      {
        question: 'SSD 스토리지의 크기가 400GB일 때 MAX IOPS는 얼마인가?',
        answer: [
          { text: '2000', type: false },
          { text: '8000', type: false },
          { text: '16000', type: true },
          { text: '20000', type: false },
        ],
      },
      {
        question: 'VPC 환경 / Classic 2세대 서버의 High Memory 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?',
        answer: [
          { text: 'vCPU 4개, RAM 8GB', type: false },
          { text: 'vCPU 8개, RAM 8GB', type: false },
          { text: 'vCPU 2개, RAM 8GB', type: false },
          { text: 'vCPU 16개, RAM 128GB', type: true },
        ],
      },
      {
        question: '서버 생성 시 선택 가능한 스토리지 종류에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'SSD 타입은 저장장치가 SSD인 디스크이다.', type: false },
          { text: 'HDD 타입은 저장장치가 SATA인 디스크이다.', type: true },
          { text: '서버 타입에 따라 NVMe 디스크를 사용할 수 있다.', type: false },
          { text: 'SSD 타입은 MAX IOPS가 지정된다', type: false },
        ],
      },
      {
        question: 'VPC 환경 / Classic 2세대 서버의 High CPU 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?',
        answer: [
          { text: 'vCPU 4개, RAM 8GB', type: true },
          { text: 'vCPU 8개, RAM 8GB', type: false },
          { text: 'vCPU 2개, RAM 8GB', type: false },
          { text: 'vCPU 16개, RAM 128GB', type: false },
        ],
      },
      {
        question: 'VPC 환경에서 사용 중인 VM에 ACG 관리 작업으로 맞는 것을 고르시오.',
        answer: [
          { text: 'VM 기동 중에는 ACG 변경이 불가능하므로 VM을 정지시킨 후 ACG를 변경한다.', type: false },
          { text: 'ACG는 서버 NIC에 매핑된다.', type: true },
          { text: '하나의 서버는 최대 2개의 ACG와 매핑될 수 있다.', type: false },
          { text: 'ACG는 VM당 1개만 선택할 수 있으므로 타 VM과 공유하여 사용하지 않는 것이 좋다.', type: false },
        ],
      },
      {
        question: 'Linux용 Init Script로 생성 불가능한 스크립트 언어는?',
        answer: [
          { text: 'bash', type: false },
          { text: 'perl', type: false },
          { text: 'python', type: false },
          { text: 'php', type: true },
        ],
      },
      {
        question: 'Bare-Metal 서버 기능 설명으로 맞는 것은?',
        answer: [
          { text: '스토리지 RAID 설정은 RAID 1, RAID 1+0을 제공한다.', type: false },
          { text: '운영체제로 Oracle Linux를 지원한다.', type: true },
          { text: '로컬 디스크 추가가 가능하다.', type: false },
          { text: '서버 정지 시에는 스토리지 사용 요금만 과금한다.', type: false },
        ],
      },
      {
        question: 'Object Storage에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '파일 단위의 데이터 저장, 공유, 배포가 가능하여 콘텐츠를 저장하고, 다른 사용자에게 공유하거나 배포할 수 있다.', type: false },
          { text: '대용량 데이터의 저장소로 활용할 수 있습니다.', type: false },
          { text: '네이버 클라우드 플랫폼 사용자가 아닌 외부 사용자에게 파일 접근 권한을 제공하기 위해서는 반드시 "폴더 공개 하기" 기능을 사용해야 합니다.', type: true },
          { text: 'CDN 상품과 연동하여 사용할 수 있습니다.', type: false },
        ],
      },
      {
        question: '서버 스토리지에 대한 설명으로 맞는 것은?',
        answer: [
          { text: '부팅 스토리지가 HDD인 경우, 추가 스토리지로 HDD만 추가할 수 있다.', type: false },
          { text: 'VM이 운영 중인 상태에서도 Disk 변경이 가능하다.', type: false },
          { text: '디스크의 사이즈를 기존보다 크게만 변경이 가능하다', type: true },
          { text: 'High-Memory, Bare-Metal 서버의 경우 스토리지 추가가 지원되지 않는다.', type: false },
        ],
      },
      {
        question: '백업 서비스 설명 중 틀린 것은?',
        answer: [
          { text: '보관 주기는 백업 주기의 최소 2배 이상이 되어야 합니다.', type: false },
          { text: '증분 백업은 전체 백업 이후 백업 디렉토리 내 변경된 데이터만 백업하는 방식이다.', type: false },
          { text: '백업된 데이터는 최소 7일부터 52주까지 보관이 가능합니다.', type: true },
          { text: '전체 백업은 백업 디렉토리의 모든 데이터를 백업합니다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 백업 상품의 경우, 백업 데이터 보관 기간으로 알맞은 것은?',
        answer: [
          { text: '최소 1일부터 최대 4주', type: false },
          { text: '최소 7일부터 최대 24주', type: true },
          { text: '최소 15일부터 최대 36주', type: false },
          { text: '최소 30일부터 최대 1년', type: false },
        ],
      },
      {
        question: '다음 상품 중 Networking 카테고리 상품이 아닌 것은 무엇인가요?',
        answer: [
          { text: 'IPSec VPN', type: false },
          { text: 'Load Balancer', type: false },
          { text: 'NAT Gateway', type: false },
          { text: 'SSL VPN', type: true },
        ],
      },
      {
        question: '다음 중 VPC에서 사용할 수 없는 IP 대역은 무엇인가요?',
        answer: [
          { text: '10.0.0.0/16', type: false },
          { text: '192.168.0.0/24', type: false },
          { text: '172.16.0.0/16', type: false },
          { text: '172.255.0.0/24', type: true },
        ],
      },
      {
        question: 'Classic 환경에서 서버에 부착된 하나의 NIC에 두 개 이상의 IP를 부여하였을 때 발생할 수 있는 상황은?',
        answer: [
          { text: '기존 IP로는 통신이 되나 추가된 IP로 통신이 되지 않는다.', type: false },
          { text: '추가된 IP 뿐만 아니라 기존 IP도 통신이 되지 않는다.', type: true },
          { text: '서버가 강제 정지된다.', type: false },
          { text: '기존 IP는 통신이 안되고 추가된 IP로만 통신이 된다.', type: false },
        ],
      },
      {
        question: 'VOD Transcoder에 대한 설명 중 틀린 것은?',
        answer: [
          { text: 'Preser은 1~5까지 설정 가능하다.', type: false },
          { text: 'Codec는 H.264만 지원한다.', type: false },
          { text: 'Thumbnail를 자동 생성한다.', type: true },
          { text: 'Output 경로는 File Storage와 Object Storage에 저장할 수 있다.', type: false },
        ],
      },
      {
        question: '다음 중 VPC에서 사용할 수 없는 IP 대역은 무엇인가요?',
        answer: [
          { text: '10.0.0.0/8', type: true },
          { text: '192.168.1.0/16', type: false },
          { text: '172.16.0.0/24', type: false },
          { text: '192.168.0.0/24', type: false },
        ],
      },
      {
        question: 'VPC 환경에서는 다양한 방식의 로드밸런서를 제공하고 있습니다. 네이버 클라우드 플랫폼에서 제공하고 있는 지 않은 로드밸런서 방식은 무엇인가요?',
        answer: [
          { text: '애플리케이션 로드밸런서', type: false },
          { text: '네트워크 로드밸런서', type: false },
          { text: '네트워크 프록시 로드밸런서', type: false },
          { text: '애플리케이션 프록시 로드밸런서', type: true },
        ],
      },
      {
        question: '다음에서 설명하는 기능은 어떤 상품을 설명하는 것일까요? 방화벽과 같이 ACL을 설정하는 외부의 네트웍과 연결시 네이버 클라우드 플랫폼 내에 있는 다수의 서버들이 하나의 공인 IP로 해당 외부 네트웍에 접근할 수 있게 해주며, Private Subnet에서 외부 인터넷으로 연결이 필요할 때 필수적인 상품',
        answer: [
          { text: 'Load Balancer', type: false },
          { text: 'IPSec VPN', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'API Gateway', type: false },
        ],
      },
      {
        question: '네트워크 로드밸런서의 특징으로 틀린 것은 무엇인가요?',
        answer: [
          { text: '별도의 설정 없이 Client IP 확인이 가능하다.', type: false },
          { text: '분배 알고리즘은 Source IP Hash와 Round Robin 방식만 제공한다.', type: false },
          { text: '로드밸런서를 사용하기 위해 서버에 별도의 설정이 필요하다.', type: true },
          { text: 'HTTP, HTTPS 프로토콜을 지원하지 않는다.', type: false },
        ],
      },
      {
        question: 'VPC 환경에서 서버를 한 대 생성하였다. 서버 Network Interface에 대한 설명 중 맞는 것은?',
        answer: [
          { text: '서버 Network Interface는 최대 3개까지 만들 수 있다.', type: true },
          { text: 'Network Interface 하나에 여러 개의 IP를 부여할 수 있다.', type: false },
          { text: 'NIC에는 해당 서버를 처음 생성할 때 선택한 Subnet 범위의 IP만 할당할 수 있다.', type: false },
          { text: '원하는 사설IP 설정은 불가능하며, DHCP로 자동 할당만 가능하다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 Classic 환경의 로드밸런서와 유사한 VPC 환경에서의 로드밸런서는 어떤 방식인가요?',
        answer: [
          { text: '애플리케이션 로드밸런서', type: false },
          { text: '네트워크 로드밸런서', type: false },
          { text: '네트워크 프록시 로드밸런서', type: true },
          { text: '애플리케이션 프록시 로드밸런서', type: false },
        ],
      },
      {
        question: '하나의 VPC에 ACG를 최대 몇 개까지 생성 가능한가요?',
        answer: [
          { text: '5개', type: false },
          { text: '100개', type: false },
          { text: '300개', type: false },
          { text: '500개', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 VPC 환경에서 ACG에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '서버와 연결되어 있는 맵핑 정보를 변경할 수 있다.', type: false },
          { text: 'VPC에 의존적이다.', type: false },
          { text: 'White List 방식의 방화벽이다.', type: false },
          { text: 'Inbound에 대해서만 룰 적용이 가능하다.', type: true },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경의 로드밸런서 상품의 설명 중 틀린 것은?',
        answer: [
          { text: '22번 포트도 로드밸런싱할 수 있다.', type: false },
          { text: 'VPC 환경에서는 3가지의 로드밸런서가 제공된다.', type: false },
          { text: '부하처리 성능에 따라 Small/Medium/Large 중 스펙을 선택할 수 있다.', type: false },
          { text: 'Proxy 방식의 로드밸런서를 사용하면, 별도의 설정없인 클라이언트의 IP를 확인할 수 없다.', type: true },
        ],
      },
      {
        question: '라이브 스트리밍 서비스를 진행하는데 필요한 모든 Back-end 기능을 지원하며, NAVER Cloud Platform CDN 연동을 통해 원활한 라이브 진행을 할 수 있는 상품은?',
        answer: [
          { text: 'Clova Face Recognition', type: false },
          { text: 'Live Station', type: true },
          { text: 'VOD Transcoder', type: false },
          { text: 'Image Optimizer', type: false },
        ],
      },
      {
        question: 'CDN+ 관련 용어 설명 중 틀린 것은?',
        answer: [
          { text: '서비스도메인 : 서비스에서 콘텐츠 전송 시 사용자에게 노출되는 도메인', type: false },
          { text: 'Ignore Query String : CDN 서비스가 원본 서버에 요청할 때 "?id=1234"와 같이 URL에 포함된 GET 파라미터를 제거한 후에 요청', type: false },
          { text: 'Referrer Domain : 콘텐츠가 지정된 도메인에만 제공되게 하여 다른 사이트에서 참조되는 것을 방지', type: false },
          { text: 'Cache Expiry : 사용자 요청에 의해 요구되는 콘텐츠를 빠르게 제공하기 위해 캐시 서버에 저장', type: true },
        ],
      },
      {
        question: '비공인 IP를 가진 다수의 서버에게 대표 공인 IP를 이용하여 외부 접속이 가능하게 해주는 상품은?',
        answer: [
          { text: 'API Gateway', type: false },
          { text: 'IP Gateway', type: false },
          { text: 'NAT Gateway', type: true },
          { text: 'Global Route Manager', type: false },
        ],
      },
      {
        question: 'VPC는 하나의 독립된 네트웍을 구성하게 됩니다. 따라서 VPC를 다수 생성하게 되면 VPC간 통신은 되지 않는데 VPC간 통신을 가능하게 해주는 서비스는 무엇인가요?',
        answer: [
          { text: 'Private Subnet', type: false },
          { text: 'Public Subnet', type: false },
          { text: 'VPC Peering', type: true },
          { text: 'Route Table', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 NAS에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '볼륨은 최소 500GB에서 최대 10TB까지이다.', type: false },
          { text: '볼륨 크기에 따라 IOPS가 달라진다.', type: false },
          { text: '볼륨의 확장 축소는 100GB 단위로 가능하다.', type: true },
          { text: '볼륨 개수는 계정 당 20개로 제한된다.', type: false },
        ],
      },
      {
        question: '다음 중 클라우드의 비용과 관련이 가장 높은 개념은 무엇인가요?',
        answer: [
          { text: 'TCO (총 소요 비용)', type: false },
          { text: 'ROI (투자 자본 수익률)', type: false },
          { text: 'CAPEX (자본적 지출)', type: false },
          { text: 'OPEX (운영 비용)', type: true },
        ],
      },
      {
        question: 'Cloud DB 상품에서 제공하고 있지 않은 DBMS는?',
        answer: [
          { text: 'Oracle', type: true },
          { text: 'MS-SQL', type: false },
          { text: 'MySQL', type: false },
          { text: 'Redis', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 보안 상품 중 없는 상품은?',
        answer: [
          { text: 'App Safer', type: false },
          { text: 'Web Safer', type: true },
          { text: 'File Safer', type: false },
          { text: 'Site Safer', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼의 GPU 상품에 대한 설명 중 틀린 것은?',
        answer: [
          { text: '최대 12개의 GPU를 하나의 VM에 할당할 수 있다.', type: true },
          { text: '서버를 정지시켜도 요금이 발생한다.', type: false },
          { text: 'Linux OS를 지원한다.', type: false },
          { text: 'T4, V100 등의 GPU 카드가 제공된다.', type: false },
        ],
      },
      {
        question: '다음 중 오브젝트 스토리지 설명 중 틀린 것은?',
        answer: [
          { text: '버킷 공개하기는 버킷 안의 폴더 및 파일 정보 조회 및 업로드가 가능하다.', type: false },
          { text: '파일 공개하기는 파일 정보 조회 및 다운로드/업로드가 가능하다.', type: true },
          { text: '버킷 권한은 목록 조회, 업로드, ACL 조회, ACL 수정이 가능하다.', type: false },
          { text: '파일 권한은 다운로드, ACL 조회, ACL 수정이 가능하다.', type: false },
        ],
      },
      {
        question: '네이버 클라우드 플랫폼 VPC 환경에서 제공되는 GPU 서버의 특징으로 틀린 것은?',
        answer: [
          { text: 'NVDIA T4, V100 이용이 가능하다.', type: false },
          { text: '서버 1대당 꽂을 수 있는 T4의 최대 개수는 2개이다.', type: true },
          { text: '서버 1대당 꽂을 수 있는 V100의 최대 개수는 4개이다.', type: false },
          { text: 'Grid 기술을 사용할 수 있다.', type: false },
        ],
      },
      {
        question: 'NAS 상품 설명 중 틀린 것은?',
        answer: [
          { text: '자체 스냅샷 기능이 제공된다.', type: false },
          { text: 'Linux Server와 Windows Server 모두 NAS를 마운트할 수 있습니다.', type: false },
          { text: 'NAS 볼륨은 네이버 클라우드 플랫폼 인프라 내에 있는 서버에서만 마운트 가능합니다.', type: false },
          { text: 'NAS는 용량 한도 없이 사용할 수 있다.', type: true },
        ],
      },
      {
        question: '다음 중 Global Route Manager의 로드밸런싱 타입이 아닌 것은?',
        answer: [
          { text: 'Weighted', type: false },
          { text: 'Round Robin', type: false },
          { text: 'Geolocation', type: false },
          { text: 'Source IP Hash', type: true },
        ],
      },
      {
        question: '내 서버 이미지에 대한 설명으로 틀린 것은?',
        answer: [
          { text: '내 서버 이미지가 생성되는 동안 서버는 일시적으로 "복제중" 상태이나 서버는 정상적으로 운영된다.', type: false },
          { text: '내 서버 이미지를 다른 리전으로 복제할 수 있다.', type: false },
          { text: '내 서버 이미지는 오토스케일링의 Launch Configuration에서도 이용이 가능하다.', type: false },
          { text: '내 서버 이미지를 이용해 서버를 생성할 때, 원본 서버의 부팅스토리지 종류와 동일하게 생성된다.', type: true },
        ],
      },
]
export default nca;