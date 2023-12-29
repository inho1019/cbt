const ncp200 = [
    {
        question: '네이버클라우드플랫폼 AI 서비스에서 제공하지 않는 상품은?',
        answer: [
            { text: 'Clova OCR', type: false },
            { text: 'Clova Image Recognition', type: true },
            { text: 'Clova Voice', type: false },
            { text: 'Clova Face Recognition', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서의 Live Migration 에 대한 설명으로 올바른 것은?',
        answer: [
            { text: '일반 서버의 경우 호스트 서버 장애 시 Live Migration 이 작동한다.', type: false },
            { text: 'BareMetal 서버의 경우 시간이 조금 걸리지만 Live Migration 이 가능하다.', type: false },
            { text: 'Live Migration 이란 서버가 죽지 않고 호스트서버가 변경되는 것을 뜻한다.', type: true },
            { text: 'Live Migration 기능을 활성화하기 위해서는 서비스 신청이 필요하다.', type: false },
        ]
    },
    {
        question: '다음 상품 중 카테고리가 다른 상품은?',
        answer: [
            { text: 'GeoLocation', type: false },
            { text: 'Chatbot', type: false },
            { text: 'Cloud Outbound Mailer', type: false },
            { text: 'SourceCommit', type: true },
        ]
    },
    {
        question: 'MC(Main Console)에서 설정 불가능한 상품은 무엇인가? (모두 고르시오)',
        answer: [
            { text: 'Hybrid Cloud Hosting', type: false },
            { text: 'Papago NMT', type: true },
            { text: 'Backup', type: true },
            { text: 'Workplace', type: false },
        ]
    },
    {
        question: '현재 네이버 클라우드 플랫폼에서 멀티존을 제공하고 있는 리전은?',
        answer: [
            { text: '일본', type: false },
            { text: '한국', type: true },
            { text: '독일', type: false },
            { text: '홍콩', type: false },
        ]
    },
    {
        question: '국내서비스로 한국 대상으로 대용량 파일 다운로드를 하고자 한다. 이 때 현재 사용 가능한 적절한 상품은?',
        answer: [
            { text: 'CDN', type: false },
            { text: 'CDN+', type: true },
            { text: 'GCDN', type: false },
            { text: 'GRM', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 VPC 환경에서 멀티존 이용이 가능한 상품은? (복수선택)',
        answer: [
            { text: 'Cloud DB for MySQL', type: true },
            { text: 'Load Balancer', type: true },
            { text: 'Server', type: false },
            { text: 'Cloud Hadoop', type: true },
        ]
    },
    {
        question: 'Linux 에서 LVM 을 구성하고자 합니다. Fdisk 에서 LVM 용 파티션을 구성하려고 하는데 LVM 의 파티션 번호는 무엇인가요??',
        answer: [
            { text: '83', type: false },
            { text: 'e6', type: false },
            { text: '80', type: false },
            { text: '8e', type: true },
        ]
    },
    {
        question: 'VPC 환경/Classic 2 세대 서버의 High CPU 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?',
        answer: [
            { text: 'vCPU 4 개, RAM 8GB', type: true },
            { text: 'vCPU 8 개, RAM 8GB', type: false },
            { text: 'vCPU 2 개, RAM 8GB', type: false },
            { text: 'vCPU 16 개, RAM 128GB', type: false },
        ]
    },
    {
        question: 'Windows 서버의 내서버이미지 생성 전 SID 중복으로 발생할 수 있는 오류를 예방하기 위해 해야하는 작업을 바르게 설명한 것을 고르시오.',
        answer: [
            { text: '윈도우 서버 상태를 정지 상태로 만든 후 이미지를 생성한다.', type: false },
            { text: '윈도우 서버에 할당된 스토리지를 제거한 후 이미지를 생성한다.', type: false },
            { text: 'Initialization Tool 을 이용해서 sysprep 과정을 거친다.', type: true },
            { text: '윈도우 서버에 ESC 를 “사용안함”으로 변경한 후 이미지를 생성한다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 쿠버네티스 마스터 노드에 설치되지 않는 요소는 무엇인가?',
        answer: [
            { text: 'etcd', type: false },
            { text: 'apiserver', type: false },
            { text: 'scheduler', type: false },
            { text: 'kubelet', type: true },
        ]
    },
    {
        question: '다음 중 CLI 를 사용하여 Kubernetes service 를 제어할 수 있도록 설치해야 하는 것은?',
        answer: [
            { text: 'calico', type: false },
            { text: 'kubectl', type: true },
            { text: 'ncloud cli', type: false },
            { text: 'kubelet', type: false },
        ]
    },
    {
        question: '다음 중 블록 스토리지의 디스크 타입 변경을 위한 액션으로 적절한 보기는?',
        answer: [
            { text: '스토리지 디스크 타입을 바로 변경', type: false },
            { text: '스냅샷을 생성 후, 스토리지를 생성하며 디스크 타입을 변경', type: false },
            { text: '서버를 정지시킨 후 스토리지를 부착시킨 후 스냅샷 생성, 스토리지를 생성하며 디스크 타입을 변경', type: true },
            { text: '불가능하다', type: false },
        ]
    },
    {
        question: '다음 VPC 환경에서의 ACG 에 대한 설명 중 틀린 것은?',
        answer: [
            { text: '서버 NIC 에 매핑된다.', type: false },
            { text: 'Inbound/Outbound 룰 설정이 모두 가능하다', type: false },
            { text: '허용/거부 룰 설정이 모두 가능하다', type: true },
            { text: '서버 생성 시 필수적으로 매핑해야 하는 요소이다', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 오토스케일링에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
            { text: '네이버클라우드 플랫폼 CLI 로 제어할 수 있다.', type: true },
            { text: '스케일 인 대상 VM 에 대한 사용자 지정이 가능하다. (먼저 생성한 서버부터 반납 or API 호출로 지정 가능 – 사용자 원하는 대로 지정 가능)', type: true },
            { text: '기본적으로 오토스케일링을 이용하면 서버를 무한정 늘릴 수 있다.', type: false },
            { text: 'GPU, BareMetal 등 모든 타입의 서버 상품들은 오토스케일링 기능을 이용할 수 있다.', type: false },
        ]
    },
    {
        question: '다음 중 분산 파일 시스템인 것은 무엇인가?',
        answer: [
            { text: 'EXT3', type: false },
            { text: 'CODA', type: true },
            { text: 'NTFS', type: false },
            { text: 'JFS', type: false },
        ]
    },
    {
        question: 'MC(Main Console)상에 보여지는 서버의 호스트네임을 변경하기 위한 가장 좋은 방법은?',
        answer: [
            { text: '콘솔에서 서버 이름 변경을 선택하여 호스트명을 변경한다.', type: true },
            { text: '/etc/sysconfig/network 파일을 수정한다', type: false },
            { text: '/etc/sysconfig/hostname 을 수정한다', type: false },
            { text: '한번 생성된 서버의 이름은 변경할 수 없다', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 VPC 환경에서의 ACG 에 대한 설명으로 옳은 것을 모두 고르시오',
        answer: [
            { text: '접근 소스는 IP 로만 설정 가능하다', type: false },
            { text: 'In/Outbound 에 대한 ACG 룰 설정을 할 수 있다.', type: true },
            { text: '한 대의 서버에는 한 개의 ACG 매핑만이 가능하다', type: false },
            { text: 'ACG 는 서버에 할당된 이후에도 언제든 룰 수정이 가능하다', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 VPC 환경에서 서버의 네트워크 환경 특성에 대한 설명 중 잘못된 것을 고르시오',
        answer: [
            { text: '한 대의 서버에는 최대 3 개의 네트워크 인터페이스를 장착할 수 있다', type: false },
            { text: '한 대의 서버에는 각기 다른 서브넷 대역의 IP 를 여러 개 붙일 수 없다', type: true },
            { text: '서버의 사설망 대역은 RFC1918 표준 대역을 따른다', type: false },
            { text: '각기 다른 VPC 에 속해있는 서버들도 VPC Peering 을 통해 서로 통신할 수 있다', type: false },
        ]
    },
    {
        question: 'RAID 0(스트라이프)에 대한 설명 중 틀린 것은?',
        answer: [
            { text: '단순볼륨에 비해 쓰기 속도가 뛰어나다', type: false },
            { text: '단순볼륨에 비해 읽기 속도가 뛰어나다', type: false },
            { text: '단순볼륨에 비해 데이터 안정성이 높다', type: true },
            { text: '저장공간의 손실이 없다', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 서버에 대한 설명으로 잘못된 것을 고르시오',
        answer: [
            { text: '원하는 만큼 무한정으로 서버를 생성할 수 있다', type: true },
            { text: '서버를 정지한 후엔 서버 스펙 변경이 가능하다', type: false },
            { text: '디스크는 SSD 타입과 HDD 타입을 제공한다', type: false },
            { text: '네이버 클라우드 플랫폼 안의 다른 상품들과 연계하여 사용이 가능하다', type: false },
        ]
    },
    {
        question: '다음 중 도커 이미지를 생성하기 위한 Description file 을 의미하는 것은?',
        answer: [
            { text: 'Docker file', type: true },
            { text: 'Container file', type: false },
            { text: 'Base file', type: false },
            { text: 'Description file', type: false },
        ]
    },
    {
        question: 'Block Storage 에 대한 설명으로 맞는 것은?',
        answer: [
            { text: 'VM 당 최대 10 개의 추가 볼륨을 attach 할 수 있다.', type: false },
            { text: 'VM 당 최대 12 개의 추가 볼륨을 attach 할 수 있다.', type: false },
            { text: 'VM 당 최대 14 개의 추가 볼륨을 attach 할 수 있다.', type: false },
            { text: 'VM 당 최대 15 개의 추가 볼륨을 attach 할 수 있다.', type: true },
        ]
    },
    {
        question: '다음 중 VPC 플랫폼에서 내 서버 이미지를 생성할 수 있는 서버의 상태를 모두 고르시오',
        answer: [
            { text: '운영중', type: true },
            { text: '정지', type: true },
            { text: '시작중', type: false },
            { text: '부팅중', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼 MC(Main console)에 없는 상품 카테고리는?',
        answer: [
            { text: 'Media', type: false },
            { text: 'Game', type: false },
            { text: 'Hybrid & Private Cloud', type: false },
            { text: 'Market Place', type: true },
        ]
    },
    {
        question: '다음 상품 중 카테고리가 다른 상품은?',
        answer: [
            { text: 'Effective Log Search & Analytics', type: false },
            { text: 'Web Service Monitoring System', type: true },
            { text: 'Real User Analytics', type: false },
            { text: 'Cloud Hadoop', type: false },
        ]
    },
    {
        question: '다음 중 상품 신청을 위해 상품 이용 신청서를 작성해야 하는 상품을 고르시오 (복 수정답)',
        answer: [
            { text: 'Cloud Advisor', type: false },
            { text: 'Backup', type: true },
            { text: 'Security Monitoring', type: true },
            { text: 'Cloud loT Core', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서 CLI 를 사용하기 위한 방법으로 올바른 것은?',
        answer: [
            { text: '서버에 C 패키지가 이미 내장되어 있다.', type: false },
            { text: 'CLI 는 따로 제공되지 않는다.', type: false },
            { text: 'CLI 참조서에서 CLI 파일을 다운로드하여 서버에 설치한다.', type: true },
            { text: '고객센터를 통해 CLI 이용을 신청한다', type: false },
        ]
    },
    {
        question: 'MC(Main Console) Dashboard 에서 기본적으로 보여지는 내용이 아닌 것은?',
        answer: [
            { text: 'Daily Event', type: false },
            { text: '결제 정보', type: false },
            { text: 'CPU Top 5', type: false },
            { text: '내 서버 장애 내역', type: true },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서 제공하지 않는 상품은?',
        answer: [
            { text: 'Container Registry', type: false },
            { text: 'HPC', type: false },
            { text: 'Organization', type: false },
            { text: 'Teleporter', type: true },
        ]
    },
    {
        question: '고객의 기존 인프라 환경과 네이버 클라우드 플랫폼을 전용선을 이용하여 사설 네트워크로 연결하도록 해주는 상품은?',
        answer: [
            { text: 'Lease Line', type: false },
            { text: 'Direct Connect', type: false },
            { text: 'Active Connect', type: false },
            { text: 'Cloud Connect', type: true },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서 멀티존 기능이 제공되는 리전은?',
        answer: [
            { text: '독일', type: false },
            { text: '미국서부', type: false },
            { text: '싱가폴', type: false },
            { text: '한국', type: true },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼의 특징으로 올바른 것은? (복수정답)',
        answer: [
            { text: '24 시간 365 일 운영하는 고객센터를 보유', type: true },
            { text: '국내에 데이터센터를 1 개 보유', type: false },
            { text: '웹콘솔만 사용 가능', type: false },
            { text: '다양한 리전을 보유', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 쿠버네티스의 Ingress 에 대한 설명으로 틀린 것은?',
        answer: [
            { text: '외부에서 오는 Traffic 들을 클러스터 내부의 Service 로 라우팅하기 위한 규칙의 집합이다.', type: false },
            { text: 'Service 타입 지정은 Node port 혹은 로드밸런서 지정을 하여야 한다.', type: false },
            { text: 'NCR 은 호스트 기반 및 URL NICOND', type: false },
            { text: 'Ingress 에 대한 설정은 네이버 클라우드 플랫폼 콘솔에서 설정한다.', type: true },
        ]
    },
    {
        question: '유사 서버 생성시 기존 서버의 설정 내용이 반영되는 항목은?',
        answer: [
            { text: 'ACG 정보', type: false },
            { text: '추가 스토리지', type: false },
            { text: 'Init Script', type: true },
            { text: '모니터링 설정', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서 제공하는 Storage 상품이 아닌 것은? (복수 정답)',
        answer: [
            { text: 'NAS', type: false },
            { text: 'Block Storage', type: false },
            { text: 'SAN', type: true },
            { text: 'DAS', type: true },
        ]
    },
    {
        question: '유사 서버 생성시 기존 서버의 설정 내용이 반영되지 않는 항목은?',
        answer: [
            { text: 'VPC', type: false },
            { text: 'Init Script', type: false },
            { text: 'ACG', type: true },
            { text: '서버타입', type: false },
        ]
    },
    {
        question: '서버 상세보기에서 확인 가능한 내용은?',
        answer: [
            { text: '관리자 패스워드', type: false },
            { text: '설치된 모든 패키지', type: false },
            { text: '서버 사양(스펙)', type: true },
            { text: '네트워크 인터페이스 속도', type: false },
        ]
    },
    {
        question: 'Micro 서버타입에 대한 설명 중 잘못된 것을 고르시오.',
        answer: [
            { text: '서버의 사양은 2vCPU, 1G RAM, 5GB HDD 이다.', type: true },
            { text: 'Classic 환경에서만 이용이 가능하다.', type: false },
            { text: 'Windows OS 는 지원하지 않는다.', type: false },
            { text: '디스크 추가를 할 수 없다.', type: false },
        ]
    },
    {
        question: '파일시스템 중 네트웍으로 접근 가능한 파일시스템이 아닌 것은 무엇인가?',
        answer: [
            { text: 'NES', type: false },
            { text: 'Object Storage', type: false },
            { text: 'CIFS', type: false },
            { text: 'NTFS', type: true },
        ]
    },
    {
        question: '서버 상태값에 대한 설명이 옳지 않은 것을 고르시오.',
        answer: [
            { text: '생성중 - 서버 이미지로부터 서버를 생성하는 단계', type: false },
            { text: '부팅중 - 서버 생성이 완료되고 전원이 공급되어 부팅되는 단계', type: false },
            { text: '설정중 - 사용자가 서버 설정을 변경하여 변경된 내용이 반영되는 중', type: false },
            { text: '종료중 - 서버가 반납된 상태', type: true },
        ]
    },
    {
        question: '리눅스에서 HTTPD 서버의 로그파일 위치는 어디인가? (단, 패키지로 설치시)',
        answer: [
            { text: '/var/log/', type: false },
            { text: '/var/log/apache', type: false },
            { text: '/var/log/httpd', type: true },
            { text: '/var/www/httpd/log', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼 VPC 환경 기준, Zone 에 종속적인 상품이 아닌것을 고르시오',
        answer: [
            { text: 'Public Subnet', type: false },
            { text: 'Private Subnet', type: false },
            { text: 'Load Balancer', type: true },
            { text: 'NAT Gateway', type: false },
        ]
    },
    {
        question: '다음 중 리눅스 서버의 기본 OS 용량은?',
        answer: [
            { text: '50GB', type: true },
            { text: '100GB', type: false },
            { text: '150GB', type: false },
            { text: '200GB', type: false },
        ]
    },
    {
        question: '서로 다른 용량으로 구성된 디스크로 RAID 를 구성할 경우 디스크에서 제공되는 모든 용량을 사용하기 위해 구성 가능한 RAID 레벨은?',
        answer: [
            { text: 'RAID 0', type: true },
            { text: 'RAID 1', type: false },
            { text: 'RAID 5', type: false },
            { text: 'RAID 1+0', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼 NAS 상품 특징으로 옳은 것은?',
        answer: [
            { text: '용량은 최대 20TB 까지 생성 가능하다.', type: false },
            { text: '스냅샷 기능은 제공되지 않는다.', type: false },
            { text: '운영중 상태에서 용량 감소가 불가능하다.', type: true },
            { text: '운영중 상태에서 용량 증설이 가능하다.', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼의 오토스케일링에 대한 설명으로 옳은 것을 고르시오.',
        answer: [
            { text: '네이버 클라우드 플랫폼의 모든 서버 타입에 대해서 오토스케일링을 사용할 수 있다.', type: false },
            { text: '오토스케일링을 통해 스케일 아웃되는 VM 들은 네이버클라우드 플랫폼의 Load Balancer 상품과 연동할 수 있다.', type: true },
            { text: '오토스케일링에 스케일 인/아웃되는 이벤트에 대한 알람(SMS/Email) 기능을 제공하지 않는다.', type: false },
            { text: '내 서버 이미지를 오토 스케일링 베이스 이미지로 사용할 수 없다.', type: false },
        ]
    },
    {
        question: '김초록씨는 약 80TB 의 데이터를 온프레미스 환경에서 네이버 클라우드 플랫폼으로 옮겨야 한다. 다음 중 가장 빠르고 안전한 방법은?',
        answer: [
            { text: 'Archive Storage 상품을 사용한다.', type: false },
            { text: '인터넷을 통해 전송한다.', type: false },
            { text: 'Data Teleporter 상품을 사용한다.', type: true },
            { text: 'Backup 상품을 사용한다.', type: false },
        ]
    },
    {
        question: '다음 중 Kubernetes 에 대한 설명 중 잘못된 것을 모두 고르시오.',
        answer: [
            { text: '사용자는 Kubernetes 클러스터 내 Master 서버에 접근이 가능하다.', type: true },
            { text: 'Kubernetes Service 는 네이버 클라우드 플랫폼 NAS 와 연동이 가능하다.', type: false },
            { text: 'kubernetes service 는 public subnet 에 배치가 가능하다.', type: true },
            { text: 'Kubernetes Ingress 를 Application LoadBalancer 상품에 연동이 가능하다.', type: false },
        ]
    },
    {
        question: '스냅샷에 대한 설명으로 옳은 것은?',
        answer: [
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터의 서버를 만들 수 있다.', type: false },
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터와 추가 볼륨에 대한 이미지를 만들 수 있다.', type: false },
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터의 볼륨을 생성할 수 있다.', type: true },
            { text: '콘솔에서 제공하는 스케줄링 스냅샷 기능을 이용해서 Custom 주기로 스냅샷을 생성할 수 있다.', type: false },
        ]
    },
    {
        question: 'RAID 1(미러)에 대한 설명 중 맞는 것은?',
        answer: [
            { text: '단순볼륨에 비해 쓰기 속도가 뛰어나다.', type: false },
            { text: '단순볼륨에 비해 읽기 속도가 뛰어나다', type: true },
            { text: '저장공간의 손실이 없다.', type: false },
            { text: '패리티를 이용한 디스크 복구가 가능하다.', type: false },
        ]
    },
    {
        question: '다음 중 쿠버네티스의 Pod 에 대한 설명으로 틀린 것은?',
        answer: [
            { text: '쿠버네티스는 Container 를 직접 관리한다.', type: true },
            { text: '애플리케이션의 실행 단위이다.', type: false },
            { text: '하나의 Pod 에는 여러 개의 Container 가 구성될 수 있다.', type: false },
            { text: '쿠버네티스 객체 모델 중 만들고 배포할 수 있는 가장 작고 간단한 단위이다.', type: false },
        ]
    },
    {
        question: 'NAS 에 스냅샷 생성을 설정할 경우 가능하지 않은 생성 주기는 무엇인가?',
        answer: [
            { text: '매일 04:00', type: false },
            { text: '매주 일요일 08:00', type: false },
            { text: '매일 12:00', type: false },
            { text: '매월 1 일 00:00', type: true },
        ]
    },
    {
        question: 'NAS 스토리지를 생성할 때 최소 용량은 얼마인가?',
        answer: [
            { text: '100GB', type: false },
            { text: '500GB', type: true },
            { text: '1TB', type: false },
            { text: '5TB', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼 VPC 환경에서의 내서버이미지에 대한 설명으로 좋은 것을 고르시오.',
        answer: [
            { text: '내서버이미지를 이용해서 생성한 서버의 사설 IP 는 변하지 않는다.', type: false },
            { text: '내서버이미지 사용에 있어 과금은 발생하지 않는다.', type: false },
            { text: '내서버이미지는 생성한 리전 이외의 다른 리전으로 복제가 불가능하다.', type: false },
            { text: '내서버이미지는 서버가 운영중인 상태에서도 생성이 가능하다.', type: true },
        ]
    },
    {
        question: '네이버클라우드플랫폼 추가 스토리지에 대한 설명으로 적절하지 않는 것을 고르시오.',
        answer: [
            { text: 'HDD / SSD 두 가지 볼륨 타입을 제공한다.', type: false },
            { text: '추가 스토리지에 대한 detach 기능을 제공한다.', type: false },
            { text: '추가 스토리지 용량에 대한 업사이징(확대) 기능을 제공한다.', type: false },
            { text: '추가 스토리지 용량에 대한 다운사이징(축소) 기능도 제공한다.', type: true },
        ]
    },
    {
        question: '다음 중 컨테이너 기술에 대한 설명으로 올바른 것은?',
        answer: [
            { text: '자신이 올라가있는 서버에 있는 커널을 함께 공유한다.', type: true },
            { text: '효율적이지 못한 기술이다.', type: false },
            { text: '물리서버 위에서는 3 대만 운영이 가능하다.', type: false },
            { text: '가상서버 위에서는 1 대만 운영이 가능하다.', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼에서는 다양한 Media 상품을 제공합니다. 다음 중 제공되는 Media 상품이 아닌 것은?',
        answer: [
            { text: 'Video Player', type: false },
            { text: 'NAVER Player', type: true },
            { text: 'Image Optimizer', type: false },
            { text: 'VOD Station', type: false },
        ]
    },
    {
        question: '파일시스템중 파일의 시작위치와 크기를 가지고 데이터를 저장하는 방식으로 고전 적인 파일시스템 구조이며 단순하지만 데이터 공간에 대한 낭비가 심한 파일시스템 방식은 무엇인가?',
        answer: [
            { text: '연속 할당 방식', type: true },
            { text: '연결 할당 방식', type: false },
            { text: '색인 할당 방식', type: false },
            { text: '링크 연결 방식', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼 루트 볼륨에 대한 설명으로 적절하지 않은 것을 고르시오',
        answer: [
            { text: 'HDD / SSD 두 가지 볼륨 타입을 제공한다.', type: false },
            { text: '루트 볼륨에 대한 리사이징(다운사이징) 기능을 제공한다.', type: true },
            { text: '서버 OS 가 윈도우의 경우 100G 의 루트 볼륨을 선택할 수 있다.', type: false },
            { text: '서버 OS 가 리눅스일 경우 루트 볼륨은 50G 만 제공하고 있다.', type: false },
        ]
    },
    {
        question: 'SSD 스토리지의 크기가 400GB 일 때 보장되는 Max IOPS 는 얼마인가?',
        answer: [
            { text: '2000', type: false },
            { text: '8000', type: false },
            { text: '16000', type: true },
            { text: '20000', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼 서버에 할당된 추가 스토리지를 detach 할 수 있을 때는?',
        answer: [
            { text: '네이버 클라우드 플랫폼은 볼륨 detach 기능은 제공하고 있지 않다.', type: false },
            { text: '서버의 상태와 무관하게 추가 스토리지는 detach 할 수 있다.', type: false },
            { text: '서버가 “운영 중" 상태라도 서버 내부에서 마운트(mount)만 되지 않았다면 추가 스토리지는 detach 할 수 있다.', type: true },
            { text: '서버 상태가 “정지” 상태라면 추가 스토리지는 detach 할 수 없다.', type: false },
        ]
    },
    {
        question: 'Container Registry 상품에 대한 설명으로 틀린 것은?',
        answer: [
            { text: '도커 CLI 를 이용하여 조작할 수 있다.', type: false },
            { text: 'Public, Private Endpoint 가 제공된다.', type: false },
            { text: '컨테이너 취약점 분석 기능을 제공한다.', type: false },
            { text: '실제 Container 이미지는 Block Storage 에 보관한다.', type: true },
        ]
    },
    {
        question: '다음 중 다른 VM 으로부터의 간섭현상을 줄일 수 있는 서버 타입을 모두 고르시오',
        answer: [
            { text: 'High CPU', type: true },
            { text: 'VDS', type: false },
            { text: 'Bare metal', type: true },
            { text: 'High-memory', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 스냅샷 이미지에 대한 설명으로 옳은 것을 고르시오.',
        answer: [
            { text: '신규 서버를 생성할 수 있다.', type: false },
            { text: '신규 볼륨을 생성할 수 있다.', type: true },
            { text: '스냅샷 이미지는 사용에 있어 과금은 발생하지 않는다.', type: false },
            { text: '네이버 클라우드 플랫폼에서는 스냅샷 이미지를 export 하는 기능을 제공한다.', type: false },
        ]
    },
    {
        question: '도커 이미지를 바탕으로 컨테이너를 생성하기 위한 명령어는?',
        answer: [
            { text: 'Docker push', type: false },
            { text: 'Docker login', type: false },
            { text: 'Docker build', type: false },
            { text: 'Docker run', type: true },
        ]
    },
    {
        question: '리눅스 서버에 추가 스토리지가 10GB 였는데 이를 20GB 로 용량을 증설한 경우 기존 스토리지에 있는 데이터를 삭제하지 않고 볼륨을 확장하는 패키지는 무엇인가?',
        answer: [
            { text: 'LVM', type: false },
            { text: 'Spanned Volume', type: false },
            { text: 'fdisk', type: false },
            { text: 'growpart', type: true },
        ]
    },
    {
        question: '네이버클라우드플랫폼 VPC 환경의 서버에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
            { text: '서버 생성 시 반납 보호 설정으로 삭제를 방지할 수 있다.', type: false },
            { text: '서버 생성 시 선택한 서브넷 대역 안에서 원하는 사설 IP 를 선택할 수 있다.', type: false },
            { text: '서버 생성 시 한번에 다량의 서버를 만들 수 있다.', type: false },
            { text: '한 번 생성된 VM 의 ACG 그룹 변경은 불가능하다.', type: true },
        ]
    },
    {
        question: '다음 중 추가 스토리지에 대한 Detach 를 할 수 있는 서버의 상태는?',
        answer: [
            { text: '부팅중', type: false },
            { text: '운영중', type: false },
            { text: '정지', type: true },
            { text: '시작중', type: false },
        ]
    },
    //여기부터
    {
        question: '현재 네이버 클라우드 플랫폼의 리전으로 제공되지 않는 지역은?',
        answer: [
            { text: '미국 서부', type: false },
            { text: '미국 동부', type: true },
            { text: '홍콩', type: false },
            { text: '싱가폴', type: false },
        ]
    },
    {
        question: '대용량 데이터를 옮기고자 할 때 네트워크 전송이 아닌 이동식 스토리지를 이용하여 데이터를 이전하는 네이버 클라우드 플랫폼 상품은?',
        answer: [
            { text: 'Data Teleporter', type: true },
            { text: 'Data Migration', type: false },
            { text: 'Data Mover', type: false },
            { text: 'Data Transfer', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 서비스 중에 서버를 확장성 있게 구성하거나 관리할 필요 없이 비즈니스 로직 코드로 서비스를 구성할 수 있는 상품은?',
        answer: [
            { text: 'Lambda', type: false },
            { text: 'Cloud Functions', type: true },
            { text: 'Serverless', type: false },
            { text: 'ActiveCode', type: false },
        ]
    },
    {
        question: '현재 네이버 클라우드 플랫폼에서 멀티존을 제공하고 있는 리전은?',
        answer: [
            { text: '일본', type: false },
            { text: '한국', type: true },
            { text: '독일', type: false },
            { text: '홍콩', type: false },
        ]
    },
    {
        question: '다음 VPC 환경에서의 Kubernetes Service 상품에 대한 설명 중 틀린 것은?',
        answer: [
            { text: '클러스터 형태로 Kubernetes Service를 제공한다', type: false },
            { text: '최대 노드 생성개수는 20개이다.', type: true },
            { text: 'Private Subnet 에서만 생성 가능하다.', type: false },
            { text: 'Init Script 적용이 가능하다.', type: false },
        ]
    },
    {
        question: '다음 보기중 NAVER CLOUD PLATFORM NAS 상품에서 사용가능한 CLI 명령어를 모두 고르시오',
        answer: [
            { text: 'createNasVolumeInstance', type: true },
            { text: 'getNasVolumelnstanceList', type: true },
            { text: 'changeNasVolumeSize', type: true },
            { text: 'removeNasVolumeAccess Control', type: true },
        ]
    },
    {
        question: 'Object Storage API를 제공하는 리전이 아닌 것은?',
        answer: [
            { text: '미국 서부', type: false },
            { text: '싱가포르', type: false },
            { text: '독일', type: false },
            { text: '홍콩', type: true },
        ]
    },
    {
        question: 'VPC환경/Classic 2세대 서버의 Standard 서버 스펙 중 생성 가능한 서버 스펙은 무엇인가요?',
        answer: [
            { text: 'vCPU 2개, RAM 8GB', type: true },
            { text: 'vCPU 2개, RAM 4GB', type: false },
            { text: 'vCPU 2개, RAM 16GB', type: false },
            { text: 'vCPU 4개, RAM 4GB', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 오토 스케일링에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
            { text: '네이버 클라우드 플랫폼 CLI로 제어할 수 있다.', type: true },
            { text: '스케일 인 대상 VM에 대한 사용자 지정이 가능하다', type: true },
            { text: '기본적으로 오토스케일링을 이용하면 서버를 무한정 늘릴 수 있다.', type: false },
            { text: 'GPU, BareMetal 등 모든 타입의 서버 상품들은 오토스케일링 기능을 이용할 수 있다.', type: false },
        ]
    },
    {
        question: '서버 상세보기에서 확인 가능한 내용이 아닌 것을 고르시요.',
        answer: [
            { text: '서버 생성 일시', type: false },
            { text: '서버 OS', type: false },
            { text: '최근 종료일시', type: true },
            { text: '추가된 스토리지 정보', type: false },
        ]
    },
    {
        question: 'NAS 볼륨의 데이터를 스냅샷 이미지 A를 이용하여 복원했을 경우에 대한 설명으로 맞는 것을 고르시오.',
        answer: [
            { text: 'A 이후 생성된 스냅샷 이미지는 모두 삭제된다.', type: true },
            { text: 'A 이전 생성된 스냅샷 이미지는 모두 삭제된다.', type: false },
            { text: '모든 스냅샷 이미지가 삭제된다.', type: false },
            { text: '복원 즉시 삭제할 이미지 선택 팝업창이 뜬다.', type: false },
        ]
    },
    {
        question: '내 서버 이미지에 대한 설명중 잘못된 것을 고르시오.',
        answer: [
            { text: '내 서버 이미지는 Storage 메뉴에서 Storage 단위로 이미지를 생성한다.', type: true },
            { text: 'Classic 환경에서는 서버가 정지중인 상태에서만 생성가능하다.', type: false },
            { text: 'VPC 환경에서는 서버가 운영중인 상태에서도 생성가능하다.', type: false },
            { text: '기존 서버 스펙과 다른 서버 스펙으로 서버를 만들 수 있다.', type: false },
        ]
    },
    {
        question: '다음 중 VPC 환경을 기준으로 하였을 때, Zone에 종속적이지 않은 상품은??',
        answer: [
            { text: '서버', type: false },
            { text: '로드밸런서', type: true },
            { text: '서브넷', type: false },
            { text: 'NAT Gateway', type: false },
        ]
    },
    {
        question: '해외 사용자의 경우 도메인에 접속하는 IP를 보고 해당 국가에 인접한 리전의 서버로 접속시키고자 할 때 사용가능한 상품은?',
        answer: [
            { text: 'GCDN', type: false },
            { text: 'Global Route Manager', type: true },
            { text: 'GIS', type: false },
            { text: 'Load Balancer', type: false },
        ]
    },
    {
        question: 'Archive Storage에 대한 설명으로 맞는 것은?',
        answer: [
            { text: '자주 read가 일어나는 데이터 저장에 최적합한 스토리지이다.', type: false },
            { text: '데이터 최소 보관 기간은 90일로 설정되어 있다.', type: false },
            { text: 'Swift API를 활용해서 데이터 관리가 가능하다.', type: true },
            { text: 'Object Storage와의 연동을 통해 데이터에 대한 라이프 사이클 관리가 불가능하다.', type: false },
        ]
    },
    {
        question: '다음의 설명을 지칭하는 용어는? - “서비스로의 인프라를 의미하며 일반적으로 Computing, Networking, Storage IT 리소스를 서비스 형태로 사용하는 클라우드 컴퓨팅의 한 종류”',
        answer: [
            { text: 'PaaS', type: false },
            { text: 'IaaS', type: true },
            { text: 'SaaS', type: false },
            { text: 'FaaS', type: false },
        ]
    },
    {
        question: '서버 상품에 대한 설명 중 틀린 것은?',
        answer: [
            { text: 'Micro 타입의 서버는 이용이 불가능하다.', type: true },
            { text: 'Classic과 VPC 환경에 있는 서버들 간 사설망 통신을 불가능하다.', type: false },
            { text: '그래픽 카드 사용이 필요할 땐 GPU 서버를 이용하면 된다.', type: false },
            { text: '도커 이미지를 보관할 수 있는 상품으로 Container Bucket이 존재한다.', type: false },
        ]
    },
    {
        question: 'NAS 볼륨 스냅샷에 대한 설명으로 맞는 것을 모두 고르시오.',
        answer: [
            { text: 'NAS 볼륨 가용량 안에서 생성된다.', type: true },
            { text: '추가작업 없이 CDN+의 커스텀 오리진으로 사용할 수 있다.', type: false },
            { text: '볼륨 스냅샷에 대한 모니터링이 가능하다.', type: true },
            { text: '스냅샷을 이용해서 동일한 데이터의 NAS 볼륨을 추가 생성 가능하다.', type: false },
        ]
    },
    {
        question: 'NAS 볼륨에 대한 설명으로 적합한 것은?',
        answer: [
            { text: 'NAS 볼륨을 생성하면 NAS 전용 웹페이지 URL이 생성되며, 로그인할 수 있는 ID/PW가 생성된다.', type: false },
            { text: 'NAS 스냅샷 이미지는 용량, 기간 제한 없이 생성 가능하다.', type: false },
            { text: 'VM에 NAS를 마운트하기 위해서는 Private Subnet 생성 후 해당 VM(NAS 마운트 해야할 VM)에 추가 NIC를 등록해야한다.', type: false },
            { text: 'NAS 스냅샷은 NAS 볼륨 내 설정한 용량(%)만큼 생성되며, 초과 시 오래된 것부터 삭제처리된다.', type: true },
        ]
    },
    {
        question: 'Block Storage에 대한 설명으로 맞는 것은?',
        answer: [
            { text: '기본 스토리지(=root 볼륨)가 HDD 타입일 경우 추가 스토리지도 HDD만 할당 가능하다.', type: false },
            { text: '기본 스토리지(=root 볼륨)가 SSD 타입일 경우 추가 스토리지도 HDD만 할당 가능하다.', type: false },
            { text: '기본 스토리지(=root 볼륨)가 HDD 타입일 경우 추가 스토리지는 SSD만 할당 가능하다.', type: false },
            { text: '기본 스토리지(=root 볼륨)의 디스크 타입과 무관하게 추가 스토리지는 HDD/SSD 모든 타입 볼륨 할당 가능하다.', type: true },
        ]
    },
    {
        question: 'NAS 스토리지에 대한 설명 중 맞는 것은?',
        answer: [
            { text: 'NAS를 생성 시 기본적으로 스냅샷이 활성화된다.', type: false },
            { text: 'NAS 볼륨의 최대 용량은 10TB이다.', type: true },
            { text: 'NAS를 사용하기 위해서는 ACG에서 NAS와의 포트를 열어주어야한다.', type: false },
            { text: 'NAS 용량을 늘이거나 줄일 때의 단위는 50GB이다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 Init Script에 대한 설명을 옳은 것은?',
        answer: [
            { text: 'VM 생성 시 최초 1회 구동된다.', type: true },
            { text: '서버를 리부팅할 때마다 구동된다.', type: false },
            { text: '리눅스 계열 서버의 경우 nodejs 스크립트를 이용해서 작성할 수 있다.', type: false },
            { text: '윈도우 계열의 서버의 경우 PowerShell을 이용해서 작성할 수 있다.', type: false },
        ]
    },
    {
        question: 'Backup 상품에 대한 설명을 옳은 것은?',
        answer: [
            { text: '콘솔 [백업 신청하기] 메뉴를 통해서 신청해야한다.', type: false },
            { text: 'VM 내부 데이터에 대한 백업은 지원하지 않는다.', type: false },
            { text: 'VM 내부 database에 대한 백업은 지원하지 않는다.', type: false },
            { text: '백업 서비스를 이용하기 위해서는 NCP 콘솔에서 제공하는 별도의 양식을 작성한 후 고객센터에 인입해야한다.', type: true },
        ]
    },
    {
        question: '다음 보기 중 전가상화에 대한 설명으로 맞는 것을 고르시오.',
        answer: [
            { text: '하이퍼바이저 타입 2의 한 종류이다.', type: false },
            { text: '하이퍼콜이라는 특수 시스템 콜을 이용해서 VM을 관리하는 방식을 말한다.', type: false },
            { text: '하이퍼바이저 위 구동할 수 있는 게스트 OS종류에 대한 제약이 없다.', type: true },
            { text: '초기에는 리눅스 등 오픈소스 OS만 게스트 OS로 사용할 수 있었다.', type: false },
        ]
    },
    {
        question: '베어메탈 서버에 대한 설명중 잘못된 것을 고르시오.',
        answer: [
            { text: '디스크는 RAID 1+0, RAID 5 중 선택할 수 있다.', type: false },
            { text: '내 서버 이미지를 사용할 수 없다.', type: false },
            { text: 'Ubuntu OS는 제공하고 있지 않다.', type: false },
            { text: 'Windows 2012 OS가 제공되고 있다.', type: true },
        ]
    },
    {
        question: '서버이미지 빌더에 대한 설명중 잘못된 것을 고르시오.',
        answer: [
            { text: '내부적으로 Packer를 사용한다.', type: false },
            { text: '추가 스토리지를 붙여서 이미지를 생성할 수 있다.', type: false },
            { text: 'Script 버전 관리가 가능하다.', type: false },
            { text: '스크립트는 JavaScript 언어로 작성한다.', type: true },
        ]
    },
    {
        question: '네이버클라우드플랫폼의 추가 스토리지에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
            { text: '최소 10GB에서 최대 1TB까지 생성 가능하다.', type: false },
            { text: '최대 15개까지 추가할 수 있다.', type: true },
            { text: '생성된 스토리지는 용량 증설이 가능하다', type: true },
            { text: '스냅샷을 바탕으로 추가 스토리지 생성이 가능하다.', type: false },
        ]
    },
    {
        question: 'Block Storage에 대한 설명으로 맞는 것은?',
        answer: [
            { text: 'HDD 타입의 경우 1GB 당 30 MAX IOPS를 보장한다.', type: false },
            { text: 'HDD 타입의 경우 1GB 당 40 MAX IOPS를 보장한다.', type: false },
            { text: 'SSD 타입의 경우 1GB 당 30 MAX IOPS를 보장한다.', type: false },
            { text: 'SSD 타입의 경우 1GB 당 40 MAX IOPS를 보장한다.', type: true },
        ]
    },
    {
        question: '김초록은 네이버 클라우드 플랫폼 위에서 매일 밤 12시에 간단한 배치 작업을 돌려야한다. 가장 비용 효율적인 방법은?',
        answer: [
            { text: 'Standard 타입 서버를 생성하여 배치 작업을 돌린다.', type: false },
            { text: 'High CPU 타입 서버를 생성하여 배치 작업을 돌린다.', type: false },
            { text: 'Cloud Function를 이용하여 배치 작업을 돌린다.', type: true },
            { text: 'BareMetal 서버를 생성하여 배치 작업을 돌린다.', type: false },
        ]
    },
    {
        question: '스냅샷에 대한 설명으로 옳은 것은?',
        answer: [
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터의 서버를 만들 수 있다.', type: false },
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터와 추가 볼륨에 대한 이미지를 만들 수 있다.', type: false },
            { text: '스냅샷 기능을 이용해서 현재와 동일한 데이터의 볼륨을 생성할 수 있다.', type: true },
            { text: '콘솔에서 제공하는 스케쥴링 스냅샷 기능을 이용해서 Custom 주기로 스냅샷을 생성할 수 있다.', type: false },
        ]
    },
    {
        question: 'VPC/Classic 2세대 서버의 High Memory 서버 스펙 중 생성가능한 서버 스펙은 무엇인가?',
        answer: [
            { text: 'vCPU 4개, RAM 8GB', type: false },
            { text: 'vCPU 8개, RAM 8GB', type: false },
            { text: 'vCPU 2개, RAM 8GB', type: false },
            { text: 'vCPU 16개, RAM 128GB', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 서버 이미지 빌더에 대한 설명으로 틀린 것을 고르시오',
        answer: [
            { text: '서버 이미지 생성에 사용되는 Packer용 스크립트를 생성하고 관리하도록 도와주는 상품이다.', type: false },
            { text: '이미지 생성 시 추가 볼륨에 대한 스토리지 설정은 할 수 없다.', type: true },
            { text: '오픈소스인 Packer를 활용해서 구현한 것이다.', type: false },
            { text: '템플릿에 대한 버전 관리 기능을 제공한다.', type: false },
        ]
    },
    {
        question: 'Server Image Builder에서 이미지 생성 시 Provisioners를 작성하게 됩니다. Provisioners를 작성하는 포맷은 어떤 포맷으로 작성해야 하나요?',
        answer: [
            { text: 'CSV', type: false },
            { text: 'JSON', type: true },
            { text: 'XML', type: false },
            { text: 'HTML', type: false },
        ]
    },
    {
        question: 'Block Storage에 대한 설명으로 맞는 것은?',
        answer: [
            { text: '볼륨 detach는 아직 제공하지 않는다. (향후 지원 예정)', type: false },
            { text: '볼륨 detach는 기본 스토리지 (=root 볼륨)에 한해서 제공한다.', type: false },
            { text: '볼륨 detach 기능은 현재 API를 통해서만 제공한다.', type: false },
            { text: 'VM 상태에 따라 볼륨 detach가 불가능할 수 있다.', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 GPU 서버에 대한 설명으로 옳은 것을 고르시오.',
        answer: [
            { text: '서버 한 대에 최대 12장의 GPU 카드를 작성할 수 있다.', type: false },
            { text: 'GPU Core 단위로 할당 가능하다.', type: false },
            { text: 'PCI Pass Through 방식으로 제공한다.', type: true },
            { text: 'Telsa P100을 제공한다.', type: false },
        ]
    },
    {
        question: '서버에 대한 설명 중 잘못된 것을 고르시오.',
        answer: [
            { text: '다양한 스펙의 상품군이 존재한다.', type: false },
            { text: 'VDS는 홍콩에서 제공하고 있지 않다.', type: false },
            { text: 'Compact/Standard/High Memory 서버는 모든 리전에서 사용 가능하다.', type: true },
            { text: 'Micro 서버는 Classic 환경에서 사용이 가능하다.', type: false },
        ]
    },
    {
        question: '다음 서버 타입 중 Live Migration이 지원되지 않는 서버 타입은 무엇인지 고르시오.',
        answer: [
            { text: 'Standard', type: false },
            { text: 'High CPU', type: false },
            { text: 'High Memory', type: false },
            { text: 'BareMetal', type: true },
        ]
    },
    {
        question: 'RAID 1+0에 대한 설명 중 틀린것은?',
        answer: [
            { text: '최소 디스크가 2개 이상이어야 한다.', type: true },
            { text: 'RAID1으로 구성된 볼륨을 RAID으로 구성한다.', type: false },
            { text: '저장공간의 손실이 50%이다.', type: false },
            { text: '단순 볼륨에 비해 읽기, 쓰기 속도가 뛰어나다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼VPC 환경에서 제공되는 GPU 서버의 특징으로 틀린것은?',
        answer: [
            { text: 'NVIDIA T4, V100 이용이 가능하다.', type: false },
            { text: '서버 1대당 꽂을 수 있는 T4의 최대 개수는 2개이다.', type: false },
            { text: '서버 1대당 꽂을 수 있는 V100의 최대 개수는 4개이다.', type: false },
            { text: 'Grid 기술을 사용할 수 있다.', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 MC(Main console)에 대한 설명으로 잘못된 것은?',
        answer: [
            { text: '상품 별 상세 사용 가이드 문서를 제공한다.', type: false },
            { text: '모바일 콘솔은 제공하지 않는다.', type: true },
            { text: '사용 중인 상품 이용 내역을 확인할 수 있다.', type: false },
            { text: '자주 사용하는 상품을 고정할 수 있다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 NAT Gateway 서비스 설명 중 맞는 것은?',
        answer: [
            { text: '지정된 Peer IP 접속 시 비공인 IP를 호출하면 NAT되어 하나의 공인 IP로 통신', type: true },
            { text: '내부의 지정된 서버는 모든 통신이 NAT되어 하나의 공인 IP로 통신', type: false },
            { text: '지정된 Peer IP 접속 시 NAT되어 하나의 사설 IP 통신', type: false },
            { text: '내부의 서버를 Peer IP로 설정하여 하나의 공인 IP로 한정됨', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼의 특징으로 올바른 것은? (복수정답)',
        answer: [
            { text: '24시간 365일 운영하는 고객센터를 보유', type: true },
            { text: '국내에 데이터센터를 1개 보유', type: false },
            { text: '웹콘솔만 사용 가능', type: false },
            { text: '다양한 리전을 보유', type: true },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼에서 제공하지 않는 상품은?',
        answer: [
            { text: 'Container Registry', type: false },
            { text: 'HPC', type: false },
            { text: 'Organization', type: false },
            { text: 'Teleporter', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 쿠버네티스 워커 노드에 설치되지 않는 요소는 무엇인가?',
        answer: [
            { text: 'docker', type: false },
            { text: 'kubelet', type: false },
            { text: 'controller-manager', type: true },
            { text: 'kube-proxy', type: false },
        ]
    },
    {
        question: 'Object Storage가 일반적인 분산파일시스템과 다른점은 무엇인가?',
        answer: [
            { text: '저장 용량에 한계가 없다.', type: false },
            { text: '장애시에 복구가 가능하다.', type: false },
            { text: '다양한 접근 경로를 제공한다.', type: false },
            { text: '파일단위로 저장 및 복제한다.', type: true },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼 Kubernetes Service 상품에 대한 설명으로 틀린 것은?',
        answer: [
            { text: 'Container Registry 상품과 연동이 가능하다.', type: false },
            { text: 'VPC 플랫폼에서는 워커노드를 최대 50 대까지 생성 가능', type: false },
            { text: 'Classic 플랫폼에서는 워커노드를 최대 10대까지 생성 가능', type: false },
            { text: 'Master Node에 접근하기 위해서는 pem key가 필요하다.', type: true },
        ]
    },
    {
        question: '다음 중 파일시스템 중 파일의 시작위치와 크기를 가지고 데이터를 저장하는 방식으로 고전적인 파일시스템 구조이며 단순하지만 데이터 공간에 대한 낭비가 심한 파일시스템 방식은 무엇인가?',
        answer: [
            { text: '연속 할당 방식', type: true },
            { text: '연결 할당 방식', type: false },
            { text: '색인 할당 방식', type: false },
            { text: '링크 연결 방식', type: false },
        ]
    },
    {
        question: 'Archive Storage에 대한 설명으로 맞는 것은?',
        answer: [
            { text: '3rd party 툴 없이도 다수의 vm에 마운트하여 사용할 수 있다.', type: false },
            { text: '각 오브젝트 별 URL이 생성된다.', type: false },
            { text: 'AWS S3 API를 사용할 수 있다.', type: true },
            { text: '용량은 최대 40TB까지이며, 고객센터 문의를 통해 언제든 용량을 무한히 확장할 수 있다.', type: false },
        ]
    },
    {
        question: 'VPC 환경의 Standard 서버타입 중 지원하지 않는 서버 스펙은?',
        answer: [
            { text: '2vCPU 8G RAM', type: false },
            { text: '4vCPU 16G RAM', type: false },
            { text: '8vCPU 32G RAM', type: false },
            { text: '12vCPU 64G RAM', type: true },
        ]
    },
    {
        question: 'VPC 플랫폼상의 Kubernetes Service에서는 최대 몇 대의 워커노드 생성이 가능한 가?',
        answer: [
            { text: '10대', type: false },
            { text: '30대', type: false },
            { text: '50대', type: true },
            { text: '100대', type: false },
        ]
    },
    {
        question: 'API를 이용하여 Object Storage로 파일을 업로드하려 한다. 이 때 단일 파일의 최대 크기는 얼마인가?',
        answer: [
            { text: '1TB', type: false },
            { text: '2TB', type: false },
            { text: '5TB', type: false },
            { text: '10TB', type: true },
        ]
    },
    {
        question: 'Linux에서 추가 디스크 용량을 데이터 유실 없이 증설하고자 한다. 추가 디스크의 용량을 증설한 후 어떤 명령어를 사용하여야 하는가?',
        answer: [
            { text: 'fdisk', type: false },
            { text: 'growpart', type: true },
            { text: 'lvm', type: false },
            { text: 'mkdisk', type: false },
        ]
    },
    {
        question: 'Object Storage에 대한 설명으로 옳은 것은?',
        answer: [
            { text: 'OpenStack Swift API를 사용해 데이터를 관리할 수 있다.', type: false },
            { text: '데이터 저장 공간은 초기 40TB이며, 특정 양식을 통해 증설할 수 있다.', type: false },
            { text: '라이프사이클 기능을 통해서 일정 시간이 지난 데이터를 Archive Storage로 데이터 이관이 가능하다.', type: true },
            { text: '콘솔을 이용해서 업로드 할 수 있는 최대 오브젝트 크기는 2G이다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼 VPC 플랫폼 서버 상품에 대한 내용으로 올바른 것을 모두 고르시오',
        answer: [
            { text: '서버에 추가 스토리지는 최대 15개까지 장착 가능하다.', type: true },
            { text: '서버에는 1개의 Network Interface만 장착 가능하다.', type: false },
            { text: '서버의 관리자 계정 패스워드를 알기 위해서는 pem key가 필요하다.', type: true },
            { text: '1개의 Network Interface에는 여러 IP를 부착할 수 없다.', type: false },
        ]
    },
    {
        question: '네이버클라우드 플랫폼 오토스케일링에 대한 설명으로 잘못된 것을 모두 고르시오.',
        answer: [
            { text: '헬스체크 방식은 LoadBalancer와 서버 방식을 제공한다.', type: false },
            { text: '오토스케일링 기능을 사용할 수 있는 서버 타입 군으로 Micro가 있다.', type: true },
            { text: 'Colddown 타입은 헬스체크를 진행하기 전 헬스체크의 유예기간을 지칭하는 말이다.', type: false },
            { text: 'ASG그룹에는 항상 최댓값 수 만큼의 서버가 유지된다.', type: true },
        ]
    },
    {
        question: 'Linux에서 LVM 구성을 하고자 한다. LVM 구성이 올바른 명령어 사용 순서는 무엇인가?',
        answer: [
            { text: 'pvcreate > fdisk > lvcreate > vgcreate', type: false },
            { text: 'lvcreate > vgcreate > pvcreate > fdisk', type: false },
            { text: 'fdisk > pvcreate > vgcreate > lvcreate', type: true },
            { text: 'pvcreate > lvcreate > fdisk > vgcreate', type: false },
        ]
    },
    {
        question: 'Container Registry 이용시 이미지를 업로드 하기 위한 docker 명령어는 무엇인가?',
        answer: [
            { text: 'docker upload', type: false },
            { text: 'docker put', type: false },
            { text: 'docker move', type: false },
            { text: 'docker push', type: true },
        ]
    },
    {
        question: '쿠버네티스 Service Type에서 가상 머신에 할당된 공인 혹은 사설 IP로 접근하기 위한 Service Type은 무엇인가?',
        answer: [
            { text: 'Cluster IP', type: false },
            { text: 'LoadBalancer', type: true },
            { text: 'NodePort', type: false },
            { text: 'ClusterPort', type: false },
        ]
    },
    {
        question: '내 서버 이미지를 통해 윈도우 서버를 새로 생성할 경우, OOO을 동작시켜 OOO를 변경해야 합니다. 각 OOO에 맞는 단어가 순차적으로 들어간 보기를 고르세요.',
        answer: [
            { text: 'sysprp, sid', type: false },
            { text: 'sysprep, uuid', type: true },
            { text: 'uuidgen, uuid', type: false },
            { text: 'uuidchg, uuid', type: false },
        ]
    },
    {
        question: '네이버클라우드플랫폼 서버에 대한 설명으로 잘못된 것을 고르시오.',
        answer: [
            { text: '인증키 분실 시 인증키 변경 기능을 제공한다.', type: false },
            { text: '공인IP는 서버 당 두 개까지 할당 가능하다.', type: true },
            { text: '리눅스 서버의 경우, 초기 접속 ID는 root이다.', type: false },
            { text: '서버 최초 접속 시 초기 패스워드는 인증키를 이용해서 확인할 수 있다.', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼에서 생성한 Linux 서버에서 기본 스토리지의 Device 명은 무엇인가?',
        answer: [
            { text: '/dev/hdd1', type: false },
            { text: '/dev/xvda', type: true },
            { text: '/dev/sda', type: false },
            { text: '/dev/xda', type: false },
        ]
    },
    {
        question: 'NAS 스냅샷의 최대 보관 기간은 얼마인가?',
        answer: [
            { text: '7일', type: true },
            { text: '15일', type: false },
            { text: '24일', type: false },
            { text: '30일', type: false },
        ]
    },
    {
        question: '다음 중 부팅 디스크가 HDD일 경우, 추가할 수 있는 block storage의 종류는?',
        answer: [
            { text: 'HDD만 가능', type: false },
            { text: 'SSD만 가능', type: false },
            { text: 'HDD, SSD 모두 가능', type: true },
            { text: 'NAS', type: false },
        ]
    },
    {
        question: 'NAS에 스냅샷 생성을 설정할 경우 시스템 기본 생성 주기는 무엇인가?',
        answer: [
            { text: '매일 00:00', type: true },
            { text: '매일 04:00', type: false },
            { text: '매일 12:00', type: false },
            { text: '매일 08:00', type: false },
        ]
    },
    {
        question: '다음 중 VPC 플랫폼 내 서버에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: '공인 IP를 통한 접속이 가능하다.', type: false },
            { text: 'SSL-VPN 서비스를 활용하여 서버 접속이 가능하다.', type: false },
            { text: '서버 접속용 공인 IP를 제공하여, 포트 포워딩 방식으로 접속이 가능하다.', type: true },
            { text: 'Cloud insight를 통한 상세 모니터링 설정이 가능하다.', type: false },
        ]
    },
    {
        question: '스냅샷에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
            { text: '스냅샷 이미지를 NCP 내 타 계정과 공유하여 사용할 수 있다.', type: false },
            { text: '스냅샷 이미지를 타 리전에 복사하여 사용할 수 있다.', type: true },
            { text: 'VPC 환경에서는 증분 스냅샷을 생성할 수 있다.', type: true },
            { text: '운영중인 서버에 마운트 된 볼륨도 스냅샷 생성이 가능하다.', type: false },
        ]
    },
    {
        question: 'NAS에 대한 설명으로 옳은 것을 모두 고르시오.',
        answer: [
            { text: 'NAS 마운트를 위해서는 서버 OS 별로 별도의 추가 패키지 설치가 필요할 수도 있다.', type: true },
            { text: 'NFS 프로토콜 NAS 마운트 할 때 최초 생성 시 할당된 ID/PW를 이용해서 로그인 해야한다.', type: true },
            { text: 'NFS 프로토콜 NAS 마운트 시 마운트할 서버에 대해 ACL 설정해줘야 한다.', type: false },
            { text: 'NAS CLI로도 접근 제어 설정이 가능하다.', type: false },
        ]
    },
    {
        question: '공인 IP에 대한 설명 중 틀린 것은?',
        answer: [
            { text: '서버 1대 당 1개의 공인 IP만 할당이 가능하다.', type: false },
            { text: '공인 IP는 실제 사용하지 않고 발급만 한 상태에선 요금이 부과되지 않는다.', type: true },
            { text: '외부 인터넷 통신을 필요로 할 때 사용한다.', type: false },
            { text: 'Public Subnet에 생성된 리소스에 부착할 수 있다.', type: false },
        ]
    },
    {
        question: 'NAS 볼륨 용량 증설 단위는?',
        answer: [
            { text: '50GB', type: false },
            { text: '100GB', type: true },
            { text: '150GB', type: false },
            { text: '200GB', type: false },
        ]
    },
    {
        question: '다음 중 네이버 클라우드 플랫폼 서버 상품에서 사용 불가능한 OS 항목은?',
        answer: [
            { text: 'CentOS', type: false },
            { text: 'Fedora', type: true },
            { text: 'Windows', type: false },
            { text: 'Ubuntu', type: false },
        ]
    },
    {
        question: '다음 중 리눅스에서 여러 개의 스토리지를 하나의 논리적인 볼륨 그룹으로 구성할 수 있는 것은?',
        answer: [
            { text: 'nfs-utils', type: false },
            { text: '동적디스크 할당', type: false },
            { text: 'LVM', type: true },
            { text: 'span volume', type: false },
        ]
    },
    {
        question: '다음 중 Container registry에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: 'Container registry private endpoint를 제공한다.', type: true },
            { text: 'Container registry는 object storage를 근간으로 한다.', type: false },
            { text: 'Container registry에 로그인하기 위해선 access key와 secret key에 대한 정보가 필요하다.', type: false },
            { text: 'Container registry는 컨테이너 이미지를 저장하고 관리하기 위한 서비스이다.', type: false },
        ]
    },
    {
        question: '다음 중 VPC 플랫폼에서 서버 생성과 관련하여 올바른 순서는? (1). Subnet 생성 (2). 서버 생성 (3). VPC 생성 (4). NACL 생성',
        answer: [
            { text: '(1)->(3)->(4)->(2)', type: false },
            { text: '(3)->(4)->(1)->(2)', type: false },
            { text: '(3)->(1)->(4)->(2)', type: true },
            { text: '(1)->(4)->(3)->(2)', type: false },
        ]
    },
    {
        question: 'Kubernetes에서 service 객체를 통해 만들어지는 로드밸런서 타입은?',
        answer: [
            { text: 'Network LB', type: true },
            { text: 'Application LB', type: false },
            { text: 'Classic LB', type: false },
            { text: 'Network Proxy LB', type: false },
        ]
    },
    {
        question: '다음 중 Kubernetes service에 대한 설명 중 맞는 것을 모두 고르시오',
        answer: [
            { text: 'Kubernetes service private subnet에만 배치가 가능하다', type: true },
            { text: 'Kubernetes service와 master node는 HA 구성이 되어 있다', type: false },
            { text: 'Kubernetes service 생성 시 설정한 worker node는 추가 생성이 불가능하다', type: false },
            { text: 'Kubernetes service가 생성되면 자동으로 Kubernetes service에 적용되는 acg가 생성된다.', type: true },
        ]
    },
    {
        question: '추가 디스크의 용량을 기존 10GB에서 20GB로 크기 변경을 하였습니다. 이 때 파티션 볼륨 할당 정보(10GB/20GB)를 확인 할 수 있는 Linux 명령어는 무엇인가요?',
        answer: [
            { text: 'df', type: false },
            { text: 'mkfs', type: false },
            { text: 'lsblk', type: true },
            { text: 'ls', type: false },
        ]
    },
    {
        question: '파일 시스템 중 네트워크로 접근 가능한 파일 시스템이 아닌 것은 무엇인가?',
        answer: [
            { text: 'NFS', type: false },
            { text: 'Object Storage', type: true },
            { text: 'CIFS', type: false },
            { text: 'NTFS', type: false },
        ]
    },
    {
        question: '1PB는 몇 GB 인가?',
        answer: [
            { text: '1000GB', type: false },
            { text: '1024GB', type: false },
            { text: '1000000GB', type: false },
            { text: '1048576GB', type: true },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼의 Container Registry에 대한 설명중 틀린 것은?',
        answer: [
            { text: 'Private EndPoint 구성이 가능하다.', type: false },
            { text: '도커 레지스트리 HTTPS API V3를 지원한다.', type: true },
            { text: 'Object Storage를 저장소로 사용한다.', type: false },
            { text: '컨테이너 취약점 분석 기능을 제공한다.', type: false },
        ]
    },
    {
        question: '여러 개의 하드디스크에 일부 중복된 데이터를 나눠서 저장하는 기술을 칭하는 단어로 옳은 것은?',
        answer: [
            { text: 'RAAD', type: false },
            { text: 'AIDE', type: false },
            { text: 'RAID', type: true },
            { text: 'AIDR', type: false },
        ]
    },
    {
        question: 'Container Registry 상품에 대한 설명으로 틀린 것은?',
        answer: [
            { text: '도커 CLI를 이용하여 조작할 수 있다.', type: false },
            { text: 'Public, Private Endpoint가 제공된다.', type: false },
            { text: '컨테이너 취약점 분석 기능을 제공한다.', type: false },
            { text: '실제 Container 이미지는 Block Storage에 보관된다.', type: true },
        ]
    },
    {
        question: '베어메탈 서버에 대한 설명 중 잘못된 것을 고르시오.',
        answer: [
            { text: '몇 가지 정해진 스펙 군에서 이용이 가능하다.', type: false },
            { text: '제공되는 OS로는 Oracle Linux가 있다.', type: false },
            { text: 'CPU 종류 및 코어수를 내가 원하는대로 커스터마이징 할 수 있다.', type: true },
            { text: '디스크 구성은 RAID 1+0 및 RAID 5로 할 수 있다.', type: false },
        ]
    },
    {
        question: '김초록씨는 클라우드 상에서 효과적으로 데이터를 저장하고자 한다. 자주 접근하는 데이터는 OOO에, 아카이빙 용도의 데이터는 OOO에 보관해야 한다. 각 OOO에 맞는 단어가 순차적으로 들어간 보기를 고르세요.',
        answer: [
            { text: 'Object Storage, Block Storage', type: false },
            { text: 'Archive Storage, Object Storage', type: false },
            { text: 'Object Storage, Archive Storage', type: true },
            { text: 'Archive Storage, NAS', type: false },
        ]
    },
    {
        question: 'File system의 데이터 저장 방식 중에서, 데이터 저장 공간의 비효율성이 존재하는 저장방식은?',
        answer: [
            { text: '링크방식', type: false },
            { text: '인덱스방식', type: false },
            { text: '연속할당방식', type: true },
            { text: '분산저장방식', type: false },
        ]
    },
    {
        question: 'Linux에서 NAS를 마운트 할 때 사용하는 옵션은 무엇인가?',
        answer: [
            { text: 'mount -t nas', type: false },
            { text: 'mount -t ext4', type: false },
            { text: 'mount -t nfs', type: true },
            { text: 'mount -t net', type: false },
        ]
    },
    {
        question: '다음 중 다른 VM으로 부터의 간섭현상을 줄일 수 있는 서버 타입을 모두 고르시오.',
        answer: [
            { text: 'High CPU', type: false },
            { text: 'VDS', type: true },
            { text: 'Bare-metal', type: true },
            { text: 'High-memory', type: false },
        ]
    },
    {
        question: '다음 중 컨테이너 기술에 대한 설명으로 올바른 것은?',
        answer: [
            { text: '자신이 올라가있는 서버에 있는 커널을 함께 공유한다.', type: true },
            { text: '효율적이지 못한 기술이다.', type: false },
            { text: '물리서버 위에서는 3대만 운영이 가능하다.', type: false },
            { text: '가상서버 위에서는 1대만 운영이 가능하다.', type: false },
        ]
    },
    {
        question: 'Kubernetes에서 정의하고 있는 가장 기본 단위는?',
        answer: [
            { text: 'Pod', type: true },
            { text: 'Deployment', type: false },
            { text: 'Ingress', type: false },
            { text: 'Service', type: false },
        ]
    },
    {
        question: '고객이 기존에 사용하던 오라클 라이센스를 BYOL 형태로 네이버클라우드플랫폼 서버로 이관하고자 한다. 이때 적합한 서버 타입은?',
        answer: [
            { text: 'High-memory server', type: false },
            { text: 'Standard server', type: false },
            { text: 'VDS', type: false },
            { text: 'Bare-metal', type: true },
        ]
    },
    {
        question: 'VPC 환경에서의 ACG에 대한 설명 중 잘못된 것을 고르시오.',
        answer: [
            { text: '지원되는 프로토콜을 TCP, UDP, ICMP이다.', type: false },
            { text: '최대 50개의 룰을 설정할 수 있다.', type: true },
            { text: 'Inbound, Outbound에 대해서 제어가 가능하다.', type: false },
            { text: '서버의 단일 네트워크 인터페이스 카드에는 최대 3개의 ACG를 적용할 수 있다', type: false },
        ]
    },
    {
        question: '네이버 클라우드 플랫폼에서 서버를 생성하면 기본 네트워크 링크의 속도는 어떻게 되는가?',
        answer: [
            { text: '1Gbps', type: true },
            { text: '100Mbps', type: false },
            { text: '500Mbps', type: false },
            { text: '10Gbps', type: false },
        ]
    },
    {
        question: '외부에서 네이버 클라우드 플랫폼 서버에 원격으로 접속할 수 있는 방법으로 잘못된 것을 고르시오.',
        answer: [
            { text: 'Classic 환경에서는 포트 포워딩 설정을 통해서 접속할 수 있다.', type: false },
            { text: '서버 생성 시 자동할당 되는 퍼블릭 도메인을 이용해서 접속할 수 있다.', type: true },
            { text: 'SSL VPN을 이용해서 접속할 수 있다.', type: false },
            { text: '공인 IP를 서버에 할당해서 접속할 수 있다.', type: false },
        ]
    }
]

export default ncp200;

