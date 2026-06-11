const nav = document.querySelector(".main-nav");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links a");

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

if (heroSlides.length > 1 && heroDots.length === heroSlides.length) {
  let activeSlide = 0;
  let carouselTimer;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const showSlide = (index) => {
    activeSlide = index;

    heroSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeSlide);
    });

    heroDots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeSlide;
      dot.classList.toggle("is-active", isActive);
      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  };

  const startCarousel = () => {
    if (reducedMotion) {
      return;
    }

    carouselTimer = window.setInterval(() => {
      showSlide((activeSlide + 1) % heroSlides.length);
    }, 7200);
  };

  heroDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      window.clearInterval(carouselTimer);
      showSlide(Number(dot.dataset.slide));
      startCarousel();
    });
  });

  startCarousel();
}

const translations = {
  zh: {
    title: "Patrumin Investors | 严谨的股票投资组合管理",
    description: "Patrumin Investors 是一家精品注册投资顾问公司，专注于严谨的股票投资组合管理、受托透明度和长期公司研究。",
    text: {
      skip: "跳至内容",
      languageLabel: "语言",
      navAbout: "关于我们",
      navPhilosophy: "投资理念",
      navStrategies: "股票策略",
      navSmallcap: "美国小盘股票",
      navDividends: "美国 Dividends Plus+",
      navAllcap: "美国全市值股票",
      navSmicrocap: "美国 SMICROCAP 成长",
      navBalancedEqIncome: "定制平衡股票收益",
      navCustomBalanced: "定制平衡",
      navGipsComposite: "GIPS<sup class='reg'>®</sup> 报告",
      navPerformance: "股票业绩",
      navInsights: "市场洞察",
      navContact: "联系我们",
      heroEyebrow: "精品投资管理及注册投资顾问公司（RIA）",
      heroTitle: "Patrumin Investors",
      heroDefinition: "pat·ru·min  |  /pä-ˈtrü-min/  |  名词  —  源自拉丁语 patientia（耐心）与 ruminatio（反刍）；以耐心、深思熟虑的分析作为每一项投资决策的核心。",
      heroSubtitle: "为高净值家庭和机构提供严谨的股票投资组合管理。耐心的研究、受托级的透明度和长期信念是每一项投资组合决策的核心。",
      heroPrimary: "浏览策略",
      heroSecondary: "GIPS<sup class='reg'>®</sup> 综合报告",
      heroRightEyebrow: "公司概览",
      heroRightTitle: "围绕您的目标量身定制的投资组合。",
      heroRightP1: "Patrumin Investors 为高净值家庭、家族办公室和机构客户构建定制的股票及平衡型投资组合。每一项委托都是量身定制的——从纯股票策略到围绕每位客户的收入需求、税务状况和风险承受能力构建的定制平衡股票收益方案。",
      heroRightP2: "公司的方法建立在耐心的自下而上公司研究和对透明度的明确受托承诺之上——没有隐藏费用，没有利益冲突，也没有由总部下发的模型组合。",
      footerAdvisory: "投资顾问服务由注册投资顾问 Patrumin Investors, LLC 提供。"
    },
    html: {
      principles: `<div class="section-heading"><h2 id="principles-title">投资原则</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><h3>耐心</h3><p>我们寻找可能在未来一至两年，而非数月内表现突出的股票。</p></article><article class="principle-card"><h3>审慎</h3><p>在作出投资决定前，我们会评估潜在收益与风险的权衡。</p></article><article class="principle-card"><h3>纪律</h3><p>我们关注自由现金流特征，并专注于拥有企业，而不是择时市场。</p></article><article class="principle-card"><h3>专业</h3><p>数十年对公司、行业、板块和财务报表的研究形成了我们对商业变化的判断。</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">关于 Patrumin</p><h2 id="about-title">一家在配置资本之前重视分析的精品投资顾问公司。</h2><p>Patrumin Investors 是一家独立的注册投资顾问公司，专注于严谨的股票研究和投资组合管理。公司投资管理团队拥有 30 多年经验，致力于发掘具有持久竞争优势和卓越自由现金流特征的公司。</p><p>我们的研究流程结合了自主公司分析、与管理层的直接交流、行业会议以及严谨的财务建模。目标是在市场认识到机会之前，理解一家公司、其竞争对手及其行业地位，并以坚定信念进行投资。</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">“我们努力及早了解哪些产品和服务将改变消费者或企业的支出方式。”</p><h3 id="leader-title">Samuel A. Dedio</h3><p>创始人兼首席投资官</p></aside>`,
      footerDisclosures: `<p>本网站仅面向美国居民发布。投资顾问代表仅可与其已正式注册或符合豁免条件的州和司法辖区的居民开展业务。对信息请求的回复可能会延迟，直至完成适当注册或确定注册豁免。</p><p>本网站提及的服务并非在每个州或通过每位顾问均可提供。如需更多信息，请联系 <a href="mailto:info@patrumin.com">info@patrumin.com</a> 或致电 <a href="tel:+18447287864">844-728-7864</a>。</p><p>过去的业绩并不保证未来的结果。投资涉及风险，包括可能损失本金。本网站信息仅供教育用途，不应被视为对投资结果的保证或承诺。</p><p>Patrumin Investors 声明符合全球投资业绩标准（GIPS<sup class='reg'>&reg;</sup>）。如需获取综合组合描述列表或符合 GIPS<sup class='reg'>&reg;</sup> 标准的业绩报告，请联系 <a href="mailto:info@patrumin.com">info@patrumin.com</a>。</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | <a href="privacy.html">隐私政策</a> | <a href="legal.html">法律披露</a> | <a href="https://www.patrumin.com/form-adv" target="_blank" rel="noopener">Form ADV2</a></p>`
    }
  },
  es: {
    title: "Patrumin Investors | Gestión disciplinada de carteras de renta variable",
    description: "Patrumin Investors es un asesor de inversiones registrado boutique enfocado en la gestión disciplinada de carteras de renta variable, la transparencia fiduciaria y la investigación empresarial de largo plazo.",
    text: {
      skip: "Saltar al contenido",
      languageLabel: "Idioma",
      navAbout: "Acerca de",
      navPhilosophy: "Filosofía de inversión",
      navStrategies: "Estrategias de renta variable",
      navSmallcap: "U.S. Smallcap Equity",
      navDividends: "U.S. Dividends Plus+",
      navAllcap: "U.S. Allcap Equity",
      navSmicrocap: "U.S. SMICROCAP Growth",
      navBalancedEqIncome: "Custom Balanced Equity-Income",
      navCustomBalanced: "Custom Balanced",
      navGipsComposite: "Informes GIPS<sup class='reg'>®</sup>",
      navPerformance: "Rendimiento",
      navInsights: "Perspectivas",
      navContact: "Contáctenos",
      heroEyebrow: "Una firma boutique de gestión de inversiones y asesoría de inversiones registrada (RIA)",
      heroTitle: "Patrumin Investors",
      heroDefinition: "pat·ru·min  |  /pä-ˈtrü-min/  |  s.  —  Del latín patientia (paciencia) y ruminatio (rumiación); análisis paciente y deliberado en el corazón de cada decisión de inversión.",
      heroSubtitle: "Gestión disciplinada de carteras de renta variable para familias e instituciones de alto patrimonio. Investigación paciente, transparencia fiduciaria y convicción de largo plazo en el centro de cada decisión de cartera.",
      heroPrimary: "Explorar estrategias",
      heroSecondary: "Informes compuestos GIPS<sup class='reg'>®</sup>",
      heroRightEyebrow: "Resumen de la firma",
      heroRightTitle: "Carteras personalizadas construidas en torno a sus objetivos.",
      heroRightP1: "Patrumin Investors construye carteras personalizadas de renta variable y balanceadas para familias de alto patrimonio, family offices y clientes institucionales. Cada mandato se adapta individualmente: desde estrategias puras de renta variable hasta soluciones Custom Balanced Equity-Income estructuradas en torno a las necesidades de ingresos, la situación fiscal y la tolerancia al riesgo de cada cliente.",
      heroRightP2: "El enfoque de la firma se basa en una investigación paciente de las compañías, de abajo hacia arriba, y un claro compromiso fiduciario con la transparencia: sin comisiones ocultas, sin conflictos de interés y sin carteras modelo impuestas desde una oficina central.",
      footerAdvisory: "Los servicios de asesoría de inversiones se ofrecen a través de Patrumin Investors, LLC, un asesor de inversiones registrado."
    },
    html: {
      principles: `<div class="section-heading"><h2 id="principles-title">Principios de inversión</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><h3>Paciente</h3><p>Buscamos acciones que puedan destacarse durante los próximos uno a dos años, no meses.</p></article><article class="principle-card"><h3>Reflexivo</h3><p>Consideramos las compensaciones entre recompensa potencial y riesgo antes de tomar decisiones de inversión.</p></article><article class="principle-card"><h3>Disciplinado</h3><p>Analizamos las características del flujo de caja libre y nos enfocamos en poseer negocios, no en cronometrar mercados.</p></article><article class="principle-card"><h3>Conocedor</h3><p>Décadas de investigación de compañías, sectores, industrias y estados financieros informan nuestra visión del cambio empresarial.</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">Acerca de Patrumin</p><h2 id="about-title">Una firma boutique de asesoría enfocada en el análisis antes de la asignación.</h2><p>Patrumin Investors es una firma independiente de asesoría de inversiones registrada, dedicada a la investigación disciplinada de renta variable y la gestión de carteras. Su equipo de gestión aporta más de 30 años de experiencia identificando compañías con ventajas competitivas duraderas y características superiores de flujo de caja libre.</p><p>Nuestro proceso de investigación combina análisis propio de compañías, contacto directo con los equipos directivos, conferencias sectoriales y modelización financiera rigurosa. El objetivo es comprender una compañía, sus competidores y su posición en la industria, e invertir con convicción antes de que el mercado reconozca la oportunidad.</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">“Nos esforzamos por saber temprano qué productos y servicios cambiarán el gasto de consumidores o empresas.”</p><h3 id="leader-title">Samuel A. Dedio</h3><p>Fundador y Director de Inversiones</p></aside>`,
      footerDisclosures: `<p>Este sitio se publica únicamente para residentes de Estados Unidos. Los representantes de asesores de inversión solo pueden realizar negocios con residentes de los estados y jurisdicciones donde estén debidamente registrados. La respuesta a una solicitud de información puede demorarse hasta obtener el registro apropiado o determinar una exención.</p><p>No todos los servicios mencionados en este sitio están disponibles en todos los estados ni a través de todos los asesores. Para más información, contacte <a href="mailto:info@patrumin.com">info@patrumin.com</a> o llame al <a href="tel:+18447287864">844-728-7864</a>.</p><p>El rendimiento pasado no garantiza resultados futuros. Invertir implica riesgo, incluida la posible pérdida de capital. La información se presenta con fines educativos y no debe considerarse una garantía o promesa de resultados de inversión.</p><p>Patrumin Investors declara su conformidad con los Global Investment Performance Standards (GIPS<sup class='reg'>&reg;</sup>). Para obtener una lista de descripciones de compuestos o una presentación conforme a GIPS<sup class='reg'>&reg;</sup>, contacte <a href="mailto:info@patrumin.com">info@patrumin.com</a>.</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | <a href="privacy.html">Política de privacidad</a> | <a href="legal.html">Divulgaciones legales</a> | <a href="https://www.patrumin.com/form-adv" target="_blank" rel="noopener">Form ADV2</a></p>`
    }
  },
  fr: {
    title: "Patrumin Investors | Gestion disciplinée de portefeuilles actions",
    description: "Patrumin Investors est un conseiller en investissement enregistré de type boutique, axé sur la gestion disciplinée de portefeuilles actions, la transparence fiduciaire et la recherche fondamentale de long terme.",
    text: {
      skip: "Aller au contenu",
      languageLabel: "Langue",
      navAbout: "À propos",
      navPhilosophy: "Philosophie d’investissement",
      navStrategies: "Stratégies actions",
      navSmallcap: "U.S. Smallcap Equity",
      navDividends: "U.S. Dividends Plus+",
      navAllcap: "U.S. Allcap Equity",
      navSmicrocap: "U.S. SMICROCAP Growth",
      navBalancedEqIncome: "Custom Balanced Equity-Income",
      navCustomBalanced: "Custom Balanced",
      navGipsComposite: "Rapports GIPS<sup class='reg'>®</sup>",
      navPerformance: "Performance actions",
      navInsights: "Analyses",
      navContact: "Contactez-nous",
      heroEyebrow: "Société boutique de gestion d’actifs et conseiller en investissement enregistré (RIA)",
      heroTitle: "Patrumin Investors",
      heroDefinition: "pat·ru·min  |  /pä-ˈtrü-min/  |  n.  —  Du latin patientia (patience) et ruminatio (rumination) ; une analyse patiente et réfléchie au cœur de chaque décision d’investissement.",
      heroSubtitle: "Gestion disciplinée de portefeuilles actions pour les familles fortunées et les institutions. Recherche patiente, transparence fiduciaire et conviction de long terme au cœur de chaque décision de portefeuille.",
      heroPrimary: "Explorer les stratégies",
      heroSecondary: "Rapports composites GIPS<sup class='reg'>®</sup>",
      heroRightEyebrow: "Présentation de la société",
      heroRightTitle: "Des portefeuilles personnalisés construits autour de vos objectifs.",
      heroRightP1: "Patrumin Investors construit des portefeuilles actions et équilibrés sur mesure pour les familles fortunées, les family offices et les clients institutionnels. Chaque mandat est personnalisé — des stratégies actions pures aux solutions Custom Balanced Equity-Income structurées autour des besoins de revenu, de la situation fiscale et de la tolérance au risque de chaque client.",
      heroRightP2: "L’approche de la société repose sur une recherche patiente, entreprise par entreprise, et un engagement fiduciaire clair envers la transparence — pas de frais cachés, pas de conflits d’intérêts, pas de portefeuilles modèles imposés par un siège.",
      footerAdvisory: "Les services de conseil en investissement sont offerts par Patrumin Investors, LLC, conseiller en investissement enregistré."
    },
    html: {
      principles: `<div class="section-heading"><h2 id="principles-title">Principes d’investissement</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><h3>Patient</h3><p>Nous recherchons des actions susceptibles de se distinguer sur un horizon d’un à deux ans, pas de quelques mois.</p></article><article class="principle-card"><h3>Réfléchi</h3><p>Nous évaluons les compromis entre rendement potentiel et risque avant toute décision d’investissement.</p></article><article class="principle-card"><h3>Discipliné</h3><p>Nous analysons le flux de trésorerie disponible et nous concentrons sur la détention d’entreprises plutôt que sur le market timing.</p></article><article class="principle-card"><h3>Compétent</h3><p>Des décennies d’analyse de sociétés, secteurs, industries et états financiers nourrissent notre lecture du changement économique.</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">À propos de Patrumin</p><h2 id="about-title">Un conseiller boutique axé sur l’analyse avant l’allocation.</h2><p>Patrumin Investors est une société indépendante de conseil en investissement enregistrée, dédiée à la recherche actions disciplinée et à la gestion de portefeuilles. Son équipe de gestion apporte plus de 30 ans d’expérience dans l’identification de sociétés dotées d’avantages concurrentiels durables et de flux de trésorerie disponibles supérieurs.</p><p>Notre processus de recherche combine analyse propriétaire des sociétés, échanges directs avec les directions, conférences sectorielles et modélisation financière rigoureuse. L’objectif est de comprendre une société, ses concurrents et sa position sectorielle — et d’investir avec conviction avant que le marché ne reconnaisse l’opportunité.</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">« Nous nous efforçons d’identifier tôt les produits et services qui changeront les dépenses des consommateurs ou des entreprises. »</p><h3 id="leader-title">Samuel A. Dedio</h3><p>Fondateur et directeur des investissements</p></aside>`,
      footerDisclosures: `<p>Ce site est publié uniquement pour les résidents des États-Unis. Les représentants de conseillers en investissement ne peuvent exercer qu’auprès de résidents des États et juridictions où ils sont dûment enregistrés. Une réponse à une demande d’information peut être différée jusqu’à l’obtention de l’enregistrement approprié ou la détermination d’une exemption.</p><p>Tous les services mentionnés sur ce site ne sont pas disponibles dans tous les États ni par l’intermédiaire de chaque conseiller. Pour plus d’informations, contactez <a href="mailto:info@patrumin.com">info@patrumin.com</a> ou appelez le <a href="tel:+18447287864">844-728-7864</a>.</p><p>Les performances passées ne garantissent pas les résultats futurs. Investir comporte des risques, y compris une perte possible du capital. Les informations sont fournies à des fins éducatives et ne constituent pas une garantie ou une promesse de résultats.</p><p>Patrumin Investors déclare sa conformité aux Global Investment Performance Standards (GIPS<sup class='reg'>&reg;</sup>). Pour obtenir la liste des descriptions de composites ou une présentation conforme aux GIPS<sup class='reg'>&reg;</sup>, contactez <a href="mailto:info@patrumin.com">info@patrumin.com</a>.</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | <a href="privacy.html">Politique de confidentialité</a> | <a href="legal.html">Mentions légales</a> | <a href="https://www.patrumin.com/form-adv" target="_blank" rel="noopener">Form ADV2</a></p>`
    }
  },
  ja: {
    title: "Patrumin Investors | 規律ある株式ポートフォリオ運用",
    description: "Patrumin Investors は、規律ある株式ポートフォリオ運用、受託者としての透明性、長期的な企業調査に重点を置くブティック型登録投資顧問です。",
    text: {
      skip: "本文へ移動",
      languageLabel: "言語",
      navAbout: "会社情報",
      navPhilosophy: "投資哲学",
      navStrategies: "株式戦略",
      navSmallcap: "米国小型株式",
      navDividends: "米国 Dividends Plus+",
      navAllcap: "米国オールキャップ株式",
      navSmicrocap: "米国 SMICROCAP 成長",
      navBalancedEqIncome: "カスタムバランス株式インカム",
      navCustomBalanced: "カスタムバランス",
      navGipsComposite: "GIPS<sup class='reg'>®</sup> レポート",
      navPerformance: "株式パフォーマンス",
      navInsights: "インサイト",
      navContact: "お問い合わせ",
      heroEyebrow: "ブティック型投資運用・登録投資顧問会社（RIA）",
      heroTitle: "Patrumin Investors",
      heroDefinition: "pat·ru·min  |  /pä-ˈtrü-min/  |  名詞  —  ラテン語の patientia（忍耐）と ruminatio（反芻）に由来。忍耐強く熟慮された分析が、すべての投資判断の中心にあります。",
      heroSubtitle: "富裕層のご家族および機関投資家のための規律ある株式ポートフォリオ運用。忍耐強いリサーチ、受託者水準の透明性、長期的な確信がすべての投資判断の中核にあります。",
      heroPrimary: "戦略を見る",
      heroSecondary: "GIPS<sup class='reg'>®</sup> コンポジット・レポート",
      heroRightEyebrow: "会社概要",
      heroRightTitle: "お客様の目標に合わせて構築されるカスタマイズ・ポートフォリオ。",
      heroRightP1: "Patrumin Investors は、富裕層のご家族、ファミリーオフィス、機関投資家のお客様のために、カスタムの株式およびバランス型ポートフォリオを構築します。純粋な株式戦略から、お客様ごとの収入ニーズ、税務状況、リスク許容度に合わせて設計されるカスタムバランス株式インカム戦略まで、すべての運用は個別に調整されます。",
      heroRightP2: "当社のアプローチは、忍耐強いボトムアップの企業調査と、透明性に対する明確な受託者としての約束に基づいています。隠れた手数料も、利益相反も、本社から与えられるモデルポートフォリオもありません。",
      footerAdvisory: "投資助言サービスは、登録投資顧問である Patrumin Investors, LLC により提供されます。"
    },
    html: {
      principles: `<div class="section-heading"><h2 id="principles-title">投資原則</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><h3>忍耐</h3><p>数か月ではなく、今後1〜2年で優れた成果が期待できる銘柄を探します。</p></article><article class="principle-card"><h3>思慮</h3><p>投資判断の前に、潜在的なリターンとリスクのバランスを検討します。</p></article><article class="principle-card"><h3>規律</h3><p>フリーキャッシュフローの特性を重視し、市場のタイミングではなく企業の保有に集中します。</p></article><article class="principle-card"><h3>専門性</h3><p>企業、セクター、産業、財務諸表に関する長年の調査が、事業変化に対する当社の見方を形作っています。</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">Patrumin について</p><h2 id="about-title">資本配分の前に分析を重視するブティック型投資顧問。</h2><p>Patrumin Investors は、規律ある株式調査とポートフォリオ運用に特化した独立系の登録投資顧問会社です。投資運用チームは、持続的な競争優位性と優れたフリーキャッシュフロー特性を持つ企業を見極める30年以上の経験を有しています。</p><p>当社の調査プロセスは、独自の企業分析、経営陣との直接対話、業界会議、厳格な財務モデリングを組み合わせたものです。市場が機会を認識する前に、企業、競合、業界での位置づけを理解し、確信を持って投資することを目指します。</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">「私たちは、消費者や企業の支出行動を変える製品やサービスを早期に把握することを目指しています。」</p><h3 id="leader-title">Samuel A. Dedio</h3><p>創業者兼最高投資責任者</p></aside>`,
      footerDisclosures: `<p>本サイトは米国居住者のみを対象として公開されています。投資顧問代表者は、正式に登録されている、または登録免除が認められる州および管轄区域の居住者とのみ業務を行うことができます。情報請求への回答は、適切な登録または免除の確認まで遅れる場合があります。</p><p>本サイトで言及されるすべてのサービスが、すべての州またはすべてのアドバイザーを通じて利用できるわけではありません。詳細は <a href="mailto:info@patrumin.com">info@patrumin.com</a> または <a href="tel:+18447287864">844-728-7864</a> までお問い合わせください。</p><p>過去の実績は将来の結果を保証するものではありません。投資には元本損失を含むリスクがあります。本サイトの情報は教育目的であり、投資成果の保証または約束とみなされるべきではありません。</p><p>Patrumin Investors は、グローバル投資パフォーマンス基準（GIPS<sup class='reg'>&reg;</sup>）への準拠を表明しています。コンポジットの説明一覧または GIPS<sup class='reg'>&reg;</sup> 準拠のプレゼンテーションをご希望の場合は、<a href="mailto:info@patrumin.com">info@patrumin.com</a> までご連絡ください。</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | <a href="privacy.html">プライバシーポリシー</a> | <a href="legal.html">法的開示</a> | <a href="https://www.patrumin.com/form-adv" target="_blank" rel="noopener">Form ADV2</a></p>`
    }
  }
};

