import type { Stage } from "@/types/database";

export const STAGES: Stage[] = [
  {
    id: "stage-1",
    stageNumber: 1,
    slug: "sushi-fundamentals",
    title: { en: "Sushi Fundamentals", ja: "寿司の基礎", vi: "Nền tảng Sushi" },
    subtitle: { en: "History, philosophy & the craftsman mindset", ja: "歴史・哲学・職人の心構え", vi: "Lịch sử, triết lý và tư duy nghệ nhân" },
    description: {
      en: "Sushi history, Edomae origins, etiquette, terminology, seasonality and the shokunin philosophy that underlies every great sushi chef.",
      ja: "寿司の歴史、江戸前の起源、作法、用語、季節感、そして偉大な寿司職人を支える職人気質を学びます。",
      vi: "Lịch sử sushi, nguồn gốc Edomae, phép tắc, thuật ngữ, tính mùa vụ và triết lý shokunin nền tảng của mọi đầu bếp sushi giỏi.",
    },
    missionStart: 1,
    missionEnd: 50,
    icon: "BookOpen",
    colorToken: "wood",
  },
  {
    id: "stage-2",
    stageNumber: 2,
    slug: "fish-knowledge",
    title: { en: "Fish Knowledge", ja: "魚の知識", vi: "Kiến thức về cá" },
    subtitle: { en: "The seafood every sushi chef must know by heart", ja: "寿司職人が必ず知るべき魚介類", vi: "Hải sản mà mọi đầu bếp sushi phải nằm lòng" },
    description: {
      en: "Maguro, tai, aji, saba, hirame, kohada, uni, hotate and more — season, flavor, texture, fat level and the Edomae technique each fish calls for.",
      ja: "マグロ、鯛、鯵、鯖、平目、小肌、雲丹、帆立など — 旬、風味、食感、脂の乗り、それぞれに合う江戸前技術。",
      vi: "Maguro, tai, aji, saba, hirame, kohada, uni, hotate và nhiều loại khác — mùa, hương vị, kết cấu, độ béo và kỹ thuật Edomae phù hợp.",
    },
    missionStart: 51,
    missionEnd: 100,
    icon: "Fish",
    colorToken: "accent",
  },
  {
    id: "stage-3",
    stageNumber: 3,
    slug: "knives-fish-preparation",
    title: { en: "Knives & Fish Preparation", ja: "包丁と魚の下処理", vi: "Dao & Sơ chế cá" },
    subtitle: { en: "Deba, yanagiba, sanmai-oroshi and sashimi cutting", ja: "出刃、柳刃、三枚おろし、刺身の切り方", vi: "Deba, yanagiba, sanmai-oroshi và cách thái sashimi" },
    description: {
      en: "Sharpening, safety, fish anatomy, scaling, gutting, three-piece filleting, skinning and portioning — progressing from aji to maguro.",
      ja: "研ぎ、安全、魚の構造、うろこ取り、内臓処理、三枚おろし、皮引き、切り分け — 鯵からマグロへと進みます。",
      vi: "Mài dao, an toàn, cấu tạo cá, đánh vảy, mổ bụng, lọc ba miếng, lột da và cắt phần — tiến từ cá aji đến maguro.",
    },
    missionStart: 101,
    missionEnd: 150,
    icon: "Utensils",
    colorToken: "ink",
  },
  {
    id: "stage-4",
    stageNumber: 4,
    slug: "shari-and-nigiri",
    title: { en: "Shari & Nigiri", ja: "シャリと握り", vi: "Cơm giấm & Nigiri" },
    subtitle: { en: "Rice, vinegar, hand pressure and shaping the perfect nigiri", ja: "米、酢、力加減、握りの成形", vi: "Gạo, giấm, lực tay và tạo hình nigiri hoàn hảo" },
    description: {
      en: "Rice selection, sushi vinegar ratios, shari temperature, nigiri shape, hand pressure, air pockets, wasabi and neta placement.",
      ja: "米選び、合わせ酢の配合、シャリの温度、握りの形、力加減、空気の入れ方、わさび、ネタの置き方。",
      vi: "Chọn gạo, tỷ lệ giấm sushi, nhiệt độ cơm giấm, hình dáng nigiri, lực tay, khoảng khí, wasabi và cách đặt neta.",
    },
    missionStart: 151,
    missionEnd: 200,
    icon: "Wheat",
    colorToken: "wood",
  },
  {
    id: "stage-5",
    stageNumber: 5,
    slug: "edomae-techniques",
    title: { en: "Edomae Techniques", ja: "江戸前技術", vi: "Kỹ thuật Edomae" },
    subtitle: { en: "Zuke, kobujime, sujime, aburi and the art of aging", ja: "漬け・昆布締め・酢締め・炙り・熟成の技", vi: "Zuke, kobujime, sujime, aburi và nghệ thuật ủ chín" },
    description: {
      en: "The curing, marinating and aging methods that define Edomae craftsmanship — zuke, kobujime, sujime, yubiki, aburi and tamago.",
      ja: "江戸前の技を定義する〆・漬け・熟成の技法 — 漬け、昆布締め、酢締め、湯引き、炙り、玉子。",
      vi: "Các phương pháp ướp muối, ngâm và ủ chín định hình tay nghề Edomae — zuke, kobujime, sujime, yubiki, aburi và tamago.",
    },
    missionStart: 201,
    missionEnd: 250,
    icon: "Flame",
    colorToken: "accent",
  },
  {
    id: "stage-6",
    stageNumber: 6,
    slug: "washoku-and-seasonality",
    title: { en: "Washoku & Seasonality", ja: "和食と季節感", vi: "Washoku & Tính mùa vụ" },
    subtitle: { en: "Dashi, seasonal ingredients and Japanese culinary aesthetics", ja: "出汁、旬の食材、和の美意識", vi: "Dashi, nguyên liệu theo mùa và mỹ học ẩm thực Nhật" },
    description: {
      en: "Dashi, grilling, steaming, simmering, tempura, seasonal produce, plating and the four seasons of Japanese seafood.",
      ja: "出汁、焼く、蒸す、煮る、天ぷら、旬の食材、盛り付け、そして四季の魚介。",
      vi: "Dashi, nướng, hấp, ninh, tempura, nguyên liệu theo mùa, cách bày trí và bốn mùa hải sản Nhật Bản.",
    },
    missionStart: 251,
    missionEnd: 300,
    icon: "Leaf",
    colorToken: "success",
  },
  {
    id: "stage-7",
    stageNumber: 7,
    slug: "omakase-and-omotenashi",
    title: { en: "Omakase & Omotenashi", ja: "おまかせとおもてなし", vi: "Omakase & Omotenashi" },
    subtitle: { en: "Menu sequencing, counter etiquette and Japanese hospitality", ja: "コース構成、カウンター作法、日本のおもてなし", vi: "Trình tự thực đơn, phép tắc quầy bar và lòng hiếu khách Nhật Bản" },
    description: {
      en: "Flavor and texture progression, temperature, timing, counter communication and the storytelling behind every course.",
      ja: "味と食感の流れ、温度、間、カウンターでの会話、そして一皿ごとの物語。",
      vi: "Trình tự hương vị và kết cấu, nhiệt độ, thời điểm, giao tiếp tại quầy và câu chuyện đằng sau mỗi món.",
    },
    missionStart: 301,
    missionEnd: 350,
    icon: "HandPlatter",
    colorToken: "wood",
  },
  {
    id: "stage-8",
    stageNumber: 8,
    slug: "professional-sushi-chef",
    title: { en: "Professional Sushi Chef", ja: "プロの寿司職人", vi: "Đầu bếp Sushi chuyên nghiệp" },
    subtitle: { en: "Restaurant operations and the road to an international career", ja: "店舗運営と国際的なキャリアへの道", vi: "Vận hành nhà hàng và con đường sự nghiệp quốc tế" },
    description: {
      en: "Food safety, sourcing, inventory, food cost, team management and opening your own restaurant — from student to international craftsman.",
      ja: "衛生管理、仕入れ、在庫、原価、チーム運営、そして開業 — 見習いから国際的な職人へ。",
      vi: "An toàn thực phẩm, thu mua, tồn kho, chi phí món ăn, quản lý đội ngũ và mở nhà hàng riêng — từ học viên thành nghệ nhân quốc tế.",
    },
    missionStart: 351,
    missionEnd: 365,
    icon: "GraduationCap",
    colorToken: "ink",
  },
];

export function getStageByNumber(n: number) {
  return STAGES.find((s) => s.stageNumber === n);
}

export function getStageForMissionNumber(missionNumber: number) {
  return STAGES.find(
    (s) => missionNumber >= s.missionStart && missionNumber <= s.missionEnd
  );
}

export function getStageById(id: string) {
  return STAGES.find((s) => s.id === id);
}
