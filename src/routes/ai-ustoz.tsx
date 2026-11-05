import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, useId } from "react";
import {
  ArrowLeft,
  Bot,
  Send,
  Volume2,
  RotateCcw,
  Sparkles,
  Globe,
  Mic,
  MicOff,
  Languages,
  User,
  Check,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/logo.png";
import teacher from "@/assets/teacher.png";

export const Route = createFileRoute("/ai-ustoz")({
  head: () => ({
    meta: [
      { title: "AI Ustoz — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "9 ta xorijiy tilda jonli suhbat, audio talaffuz va grammatika o‘rganish bo‘yicha shaxsiy AI ustozingiz.",
      },
    ],
  }),
  component: AIUstozPage,
});

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  translation?: string;
  language: string;
  locale: string;
  timestamp: string;
}

const supportedLangs = [
  { id: "ingliz", name: "Ingliz tili", native: "English", code: "gb", locale: "en-US" },
  { id: "rus", name: "Rus tili", native: "Русский", code: "ru", locale: "ru-RU" },
  { id: "koreys", name: "Koreys tili", native: "한국어", code: "kr", locale: "ko-KR" },
  { id: "nemis", name: "Nemis tili", native: "Deutsch", code: "de", locale: "de-DE" },
  { id: "turk", name: "Turk tili", native: "Türkçe", code: "tr", locale: "tr-TR" },
  { id: "fransuz", name: "Fransuz tili", native: "Français", code: "fr", locale: "fr-FR" },
  { id: "arab", name: "Arab tili", native: "العربية", code: "sa", locale: "ar-SA" },
  { id: "xitoy", name: "Xitoy tili", native: "中文", code: "cn", locale: "zh-CN" },
  { id: "yapon", name: "Yapon tili", native: "日本語", code: "jp", locale: "ja-JP" },
];

const initialGreetings: Record<string, { text: string; translation: string }> = {
  ingliz: {
    text: "Hello! I am your AI English Teacher at Navoi School No. 8. How can I help you today? Would you like to practice speaking, learn new words, or check grammar?",
    translation:
      "Salom! Men Navoiy 8-maktabning shaxsiy ingliz tili AI ustozingizman. Bugun sizga qanday yordam bera olaman? Suhbatlashamizmi, yangi so‘zlar o‘rganamizmi yoki grammatikani tekshiramizmi?",
  },
  rus: {
    text: "Здравствуйте! Я ваш ИИ-учитель русского языка школы №8 города Навои. О чём бы вы хотели поговорить сегодня?",
    translation:
      "Assalomu alaykum! Men Navoiy shahridagi 8-maktabning rus tili bo‘yicha AI ustozingizman. Bugun nimalar haqida suhbatlashamiz?",
  },
  koreys: {
    text: "안녕하세요! 저는 나보이 8번 학교의 AI 한국어 선생님입니다. 오늘 어떤 한국어 표현을 배우고 싶으세요?",
    translation:
      "Assalomu alaykum! Men Navoiy 8-maktabning AI koreys tili ustozingizman. Bugun qaysi iboralarni o‘rganishni istaysiz?",
  },
  nemis: {
    text: "Hallo! Ich bin dein KI-Deutschlehrer an der Schule Nr. 8 in Nawai. Was möchtest du heute auf Deutsch üben?",
    translation:
      "Salom! Men Navoiy 8-maktabning nemis tili AI ustozingizman. Bugun nemis tilida nimalarni mashq qilmoqchisiz?",
  },
  turk: {
    text: "Merhaba! Ben Navoiy 8 numaralı okulun yapay zeka Türkçe öğretmeniyim. Bugün birlikte Türkçe konuşma pratiği yapalım mı?",
    translation:
      "Salom! Men Navoiy 8-maktabning turk tili AI ustozingizman. Bugun birgalikda turkcha so‘zlashuv amaliyotini o‘tkazamizmi?",
  },
  fransuz: {
    text: "Bonjour! Je suis votre professeur d'IA de français à l'école n°8 de Navoï. Prêt à pratiquer le français aujourd'hui?",
    translation:
      "Salom! Men Navoiy 8-maktabning fransuz tili AI ustozingizman. Bugun fransuz tilida suhbatga tayyormisiz?",
  },
  arab: {
    text: "السلام عليكم ورحمة الله! أنا معلم الذكاء الاصطناعي للغة العربية في المدرسة رقم 8 بنافوي. كيف يمكنني مساعدتك اليوم؟",
    translation:
      "Assalomu alaykum va rahmatulloh! Men Navoiy 8-maktabning arab tili AI ustozingizman. Bugun sizga qanday yordam bera olaman?",
  },
  xitoy: {
    text: "你好！我是纳沃伊第8学校的AI中文老师。你今天想学习什么中文内容呢？",
    translation:
      "Salom! Men Navoiy 8-maktabning xitoy tili AI ustozingizman. Bugun qaysi xitoycha mavzuni o‘rganmoqchisiz?",
  },
  yapon: {
    text: "こんにちは！ナボイ第8学校のAI日本語の先生です。今日はどんな日本語を練習しましょうか？",
    translation:
      "Salom! Men Navoiy 8-maktabning yapon tili AI ustozingizman. Bugun qaysi yaponcha iboralarni mashq qilamiz?",
  },
};

