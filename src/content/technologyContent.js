export const technologyContent = {
  ja: {
    seo: {
      title: 'Technology | 遠隔支援ロボット・機械腕開発',
      description:
        '石竹株式会社のロボティクス技術構成。ClearBot、ROS2、Jetson Nano、AWS IoT、YOLOv8、MoveIt2 を用いた遠隔支援ロボット開発の技術スタックを紹介します。',
      keywords: 'robotics stack, ROS2, Jetson Nano, AWS IoT, YOLOv8, MoveIt2, ClearBot',
    },
    hero: {
      eyebrow: 'Technology',
      title: 'ハード、ソフト、クラウドを分断しない <span>開発構成</span>。',
      lead:
        'このページでは、資料に記載されたロボット技術構成を整理しています。ClearBot、ROS2、Jetson Nano、AWS IoT、センサー類、遠隔操作 UI を組み合わせ、遠隔支援ロボットを構成する考え方を見せるためのページです。',
      panel: {
        liveLabel: 'Tech Stack',
        statusLabel: 'Documented Components',
        overline: 'Architecture Reading',
        title: '構成要素を“使う技術”ではなく“機能するレイヤー”として読む。',
        body: '優れた技術ページに近づけるため、単なる名称列挙ではなく、認識・制御・運用のまとまりで再配置しています。',
      },
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
    systemSection: {
      eyebrow: 'System Layers',
      title: '価値に紐づく技術レイヤー。',
      body: '構成そのものではなく、何のための構成かが伝わるように、主要レイヤーごとに整理しています。',
    },
    systems: [
      { title: 'Edge Intelligence', body: 'Jetson Nano 上で認識・推論・制御を行い、ローカル制御を軸にしたロボット構成を目指します。', points: ['ROS2 ノードベースの構成', 'YOLOv8 / MoveIt2 / nav2 統合', 'Raspberry Pi / MCU と役割分担'] },
      { title: 'Cloud Robotics Operations', body: 'AWS IoT Core、MQTT、Lambda、DynamoDB、SageMaker を用いて、遠隔監視と改善ループを構成します。', points: ['稼働ログの可視化', 'OTA 配信', 'モデル再学習と保守支援'] },
      { title: 'Mobility + Manipulation', body: '4WD / Omniwheel 台車と機械腕、交換式エンドエフェクタを用途に応じて組み合わせます。', points: ['最大 800g クラスの作業想定', 'トレイ / ブラシ / モップ等の交換式ツール', '狭所移動と軽作業支援'] },
    ],
    stackSection: {
      eyebrow: 'Stack',
      title: '採用可能な技術スタック。',
      body: '資料に確認できる構成要素を、理解しやすいグループでまとめています。',
    },
    stackGroups: [
      { title: 'Robot Edge', tags: ['Jetson Nano', 'ROS2', 'nav2', 'MoveIt2', 'YOLOv8', 'Greengrass'] },
      { title: 'Cloud', tags: ['AWS IoT Core', 'Lambda', 'API Gateway', 'S3', 'DynamoDB', 'SageMaker'] },
      { title: 'Interfaces', tags: ['WebRTC', 'React', 'Flutter', 'Alexa Skill', 'Web Dashboard'] },
      { title: 'Hardware', tags: ['Realsense', 'LiDAR', 'IMU', 'Servo', 'DC Motor', 'Li-ion Battery'] },
    ],
    safetySection: {
      eyebrow: 'Safety',
      title: 'ハード設計から始める安全性。',
      body: '資料内の安全思想を、機構と運用の両面から読み替えています。',
    },
    safety: [
      { title: 'Low Torque Design', body: '資料では、低トルクモーターを用いて接触時の危険性を下げる考え方が示されています。' },
      { title: 'Physical Safety Limits', body: '短いアーム長、車輪式ベース、段差制限など、機構段階からアクセス範囲を制御する考え方です。' },
      { title: 'Operational Safety', body: '緊急停止、転倒検知、障害物回避、遠隔モニタリングを組み合わせて安全性を補強します。' },
    ],
  },
  en: {
    seo: {
      title: 'Technology | Remote Support Robotics',
      description:
        'The robotics architecture behind Ishitake remote support robotics, covering ClearBot, ROS2, Jetson Nano, AWS IoT, YOLOv8, and MoveIt2.',
      keywords: 'robotics stack, ROS2, Jetson Nano, AWS IoT, YOLOv8, MoveIt2, ClearBot',
    },
    hero: {
      eyebrow: 'Technology',
      title: 'A <span>development architecture</span> that does not split hardware, software, and cloud.',
      lead:
        'This page reorganizes the documented robotics stack into a more readable technical structure. It brings together ClearBot, ROS2, Jetson Nano, AWS IoT, sensors, and teleoperation interfaces to show how the remote robotics system is being framed.',
      panel: {
        liveLabel: 'Tech Stack',
        statusLabel: 'Documented Components',
        overline: 'Architecture Reading',
        title: 'Read the stack as working layers instead of isolated technologies.',
        body: 'The layout is inspired by stronger technology pages in the market: not just listing parts, but showing how perception, control, and operations connect.',
      },
      actions: [
        { label: 'Back to Home', href: '/index.html', variant: 'secondary' },
        { label: 'Get in Touch', href: '/index.html#contact', variant: 'primary' },
      ],
      metrics: [
        { label: 'Perception', value: 'VSLAM / YOLOv8 / Realsense / LiDAR' },
        { label: 'Control', value: 'ROS2 nav2 / MoveIt2 / MCU' },
        { label: 'Cloud', value: 'IoT Core / Lambda / SageMaker / OTA' },
      ],
      blueprint: [
        { title: 'Perception Stack', body: 'Combines visual, distance, and pose information for mobility and manipulation awareness.' },
        { title: 'Planning Stack', body: 'Handles motion planning, pose control, and remote commands in a single control layer.' },
        { title: 'Hardware Stack', body: 'Combines base, arm, power, and sensors according to the intended support task.' },
        { title: 'Service Stack', body: 'Covers logs, authentication, OTA updates, and maintenance-oriented cloud linkage.' },
      ],
      diagram: ['Sense', 'Plan', 'Act', 'Sync', 'Improve'],
    },
    systemSection: {
      eyebrow: 'System Layers',
      title: 'Technology layers tied to user value.',
      body: 'The goal here is not only to show components, but to clarify why each layer exists in the operating system.',
    },
    systems: [
      { title: 'Edge Intelligence', body: 'Jetson Nano is used for perception, inference, and control to keep the robot edge-centered.', points: ['ROS2 node-based composition', 'YOLOv8 / MoveIt2 / nav2 integration', 'Role split with Raspberry Pi / MCU'] },
      { title: 'Cloud Robotics Operations', body: 'AWS IoT Core, MQTT, Lambda, DynamoDB, and SageMaker are positioned as the cloud loop for remote monitoring and updates.', points: ['Runtime logging and visibility', 'OTA delivery', 'Model retraining and maintenance support'] },
      { title: 'Mobility + Manipulation', body: '4WD / omniwheel bases, robotic arms, and interchangeable tools are combined depending on use case.', points: ['Up to 800g class handling', 'Tray / brush / mop style tool exchange', 'Indoor mobility and light-duty support'] },
    ],
    stackSection: {
      eyebrow: 'Stack',
      title: 'Technologies currently represented in the materials.',
      body: 'The documented components are grouped to make the stack easier to read and discuss.',
    },
    stackGroups: [
      { title: 'Robot Edge', tags: ['Jetson Nano', 'ROS2', 'nav2', 'MoveIt2', 'YOLOv8', 'Greengrass'] },
      { title: 'Cloud', tags: ['AWS IoT Core', 'Lambda', 'API Gateway', 'S3', 'DynamoDB', 'SageMaker'] },
      { title: 'Interfaces', tags: ['WebRTC', 'React', 'Flutter', 'Alexa Skill', 'Web Dashboard'] },
      { title: 'Hardware', tags: ['Realsense', 'LiDAR', 'IMU', 'Servo', 'DC Motor', 'Li-ion Battery'] },
    ],
    safetySection: {
      eyebrow: 'Safety',
      title: 'Safety starts at the mechanical level.',
      body: 'The materials describe safety not only as control logic but also as something embedded in physical design.',
    },
    safety: [
      { title: 'Low Torque Design', body: 'The source materials describe a low-torque approach to reduce risk in the event of contact.' },
      { title: 'Physical Safety Limits', body: 'Shorter arm reach, wheeled base constraints, and level-difference limits are part of the physical safety logic.' },
      { title: 'Operational Safety', body: 'Emergency stop, fall detection, obstacle avoidance, and remote monitoring are layered on top of that physical base.' },
    ],
  },
}
