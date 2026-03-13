export const technologyContent = {
  seo: {
    title: 'Technology | 遠隔支援ロボット・機械腕開発',
    description:
      '石竹株式会社のロボティクス技術構成。LeRobot、ROS2、Jetson Nano、AWS IoT、YOLOv8、MoveIt2 を用いた遠隔支援ロボット開発の技術スタックを紹介します。',
    keywords: 'robotics stack, ROS2, Jetson Nano, AWS IoT, YOLOv8, MoveIt2, LeRobot',
  },
  hero: {
    eyebrow: 'Technology',
    title: 'ハード、ソフト、クラウドを分断しない <span>開発構成</span>。',
    lead:
      'このページでは、資料に記載されたロボット技術構成を整理しています。LeRobot / XLeRobot、ROS2、Jetson Nano、AWS IoT、センサー類、遠隔操作 UI を組み合わせ、遠隔支援ロボットを構成する考え方を見せるためのページです。',
    actions: [
      { label: 'Home に戻る', href: '/index.html', variant: 'secondary' },
      { label: '相談する', href: '/index.html#contact', variant: 'primary' },
    ],
    metrics: [
      { label: 'Perception', value: 'VSLAM / YOLOv8 / Realsense / LiDAR' },
      { label: 'Control', value: 'ROS2 nav2 / MoveIt2 / MCU' },
      { label: 'Cloud', value: 'IoT Core / Lambda / SageMaker / OTA' },
    ],
    blueprint: [
      { title: 'Perception Stack', body: '視覚、距離、姿勢情報を束ね、移動や把持に必要な認識を行う。' },
      { title: 'Planning Stack', body: '移動計画、姿勢制御、遠隔指示を一貫して扱う制御レイヤー。' },
      { title: 'Hardware Stack', body: '機械腕、台車、電源、センサーを用途に応じて組み合わせる。' },
      { title: 'Service Stack', body: 'ログ、認証、OTA、保守導線まで含めたクラウド連携。' },
    ],
    diagram: ['Sense', 'Plan', 'Act', 'Sync', 'Improve'],
  },
  systems: [
    {
      title: 'Edge Intelligence',
      body: 'Jetson Nano 上で認識・推論・制御を行い、ローカル制御を軸にしたロボット構成を目指します。',
      points: ['ROS2 ノードベースの構成', 'YOLOv8 / MoveIt2 / nav2 統合', 'Raspberry Pi / MCU と役割分担'],
    },
    {
      title: 'Cloud Robotics Operations',
      body: 'AWS IoT Core、MQTT、Lambda、DynamoDB、SageMaker を用いて、遠隔監視と改善ループを構成します。',
      points: ['稼働ログの可視化', 'OTA 配信', 'モデル再学習と保守支援'],
    },
    {
      title: 'Mobility + Manipulation',
      body: '4WD / Omniwheel 台車と機械腕、交換式エンドエフェクタを用途に応じて組み合わせます。',
      points: ['最大 800g クラスの作業想定', 'トレイ / ブラシ / モップ等の交換式ツール', '狭所移動と軽作業支援'],
    },
  ],
  stackGroups: [
    { title: 'Robot Edge', tags: ['Jetson Nano', 'ROS2', 'nav2', 'MoveIt2', 'YOLOv8', 'Greengrass'] },
    { title: 'Cloud', tags: ['AWS IoT Core', 'Lambda', 'API Gateway', 'S3', 'DynamoDB', 'SageMaker'] },
    { title: 'Interfaces', tags: ['WebRTC', 'React', 'Flutter', 'Alexa Skill', 'Web Dashboard'] },
    { title: 'Hardware', tags: ['Realsense', 'LiDAR', 'IMU', 'Servo', 'DC Motor', 'Li-ion Battery'] },
  ],
  safety: [
    {
      title: 'Low Torque Design',
      body: '資料では、低トルクモーターを用いて接触時の危険性を下げる考え方が示されています。',
    },
    {
      title: 'Physical Safety Limits',
      body: '短いアーム長、車輪式ベース、段差制限など、機構段階からアクセス範囲を制御する考え方です。',
    },
    {
      title: 'Operational Safety',
      body: '緊急停止、転倒検知、障害物回避、遠隔モニタリングを組み合わせて安全性を補強します。',
    },
  ],
}