const topicPrompts: Record<string, string[]> = {
  ingliz: [
    "Tell me 5 useful words for school",
    "How do I introduce myself in an interview?",
    "Can we practice a daily conversation?",
    "Explain the difference between 'am/is/are'",
  ],
  rus: [
    "Объясните мужской и женский род",
    "Давайте поговорим о школьной жизни",
    "5 полезных фраз для вежливого общения",
    "Как правильно сказать комплимент?",
  ],
  koreys: [
    "한국어로 자기소개 하는 방법 알려주세요",
    "학교에서 자주 쓰는 단어 5개",
    "안녕하세요와 안녕의 차이점은 무엇인가요?",
    "감사 표현을 더 배우고 싶어요",
  ],
  nemis: [
    "Wie stelle ich mich auf Deutsch vor?",
    "Erkläre die Artikel der, die, das",
    "5 wichtige Wörter für die Schule",
    "Lass uns ein kurzes Gespräch führen",
  ],
  turk: [
    "Kendimi Türkçe nasıl tanıtabilirim?",
    "Okulda en çok kullanılan 5 kelime",
    "Nasılsın ve nasılsınız farkı nedir?",
    "Günlük konuşma pratiği yapalım",
  ],
  fransuz: [
    "Comment se présenter en français?",
    "5 mots indispensables pour l'école",
    "Expliquez la formule de politesse",
    "Pratiquons une conversation simple",
  ],
  arab: [
    "كيف أقدم نفسي باللغة العربية؟",
    "5 كلمات شائعة في المدرسة",
    "ما هي الحركات الأساسية في القراءة؟",
    "عبارات التحية والترحيب",
  ],
  xitoy: [
    "如何用中文做自我介绍？",
    "学校中最常用的5个中文词语",
    "声调发音的技巧是什么？",
    "我们来进行日常简单对话吧",
  ],
  yapon: [
    "日本語で自己紹介の仕方を教えてください",
    "学校でよく使う5つの単語",
    "「です」と「ます」の使い方",
    "日常会話の練習をしましょう",
  ],
};