// ── Subpage translations (page titles, contact, GIPS modal & page content) ──
Object.assign(translations.zh.text, {
  pageTitleStrategies: "以研究为驱动的美国股票策略。",
  pageTitleGips: "Patrumin Investors GIPS<sup class='reg'>®</sup> 综合报告",
  pageTitlePerformance: "让我们为您审阅投资组合。",
  pageTitleInsights: "来自 Patrumin 的市场观点。",
  pageTitleLegal: "法律披露",
  pageTitleLegal: "Divulgaciones legales",
  pageTitleLegal: "Mentions légales",
  pageTitleLegal: "法的開示",
  pageTitlePrivacy: "隐私政策",
  contactEyebrow: "联系我们",
  contactTitle: "开启一次保密对话。",
  contactBlurb: "适用于正在评估更透明的投资组合管理关系或免费投资组合审阅的潜在客户、顾问和家庭。",
  contactCta: "申请免费审阅",
  contactPhoneLabel: "电话",
  contactOfficeLabel: "那不勒斯办公室",
  contactEmailLabel: "电子邮件",
  gipsIntro: "公司以长期投资业绩为荣。Patrumin Investors 按照全球投资业绩标准（GIPS<sup class='reg'>®</sup>）展示其核心美国股票策略的业绩结果。获取每份报告前请提供您的联系信息——根据 GIPS<sup class='reg'>®</sup> 标准要求，分发情况将被记录。",
  gipsModalDesc: "请提供您的联系信息。根据 GIPS<sup class='reg'>®</sup> 标准要求，Patrumin Investors 会记录所有综合报告的分发情况。",
  gipsModalNameLabel: `姓名 <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalEmailLabel: `电子邮件地址 <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalSubmit: "获取报告",
  gipsModalPrivacy: "提交本表单即表示您同意接收 Patrumin Investors 与其服务相关的通讯。我们绝不会向第三方出售您的个人信息。根据 GIPS<sup class='reg'>®</sup> 标准要求，本次提交将被记录存档。",
  gipsModalThanks: `<strong>谢谢。</strong>您的报告获取已记录。`,
  gipsModalClose: "关闭",
  gipsModalTitleView: "查看 GIPS<sup class='reg'>®</sup> 综合报告",
  gipsModalTitleDownload: "下载 GIPS<sup class='reg'>®</sup> 综合报告",
  gipsModalNote: "报告上传后即可获取 PDF。我们可能会通过 {email} 与您联系。"
});
Object.assign(translations.zh.html, {
  strategyPage: `<div class="section-heading section-heading--full"><p>Patrumin 的策略建立在自下而上的基本面研究、公司层面分析和有纪律的组合构建之上。每项策略旨在表达不同的机会集合，而不依赖业绩承诺。</p></div><div aria-label="Strategy shortcuts" class="strategy-nav"><a href="#strategy-smallcap">小盘股票</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-allcap">全市值股票</a><a href="#strategy-smicrocap">SMICROCAP 成长</a><a href="#strategy-balanced-equity-income">平衡股票收益</a><a href="#strategy-custom-balanced">定制平衡</a></div><article class="strategy-panel" id="strategy-smallcap"><div class="strategy-panel__top"><div><p class="card-kicker">集中型小型公司股票</p><h3>Patrumin 美国小盘股票策略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> 报告</a></div><div class="strategy-panel__body"><p>该策略是由较小型美国股票组成的集中投资组合。我们通常持有 40 至 70 只股票，以充分发挥自下而上的基本面研究方法。</p><p>策略投资于小型公司，通常股本市值低于 100 亿美元。Patrumin 采用机会主义方法，不强调成长或价值等单一投资风格。</p><p>我们的分散化组合由多个经济板块的股票构成，这些板块可能呈现不同的增长速度。我们也寻找相对于盈利和现金创造潜力而言被低估的公司。</p><p>我们尤其关注那些产品或服务能够从根本上改变消费者或企业客户支出行为的公司。</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div class="strategy-panel__top"><div><p class="card-kicker">以股息为重点的美国股票</p><h3>Patrumin 美国 Dividends Plus+ 股票策略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> 报告</a></div><div class="strategy-panel__body"><p>该策略是由 20 至 25 只美国上市股票组成的集中投资组合，注重股息收入、股息增长和资本增值潜力。</p><p>我们投资于我们认为能够提供持久股息收入、具有股息增长记录、且价格具备资本增值潜力的公司。</p><p>策略致力于实现高于大盘的收益率，通常为标普 500 收益率的 150% 至 200%，并在完整市场周期内实现与大盘股票市场相当的总回报。</p><p>我们尤其关注那些产品或服务能够从根本上改变消费者或企业客户支出行为、且支付股息或正在提高股息的公司。</p></div></article><article class="strategy-panel" id="strategy-allcap"><div class="strategy-panel__top"><div><p class="card-kicker">全市值美国股票</p><h3>Patrumin 美国全市值股票策略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> 报告</a></div><div class="strategy-panel__body"><p>该策略是覆盖完整市值范围的美国股票集中投资组合。我们通常持有 40 至 70 只股票，以充分发挥自下而上的基本面研究方法。</p><p>策略投资于小盘、中盘和大盘美国公司，不设市值范围或风格偏好。Patrumin 采用机会主义方法，不强调任何单一投资风格。</p><p>我们的分散化组合由多个经济板块的股票构成。我们寻找相对于盈利和现金创造潜力而言被低估的公司。</p><p>我们尤其关注那些产品或服务能够从根本上改变消费者或企业客户支出行为的公司。</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div class="strategy-panel__top"><div><p class="card-kicker">集中型微型及小型股票</p><h3>Patrumin 美国 SMICROCAP 成长股票策略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> 报告</a></div><div class="strategy-panel__body"><p>该策略是由美国微型和小型成长股组成的集中投资组合。我们通常持有 30 至 50 只股票。</p><p>策略投资于股本市值一般低于 30 亿美元的微型和小型公司，强调成长型投资风格，寻找盈利和收入增长高于平均水平的公司。</p><p>我们的分散化组合由多个板块的股票构成。我们寻找相对于其增长速度和长期盈利潜力而言被低估的公司。</p><p>我们尤其关注那些产品或服务能够从根本上改变消费者或企业客户支出行为的公司。</p></div></article><article class="strategy-panel" id="strategy-balanced-equity-income"><div class="strategy-panel__top"><div><p class="card-kicker">定制化平衡与收益导向</p><h3>Patrumin 定制平衡股票收益策略</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">咨询详情</a></div><div class="strategy-panel__body"><p>该策略是一种定制化投资组合策略，将股票与固定收益头寸相结合，根据每位客户的收入目标、风险承受能力和投资期限量身打造。</p><p>股票部分来自 Patrumin 以股息为核心的研究，注重具有持久收入流和股息增长潜力的公司。固定收益部分旨在平衡股票风险并产生可预期的收入。</p><p>股票与固定收益的资产配置区间由客户及其财务顾问共同确定。该策略特别适合寻求稳定、税务高效的收入以及长期资本增值的高净值个人、家族办公室和机构。</p></div></article><article class="strategy-panel" id="strategy-custom-balanced"><div class="strategy-panel__top"><div><p class="card-kicker">完全定制的平衡组合</p><h3>Patrumin 定制平衡策略</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">咨询详情</a></div><div class="strategy-panel__body"><p>该策略是结合美国股票与固定收益的完全定制平衡组合，围绕每位客户的具体财务目标构建。</p><p>不同于基于模型的方法，每个定制平衡委托都是从零开始构建的——体现客户特定的收入需求、流动性要求、税务考量、既有持仓和行业限制。</p><p>该策略最适合需要完全定制投资方案、直接账户所有权和透明报告的家族办公室、信托和高净值个人。</p></div></article><p class="strategy-disclosure">如需业绩信息、披露文件及策略资料，请联系 <a href="mailto:info@patrumin.com">info@patrumin.com</a>。小市值和微市值证券的发行人风险高于大市值证券，其市场可能波动更大、流动性更低。投机性投资特征可能增加损失风险。</p>`,
  gipsCards: `<div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> 综合报告</p><h3>美国 Dividends Plus+ 股票综合组合</h3><p class="gips-report-desc">Patrumin 美国 Dividends Plus+ 股票策略综合组合的业绩记录。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'view')">查看 PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'download')">下载</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> 综合报告</p><h3>美国小盘股票综合组合</h3><p class="gips-report-desc">Patrumin 美国小盘股票策略综合组合的业绩记录。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'view')">查看 PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'download')">下载</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> 综合报告</p><h3>美国全市值股票综合组合</h3><p class="gips-report-desc">Patrumin 美国全市值股票策略综合组合的业绩记录。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'view')">查看 PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'download')">下载</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> 综合报告</p><h3>美国 SMICROCAP 成长综合组合</h3><p class="gips-report-desc">Patrumin 美国 SMICROCAP 成长股票策略综合组合的业绩记录。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'view')">查看 PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'download')">下载</button></div></div>`,
  reviewPage: `<div><p class="eyebrow">免费审阅</p><h2 id="performance-title">对您当前投资组合的清晰、诚实评估。</h2><p>免费审阅您的费用、税务考量、持仓和组合适配性——面向高净值家庭和机构。Patrumin 团队拥有数十年评估组合结构、发现改进空间的经验。</p></div><div class="review-list"><article><h3>费用透明度</h3><p>以通俗语言审阅顾问费、产品内含费用和管理人成本。</p></article><article><h3>税务考量</h3><p>识别应税账户的考虑因素以及与您的税务顾问的协调要点。</p></article><article><h3>既有持仓与集中持股</h3><p>结合长期目标，评估既有持仓限制、集中股票头寸、行业排除或既定收入目标。</p></article><article><h3>组合适配性</h3><p>重新审视配置、风险、收入需求和流动性考量，并着眼于降低费用。</p></article></div>`,
  insightsCards: `<article class="insight-card"><p class="card-kicker">市场评论</p><h3>每月评论即将推出</h3><p>面向客户和潜在客户的每月市场观察、组合主题和评论。</p></article><article class="insight-card"><p class="card-kicker">白皮书</p><h3>优质收益难觅</h3><p>关于收益策略、股息收入和总回报的投资者教育读物。</p></article>`,
  aboutFirm: `<div class="section-heading"><h2>一家独立的注册投资顾问公司。</h2></div><div class="about-firm-text"><p>Patrumin Investors LLC（"本公司"或"Patrumin"）是根据《1940年投资顾问法》注册的独立投资顾问，成立于2012年9月，由 Samuel Dedio 拥有。</p><p>Patrumin Investors 是一家专注于美国股票的独立投资管理公司，提供以股票为核心的组合策略，包括 Patrumin 美国 Dividends Plus+ 股票策略、美国小盘股票策略、美国全市值股票策略和美国 SMICROCAP 股票策略。</p><p>公司还管理平衡股票与固定收益的策略，包括围绕每位客户的收入目标、风险承受能力和投资期限设计的定制平衡股票收益和定制平衡策略。公司为机构和个人客户管理全权委托账户。</p><p>Patrumin 的投资管理团队拥有 30 多年经验，致力于发掘具有持久竞争优势和卓越自由现金流特征的公司。研究流程结合自主公司分析、与管理层的直接交流、行业会议和严谨的财务建模。</p></div>`,
  aboutTeam: `<div class="section-heading"><h2>研究背后的团队。</h2></div><div class="team-grid"><div class="bio-card"><img alt="Samuel A. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-a-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">照片即将上线</div><div class="bio-card__content"><h3>Samuel A. Dedio</h3><p class="bio-card__role">创始人、首席投资官兼投资组合经理</p><ul class="bio-card__history"><li>创始人、管理合伙人兼首席投资官，Patrumin Investors, LLC，2012年至今</li><li>首席投资组合经理、美国股票主管，Artio Global Management，2006–2012</li><li>董事总经理、首席投资组合经理兼美国微型/小型/中型股投资管理主管，Deutsche Asset Management，1999–2006</li><li>高级行业分析师，Ernst &amp; Young, LLP，1997–1999</li><li>股票分析师，Evergreen Asset Management，1994–1997</li><li>股票分析师，Standard &amp; Poor's Corp.，1991–1994</li><li>会计学硕士，美利坚大学 Kogod 商学院</li><li>工商管理学士，威廉帕特森大学</li></ul></div></div><div class="bio-card"><img alt="Samuel C. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-c-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">照片即将上线</div><div class="bio-card__content"><h3>Samuel C. Dedio <span style="color:var(--muted);font-weight:400;">|&nbsp;王天瑶</span></h3><p class="bio-card__role">投资分析师兼运营</p><ul class="bio-card__history"><li>投资分析师兼运营，Patrumin Investors, LLC，2021年至今</li><li>国际关系硕士（在读），约翰斯·霍普金斯大学 SAIS 与南京大学</li><li>外国语言文学学士（中文方向，辅修计算机科学），佛罗里达大学文理学院</li></ul></div></div></div>`
});

