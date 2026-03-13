export const siteContent = {
  seo: {
    title: '遠隔支援ロボット・機械腕開発 | 石竹株式会社',
    description:
      '石竹株式会社の遠隔支援ロボット・機械腕開発事業。LeRobot、ROS2、Jetson Nano、AWS IoT を組み合わせ、移動台車、遠隔操作、機械腕、クラウド運用まで一気通貫で設計します。',
    keywords:
      '遠隔支援ロボット,機械腕開発,ロボット開発,ROS2,LeRobot,Jetson Nano,AWS IoT,石竹株式会社',
  },
  brand: {
    name: 'Remote Robotics',
    company: 'Ishitake Co., Ltd.',
  },
  nav: [
    { label: 'Solution', href: '#solution' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Process', href: '#process' },
  ],
  hero: {
    eyebrow: 'Remote Support Robotics / Robotic Arm Development',
    title: '遠隔支援ロボットと機械腕を、<span>現場で動く構成</span>まで設計する。',
    lead:
      '石竹株式会社は、LeRobot、ROS2、Jetson Nano、AWS IoT を基盤に、移動台車、機械腕、遠隔操作、クラウド運用を一体で設計・試作・改善します。家庭内支援から福祉施設向けソリューション、共同開発まで、実装前提で前に進めるロボティクス開発を提供します。',
    actions: [
      { label: '相談する', href: '#contact', variant: 'primary' },
      { label: '構成を見る', href: '#architecture', variant: 'secondary' },
    ],
    metrics: [
      { label: 'Core Stack', value: 'LeRobot / ROS2 / Jetson / AWS IoT' },
      { label: 'Arm Payload', value: '最大 800g クラス' },
      { label: 'Remote Control', value: 'WebRTC / ROS2 Bridge / Web UI' },
    ],
    blueprint: [
      {
        title: 'Edge Control',
        body: 'Jetson Nano / Raspberry Pi / MCU によるローカル推論、制御、センサ統合。',
      },
      {
        title: 'Remote Ops',
        body: 'WebRTC、Wi-Fi、ROS2 Bridge を用いた遠隔操作と状態表示。',
      },
      {
        title: 'Mobility + Arm',
        body: '小型モビリティ台車と多自由度アームを組み合わせた移動作業支援。',
      },
      {
        title: 'Cloud Loop',
        body: 'AWS IoT Core、Lambda、SageMaker によるログ収集、OTA、改善サイクル。',
      },
    ],
    diagram: ['User UI', 'Cloud', 'ROS2 Edge', 'Arm', 'Mobility'],
  },
  intro: {
    label: 'Why Now',
    title: '受託開発で培ったソフトウェア力を、ロボティクスの実装力へ。',
    body:
      '資料全体を通して見えた強みは、Java / AWS / AI の実務実績に、Jetson Nano、ROS2、VSLAM、3Dプリントを組み合わせてプロトタイプから運用改善までつなげられることです。このサイトでは、その技術蓄積を「遠隔支援ロボット・機械腕開発」という事業軸で再構成しています。',
  },
  solution: {
    eyebrow: 'Solution',
    title: '単体のロボットではなく、支援体験全体を設計します。',
    description:
      '移動、把持、遠隔操作、監視、更新、安全設計を分断せず、使える状態まで組み上げるのが私たちの役割です。',
    items: [
      {
        index: '01',
        title: '現場で使える形にまとまらない',
        body: 'ロボット単体、アプリ単体、クラウド単体で止まらず、連携する全体構成に落とし込みます。',
      },
      {
        index: '02',
        title: '低コストと実用性の両立が難しい',
        body: 'オープンソース基盤、汎用部材、3Dプリントを活用しながら、用途に応じた堅牢性を設計します。',
      },
      {
        index: '03',
        title: '遠隔運用や保守まで見据えられていない',
        body: 'AWS IoT と OTA 更新を前提に、導入後も改善できる仕組みを初期段階から組み込みます。',
      },
    ],
  },
  architecture: {
    eyebrow: 'Architecture',
    title: '遠隔支援ロボットの構成を、エッジからクラウドまで分解。',
    description:
      '資料では LeRobot / XLeRobot、ROS2、WebRTC、AWS IoT まで一貫した構成が確認できました。ここではそのまま、開発能力の見える化として再整理しています。',
    layers: [
      {
        tag: '01',
        title: 'User Interface',
        body: 'Web アプリ / スマホアプリ / 音声UI による遠隔操作、状態表示、モニタリング。',
      },
      {
        tag: '02',
        title: 'Cloud Control Plane',
        body: 'AWS IoT Core、Lambda、DynamoDB、S3、SageMaker、MQTT、OTA 更新。',
      },
      {
        tag: '03',
        title: 'Robot Edge',
        body: 'Jetson Nano、Greengrass、ROS2 nav2、YOLOv8、MoveIt2 による推論と行動計画。',
      },
      {
        tag: '04',
        title: 'Mobility & Manipulation',
        body: '4WD または Omniwheel 台車、多自由度アーム、交換式ツール、距離センサー、IMU、LiDAR。',
      },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: '開発できるのは、機能ではなく運用可能な能力です。',
    items: [
      {
        title: '移動と障害物回避',
        body: 'ROS2、SLAM、VSLAM、距離センサー、カメラ統合により、屋内の自律移動と安全停止を設計。',
      },
      {
        title: '機械腕とエンドエフェクタ',
        body: '最大 800g クラスの把持、トレイ、ブラシ、モップなど交換式ツールの構成検討と試作。',
      },
      {
        title: '遠隔操作 UI',
        body: 'WebRTC、Web UI、スマホ UI を通じた遠隔支援、モニタリング、指示入力フローを設計。',
      },
      {
        title: 'クラウド改善ループ',
        body: 'ログ収集、モデル再学習、OTA 配信、ダッシュボード化まで含めて継続運用を見据えます。',
      },
      {
        title: '日本環境への適応',
        body: '畳、障子、段差、室内レイアウトなど、日本の生活環境に合わせた移動条件を調整可能。',
      },
      {
        title: '安全設計',
        body: '低トルク、短アーム、緊急停止、転倒検知、物理制限など、ハード段階から安全性を確保。',
      },
    ],
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: '資料から見えた適用領域を、事業用途として再編集。',
    items: [
      {
        kicker: 'Home Support',
        title: '家庭内の遠隔支援',
        body: '物品移動、見守り、遠隔対話、軽作業支援など、生活補助を想定した構成。',
      },
      {
        kicker: 'Welfare / Care',
        title: '福祉施設・介護現場',
        body: '配膳補助、モニタリング、巡回、遠隔コミュニケーションなどへの展開を見据えます。',
      },
      {
        kicker: 'OEM / Co-Development',
        title: '共同開発・OEM 組み込み',
        body: '既存製品にロボットアーム、遠隔制御、センサ統合、クラウド監視を組み込む開発体制。',
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: '相談から試作、改善までの進め方。',
    items: [
      {
        phase: 'Phase 1',
        title: '要件整理',
        body: '想定環境、支援内容、必要な自由度、遠隔操作の粒度、安全条件を定義します。',
      },
      {
        phase: 'Phase 2',
        title: '構成設計',
        body: '台車、機械腕、センサー、Jetson、クラウド、UI を用途別に組み合わせて全体を設計します。',
      },
      {
        phase: 'Phase 3',
        title: '試作と検証',
        body: '3Dプリントや既存フレームワークを活かし、スピード重視で試作と挙動検証を回します。',
      },
      {
        phase: 'Phase 4',
        title: '遠隔運用と改善',
        body: 'ログ収集、モニタリング、OTA 更新、再学習によって導入後の改善ループを作ります。',
      },
    ],
  },
  foundation: {
    eyebrow: 'Engineering Base',
    title: '石竹株式会社の土台にあるのは、受託現場で積み上げた開発力です。',
    items: [
      {
        title: 'Software Foundation',
        body: 'Java / Spring Boot / AWS を軸にした業務システム、IoT、AI 開発実績。',
      },
      {
        title: 'Robotics R&D',
        body: 'Jetson Nano、ROS2、VSLAM、センサ統合、3Dプリントによる迅速な試作開発。',
      },
      {
        title: 'Collaboration Model',
        body: '共同開発、試作支援、要件整理、OEM 連携まで、実装側として伴走可能。',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: '遠隔支援ロボットや機械腕の開発相談を受け付けています。',
    body:
      '新規構想段階でも、既存プロダクトへの組み込み検討でも対応可能です。まずは対象環境とやりたいことをご共有ください。',
    actions: [
      {
        label: '石竹株式会社へ問い合わせ',
        href: 'https://ishitakes.com/',
        variant: 'primary',
      },
      {
        label: 'LeRobot 参考基盤を見る',
        href: 'https://github.com/huggingface/lerobot',
        variant: 'secondary',
      },
    ],
  },
  footer: {
    note: 'Built for Ishitake remote support robotics and robotic arm development.',
  },
}