function generateAIResponse(userText: string, langId: string) {
  const lower = userText.toLowerCase();

  if (langId === "ingliz") {
    if (lower.includes("word") || lower.includes("so'z") || lower.includes("vocabulary")) {
      return {
        text: "Here are 5 useful English words for students: 1. Diligent (Tirishqoq), 2. Achievement (Yutuq), 3. Opportunity (Imkoniyat), 4. Curiosity (Qiziquvchanlik), 5. Success (Muvaffaqiyat). Try using 'diligent' in a sentence!",
        translation:
          "Mana o‘quvchilar uchun 5 ta foydali so‘z: 1. Diligent (Tirishqoq), 2. Achievement (Yutuq), 3. Opportunity (Imkoniyat), 4. Curiosity (Qiziquvchanlik), 5. Success (Muvaffaqiyat). 'Diligent' so‘zini gapda ishlatib ko‘ring!",
      };
    }
    if (lower.includes("introduce") || lower.includes("tanishuv") || lower.includes("name")) {
      return {
        text: "To introduce yourself, say: 'Hello! My name is [Your name]. I am a student at School No. 8 in Navoi. I enjoy learning foreign languages!' What is your favorite hobby?",
        translation:
          "O‘zingizni tanishtirish uchun ayting: 'Hello! My name is [Ismingiz]. I am a student at School No. 8 in Navoi. I enjoy learning foreign languages!' Yoqtirgan mashg‘ulotingiz qanday?",
      };
    }
    if (lower.includes("grammar") || lower.includes("qoida") || lower.includes("to be")) {
      return {
        text: "Great question! 'To be' has three present forms: 'am' (used with I), 'is' (used with He, She, It), and 'are' (used with You, We, They). For example: 'I am ready', 'She is smart', 'We are students'.",
        translation:
          "Ajoyib savol! 'To be' fe'lining hozirgi zamonda uch shakli bor: 'am' (I bilan), 'is' (He, She, It bilan) va 'are' (You, We, They bilan). Masalan: 'I am ready', 'She is smart', 'We are students'.",
      };
    }
    return {
      text: `That is an excellent point! You said: "${userText}". To sound even more natural in English, remember to keep practicing full sentences. How was your school day today?`,
      translation: `Ajoyib fikr! Siz "${userText}" dedingiz. Ingliz tilida yanada tabiiy gapirish uchun to‘liq jumlalar tuzishda davom eting. Bugun maktabdagi kuningiz qanday o‘tdi?`,
    };
  }

  if (langId === "rus") {
    if (lower.includes("род") || lower.includes("jins") || lower.includes("grammatika")) {
      return {
        text: "В русском языке 3 рода: Мужской (он: стол, учитель), Женский (она: школа, книга) и Средний (оно: окно, задание). Запомните: слова на -а/-я обычно женского рода!",
        translation:
          "Rus tilida 3 ta rod bor: Erkak (Мужской: stol, o'qituvchi), Ayol (Женский: maktab, kitob) va O'rta (Средний: deraza, vazifa). Eslab qoling: -a/-ya bilan tugaydigan so'zlar odatda ayol jinsiga mansub!",
      };
    }
    return {
      text: `Прекрасно! Вы написали: "${userText}". Практикуйте русскую речь каждый день — это сделает ваш словарный запас богаче. Что нового вы узнали на уроках в школе №8?`,
      translation: `Ajoyib! Siz shunday yozdingiz: "${userText}". Ruscha nutqni har kuni mashq qiling — bu so'z boyligingizni oshiradi. 8-maktabdagi darslarda nimalarni o‘rgandingiz?`,
    };
  }

  if (langId === "koreys") {
    if (lower.includes("자기소개") || lower.includes("tanishuv") || lower.includes("ism")) {
      return {
        text: "한국어로 자기소개는 이렇게 합니다: '안녕하세요! 제 이름은 [이름]입니다. 나보이 8번 학교 학생입니다. 만나서 반갑습니다!' 한번 직접 해보세요!",
        translation:
          "Koreyscha tanishuv bunday aytiladi: '안녕하세요! 제 이름은 [Ismingiz]입니다. 나보이 8번 학교 학생입니다. 만나서 반갑습니다!' (Assalomu alaykum! Mening ismim... Men Navoiy 8-maktab o‘quvchisiman. Tanishganimdan xursandman!) Qani, o‘zingiz aytib ko‘ring-chi!",
      };
    }
    return {
      text: `아주 잘했어요! "${userText}"라고 말씀하셨네요. 한국어 문장은 어순이 우리말과 같아서 연습할수록 쉬워집니다. 다음 질문이 있으신가요?`,
      translation: `Juda ajoyib! "${userText}" dedingiz. Koreys tili so‘z tartibi o‘zbek tiliga juda o‘xshash bo‘lgani uchun mashq qilgan sari osonlashadi. Yana savollaringiz bormi?`,
    };
  }

  if (langId === "turk") {
    return {
      text: `Harika bir soru! "${userText}" dediniz. Türkçe öğrenirken Türkçenin ses uyumuna dikkat edin. 8 numaralı okulda bugün neler öğrendiniz?`,
      translation: `Ajoyib savol! "${userText}" dedingiz. Turk tilini o‘rganganda tovushlar uyg‘unligiga e'tibor bering. 8-maktabda bugun nimalarni o‘rgandingiz?`,
    };
  }

  if (langId === "nemis") {
    return {
      text: `Sehr gut! Du hast geschrieben: "${userText}". Deutsch lernen macht Spaß, wenn man regelmäßig neue Nomen mit Artikeln lernt. Möchtest du eine neue Übung machen?`,
      translation: `Juda yaxshi! Siz shunday yozdingiz: "${userText}". Otlarni artikli bilan birga muntazam o'rgansangiz, nemis tili juda qiziqarli bo'ladi. Yangi mashq bajaramizmi?`,
    };
  }

  if (langId === "fransuz") {
    return {
      text: `Très bien! Vous avez dit: "${userText}". La langue française est très belle et élégante. Avez-vous des questions sur la prononciation ou le vocabulaire?`,
      translation: `Juda yaxshi! Siz shunday dedingiz: "${userText}". Fransuz tili juda nafis va go'zal tildir. Talaffuz yoki so'z boyligi bo'yicha savollaringiz bormi?`,
    };
  }

  if (langId === "arab") {
    return {
      text: `أحسنت! كتبت: "${userText}". اللغة العربية لغة عظيمة وغنية بالمعاني. هل تريد أن نتعلم كلمات جديدة اليوم؟`,
      translation: `Barakalla! Siz shunday yozdingiz: "${userText}". Arab tili buyuk va ma'nolarga boy tildir. Bugun yangi so‘zlarni o‘rganishni istaysizmi?`,
    };
  }

  if (langId === "xitoy") {
    return {
      text: `非常好！你说得很好： "${userText}"。学习中文要注意声调和汉字的结构。你今天想练习汉字还是发音？`,
      translation: `Juda ajoyib! Siz juda yaxshi aytdingiz: "${userText}". Xitoy tilini o‘rganganda ohang va iyerogliflar tuzilishiga e'tibor qarating. Bugun iyerogliflarni mashq qilamizmi yoki talaffuznimi?`,
    };
  }

  if (langId === "yapon") {
    return {
      text: `素晴らしいですね！「${userText}」ですね。日本語は丁寧な表現がたくさんあります。学校で使える簡単な挨拶を練習しましょうか？`,
      translation: `Ajoyib! "${userText}" dedingiz. Yapon tilida xushmuomala iboralar juda ko'p. Maktabda ishlatiladigan oddiy salomlashuvlarni mashq qilamizmi?`,
    };
  }

  return {
    text: `Very good! I received your message: "${userText}". Keep practicing, consistency is the key to mastering any language!`,
    translation: `Juda yaxshi! Xabaringizni qabul qildim: "${userText}". Mashg‘ulotlarni davom ettiring, muntazamlik har qanday tilni o‘rganishning kalitidir!`,
  };
}

