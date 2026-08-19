import { buildMission } from "./builders";
import type { Mission } from "@/types/database";

/**
 * Missions 001–010 — fully authored Phase 1 seed content.
 * Every mission ships Japanese vocabulary, a goal, key-concept content,
 * cultural insight, chef tip, key takeaway and a 4-question quiz.
 *
 * `content` is written in full in English (the primary authoring locale)
 * with faithful Japanese and Vietnamese summaries of the same key concept —
 * every other field (goal, vocabulary, cultural insight, chef tip, key
 * takeaway, quiz) is fully trilingual.
 */
export const SEED_MISSIONS: Mission[] = [
  buildMission({
    missionNumber: 1,
    slug: "what-is-sushi-craftsmanship",
    title: {
      en: "What is Sushi Craftsmanship?",
      ja: "寿司職人の技とは何か",
      vi: "Nghệ thuật thủ công của Sushi là gì?",
    },
    difficulty: "beginner",
    primarySkill: "fish_knowledge",
    description: {
      en: "Understand what separates a sushi craftsman from someone who simply knows how to make sushi.",
      ja: "寿司を作れるだけの人と、真の寿司職人の違いを理解します。",
      vi: "Hiểu điều gì phân biệt một nghệ nhân sushi với người chỉ biết làm sushi.",
    },
    goal: {
      en: "After completing this mission, you will understand what distinguishes a sushi craftsman from someone who simply knows how to make sushi.",
      ja: "このミッションを終えると、ただ寿司を作れる人と本当の寿司職人との違いが理解できるようになります。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu điều gì làm nên sự khác biệt giữa một nghệ nhân sushi và một người chỉ biết cách làm sushi.",
    },
    content: {
      en: `Anyone can learn to place a slice of fish on a ball of rice. Very few people spend a lifetime learning to do it with complete consistency, deep ingredient knowledge, and genuine hospitality. That gap is what "sushi craftsmanship" means.

A sushi craftsman — shokunin (職人) — treats sushi as an integration of many disciplines at once: knife work precise enough to respect the fish's structure, rice seasoned and tempered with the same care as the neta on top, a working knowledge of seasonality so the menu shifts with nature rather than staying frozen in time, and an attentiveness to the guest that turns a meal into an experience.

Making sushi is a technique. Sushi craftsmanship is a relationship — with the ingredient, with the tradition, and with the person eating it. Over the next 365 missions, you are not just memorizing recipes. You are building that relationship, one deliberate skill at a time.`,
      ja: `誰でも魚をご飯にのせることはできますが、常に安定した品質と深い食材知識、真心のこもったおもてなしをもって寿司を作り続けるには一生の修練が必要です。その差こそが「寿司職人の技」です。職人は包丁技術、シャリの管理、季節感、そしてお客様への気配りを同時に磨き続けます。`,
      vi: `Ai cũng có thể đặt một lát cá lên nắm cơm, nhưng rất ít người dành cả đời để làm điều đó một cách nhất quán, với kiến thức sâu sắc về nguyên liệu và lòng hiếu khách chân thành. Khoảng cách đó chính là "nghệ thuật thủ công của sushi" — sự kết hợp giữa kỹ thuật dao, cách xử lý cơm giấm, hiểu biết về mùa vụ và sự quan tâm tới thực khách.`,
    },
    culturalInsight: {
      en: "In Japanese craft traditions — carpentry, pottery, sword-making, sushi — mastery is earned through decades of unglamorous repetition of fundamentals, not shortcuts or natural talent alone.",
      ja: "大工、陶芸、刀鍛冶、寿司職人など日本の職人文化では、地味な基本の反復を何十年も続けることでしか熟練は得られないとされています。",
      vi: "Trong các truyền thống thủ công Nhật Bản — mộc, gốm, rèn kiếm, sushi — sự tinh thông chỉ đạt được qua hàng chục năm lặp lại những điều cơ bản một cách kiên trì, không có đường tắt.",
    },
    chefTip: {
      en: "Real sushi chefs judge each other not by flashy presentation, but by consistency: the same shari temperature, the same knife angle, the same care, every single day.",
      ja: "本物の寿司職人は華やかな見た目ではなく、毎日変わらぬシャリの温度、包丁の角度、丁寧さで互いを評価します。",
      vi: "Các đầu bếp sushi thực thụ đánh giá nhau không phải qua vẻ ngoài hào nhoáng, mà qua sự nhất quán: cùng một nhiệt độ cơm giấm, cùng một góc dao, cùng một sự cẩn trọng, mỗi ngày.",
    },
    keyTakeaway: {
      en: "Sushi craftsmanship is a mindset — the daily discipline to do simple things extremely well.",
      ja: "寿司職人の技とは心構えである — シンプルなことを毎日極めて丁寧に行う規律である。",
      vi: "Nghệ thuật thủ công của sushi là một tư duy — kỷ luật hằng ngày để làm những điều đơn giản một cách xuất sắc.",
    },
    vocabulary: [
      { ja: "寿司", reading: "すし", en: "Sushi", vi: "Sushi", category: "general" },
      { ja: "職人", reading: "しょくにん", en: "Craftsman", vi: "Nghệ nhân", category: "general" },
      { ja: "技術", reading: "ぎじゅつ", en: "Technique", vi: "Kỹ thuật", category: "technique" },
      { ja: "修行", reading: "しゅぎょう", en: "Training / apprenticeship", vi: "Tu luyện, học việc", category: "general" },
      { ja: "心構え", reading: "こころがまえ", en: "Mindset, mental readiness", vi: "Tư duy, sự chuẩn bị tinh thần", category: "general" },
    ],
    questions: [
      {
        question: { en: "What does 職人 (shokunin) mean?" },
        answers: ["Restaurant", "Craftsman", "Fish", "Customer"],
        correctIndex: 1,
        explanation: { en: "職人 (shokunin) refers to a highly skilled artisan devoted to a single craft." },
      },
      {
        question: { en: "What best distinguishes a sushi craftsman from someone who just makes sushi?" },
        answers: [
          "Using more expensive fish",
          "Having faster hands",
          "Integrating skill, ingredient knowledge, and daily discipline",
          "A louder presentation style",
        ],
        correctIndex: 2,
      },
      {
        question: { en: "Traditional apprenticeship in a sushi shop typically begins with:" },
        answers: [
          "Immediately cutting expensive fish",
          "Years of foundational tasks before advancing",
          "Watching videos only",
          "Skipping straight to nigiri-shaping",
        ],
        correctIndex: 1,
      },
      {
        question: { en: "The word 修行 (shugyō) most closely relates to:" },
        answers: ["A type of fish", "Apprenticeship / training discipline", "A restaurant title", "A cutting technique"],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 2,
    slug: "history-of-sushi",
    title: { en: "History of Sushi", ja: "寿司の歴史", vi: "Lịch sử của Sushi" },
    difficulty: "beginner",
    primarySkill: "fish_knowledge",
    description: {
      en: "Trace sushi's evolution from a fish-preservation method to the nigiri you know today.",
      ja: "魚の保存法から現在の握り寿司へと至る進化の道のりをたどります。",
      vi: "Theo dõi quá trình tiến hóa của sushi từ phương pháp bảo quản cá đến món nigiri ngày nay.",
    },
    goal: {
      en: "After completing this mission, you will understand how sushi evolved from an ancient preservation method into modern nigiri.",
      ja: "このミッションを終えると、古代の保存法から現代の握り寿司へと寿司がどう進化したか理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu sushi đã tiến hóa như thế nào từ một phương pháp bảo quản cổ xưa thành món nigiri hiện đại.",
    },
    content: {
      en: `Sushi did not begin as a delicacy — it began as a way to keep fish edible for months. Narezushi (熟れ寿司), likely introduced from Southeast Asia, packed fish in salt and rice for months until it fermented; the rice itself was originally discarded, used only as a fermenting agent.

Over centuries the fermentation time shortened, and people began eating the rice too. By the Edo period (1603–1868), vinegar was added to rice to mimic that tangy fermented flavor instantly — this innovation, "haya-zushi" (fast sushi), made sushi something you could eat the same day it was made.

Nigirizushi as we recognize it today is traditionally credited to Hanaya Yohei in early 19th-century Edo (modern Tokyo), who began hand-pressing rice and fresh fish together and selling it from street stalls as a quick, casual food for busy city dwellers — closer to today's fast food than fine dining.

Refrigeration in the 20th century let this Edo-local specialty spread nationwide, and in 1958 Yoshiaki Shiraishi invented conveyor-belt sushi (回転寿司), making it affordable and fast. From the 1970s onward, sushi globalized — the California roll was born in Los Angeles to appeal to Western palates unfamiliar with raw fish — while today's serious omakase counters descend directly from that same Edo-period street-food lineage, refined into an art form.`,
      ja: `寿司はもともとご馳走ではなく、魚を長期保存するための方法でした。江戸時代に酢飯を使う早寿司が生まれ、19世紀初頭には華屋与兵衛が屋台で握り寿司を売り始めたと言われています。冷蔵技術の普及により全国に広まり、1958年には回転寿司が発明されて庶民の食べ物となりました。`,
      vi: `Sushi ban đầu không phải món ngon mà là cách bảo quản cá lâu dài. Vào thời Edo, cơm trộn giấm ra đời để tạo hương vị lên men nhanh chóng, và đầu thế kỷ 19, Hanaya Yohei được cho là người đã bắt đầu bán nigirizushi tại các quầy hàng rong. Nhờ công nghệ làm lạnh, sushi lan rộng khắp Nhật Bản, và năm 1958 sushi băng chuyền ra đời, biến sushi thành món ăn bình dân.`,
    },
    culturalInsight: {
      en: "Sushi's history mirrors Japan's own — a preservation technique imported from the mainland was reshaped, again and again, into something distinctly Japanese, then distinctly Edo (Tokyo).",
      ja: "寿司の歴史は日本そのものの歴史を映しています — 大陸から伝わった保存技術が、日本独自の、そして江戸独自のものへと何度も作り変えられてきました。",
      vi: "Lịch sử sushi phản ánh chính lịch sử Nhật Bản — một kỹ thuật bảo quản du nhập từ lục địa đã được biến đổi nhiều lần thành thứ mang đậm bản sắc Nhật, rồi bản sắc Edo (Tokyo).",
    },
    chefTip: {
      en: "Knowing this history lets you answer confidently when an omakase guest asks, 'why is it called Edomae?' — a question you will hear often.",
      ja: "この歴史を知っていれば、お客様に『なぜ江戸前と呼ぶのですか』と聞かれても自信を持って答えられます。",
      vi: "Nắm được lịch sử này giúp bạn tự tin trả lời khi khách omakase hỏi 'tại sao gọi là Edomae?' — một câu hỏi bạn sẽ thường xuyên gặp phải.",
    },
    keyTakeaway: {
      en: "Modern nigiri is younger than most people think — barely 200 years old, born as fast food on the streets of Edo.",
      ja: "現代の握り寿司は思われているより新しく、わずか200年ほど前に江戸の屋台で生まれたファストフードだった。",
      vi: "Nigiri hiện đại trẻ hơn nhiều người nghĩ — chỉ khoảng 200 năm tuổi, ra đời như một món ăn nhanh trên đường phố Edo.",
    },
    vocabulary: [
      { ja: "熟れ寿司", reading: "なれずし", en: "Narezushi (fermented sushi)", vi: "Sushi lên men (Narezushi)", category: "general" },
      { ja: "江戸前", reading: "えどまえ", en: "Edomae (Edo-style)", vi: "Edomae (phong cách Edo)", category: "general" },
      { ja: "屋台", reading: "やたい", en: "Food stall", vi: "Quầy hàng rong", category: "kitchen" },
      { ja: "回転寿司", reading: "かいてんずし", en: "Conveyor-belt sushi", vi: "Sushi băng chuyền", category: "general" },
      { ja: "進化", reading: "しんか", en: "Evolution", vi: "Sự tiến hóa", category: "general" },
    ],
    questions: [
      {
        question: { en: "What was narezushi?" },
        answers: ["A modern sushi roll", "A fermented-fish preservation method", "A type of soy sauce", "A dessert"],
        correctIndex: 1,
      },
      {
        question: { en: "Who is traditionally credited with inventing fast nigirizushi in Edo?" },
        answers: ["Jiro Ono", "Hanaya Yohei", "Yoshiaki Shiraishi", "Emperor Meiji"],
        correctIndex: 1,
      },
      {
        question: { en: "In the Edo period, nigirizushi was originally:" },
        answers: ["Fine dining for nobility", "Casual street fast food", "Served only frozen", "A religious offering"],
        correctIndex: 1,
      },
      {
        question: { en: "Conveyor-belt sushi (kaiten-zushi) was introduced in:" },
        answers: ["The 1700s", "1958", "2005", "The ancient Nara period"],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 3,
    slug: "what-is-edomae-sushi",
    title: { en: "What is Edomae Sushi?", ja: "江戸前寿司とは何か", vi: "Sushi Edomae là gì?" },
    difficulty: "beginner",
    primarySkill: "edomae",
    description: {
      en: "Learn why Edomae is a technique philosophy, not just a regional label.",
      ja: "江戸前が単なる地域名ではなく、技術の哲学であることを学びます。",
      vi: "Tìm hiểu vì sao Edomae là một triết lý kỹ thuật, không chỉ là một nhãn hiệu vùng miền.",
    },
    goal: {
      en: "After completing this mission, you will be able to explain what makes sushi truly 'Edomae' beyond its geographic origin.",
      ja: "このミッションを終えると、地理的な由来を超えて何が寿司を『江戸前』たらしめるのか説明できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn có thể giải thích điều gì thực sự làm nên sushi 'Edomae' ngoài nguồn gốc địa lý.",
    },
    content: {
      en: `"Edomae" (江戸前) literally means "in front of Edo" — originally, fish caught in Edo Bay (today's Tokyo Bay), right in front of the city. But the word has come to mean something much more specific than geography.

Before refrigeration existed, Edo-period chefs had no way to keep fresh fish safe for hours on a counter. So they developed preservation techniques out of necessity: curing in salt or vinegar (shime), marinating in soy sauce (zuke), gently simmering (nitsuke), and lightly searing (aburi). These weren't flavor experiments — they were survival techniques.

What happened next is the interesting part: those necessity-driven techniques turned out to taste extraordinary, concentrating umami and transforming texture in ways raw fish alone never could. So even after refrigeration made preservation unnecessary, master chefs kept applying these techniques deliberately, for flavor.

Today, "Edomae sushi" describes this entire technique tradition: the idea that neta should receive some form of "shigoto" (仕事, literally "work") before it reaches the guest — a light cure, a marinade, a rest, a sear — rather than being served untouched. This is what separates serious Edomae-style sushi from casual, conveyor-belt-style sushi where most fish is served simply raw and unprepared.`,
      ja: `「江戸前」とは元々、江戸の目の前の海（現在の東京湾）で獲れた魚を指す言葉でした。冷蔵技術がなかった時代、職人たちは必要に迫られて〆る・漬ける・煮る・炙るといった保存技術を編み出しましたが、これが偶然にもうま味を引き出す優れた調理法であることが分かり、今日まで受け継がれています。江戸前寿司とは、ネタに何らかの「仕事」を施す技術の伝統そのものを指します。`,
      vi: `"Edomae" nghĩa đen là "trước Edo" — ban đầu chỉ cá đánh bắt tại vịnh Edo (nay là vịnh Tokyo). Khi chưa có tủ lạnh, các đầu bếp thời Edo buộc phải phát triển kỹ thuật bảo quản như ướp muối/giấm, ngâm nước tương, ninh nhẹ hay áp chảo sơ. Những kỹ thuật sinh ra từ sự cần thiết ấy hóa ra lại tạo nên hương vị đặc biệt, và ngày nay "sushi Edomae" chỉ toàn bộ truyền thống kỹ thuật đó — mỗi nguyên liệu đều được xử lý ("shigoto") trước khi đến tay thực khách.`,
    },
    culturalInsight: {
      en: "Edomae is not a style label — it is a promise: every piece of neta has already been treated, in some way, before it reaches you.",
      ja: "江戸前とはスタイルの名称ではなく約束です — すべてのネタは、あなたの元に届く前に何らかの手が加えられています。",
      vi: "Edomae không phải một nhãn phong cách — đó là một lời hứa: mọi miếng neta đều đã được xử lý theo cách nào đó trước khi đến với bạn.",
    },
    chefTip: {
      en: "When you taste truly Edomae sushi, almost nothing on the counter is fully raw and untouched — even pieces that look raw were likely brined, wiped with kelp, or rested to concentrate umami.",
      ja: "本物の江戸前寿司では、見た目が生のように見えても実際には塩や昆布で下処理され、うま味を凝縮させていることがほとんどです。",
      vi: "Khi thưởng thức sushi Edomae đích thực, hầu như không có gì trên quầy là hoàn toàn sống và chưa qua xử lý — ngay cả những miếng trông như sống cũng thường đã được ướp muối, lau bằng kombu, hoặc để nghỉ để cô đặc umami.",
    },
    keyTakeaway: {
      en: "Edomae isn't a place — it's a discipline of \"shigoto\" (work) applied to every piece of fish.",
      ja: "江戸前とは場所ではなく、すべての魚に施される「仕事」という規律である。",
      vi: "Edomae không phải một địa danh — đó là kỷ luật của \"shigoto\" (công đoạn xử lý) áp dụng cho từng miếng cá.",
    },
    vocabulary: [
      { ja: "江戸前", reading: "えどまえ", en: "Edomae style", vi: "Phong cách Edomae", category: "general" },
      { ja: "〆る", reading: "しめる", en: "To cure / set (fish)", vi: "Ướp / làm chín sơ", category: "technique" },
      { ja: "ネタ", reading: "ねた", en: "Sushi topping", vi: "Nguyên liệu phủ trên nigiri", category: "fish" },
      { ja: "仕事", reading: "しごと", en: "Work / treatment (of fish)", vi: "Công đoạn xử lý", category: "technique" },
      { ja: "天然", reading: "てんねん", en: "Wild-caught / natural", vi: "Tự nhiên, đánh bắt hoang dã", category: "fish" },
    ],
    questions: [
      {
        question: { en: "\"Edomae\" literally means:" },
        answers: ["Tokyo-style rice", "In front of Edo (Tokyo Bay)", "Fast food", "Raw fish only"],
        correctIndex: 1,
      },
      {
        question: { en: "Edomae curing techniques originally developed out of:" },
        answers: ["Pure aesthetic preference", "Necessity, before refrigeration existed", "Government regulation", "Religious tradition"],
        correctIndex: 1,
      },
      {
        question: { en: "The term \"shigoto\" (仕事) in an Edomae context refers to:" },
        answers: ["The bill", "The treatment/work applied to a piece of fish", "The chef's title", "The restaurant's name"],
        correctIndex: 1,
      },
      {
        question: { en: "Which statement is true of authentic Edomae sushi?" },
        answers: [
          "All neta is served completely raw",
          "Neta is deep-fried before serving",
          "Most neta receives some preparation before serving",
          "It uses only farmed fish",
        ],
        correctIndex: 2,
      },
    ],
  }),

  buildMission({
    missionNumber: 4,
    slug: "the-shokunin-mindset",
    title: { en: "The Shokunin Mindset", ja: "職人気質とは", vi: "Tư duy Shokunin" },
    difficulty: "beginner",
    primarySkill: "fish_knowledge",
    description: {
      en: "Explore the artisan philosophy behind every serious Japanese craft, sushi included.",
      ja: "寿司を含む日本のあらゆる職人技の根底にある哲学を探ります。",
      vi: "Khám phá triết lý nghệ nhân đằng sau mọi ngành thủ công nghiêm túc của Nhật Bản, bao gồm cả sushi.",
    },
    goal: {
      en: "After completing this mission, you will understand the shokunin philosophy and how it shapes a sushi chef's daily practice.",
      ja: "このミッションを終えると、職人気質という哲学と、それが寿司職人の日々の修練にどう影響するか理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu triết lý shokunin và cách nó định hình việc luyện tập hằng ngày của một đầu bếp sushi.",
    },
    content: {
      en: `Shokunin (職人) is often translated simply as "craftsman," but the word carries a much deeper meaning in Japanese culture. A shokunin is someone whose identity and sense of pride are inseparable from their craft — not because of the recognition it brings, but because of the daily discipline of doing the work itself, as well as it can possibly be done.

A few ideas sit at the center of this mindset. Shoshin (初心), "beginner's mind," is the practice of staying humble and curious even after decades of mastery — never assuming you've learned everything. Kata (型) is a fixed form or discipline, repeated so many times it becomes second nature, forming the foundation from which real skill and eventually improvisation can grow. And there is a deep respect for repetition itself: many traditional sushi apprenticeships have new chefs spend a year or more just cooking rice, or cleaning and prepping the kitchen, before they are permitted to touch a knife on real neta.

This isn't gatekeeping for its own sake. It reflects a belief that fundamentals — done thousands of times, correctly — are what actually separate craftsmanship from mere competence. A shokunin doesn't reach a finish line and stop; the goal is never "I have arrived," but rather a lifelong relationship of continual refinement.`,
      ja: `職人気質とは単なる「職人であること」ではなく、日々の仕事そのものへの誇りと規律を意味します。初心（しょしん）は熟練しても謙虚さと好奇心を失わないこと、型（かた）は繰り返しの末に体に染み込んだ基礎の形を指します。伝統的な寿司修行では、包丁を握る前に何年も米炊きや掃除だけを行うことも珍しくありません。`,
      vi: `Shokunin (職人) thường được dịch đơn giản là "nghệ nhân", nhưng từ này mang ý nghĩa sâu sắc hơn nhiều trong văn hóa Nhật Bản — niềm tự hào gắn liền với chính công việc hằng ngày, không phải vì sự công nhận. Shoshin (初心, tâm thế người mới bắt đầu) và kata (型, khuôn mẫu được lặp lại đến mức trở thành bản năng) là hai khái niệm cốt lõi. Trong nghề sushi truyền thống, người học việc có thể dành cả năm chỉ để nấu cơm hay dọn dẹp trước khi được chạm vào dao.`,
    },
    culturalInsight: {
      en: "In Japanese craft traditions — pottery, carpentry, sword-making, sushi — status is earned through decades of unglamorous repetition, not shortcuts or credentials alone.",
      ja: "陶芸、大工、刀鍛冶、寿司職人など日本の職人文化では、地位は何十年もの地味な反復によってのみ得られ、近道や肩書きだけでは得られません。",
      vi: "Trong các truyền thống thủ công Nhật Bản — gốm, mộc, rèn kiếm, sushi — địa vị chỉ đạt được qua hàng chục năm lặp lại những việc không hào nhoáng, không có đường tắt hay chỉ dựa vào bằng cấp.",
    },
    chefTip: {
      en: "If you want to train like a real shokunin, pick one fundamental — like tamagoyaki or rice-cooking — and focus on it exclusively for months before moving to the next skill.",
      ja: "本物の職人のように修行したいなら、玉子焼きや米炊きなど一つの基本を選び、次に進む前に数ヶ月それだけに集中しましょう。",
      vi: "Nếu muốn luyện tập như một shokunin thực thụ, hãy chọn một kỹ năng nền tảng — như tamagoyaki hay nấu cơm — và tập trung riêng vào đó trong nhiều tháng trước khi chuyển sang kỹ năng tiếp theo.",
    },
    keyTakeaway: {
      en: "Shokunin isn't a skill level — it's a lifelong relationship with your craft.",
      ja: "職人気質とはスキルレベルではなく、自らの技との一生涯にわたる向き合い方である。",
      vi: "Shokunin không phải một cấp độ kỹ năng — đó là mối quan hệ suốt đời với nghề của bạn.",
    },
    vocabulary: [
      { ja: "職人気質", reading: "しょくにんかたぎ", en: "Craftsman's spirit", vi: "Tinh thần nghệ nhân", category: "general" },
      { ja: "初心", reading: "しょしん", en: "Beginner's mind", vi: "Tâm thế người mới bắt đầu", category: "general" },
      { ja: "型", reading: "かた", en: "Form / kata", vi: "Khuôn mẫu, hình thức", category: "general" },
      { ja: "一生懸命", reading: "いっしょうけんめい", en: "Giving one's utmost effort", vi: "Nỗ lực hết mình", category: "general" },
      { ja: "継続", reading: "けいぞく", en: "Continuity / persistence", vi: "Sự kiên trì, liên tục", category: "general" },
    ],
    questions: [
      {
        question: { en: "初心 (shoshin) means:" },
        answers: ["Expert level", "Beginner's mind", "Final exam", "A type of knife"],
        correctIndex: 1,
      },
      {
        question: { en: "Traditional sushi apprenticeship often starts with tasks like rice cooking, rather than fish cutting, because:" },
        answers: [
          "Fish is too expensive for beginners",
          "Mastering fundamentals first is central to the shokunin path",
          "It's required by law",
          "Fish cutting isn't taught in Japan",
        ],
        correctIndex: 1,
      },
      {
        question: { en: "The shokunin mindset is best described as:" },
        answers: [
          "A short intensive course",
          "A lifelong pursuit of mastery through repetition and humility",
          "A marketing title",
          "A rank given only to restaurant owners",
        ],
        correctIndex: 1,
      },
      {
        question: { en: "型 (kata) in a craft context refers to:" },
        answers: ["A type of fish", "A fixed form or discipline practiced until mastered", "A restaurant menu", "A payment method"],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 5,
    slug: "understanding-neta-and-shari",
    title: { en: "Understanding Neta and Shari", ja: "ネタとシャリを理解する", vi: "Hiểu về Neta và Shari" },
    difficulty: "beginner",
    primarySkill: "shari",
    description: {
      en: "Learn the two core components of nigiri and why their balance is the true measure of skill.",
      ja: "握り寿司を構成する二つの要素と、その均衡こそが技術の真の指標である理由を学びます。",
      vi: "Tìm hiểu hai thành phần cốt lõi của nigiri và vì sao sự cân bằng giữa chúng là thước đo thực sự của tay nghề.",
    },
    goal: {
      en: "After completing this mission, you will understand neta and shari as an engineered pair, not simply 'fish on rice.'",
      ja: "このミッションを終えると、ネタとシャリが単なる『ご飯の上の魚』ではなく、精密に設計された組み合わせであると理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu neta và shari là một cặp được thiết kế tinh vi, không đơn thuần là 'cá trên cơm.'",
    },
    content: {
      en: `Neta (ネタ) is the topping — fish, shellfish, egg, or anything placed atop the rice. Shari (シャリ) is the vinegared sushi rice beneath it. It's tempting to think nigiri is simply "neta plus shari," but a skilled chef treats it as a single engineered system with several variables that must all agree.

Temperature matters enormously: shari is traditionally served at "hitohada" (人肌) — literally "human skin" temperature, noticeably warmer than the cold neta resting above it — so the contrast wakes up the palate the instant the piece touches your tongue. Texture matters too: each grain of rice should stay distinct rather than mashing into a paste, and the chef incorporates a controlled amount of air into the shape so the whole piece holds together in the hand yet dissolves easily in the mouth.

Then there's balance of flavor — the ratio of vinegar, salt, and sugar in the shari must complement, not clash with or overpower, the specific fish sitting on top of it. A rich, fatty cut like otoro calls for a different rice balance than a delicate white fish like tai.

This is why many veteran Edomae chefs say the rice is the harder skill to master, not the fish: anyone with money can buy excellent tuna, but shari reveals whether a chef truly understands their craft. The full formula worth remembering is: Neta × Shari × Temperature × Timing × Technique — every piece of great nigiri is the product of all five, not any one alone.`,
      ja: `ネタとはご飯の上にのる魚介や卵などの具材、シャリとは酢飯のことです。優れた職人はこの二つを別々のものではなく、一つの精密なシステムとして扱います。シャリは「人肌」と呼ばれる温度で提供され、冷たいネタとの対比で口に入れた瞬間に味覚が目覚めます。酢・塩・砂糖の配合はネタの脂の乗り具合に応じて変えられます。「ネタ×シャリ×温度×タイミング×技術」、この五つの掛け算こそが一貫の握りを完成させます。`,
      vi: `Neta là phần nguyên liệu phủ lên trên — cá, hải sản, trứng — còn shari là cơm giấm bên dưới. Đầu bếp giỏi coi đây là một hệ thống được thiết kế đồng bộ: shari được phục vụ ở nhiệt độ "hitohada" (như thân nhiệt), ấm hơn rõ rệt so với neta lạnh bên trên, tạo sự tương phản đánh thức vị giác. Tỷ lệ giấm, muối, đường trong shari phải hài hòa với độ béo của từng loại cá. Công thức đáng nhớ: Neta × Shari × Nhiệt độ × Thời điểm × Kỹ thuật.`,
    },
    culturalInsight: {
      en: "Old-school Edomae chefs often say the rice is harder to master than the fish — anyone can buy great tuna, but shari reveals a chef's true skill.",
      ja: "昔気質の江戸前職人は、魚よりもシャリの方が習得が難しいとよく言います — 良いマグロは誰でも買えますが、シャリには職人の本当の実力が表れます。",
      vi: "Các đầu bếp Edomae kỳ cựu thường nói cơm khó làm chủ hơn cá — ai cũng có thể mua được cá ngừ ngon, nhưng shari mới bộc lộ tay nghề thật sự của người đầu bếp.",
    },
    chefTip: {
      en: "Serve shari at \"hitohada\" (人肌) temperature — noticeably warmer than the neta — so the contrast wakes up the palate.",
      ja: "シャリはネタよりも明らかに温かい『人肌』の温度で提供し、味覚を目覚めさせましょう。",
      vi: "Phục vụ shari ở nhiệt độ 'hitohada' — ấm hơn rõ rệt so với neta — để tạo sự tương phản đánh thức vị giác.",
    },
    keyTakeaway: {
      en: "A nigiri is not fish ON rice. It is fish AND rice engineered to work as one bite.",
      ja: "握りとはご飯の上に魚をのせたものではなく、魚とご飯が一体となるよう設計された一口である。",
      vi: "Nigiri không phải là cá đặt TRÊN cơm. Đó là cá VÀ cơm được thiết kế để hòa quyện thành một miếng ăn duy nhất.",
    },
    vocabulary: [
      { ja: "ネタ", reading: "ねた", en: "Topping / ingredient", vi: "Nguyên liệu phủ", category: "fish" },
      { ja: "シャリ", reading: "しゃり", en: "Vinegared sushi rice", vi: "Cơm giấm", category: "kitchen" },
      { ja: "人肌", reading: "ひとはだ", en: "Body temperature (of rice)", vi: "Nhiệt độ như thân nhiệt", category: "technique" },
      { ja: "塩梅", reading: "あんばい", en: "Balance / seasoning judgment", vi: "Sự cân bằng, gia giảm", category: "technique" },
      { ja: "一貫", reading: "いっかん", en: "One piece (counter for nigiri)", vi: "Một miếng (đơn vị đếm nigiri)", category: "general" },
    ],
    questions: [
      {
        question: { en: "What does シャリ (shari) refer to?" },
        answers: ["Raw fish", "Vinegared sushi rice", "A type of knife", "The serving tray"],
        correctIndex: 1,
      },
      {
        question: { en: "人肌 (hitohada) describes:" },
        answers: ["A knife-sharpening angle", "Body-temperature warmth, ideal for shari", "A rare fish species", "A quality grade of tuna"],
        correctIndex: 1,
      },
      {
        question: { en: "According to many Edomae chefs, the hardest skill to master in sushi is often:" },
        answers: ["Buying expensive fish", "Cutting garnish", "Making shari (rice) well", "Setting the table"],
        correctIndex: 2,
      },
      {
        question: { en: "一貫 (ikkan) is used to count:" },
        answers: ["Restaurants", "Chefs", "Pieces of nigiri", "Bottles of soy sauce"],
        correctIndex: 2,
      },
    ],
  }),

  buildMission({
    missionNumber: 6,
    slug: "introduction-to-japanese-fish-seasons",
    title: {
      en: "Introduction to Japanese Fish Seasons",
      ja: "魚の旬入門",
      vi: "Giới thiệu về mùa vụ cá Nhật Bản",
    },
    difficulty: "beginner",
    primarySkill: "fish_knowledge",
    description: {
      en: "Discover shun (旬) — the concept of peak seasonality that shapes every serious sushi menu.",
      ja: "本格的な寿司の献立を形作る「旬」という概念を発見します。",
      vi: "Khám phá shun (旬) — khái niệm mùa vụ đỉnh cao định hình mọi thực đơn sushi nghiêm túc.",
    },
    goal: {
      en: "After completing this mission, you will understand why a craftsman-level sushi menu changes with the seasons.",
      ja: "このミッションを終えると、なぜ職人レベルの寿司の献立が季節ごとに変わるのか理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu vì sao thực đơn sushi đẳng cấp nghệ nhân thay đổi theo mùa.",
    },
    content: {
      en: `Shun (旬) refers to the brief window when an ingredient is at its absolute peak — its best possible fat content, texture, and flavor. Outside that window, the very same species of fish still exists, but it tastes noticeably inferior: leaner, blander, less exciting.

Japan's four distinct seasons create real, measurable differences in fish quality throughout the year. Buri (yellowtail) becomes remarkably fatty and rich in winter, earning the special name "kanburi" (寒鰤, winter yellowtail). Katsuo (bonito) actually has two seasonal peaks: "hatsugatsuo" (初鰹), the leaner first catch of early summer prized for its freshness, and "modorigatsuo" (戻り鰹), the fattier return catch of autumn. Kohada is at its best in early autumn; hirame (flounder) is prized in the depths of winter.

Japanese food culture has an entire emotional vocabulary built around this rhythm. "Hashiri" (走り) is the excitement of the very first catch of a new season — a small, celebrated luxury. "Nagori" (名残) is the opposite: the wistful, lingering last taste of something before it disappears until next year. Eating in step with these three phases — hashiri, shun, nagori — is central to Japanese culinary identity, sushi very much included.

A true sushi craftsman doesn't fight the seasons or serve a static, unchanging menu year-round. They build the entire experience around what nature is offering right now.`,
      ja: `「旬」とは食材が最高の脂・食感・風味を持つ短い期間を指します。同じ魚でもその時期を外れると味は明らかに劣ります。鰤は冬に「寒鰤」と呼ばれるほど脂がのり、鰹は初夏の「初鰹」と秋の「戻り鰹」と二度の旬を迎えます。「走り」は季節の初物への期待、「名残」はその季節が終わる名残惜しさを表す言葉です。真の職人は一年中同じ献立を出さず、自然が今何を与えてくれているかを軸に献立を組み立てます。`,
      vi: `Shun (旬) là khoảng thời gian ngắn ngủi khi một nguyên liệu đạt đỉnh cao nhất về độ béo, kết cấu và hương vị. Cá buri trở nên béo ngậy vào mùa đông, được gọi là "kanburi". Cá katsuo có hai đỉnh mùa: "hatsugatsuo" đầu hè và "modorigatsuo" béo hơn vào mùa thu. "Hashiri" là sự háo hức với mẻ đánh bắt đầu mùa, còn "nagori" là sự lưu luyến vị cuối mùa. Một nghệ nhân thực thụ không chống lại mùa vụ mà xây dựng cả thực đơn xoay quanh những gì thiên nhiên đang mang lại.`,
    },
    culturalInsight: {
      en: "Japanese aesthetics prize not just peak season (shun) but the whole emotional arc around it — hashiri (anticipation) and nagori (wistful farewell) — eating in time with nature, not against it.",
      ja: "日本の美意識は旬そのものだけでなく、走りの高揚感や名残の惜別感まで含めた、自然のリズムに寄り添う食文化を大切にします。",
      vi: "Mỹ học Nhật Bản không chỉ coi trọng mùa đỉnh cao (shun) mà cả cung bậc cảm xúc xung quanh nó — hashiri (sự háo hức) và nagori (lời tạm biệt lưu luyến) — ăn uống hòa nhịp với thiên nhiên.",
    },
    chefTip: {
      en: "Ask your fishmonger \"what's at its peak this week\" rather than ordering the same fixed list every time — that single habit will improve your sushi immediately.",
      ja: "毎回同じものを注文するのではなく、魚屋に『今週の旬は何ですか』と尋ねましょう — この習慣だけで寿司の質はすぐに向上します。",
      vi: "Hãy hỏi người bán cá 'tuần này loại nào đang vào mùa đẹp nhất' thay vì luôn đặt hàng một danh sách cố định — chỉ riêng thói quen này sẽ cải thiện sushi của bạn ngay lập tức.",
    },
    keyTakeaway: {
      en: "A great sushi chef doesn't fight the seasons — they build the entire menu around them.",
      ja: "優れた寿司職人は季節に逆らわず、季節を軸に献立全体を組み立てる。",
      vi: "Một đầu bếp sushi giỏi không chống lại mùa vụ — họ xây dựng toàn bộ thực đơn xoay quanh nó.",
    },
    vocabulary: [
      { ja: "旬", reading: "しゅん", en: "Peak season", vi: "Mùa vụ đỉnh cao", category: "fish" },
      { ja: "走り", reading: "はしり", en: "First-of-season catch", vi: "Sản vật đầu mùa", category: "fish" },
      { ja: "名残", reading: "なごり", en: "Last-of-season / lingering", vi: "Cuối mùa, lưu luyến", category: "fish" },
      { ja: "寒鰤", reading: "かんぶり", en: "Winter yellowtail", vi: "Cá buri mùa đông", category: "fish" },
      { ja: "初鰹", reading: "はつがつお", en: "First bonito of the season", vi: "Cá ngừ vằn (katsuo) đầu mùa", category: "fish" },
    ],
    questions: [
      {
        question: { en: "旬 (shun) refers to:" },
        answers: ["A type of soy sauce", "The peak season when an ingredient tastes its best", "A knife-sharpening stone", "A rank of chef"],
        correctIndex: 1,
      },
      {
        question: { en: "\"Kanburi\" (寒鰤) refers to yellowtail caught:" },
        answers: ["In summer", "In winter, at its fattiest", "While farmed", "Only in Okinawa"],
        correctIndex: 1,
      },
      {
        question: { en: "名残 (nagori) describes:" },
        answers: ["The first catch of a season", "The lingering, last taste of a food before it goes out of season", "A type of rice", "A cleaning technique"],
        correctIndex: 1,
      },
      {
        question: { en: "Why does a craftsman-level sushi menu change with the seasons?" },
        answers: [
          "To confuse customers",
          "Because ingredients genuinely taste best only within a specific window",
          "Because of government rules",
          "It doesn't need to change",
        ],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 7,
    slug: "introduction-to-sushi-knives",
    title: { en: "Introduction to Sushi Knives", ja: "寿司包丁入門", vi: "Giới thiệu về dao Sushi" },
    difficulty: "beginner",
    primarySkill: "knife_skills",
    description: {
      en: "Meet the foundational knives every sushi chef relies on, and why single-bevel blades matter.",
      ja: "すべての寿司職人が頼りにする基本的な包丁と、片刃がなぜ重要なのかを学びます。",
      vi: "Làm quen với những con dao nền tảng mà mọi đầu bếp sushi đều dựa vào, và vì sao lưỡi dao mài một mặt lại quan trọng.",
    },
    goal: {
      en: "After completing this mission, you will be able to identify the core sushi knives and explain what each is used for.",
      ja: "このミッションを終えると、主要な寿司包丁を見分け、それぞれの用途を説明できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn có thể nhận biết các loại dao sushi cốt lõi và giải thích công dụng của từng loại.",
    },
    content: {
      en: `Three knives form the foundation of a sushi chef's kit. The deba-bocho (出刃包丁) is a heavy knife with a thick spine, built to break down whole fish — cutting through heads and bones — rather than for delicate slicing. The yanagiba (柳刃包丁) is the opposite: a long, thin blade used to slice sashimi and neta in a single smooth draw-cut, never a sawing motion, producing a clean face on the fish that affects both appearance and texture. For vegetables and general prep, chefs use an usuba (薄刃包丁) or a Western-style gyuto (牛刀).

A defining feature of traditional Japanese knives is that they are single-bevel (片刃, katakiba) — sharpened on one side only, unlike the double-bevel knives common in Western kitchens. This produces a cleaner release from the fish's flesh and a more precise cut, but it demands significantly more skill to sharpen and use correctly; the knife will naturally pull to one side unless the chef compensates with technique.

Sharpening is done exclusively on whetstones (砥石, toishi) — never electric sharpeners, which remove too much material and can't replicate the precise angle a single-bevel edge requires. Many chefs treat their knives almost as an extension of themselves, dedicating a personal cutting board and refusing to let anyone else use their primary yanagiba.`,
      ja: `寿司職人の道具の基本は三つの包丁です。出刃包丁は魚をおろすための重い包丁、柳刃包丁は刺身を一気に引き切りするための細長い包丁、薄刃包丁や牛刀は野菜や下ごしらえに使います。日本の伝統的な包丁は片刃であり、魚の身離れが良く精密な切り口を作れますが、扱いには高い技術が必要です。研ぎは常に砥石で行い、電動シャープナーは使いません。`,
      vi: `Ba con dao tạo nên nền tảng cho bộ dụng cụ của đầu bếp sushi. Dao deba nặng, dùng để chặt cá nguyên con. Dao yanagiba dài, mỏng, dùng để thái sashimi bằng một đường kéo mượt mà. Dao usuba hoặc gyuto kiểu phương Tây dùng cho rau củ và sơ chế chung. Dao Nhật truyền thống được mài một mặt (katakiba), cho vết cắt sạch hơn nhưng đòi hỏi kỹ năng cao hơn. Việc mài dao luôn thực hiện bằng đá mài (toishi), không dùng máy mài điện.`,
    },
    culturalInsight: {
      en: "A chef's knives are treated like an extension of the self — many chefs never let anyone else touch or use their primary yanagiba.",
      ja: "職人の包丁は自分自身の延長のように扱われ、多くの職人は自分の柳刃を他人に触らせません。",
      vi: "Dao của đầu bếp được coi như một phần mở rộng của bản thân — nhiều đầu bếp không bao giờ để người khác chạm vào hay dùng con dao yanagiba chính của mình.",
    },
    chefTip: {
      en: "If you own only one knife to start, master the yanagiba — the single most important tool for slicing sashimi and placing neta cleanly on nigiri.",
      ja: "最初に一本だけ揃えるなら柳刃を選びましょう — 刺身を切りネタを美しく握りにのせるための最も重要な道具です。",
      vi: "Nếu chỉ sở hữu một con dao khi bắt đầu, hãy làm chủ dao yanagiba — công cụ quan trọng nhất để thái sashimi và đặt neta gọn gàng lên nigiri.",
    },
    keyTakeaway: {
      en: "Different cuts of fish demand different knives — the right tool, sharpened correctly, is half the technique.",
      ja: "魚の切り方が違えば必要な包丁も異なる — 正しい道具を正しく研ぐことが技術の半分を占める。",
      vi: "Mỗi kiểu cắt cá đòi hỏi một loại dao khác nhau — dụng cụ đúng, được mài đúng cách, chiếm một nửa kỹ thuật.",
    },
    vocabulary: [
      { ja: "出刃包丁", reading: "でばぼうちょう", en: "Deba knife (heavy fish-breakdown knife)", vi: "Dao Deba", category: "knife" },
      { ja: "柳刃包丁", reading: "やなぎばぼうちょう", en: "Yanagiba knife (long sashimi-slicing knife)", vi: "Dao Yanagiba", category: "knife" },
      { ja: "片刃", reading: "かたば", en: "Single bevel", vi: "Mài một mặt", category: "knife" },
      { ja: "砥石", reading: "といし", en: "Whetstone", vi: "Đá mài", category: "knife" },
      { ja: "研ぐ", reading: "とぐ", en: "To sharpen", vi: "Mài (dao)", category: "knife" },
    ],
    questions: [
      {
        question: { en: "What is a deba-bocho primarily used for?" },
        answers: ["Slicing sashimi thinly", "Breaking down whole fish (heads, bones)", "Cutting vegetables only", "Portioning rice"],
        correctIndex: 1,
      },
      {
        question: { en: "A yanagiba is best described as:" },
        answers: ["A short, thick cleaver", "A long, thin single-bevel knife for sashimi slicing", "A serrated bread knife", "A double-bevel Western chef's knife"],
        correctIndex: 1,
      },
      {
        question: { en: "片刃 (katakiba) means:" },
        answers: ["Double bevel", "Single bevel", "Blunt edge", "Serrated edge"],
        correctIndex: 1,
      },
      {
        question: { en: "Traditional Japanese knife sharpening is done primarily with:" },
        answers: ["An electric sharpener", "A whetstone (砥石)", "Sandpaper", "A machine grinder only"],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 8,
    slug: "introduction-to-shari",
    title: { en: "Introduction to Shari", ja: "シャリ入門", vi: "Giới thiệu về Shari" },
    difficulty: "beginner",
    primarySkill: "shari",
    description: {
      en: "Learn what makes sushi rice fundamentally different from ordinary steamed rice.",
      ja: "寿司飯が普通の炊いたご飯とは根本的に何が違うのかを学びます。",
      vi: "Tìm hiểu điều gì làm cho cơm sushi khác biệt căn bản so với cơm hấp thông thường.",
    },
    goal: {
      en: "After completing this mission, you will understand the process and philosophy behind properly made shari.",
      ja: "このミッションを終えると、正しく作られたシャリの工程と哲学を理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu quy trình và triết lý đằng sau một mẻ shari được làm đúng cách.",
    },
    content: {
      en: `Shari begins with short-grain Japonica rice, washed carefully to remove excess surface starch — gently, since over-scrubbing can crack the grains — then soaked and cooked with a slightly reduced water ratio compared to table rice, since vinegar will be folded in afterward.

While still hot, the rice is spread into a wide wooden tub called a hangiri or handai (飯台・半切), and awasezu (合わせ酢) — a blended seasoning of rice vinegar, salt, and sugar — is poured over it. The chef then works the rice with a cutting-and-folding motion using a flat rice paddle (shamoji), never stirring in circles or mashing, while fanning it (often with a handheld uchiwa) to cool it rapidly to a glossy sheen with every grain remaining distinct.

The exact ratio of vinegar, salt, and sugar is a matter of shop philosophy and region — Edomae-style shari is typically less sweet than the Kansai-style rice used in the Osaka region, for instance — but in every case, the goal is the same: shari should taste balanced and complete on its own, before any fish ever touches it.

The wooden tub isn't a cosmetic choice either — unlike plastic or metal, the wood actually absorbs some of the excess moisture released during mixing, helping the rice reach the right consistency in a way other materials can't replicate.`,
      ja: `シャリはジャポニカ米の短粒米を丁寧に洗い、通常のご飯よりやや少なめの水加減で炊きます。熱いうちに飯台（半切）に広げ、合わせ酢をまわしかけ、しゃもじで切るように混ぜながらうちわで扇いで手早く冷まします。配合は店や地域により異なり、江戸前は関西風より甘さを控えめにする傾向があります。木製の飯台は余分な水分を吸収するため、他の素材では代用できません。`,
      vi: `Shari bắt đầu từ gạo hạt ngắn Japonica, được vo cẩn thận rồi ngâm và nấu với lượng nước ít hơn cơm thường vì sẽ trộn thêm giấm sau đó. Khi cơm còn nóng, được trải ra thùng gỗ hangiri, rưới hỗn hợp giấm-muối-đường (awasezu) rồi trộn bằng động tác cắt-gấp với muỗng xới cơm (shamoji), đồng thời quạt để làm nguội nhanh mà vẫn giữ từng hạt cơm tách rời. Tỷ lệ gia vị tùy theo triết lý từng quán, nhưng mục tiêu chung là shari phải cân bằng và trọn vẹn ngay cả khi chưa có cá.`,
    },
    culturalInsight: {
      en: "The wooden hangiri tub isn't just tradition for its own sake — the wood genuinely absorbs excess moisture as the rice is mixed, something plastic or metal bowls cannot do.",
      ja: "木製の飯台は単なる伝統ではなく、混ぜる際に余分な水分を実際に吸収するため、プラスチックや金属のボウルでは代用できません。",
      vi: "Thùng gỗ hangiri không chỉ là truyền thống thuần túy — gỗ thực sự hấp thụ độ ẩm dư thừa khi trộn cơm, điều mà tô nhựa hay kim loại không làm được.",
    },
    chefTip: {
      en: "Never stir shari in circles — always cut and fold with the flat edge of a rice paddle (shamoji) to avoid crushing the grains.",
      ja: "シャリを円を描くように混ぜてはいけません — しゃもじの平らな面で切るように混ぜ、米粒を潰さないようにしましょう。",
      vi: "Đừng bao giờ khuấy shari theo vòng tròn — luôn cắt và gấp bằng cạnh phẳng của muỗng xới cơm (shamoji) để tránh làm nát hạt cơm.",
    },
    keyTakeaway: {
      en: "Shari is a seasoned ingredient in its own right, not a neutral base — it should taste balanced before any fish touches it.",
      ja: "シャリはただの土台ではなく、それ自体が調味された一つの食材である — 魚が触れる前から味の均衡が取れているべきである。",
      vi: "Shari là một nguyên liệu đã được nêm nếm, không phải nền trung tính — nó cần cân bằng vị ngay cả trước khi có cá chạm vào.",
    },
    vocabulary: [
      { ja: "シャリ", reading: "しゃり", en: "Sushi rice", vi: "Cơm giấm", category: "kitchen" },
      { ja: "合わせ酢", reading: "あわせず", en: "Sushi vinegar blend", vi: "Hỗn hợp giấm sushi", category: "kitchen" },
      { ja: "飯台", reading: "はんだい", en: "Wooden sushi-rice mixing tub", vi: "Thùng gỗ trộn cơm", category: "kitchen" },
      { ja: "うちわ", reading: "うちわ", en: "Fan (for cooling rice)", vi: "Quạt (làm nguội cơm)", category: "kitchen" },
      { ja: "米酢", reading: "こめず", en: "Rice vinegar", vi: "Giấm gạo", category: "kitchen" },
    ],
    questions: [
      {
        question: { en: "合わせ酢 (awasezu) refers to:" },
        answers: ["A type of fish", "The vinegar-salt-sugar blend mixed into sushi rice", "A dipping sauce for tempura", "A rice-cooking pot"],
        correctIndex: 1,
      },
      {
        question: { en: "The wooden tub used to mix and cool sushi rice is called:" },
        answers: ["Yanagiba", "Hangiri (or handai)", "Wasabi-oke", "Shamoji"],
        correctIndex: 1,
      },
      {
        question: { en: "When mixing vinegar into hot rice, chefs use a motion that is:" },
        answers: ["Vigorous stirring in circles", "Gentle cutting and folding, never mashing", "Kneading like dough", "Whisking rapidly"],
        correctIndex: 1,
      },
      {
        question: { en: "Why is a wooden tub traditionally preferred for mixing shari?" },
        answers: ["It looks nicer, that's all", "It absorbs excess moisture as the rice is mixed", "It's cheaper than metal", "It keeps rice frozen"],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 9,
    slug: "introduction-to-nigiri",
    title: { en: "Introduction to Nigiri", ja: "握り入門", vi: "Giới thiệu về Nigiri" },
    difficulty: "beginner",
    primarySkill: "shari",
    description: {
      en: "Understand what nigiri really is — a precise, repeatable hand technique, not just 'fish on rice.'",
      ja: "握りとは何かを理解します — 単なる『ご飯に魚をのせたもの』ではなく、精密で再現性のある手技です。",
      vi: "Hiểu nigiri thực sự là gì — một kỹ thuật tay chính xác, có thể lặp lại, không chỉ là 'cá trên cơm.'",
    },
    goal: {
      en: "After completing this mission, you will understand the hand technique and judgment that defines skilled nigiri-shaping.",
      ja: "このミッションを終えると、熟練した握りの成形を特徴づける手技と判断力を理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu kỹ thuật tay và sự phán đoán định nghĩa nên việc tạo hình nigiri điêu luyện.",
    },
    content: {
      en: `Nigiri (握り) literally means "hand-pressed" — and that name is precise. It refers to the technique of shaping shari into a compact oblong mound and pairing it with neta using a sequence of exact, repeatable hand motions, refined over thousands of repetitions until a chef can shape a consistent piece in about a second.

Several invisible variables are being controlled in that single second. The rice quantity is judged almost entirely by feel, typically somewhere around 15–20 grams depending on house style. A small amount of wasabi is placed between the neta and the shari (unless the guest requests none, or the neta's own preparation is already seasoned). And critically, the chef incorporates just the right amount of air into the shape — enough pressure that the piece holds together when picked up, but not so much that the rice compacts into a dense, sticky block.

This is exactly where beginners struggle. New chefs, fearing the piece will fall apart, almost always over-compress the rice — producing a nigiri that's technically stable but feels heavy and dull in the mouth. The goal is closer to the opposite: apply as little pressure as will still hold the piece together, so that the moment it meets the tongue, the shari collapses instantly and gently, releasing the rice's flavor and temperature all at once.`,
      ja: `握りとは文字通り「手で押して作る」ことを意味します。シャリを俵型に成形し、正確で再現性のある一連の手の動きでネタと合わせる技術です。米の量は感覚で判断され、わさびはネタとシャリの間に少量置かれます。重要なのは空気の含ませ方で、持ち上げても崩れず、口に入れた瞬間にほろりと崩れる絶妙な力加減が求められます。初心者は崩れることを恐れて米を押し固めすぎる傾向がありますが、理想はその逆です。`,
      vi: `Nigiri (握り) nghĩa đen là "ép bằng tay" — và cái tên này rất chính xác. Đó là kỹ thuật tạo hình shari thành khối bầu dục nhỏ gọn và kết hợp với neta bằng một chuỗi động tác tay chính xác, lặp lại hàng nghìn lần đến khi đầu bếp có thể tạo hình một miếng nhất quán chỉ trong khoảng một giây. Lượng cơm được ước lượng gần như hoàn toàn bằng cảm giác, và một lượng wasabi nhỏ được đặt giữa neta và shari. Người mới học thường nén cơm quá chặt vì sợ rời rạc, trong khi mục tiêu thực sự là ngược lại — dùng lực ép tối thiểu vừa đủ để miếng ăn giữ được hình dạng.`,
    },
    culturalInsight: {
      en: "Some Edomae masters can shape a nigiri in a single fluid motion taking barely one second — a physical embodiment of thousands of repetitions, not raw talent.",
      ja: "一部の江戸前の名人は一秒足らずの一連の動作で握りを成形できます — これは才能ではなく、何千回もの反復の結晶です。",
      vi: "Một số bậc thầy Edomae có thể tạo hình một miếng nigiri chỉ trong một giây bằng một chuỗi động tác liền mạch — đó là hiện thân của hàng nghìn lần lặp lại, không phải tài năng bẩm sinh.",
    },
    chefTip: {
      en: "Beginners almost always over-compact the rice out of fear it will fall apart — the goal is the opposite: as little pressure as will still hold the piece together.",
      ja: "初心者は崩れることを恐れてほぼ必ず米を押し固めすぎます — 理想はその逆で、形が保てる最小限の力加減です。",
      vi: "Người mới học hầu như luôn nén cơm quá chặt vì sợ nó rời rạc — mục tiêu thực sự là ngược lại: dùng lực ép tối thiểu vừa đủ để giữ miếng ăn không rời.",
    },
    keyTakeaway: {
      en: "Great nigiri isn't judged only by the fish on top — it's judged by whether the rice falls apart perfectly the moment it meets your tongue.",
      ja: "優れた握りは上の魚だけで判断されるのではなく、口に入れた瞬間にご飯が絶妙にほどけるかどうかで判断される。",
      vi: "Nigiri tuyệt vời không chỉ được đánh giá qua miếng cá bên trên — mà qua việc liệu cơm có tan hoàn hảo ngay khi chạm vào lưỡi hay không.",
    },
    vocabulary: [
      { ja: "握り", reading: "にぎり", en: "Nigiri (hand-pressed sushi)", vi: "Nigiri (sushi nắm tay)", category: "technique" },
      { ja: "わさび", reading: "わさび", en: "Japanese horseradish", vi: "Wasabi", category: "kitchen" },
      { ja: "空気を含ませる", reading: "くうきをふくませる", en: "To incorporate air (into rice)", vi: "Đưa không khí vào (cơm)", category: "technique" },
      { ja: "手返し", reading: "てがえし", en: "Hand-turning motion (shaping technique)", vi: "Động tác lật tay (kỹ thuật tạo hình)", category: "technique" },
      { ja: "押さえる", reading: "おさえる", en: "To press (lightly)", vi: "Ấn nhẹ", category: "technique" },
    ],
    questions: [
      {
        question: { en: "握り (nigiri) literally means:" },
        answers: ["Raw fish", "Hand-pressed", "Rolled", "Deep fried"],
        correctIndex: 1,
      },
      {
        question: { en: "A key sign of skilled nigiri-shaping is:" },
        answers: [
          "Rice packed as densely as possible",
          "The right amount of air so the rice holds shape yet dissolves easily in the mouth",
          "Using as much wasabi as possible",
          "Cooking the rice cold",
        ],
        correctIndex: 1,
      },
      {
        question: { en: "A common mistake beginners make when shaping nigiri is:" },
        answers: ["Adding too little fish", "Over-compacting the rice out of fear it will fall apart", "Using too much vinegar", "Forgetting the neta entirely"],
        correctIndex: 1,
      },
      {
        question: { en: "Wasabi in traditional nigiri is typically placed:" },
        answers: [
          "On top of the neta only, visible to the guest",
          "Between the neta and the shari",
          "Mixed directly into the rice-cooking water",
          "Never used in Edomae sushi",
        ],
        correctIndex: 1,
      },
    ],
  }),

  buildMission({
    missionNumber: 10,
    slug: "the-omakase-philosophy",
    title: { en: "The Omakase Philosophy", ja: "おまかせの哲学", vi: "Triết lý Omakase" },
    difficulty: "beginner",
    primarySkill: "omakase",
    description: {
      en: "Discover what omakase truly asks of a chef — and why it's an act of trust, not just 'no menu.'",
      ja: "おまかせが職人に本当に求めるものとは何か — それが単なる『メニューなし』ではなく信頼の行為である理由を発見します。",
      vi: "Khám phá điều omakase thực sự đòi hỏi ở một đầu bếp — và vì sao đó là một hành động của lòng tin, không chỉ là 'không có thực đơn.'",
    },
    goal: {
      en: "After completing this mission, you will understand omakase as the convergence of every sushi skill, guided by omotenashi.",
      ja: "このミッションを終えると、おまかせがおもてなしに導かれたあらゆる寿司技術の集大成であると理解できます。",
      vi: "Sau khi hoàn thành nhiệm vụ này, bạn sẽ hiểu omakase là sự hội tụ của mọi kỹ năng sushi, được dẫn dắt bởi omotenashi.",
    },
    content: {
      en: `Omakase (お任せ) literally means "I'll leave it up to you." At first glance it looks like a simple absence of choice — the guest doesn't pick items off a menu. But that description misses the point entirely. Omakase is an active act of trust: the guest hands the entire experience over to the chef, and the chef accepts real responsibility for making that trust worthwhile.

A well-run omakase isn't a random sequence of whatever fish happens to be on hand. Chefs deliberately design a flow (流れ, nagare) — typically moving from lighter, more delicate fish toward richer, fattier cuts; managing temperature contrasts between pieces; controlling portion size so the meal builds rather than exhausts the palate; and reading, in real time, how a specific guest is responding.

This is inseparable from omotenashi (おもてなし) — the deeper Japanese concept of hospitality, which is less about scripted politeness and more about anticipating a guest's needs before they're ever voiced. A chef practicing real omotenashi notices when a guest wants quiet, or conversation, or a lighter final course because they're getting full, without being told any of it directly.

Omakase, in other words, is the point where every other skill you're building in this program — fish knowledge, knife work, shari, Edomae technique — converges into a single, live performance created specifically for the person sitting in front of you.`,
      ja: `おまかせとは文字通り「あなたに任せます」という意味です。単にメニューがないということではなく、お客様が体験全体を職人に委ねるという信頼の行為です。優れたおまかせは、あっさりした魚から脂ののった魚へと流れるように構成され、温度やタイミング、量を巧みに調整します。これはおもてなしの精神と切り離せません — 言葉にされる前にお客様のニーズを察する日本の深い接客哲学です。おまかせとは、これまで学んできたすべての技術が一人の客のために収束する瞬間なのです。`,
      vi: `Omakase (お任せ) nghĩa đen là "tôi giao phó cho bạn." Thoạt nhìn có vẻ chỉ là việc không có menu để chọn, nhưng thực chất đó là một hành động chủ động của lòng tin: thực khách giao trọn trải nghiệm cho đầu bếp, và đầu bếp thực sự có trách nhiệm khiến niềm tin đó xứng đáng. Một omakase được thực hiện tốt có trình tự (nagare) rõ ràng — thường đi từ cá thanh nhẹ đến cá béo đậm đà, kiểm soát tương phản nhiệt độ và khẩu phần. Điều này gắn liền với omotenashi — tinh thần hiếu khách sâu sắc của Nhật, đoán biết nhu cầu của khách trước khi họ nói ra. Omakase chính là nơi mọi kỹ năng hội tụ thành một màn trình diễn sống động dành riêng cho vị khách trước mặt.`,
    },
    culturalInsight: {
      en: "In an omakase setting, silence is part of the craft too — a skilled chef reads when a guest wants conversation and when they simply want to savor the food.",
      ja: "おまかせの場では沈黙もまた技の一部です — 熟練した職人は客が会話を求めているか、ただ味わいたいのかを見極めます。",
      vi: "Trong bối cảnh omakase, sự im lặng cũng là một phần của tay nghề — đầu bếp giỏi biết khi nào khách muốn trò chuyện và khi nào chỉ muốn thưởng thức món ăn.",
    },
    chefTip: {
      en: "Even as a student, start practicing 'flow' thinking now: imagine sequencing five pieces of nigiri by fat content alone, lightest to richest, and notice how differently the same fish tastes in a different order.",
      ja: "学生のうちから『流れ』を意識する練習を始めましょう — 五貫の握りを脂の少ない順から多い順へ並べてみると、同じ魚でも順番によって味わいが違って感じられます。",
      vi: "Ngay cả khi còn là học viên, hãy bắt đầu luyện tư duy 'trình tự' ngay bây giờ: hãy thử sắp xếp năm miếng nigiri theo độ béo tăng dần và để ý cách cùng một loại cá lại có vị khác nhau tùy vào thứ tự.",
    },
    keyTakeaway: {
      en: "Omakase is not the absence of a menu — it is the presence of complete trust between guest and craftsman.",
      ja: "おまかせとはメニューがないことではなく、客と職人の間にある完全な信頼の存在である。",
      vi: "Omakase không phải là sự vắng mặt của thực đơn — mà là sự hiện diện của lòng tin trọn vẹn giữa khách và nghệ nhân.",
    },
    vocabulary: [
      { ja: "おまかせ", reading: "おまかせ", en: "\"I'll leave it to you\"", vi: "\"Tôi giao phó cho bạn\"", category: "omakase" },
      { ja: "おもてなし", reading: "おもてなし", en: "Japanese hospitality", vi: "Sự hiếu khách kiểu Nhật", category: "omakase" },
      { ja: "流れ", reading: "ながれ", en: "Flow / sequence (of a meal)", vi: "Trình tự, dòng chảy (của bữa ăn)", category: "omakase" },
      { ja: "気配り", reading: "きくばり", en: "Attentiveness to others", vi: "Sự chu đáo, quan tâm", category: "service" },
      { ja: "カウンター", reading: "かうんたー", en: "Sushi counter", vi: "Quầy sushi", category: "kitchen" },
    ],
    questions: [
      {
        question: { en: "おまかせ (omakase) literally translates to:" },
        answers: ["Chef's special of the day", "\"I'll leave it up to you\"", "All you can eat", "Fixed-price menu"],
        correctIndex: 1,
      },
      {
        question: { en: "おもてなし (omotenashi) refers to:" },
        answers: ["A type of fish", "Japanese hospitality — anticipating needs before they are voiced", "A rice-cooking method", "A knife-maintenance ritual"],
        correctIndex: 1,
      },
      {
        question: { en: "A well-sequenced omakase course typically progresses:" },
        answers: ["Randomly, with no structure", "Deliberately, such as light-to-rich in flavor and fat", "Always starting with dessert", "By price, most expensive first"],
        correctIndex: 1,
      },
      {
        question: { en: "Omakase is best understood as:" },
        answers: [
          "A cheaper alternative to à la carte",
          "The complete convergence of a chef's skills into a live experience for one guest",
          "A tourist gimmick",
          "A style used only outside Japan",
        ],
        correctIndex: 1,
      },
    ],
  }),
];
