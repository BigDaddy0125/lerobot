export const homeContent = {
  seo: {
    title: '遠隔支援ロボット・機械腕開発 | 石竹株式会社',
    description:
      '石竹株式会社の遠隔支援ロボット・機械腕開発事業。LeRobot、ROS2、Jetson Nano、AWS IoT を組み合わせ、移動台車、遠隔操作、機械腕、クラウド運用まで一気通貫で設計します。',
    keywords:
      '遠隔支援ロボット,機械腕開発,ロボット開発,ROS2,LeRobot,Jetson Nano,AWS IoT,石竹株式会社',
  },
  hero: {
    eyebrow: 'Remote Support Robotics / Robotic Arm Development',
    title: '遠隔支援ロボットと機械腕を、<span>構成設計から試作</span>まで進める。',
    lead:
      '石竹株式会社は、LeRobot / XLeRobot、ROS2、Jetson Nano、AWS IoT を基盤に、移動台車、機械腕、遠隔操作、クラウド連携を組み合わせた遠隔支援ロボットの開発に取り組んでいます。家庭内支援や福祉施設向け展開を見据えた構成を、試作と検証を通じて具体化します。',
    actions: [
      { label: '相談する', href: '#contact', variant: 'primary' },
      { label: '技術を見る', href: '/technology.html', variant: 'secondary' },
    ],
    metrics: [
      { label: 'Core Stack', value: 'LeRobot / ROS2 / Jetson / AWS IoT' },
      { label: 'Arm Payload', value: '最大 800g クラス' },
      { label: 'Remote Control', value: 'WebRTC / ROS2 Bridge / Web UI' },
    ],
    blueprint: [
      {
        title: 'Edge Control',
        body: 'Jetson Nano や Raspberry Pi / MCU によるローカル制御、センサ統合、AI 推論。',
      },
      {
        title: 'Remote Ops',
        body: 'WebRTC、Wi-Fi、ROS2 Bridge を用いた遠隔操作と状態表示。',
      },
      {
        title: 'Mobility + Arm',
        body: '小型モビリティ台車と多自由度アームを組み合わせた遠隔支援構成。',
      },
      {
        title: 'Cloud Link',
        body: 'AWS IoT Core を中心としたログ可視化、遠隔更新、保守支援。',
      },
    ],
    diagram: ['User UI', 'Cloud', 'ROS2 Edge', 'Arm', 'Mobility'],
  },
  intro: {
    label: 'Why This Business',
    title: '受託開発で培った技術を、ロボティクス事業へ展開する。',
    body:
      '資料では、石竹株式会社が Java / AWS を軸にした SES・受託開発、AI 開発、IoT 開発を通じて技術基盤を築き、その延長線上で Jetson Nano、ROS2、VSLAM を用いたロボティクス研究開発へ取り組んできたことが確認できます。このサイトは、その流れを「遠隔支援ロボット・機械腕開発」という事業として整理したものです。',
  },
  solution: {
    eyebrow: 'Development Scope',
    title: 'ロボット単体ではなく、運用に必要な構成全体を扱います。',
    description:
      '資料に記載された技術要素をもとに、移動、把持、遠隔操作、監視、更新、安全設計を一体で構成します。',
    items: [
      {
        index: '01',
        title: '移動と作業を分けずに設計',
        body: '小型自走台車と機械腕を組み合わせ、家庭内や屋内での遠隔支援を想定した構成を検討します。',
      },
      {
        index: '02',
        title: 'オープンソース基盤を活用',
        body: 'LeRobot / XLeRobot を基盤にしながら、既存構成との互換性や試作速度を重視します。',
      },
      {
        index: '03',
        title: '遠隔運用まで含めて考える',
        body: 'AWS IoT、WebRTC、Web UI を組み合わせ、監視や更新を含む運用導線まで視野に入れます。',
      },
    ],
  },
  architecture: {
    eyebrow: 'Architecture',
    title: '遠隔支援ロボットの構成を、エッジからクラウドまで整理。',
    description:
      '資料で確認できた技術要素を、ユーザーUI、クラウド、ロボットエッジ、モビリティ・機械腕の四層で再整理しています。',
    layers: [
      { tag: '01', title: 'User Interface', body: 'Web アプリ / スマホアプリ / 音声UI による遠隔操作、状態表示、モニタリング。' },
      { tag: '02', title: 'Cloud Control Plane', body: 'AWS IoT Core、Lambda、DynamoDB、S3、SageMaker、MQTT、OTA 更新。' },
      { tag: '03', title: 'Robot Edge', body: 'Jetson Nano、Greengrass、ROS2 nav2、YOLOv8、MoveIt2 による認識と制御。' },
      { tag: '04', title: 'Mobility & Manipulation', body: '4WD または Omniwheel 台車、多自由度アーム、交換式ツール、距離センサー、IMU、LiDAR。' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: '資料に基づく開発対象。',
    items: [
      { title: '移動と障害物回避', body: 'ROS2、SLAM / VSLAM、距離センサー、カメラ統合により、屋内移動と安全停止を設計。' },
      { title: '機械腕とエンドエフェクタ', body: '最大 800g クラスの把持、トレイ、ブラシ、モップなど交換式ツールの構成検討と試作。' },
      { title: '遠隔操作 UI', body: 'WebRTC、Web UI、スマホ UI を通じた遠隔支援、モニタリング、状態表示。' },
      { title: 'クラウド連携', body: 'ログ収集、モデル再学習、OTA 配信、ダッシュボード化を含む運用設計。' },
      { title: '日本環境への適応', body: '畳、段差、室内レイアウトなど、日本の生活環境を前提にした移動条件の調整。' },
      { title: '安全設計', body: '低トルク、短アーム、緊急停止、転倒検知、物理制限などを組み合わせた安全対策。' },
    ],
  },
  showcase: {
    eyebrow: 'Documented Advantages',
    title: '資料から確認できた開発上の特徴。',
    items: [
      { title: 'Open Source Compatibility', body: 'LeRobot / XLeRobot を基盤に、既存コードや戦略を移植しやすい構成を目指す。', meta: 'Compatibility' },
      { title: 'Prototype Cost Awareness', body: '3Dプリント、汎用部材、モジュール設計を用いて試作コストを抑える方向性。', meta: 'Prototype' },
      { title: 'Remote Operations', body: '遠隔操作、状態表示、クラウド連携、OTA 更新を含む運用設計。', meta: 'Operations' },
      { title: 'Japan Environment Fit', body: '畳や段差など、日本の居住環境を前提にした移動・利用シーンへの対応。', meta: 'Environment' },
    ],
  },
  useCases: {
    eyebrow: 'Use Cases',
    title: '資料から見える適用先。',
    items: [
      { kicker: 'Home Support', title: '家庭内の遠隔支援', body: '物品移動、見守り、遠隔操作など、日常生活を支援する用途。' },
      { kicker: 'Welfare / Care', title: '福祉施設・介護現場', body: '配膳支援やモニタリングなど、施設向けソリューションへの展開。' },
      { kicker: 'OEM / Co-Development', title: '共同開発・OEM', body: '既存製品にロボットアーム、遠隔制御、センサ統合、クラウド監視を組み込む方向。' },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: '構想から試作までの進め方。',
    items: [
      { phase: 'Phase 1', title: '要件整理', body: '対象環境、支援内容、必要な自由度、遠隔操作の粒度、安全条件を整理。' },
      { phase: 'Phase 2', title: '構成設計', body: '台車、機械腕、センサー、Jetson、クラウド、UI を用途別に組み合わせて全体を設計。' },
      { phase: 'Phase 3', title: '試作と検証', body: '3Dプリントや既存フレームワークを活かし、試作と挙動検証を実施。' },
      { phase: 'Phase 4', title: '遠隔運用の検討', body: 'ログ収集、モニタリング、OTA 更新、保守導線まで含めた運用設計。' },
    ],
  },
  foundation: {
    eyebrow: 'Engineering Base',
    title: '石竹株式会社の開発基盤。',
    items: [
      { title: 'Software Foundation', body: 'Java / Spring Boot / AWS を軸にした業務システム、IoT、AI 開発実績。' },
      { title: 'Robotics R&D', body: 'Jetson Nano、ROS2、VSLAM、センサ統合、3Dプリントによる試作開発。' },
      { title: 'Collaboration Model', body: '共同開発、試作支援、要件整理、OEM 連携まで伴走可能な体制。' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: '遠隔支援ロボットや機械腕の開発相談を受け付けています。',
    body: '新規構想段階でも、既存プロダクトへの組み込み検討でも対応可能です。まずは対象環境とやりたいことをご共有ください。',
    actions: [
      { label: '石竹株式会社へ問い合わせ', href: 'https://ishitakes.com/', variant: 'primary' },
      { label: 'Company Page', href: '/company.html', variant: 'secondary' },
    ],
  },
}