Object.assign(translations.es.text, {
  pageTitleStrategies: "Estrategias de renta variable de EE. UU. guiadas por la investigación.",
  pageTitleGips: "Informes compuestos GIPS<sup class='reg'>®</sup> de Patrumin Investors",
  pageTitlePerformance: "Permítanos revisar su cartera.",
  pageTitleInsights: "Perspectivas de mercado de Patrumin.",
  pageTitlePrivacy: "Política de privacidad",
  contactEyebrow: "Contáctenos",
  contactTitle: "Inicie una conversación confidencial.",
  contactBlurb: "Para clientes potenciales, asesores y familias que evalúan una relación de gestión de cartera más transparente o una revisión de cartera sin costo.",
  contactCta: "Solicitar revisión sin costo",
  contactPhoneLabel: "Teléfono",
  contactOfficeLabel: "Oficina de Naples",
  contactEmailLabel: "Correo electrónico",
  gipsIntro: "La firma se enorgullece de su desempeño de inversión a largo plazo. Patrumin Investors presenta los resultados de sus principales estrategias de renta variable de EE. UU. conforme a los Global Investment Performance Standards (GIPS<sup class='reg'>®</sup>). Proporcione su información de contacto antes de acceder a cada informe: la distribución se registra según lo exigen las normas GIPS<sup class='reg'>®</sup>.",
  gipsModalDesc: "Proporcione su información de contacto. Patrumin Investors mantiene un registro de todas las distribuciones de informes compuestos, según lo exigen las normas GIPS<sup class='reg'>®</sup>.",
  gipsModalNameLabel: `Nombre completo <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalEmailLabel: `Correo electrónico <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalSubmit: "Acceder al informe",
  gipsModalPrivacy: "Al enviar este formulario, usted acepta recibir comunicaciones de Patrumin Investors relacionadas con sus servicios. Nunca venderemos su información personal a terceros. Se conserva un registro de este envío según lo exigen las normas GIPS<sup class='reg'>®</sup>.",
  gipsModalThanks: `<strong>Gracias.</strong> Su acceso al informe ha sido registrado.`,
  gipsModalClose: "Cerrar",
  gipsModalTitleView: "Ver informe compuesto GIPS<sup class='reg'>®</sup>",
  gipsModalTitleDownload: "Descargar informe compuesto GIPS<sup class='reg'>®</sup>",
  gipsModalNote: "El PDF estará disponible cuando se carguen los informes. Podremos contactarle en {email}."
});
Object.assign(translations.es.html, {
  strategyPage: `<div class="section-heading section-heading--full"><p>Las estrategias de Patrumin se basan en investigación fundamental de abajo hacia arriba, análisis a nivel de compañía y construcción disciplinada de carteras. Cada estrategia está diseñada para expresar un conjunto de oportunidades distinto sin depender de promesas de rendimiento.</p></div><div aria-label="Strategy shortcuts" class="strategy-nav"><a href="#strategy-smallcap">Smallcap Equity</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-allcap">Allcap Equity</a><a href="#strategy-smicrocap">SMICROCAP Growth</a><a href="#strategy-balanced-equity-income">Balanced Equity-Income</a><a href="#strategy-custom-balanced">Custom Balanced</a></div><article class="strategy-panel" id="strategy-smallcap"><div class="strategy-panel__top"><div><p class="card-kicker">Renta variable concentrada de compañías pequeñas</p><h3>Estrategia Patrumin U.S. Smallcap Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Informe GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La estrategia es una cartera concentrada de acciones estadounidenses de menor capitalización. Generalmente mantenemos entre 40 y 70 acciones para aprovechar nuestro enfoque de investigación fundamental de abajo hacia arriba.</p><p>La estrategia invierte en compañías pequeñas, normalmente con capitalizaciones bursátiles inferiores a $10B. Patrumin emplea un enfoque oportunista que no enfatiza un solo estilo de inversión, como crecimiento o valor.</p><p>Nuestras carteras diversificadas se construyen con acciones de múltiples sectores de la economía, que pueden experimentar distintas tasas de crecimiento. También buscamos compañías que consideramos infravaloradas en relación con sus ganancias y su potencial de generación de efectivo.</p><p>Nos atraen especialmente las compañías cuyos productos o servicios cambian de forma fundamental el comportamiento de gasto de los consumidores o de sus clientes empresariales.</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div class="strategy-panel__top"><div><p class="card-kicker">Renta variable de EE. UU. enfocada en dividendos</p><h3>Estrategia Patrumin U.S. Dividends Plus+ Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Informe GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La estrategia es una cartera concentrada de 20 a 25 acciones negociadas en EE. UU. que enfatiza los ingresos por dividendos, el crecimiento de los dividendos y el potencial de apreciación del capital.</p><p>Invertimos en compañías que creemos ofrecen flujos de ingresos por dividendos duraderos, tienen historial de crecimiento de dividendos y cotizan a precios con potencial de apreciación.</p><p>La estrategia busca un rendimiento por dividendo superior al del mercado amplio, típicamente entre 150% y 200% del rendimiento del S&amp;P 500, y retornos totales competitivos con el mercado de renta variable a lo largo de ciclos completos.</p><p>Nos atraen especialmente las compañías cuyos productos o servicios cambian el comportamiento de gasto y que pagan dividendos o los están incrementando.</p></div></article><article class="strategy-panel" id="strategy-allcap"><div class="strategy-panel__top"><div><p class="card-kicker">Renta variable de EE. UU. de todas las capitalizaciones</p><h3>Estrategia Patrumin U.S. Allcap Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Informe GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La estrategia es una cartera concentrada de acciones de EE. UU. en todo el espectro de capitalización. Generalmente mantenemos entre 40 y 70 acciones.</p><p>Invierte en compañías pequeñas, medianas y grandes sin un rango de capitalización definido ni sesgo de estilo. Patrumin emplea un enfoque oportunista.</p><p>Nuestras carteras diversificadas se construyen con acciones de múltiples sectores. Buscamos compañías que consideramos infravaloradas en relación con sus ganancias y potencial de generación de efectivo.</p><p>Nos atraen especialmente las compañías cuyos productos o servicios cambian de forma fundamental el comportamiento de gasto de consumidores o clientes empresariales.</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div class="strategy-panel__top"><div><p class="card-kicker">Renta variable concentrada micro y small-cap</p><h3>Estrategia Patrumin U.S. SMICROCAP Growth Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Informe GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La estrategia es una cartera concentrada de acciones de crecimiento de micro y pequeña capitalización de EE. UU. Generalmente mantenemos de 30 a 50 acciones.</p><p>Invierte en compañías con capitalizaciones generalmente inferiores a $3B. La estrategia enfatiza un estilo de crecimiento, buscando compañías con crecimiento de ganancias e ingresos superior al promedio.</p><p>Nuestras carteras diversificadas se construyen con acciones de múltiples sectores. Buscamos compañías infravaloradas en relación con sus tasas de crecimiento y potencial de ganancias a largo plazo.</p><p>Nos atraen especialmente las compañías cuyos productos o servicios cambian el comportamiento de gasto.</p></div></article><article class="strategy-panel" id="strategy-balanced-equity-income"><div class="strategy-panel__top"><div><p class="card-kicker">Balanceado personalizado y orientado a ingresos</p><h3>Estrategia Patrumin Custom Balanced Equity-Income</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Solicitar información</a></div><div class="strategy-panel__body"><p>Es una estrategia de cartera personalizada que combina posiciones de renta variable y renta fija, adaptada a los objetivos de ingresos, tolerancia al riesgo y horizonte de inversión de cada cliente.</p><p>El componente de renta variable proviene de la investigación de Patrumin enfocada en dividendos, enfatizando compañías con flujos de ingresos duraderos y potencial de crecimiento de dividendos. El componente de renta fija se construye para complementar el riesgo accionario y generar ingresos predecibles.</p><p>Los rangos de asignación entre renta variable y fija se determinan en consulta con cada cliente y su asesor financiero. La estrategia es especialmente adecuada para personas de alto patrimonio, family offices e instituciones que buscan ingresos estables y eficientes fiscalmente junto con apreciación de capital a largo plazo.</p></div></article><article class="strategy-panel" id="strategy-custom-balanced"><div class="strategy-panel__top"><div><p class="card-kicker">Cartera balanceada totalmente personalizada</p><h3>Estrategia Patrumin Custom Balanced</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Solicitar información</a></div><div class="strategy-panel__body"><p>Es una cartera balanceada totalmente personalizada que combina renta variable y renta fija de EE. UU., estructurada en torno a los objetivos financieros específicos de cada cliente.</p><p>A diferencia de los enfoques basados en modelos, cada mandato Custom Balanced se construye desde cero, reflejando necesidades de ingresos, requisitos de liquidez, consideraciones fiscales, posiciones heredadas y restricciones sectoriales específicas del cliente.</p><p>La estrategia es ideal para family offices, fideicomisos y personas de alto patrimonio que requieren una solución de inversión totalmente a medida con titularidad directa de la cuenta e informes transparentes.</p></div></article><p class="strategy-disclosure">Para información de rendimiento, divulgaciones y materiales de estrategia, contacte <a href="mailto:info@patrumin.com">info@patrumin.com</a>. Los valores de pequeña y micro capitalización implican mayor riesgo de emisor que los de mayor capitalización, y sus mercados pueden ser más volátiles y menos líquidos. Las características de inversión especulativa pueden aumentar el riesgo de pérdida.</p>`,
  gipsCards: `<div class="gips-report-item"><p class="card-kicker">Informe compuesto GIPS<sup class='reg'>®</sup></p><h3>Compuesto U.S. Dividends Plus+ Equity</h3><p class="gips-report-desc">Historial de rendimiento del compuesto de la estrategia Patrumin U.S. Dividends Plus+ Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'view')">Ver PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'download')">Descargar</button></div></div><div class="gips-report-item"><p class="card-kicker">Informe compuesto GIPS<sup class='reg'>®</sup></p><h3>Compuesto U.S. Smallcap Equity</h3><p class="gips-report-desc">Historial de rendimiento del compuesto de la estrategia Patrumin U.S. Smallcap Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'view')">Ver PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'download')">Descargar</button></div></div><div class="gips-report-item"><p class="card-kicker">Informe compuesto GIPS<sup class='reg'>®</sup></p><h3>Compuesto U.S. Allcap Equity</h3><p class="gips-report-desc">Historial de rendimiento del compuesto de la estrategia Patrumin U.S. Allcap Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'view')">Ver PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'download')">Descargar</button></div></div><div class="gips-report-item"><p class="card-kicker">Informe compuesto GIPS<sup class='reg'>®</sup></p><h3>Compuesto U.S. SMICROCAP Growth</h3><p class="gips-report-desc">Historial de rendimiento del compuesto de la estrategia Patrumin U.S. SMICROCAP Growth Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'view')">Ver PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'download')">Descargar</button></div></div>`,
  reviewPage: `<div><p class="eyebrow">Revisión sin costo</p><h2 id="performance-title">Una evaluación clara y honesta de su cartera actual.</h2><p>Una revisión sin costo de sus comisiones, consideraciones fiscales, posiciones y adecuación de cartera, para familias e instituciones de alto patrimonio. El equipo de Patrumin aporta décadas de experiencia evaluando estructuras de cartera e identificando mejoras.</p></div><div class="review-list"><article><h3>Transparencia de comisiones</h3><p>Revisión en lenguaje claro de honorarios de asesoría, gastos incorporados en productos y costos de gestores.</p></article><article><h3>Consideraciones fiscales</h3><p>Identificación de aspectos de cuentas imponibles y puntos de coordinación con su asesor fiscal.</p></article><article><h3>Posiciones heredadas y acciones concentradas</h3><p>Evaluación de restricciones de posiciones heredadas, acciones concentradas, exclusiones sectoriales o un objetivo de ingresos definido junto a los objetivos de largo plazo.</p></article><article><h3>Adecuación de la cartera</h3><p>Revisión de asignación, riesgo, necesidades de ingresos y liquidez, con atención a mitigar comisiones.</p></article></div>`,
  insightsCards: `<article class="insight-card"><p class="card-kicker">Comentario de mercado</p><h3>Comentario mensual próximamente</h3><p>Observaciones de mercado mensuales, temas de cartera y comentarios para clientes y prospectos.</p></article><article class="insight-card"><p class="card-kicker">Documento técnico</p><h3>El buen rendimiento es difícil de encontrar</h3><p>Una pieza educativa sobre estrategias de rendimiento, ingresos por dividendos y retorno total.</p></article>`,
  aboutFirm: `<div class="section-heading"><h2>Un asesor de inversiones independiente y registrado.</h2></div><div class="about-firm-text"><p>Patrumin Investors LLC ("la Firma" o "Patrumin") es un asesor de inversiones independiente registrado bajo la Investment Advisers Act de 1940. La Firma fue fundada en septiembre de 2012 y es propiedad de Samuel Dedio.</p><p>Patrumin Investors opera como una compañía independiente de gestión de inversiones especializada en renta variable de EE. UU., y ofrece estrategias de cartera enfocadas en acciones, incluidas las estrategias Patrumin U.S. Dividends Plus+ Equity, U.S. Smallcap Equity, U.S. Allcap Equity y U.S. SMICROCAP Equity.</p><p>La Firma también gestiona estrategias que combinan renta variable y renta fija, incluidas Custom Balanced Equity-Income y Custom Balanced, diseñadas en torno a los objetivos de ingresos, tolerancia al riesgo y horizonte de inversión de cada cliente. La Firma gestiona cuentas discrecionales para clientes institucionales y minoristas.</p><p>El equipo de gestión de inversiones de Patrumin aporta más de 30 años de experiencia identificando compañías con ventajas competitivas duraderas y características superiores de flujo de caja libre. El proceso de investigación combina análisis propio, contacto directo con directivos, conferencias sectoriales y modelización financiera rigurosa.</p></div>`,
  aboutTeam: `<div class="section-heading"><h2>El equipo detrás de la investigación.</h2></div><div class="team-grid"><div class="bio-card"><img alt="Samuel A. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-a-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">Foto próximamente</div><div class="bio-card__content"><h3>Samuel A. Dedio</h3><p class="bio-card__role">Fundador, Director de Inversiones y Gestor de Cartera</p><ul class="bio-card__history"><li>Fundador, Socio Director y Director de Inversiones, Patrumin Investors, LLC, 2012–presente</li><li>Gestor Principal de Cartera, Jefe de Renta Variable de EE. UU., Artio Global Management, 2006–2012</li><li>Director General, Gestor Principal y Jefe de Inversiones Micro, Small y Midcap de EE. UU., Deutsche Asset Management, 1999–2006</li><li>Analista Sénior de Industria, Ernst &amp; Young, LLP, 1997–1999</li><li>Analista de Renta Variable, Evergreen Asset Management, 1994–1997</li><li>Analista de Renta Variable, Standard &amp; Poor's Corp., 1991–1994</li><li>MS en Contabilidad, American University, Kogod School of Business</li><li>BA en Administración de Empresas, William Paterson University</li></ul></div></div><div class="bio-card"><img alt="Samuel C. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-c-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">Foto próximamente</div><div class="bio-card__content"><h3>Samuel C. Dedio <span style="color:var(--muted);font-weight:400;">|&nbsp;王天瑶</span></h3><p class="bio-card__role">Analista de Inversiones y Operaciones</p><ul class="bio-card__history"><li>Analista de Inversiones y Operaciones, Patrumin Investors, LLC, 2021–presente</li><li>MA en Relaciones Internacionales, Johns Hopkins University SAIS y Universidad de Nankín (candidato)</li><li>BA en Lenguas y Literaturas Extranjeras (especialización en chino; minor en Ciencias de la Computación), University of Florida</li></ul></div></div></div>`
});

