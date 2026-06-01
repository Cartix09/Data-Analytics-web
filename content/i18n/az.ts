import type { Dictionary } from "./en";

/**
 * Azerbaijani dictionary.
 *
 * Product / brand tokens (Power BI, SQL, Python, PL-300, DAX, ANLYTICS,
 * Procter & Gamble) stay in their original form.
 *
 * Long-form copy (course curricula, FAQ answers, blog posts, legal pages)
 * is intentionally NOT translated here yet — see README "Internationalization"
 * for the translation roadmap.
 */
export const az: Dictionary = {
  meta: {
    localeName: "Azərbaycan",
    localeShort: "AZ",
  },
  nav: {
    courses: "Kurslar",
    consulting: "Konsaltinq",
    resources: "Resurslar",
    about: "Haqqımızda",
    contact: "Əlaqə",
    studentLogin: "Tələbə girişi",
    bookConsultation: "Konsultasiya yazdır",
    skipToContent: "Əsas məzmuna keç",
  },
  hero: {
    eyebrow: "Data analitikası · Power BI · Konsaltinq",
    h1: "Datanı biznesinizin əslində qərarlara çevirdiyi məlumatlara döndərin.",
    subhead:
      "Komandalar üçün dashboard qururuq, hesabatları avtomatlaşdırırıq və analitika auditləri keçiririk — və o işləri sabah idarə edəcək peşəkarları öyrədirik. Power BI, SQL və Python — praktiklər tərəfindən tədris olunur və təhvil verilir.",
    primaryCta: "Komandamızla işləyin",
    secondaryCta: "Kursları araşdırın",
    microTrust:
      "Alish Niftəliyev tərəfindən idarə olunur — Procter & Gamble-də Senior Data Analitik · PL-300 Təlimatçısı və Mentor.",
  },
  learnHire: {
    b2bEyebrow: "Komandalar üçün · B2B",
    b2bTitle:
      "Dashboard, hesabatlar və analitika — komandanız üçün təhvil verilir.",
    b2bBody:
      "Rəhbərliyin daim ekranda saxladığı dashboardları qururuq, komandanızın Bazar ertəsi günlərini yeyən hesabatları avtomatlaşdırırıq və biz getdikdən sonra bu işi öz öhdəsinə götürəcək analitiklər yetişdiririk.",
    b2bCta: "Komandanız üçün konsultasiya yazdır",
    learnEyebrow: "Peşəkarlar üçün · Öyrən",
    learnTitle: "Komandanızın güvəndiyi analitik olun.",
    learnBody:
      "Power BI, SQL və Python üzrə kohort və müstəqil sürətli proqramlar — dataya ciddi yanaşan şirkətlərdə analitiklərin hər gün gördüyü iş ətrafında qurulub.",
    learnCta: "Bütün kursları gör",
  },
  consultingPreview: {
    eyebrow: "Komandalar üçün · Konsaltinq",
    title:
      "Dashboard, avtomatlaşdırma və təlim — komandanız üçün təhvil verilir.",
    body:
      "Maliyyə, əməliyyat və analitika rəhbərləri üçün hazırlanmış əməkdaşlıqlar — komandanızın etibar edə biləcəyi və sahib çıxa biləcəyi data əsasında qərarlar.",
    seeAll: "Bütün xidmətlərə bax",
    primaryCta: "Komandanız üçün konsultasiya yazdır",
  },
  courseFilters: {
    all: "Hamısı",
    beginner: "Başlanğıc",
    intermediate: "Orta",
    advanced: "Yüksək",
    cohort: "Kohort",
    selfPaced: "Müstəqil",
    forTeams: "Komandalar üçün",
    emptyTitle: "Bu filtrə uyğun proqram hələ yoxdur.",
    emptyBody:
      "Komandanız üçün xüsusi təlim yolu barədə bizimlə danışın — korporativ proqramları sizin real data və iş axınınız ətrafında qururuq.",
    emptyCta: "Konsultasiya yazdır",
  },
  contact: {
    pageTitle: "Komandanızın həll etmək istədiyi məsələni bizə deyin.",
    pageSubtitle:
      "Dashboard qurmağı planlaşdırırsınızsa, dövri hesabatları avtomatlaşdırırsınızsa, analitika komandanızı öyrətmək və ya özünüz üçün düzgün kursu seçmək istəyirsinizsə — eyni qutu hamısını oxuyur. Bir iş günü ərzində cavab veririk.",
    intent: {
      consulting: "Konsaltinq sorğusu",
      corporate: "Korporativ təlim",
      course: "Kurs sualı",
      other: "Digər",
    },
    labels: {
      name: "Ad",
      email: "E-poçt",
      company: "Şirkət",
      message: "Mesaj",
      send: "Mesajı göndər",
      whatAbout: "Mövzu nədir?",
      sla: "Bir iş günü ərzində cavab veririk.",
    },
  },
  studentHub: {
    pageTitle: "ANLYTICS Tələbə Hub-una xoş gəldiniz.",
    pageSubtitle:
      "Tam ANLYTICS portalı qurulan müddət ərzində kurs materialları, canlı seanslar və müvafiq vaxtlar üçün sadə ev. Bu səhifəni əlfəcin edin.",
    classroomHeading: "Kurs materialları və tapşırıqlar.",
    classroomBody:
      "ANLYTICS portalı qurulan müddət ərzində kurs materialları və tapşırıqlar Google Classroom üzərindən paylaşılır.",
    classroomCta: "Google Classroom-u aç",
    teamsHeading: "Həftəlik canlı seanslara qoşulun.",
    teamsBody:
      "Bütün canlı seanslar Microsoft Teams-də keçirilir. Linkləri təqviminizə əlavə edin — yazılar sonradan Google Classroom-da yerləşdirilir.",
    teamsCta: "Teams görüşünə qoşul",
    teamsComingSoon: "Link tezliklə",
    availabilityHeading: "Hansı vaxt boş olduğunuzu bizə deyin.",
    availabilityBody:
      "Bunu əksər tələbələr üçün uyğun olan canlı seans vaxtlarını seçmək üçün istifadə edirik. Realistik olaraq qoşulacağınız hər vaxtı seçin — istənilən vaxt yenidən göndərib yeniləyə bilərsiniz.",
    availabilitySend: "Vaxtları göndər",
    materialsHeading: "Başlamaq və yolda qalmaq üçün hər şey.",
    materialsBody:
      "Cari kohort üçün hazırlanmış resurslar. Yeni materiallar dərslər keçildikcə əlavə olunur.",
    materialsCta: "Materialı aç",
  },
  footer: {
    courses: "Kurslar",
    consulting: "Konsaltinq",
    company: "Şirkət",
    resources: "Resurslar",
    privacy: "Məxfilik",
    terms: "Şərtlər",
    rights: "Bütün hüquqlar qorunur.",
    builtBy: "Mursal Hacıyev və Alish Niftəliyev tərəfindən qurulub.",
    newsletterHeading: "The Analytics Journal",
    newsletterBody:
      "Hər həftə bir praktik təhlil — dashboardlar, DAX, SQL və işdə dayanan hesabat vərdişləri.",
    subscribe: "Abunə ol",
    noSpam: "Spam yoxdur. Bir kliklə abunəlikdən çıx.",
    language: "Dil",
  },
};
