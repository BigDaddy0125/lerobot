export const homeContent = {
  ja: {
    seo: {
      title: '遠隔支援ロボット・機械腕開発 | 石竹株式会社',
      description:
        '石竹株式会社の遠隔支援ロボット・機械腕開発事業。ClearBot、ROS2、Jetson Nano、AWS IoT を組み合わせ、移動台車、遠隔操作、機械腕、クラウド運用まで設計します。',
      keywords:
        '遠隔支援ロボット,機械腕開発,ロボット開発,ROS2,ClearBot,Jetson Nano,AWS IoT,石竹株式会社',
    },
    hero: {
      eyebrow: 'Remote Support Robotics / Robotic Arm Development',
      title: '遠隔支援ロボットと機械腕を、<span>構成設計から試作</span>まで進める。',
      lead:
        '石竹株式会社は、ClearBot、ROS2、Jetson Nano、AWS IoT を基盤に、移動台車、機械腕、遠隔操作、クラウド連携を組み合わせた遠隔支援ロボットの開発に取り組んでいます。家庭内支援や福祉施設向け展開を見据えた構成を、試作と検証を通じて具体化します。',
      panel: {
        liveLabel: 'Source-Aligned',
        statusLabel: 'Prototype Planning',
        overline: 'System Overview',
        title: '移動、把持、遠隔操作、クラウド運用を一つの構成として扱う。',
        body: '資料に記載された技術要素をもとに、実際の運用に必要なレイヤーをまとめて設計するための開発サイトです。',
      },
      actions: [
        { label: '相談する', href: '#contact', variant: 'primary' },
        { label: '技術を見る', href: '/technology.html', variant: 'secondary' },
      ],
      metrics: [
        { label: 'Core Stack', value: 'ClearBot / ROS2 / Jetson / AWS IoT' },
        { label: 'Arm Payload', value: '最大 800g クラス' },
        { label: 'Remote Control', value: 'WebRTC / ROS2 Bridge / Web UI' },
      ],
      blueprint: [
        { title: 'Edge Control', body: 'Jetson Nano や Raspberry Pi / MCU によるローカル制御、センサ統合、AI 推論。' },
        { title: 'Remote Ops', body: 'WebRTC、Wi-Fi、ROS2 Bridge を用いた遠隔操作と状態表示。' },
        { title: 'Mobility + Arm', body: '小型モビリティ台車と多自由度アームを組み合わせた遠隔支援構成。' },
        { title: 'Cloud Link', body: 'AWS IoT Core を中心としたログ可視化、遠隔更新、保守支援。' },
      ],
      diagram: ['User UI', 'Cloud', 'ROS2 Edge', 'Arm', 'Mobility'],
    },
    intro: {
      label: 'Why This Business',
      title: '受託開発で培った技術を、ロボティクス事業へ展開する。',
      body:
        '資料では、石竹株式会社が Java / AWS を軸にした SES・受託開発、AI 開発、IoT 開発を通じて技術基盤を築き、その延長線上で Jetson Nano、ROS2、VSLAM を用いたロボティクス研究開発へ取り組んできたことが確認できます。',
    },
    solution: {
      eyebrow: 'Development Scope',
      title: 'ロボット単体ではなく、運用に必要な構成全体を扱います。',
      description: '移動、把持、遠隔操作、監視、更新、安全設計を一体で考える構成です。',
      items: [
        { index: '01', title: '移動と作業を分けずに設計', body: '小型自走台車と機械腕を組み合わせ、家庭内や屋内での遠隔支援を想定した構成を検討します。' },
        { index: '02', title: 'ClearBot を開発基盤に活用', body: 'ClearBot を基盤にしながら、既存構成との互換性や試作速度を重視します。' },
        { index: '03', title: '遠隔運用まで含めて考える', body: 'AWS IoT、WebRTC、Web UI を組み合わせ、監視や更新を含む運用導線まで視野に入れます。' },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: '遠隔支援ロボットの構成を、エッジからクラウドまで整理。',
      description: '資料で確認できた技術要素を、ユーザーUI、クラウド、ロボットエッジ、モビリティ・機械腕の四層で再整理しています。',
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
      description: 'ひとつの均一なカード群ではなく、主軸となる能力と周辺機能が見えるように再構成しています。',
      items: [
        { label: 'Core Focus', title: '移動・把持・遠隔操作を一つの体験にまとめる', body: '資料にある移動台車、機械腕、遠隔操作、クラウド連携を、個別要素ではなく運用構成としてつなげます。' },
        { label: 'Navigation', title: '移動と障害物回避', body: 'ROS2、SLAM / VSLAM、距離センサー、カメラ統合により、屋内移動と安全停止を設計。' },
        { label: 'Manipulation', title: '機械腕とエンドエフェクタ', body: '最大 800g クラスの把持、トレイ、ブラシ、モップなど交換式ツールの構成検討と試作。' },
        { label: 'Remote UI', title: '遠隔操作インターフェース', body: 'WebRTC、Web UI、スマホ UI を通じた遠隔支援、モニタリング、状態表示。' },
        { label: 'Operations', title: 'クラウド連携', body: 'ログ収集、モデル再学習、OTA 配信、ダッシュボード化を含む運用設計。' },
        { label: 'Safety', title: '安全設計', body: '低トルク、短アーム、緊急停止、転倒検知、物理制限などを組み合わせた安全対策。' },
      ],
    },
    showcase: {
      eyebrow: 'Documented Advantages',
      title: '資料から確認できた開発上の特徴。',
      items: [
        { title: 'ClearBot Compatibility', body: 'ClearBot を基盤に、既存コードや戦略を移植しやすい構成を目指す。', meta: 'Compatibility' },
        { title: 'Prototype Cost Awareness', body: '3Dプリント、汎用部材、モジュール設計を用いて試作コストを抑える方向性。', meta: 'Prototype' },
        { title: 'Remote Operations', body: '遠隔操作、状態表示、クラウド連携、OTA 更新を含む運用設計。', meta: 'Operations' },
        { title: 'Japan Environment Fit', body: '畳や段差など、日本の居住環境を前提にした移動・利用シーンへの対応。', meta: 'Environment' },
      ],
    },
    useCases: {
      eyebrow: 'Use Cases',
      title: '資料から見える適用先。',
      description: '用途の主従関係が見えるように、先頭ケースを大きく扱っています。',
      items: [
        { kicker: 'Home Support', title: '家庭内の遠隔支援', body: '物品移動、見守り、遠隔操作など、日常生活を支援する用途。' },
        { kicker: 'Welfare / Care', title: '福祉施設・介護現場', body: '配膳支援やモニタリングなど、施設向けソリューションへの展開。' },
        { kicker: 'OEM / Co-Development', title: '共同開発・OEM', body: '既存製品にロボットアーム、遠隔制御、センサ統合、クラウド監視を組み込む方向。' },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: '構想から試作までの進め方。',
      description: '相談、構成設計、試作、運用検討の順に段階化しています。',
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
      lead: 'Java / AWS を軸にした実務経験と、Jetson Nano、ROS2、VSLAM を用いたロボティクス研究開発を接続できることが、この事業の出発点です。',
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
      noteLabel: 'Scope',
      noteBody: '構想整理、技術検討、試作、共同開発まで段階に応じて相談できます。',
      actions: [
        { label: '石竹株式会社へ問い合わせ', href: 'https://ishitakes.com/', variant: 'primary' },
        { label: 'Company Page', href: '/company.html', variant: 'secondary' },
      ],
    },
  },
  en: {
    seo: {
      title: 'Remote Support Robotics & Robotic Arm Development | Ishitake',
      description:
        'Ishitake develops remote support robotics using ClearBot, ROS2, Jetson Nano, and AWS IoT, covering mobility, teleoperation, robotic arms, and cloud-linked operations.',
      keywords:
        'remote support robotics, robotic arm development, ROS2, ClearBot, Jetson Nano, AWS IoT, Ishitake',
    },
    hero: {
      eyebrow: 'Remote Support Robotics / Robotic Arm Development',
      title: 'From <span>system design to prototyping</span> for remote support robots and robotic arms.',
      lead:
        'Ishitake is developing remote support robotics by combining ClearBot, ROS2, Jetson Nano, AWS IoT, mobile bases, robotic arms, teleoperation, and cloud connectivity. The focus is on turning documented technical building blocks into validated prototype systems for home support and welfare-oriented use cases.',
      panel: {
        liveLabel: 'Source-Aligned',
        statusLabel: 'Prototype Planning',
        overline: 'System Overview',
        title: 'Mobility, manipulation, teleoperation, and cloud operations are handled as one system.',
        body: 'This site reorganizes the documented technical elements into a clearer development-facing structure rather than presenting robotics as isolated features.',
      },
      actions: [
        { label: 'Get in Touch', href: '#contact', variant: 'primary' },
        { label: 'View Technology', href: '/technology.html', variant: 'secondary' },
      ],
      metrics: [
        { label: 'Core Stack', value: 'ClearBot / ROS2 / Jetson / AWS IoT' },
        { label: 'Arm Payload', value: 'Up to 800g class' },
        { label: 'Remote Control', value: 'WebRTC / ROS2 Bridge / Web UI' },
      ],
      blueprint: [
        { title: 'Edge Control', body: 'Local control, sensor integration, and AI inference using Jetson Nano plus Raspberry Pi / MCU roles.' },
        { title: 'Remote Ops', body: 'Teleoperation and state visibility using WebRTC, Wi-Fi, and ROS2 Bridge.' },
        { title: 'Mobility + Arm', body: 'A remote support configuration that combines a compact mobile base with a multi-DOF arm.' },
        { title: 'Cloud Link', body: 'AWS IoT Core-centered logging, remote updates, and maintenance support.' },
      ],
      diagram: ['User UI', 'Cloud', 'ROS2 Edge', 'Arm', 'Mobility'],
    },
    intro: {
      label: 'Why This Business',
      title: 'Turning contract-engineering capability into a robotics business.',
      body:
        'The materials show that Ishitake built its technical base through Java / AWS-centered system delivery, AI development, and IoT work, then extended that base into robotics R&D using Jetson Nano, ROS2, and VSLAM. This site reframes that trajectory as a remote robotics business.',
    },
    solution: {
      eyebrow: 'Development Scope',
      title: 'The focus is not a single robot, but the operating system around it.',
      description: 'Mobility, manipulation, teleoperation, monitoring, updates, and safety are handled as one architecture.',
      items: [
        { index: '01', title: 'Design mobility and work together', body: 'The concept combines a compact self-driving base with a robotic arm for indoor remote support scenarios.' },
        { index: '02', title: 'Use ClearBot as the project foundation', body: 'ClearBot is treated as the foundation to preserve compatibility while accelerating prototyping.' },
        { index: '03', title: 'Include remote operations from day one', body: 'AWS IoT, WebRTC, and web interfaces are considered part of the operating model, not an afterthought.' },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      title: 'A clearer view of the stack from edge robotics to cloud operations.',
      description: 'The documented technical elements are reorganized into four layers: user interface, cloud, robot edge, and mobility / manipulation.',
      layers: [
        { tag: '01', title: 'User Interface', body: 'Web apps, smartphone apps, and voice UI for teleoperation, status display, and monitoring.' },
        { tag: '02', title: 'Cloud Control Plane', body: 'AWS IoT Core, Lambda, DynamoDB, S3, SageMaker, MQTT, and OTA updates.' },
        { tag: '03', title: 'Robot Edge', body: 'Jetson Nano, Greengrass, ROS2 nav2, YOLOv8, and MoveIt2 for perception and control.' },
        { tag: '04', title: 'Mobility & Manipulation', body: '4WD or omniwheel bases, multi-DOF arms, interchangeable tools, distance sensors, IMU, and LiDAR.' },
      ],
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'A hierarchy of what is actually being built.',
      description: 'Instead of showing every capability as equal, the section emphasizes the core integrated system first.',
      items: [
        { label: 'Core Focus', title: 'Unify mobility, manipulation, and teleoperation', body: 'The primary goal is to connect mobile bases, robotic arms, remote operation, and cloud linkage into an operable robotics stack.' },
        { label: 'Navigation', title: 'Mobility and obstacle avoidance', body: 'Indoor movement and safe stopping through ROS2, SLAM / VSLAM, distance sensing, and camera integration.' },
        { label: 'Manipulation', title: 'Robotic arm and end effectors', body: 'Configuration studies and prototypes for up to 800g class handling plus tray, brush, and mop style attachments.' },
        { label: 'Remote UI', title: 'Teleoperation interface', body: 'Remote support, monitoring, and state visibility through web and mobile interfaces.' },
        { label: 'Operations', title: 'Cloud-linked operations', body: 'Logging, model retraining, OTA distribution, and dashboard-driven operation support.' },
        { label: 'Safety', title: 'Safety design', body: 'Low torque, short arms, emergency stop, fall detection, and physical limits combined into the system.' },
      ],
    },
    showcase: {
      eyebrow: 'Documented Advantages',
      title: 'Characteristics grounded in the provided materials.',
      items: [
        { title: 'ClearBot Compatibility', body: 'Aiming for easier transfer of code and strategy by staying close to the ClearBot foundation.', meta: 'Compatibility' },
        { title: 'Prototype Cost Awareness', body: '3D printing, general-purpose components, and modular thinking for lower-cost prototyping.', meta: 'Prototype' },
        { title: 'Remote Operations', body: 'Teleoperation, system visibility, cloud linkage, and OTA updates as part of the design scope.', meta: 'Operations' },
        { title: 'Japan Environment Fit', body: 'Support for tatami-like environments, indoor level changes, and Japan-specific living layouts.', meta: 'Environment' },
      ],
    },
    useCases: {
      eyebrow: 'Use Cases',
      title: 'Applications visible from the source materials.',
      description: 'The primary scenario is emphasized first, with secondary directions stacked alongside it.',
      items: [
        { kicker: 'Home Support', title: 'Remote support inside the home', body: 'Use cases such as item movement, monitoring, and remote operation for daily living assistance.' },
        { kicker: 'Welfare / Care', title: 'Welfare and care facilities', body: 'Expansion toward tray delivery support, monitoring, and facility-oriented solutions.' },
        { kicker: 'OEM / Co-Development', title: 'OEM and co-development', body: 'A direction for embedding robotic arms, teleoperation, sensor integration, and cloud monitoring into existing products.' },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'How discussions can move toward a prototype.',
      description: 'The flow is organized into requirement definition, system design, prototyping, and operations planning.',
      items: [
        { phase: 'Phase 1', title: 'Requirement framing', body: 'Define environment, support goals, degrees of freedom, teleoperation granularity, and safety constraints.' },
        { phase: 'Phase 2', title: 'System design', body: 'Combine base, arm, sensors, Jetson, cloud, and interfaces into a whole configuration.' },
        { phase: 'Phase 3', title: 'Prototype and validation', body: 'Use 3D printing and existing frameworks to produce and test prototypes quickly.' },
        { phase: 'Phase 4', title: 'Operations planning', body: 'Design logging, monitoring, OTA updates, and maintenance workflows for ongoing use.' },
      ],
    },
    foundation: {
      eyebrow: 'Engineering Base',
      title: 'What the development effort stands on.',
      lead: 'The starting point is a combination of software delivery experience in Java / AWS and robotics-oriented experimentation with Jetson Nano, ROS2, and VSLAM.',
      items: [
        { title: 'Software Foundation', body: 'Track record in business systems, IoT, and AI development using Java / Spring Boot / AWS.' },
        { title: 'Robotics R&D', body: 'Prototype development using Jetson Nano, ROS2, VSLAM, sensor integration, and 3D printing.' },
        { title: 'Collaboration Model', body: 'A structure suited for co-development, prototyping support, requirement shaping, and OEM collaboration.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Talk with us about remote robotics or robotic arm development.',
      body: 'This can start from early concept discussions or from integration planning for an existing product.',
      noteLabel: 'Scope',
      noteBody: 'Possible topics include concept framing, system studies, prototyping, and co-development planning.',
      actions: [
        { label: 'Contact Ishitake', href: 'https://ishitakes.com/', variant: 'primary' },
        { label: 'Company Page', href: '/company.html', variant: 'secondary' },
      ],
    },
  },
}