Object.assign(translations.fr.text, {
  pageTitleStrategies: "Des stratégies actions américaines guidées par la recherche.",
  pageTitleGips: "Rapports composites GIPS<sup class='reg'>®</sup> de Patrumin Investors",
  pageTitlePerformance: "Laissez-nous examiner votre portefeuille.",
  pageTitleInsights: "Les perspectives de marché de Patrumin.",
  pageTitlePrivacy: "Politique de confidentialité",
  contactEyebrow: "Contactez-nous",
  contactTitle: "Commencez une conversation confidentielle.",
  contactBlurb: "Pour les clients potentiels, conseillers et familles qui évaluent une relation de gestion de portefeuille plus transparente ou une revue de portefeuille offerte.",
  contactCta: "Demander une revue offerte",
  contactPhoneLabel: "Téléphone",
  contactOfficeLabel: "Bureau de Naples",
  contactEmailLabel: "E-mail",
  gipsIntro: "La société est fière de sa performance d’investissement à long terme. Patrumin Investors présente les résultats de ses principales stratégies actions américaines conformément aux Global Investment Performance Standards (GIPS<sup class='reg'>®</sup>). Veuillez fournir vos coordonnées avant d’accéder à chaque rapport — la distribution est enregistrée comme l’exigent les normes GIPS<sup class='reg'>®</sup>.",
  gipsModalDesc: "Veuillez fournir vos coordonnées. Patrumin Investors conserve un registre de toutes les distributions de rapports composites, conformément aux normes GIPS<sup class='reg'>®</sup>.",
  gipsModalNameLabel: `Nom complet <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalEmailLabel: `Adresse e-mail <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalSubmit: "Accéder au rapport",
  gipsModalPrivacy: "En soumettant ce formulaire, vous acceptez de recevoir des communications de Patrumin Investors concernant ses services. Nous ne vendrons jamais vos informations personnelles à des tiers. Un enregistrement de cette soumission est conservé conformément aux normes GIPS<sup class='reg'>®</sup>.",
  gipsModalThanks: `<strong>Merci.</strong> Votre accès au rapport a été enregistré.`,
  gipsModalClose: "Fermer",
  gipsModalTitleView: "Consulter le rapport composite GIPS<sup class='reg'>®</sup>",
  gipsModalTitleDownload: "Télécharger le rapport composite GIPS<sup class='reg'>®</sup>",
  gipsModalNote: "Le PDF sera disponible une fois les rapports téléversés. Nous pourrons vous recontacter à {email}."
});
Object.assign(translations.fr.html, {
  strategyPage: `<div class="section-heading section-heading--full"><p>Les stratégies de Patrumin reposent sur la recherche fondamentale bottom-up, l’analyse entreprise par entreprise et une construction de portefeuille disciplinée. Chaque stratégie vise un univers d’opportunités distinct, sans promesse de performance.</p></div><div aria-label="Strategy shortcuts" class="strategy-nav"><a href="#strategy-smallcap">Smallcap Equity</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-allcap">Allcap Equity</a><a href="#strategy-smicrocap">SMICROCAP Growth</a><a href="#strategy-balanced-equity-income">Balanced Equity-Income</a><a href="#strategy-custom-balanced">Custom Balanced</a></div><article class="strategy-panel" id="strategy-smallcap"><div class="strategy-panel__top"><div><p class="card-kicker">Actions concentrées de petites sociétés</p><h3>Stratégie Patrumin U.S. Smallcap Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Rapport GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La stratégie est un portefeuille concentré de petites actions américaines. Nous détenons généralement 40 à 70 titres afin de tirer parti de notre approche de recherche fondamentale bottom-up.</p><p>Elle investit dans de petites sociétés, généralement d’une capitalisation boursière inférieure à 10 milliards de dollars. Patrumin adopte une approche opportuniste qui ne privilégie aucun style unique, croissance ou valeur.</p><p>Nos portefeuilles diversifiés sont construits avec des titres de plusieurs secteurs de l’économie, susceptibles de connaître des rythmes de croissance différents. Nous recherchons aussi des sociétés que nous estimons sous-évaluées au regard de leurs bénéfices et de leur potentiel de génération de trésorerie.</p><p>Nous sommes particulièrement attirés par les sociétés dont les produits ou services modifient fondamentalement le comportement de dépense des consommateurs ou des entreprises.</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div class="strategy-panel__top"><div><p class="card-kicker">Actions américaines axées sur les dividendes</p><h3>Stratégie Patrumin U.S. Dividends Plus+ Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Rapport GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La stratégie est un portefeuille concentré de 20 à 25 actions cotées aux États-Unis, privilégiant le revenu de dividendes, la croissance des dividendes et le potentiel d’appréciation du capital.</p><p>Nous investissons dans des sociétés qui, selon nous, offrent des revenus de dividendes durables, affichent un historique de croissance des dividendes et se négocient à des prix offrant un potentiel d’appréciation.</p><p>La stratégie vise un rendement supérieur à celui du marché élargi, généralement de 150 % à 200 % du rendement du S&amp;P 500, et des rendements totaux compétitifs sur des cycles de marché complets.</p><p>Nous privilégions les sociétés dont les produits ou services changent les comportements de dépense et qui versent des dividendes ou les augmentent.</p></div></article><article class="strategy-panel" id="strategy-allcap"><div class="strategy-panel__top"><div><p class="card-kicker">Actions américaines toutes capitalisations</p><h3>Stratégie Patrumin U.S. Allcap Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Rapport GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La stratégie est un portefeuille concentré d’actions américaines sur l’ensemble du spectre de capitalisation. Nous détenons généralement 40 à 70 titres.</p><p>Elle investit dans des sociétés de petite, moyenne et grande capitalisation, sans fourchette définie ni biais de style. Patrumin adopte une approche opportuniste.</p><p>Nos portefeuilles diversifiés sont construits avec des titres de plusieurs secteurs. Nous recherchons des sociétés sous-évaluées au regard de leurs bénéfices et de leur potentiel de génération de trésorerie.</p><p>Nous sommes particulièrement attirés par les sociétés dont les produits ou services modifient fondamentalement les comportements de dépense.</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div class="strategy-panel__top"><div><p class="card-kicker">Actions concentrées micro et petites capitalisations</p><h3>Stratégie Patrumin U.S. SMICROCAP Growth Equity</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">Rapport GIPS<sup class='reg'>®</sup></a></div><div class="strategy-panel__body"><p>La stratégie est un portefeuille concentré d’actions de croissance américaines de micro et petite capitalisation. Nous détenons généralement 30 à 50 titres.</p><p>Elle investit dans des sociétés dont la capitalisation est généralement inférieure à 3 milliards de dollars, avec un style croissance, en recherchant des sociétés affichant une croissance des bénéfices et du chiffre d’affaires supérieure à la moyenne.</p><p>Nos portefeuilles diversifiés sont construits avec des titres de plusieurs secteurs. Nous recherchons des sociétés sous-évaluées au regard de leur rythme de croissance et de leur potentiel bénéficiaire à long terme.</p><p>Nous privilégions les sociétés dont les produits ou services changent les comportements de dépense.</p></div></article><article class="strategy-panel" id="strategy-balanced-equity-income"><div class="strategy-panel__top"><div><p class="card-kicker">Équilibré sur mesure, orienté revenu</p><h3>Stratégie Patrumin Custom Balanced Equity-Income</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Demander des informations</a></div><div class="strategy-panel__body"><p>Cette stratégie de portefeuille sur mesure combine actions et obligations, adaptée aux objectifs de revenu, à la tolérance au risque et à l’horizon d’investissement de chaque client.</p><p>La composante actions s’appuie sur la recherche de Patrumin axée sur les dividendes, en privilégiant les sociétés offrant des revenus durables et un potentiel de croissance des dividendes. La composante obligataire est construite pour compléter le risque actions et générer un revenu prévisible.</p><p>Les fourchettes d’allocation entre actions et obligations sont déterminées avec chaque client et son conseiller financier. La stratégie convient particulièrement aux particuliers fortunés, family offices et institutions recherchant un revenu stable et fiscalement efficient ainsi qu’une appréciation du capital à long terme.</p></div></article><article class="strategy-panel" id="strategy-custom-balanced"><div class="strategy-panel__top"><div><p class="card-kicker">Portefeuille équilibré entièrement sur mesure</p><h3>Stratégie Patrumin Custom Balanced</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Demander des informations</a></div><div class="strategy-panel__body"><p>La stratégie est un portefeuille équilibré entièrement personnalisé combinant actions américaines et obligations, structuré autour des objectifs financiers propres à chaque client.</p><p>Contrairement aux approches fondées sur des modèles, chaque mandat Custom Balanced est construit sur mesure — reflétant les besoins de revenu, les exigences de liquidité, les considérations fiscales, les positions historiques et les restrictions sectorielles du client.</p><p>La stratégie convient le mieux aux family offices, fiducies et particuliers fortunés qui exigent une solution d’investissement entièrement sur mesure, avec détention directe du compte et un reporting transparent.</p></div></article><p class="strategy-disclosure">Pour les informations de performance, les divulgations et les documents de stratégie, contactez <a href="mailto:info@patrumin.com">info@patrumin.com</a>. Les titres de petite et micro capitalisation comportent un risque émetteur plus élevé que les grandes capitalisations, et leurs marchés peuvent être plus volatils et moins liquides. Les caractéristiques d’investissement spéculatives peuvent accroître le risque de perte.</p>`,
  gipsCards: `<div class="gips-report-item"><p class="card-kicker">Rapport composite GIPS<sup class='reg'>®</sup></p><h3>Composite U.S. Dividends Plus+ Equity</h3><p class="gips-report-desc">Historique de performance du composite de la stratégie Patrumin U.S. Dividends Plus+ Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'view')">Voir le PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'download')">Télécharger</button></div></div><div class="gips-report-item"><p class="card-kicker">Rapport composite GIPS<sup class='reg'>®</sup></p><h3>Composite U.S. Smallcap Equity</h3><p class="gips-report-desc">Historique de performance du composite de la stratégie Patrumin U.S. Smallcap Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'view')">Voir le PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'download')">Télécharger</button></div></div><div class="gips-report-item"><p class="card-kicker">Rapport composite GIPS<sup class='reg'>®</sup></p><h3>Composite U.S. Allcap Equity</h3><p class="gips-report-desc">Historique de performance du composite de la stratégie Patrumin U.S. Allcap Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'view')">Voir le PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'download')">Télécharger</button></div></div><div class="gips-report-item"><p class="card-kicker">Rapport composite GIPS<sup class='reg'>®</sup></p><h3>Composite U.S. SMICROCAP Growth</h3><p class="gips-report-desc">Historique de performance du composite de la stratégie Patrumin U.S. SMICROCAP Growth Equity.</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'view')">Voir le PDF</button><button class="button button--primary" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'download')">Télécharger</button></div></div>`,
  reviewPage: `<div><p class="eyebrow">Revue offerte</p><h2 id="performance-title">Une évaluation claire et honnête de votre portefeuille actuel.</h2><p>Une revue gratuite de vos frais, considérations fiscales, positions et adéquation de portefeuille — pour les familles fortunées et les institutions. L’équipe de Patrumin apporte des décennies d’expérience dans l’évaluation des structures de portefeuille et l’identification d’améliorations.</p></div><div class="review-list"><article><h3>Transparence des frais</h3><p>Revue en langage clair des frais de conseil, des coûts intégrés aux produits et des frais de gestion.</p></article><article><h3>Considérations fiscales</h3><p>Identification des points à considérer pour les comptes imposables et coordination avec votre conseiller fiscal.</p></article><article><h3>Positions historiques et titres concentrés</h3><p>Évaluation des restrictions liées aux positions historiques, des positions concentrées, des exclusions sectorielles ou d’un objectif de revenu défini, au regard des objectifs de long terme.</p></article><article><h3>Adéquation du portefeuille</h3><p>Réexamen de l’allocation, du risque, des besoins de revenu et de la liquidité, avec une attention portée à la réduction des frais.</p></article></div>`,
  insightsCards: `<article class="insight-card"><p class="card-kicker">Commentaire de marché</p><h3>Commentaire mensuel à venir</h3><p>Observations de marché mensuelles, thèmes de portefeuille et commentaires pour clients et prospects.</p></article><article class="insight-card"><p class="card-kicker">Livre blanc</p><h3>Un bon rendement est difficile à trouver</h3><p>Un document pédagogique sur les stratégies de rendement, le revenu de dividendes et le rendement total.</p></article>`,
  aboutFirm: `<div class="section-heading"><h2>Un conseiller en investissement indépendant et enregistré.</h2></div><div class="about-firm-text"><p>Patrumin Investors LLC (« la Société » ou « Patrumin ») est un conseiller en investissement indépendant enregistré en vertu de l’Investment Advisers Act de 1940. La Société a été fondée en septembre 2012 et appartient à Samuel Dedio.</p><p>Patrumin Investors est une société indépendante de gestion d’investissements spécialisée dans les actions américaines, qui propose des stratégies de portefeuille axées sur les actions, dont les stratégies Patrumin U.S. Dividends Plus+ Equity, U.S. Smallcap Equity, U.S. Allcap Equity et U.S. SMICROCAP Equity.</p><p>La Société gère également des stratégies combinant actions et obligations, dont Custom Balanced Equity-Income et Custom Balanced, conçues autour des objectifs de revenu, de la tolérance au risque et de l’horizon d’investissement de chaque client. Elle gère des comptes discrétionnaires pour des clients institutionnels et privés.</p><p>L’équipe de gestion de Patrumin apporte plus de 30 ans d’expérience dans l’identification de sociétés dotées d’avantages concurrentiels durables et de flux de trésorerie disponibles supérieurs. Le processus de recherche combine analyse propriétaire, échanges directs avec les directions, conférences sectorielles et modélisation financière rigoureuse.</p></div>`,
  aboutTeam: `<div class="section-heading"><h2>L’équipe derrière la recherche.</h2></div><div class="team-grid"><div class="bio-card"><img alt="Samuel A. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-a-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">Photo à venir</div><div class="bio-card__content"><h3>Samuel A. Dedio</h3><p class="bio-card__role">Fondateur, directeur des investissements et gérant de portefeuille</p><ul class="bio-card__history"><li>Fondateur, associé gérant et directeur des investissements, Patrumin Investors, LLC, 2012–aujourd’hui</li><li>Gérant principal, responsable des actions américaines, Artio Global Management, 2006–2012</li><li>Directeur général, gérant principal et responsable de la gestion micro, small et midcap américaine, Deutsche Asset Management, 1999–2006</li><li>Analyste sectoriel senior, Ernst &amp; Young, LLP, 1997–1999</li><li>Analyste actions, Evergreen Asset Management, 1994–1997</li><li>Analyste actions, Standard &amp; Poor's Corp., 1991–1994</li><li>MS en comptabilité, American University, Kogod School of Business</li><li>BA en administration des affaires, William Paterson University</li></ul></div></div><div class="bio-card"><img alt="Samuel C. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-c-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">Photo à venir</div><div class="bio-card__content"><h3>Samuel C. Dedio <span style="color:var(--muted);font-weight:400;">|&nbsp;王天瑶</span></h3><p class="bio-card__role">Analyste en investissement et opérations</p><ul class="bio-card__history"><li>Analyste en investissement et opérations, Patrumin Investors, LLC, 2021–aujourd’hui</li><li>MA en relations internationales, Johns Hopkins University SAIS et Université de Nankin (en cours)</li><li>BA en langues et littératures étrangères (spécialisation chinois ; mineure en informatique), University of Florida</li></ul></div></div></div>`
});

