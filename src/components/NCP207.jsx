import img1 from '../image/img-01.png'
import img2 from '../image/img-02.png'
import img3 from '../image/img-03.png'
import img4 from '../image/img-04.png'
import img5 from '../image/img-05.png'

const ncp207 = [
    {
        question: '동일한 Subnet에서 생성한 서버와 Cloud DB for MySQL을 연동해야 한다. 서버에서 데이터베이스 서버로 TCP/3306 포트를 통해 접근해야 하지만 통신이 되고 있지 않다. 다음 중 정상 통신을 위해 해야 하는 설정은?',
        answer: [
            { text: 'Cloud DB for MySQL의 ACG에 접근 소스를 서버 IP로 하여 3306 포트 허용 정책을 추가한다.', type: true },
            { text: '서버의 ACG에 접근 소스를 데이터베이스 도메인으로 하여 3306 포트 허용 정책을 추가한다.', type: false },
            { text: '두 개체가 포함된 Subnet에 매핑된 NACL에 접근 소스를 Subnet 대역으로 하여 3306 포트 허용 정책을 추가한다.', type: false },
            { text: '데이터베이스 서버에 접속하여 서버 방화벽을 해제한다.', type: false },
        ],
    },
    {
        question: '김초록씨가 운영중인 web001 서버의 OS 스토리지에 문제가 발생하였습니다. 중요한 데이터가 OS 스토리지에 위치하여 난감한 상황입니다. 데이터를 정상적으로 추출하기 위한 작업으로 올바른 순서는?'+
        '(1) web001 서버의 내 서버 이미지를 생성'+
        '(2) web001 서버의 OS 스토리지를 대상으로 스냅샷을 생성' +
        '(3) 스냅샷을 가지고 스토리지 생성' +
        '(4) 내 서버 이미지를 가지고 스토리지 생성' +
        '(5) web002 서버에 web001 OS 스토리지 부착' +
        '(6) uuid를 새롭게 생성하고 web001 OS 스토리지의 uuid를 변경' +
        '(7) web002 서버에 디렉터리를 하나 생성 후, web001 OS 스토리지를 마운트',
        answer: [
            { text: '(1)->(4)->(5)->(7)', type: false },
            { text: '(2)->(3)->(5)->(7)', type: true },
            { text: '(1)->(4)->(5)->(6)->(7)', type: false },
            { text: '(2)->(3)->(5)->(6)->(7)', type: false },
        ],
    },
    {
        question: '서버 생성시, Init Script를 적용하였으나 제대로 반영이 되지 않을 것 같은 경우 Init Script에 대한 로그를 확인할 수 있는 경로로 알맞은 것은? (리눅스 기준)',
        answer: [
            { text: '/var/log/ncloud.log', type: false },
            { text: '/var/log/ncloud/init.log', type: false },
            { text: '/var/log/ncloud/initscript.log', type: false },
            { text: '/var/log/ncloud-init.log', type: true },
        ],
    },

    {
        question: '여러 명의 사람들이 공통의 네이버 클라우드 플랫폼 인프라 환경을 이용하고 있다. 누군가 실수로 운영중인 서버를 반납하였다. 다음과 같은 사태를 막고자 할 때 사용할 수 있는 방법은?',
        answer: [
            { text: '중요 서버들은 서버 관리 및 설정 변경에서 반납 보호를 설정한다.', type: true },
            { text: '실수한 사람을 문책한다.', type: false },
            { text: '서버 이름에 반납 금지를 표기한다.', type: false },
            { text: 'Resource Manager에서 중요 서버를 설정한다.', type: false },
        ],
    },
    {
        question: '리눅스에서 현재 메모리 사용량을 확인할 수 있는 명령어가 아닌 것은?',
        answer: [
            { text: 'top', type: false },
            { text: 'meminfo', type: true },
            { text: 'sar', type: false },
            { text: 'free', type: false },
        ],
    },
    {
        question: '리눅스 서버를 운영 중 Too many open files 라는 에러가 발생하였습니다. 이 때 변경이 필요한 설정 파일은?',
        answer: [
            { text: 'syslog.conf', type: false },
            { text: 'mailx.conf', type: false },
            { text: 'sysctl.conf', type: true },
            { text: 'session.conf', type: false },
        ],
    },
    {
        question: '리눅스 서버를 사용하던 중 사용 중인 파일 리스트를 확인하고 싶어졌습니다. lsof 명령어를 통해 확인하고자 하는데, 옵션값에 대한 설명을 보고싶을 경우 사용할 수 있는 명령어는?',
        answer: [
            { text: 'lsof -P', type: false },
            { text: 'lsof -n', type: false },
            { text: 'lsof -w', type: false },
            { text: 'lsof -h', type: true },
        ],
    },
    {
        question: '다음 명령어 중 성격이 다른 3 개와 다른 명령어는 무엇인가요?',
        answer: [
            { text: 'sar', type: false },
            { text: 'ps', type: false },
            { text: 'top', type: false },
            { text: 'tcpdump', type: true },
        ],
    },
    {
        question: '김초록씨는 회사에서 SSH Tool을 통해 VPC 플랫폼에 생성된 서버에 접속하려 하나 접속이 잘 되고 있지 않습니다. 김초록씨에게 해줄 수 있는 조언으로 올바르지 않은 것은?',
        answer: [
            { text: 'ACG에 Rule이 하나도 없네요. 허용 정책을 넣어주세요!', type: false },
            { text: 'NACL에 전체 대역 거부정책이 우선순위 1로 들어가있네요! 허용 정책을 우선순위 2로 넣어주세요!', type: false },
            { text: '서버에 방화벽이 올라와있진 않은지 서버 접속 콘솔 기능을 통해 확인해보세요!', type: true },
            { text: '서버에 공인 IP가 부착되어있나요?', type: false },
        ],
    },
    {
        question: '네이버 클라우드 플랫폼 Load Balancer의 헬스체크에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: '헬스체크 주기는 Classic 환경에서는 6 초 간격이며, VPC 환경에서는 디폴트 30 초이다.', type: false },
            { text: '5 번 응답이 없는 경우 Unbind 한다.', type: true },
            { text: 'Unbind 됐던 서버가 헬스체크 응답이 3 번 성공하면 Bind 한다.', type: false },
            { text: 'VPC 환경에서는 헬스체크 주기를 Target Group에서 변경할 수 있다.', type: false },
        ],
    },
    {
        question: 'VPC 플랫폼에서 Application Load Balancer를 이용중입니다. ALB에 들어오는 액세스 로그 정보를 수집하고자 할 때 가장 올바른 액션은?',
        answer: [
            { text: 'Load Balancer에서 액세스 로그 수집 설정을 활성화한다', type: true },
            { text: '서버에서 Application Load Balancer 로그를 수집하도록 설정을 변경한다', type: false },
            { text: 'ALB의 액세스 로그는 수집이 불가능하다', type: false },
            { text: 'Target Group에서 액세스 로그 수집 설정을 활성화한다', type: false },
        ],
    },
    {
        question: 'HTTP 상태 코드 중 연결이 잘못된 것은?',
        answer: [
            { text: '200 - 서버가 요청을 제대로 처리', type: false },
            { text: '300 - 서버가 GET 요청의 일부만 성공적으로 처리했다.', type: true },
            { text: '404 – 서버가 요청한 페이지(Resource)를 찾을 수 없다.', type: false },
            { text: '500 – 서버에 오류가 발생하여 요청을 수행할 수 없다.', type: false },
        ],
    },
    {
        question: '김초록씨는 네이버 클라우드 플랫폼 VPC 플랫폼에서 두 개의 VPC를 생성하여 사용 중입니다. 이 때 두 개의 VPC 간 통신을 가능케 하기 위해선 어떤 상품을 이용해야 하나요? (복수정답)',
        answer: [
            { text: 'VPC Peering', type: true },
            { text: 'NAT Gateway', type: false },
            { text: 'Route Table', type: false },
            { text: 'Virtual Private Gateway', type: true },
        ],
    },
    {
        question: '김초록씨는 네이버 클라우드 플랫폼 NAS 상품을 이용 중입니다. 데이터 유지를 위해 자동으로 매일 오후 2시에 Snapshot을 찍고 있습니다. 현재 시작은 오후 8시입니다. 다음 중 복구가 가능한 일자는? (복수정답)',
        answer: [
            { text: '당일 snapshot 내역', type: true },
            { text: '3일전 snapshot 내역', type: true },
            { text: '7일전 snapshot 내역', type: false },
            { text: '10일전 snapshot 내역', type: false },
        ],
    },
    {
        question: '다음 중 성격이 다른 서비스는?',
        answer: [
            { text: 'sftp', type: false },
            { text: 'samba', type: false },
            { text: 'nfs', type: false },
            { text: 'gopher', type: true },
        ],
    },
    {
        question: '네이버 클라우드 플랫폼의 DNS에서 레코드 값을 바꾸었으나 반영이 되지 않는다면 어떤 설정을 의심해야 하는가?',
        answer: [
            { text: '레코드 타입', type: false },
            { text: 'TTL', type: true },
            { text: '레코드값', type: false },
            { text: '레코드명', type: false },
        ],
    },
    {
        question: 'Linux 서버에서 사용자 계정에서 root 계정으로 변경하고자 할 때 사용하는 명령어는 무엇인가요?',
        answer: [
            { text: 'sudo', type: false },
            { text: 'su - root', type: true },
            { text: 'chroot', type: false },
            { text: 'sudo - root', type: false },
        ],
    },
    {
        question: 'VPC 플랫폼을 사용중입니다. 사내 네트워크에서 네이버 클라우드 플랫폼 인프라에 구축한 서버로 ping이 가지 않습니다. 이 때 정책적으로 살펴보아야 하는 요소에는 어떤 것들이 있습니까? (복수정답)',
        answer: [
            { text: 'Server Image', type: false },
            { text: 'Storage', type: false },
            { text: 'ACG', type: true },
            { text: 'NACL', type: true },
        ],
    },
    {
        question: '아파치 웹서버 성능 측정 툴인 ab의 여러 옵션들 중 프록시 서버를 사용해 요청할 수 있는 옵션은?',
        answer: [
            { text: 'n', type: false },
            { text: 'X', type: true },
            { text: 'g', type: false },
            { text: 't', type: false },
        ],
    },
    {
        question: 'OS 영역의 스토리지를 스냅샷을 통해 새로운 스토리지로 생성하여 스토리지에 할당했을 경우 발생할 수 있는 현상은? (리눅스 서버일 경우)',
        answer: [
            { text: '아무 문제 없다', type: false },
            { text: 'OS 영역의 스토리지에 대해서는 스냅샷 생성이 불가능하다', type: false },
            { text: 'Linux(CentOS, Ubuntu) 서버가 추가 스토리지를 부팅용 스토리지로 오인하는 현상이 발생한다', type: true },
            { text: 'OS 영역의 스토리지에 대한 스냅샷 생성은 가능하다, 해당 스냅샷을 기반으로 한 스토리지 생성이 불가능하다', type: false },
        ],
    },
    {
        question: '김초록씨는 네이버 클라우드 플랫폼에서 여러 대의 SSD 서버를 운영중입니다. 상부에서 서버 운영 비용을 절감할 수 있는 대안을 제시하라는 지시가 내려왔습니다. 이 때 성능이 저하되어서는 안됩니다. 가장 올바른 방법은 무엇인가요?',
        answer: [
            { text: '사용하고 있는 스토리지 종류를 HDD로 변경한다', type: false },
            { text: 'Auto Scaling을 통해 트래픽에 따라 서버가 자동으로 증감하도록 구조를 변경한다', type: true },
            { text: '운영중인 서버 스펙을 한 단계 낮춘다', type: false },
            { text: '서버를 몇 대 지워 눈속임한다', type: false },
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
        question: 'CentOS 6.x 이상에서는 스토리지 식별을 무엇으로 하나요?',
        answer: [
            { text: '라벨', type: false },
            { text: 'UUID', type: true },
            { text: '파티션 번호', type: false },
            { text: '드라이브명', type: false },
        ],
    },
    {
        question: '리눅스에서 "su root" 명령어와 "su - root" 명령어의 차이점에 대해 올바른 설명은?',
        answer: [
            { text: '차이 없음', type: false },
            { text: 'SU - 명령어는 root 계정의 환경변수를 그대로 가져오지만 su root는 기존 계정의 환경변수를 사용한다.', type: true },
            { text: 'su 명령어는 sudo로 실행 가능한 명령어만 실행 가능하다.', type: false },
            { text: 'su 명령어로 계정을 변경하게 되면 exit 시 로그아웃하게 된다.', type: false },
        ],
    },
    {
        question: 'Linux에서 볼륨의 UUID를 확인하는 명령어는 무엇인가요?',
        answer: [
            { text: 'uuid', type: false },
            { text: 'lsuuid', type: false },
            { text: 'blkid', type: true },
            { text: 'df', type: false },
        ],
    },
    {
        question: '그림과 같이 PS 명령어 실행 시 STAT 필드에 대한 설명 중 잘못된 것은?',
        img : img1,
        answer: [
            { text: 'R: running or runnable', type: false },
            { text: 'Z: defunct (“zombie”) process', type: false },
            { text: 'W: paging', type: false },
            { text: 'S: stopped, ether by a job control signal or because it is being traced', type: true },
        ],
    },
    {
        question: '다수의 클라이언트에서 서버의 공인 IP로 접속하면 잘 보이지만 L7 헬스체크가 적용된 LB로 접속하면 접속이 되지 않고 LB에서 보면 서버 연결상태가 실패로 나온다. 원인으로 추정할 만한 것은 무엇인가?',
        img : img2,
        answer: [
            { text: 'ACG', type: true },
            { text: 'index.html', type: false },
            { text: 'DNS', type: false },
            { text: 'virtualhost', type: false },
        ],
    },
    {
        question: 'Linux 서버에서 시스템 부팅 메시지를 저장하는 로그파일은 무엇인가요?',
        answer: [
            { text: '/var/log/dmesg', type: true },
            { text: '/var/log/wtmp', type: false },
            { text: '/var/log/access', type: false },
            { text: '/var/log/secure', type: false },
        ],
    },
    {
        question: 'Linux 서버에서 일반적인 시스템 로그를 저장하는 로그파일은 무엇인가요?',
        answer: [
            { text: '/var/log/messages', type: true },
            { text: '/var/log/wtmp', type: false },
            { text: '/var/log/dmesg', type: false },
            { text: '/var/log/secure', type: false },
        ],
    },
    {
        question: '김초록씨는 Sub Account 상품을 통해 여러사람들과 같은 인프라 환경을 운영중입니다. 상부에서 사용되지 않는 리소스는 없는지 조사하라는 지시가 내려왔습니다. 가장 적절한 액션으로 올바른 것은?',
        answer: [
            { text: '힘을 합쳐 여럿이서 모든 상품 탭을 눌러 조사한다.', type: false },
            { text: 'Resource Manager 상품을 통해 사용하고 있는 전체 리소스를 확인한다.', type: false },
            { text: '리소스를 몇개 삭제하고 끝낸다.', type: false },
            { text: 'Cloud Advisor 상품을 통해 사용하고 있는 전체 리소스를 확인한다.', type: true },
        ],
    },
    {
        question: 'IPSEC VPN으로 연결된 Server A에서 Server T로 접속이 안되고 있다. VPN 설정은 정상이라면 Server A의 어떤 설정이 문제 일지 Server A의 라우팅 테이블을 보고 유추하시오.',
        img: img3,
        answer: [
            { text: 'Destination 설정이 잘못되었다. Destination을 0.0.0.0/0의 Gateway를 192.168.100.1로 변경하여야 한다.', type: false },
            { text: 'Gateway 설정이 잘못되었다. 192.168.100.0의 Gateway를 192.168.1.1로 변경하여야 한다.', type: true },
            { text: '인터페이스 설정이 잘못되었다. 192.168.100.0/24에 대해서는 eth0로 설정하여야 한다.', type: false },
            { text: 'Genmask가 잘못되었다. 192.168.100.0에 대해 0.0.0.0로 설정하여야 한다.', type: false },
        ],
    },
    {
        question: 'Windows Server를 이미지로 만든 다음 해당 이미지를 이용해서 서버를 생성하였을 때 다음과 같은 메세지가 출력되었다. 원인과 해결 방법은 무엇인가?',
        img: img4,
        answer: [
            { text: '파일시스템에 문제가 발생한 것으로 파일시스템 복구를 시도한다.', type: false },
            { text: 'SID 값이 중복되어 발생한 것으로 sysprep을 통해 새로운 SID로 변경한다.', type: true },
            { text: '동일한 컴퓨터 이름이 동일 네트웍상에 있어서 발생한 것으로 컴퓨터 이름을 변경한다.', type: false },
            { text: '커널 오류로 재설치 하여야 한다.', type: false },
        ],
    },
    {
        question: 'Windows 클라이언트에서 DNS 캐시된 정보를 삭제하고자 할 때 사용하는 명령어는?',
        answer: [
            { text: 'mdc flush', type: false },
            { text: 'ndc flush', type: false },
            { text: 'ipconfig /flushdns', type: true },
            { text: 'netsh flushdns', type: false },
        ],
    },
    {
        question: '네이버 클라우드 플랫폼 리눅스 서버에 부착한 추가 스토리지의 용량이 점점 부족해지고 있습니다. 현재 할당된 용량은 500GB 이며, 500GB 를 추가로 부착하려 합니다. 다음 중 가장 올바른 액션은 무엇인가요?',
        answer: [
            { text: '추가 스토리지를 하나 더 장착하고, 기존 스토리지와 LVM 으로 볼륨을 묶읍니다.', type: false },
            { text: '서버에 스토리지가 부착된 상태에서 기존 부착된 스토리지 볼륨 용량을 1000GB 로 증설합니다.', type: false },
            { text: '서버에 스토리지를 탈착한 상태에서 기존 스토리지 볼륨 용량을 1000GB 로 증설합니다.', type: true },
            { text: '서버 스토리지는 한 번 생성된 이후 증설이 불가능합니다.', type: false },
        ],
    },
    {
        question: '리눅스에서 시스템 로그인 기록을 확인하는 명령어는?',
        answer: [
            { text: 'dmesg', type: false },
            { text: 'lastlogin', type: false },
            { text: 'last', type: true },
            { text: 'secure', type: false },
        ],
    },
    {
        question: 'MySQL 성능측정 도구가 아닌 것은?',
        answer: [
            { text: 'Percona TPCC', type: false },
            { text: 'workbench', type: true },
            { text: 'Apache Jmeter', type: false },
            { text: 'sysbench', type: false },
        ],
    },
    {
        question: '윈도우 서버에서 로그인한 내역을 확인하기 위한 위치로 올바른 것은?',
        answer: [
            { text: '이벤트 뷰어 > Windows 로그 > 보안', type: true },
            { text: '이벤트 뷰어 > Windows 로그 > 시스템', type: false },
            { text: '이벤트 뷰어 > Windows 로그 > Setup', type: false },
            { text: '이벤트 뷰어 > Windows 로그 > Forwarded Events', type: false },
        ],
    },
    {
        question: '다음 프로그램 중 성격이 다른 프로그램은?',
        answer: [
            { text: 'tcpdump', type: false },
            { text: 'network monitor', type: false },
            { text: 'nmap', type: true },
            { text: 'wireshark', type: false },
        ],
    },
    {
        question: 'VPC 플랫폼 환경에 있는 서버 장애 알람을 받기 위한 세팅이 필요합니다. 이 때 사용해야 하는 상품으로 가장 적절한 것은?',
        answer: [
            { text: 'Cloud Insight', type: true },
            { text: 'Cloud Search', type: false },
            { text: 'Cloud Detector', type: false },
            { text: 'Cloud Checker', type: false },
        ],
    },
    {
        question: 'Java 분산 서비스 및 시스템의 지속적인 성능 분석을 제공하며, 오류 발생 가능성에 대한 진단과 추적을 지원하는 플랫폼 서비스 상품의 이름은?',
        answer: [
            { text: 'Pinpoint', type: true },
            { text: 'API Gateway', type: false },
            { text: 'SENS', type: false },
            { text: 'WMS', type: false },
        ],
    },
    {
        question: 'Classic 플랫폼을 사용중입니다. SSL VPN 상품을 신청 후, 네이버 클라우드 플랫폼 서버에 접속을 시도 시 접속이 되지 않습니다. 어떤 부분을 확인해야 하나요?',
        answer: [
            { text: 'NACL', type: false },
            { text: 'ACG', type: true },
            { text: 'Subnet', type: false },
            { text: 'Public IP', type: false },
        ],
    },
    {
        question: '웹서비스 성능을 측정할 수 있는 툴로 적합하지 않는 것을 고르시오.',
        answer: [
            { text: 'nGrinder', type: false },
            { text: 'Percona TPCC', type: true },
            { text: 'ab', type: false },
            { text: 'Web service Monitoring system', type: false },
        ],
    },
    {
        question: '윈도우 서버의 Process Crash Memory Leak 패턴을 확인하는 디버그 도구는 무엇인가?',
        answer: [
            { text: 'Debug Diag', type: true },
            { text: 'PAL(Performance Analysis of Logs Tool)', type: false },
            { text: 'XPerf', type: false },
            { text: 'Message Analyzer', type: false },
        ],
    },
    {
        question: 'NCP 에 구성한 웹사이트의 지연이 발생하고 있는 상황에서 해당 원인을 파악하기 위해 사용 가능한 NCP 상품으로 적절한 것은?',
        answer: [
            { text: 'Web Service Monitoring System', type: true },
            { text: 'Cloud Log Analytics', type: false },
            { text: 'nGrinder', type: false },
            { text: 'Network Traffic Monitoring', type: false },
        ],
    },
    {
        question: '스냅샷 이미지를 이용해서 신규 생성한 볼륨을 현재 사용중인 서버에 Attach 한 후 서버를 리부팅하였으나, 정상적으로 리부팅이 되지 않는다. 어떤 이슈를 의심할 수 있는가?',
        answer: [
            { text: '해당 스냅샷 이미지는 sysprep 작업이 적용되지 않는 이미지 일 것이다.', type: false },
            { text: '스냅샷 이미지를 이용해 생성한 볼륨을 서버에 마운트 후 리부팅을 했었어야 한다.', type: false },
            { text: '스냅샷 이미지를 이용해 생성한 볼륨이 다른 서버의 부팅 볼륨일 것이며, uuid 중복으로 정상부팅되지 않는 것이다.', type: true },
            { text: '스냅샷 이미지를 이용해서 신규 볼륨 생성 시 선택한 볼륨 타입이 현재 사용중인 서버에 Attach 할 수 없는 볼륨이다.', type: false },
        ],
    },
    {
        question: 'SAR로 물리적 디스크에서 발생한 I/O를 확인하고자 한다. 이 때 사용할 수 있는 옵션은 무엇인가?',
        answer: [
            { text: 'sar -a', type: false },
            { text: 'sar -b', type: true },
            { text: 'sar -c', type: false },
            { text: 'sar -f', type: false },
        ],
    },
    {
        question: 'Windows환경에서 다음의 ping 명령어의 옵션을 어떤 의미인가?\nping -n -5 -I 2 www.naver.com',
        answer: [
            { text: '5byte를 2초마다 전송', type: false },
            { text: '2초의 간격으로 5번 전송', type: false },
            { text: 'TTL값을 2로하여 5번 전송', type: true },
            { text: '5byte를 2번 전송', type: false },
        ],
    },
    {
        question: '프로세스가 오픈한 파일을 확인하는 명령어는?',
        answer: [
            { text: 'ps', type: false },
            { text: 'psof', type: false },
            { text: 'top', type: false },
            { text: 'lsof', type: true },
        ],
    },
    {
        question: '네이버 클라우드 플랫폼 Classic 환경에 존재하는 서버의 10.x.x.x 사설 IP대역 NIC에 두 개 이상의 IP를 부여하였을 때 발생할 수 있는 상황은?',
        answer: [
            { text: '기존 IP로는 통신이 되나 추가된 IP로 통신이 되지 않는다.', type: false },
            { text: '추가된 IP뿐만 아니라 기존 IP도 통신이 되지 않는다.', type: true },
            { text: '서버가 강제 정지된다.', type: false },
            { text: '기존 IP는 통신이 안되고 추가된 IP로만 통신이 된다.', type: false },
        ],
    },
    {
        question: 'Windows에서 라우팅 테이블을 확인 할 수 있는 명령어는 무엇인가?',
        answer: [
            { text: 'route -arn', type: false },
            { text: 'route', type: false },
            { text: 'route print', type: true },
            { text: 'netstat', type: false },
        ],
    },
    {
        question: 'CPU, Memory, DISK I/O 사용량 등 시스템 전반에 걸친 시스템 성능지표를 수집, 레포트하고 저장하는 명령어는?',
        answer: [
            { text: 'nmap', type: false },
            { text: 'vmstat', type: false },
            { text: 'sar', type: true },
            { text: 'iostat', type: false },
        ],
    },
    {
        question: 'Linux서버에서 iptables로 정책이 설정되어 있다. 설정된 정책을 삭제하기 위한 적절한 명령어는?',
        answer: [
            { text: 'iptables -A', type: false },
            { text: 'iptables -F', type: true },
            { text: 'iptables -G', type: false },
            { text: 'iptables -W', type: false },
        ],
    },
    {
        question: '일반적으로 DNS 쿼리에 대해 캐싱을 하여 이후 쿼리에 대해 빠르게 응답할 수 있도록 로컬호스트에도 DNS 캐싱을 하게 되는데 DNS 캐싱을 하기 때문에 DNS가 변경된 경우에 잘못된 목적지를 찾아가게 되는 경우가 있다. 때문에 DNS캐시를 Flush하여야 하는데 Windows 서버에서 DNS를 Flush하기 위한 명령어는 무엇인가?',
        answer: [
            { text: 'network restart', type: false },
            { text: 'ipconfig / flushdns', type: true },
            { text: 'dns-clean', type: false },
            { text: 'mdc restart', type: false },
        ],
    },
    {
        question: '네이버클라우드 플랫폼에서 제공되는 웹 성능 측정 도구는 무엇인가?',
        answer: [
            { text: 'AB', type: false },
            { text: 'ngrinder', type: true },
            { text: 'topaz', type: false },
            { text: 'loadrunner', type: false },
        ],
    },
    {
        question: '도메인에 맵핑된 IP를 확인할 수 있는 명령어를 고르시오.',
        answer: [
            { text: 'whois', type: false },
            { text: 'nslookup', type: true },
            { text: 'ipconfig', type: false },
            { text: 'who', type: false },
        ],
    },
    {
        question: 'syslogd에 대한 설명으로 틀린 것은?',
        answer: [
            { text: '로그를 수집하는 데몬', type: false },
            { text: 'UDP 프로토콜의 514 번 포트를 사용한다.', type: false },
            { text: '클라이언트는 클라이언트 프로그램을 이용하여야 한다.', type: true },
            { text: '기본적으로 /var/log/messages 에 로그를 기록한다.', type: false },
        ],
    },
    {
        question: 'SSH에서 root 원격 접속을 막고자 할 때 사용하는 옵션은?',
        answer: [
            { text: 'AllowRootLogin NO', type: false },
            { text: 'DenyRootLogin YES', type: false },
            { text: 'PermitRootLogin YES', type: false },
            { text: 'PermitRootLogin NO', type: true },
        ],
    },
    {
        question: '다음 명령어 중 목적이 다른 하나는?',
        answer: [
            { text: 'top', type: false },
            { text: 'ps', type: false },
            { text: 'sar', type: false },
            { text: 'proc', type: true },
        ],
    },
    {
        question: 'Linux 서버에서 iptables로 정책이 설정되어 있다. 어떤 정책이 설정되어 있는지 확인하고자 하는 경우 적합한 명령어는 무엇인가?',
        answer: [
            { text: 'iptables -A', type: false },
            { text: 'iptables -T', type: false },
            { text: 'iptables -L', type: true },
            { text: 'iptables -N', type: false },
        ],
    },
    {
        question: '서버의 CPU가 100%를 사용하면서 서비스가 정상적이지 못하다. 어떤 파일이 100%를 사용하는지 확인하기 위한 리눅스 명령어는 무엇인가?',
        answer: [
            { text: 'ls', type: false },
            { text: 'top', type: true },
            { text: 'proc', type: false },
            { text: 'lsof', type: false },
        ],
    },
    {
        question: '리눅스 서버를 운영중에 동접이 2000 정도에서 더 이상 새로운 접속을 맺을 수 없는 현상을 발견하였다. 어느 부분을 의심하여야 할까?',
        answer: [
            { text: 'ACG', type: false },
            { text: '/etc/sysctl.conf 파일에서 최대 오픈 파일 수 확인', type: false },
            { text: '/etc/sysctl.conf 파일에서 최대 접속 가능 범위확인', type: false },
            { text: 'Apache의 MAX Client 확인', type: true },
        ],
    },
    {
        question: '현재 서버에 연결된 커넥션의 갯수를 확인할 수 있는 명령어는?',
        answer: [
            { text: 'netstat', type: true },
            { text: 'tcpdump', type: false },
            { text: 'ethtool', type: false },
            { text: 'route', type: false },
        ],
    },
    {
        question: '리눅스에서 네트워크 트래픽을 확인할 수 있는 명령어를 모두 고르시오.',
        answer: [
            { text: 'netstat -i', type: true },
            { text: 'ifconfig', type: true },
            { text: 'netconfig', type: false },
            { text: 'network', type: false },
        ],
    },
    {
        question: '리눅스 서버에서 서버의 자체 네트워크에 문제가 없는 것을 확인하려 합니다. 스스로에게 5 번 ping을 날리고자 할 때 올바른 명령어는?',
        answer: [
            { text: 'ping -n 5 localhost', type: false },
            { text: 'ping -c 5 localhost', type: true },
            { text: 'ping -I localhost', type: false },
            { text: 'ping -t 5 localhost', type: false },
        ],
    },
    {
        question: '기존 UUID에서 새로운 UUID로 변경하기 위한 명령어는 무엇인가요?',
        answer: [
            { text: 'update', type: false },
            { text: 'updateuuid', type: false },
            { text: 'tune2fs', type: true },
            { text: 'fdisk', type: false },
        ],
    },
    {
        question: 'Linux 서버에서 외부에서의 접근 시도에 대한 로그를 저장하는 로그파일은 무엇인가요?',
        answer: [
            { text: '/var/log/messages', type: false },
            { text: '/var/log/wtmp', type: false },
            { text: '/var/log/access', type: false },
            { text: '/var/log/secure', type: true },
        ],
    },
    {
        question: '새로운 UUID를 적용하기 위해 UUID를 생성해야 합니다. 새로운 UUID를 생성하기 위한 명령어는 무엇인가요?',
        answer: [
            { text: 'uuid', type: false },
            { text: 'blkid', type: false },
            { text: 'uuidgen', type: true },
            { text: 'makeuuid', type: false },
        ],
    },
    {
        question: '리눅스 서버에서 이전에 발생한 리소스 관련 로그를 확인하고자 합니다. 가능한 모든 정보를 확인하고자 할 경우, 다음 중 가장 올바른 명령어는?',
        answer: [
            { text: 'sar -I', type: false },
            { text: 'sar -a', type: false },
            { text: 'sar -A', type: true },
            { text: 'sar -L', type: false },
        ],
    },
    {
        question: 'www.ncloud.com은 Apache를 사용하고 있다. http://www.ncloud.com을 웹브라우저에서 접근하면 index.php를 기본적으로 보여주고자 할 때 어느부분을 변경하여야 할까?',
        answer: [
            { text: 'DocumentRoot', type: false },
            { text: 'Include', type: false },
            { text: 'AccessConfig', type: false },
            { text: 'Directoryindex', type: true },
        ],
    },
    {
        question: 'nscd에 대한 설명으로 옳은 것은?',
        answer: [
            { text: '네임 서비스를 제공하기 위한 서버 데몬', type: false },
            { text: '네임 서비스를 이용하기 위한 클라이언트', type: false },
            { text: '네임 서비스를 캐싱하기 위한 데몬', type: true },
            { text: '네임 서비스를 분석하는 데몬', type: false },
        ],
    },
    {
        question: '리눅스와 윈도우 서버간 NAS 스토리지를 공유하기 위한 방법은?',
        answer: [
            { text: 'NAS AGL에 윈도우 서버 추가', type: false },
            { text: 'Samba를 설치하여 리눅스 서버와 윈도우 서버간 NAS가 공유될 수 있도록 설정', type: true },
            { text: '네이버 클라우드 플랫폼의 리눅스 서버와 윈도우 서버간 NAS 스토리지는 공유 불가능하다.', type: false },
            { text: 'NAS 스토리지 생성시, 윈도우 서버와 리눅스 서버간 공유가 가능한 옵션을 선택해준다.', type: false },
        ],
    },
    {
        question: '동일한 VPC 내의 각기 다른 ACG와 NIC가 매핑되어 있는 서버 두 대가 동작하고 있습니다. 두 서버 간 ping이 가능하게 하기 위해 해야하는 작업은?',
        answer: [
            { text: '각 ACG에 ICMP 프로토콜 허용 rule 추가', type: true },
            { text: '각 ACG에 TCP 프로토콜 허용 rule 추가', type: false },
            { text: '각 ACG에 UDP 프로토콜 허용 rule 추가', type: false },
            { text: '각 ACG에 IGMP 프로토콜 허용 rule 추가', type: false },
        ],
    },
    {
        question: 'SSL VPN에 접속하여 Management Console을 이용하여 서버를 새로 생성하고 생성된 서버는 기존에 SSL VPN 접속이 가능한 ACG에 속하도록하여 생성했는데 새로 생성한 서버만 접근이 되지 않는다. 원인과 해결 방법은 무엇인가?',
        answer: [
            { text: 'SSL VPN 캐시 문제로 SSL VPN을 재접속한다.', type: false },
            { text: '웹브라우저 캐시 문제로 웹 브라우저를 재시작한다', type: false },
            { text: 'SSL VPN 라우팅 문제로 SSL VPN을 재접속 한다.', type: false },
            { text: 'ACG에서 SSL VPN 대역이 포함되어 있지 않아서 발생한 문제로 ACG에 SSL VPN 대역을 추가한다.', type: true },
        ],
    },
    {
        question: 'Live Station 상품을 이용하여 주기적으로 실시간 방송을 운영중입니다. 송출에 문제는 없는지 확인하려 합니다. 이 때 가장 올바른 방법은?',
        answer: [
            { text: '매번 실시간으로 모니터링 한다.', type: false },
            { text: 'Notification Setting에서 송출 실패 에러 알람을 설정하고, 담당자에게 SMS/Email을 발송하도록 한다.', type: true },
            { text: 'Live Management 상품을 이용하여 모니터링 한다.', type: false },
            { text: 'Cloud Search에서 송출 실패 에러 알람을 설정하고, 담당자에게 SMS/Email을 발송하도록 한다.', type: false },
        ],
    },
    {
        question: '로그에 대하여 정해진 처리방식으로 삭제하거나 파일을 바꿔줌으로써, 시스템 성능을 높이는 역할을 수행하는 것은?',
        answer: [
            { text: 'logtemp', type: false },
            { text: 'logarchive', type: false },
            { text: 'logrefresh', type: false },
            { text: 'logrotate', type: true },
        ],
    },
    {
        question: '리눅스 OS에서 일반적인 시스템 로그는 어느 경로에 저장되는가?',
        answer: [
            { text: '/log', type: false },
            { text: '/var/log', type: true },
            { text: '/sys/log', type: false },
            { text: '/var/log/httpd', type: false },
        ],
    },
    {
        question: '다음 중 NMAP에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: '포트 스캔용 툴이다.', type: false },
            { text: '오픈되어 있는 포트에 대해 스캔을 수행한다.', type: false },
            { text: '방화벽으로 보호되는 호스트에 대해서는 스캔이 불가능하다.', type: true },
            { text: '리눅스 버전과 윈도우 버전이 제공된다.', type: false },
        ],
    },
    {
        question: 'Cloud DB for MySQL 운영 중에 문제가 발생하여 에러 로그를 확인해보고자 한다. Cloud DB for MySQL의 로그를 확인해 볼 수 있는 방법을 모두 고르시오',
        answer: [
            { text: 'CLA에서 Cdb_mysql_error 로그 확인', type: true },
            { text: 'Cloud DB for MySQL > Monitoring > DB Log에서 확인', type: true },
            { text: 'Cloud Insight 서비스에서 error log 확인', type: false },
            { text: 'Cloud Resource Manager에서 error log 확인', type: false },
        ],
    },
    {
        question: 'Classic 플랫폼에서 서버 상품을 이용중입니다. 서버에 IP를 하나 더 부여해야 하는 상황이 되었습니다. 이 때 올바른 사용방법은 무엇인가요?',
        answer: [
            { text: 'Private Subnet을 생성한 후 Network Interface를 부착한다', type: false },
            { text: 'Network Interface를 단독 생성하여 부착한다', type: false },
            { text: '기존 사용하던 Network Interface에 Secondary IP를 추가한다', type: true },
            { text: '서버 IP를 추가 부여하는 것이 불가능하다', type: false },
        ],
    },
    {
        question: '김초록씨는 Cloud DB for MySQL 상품을 이용중입니다. 상부에서 고가용성 테스트를 지시하였습니다. 이 때 김초록씨가 해야하는 액션으로 가장 적절한 것은 무엇인가요?',
        answer: [
            { text: 'Master 서버에 고의 장애를 발생시킨다', type: false },
            { text: 'Slave 서버에 고의 장애를 발생시킨다', type: false },
            { text: '할 수 있는 방법이 없다', type: false },
            { text: 'DB 관리에서 Master DB Fail Over 기능을 작동시킨다', type: true },
        ],
    },
    {
        question: '윈도우 서버에서 syslog 역할을 수행하는 것은?',
        answer: [
            { text: 'sar', type: false },
            { text: 'netmon', type: false },
            { text: 'event viewer', type: true },
            { text: '성능 모니터', type: false },
        ],
    },
    {
        question: 'Linux 서버의 SSH에서 root로의 접근을 막고자 할 때 변경해야 하는 설정내용은 무엇인가요?',
        answer: [
            { text: 'UsePAM', type: false },
            { text: 'PermitRootLogin', type: true },
            { text: 'ChrootDirectory', type: false },
            { text: 'PermitTunnel', type: false },
        ],
    },
    //확인 요망
    {
        question: '다음 중, Cloud DB for MS-SQL의 백업에 대한 설명 중 옳은 것은?',
        answer: [
            { text: 'DB 백업파일 보관기간은 최소 1일에서 최대 20일까지 선택할 수 있습니다', type: false },
            { text: 'DB 백업파일은 별도의 스토리지에 보관되며, 보관 비용은 Cloud DB for MS-SQL 사용 요금에 포함되어 있습니다.', type: false },
            { text: '백업 시간은 사용자 정의 선택시 15분 단위로 선택이 가능합니다.', type: false },
            { text: '백업 시간으로 자동을 선택하게 되면, 매번 임의의 시간에 백업이 진행됩니다.', type: true },
        ],
    },
    {
        question: 'Cloud Activity Tracer에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: 'Console 활동에 대한 로그만 수집이 가능하다', type: true },
            { text: 'Cloud Log Analytics와도 연계가되어 계정 활동 로그 수집 및 분석이 가능하다', type: false },
            { text: '메인 계정 뿐만 아니라 서브계정에 대한 활동 로그도 수집한다', type: false },
            { text: 'Cloud Activity Tracer 페이지 자체적으로 검색 및 필터링 기능을 제공한다', type: false },
        ],
    },
    {
        question: '다음 환경에서 ping 테스트를 진행하려 한다. 1번의 경우 서버 A에서 서버 C의 사설 IP PING을 시도하며, 2번의 경우 서버 A에서 서버 B의 사설 IP로 PING을 날리고자 한다. 각 순서대로 PING의 성공/실패 여부로 알맞은 보기를 고르시오.',
        img: img5,
        answer: [
            { text: '1:성공 / 2:성공', type: false },
            { text: '1:성공 / 2:실패', type: false },
            { text: '1:실패 / 2:실패', type: false },
            { text: '1:실패 / 2:성공', type: true },
        ],
    },
    {
        question: '네이버 클라우드 플랫폼 Load Balancer의 헬스체크에 대한 설명 중 잘못된 것은?',
        answer: [
            { text: 'VPC 환경에서는 헬스체크 간격이 디폴트 30초이지만, 수치 변경이 가능하다.', type: false },
            { text: 'VPC 환경에서는 정상 임계값이 3이며, 수정 불가능하다.', type: true },
            { text: '실패 임계값이 2 일 경우, 정상 상태의 Target이 2번 실패한다면 해당 Target을 부하분산 Target에서 제외한다.', type: false },
            { text: 'VPC 환경에서는 헬스체크 Target Group에서 변경할 수 있다', type: false },
        ],
    },
]

export default ncp207;