export function AIUstozPage() {
  const [selectedLangId, setSelectedLangId] = useState("ingliz");
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [showTranslations, setShowTranslations] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const searchInputId = useId();

  const currentLang = supportedLangs.find((l) => l.id === selectedLangId) || supportedLangs[0]!;

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const init = initialGreetings["ingliz"]!;
    return [
      {
        id: "msg-0",
        sender: "ai",
        text: init.text,
        translation: init.translation,
        language: "ingliz",
        locale: "en-US",
        timestamp: "Hozir",
      },
    ];
  });

  // Switch greeting when language changes
  const handleLanguageChange = (langId: string) => {
    setSelectedLangId(langId);
    const langObj = supportedLangs.find((l) => l.id === langId) || supportedLangs[0]!;
    const greeting = initialGreetings[langId] || initialGreetings["ingliz"]!;

    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: "ai",
        text: greeting.text,
        translation: greeting.translation,
        language: langId,
        locale: langObj.locale,
        timestamp: "Hozir",
      },
    ]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const playVoice = (text: string, locale: string, msgId: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    if (speakingId === msgId) {
      setSpeakingId(null);
      return;
    }

    setSpeakingId(msgId);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = locale;
    utterance.rate = 0.9;

    const voices = window.speechSynthesis.getVoices();
    const match = voices.find((v) =>
      v.lang.toLowerCase().startsWith(locale.slice(0, 2).toLowerCase()),
    );
    if (match) utterance.voice = match;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend ?? inputText).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      language: selectedLangId,
      locale: currentLang.locale,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");

    // Simulate AI response
    setTimeout(() => {
      const response = generateAIResponse(text, selectedLangId);
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.text,
        translation: response.translation,
        language: selectedLangId,
        locale: currentLang.locale,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 450);
  };

  const toggleMic = () => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as unknown as { SpeechRecognition?: typeof window.SpeechRecognition })
        .SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: typeof window.SpeechRecognition })
        .webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Sizning brauzeringiz ovozli kiritishni (Speech Recognition) qo‘llab-quvvatlamaydi.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = currentLang.locale;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0]?.[0]?.transcript;
        if (transcript) {
          setInputText(transcript);
        }
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const handleResetChat = () => {
    handleLanguageChange(selectedLangId);
  };

  const quickPrompts = topicPrompts[selectedLangId] || topicPrompts["ingliz"]!;

  return (
    <div className="flex h-screen flex-col bg-app font-sans text-ink">
      {/* Top Header */}
      <header className="sticky top-0 z-30 shrink-0 border-b border-border bg-background/90 backdrop-blur-md px-4 sm:px-8 py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Bosh sahifa</span>
            </Link>

            <Link
              to="/tillar"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-indigo-600" />
              <span>9 ta Tillar</span>
            </Link>

            <div className="h-4 w-px bg-border mx-1 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={teacher}
                  alt="AI Ustoz"
                  className="h-10 w-10 rounded-full border border-indigo-200 bg-indigo-50 object-cover shadow-sm"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base font-extrabold flex items-center gap-1.5 text-foreground leading-tight">
                  <Bot className="h-4 w-4 text-indigo-600" />
                  AI Ustoz — Jonli Suhbat
                </h1>
                <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                  Navoiy shahar 8-maktab shaxsiy til tyutori
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTranslations(!showTranslations)}
              className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-semibold border transition cursor-pointer ${
                showTranslations
                  ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                  : "bg-card border-border text-muted-foreground"
              }`}
              title="O‘zbekcha tarjimalarni yoqish/o‘chirish"
            >
              <Languages className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Tarjimalar</span>
              <span className="text-[10px] font-bold">{showTranslations ? "ON" : "OFF"}</span>
            </button>

            <button
              onClick={handleResetChat}
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card hover:bg-accent px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition cursor-pointer"
              title="Suhbatni tozalash"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Tozalash</span>
            </button>
          </div>
        </div>
      </header>

      {/* Language Selector Ribbon */}
      <div className="shrink-0 border-b border-border bg-muted/40 px-4 py-2">
        <div className="mx-auto flex max-w-6xl items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 pr-1 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-indigo-600" /> Tilni tanlang:
          </span>
          {supportedLangs.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLanguageChange(item.id)}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                item.id === selectedLangId
                  ? "bg-indigo-600 text-white shadow-sm scale-102"
                  : "bg-card hover:bg-accent text-foreground border border-border/80"
              }`}
            >
              <img
                src={`https://flagcdn.com/w40/${item.code}.png`}
                alt=""
                className="h-3.5 w-5 rounded-xs object-cover"
              />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Conversation Area */}
      <main className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
        <div className="mx-auto max-w-4xl space-y-4">
          {/* Welcome banner */}
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-xs text-indigo-950 flex items-start gap-3 shadow-xs">
            <img src={logo} alt="Logo" className="h-8 w-8 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                Xush kelibsiz! Siz hozir {currentLang.name} muhitidasiz.
              </span>
              <p className="mt-0.5 text-indigo-800/90 leading-relaxed">
                Istalgan savolingizni yozing, audio talaffuzini tinglang va nutqingizni
                rivojlantiring. AI Ustoz grammatikani tuzatishga va yangi so‘zlarni o‘rgatishga
                yordam beradi.
              </p>
            </div>
          </div>

          {/* Messages List */}
          {messages.map((msg) => {
            const isAI = msg.sender === "ai";
            const isSpeaking = speakingId === msg.id;

            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isAI ? "items-start" : "items-start flex-row-reverse"}`}
              >
                {/* Avatar */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl shadow-xs ${
                    isAI ? "bg-indigo-600 text-white" : "bg-slate-700 text-white"
                  }`}
                >
                  {isAI ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 shadow-sm transition ${
                    isAI
                      ? "border border-border bg-card text-foreground"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span
                      className={`text-[11px] font-bold ${
                        isAI ? "text-indigo-600" : "text-indigo-200"
                      }`}
                    >
                      {isAI ? "AI Ustoz" : "Siz"}
                    </span>
                    <span
                      className={`text-[10px] ${
                        isAI ? "text-muted-foreground" : "text-indigo-200"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Main text */}
                  <p className="text-sm sm:text-base leading-relaxed tracking-tight whitespace-pre-wrap font-medium">
                    {msg.text}
                  </p>

                  {/* Optional Uzbek translation */}
                  {isAI && msg.translation && showTranslations && (
                    <div className="mt-2.5 rounded-xl bg-muted/60 border border-border/70 p-2.5 text-xs text-muted-foreground leading-relaxed">
                      <span className="font-bold text-indigo-700 block mb-0.5">
                        O‘zbekcha tarjimasi:
                      </span>
                      {msg.translation}
                    </div>
                  )}

                  {/* Actions for AI message (Audio Speech) */}
                  {isAI && (
                    <div className="mt-3 flex items-center gap-2 pt-2 border-t border-border/50">
                      <button
                        onClick={() => playVoice(msg.text, msg.locale, msg.id)}
                        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold transition cursor-pointer ${
                          isSpeaking
                            ? "bg-indigo-600 text-white animate-pulse"
                            : "bg-indigo-50 hover:bg-indigo-100 text-indigo-600"
                        }`}
                        title="Talaffuzni tinglash"
                      >
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>{isSpeaking ? "O‘qilmoqda..." : "Tinglash"}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Suggested Quick Prompt Chips */}
      <div className="shrink-0 bg-background/80 border-t border-border px-4 py-2">
        <div className="mx-auto flex max-w-4xl items-center gap-2 overflow-x-auto scrollbar-none py-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground shrink-0 pr-1">
            Mavzular:
          </span>
          {quickPrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="flex items-center gap-1 rounded-xl bg-card border border-border hover:border-indigo-400 hover:bg-indigo-50/50 px-3 py-1.5 text-xs font-semibold text-foreground transition whitespace-nowrap shadow-xs cursor-pointer"
            >
              <span>{prompt}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Message Input Bar */}
      <footer className="shrink-0 border-t border-border bg-background p-3 sm:p-4">
        <div className="mx-auto flex max-w-4xl items-center gap-2">
          <button
            onClick={toggleMic}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition shadow-sm cursor-pointer ${
              isListening
                ? "bg-red-600 text-white border-red-500 animate-pulse ring-2 ring-red-400"
                : "border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
            title={isListening ? "Tinglash to‘xtatish" : "Ovozli kiritish (Mikrofon)"}
          >
            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={`${currentLang.name}da xabar yoki savol yozing...`}
              className="w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md transition hover:bg-indigo-500 disabled:opacity-40 cursor-pointer"
            title="Yuborish"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}