Object.assign(translations.ja.text, {
  pageTitleStrategies: "調査主導の米国株式戦略。",
  pageTitleGips: "Patrumin Investors GIPS<sup class='reg'>®</sup> コンポジット・レポート",
  pageTitlePerformance: "お客様のポートフォリオを診断いたします。",
  pageTitleInsights: "Patrumin の市場展望。",
  pageTitlePrivacy: "プライバシーポリシー",
  contactEyebrow: "お問い合わせ",
  contactTitle: "機密性の高いご相談を始めましょう。",
  contactBlurb: "より透明性の高いポートフォリオ運用関係、または無料ポートフォリオ診断をご検討中の見込み顧客、アドバイザー、ご家族のために。",
  contactCta: "無料診断を依頼",
  contactPhoneLabel: "電話",
  contactOfficeLabel: "ネープルズ事務所",
  contactEmailLabel: "メール",
  gipsIntro: "当社は長期的な運用実績を誇りとしています。Patrumin Investors は、主要な米国株式戦略の運用成果をグローバル投資パフォーマンス基準（GIPS<sup class='reg'>®</sup>）に準拠して提示しています。各レポートの取得前にご連絡先をご入力ください。GIPS<sup class='reg'>®</sup> 基準の要件に従い、配布は記録されます。",
  gipsModalDesc: "ご連絡先をご入力ください。GIPS<sup class='reg'>®</sup> 基準の要件に従い、Patrumin Investors はすべてのコンポジット・レポートの配布記録を保持します。",
  gipsModalNameLabel: `氏名 <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalEmailLabel: `メールアドレス <span aria-hidden="true" class="gips-modal__req">*</span>`,
  gipsModalSubmit: "レポートを取得",
  gipsModalPrivacy: "本フォームの送信により、Patrumin Investors のサービスに関する連絡を受け取ることに同意したものとみなされます。お客様の個人情報を第三者に販売することは一切ありません。GIPS<sup class='reg'>®</sup> 基準の要件に従い、本送信の記録は保管されます。",
  gipsModalThanks: `<strong>ありがとうございます。</strong>レポートへのアクセスを記録しました。`,
  gipsModalClose: "閉じる",
  gipsModalTitleView: "GIPS<sup class='reg'>®</sup> コンポジット・レポートを見る",
  gipsModalTitleDownload: "GIPS<sup class='reg'>®</sup> コンポジット・レポートをダウンロード",
  gipsModalNote: "レポートのアップロード後に PDF をご利用いただけます。{email} 宛にご連絡する場合があります。"
});
Object.assign(translations.ja.html, {
  strategyPage: `<div class="section-heading section-heading--full"><p>Patrumin の戦略は、ボトムアップのファンダメンタル調査、企業単位の分析、規律あるポートフォリオ構築に基づいています。各戦略は、運用成果を約束することなく、異なる機会集合を表現することを目的としています。</p></div><div aria-label="Strategy shortcuts" class="strategy-nav"><a href="#strategy-smallcap">小型株式</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-allcap">オールキャップ株式</a><a href="#strategy-smicrocap">SMICROCAP 成長</a><a href="#strategy-balanced-equity-income">バランス型株式インカム</a><a href="#strategy-custom-balanced">カスタムバランス</a></div><article class="strategy-panel" id="strategy-smallcap"><div class="strategy-panel__top"><div><p class="card-kicker">集中型の小型株式</p><h3>Patrumin 米国小型株式戦略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> レポート</a></div><div class="strategy-panel__body"><p>この戦略は、小型の米国株式で構成される集中型ポートフォリオです。ボトムアップのファンダメンタル調査を活かすため、通常40〜70銘柄を保有します。</p><p>通常、株式時価総額が100億ドル未満の小型企業に投資します。Patrumin は、成長やバリューといった単一の投資スタイルを強調しない機会主義的アプローチを採用します。</p><p>分散されたポートフォリオは複数の経済セクターの銘柄で構成され、それぞれ異なる成長率を示す可能性があります。利益とキャッシュ創出力に対して割安と考える企業も探します。</p><p>消費者や企業顧客の支出行動を根本的に変える製品やサービスを持つ企業に特に注目しています。</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div class="strategy-panel__top"><div><p class="card-kicker">配当重視の米国株式</p><h3>Patrumin 米国 Dividends Plus+ 株式戦略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> レポート</a></div><div class="strategy-panel__body"><p>この戦略は、配当収入、配当成長、資本増価の可能性を重視する、米国上場株式20〜25銘柄の集中型ポートフォリオです。</p><p>持続的な配当収入をもたらし、配当成長の実績があり、資本増価の可能性のある価格で取引されていると考える企業に投資します。</p><p>市場全体を上回る利回り（通常 S&amp;P 500 利回りの150〜200%）の達成と、完全な市場サイクルを通じて株式市場全体に匹敵するトータルリターンの提供を目指します。</p><p>支出行動を根本的に変える製品やサービスを持ち、配当を支払っている、または増配している企業に特に注目しています。</p></div></article><article class="strategy-panel" id="strategy-allcap"><div class="strategy-panel__top"><div><p class="card-kicker">全時価総額対応の米国株式</p><h3>Patrumin 米国オールキャップ株式戦略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> レポート</a></div><div class="strategy-panel__body"><p>この戦略は、時価総額の全領域にわたる米国株式の集中型ポートフォリオです。通常40〜70銘柄を保有します。</p><p>時価総額の範囲やスタイルの偏りを定めず、小型・中型・大型の米国企業に投資します。Patrumin は機会主義的アプローチを採用します。</p><p>分散されたポートフォリオは複数の経済セクターの銘柄で構成されます。利益とキャッシュ創出力に対して割安と考える企業を探します。</p><p>消費者や企業顧客の支出行動を根本的に変える製品やサービスを持つ企業に特に注目しています。</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div class="strategy-panel__top"><div><p class="card-kicker">集中型のマイクロ・小型株式</p><h3>Patrumin 米国 SMICROCAP 成長株式戦略</h3></div><a class="button button--outline strategy-panel__cta" href="gips.html">GIPS<sup class='reg'>®</sup> レポート</a></div><div class="strategy-panel__body"><p>この戦略は、米国のマイクロおよび小型の成長株で構成される集中型ポートフォリオです。通常30〜50銘柄を保有します。</p><p>株式時価総額がおおむね30億ドル未満の企業に投資します。成長スタイルを重視し、平均を上回る利益・収益成長を示す企業を探します。</p><p>分散されたポートフォリオは複数のセクターの銘柄で構成されます。成長率と長期的な収益力に対して割安と考える企業を探します。</p><p>支出行動を根本的に変える製品やサービスを持つ企業に特に注目しています。</p></div></article><article class="strategy-panel" id="strategy-balanced-equity-income"><div class="strategy-panel__top"><div><p class="card-kicker">カスタマイズされたバランス・インカム志向</p><h3>Patrumin カスタムバランス株式インカム戦略</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">お問い合わせ</a></div><div class="strategy-panel__body"><p>この戦略は、株式と債券を組み合わせたカスタマイズ型ポートフォリオ戦略であり、お客様ごとの収入目標、リスク許容度、投資期間に合わせて構築されます。</p><p>株式部分は、持続的な収入源と配当成長の可能性を持つ企業を重視する、Patrumin の配当重視リサーチに基づきます。債券部分は株式リスクを補完し、予測可能な収入を生み出すよう構築されます。</p><p>株式と債券の配分レンジは、お客様とそのファイナンシャル・アドバイザーとの協議により決定されます。安定的で税効率の高い収入と長期的な資本増価を求める富裕層個人、ファミリーオフィス、機関投資家に特に適しています。</p></div></article><article class="strategy-panel" id="strategy-custom-balanced"><div class="strategy-panel__top"><div><p class="card-kicker">完全カスタムのバランス型ポートフォリオ</p><h3>Patrumin カスタムバランス戦略</h3></div><a class="button button--outline strategy-panel__cta" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">お問い合わせ</a></div><div class="strategy-panel__body"><p>この戦略は、米国株式と債券を組み合わせた完全カスタムのバランス型ポートフォリオで、お客様固有の財務目標に合わせて設計されます。</p><p>モデルに基づくアプローチとは異なり、各カスタムバランス運用はゼロから構築され、お客様固有の収入ニーズ、流動性要件、税務上の考慮事項、既存保有銘柄、セクター制限を反映します。</p><p>この戦略は、口座の直接保有と透明性の高い報告を伴う完全オーダーメイドの投資ソリューションを必要とするファミリーオフィス、信託、富裕層個人に最適です。</p></div></article><p class="strategy-disclosure">運用実績、開示資料、戦略資料については <a href="mailto:info@patrumin.com">info@patrumin.com</a> までお問い合わせください。小型およびマイクロ時価総額証券は大型株よりも発行体リスクが高く、市場の変動が大きく流動性が低い場合があります。投機的な投資特性は損失リスクを高める可能性があります。</p>`,
  gipsCards: `<div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> コンポジット・レポート</p><h3>米国 Dividends Plus+ 株式コンポジット</h3><p class="gips-report-desc">Patrumin 米国 Dividends Plus+ 株式戦略コンポジットの運用実績。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'view')">PDF を見る</button><button class="button button--primary" onclick="openGipsModal('U.S. Dividends Plus+ Equity Composite', '#', 'download')">ダウンロード</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> コンポジット・レポート</p><h3>米国小型株式コンポジット</h3><p class="gips-report-desc">Patrumin 米国小型株式戦略コンポジットの運用実績。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'view')">PDF を見る</button><button class="button button--primary" onclick="openGipsModal('U.S. Smallcap Equity Composite', '#', 'download')">ダウンロード</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> コンポジット・レポート</p><h3>米国オールキャップ株式コンポジット</h3><p class="gips-report-desc">Patrumin 米国オールキャップ株式戦略コンポジットの運用実績。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'view')">PDF を見る</button><button class="button button--primary" onclick="openGipsModal('U.S. Allcap Equity Composite', '#', 'download')">ダウンロード</button></div></div><div class="gips-report-item"><p class="card-kicker">GIPS<sup class='reg'>®</sup> コンポジット・レポート</p><h3>米国 SMICROCAP 成長コンポジット</h3><p class="gips-report-desc">Patrumin 米国 SMICROCAP 成長株式戦略コンポジットの運用実績。</p><div class="gips-report-actions"><button class="button button--outline" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'view')">PDF を見る</button><button class="button button--primary" onclick="openGipsModal('U.S. SMICROCAP Growth Composite', '#', 'download')">ダウンロード</button></div></div>`,
  reviewPage: `<div><p class="eyebrow">無料診断</p><h2 id="performance-title">現在のポートフォリオを明確かつ誠実に評価します。</h2><p>手数料、税務上の考慮事項、保有銘柄、ポートフォリオの適合性を無料で診断します。富裕層のご家族と機関投資家向けです。Patrumin のチームは、ポートフォリオ構造の評価と改善点の特定において数十年の経験を有しています。</p></div><div class="review-list"><article><h3>手数料の透明性</h3><p>助言報酬、商品に組み込まれた費用、運用会社コストをわかりやすい言葉で確認します。</p></article><article><h3>税務上の考慮事項</h3><p>課税口座に関する検討事項と、税務アドバイザーとの連携ポイントを特定します。</p></article><article><h3>既存保有銘柄と集中投資</h3><p>既存保有の制約、集中株式ポジション、セクター除外、定められた収入目標を長期目標と併せて評価します。</p></article><article><h3>ポートフォリオの適合性</h3><p>手数料の軽減を視野に、配分、リスク、収入ニーズ、流動性を見直します。</p></article></div>`,
  insightsCards: `<article class="insight-card"><p class="card-kicker">市場コメント</p><h3>毎月のコメントを近日公開</h3><p>顧客および見込み顧客向けの毎月の市場観察、ポートフォリオテーマ、コメント。</p></article><article class="insight-card"><p class="card-kicker">ホワイトペーパー</p><h3>良い利回りは見つけにくい</h3><p>利回り戦略、配当収入、トータルリターンに関する投資家向け教育資料。</p></article>`,
  aboutFirm: `<div class="section-heading"><h2>独立系の登録投資顧問会社。</h2></div><div class="about-firm-text"><p>Patrumin Investors LLC（「当社」または「Patrumin」）は、1940年投資顧問法に基づき登録された独立系投資顧問です。2012年9月に設立され、Samuel Dedio が所有しています。</p><p>Patrumin Investors は米国株式に特化した独立系投資運用会社として、Patrumin 米国 Dividends Plus+ 株式戦略、米国小型株式戦略、米国オールキャップ株式戦略、米国 SMICROCAP 株式戦略を含む株式中心のポートフォリオ戦略を提供しています。</p><p>また、お客様ごとの収入目標、リスク許容度、投資期間に合わせて設計されたカスタムバランス株式インカムおよびカスタムバランス戦略など、株式と債券のバランス型戦略も運用しています。当社は機関投資家および個人のお客様の一任勘定を運用しています。</p><p>Patrumin の投資運用チームは、持続的な競争優位性と優れたフリーキャッシュフロー特性を持つ企業を見極める30年以上の経験を有しています。調査プロセスは、独自の企業分析、経営陣との直接対話、業界会議、厳格な財務モデリングを組み合わせています。</p></div>`,
  aboutTeam: `<div class="section-heading"><h2>リサーチを支えるチーム。</h2></div><div class="team-grid"><div class="bio-card"><img alt="Samuel A. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-a-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">写真は近日公開</div><div class="bio-card__content"><h3>Samuel A. Dedio</h3><p class="bio-card__role">創業者、最高投資責任者兼ポートフォリオマネージャー</p><ul class="bio-card__history"><li>創業者、マネージングパートナー兼最高投資責任者、Patrumin Investors, LLC、2012年〜現在</li><li>リード・ポートフォリオマネージャー、米国株式責任者、Artio Global Management、2006〜2012年</li><li>マネージングディレクター、リード・ポートフォリオマネージャー兼米国マイクロ・小型・中型株運用責任者、Deutsche Asset Management、1999〜2006年</li><li>シニア業界アナリスト、Ernst &amp; Young, LLP、1997〜1999年</li><li>株式アナリスト、Evergreen Asset Management、1994〜1997年</li><li>株式アナリスト、Standard &amp; Poor's Corp.、1991〜1994年</li><li>会計学修士、アメリカン大学 Kogod ビジネススクール</li><li>経営学士、ウィリアム・パターソン大学</li></ul></div></div><div class="bio-card"><img alt="Samuel C. Dedio" class="bio-card__photo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" src="assets/sam-c-dedio.jpg"/><div class="bio-card__photo--placeholder" style="display:none;">写真は近日公開</div><div class="bio-card__content"><h3>Samuel C. Dedio <span style="color:var(--muted);font-weight:400;">|&nbsp;王天瑶</span></h3><p class="bio-card__role">投資アナリスト兼オペレーション</p><ul class="bio-card__history"><li>投資アナリスト兼オペレーション、Patrumin Investors, LLC、2021年〜現在</li><li>国際関係学修士（在学中）、ジョンズ・ホプキンズ大学 SAIS・南京大学</li><li>外国語・外国文学学士（中国語専攻、コンピュータサイエンス副専攻）、フロリダ大学</li></ul></div></div></div>`
});



