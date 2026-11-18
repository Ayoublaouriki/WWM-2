document.addEventListener("DOMContentLoaded", () => {
  const destination = "https://go.gameroza.com/";
  const bridgeDestination = "https://www.gamertik.com/arknights-endfield-build-a-future-on-talos-ii/";
  const copy = {
    en: { playTitle:"WATCH THE ADVENTURE",playHint:"Click to play",resumeTitle:"CONTINUE WATCHING",retry:"Click again to play",featureCollect:"EXPLORE THE WORLD",featureTeam:"MASTER MARTIAL ARTS",featureBattle:"FIGHT YOUR DESTINY",ctaTitle:"PLAY FREE NOW",ctaSub:"Enter the world of Where Winds Meet",ctaNote:"FREE TO PLAY · ENTER THE ADVENTURE",videoAria:"Where Winds Meet gameplay video",featuresAria:"Game features",playAria:"Play video",resumeAria:"Resume video" },
    fr: { playTitle:"VOIR LE COMBAT",playHint:"Cliquez pour lancer",resumeTitle:"CONTINUER LA VIDÉO",retry:"Cliquez à nouveau",featureCollect:"COLLECTIONNEZ LES CHAMPIONS",featureTeam:"CRÉEZ VOTRE ÉQUIPE",featureBattle:"DOMINEZ EN PvE ET PvP",ctaTitle:"JOUEZ GRATUITEMENT",ctaSub:"Forgez votre équipe ultime",ctaNote:"GRATUIT · ENTREZ DANS TELERIA",videoAria:"Vidéo de gameplay RAID",featuresAria:"Fonctionnalités du jeu",playAria:"Lire la vidéo",resumeAria:"Reprendre la vidéo" },
    es: { playTitle:"MIRA LA BATALLA",playHint:"Haz clic para jugar",resumeTitle:"SEGUIR VIENDO",retry:"Haz clic de nuevo",featureCollect:"REÚNE CAMPEONES",featureTeam:"FORMA TU EQUIPO",featureBattle:"DOMINA PvE Y PvP",ctaTitle:"JUEGA GRATIS AHORA",ctaSub:"Forja tu equipo definitivo",ctaNote:"GRATIS · ENTRA EN TELERIA",videoAria:"Vídeo de juego de RAID",featuresAria:"Características del juego",playAria:"Reproducir vídeo",resumeAria:"Continuar vídeo" },
    de: { playTitle:"SIEH DIR DEN KAMPF AN",playHint:"Zum Abspielen klicken",resumeTitle:"WEITER ANSEHEN",retry:"Noch einmal klicken",featureCollect:"CHAMPIONS SAMMELN",featureTeam:"TEAM AUFBAUEN",featureBattle:"PvE & PvP EROBERN",ctaTitle:"JETZT GRATIS SPIELEN",ctaSub:"Schmiede dein stärkstes Team",ctaNote:"KOSTENLOS · BETRITT TELERIA",videoAria:"RAID Gameplay-Video",featuresAria:"Spielfunktionen",playAria:"Video abspielen",resumeAria:"Video fortsetzen" },
    pt: { playTitle:"ASSISTA À BATALHA",playHint:"Clique para assistir",resumeTitle:"CONTINUAR ASSISTINDO",retry:"Clique novamente",featureCollect:"COLECIONE CAMPEÕES",featureTeam:"MONTE SUA EQUIPE",featureBattle:"DOMINE PvE E PvP",ctaTitle:"JOGUE GRÁTIS AGORA",ctaSub:"Crie sua equipe definitiva",ctaNote:"GRÁTIS · ENTRE EM TELERIA",videoAria:"Vídeo de gameplay de RAID",featuresAria:"Recursos do jogo",playAria:"Reproduzir vídeo",resumeAria:"Continuar vídeo" },
    it: { playTitle:"GUARDA LA BATTAGLIA",playHint:"Clicca per avviare",resumeTitle:"CONTINUA A GUARDARE",retry:"Clicca di nuovo",featureCollect:"COLLEZIONA CAMPIONI",featureTeam:"CREA LA TUA SQUADRA",featureBattle:"DOMINA PvE E PvP",ctaTitle:"GIOCA GRATIS ORA",ctaSub:"Crea la tua squadra definitiva",ctaNote:"GRATIS · ENTRA A TELERIA",videoAria:"Video di gioco RAID",featuresAria:"Funzionalità del gioco",playAria:"Riproduci video",resumeAria:"Riprendi video" },
    ko: { playTitle:"전투 영상 보기",playHint:"클릭하여 재생",resumeTitle:"계속 시청하기",retry:"다시 클릭해 주세요",featureCollect:"챔피언 수집",featureTeam:"최강 팀 구성",featureBattle:"PvE · PvP 정복",ctaTitle:"지금 무료로 시작하기",ctaSub:"나만의 최강 덱을 완성하세요",ctaNote:"무료 플레이 · 지금 텔레리아에 합류하세요",videoAria:"RAID 게임 영상",featuresAria:"게임 특징",playAria:"영상 재생",resumeAria:"영상 계속 재생" },
    ja: { playTitle:"バトル映像を見る",playHint:"クリックして再生",resumeTitle:"続きを見る",retry:"もう一度クリック",featureCollect:"英雄を集める",featureTeam:"最強チームを編成",featureBattle:"PvE・PvPを制覇",ctaTitle:"今すぐ無料でプレイ",ctaSub:"究極のチームを作り上げよう",ctaNote:"基本プレイ無料 · テレリアへ",videoAria:"RAIDゲームプレイ動画",featuresAria:"ゲームの特徴",playAria:"動画を再生",resumeAria:"動画を再開" },
    zh: { playTitle:"观看战斗",playHint:"点击播放",resumeTitle:"继续观看",retry:"再次点击播放",featureCollect:"收集英雄",featureTeam:"打造最强阵容",featureBattle:"征服 PvE 与 PvP",ctaTitle:"立即免费畅玩",ctaSub:"打造你的终极战队",ctaNote:"免费畅玩 · 立即进入泰拉利亚",videoAria:"RAID 游戏视频",featuresAria:"游戏特色",playAria:"播放视频",resumeAria:"继续播放视频" },
    ar: { playTitle:"شاهد المعركة",playHint:"اضغط للتشغيل",resumeTitle:"تابع المشاهدة",retry:"اضغط مرة أخرى",featureCollect:"اجمع الأبطال",featureTeam:"ابنِ فريقك",featureBattle:"اهزم PvE وPvP",ctaTitle:"العب مجاناً الآن",ctaSub:"كوّن فريقك الأقوى",ctaNote:"لعب مجاني · ادخل تيليريا الآن",videoAria:"فيديو أسلوب لعب RAID",featuresAria:"ميزات اللعبة",playAria:"تشغيل الفيديو",resumeAria:"متابعة الفيديو" },
    tr: { playTitle:"SAVAŞI İZLE",playHint:"Oynatmak için tıkla",resumeTitle:"İZLEMEYE DEVAM ET",retry:"Tekrar tıkla",featureCollect:"ŞAMPİYONLARI TOPLA",featureTeam:"TAKIMINI KUR",featureBattle:"PvE VE PvP'Yİ FETHET",ctaTitle:"ŞİMDİ ÜCRETSİZ OYNA",ctaSub:"En güçlü takımını kur",ctaNote:"ÜCRETSİZ · TELERIA'YA GİR",videoAria:"RAID oynanış videosu",featuresAria:"Oyun özellikleri",playAria:"Videoyu oynat",resumeAria:"Videoyu sürdür" },
    ru: { playTitle:"СМОТРЕТЬ БИТВУ",playHint:"Нажмите для запуска",resumeTitle:"ПРОДОЛЖИТЬ ПРОСМОТР",retry:"Нажмите ещё раз",featureCollect:"СОБИРАЙТЕ ГЕРОЕВ",featureTeam:"СОЗДАЙТЕ КОМАНДУ",featureBattle:"ПОКОРИТЕ PvE И PvP",ctaTitle:"ИГРАТЬ БЕСПЛАТНО",ctaSub:"Создайте идеальный отряд",ctaNote:"БЕСПЛАТНО · ВОЙДИТЕ В ТЕЛЕРИЮ",videoAria:"Видео игрового процесса RAID",featuresAria:"Особенности игры",playAria:"Воспроизвести видео",resumeAria:"Продолжить видео" },
    nl: { playTitle:"BEKIJK DE STRIJD",playHint:"Klik om af te spelen",resumeTitle:"VERDER KIJKEN",retry:"Klik opnieuw",featureCollect:"VERZAMEL CHAMPIONS",featureTeam:"BOUW JE TEAM",featureBattle:"VEROVER PvE & PvP",ctaTitle:"SPEEL NU GRATIS",ctaSub:"Smeed je ultieme team",ctaNote:"GRATIS · BETREED TELERIA",videoAria:"RAID gameplayvideo",featuresAria:"Gamefuncties",playAria:"Video afspelen",resumeAria:"Video hervatten" },
    pl: { playTitle:"ZOBACZ BITWĘ",playHint:"Kliknij, aby odtworzyć",resumeTitle:"OGLĄDAJ DALEJ",retry:"Kliknij ponownie",featureCollect:"ZBIERAJ BOHATERÓW",featureTeam:"ZBUDUJ DRUŻYNĘ",featureBattle:"PODBIJ PvE I PvP",ctaTitle:"ZAGRAJ TERAZ ZA DARMO",ctaSub:"Stwórz swoją najlepszą drużynę",ctaNote:"ZA DARMO · WEJDŹ DO TELERII",videoAria:"Film z rozgrywki RAID",featuresAria:"Funkcje gry",playAria:"Odtwórz film",resumeAria:"Wznów film" },
    id: { playTitle:"TONTON PERTEMPURAN",playHint:"Klik untuk memutar",resumeTitle:"LANJUTKAN MENONTON",retry:"Klik sekali lagi",featureCollect:"KUMPULKAN CHAMPION",featureTeam:"BANGUN TIMMU",featureBattle:"TAKLUKKAN PvE & PvP",ctaTitle:"MAIN GRATIS SEKARANG",ctaSub:"Bentuk tim terkuatmu",ctaNote:"GRATIS · MASUKI TELERIA",videoAria:"Video gameplay RAID",featuresAria:"Fitur game",playAria:"Putar video",resumeAria:"Lanjutkan video" },
    vi: { playTitle:"XEM TRẬN CHIẾN",playHint:"Nhấn để phát",resumeTitle:"TIẾP TỤC XEM",retry:"Nhấn lại để phát",featureCollect:"THU THẬP TƯỚNG",featureTeam:"XÂY DỰNG ĐỘI HÌNH",featureBattle:"CHINH PHỤC PvE & PvP",ctaTitle:"CHƠI MIỄN PHÍ NGAY",ctaSub:"Tạo nên đội hình tối thượng",ctaNote:"MIỄN PHÍ · TIẾN VÀO TELERIA",videoAria:"Video lối chơi RAID",featuresAria:"Tính năng trò chơi",playAria:"Phát video",resumeAria:"Tiếp tục video" },
    th: { playTitle:"ชมการต่อสู้",playHint:"คลิกเพื่อเล่น",resumeTitle:"ดูต่อ",retry:"คลิกอีกครั้ง",featureCollect:"รวบรวมแชมเปียน",featureTeam:"สร้างทีมของคุณ",featureBattle:"พิชิต PvE และ PvP",ctaTitle:"เล่นฟรีตอนนี้",ctaSub:"สร้างทีมที่แข็งแกร่งที่สุด",ctaNote:"เล่นฟรี · เข้าสู่เทเลเรีย",videoAria:"วิดีโอเกมเพลย์ RAID",featuresAria:"คุณสมบัติเกม",playAria:"เล่นวิดีโอ",resumeAria:"เล่นวิดีโอต่อ" }
  };

  const requested = new URLSearchParams(location.search).get("lang");
  const candidates = [requested, ...(navigator.languages || []), navigator.language].filter(Boolean);
  const locale = candidates.map(value => value.toLowerCase().split("-")[0]).find(code => copy[code]) || "en";
  const t = copy[locale];
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = t[element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.setAttribute("aria-label", t[element.dataset.i18nAria]); });

  const video = document.querySelector("#wwm-video");
  const trigger = document.querySelector("#video-trigger");
  const cta = document.querySelector("#cta");
  const swipeRange = document.querySelector("#swipe-cta-range");
  const swipeLabel = document.querySelector("#swipe-cta-label");
  const swipeCta = document.querySelector("#swipe-cta");
  const popupCta = document.querySelector("#popup-cta");
  // Preserve PropellerAds tracking values when the visitor follows the offer.
  // `lang` is only a local copy override and is intentionally not sent downstream.
  const offerUrl = new URL(destination);
  new URLSearchParams(window.location.search).forEach((value, key) => {
    if (key !== "lang") offerUrl.searchParams.set(key, value);
  });
  const queryParams = new URLSearchParams(window.location.search);
  const sub1 = queryParams.get("sub1") || queryParams.get("subid") || queryParams.get("click_id") || sessionStorage.getItem("kuma_click_id");
  if (sub1) offerUrl.searchParams.set("sub1", sub1);
  const trackerUrl = new URL("https://trk.gameroza.com/lp/click.php");
  if (queryParams.get("click_id")) trackerUrl.searchParams.set("click_id", queryParams.get("click_id"));
  if (sub1) trackerUrl.searchParams.set("sub1", sub1);
  cta.href = offerUrl.toString();
  const captchaBackdrop = document.querySelector("#captcha-backdrop");
  const captchaClose = document.querySelector("#captcha-close");
  captchaClose.addEventListener("click", () => {
    captchaBackdrop.hidden = true;
  });
  let swipeCompleted = false;
  const continueFromSwipe = () => {
    if (swipeCompleted) return;
    swipeCompleted = true;
    swipeRange.disabled = true;
    swipeCta.classList.add("is-verified");
    swipeCta.hidden = false;
    popupCta.classList.remove("is-disabled");
    popupCta.classList.add("is-ready");
  };
  const launchOffer = () => {
    window.open((queryParams.get("click_id") ? trackerUrl : offerUrl).toString(), "_blank", "noopener,noreferrer");
    window.setTimeout(() => window.location.assign(bridgeDestination), 80);
  };
  swipeRange.addEventListener("input", () => {
    const value = Number(swipeRange.value);
    swipeRange.parentElement.style.setProperty("--swipe-progress", `${value}%`);
    if (value >= 98) continueFromSwipe();
  });
  cta.addEventListener("click", event => {
    event.preventDefault();
    swipeCompleted = false;
    swipeRange.disabled = false;
    swipeRange.value = 0;
    swipeCta.style.setProperty("--swipe-progress", "0%");
    swipeCta.classList.remove("is-verified");
    swipeCta.hidden = false;
    swipeCta.classList.add("is-visible");
    popupCta.classList.add("is-disabled");
    popupCta.classList.remove("is-ready");
    captchaBackdrop.hidden = false;
    swipeRange.focus();
  });
  popupCta.addEventListener("click", event => {
    event.preventDefault();
    if (popupCta.classList.contains("is-disabled")) return;
    launchOffer();
  });
  video.muted = true;
  video.loop = true;
  video.currentTime = 0;

  const showPlayControl = () => {
    const resumed = video.currentTime > 0;
    document.body.classList.remove("is-video-playing");
    trigger.classList.remove("is-hidden");
    trigger.querySelector("strong").textContent = resumed ? t.resumeTitle : t.playTitle;
    trigger.querySelector("small").textContent = t.playHint;
    trigger.setAttribute("aria-label", resumed ? t.resumeAria : t.playAria);
  };

  const playVideo = async () => {
    try {
      await video.play();
      document.body.classList.add("is-video-playing");
      trigger.classList.add("is-hidden");
    } catch (error) {
      showPlayControl();
      trigger.querySelector("small").textContent = t.retry;
    }
  };

  video.play().then(() => {
    document.body.classList.add("is-video-playing");
    trigger.classList.add("is-hidden");
  }).catch(() => showPlayControl());

  trigger.addEventListener("click", playVideo);
  video.addEventListener("click", () => {
    if (video.paused) playVideo();
    else { video.pause(); showPlayControl(); }
  });
  video.addEventListener("pause", () => { if (!video.ended) showPlayControl(); });
});

