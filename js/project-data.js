// ========================================
// Project Data — Main images (#) + Process images
// ========================================

const projectData = {
  '01': {
    id: '01',
    folder: '01-intersection',
    title: 'Izakaya & Bar',
    category: {
      zh: 'INTERSECTION — 跨文化空间，日与夜之间',
      en: 'INTERSECTION — Across cultures & spaces, between day & night',
    },
    desc: {
      zh: '一个拥有双重身份的餐厅：白天是明亮温暖的日式居酒屋风格咖啡馆，充满自然光线与暖色调；夜晚则转变为霓虹灯照耀的未来感酒吧。紧凑的珍珠奶茶吧锚定入口，模块化的卡座、舞台和"打卡"社交空间在亲密感与群体活力之间取得平衡。',
      en: 'A diner of dual identities: by day a bright izakaya-inspired cafe with natural light and warm tones; by night a neon-lit futuristic bar. A compact bubble tea bar anchors the entry, while modular booths, stage, and an "Instagrammable" social space create both intimacy and collective vibrancy.',
    },
    mainImages: ['#1.jpg'],
    processImages: ['3.jpg', '4.jpg'],
  },
  '02': {
    id: '02',
    folder: '02-interlude',
    title: 'Abode of Simplicity',
    category: {
      zh: 'INTERLUDE — 记忆与静默之间',
      en: 'INTERLUDE — Between memory and silence',
    },
    desc: {
      zh: '从一把古董折扇展开——其褶皱形态与流动光影启发空间姿态。走廊呼应扇面的折叠，弧形墙壁上光影如扇叶般闪烁。帘幕与门槛消解为流动的过渡，成为城市中的一处停顿，让记忆与氛围静静交织。',
      en: 'Unfolding from an antique fan, whose pleated form and fleeting shadows inspired spatial gestures. Corridors echo its folds, casting light like fan blades across curved walls. Curtains and thresholds dissolve into fluid transitions — a pause within the city, where memory and atmosphere quietly intertwine.',
    },
    mainImages: ['#1.jpg', '#2.jpg'],
    processImages: ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
  },
  '03': {
    id: '03',
    folder: '03-dialogue',
    title: 'Endless Life',
    category: {
      zh: 'DIALOGUE — 跨越时间与空间',
      en: 'DIALOGUE — Across time and space',
    },
    desc: {
      zh: '对 Banana Alley Vaults 历史遗址进行适应性再利用——将其改造为公共步行通道与艺术空间。设计遵循维多利亚州遗产保护法，采用再生材料——红砖、传统石灰砂浆、石材及现代建筑废料——在旧与新之间建立对话。哥特式彩色玻璃嵌入混凝土与砖结构，连接过去与现在。',
      en: 'Adaptive reuse of the Banana Alley Vaults, a heritage site between the Birrarung River and Flinders Street, into a public pedestrian passage and art space. Recycled materials — red brick, traditional lime mortar, stone, construction waste — create a dialogue between old and new. Gothic stained glass embedded in concrete bridges past and present.',
    },
    mainImages: ['#1.jpg', '#2.jpg', '#3.jpg'],
    processImages: ['process picture.jpg', 'process2.jpg', 'process3.jpg', 'process4.jpg', 'process5.jpg'],
  },
  '04': {
    id: '04',
    folder: '04-perception',
    title: 'Collage My Sight',
    category: {
      zh: 'PERCEPTION — 演进中的城市景观',
      en: 'PERCEPTION — Evolving city landscapes',
    },
    desc: {
      zh: '两张重构墨尔本城市世界观的海报。基于抽象的平面图，将想象的城市元素与可能的城市结构重新拼贴——数字符号、云数据、废墟与摩天楼。以电影《银翼杀手 1982》的风格为灵感，邀请观者进入一个我重新构想的未来城市空间。',
      en: 'Two posters reconstructing the worldview of Melbourne as a future city. Drawing from an abstracted floor plan, re-collaged urban elements — digital symbols, cloud data, ruins, skyscrapers — reimagine the city through the lens of Blade Runner 1982, inviting viewers into a speculative urban space.',
    },
    mainImages: ['#1.jpg', '#2.jpg'],
    processImages: ['3.jpg', '4.jpg', '5.jpg'],
  },
  '05': {
    id: '05',
    folder: '05-formation',
    title: 'Future Partition & Swivel Chair',
    category: {
      zh: 'FORMATION — 从图案到空间深度',
      en: 'FORMATION — From pattern to spatial depth',
    },
    desc: {
      zh: '两个制造实验项目。Future Partition 将 AI 生成的形态图案通过迭代分层、三维扫描和增量板材成型转化为三维隔断。Cantilevered Swivel Chair 采用弯曲胶合板层压与数字制造——木材不再只是饰面，而是结构本身——由齿轮驱动旋转机制。',
      en: 'Two fabrication experiments. Future Partition transforms AI-generated morph patterns into 3D partitions through iterative layering, 3D scanning, and incremental sheet forming. Cantilevered Swivel Chair uses bent veneer lamination and digital fabrication — veneer as structure, not surface — driven by a gear-based rotation mechanism.',
    },
    mainImages: ['#1.jpg'],
    processImages: ['SITE INVESTIGATION.jpg', 'test panel.jpg', 'robotic.jpg', 'img-029-088.jpg', 'img-030-094.jpg', 'img-030-098.jpg', 'img-031-105.jpg'],
  },
  '06': {
    id: '06',
    folder: '06-speculation',
    title: 'CoLab',
    category: {
      zh: 'SPECULATION — 未来图书馆的知识循环',
      en: 'SPECULATION — Knowledge circulation in future library',
    },
    desc: {
      zh: '为 RMIT 时装与纺织专业学生构想的未来图书馆，通过四个阶段展开：邀请、输入、转化、输出即输入。在 CoLab 区域，用户在共享人台上共同设计虚拟服装。响应式讨论室支持反思与归档——形成一个再生的循环，输入变为输出，输出激发新的探索。',
      en: 'A future library for RMIT Fashion & Textiles students, unfolding through four phases: Invite, Input, Transfer, and Output as Input. In the CoLab zone, users co-style virtual garments on shared mannequins. A responsive discussion room supports reflection and archiving — a regenerative loop where input becomes output and output sparks new inquiry.',
    },
    mainImages: ['#1.jpg', '#2.jpg'],
    processImages: ['A3L-2.jpg', 'A4L-1.jpg', 'A4L-4.jpg', 'A4L-5.jpg'],
  },
  '07': {
    id: '07',
    folder: '07-fabrication',
    title: 'Book Kiosk',
    category: {
      zh: 'FABRICATION — 独立设计与建造',
      en: 'FABRICATION — A self-designed and built project',
    },
    desc: {
      zh: '一个位于山西大同的 24 小时自助书亭——首个独立完成的建成项目。屋顶形态源自山西标志性山地景观，与翻开的书页几何相结合，设计兼顾预制效率与现场安装可行性。项目已建成，位于大同市图书馆旁。',
      en: 'A 24-hour self-service book kiosk for the historic city of Datong, Shanxi — the first independently realised built work. The roof form, derived from Shanxi\'s mountainous landscape combined with the geometry of an open book, is designed for prefabrication and on-site installation. Located adjacent to Datong Library.',
    },
    mainImages: [],
    processImages: ['img-039-137.jpg', 'img-041-139.jpg', 'img-042-140.jpg'],
  },
};

const projectOrder = ['01', '02', '03', '04', '05', '06', '07'];

function getImagePath(projectId, filename) {
  var encoded = filename.replace(/#/g, '%23');
  return 'images/projects/' + projectData[projectId].folder + '/' + encoded;
}