const languageSelect = document.querySelector("#language-select");

// English source-of-truth is captured from the page itself at load time,
// so the markup can never drift out of sync with the translation system.
const i18nOriginals = { title: document.title, description: "", text: {}, html: {} };
{
  const desc = document.querySelector('meta[name="description"]');
  i18nOriginals.description = desc ? desc.getAttribute("content") : "";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (!(k in i18nOriginals.text)) i18nOriginals.text[k] = el.innerHTML;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const k = el.getAttribute("data-i18n-html");
    if (!(k in i18nOriginals.html)) i18nOriginals.html[k] = el.innerHTML;
  });
}

let currentLanguage = "en";

// Translated string lookup with English fallback
const i18nText = (key) => {
  const dict = translations[currentLanguage];
  return (dict && dict.text && dict.text[key]) || i18nOriginals.text[key] || "";
};

const applyLanguage = (language) => {
  if (language !== "en" && !translations[language]) language = "en";
  currentLanguage = language;
  const dict = translations[language] || {};

  document.documentElement.lang = language;
  document.title = dict.title || i18nOriginals.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dict.description || i18nOriginals.description);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    const v = (dict.text && dict.text[k]) || i18nOriginals.text[k];
    if (v != null) el.innerHTML = v;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const k = el.getAttribute("data-i18n-html");
    const v = (dict.html && dict.html[k]) || i18nOriginals.html[k];
    if (v != null) el.innerHTML = v;
  });

  if (languageSelect) {
    languageSelect.value = language;
  }
  const langLabel = document.querySelector(".language-switch__label");
  if (langLabel) {
    langLabel.textContent = { en: "English", zh: "中文", es: "Español", fr: "Français", ja: "日本語" }[language] || language;
  }
  window.localStorage.setItem("patrumin-language", language);
  fixWidows();
};

if (languageSelect) {
  const savedLanguage = window.localStorage.getItem("patrumin-language") || "en";
  applyLanguage(savedLanguage);

  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

// ── GIPS Email Capture Modal ────────────────────────────────────────────────

function openGipsModal(reportName, pdfUrl, mode) {
  const modal = document.getElementById("gips-modal");
  if (!modal) return;
  modal.setAttribute("data-pdf", pdfUrl || "#");
  modal.setAttribute("data-mode", mode || "download");
  const nameEl = document.getElementById("gips-modal-report-name");
  const titleEl = document.getElementById("gips-modal-title");
  if (nameEl) nameEl.textContent = reportName || "";
  if (titleEl) titleEl.innerHTML = (mode === "view" ? i18nText("gipsModalTitleView") : i18nText("gipsModalTitleDownload")) || (mode === "view" ? "View GIPS<sup class='reg'>®</sup> Composite Report" : "Download GIPS<sup class='reg'>®</sup> Composite Report");
  const formEl = document.getElementById("gips-download-form");
  const successEl = document.getElementById("gips-modal-success");
  if (formEl) {
    formEl.style.display = "block";
    formEl.reset();
    const sb = formEl.querySelector('button[type="submit"]');
    if (sb) sb.disabled = false;
  }
  if (successEl) successEl.style.display = "none";
  modal.removeAttribute("aria-hidden");
  modal.classList.add("is-open");
  const firstInput = modal.querySelector("input");
  if (firstInput) setTimeout(() => firstInput.focus(), 60);
}

function closeGipsModal() {
  const modal = document.getElementById("gips-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

// Google Sheets logging endpoint — paste the Apps Script web-app URL here.
// Setup instructions: gips-sheet-setup.md in the project root.
const GIPS_LOG_ENDPOINT = "https://script.google.com/macros/s/AKfycbwIurr3hOnzQj-eCmnvFvkSb9xg8zSOlVDIJB5GreZfcQfs5eJwPkjBzqY4Hd5T8GpJ/exec";

const gipsForm = document.getElementById("gips-download-form");
if (gipsForm) {
  gipsForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name  = document.getElementById("gips-name").value.trim();
    const email = document.getElementById("gips-email").value.trim();

    // Basic email validation — reject obvious garbage, allow free webmail
    if (!name || !email || !email.includes("@") || email.indexOf(".") < email.indexOf("@")) return;

    const modal      = document.getElementById("gips-modal");
    const reportName = document.getElementById("gips-modal-report-name").textContent;
    const pdfUrl     = modal.getAttribute("data-pdf");
    const mode       = modal.getAttribute("data-mode");

    // Log BEFORE serving the file — Marketing Rule recordkeeping
    // Stores: report name, name (raw string, unparsed), email, action, ISO timestamp
    const record = {
      report: reportName,
      name,
      email,
      mode,
      consent: "v1 — agreed to receive communications; personal information not sold to third parties",
      date: new Date().toISOString()
    };

// Guard against double-clicks
    const submitBtn = gipsForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      if (submitBtn.disabled) return;
      submitBtn.disabled = true;
    }

    // 1) Instant, synchronous local log — the submission is recorded the
    //    moment the button is pressed
    try {
      const log = JSON.parse(window.localStorage.getItem("patrumin-gips-log") || "[]");
      log.push(record);
      window.localStorage.setItem("patrumin-gips-log", JSON.stringify(log));
    } catch (_) {}

    // 2) Success state shows IMMEDIATELY so there is no dead time
    gipsForm.style.display = "none";
    const successEl = document.getElementById("gips-modal-success");
    const noteEl    = document.getElementById("gips-modal-note");
    if (noteEl) {
      noteEl.textContent = pdfUrl && pdfUrl !== "#"
        ? ""
        : (i18nText("gipsModalNote") || "The PDF will be available once reports are uploaded. We may follow up at {email}.").replace("{email}", email);
    }
    if (successEl) successEl.style.display = "block";

    // 3) Central record — Google Sheet write runs in the background
    let logged = Promise.resolve();
    if (GIPS_LOG_ENDPOINT) {
      logged = fetch(GIPS_LOG_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(record)
      }).catch(() => {
        // Network failure: the local log above still holds the record
      });
    }

    // 4) Serve the PDF once the log write has had its chance (2.5s cap)
    if (pdfUrl && pdfUrl !== "#") {
      await Promise.race([logged, new Promise((resolve) => setTimeout(resolve, 2500))]);
      if (mode === "view") {
        window.open(pdfUrl, "_blank", "noopener");
      } else {
        const a = document.createElement("a");
        a.href = pdfUrl;
        a.download = "";
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  });
}

// Close moda
// ── Scroll-reveal: subtle fade-up as sections enter the viewport ───────────
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(
    ".principle-card, .strategy-panel, .gips-report-item, .insight-card, .bio-card, .leader-panel, .review-list article, .feature-card"
  );
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = ((i % 4) * 70) + "ms";
    io.observe(el);
  });
})();


// ── Widow control: glue the final two words of every text block together
// so a word can never sit alone on the last line (works in every browser).
function fixWidows() {
  document.querySelectorAll("p, li, h2, h3").forEach((el) => {
    if (el.closest(".privacy-doc, .site-footer")) return; // legal/footer text wraps naturally
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
    let last = null;
    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim()) last = node;
    }
    if (!last) return;
    last.textContent = last.textContent.replace(/ +(?=\S+\s*$)/, "\u00A0");
  });
}
fixWidows();
