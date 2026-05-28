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
  en: {
    title: "Patrumin Investors | Disciplined Equity Portfolio Management",
    description: "Patrumin Investors is a boutique registered investment adviser focused on disciplined equity portfolio management, fiduciary transparency, and long-term company research.",
    text: {
      skip: "Skip to content",
      registered: "Registered Investment Adviser (RIA)",
      languageLabel: "Language",
      navAbout: "About",
      navStrategies: "Equity Strategies",
      navSmallcap: "U.S. Smallcap Equity",
      navDividends: "U.S. Dividends Plus+",
      navAllcap: "U.S. Allcap Equity",
      navSmicrocap: "U.S. SMICROCAP Growth",
      navBalancedEqIncome: "Balanced Equity-Income",
      navCustomBalanced: "Custom Balanced",
      navGipsComposite: "GIPS Composite Reports",
      navPerformance: "Performance",
      navInsights: "Insights",
      navContact: "Contact",
      navCta: "Complimentary Review",
      heroEyebrow: "A Boutique Registered Advisory Firm (RIA)",
      heroTitle: "Patrumin Investors",
      heroCopy: "Independent portfolio management focused on patient stock selection, free cash flow analysis, transparent fees, and risk-aware stewardship for high-net-worth families and institutions.",
      heroPrimary: "Explore Strategies",
      heroSecondary: "GIPS Performance Records",
      heroBandOne: "One company at a time",
      heroBandTwo: "Stock selection matters",
      heroBandThree: "Designed for long-term investors",
      footerAdvisory: "Investment advisory services offered through Patrumin Investors, LLC, a registered investment adviser."
    },
    html: {
      heroLede: `The Analysis You Need<sup class="reg-mark">&reg;</sup> for disciplined, long-term equity portfolios.`,
      overview: `
          <div>
            <p class="eyebrow">Firm overview</p>
            <h2>Independent research with private-client discipline.</h2>
          </div>
          <div class="overview__copy">
            <p>Patrumin Investors is built around company-level research, patience, and a clear understanding of how businesses generate cash over time. The firm seeks to know early which products, services, and industries may change consumer or business spending.</p>
            <p>That work informs a focused U.S. equity process designed to be transparent, repeatable, and aligned with fiduciary obligations.</p>
          </div>`,
      principles: `
          <div class="section-heading">
            <p class="eyebrow">Investment principles</p>
            <h2 id="principles-title">Patient, thoughtful, disciplined, knowledgeable.</h2>
          </div>
          <div class="card-grid card-grid--four">
            <article class="principle-card"><span class="card-kicker">01</span><h3>Patient</h3><p>We look for stocks that may outperform over the coming one to two years, not months.</p></article>
            <article class="principle-card"><span class="card-kicker">02</span><h3>Thoughtful</h3><p>We consider potential reward-to-risk trade-offs before making investment decisions.</p></article>
            <article class="principle-card"><span class="card-kicker">03</span><h3>Disciplined</h3><p>We look at free cash flow characteristics and remain focused on owning businesses rather than timing markets.</p></article>
            <article class="principle-card"><span class="card-kicker">04</span><h3>Knowledgeable</h3><p>Decades of research across companies, sectors, industries, and financial statements inform our view of business change.</p></article>
          </div>`,
      about: `
          <div class="about__main">
            <p class="eyebrow">About Patrumin</p>
            <h2 id="about-title">A boutique investment adviser focused on analysis before allocation.</h2>
            <p>The investment management team at Patrumin has more than 30 years of experience navigating the U.S. equity market. The broad experience and perspective of the team provide a foundation for constructing portfolios of U.S. stocks.</p>
            <p>Patrumin combines field research, conversations with management teams, industry-specific conferences, and rigorous qualitative and financial company analysis. The goal is to understand a company, its competitors, and its industry position before capital is committed.</p>
          </div>
          <aside class="leader-panel" aria-labelledby="leader-title">
            <p class="quote">"We strive to know early on which products and services will change consumer or business spending."</p>
            <h3 id="leader-title">Sam Dedio</h3>
            <p>Founder &amp; Portfolio Manager</p>
          </aside>`,
      strategy: `
          <div class="section-heading section-heading--wide">
            <p class="eyebrow">Equity strategies</p>
            <h2 id="strategy-title">Research-led U.S. equity strategies.</h2>
            <p>Patrumin's strategies are built around bottom-up fundamental research, company-level analysis, and disciplined portfolio construction. Each strategy is designed to express a distinct opportunity set without relying on performance promises.</p>
          </div>
          <div class="strategy-nav" aria-label="Strategy shortcuts">
            <a href="#strategy-smallcap">Smallcap Equity</a>
            <a href="#strategy-dividends-plus">Dividends Plus+</a>
            <a href="#strategy-allcap">Allcap Equity</a>
            <a href="#strategy-smicrocap">SMICROCAP Growth</a>
            <a href="#strategy-balanced-equity-income">Balanced Equity-Income</a>
            <a href="#strategy-custom-balanced">Custom Balanced</a>
          </div>
          <div class="strategy-list">
            <article class="strategy-panel" id="strategy-smallcap">
              <div><p class="card-kicker">Concentrated smaller-company equity</p><h3>Patrumin U.S. Smallcap Equity Strategy</h3></div>
              <div>
                <p>The Patrumin U.S. Smallcap Equity Strategy is a concentrated portfolio of smaller U.S. stocks. We generally hold 40-to-70 stocks to leverage our bottom-up, fundamental research approach.</p>
                <p>The strategy invests in small companies, typically those with equity market capitalizations below $4B. Patrumin employs an opportunistic approach that does not emphasize any one investment style, like growth or value.</p>
                <p>Our diversified portfolios are constructed with stocks from multiple sectors of the economy, which may experience varying rates of growth. We also look to invest in companies we believe are undervalued relative to their earnings and cash generating potential.</p>
                <p>We are especially attracted to companies which have products or services that fundamentally change the spending behavior of consumers or their business customers.</p>
                <p class="strategy-risk">Small capitalization securities involve greater issuer risk than larger capitalization securities, and the markets for such securities may be more volatile and less liquid. Specifically, small capitalization companies may be subject to more volatile market movements than securities of larger, more established companies, both because the securities typically are traded in lower volume and because the issuers typically are more subject to changes in earnings and prospects.</p>
              </div>
            </article>
            <article class="strategy-panel" id="strategy-dividends-plus">
              <div><p class="card-kicker">Disciplined equity income</p><h3>Patrumin U.S. Dividends Plus+ Equity Strategy</h3></div>
              <div>
                <p>The Patrumin U.S. Dividends Plus+ Equity Strategy is a specialty product we created due to persistent customer requests and inquiries. There are two powerful demographic trends: the aging of America's baby boomer population and the ever-increasing life expectancy of our population. Families need to find a way to generate income for longer periods of time.</p>
                <p>This portfolio is specifically constructed to include only 25 U.S.-traded stocks that pay cash dividends and is diversified with holdings across multiple economic sectors.</p>
                <p>The strategy seeks to exceed the total return of the S&amp;P 500* over a market cycle, coincident with an economic cycle, of 4-to-6 years.</p>
                <p>The "Plus" in the product name signifies that we also seek to realize capital appreciation with a portion of the stock holdings to accentuate total investment returns of the strategy.</p>
                <p class="strategy-risk">*Indices are unmanaged and investors cannot invest directly in an index. The Standard &amp; Poor's 500 (S&amp;P 500) is a subjectively formed, unmanaged group of securities considered to be representative of the stock market in general. It is a market value weighted index with each stock's weight in the index proportionate to its market value.</p>
              </div>
            </article>
            <article class="strategy-panel" id="strategy-allcap">
              <div><p class="card-kicker">Flexible U.S. equity exposure</p><h3>Patrumin U.S. Allcap Equity Strategy</h3></div>
              <div>
                <p>The Patrumin U.S. Allcap Equity Strategy is our portfolio of best ideas. We construct this portfolio with U.S. stock investments that meet our rigorous, analytical, fundamentally-driven research process.</p>
                <p>The strategy's goal is to be balanced across the capitalization spectrum with exposure to smallcaps, midcaps and largecaps. The weighted average capitalization for the strategy is generally over $20bb, reflecting this diversification*.</p>
                <p>The strategy is a concentrated portfolio, between 40 to 60 stocks, offered in an SMA format. The investment objective is to seek to outperform the S&amp;P 500 by 2.00% to 3.00% annually via growth in capital, over a full market cycle.</p>
                <p>The investment style is core, with elements of growth, GARP and value investing included within the portfolio in order to maximize the number of investment opportunities for our clients. We consider Patrumin U.S. Allcap a "best ideas" strategy, irrespective of market capitalization and/or investment style.</p>
                <p>We believe that clients benefit from broad diversification in their equity investment portfolios. We also believe clients benefit from investing in companies across the market cap spectrum, or an all-cap approach.</p>
                <p>We are confident that our decades of experience investing in small and mid-sized companies, many of which have become today's global industry leaders, gives us a competitive advantage when it comes to stock selection in this asset class.</p>
                <p>We also seek out companies that we believe are undervalued relative to their earnings and cash generating potential, and we are especially attracted to companies that have products or services that fundamentally change the spending behavior of consumers or business customers.</p>
                <p class="strategy-risk">*Diversification does not guarantee a profit or protect against loss in a declining market; it is a method used to help mitigate investment risk.</p>
              </div>
            </article>
            <article class="strategy-panel" id="strategy-smicrocap">
              <div><p class="card-kicker">Emerging-company growth</p><h3>Patrumin U.S. SMICROCAP Growth Equity Strategy</h3></div>
              <div>
                <p>The strategy invests in smaller companies that are often included in the Russell 2000 and Russell Microcap Indices as well as new issues (IPOs). The strategy is the only "growth-style" product offered by Patrumin, and attempts to leverage additional exposure, or sector weightings, to growth-oriented sectors like technology, healthcare, industrials and consumer discretionary.</p>
                <p>The strategy will invest in volatile, smaller companies, including companies with equity market capitalizations below $100mm and occasionally companies with equity capitalizations greater than $5B. The strategy is constructed with stocks from multiple sectors of the economy.</p>
                <p>A key investment priority will be to attempt to identify and invest in companies that may experience rapid rates of growth, irrespective of the strategy's industry or sector weightings. We are especially attracted to companies that have products or services that fundamentally change spending behavior.</p>
                <p class="strategy-risk">Smaller and micro-capitalization securities may involve greater issuer, liquidity, and market risk than securities of larger, more established companies.</p>
              </div>
            </article>
            <article class="strategy-panel" id="strategy-balanced-equity-income">
              <div><p class="card-kicker">Growth &amp; income combined</p><h3>Patrumin Balanced Equity-Income Strategy</h3></div>
              <div>
                <p>The Patrumin Balanced Equity-Income Strategy is designed for investors seeking both capital appreciation and consistent income generation within a single, actively managed portfolio. The strategy combines dividend-paying equities with growth-oriented positions to pursue a balanced approach to total return.</p>
                <p>The strategy targets a diversified portfolio of U.S.-traded stocks that offer a combination of current income and growth potential, with particular emphasis on companies demonstrating durable free cash flow generation and a history of consistent dividend payment.</p>
                <p>Portfolio construction emphasizes sector diversification and company-level due diligence, drawing on Patrumin's more than 30 years of fundamental equity research experience. The strategy is offered in an SMA (separately managed account) format.</p>
                <p class="strategy-risk">Income-oriented strategies may be subject to risks including changes in dividend policy, interest rate sensitivity, and sector concentration. Diversification does not guarantee a profit or protect against loss in a declining market.</p>
              </div>
            </article>
            <article class="strategy-panel" id="strategy-custom-balanced">
              <div><p class="card-kicker">Personalized portfolio construction</p><h3>Patrumin Custom Balanced Strategy</h3></div>
              <div>
                <p>The Patrumin Custom Balanced Strategy offers a personalized approach to portfolio construction, tailored to each client's unique income, growth, risk, and tax parameters. Working closely with clients and their advisers, Patrumin constructs individually managed equity portfolios that reflect specific investment objectives and constraints.</p>
                <p>This strategy is appropriate for investors with meaningful account balances who require a high degree of customization — including tax-loss harvesting considerations, legacy holding restrictions, sector exclusions, or a defined income target alongside growth participation.</p>
                <p>Because every Custom Balanced portfolio is built from the ground up, clients benefit from Patrumin's full analytical process applied directly to their individual situation. Contact us to discuss how a custom balanced approach may align with your portfolio goals.</p>
                <p class="strategy-risk">Custom strategies involve additional complexity and may not be appropriate for all investors. Minimum account sizes apply. Please contact Patrumin for eligibility details.</p>
              </div>
            </article>
          </div>
          <div class="strategy-materials">
            <div><p class="card-kicker">Strategy materials</p><h3>Factsheets and additional information</h3></div>
            <p>Additional information about Patrumin equity strategies can be found in each product factsheet PDF, including performance, top ten positions, sector weightings, and detailed information about the strategy. To request further information about any Patrumin strategy, please email us at <a href="mailto:info@patrumin.com">info@patrumin.com</a>.</p>
            <a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Email For Strategy Materials</a>
          </div>`,
      review: `
          <div>
            <p class="eyebrow">GIPS Performance Records</p>
            <h2 id="performance-title">A clear look at fees, tax efficiency, holdings, and fit.</h2>
            <p>Patrumin's complimentary portfolio review is intended to help investors understand what they own, what they pay, where tax considerations may matter, and whether legacy holdings still serve their objectives.</p>
            <a class="button button--primary" href="#contact">Request Complimentary Review</a>
          </div>
          <div class="review-list">
            <article><h3>Fee Transparency</h3><p>Review advisory fees, embedded product expenses, and manager costs in plain language.</p></article>
            <article><h3>Tax Efficiency</h3><p>Identify taxable-account considerations and coordination points for an investor's tax advisers.</p></article>
            <article><h3>Legacy Holdings</h3><p>Evaluate concentrated positions, inherited securities, and holdings that may no longer align with long-term objectives.</p></article>
            <article><h3>Portfolio Fit</h3><p>Connect allocation, risk, income needs, and liquidity considerations without aggressive sales language.</p></article>
          </div>`,
      insights: `
          <div class="section-heading">
            <p class="eyebrow">Insights</p>
            <h2 id="insights-title">Market commentary and investor resources.</h2>
            <p>A reserved home for Patrumin commentary, strategy updates, white papers, and pricing information.</p>
          </div>
          <div class="card-grid card-grid--three">
            <article class="insight-card"><p class="card-kicker">Market commentary</p><h3>Quarterly notes coming soon</h3><p>Future updates can house market observations, portfolio themes, and commentary for clients and prospects.</p></article>
            <article class="insight-card"><p class="card-kicker">White paper</p><h3>Good Yield Is Hard To Find</h3><p>Existing Patrumin resource positioned as an investor education piece rather than a performance claim.</p></article>
            <article class="insight-card"><p class="card-kicker">Transparency</p><h3>Investment Management Pricing Information</h3><p>Pricing information and GIPS&reg; Composite Reports can be presented alongside appropriate disclosures.</p></article>
          </div>`,
      contact: `
          <div>
            <p class="eyebrow">Contact</p>
            <h2 id="contact-title">Start a confidential conversation.</h2>
            <p>For prospective clients, advisers, and families evaluating a more transparent portfolio management relationship or a complimentary portfolio review.</p>
          </div>
          <div class="contact-actions" aria-label="Contact options">
            <a class="contact-link" href="tel:+18447287864"><span>Phone</span>844-728-7864</a>
            <a class="contact-link" href="tel:+12393256498"><span>Office</span>239-325-6498</a>
            <a class="contact-link" href="mailto:info@patrumin.com"><span>Email</span>info@patrumin.com</a>
            <a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Portfolio%20Review%20Request">Request Complimentary Review</a>
          </div>`,
      footerDisclosures: `
        <p>This site is published for residents of the United States only. Investment adviser representatives may only conduct business with residents of the states and jurisdictions in which they are properly registered. A response to a request for information may be delayed until appropriate registration is obtained or exemption from registration is determined.</p>
        <p>Not all services referenced on this site are available in every state and through every adviser listed. For additional information, please contact <a href="mailto:info@patrumin.com">info@patrumin.com</a> or call <a href="tel:+18447287864">844-728-7864</a>.</p>
        <p>Past performance does not guarantee future results. Investing involves risk, including possible loss of principal. Information presented here is for educational purposes and should not be considered a guarantee or promise of investment results.</p>
        <p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | Privacy Policy | Legal Disclosures | Form ADV2</p>`
    }
  },
  zh: {
    title: "Patrumin Investors | 严谨的股票投资组合管理",
    description: "Patrumin Investors 是一家精品注册投资顾问，专注于严谨的股票投资组合管理、受托透明度和长期公司研究。",
    text: {
      skip: "跳至内容",
      registered: "注册投资顾问（RIA）",
      languageLabel: "语言",
      navAbout: "关于",
      navStrategies: "股票策略",
      navSmallcap: "美国小盘股票",
      navDividends: "美国 Dividends Plus+",
      navAllcap: "美国全市值股票",
      navSmicrocap: "美国 SMICROCAP 成长",
      navBalancedEqIncome: "平衡股票收益",
      navCustomBalanced: "定制平衡",
      navGipsComposite: "GIPS 组合报告",
      navPerformance: "业绩记录",
      navInsights: "洞察",
      navContact: "联系",
      navCta: "免费审阅",
      heroEyebrow: "精品 RIA | 美国股票投资组合",
      heroTitle: "Patrumin Investors",
      heroCopy: "独立投资组合管理，专注于耐心选股、自由现金流分析、透明费用以及面向高净值家庭和机构的风险意识型受托管理。",
      heroPrimary: "浏览策略",
      heroSecondary: "免费投资组合审阅",
      heroBandOne: "一次研究一家公司",
      heroBandTwo: "选股很重要",
      heroBandThree: "为长期投资者设计",
      footerAdvisory: "投资顾问服务由注册投资顾问 Patrumin Investors, LLC 提供。"
    },
    html: {
      heroLede: `The Analysis You Need<sup class="reg-mark">&reg;</sup>：面向长期美国股票投资组合的严谨分析。`,
      overview: `<div><p class="eyebrow">公司概览</p><h2>独立研究，配合私人客户式的纪律。</h2></div><div class="overview__copy"><p>Patrumin Investors 以公司层面的研究、耐心以及对企业如何长期产生现金流的清晰理解为核心。公司力求尽早识别可能改变消费者或企业客户支出方式的产品、服务和行业。</p><p>这些工作支持一个专注、透明、可重复并与受托责任相一致的美国股票投资流程。</p></div>`,
      principles: `<div class="section-heading"><p class="eyebrow">投资原则</p><h2 id="principles-title">耐心、审慎、纪律、专业。</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><span class="card-kicker">01</span><h3>耐心</h3><p>我们寻找可能在未来一至两年，而非数月内表现突出的股票。</p></article><article class="principle-card"><span class="card-kicker">02</span><h3>审慎</h3><p>在作出投资决定前，我们会评估潜在收益与风险的权衡。</p></article><article class="principle-card"><span class="card-kicker">03</span><h3>纪律</h3><p>我们关注自由现金流特征，并专注于拥有企业，而不是择时市场。</p></article><article class="principle-card"><span class="card-kicker">04</span><h3>专业</h3><p>数十年对公司、行业、板块和财务报表的研究形成了我们对商业变化的判断。</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">关于 Patrumin</p><h2 id="about-title">一家在配置资本之前重视分析的精品投资顾问。</h2><p>Patrumin 的投资管理团队拥有 30 多年美国股票市场经验。团队的广泛经验与视角为构建美国股票投资组合提供了基础。</p><p>Patrumin 结合实地研究、管理层交流、行业会议以及严谨的定性和财务分析。目标是在投入资本前理解公司、竞争对手及其行业地位。</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">“我们努力及早了解哪些产品和服务会改变消费者或企业客户的支出方式。”</p><h3 id="leader-title">Sam Dedio</h3><p>创始人兼投资组合经理</p></aside>`,
      strategy: `<div class="section-heading section-heading--wide"><p class="eyebrow">投资策略</p><h2 id="strategy-title">以研究为驱动的美国股票策略。</h2><p>Patrumin 的策略建立在自下而上的基本面研究、公司层面分析和有纪律的组合构建之上。每项策略旨在表达不同的机会集合，同时避免承诺投资表现。</p></div><div class="strategy-nav" aria-label="Strategy shortcuts"><a href="#strategy-smallcap">小盘</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-multicap">多市值</a><a href="#strategy-smicrocap">SMICROCAP 成长</a></div><div class="strategy-list"><article class="strategy-panel" id="strategy-smallcap"><div><p class="card-kicker">集中型小型公司股票</p><h3>Patrumin 美国小盘股票策略</h3></div><div><p>该策略是由较小型美国股票组成的集中投资组合。我们通常持有 40 至 70 只股票，以发挥自下而上基本面研究方法的作用。</p><p>策略通常投资于股本市值低于 40 亿美元的小型公司。Patrumin 采用机会主义方法，并不强调成长或价值等单一投资风格。</p><p>组合由多个经济板块的股票构成，这些板块可能经历不同的增长率。我们也寻找相对于盈利和现金产生潜力而言被低估的公司。</p><p>我们尤其关注那些产品或服务可能从根本上改变消费者或企业客户支出行为的公司。</p><p class="strategy-risk">小盘证券相比大盘证券具有更高的发行人风险，其市场可能波动更大且流动性更低。小盘公司证券通常交易量较低，发行人的盈利和前景也更易发生变化，因此市场波动可能更明显。</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div><p class="card-kicker">严谨的股票收入</p><h3>Patrumin 美国 Dividends Plus+ 股票策略</h3></div><div><p>该策略是我们因客户持续需求和咨询而创建的专业产品。两个强大的人口趋势是美国婴儿潮一代老龄化以及人口预期寿命不断提高，家庭需要在更长时间内寻找收入来源。</p><p>该组合专门构建为仅包含 25 只在美国交易并支付现金股息的股票，并通过多个经济板块实现分散。</p><p>该策略力求在 4 至 6 年、与经济周期相一致的市场周期内超过 S&amp;P 500* 的总回报。</p><p>产品名称中的 “Plus” 表示我们也希望通过部分持股实现资本增值，以增强该策略的总投资回报。</p><p class="strategy-risk">*指数不受管理，投资者不能直接投资指数。Standard &amp; Poor's 500（S&amp;P 500）是一个主观形成、非管理的证券组合，通常被认为代表整体股票市场。该指数按市值加权，每只股票在指数中的权重与其市值成比例。</p></div></article><article class="strategy-panel" id="strategy-multicap"><div><p class="card-kicker">灵活的美国股票敞口</p><h3>Patrumin 美国多市值股票策略</h3></div><div><p>该策略是我们的最佳想法投资组合。我们以符合严谨、分析性、基本面驱动研究流程的美国股票投资构建该组合。</p><p>策略目标是在小盘、中盘和大盘之间保持平衡。其加权平均市值通常超过 200 亿美元，反映了这种分散性*。</p><p>该策略是集中型投资组合，通常持有 40 至 60 只股票，并以单独管理账户形式提供。其投资目标是在完整市场周期内，通过资本增长力求每年较 S&amp;P 500 高出 2.00% 至 3.00%。</p><p>投资风格为核心型，同时包含成长、GARP 和价值投资元素，以扩大客户的投资机会。我们将其视为不受市值或风格限制的最佳想法策略。</p><p>我们认为客户受益于跨经济板块以及跨市值谱系的股票组合分散。我们在中小型公司投资方面的经验，其中许多公司已成长为全球行业领导者，有助于我们的选股能力。</p><p>我们寻找相对于盈利和现金产生潜力而言被低估的公司，尤其关注产品或服务能改变消费者或企业客户支出行为的公司。</p><p class="strategy-risk">*分散投资并不能保证盈利，也不能防止下跌市场中的损失；它是一种用于帮助降低投资风险的方法。</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div><p class="card-kicker">新兴公司成长</p><h3>Patrumin 美国 SMICROCAP 成长股票策略</h3></div><div><p>该策略投资于较小型公司，这些公司通常包含在 Russell 2000 和 Russell Microcap 指数中，也包括新股发行（IPO）。这是 Patrumin 唯一的成长风格产品，并尝试增加对科技、医疗保健、工业和非必需消费等成长型板块的敞口。</p><p>策略会投资于波动较高的小型公司，包括股本市值低于 1 亿美元的公司，偶尔也包括股本市值高于 50 亿美元的公司。该策略由多个经济板块的股票构成。</p><p>核心投资重点是尝试识别并投资可能快速增长的公司，不受行业或板块权重限制。我们尤其关注产品或服务可能改变支出行为的公司。</p><p class="strategy-risk">小型和微型市值证券可能比大型、更成熟公司的证券具有更高的发行人、流动性和市场风险。</p></div></article></div><div class="strategy-materials"><div><p class="card-kicker">策略资料</p><h3>事实表和更多信息</h3></div><p>Patrumin 美国小盘股票策略、美国 Dividends Plus+ 股票策略和美国多市值股票策略的产品事实表 PDF 包含表现、前十大持仓、板块权重和策略详细信息。如需了解美国 SMICROCAP 成长股票策略或任何 Patrumin 策略，请发送邮件至 <a href="mailto:info@patrumin.com">info@patrumin.com</a>。</p><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">索取策略资料</a></div>`,
      review: `<div><p class="eyebrow">免费投资组合审阅</p><h2 id="review-title">清晰审阅费用、税务效率、持仓和适配性。</h2><p>Patrumin 的免费投资组合审阅旨在帮助投资者理解自己持有什么、支付什么费用、税务因素可能在哪里重要，以及既有持仓是否仍符合长期目标。</p><a class="button button--primary" href="#contact">申请免费审阅</a></div><div class="review-list"><article><h3>费用透明度</h3><p>以清晰语言审阅顾问费、产品内含费用和管理人成本。</p></article><article><h3>税务效率</h3><p>识别应税账户因素以及与投资者税务顾问协调的要点。</p></article><article><h3>既有持仓</h3><p>评估集中持仓、继承证券以及可能不再符合长期目标的投资。</p></article><article><h3>组合适配性</h3><p>连接配置、风险、收入需求和流动性因素，不采用激进销售语言。</p></article></div>`,
      insights: `<div class="section-heading"><p class="eyebrow">洞察</p><h2 id="insights-title">市场评论和投资者资源。</h2><p>这里将用于发布 Patrumin 评论、策略更新、白皮书和定价信息。</p></div><div class="card-grid card-grid--three"><article class="insight-card"><p class="card-kicker">市场评论</p><h3>季度笔记即将推出</h3><p>未来可发布市场观察、组合主题以及面向客户和潜在客户的评论。</p></article><article class="insight-card"><p class="card-kicker">白皮书</p><h3>Good Yield Is Hard To Find</h3><p>现有 Patrumin 资源，可定位为投资者教育内容，而非表现声明。</p></article><article class="insight-card"><p class="card-kicker">透明度</p><h3>投资管理定价信息</h3><p>定价信息和 GIPS&reg; 综合报告可与适当披露一起展示。</p></article></div>`,
      contact: `<div><p class="eyebrow">联系</p><h2 id="contact-title">开启保密对话。</h2><p>适用于正在评估更透明投资组合管理关系或免费投资组合审阅的潜在客户、顾问和家庭。</p></div><div class="contact-actions" aria-label="Contact options"><a class="contact-link" href="tel:+18447287864"><span>电话</span>844-728-7864</a><a class="contact-link" href="tel:+12393256498"><span>办公室</span>239-325-6498</a><a class="contact-link" href="mailto:info@patrumin.com"><span>电子邮件</span>info@patrumin.com</a><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Portfolio%20Review%20Request">申请免费审阅</a></div>`,
      footerDisclosures: `<p>本网站仅面向美国居民发布。投资顾问代表仅可与其已正式注册或符合豁免条件的州和司法辖区居民开展业务。对信息请求的回复可能会延迟，直至完成适当注册或确定注册豁免。</p><p>本网站提及的服务并非在每个州或通过每位顾问均可提供。如需更多信息，请联系 <a href="mailto:info@patrumin.com">info@patrumin.com</a> 或致电 <a href="tel:+18447287864">844-728-7864</a>。</p><p>过去表现并不保证未来结果。投资涉及风险，包括可能损失本金。本网站信息仅供教育用途，不应被视为投资结果的保证或承诺。</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | 隐私政策 | 法律披露 | Form ADV2</p>`
    }
  }
};

const extendTranslations = () => {
  const en = translations.en;
  translations.es = {
    title: "Patrumin Investors | Gestion disciplinada de carteras de renta variable",
    description: "Patrumin Investors es un asesor de inversiones registrado boutique enfocado en gestión disciplinada de carteras de renta variable, transparencia fiduciaria e investigación empresarial de largo plazo.",
    text: {
      ...en.text,
      skip: "Saltar al contenido",
      registered: "Asesor de Inversiones Registrado (RIA)",
      languageLabel: "Idioma",
      navAbout: "Acerca de",
      navStrategies: "Estrategias de Acciones",
      navSmallcap: "Renta variable smallcap de EE. UU.",
      navDividends: "Dividends Plus+ de EE. UU.",
      navAllcap: "Renta variable allcap de EE. UU.",
      navSmicrocap: "Crecimiento U.S. SMICROCAP",
      navBalancedEqIncome: "Acciones-Renta Equilibrado",
      navCustomBalanced: "Equilibrado Personalizado",
      navGipsComposite: "Informes Compuestos GIPS",
      navPerformance: "Rendimiento",
      navInsights: "Perspectivas",
      navContact: "Contacto",
      navCta: "Revisión sin costo",
      heroEyebrow: "RIA boutique | Carteras de renta variable de EE. UU.",
      heroCopy: "Gestión independiente de carteras enfocada en selección paciente de acciones, análisis de flujo de caja libre, comisiones transparentes y administración fiduciaria consciente del riesgo para familias e instituciones de alto patrimonio.",
      heroPrimary: "Explorar estrategias",
      heroSecondary: "Revisión de cartera sin costo",
      heroBandOne: "Una compañía a la vez",
      heroBandTwo: "La selección de acciones importa",
      heroBandThree: "Diseñado para inversionistas de largo plazo",
      footerAdvisory: "Los servicios de asesoría de inversiones son ofrecidos por Patrumin Investors, LLC, un asesor de inversiones registrado."
    },
    html: {
      ...en.html,
      heroLede: `The Analysis You Need<sup class="reg-mark">&reg;</sup> para carteras de renta variable disciplinadas y de largo plazo.`,
      overview: `<div><p class="eyebrow">Resumen de la firma</p><h2>Investigación independiente con disciplina de cliente privado.</h2></div><div class="overview__copy"><p>Patrumin Investors se basa en investigación a nivel de compañía, paciencia y una comprensión clara de cómo las empresas generan efectivo a lo largo del tiempo. La firma busca identificar temprano qué productos, servicios e industrias pueden cambiar el gasto de consumidores o empresas.</p><p>Ese trabajo respalda un proceso enfocado de renta variable de EE. UU., diseñado para ser transparente, repetible y alineado con obligaciones fiduciarias.</p></div>`,
      principles: `<div class="section-heading"><p class="eyebrow">Principios de inversión</p><h2 id="principles-title">Paciente, reflexivo, disciplinado, conocedor.</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><span class="card-kicker">01</span><h3>Paciente</h3><p>Buscamos acciones que puedan destacarse durante los próximos uno a dos años, no meses.</p></article><article class="principle-card"><span class="card-kicker">02</span><h3>Reflexivo</h3><p>Consideramos las compensaciones entre recompensa potencial y riesgo antes de tomar decisiones de inversión.</p></article><article class="principle-card"><span class="card-kicker">03</span><h3>Disciplinado</h3><p>Analizamos las características de flujo de caja libre y nos enfocamos en poseer negocios, no en cronometrar mercados.</p></article><article class="principle-card"><span class="card-kicker">04</span><h3>Conocedor</h3><p>Décadas de investigación de compañías, sectores, industrias y estados financieros informan nuestra visión del cambio empresarial.</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">Acerca de Patrumin</p><h2 id="about-title">Un asesor boutique enfocado en el análisis antes de asignar capital.</h2><p>El equipo de gestión de inversiones de Patrumin cuenta con más de 30 años de experiencia navegando el mercado de renta variable estadounidense. Su experiencia y perspectiva ofrecen una base para construir carteras de acciones de EE. UU.</p><p>Patrumin combina investigación de campo, conversaciones con equipos directivos, conferencias sectoriales y análisis cualitativo y financiero riguroso. El objetivo es comprender una compañía, sus competidores y su posición en la industria antes de comprometer capital.</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">"Nos esforzamos por saber temprano qué productos y servicios cambiarán el gasto de consumidores o empresas."</p><h3 id="leader-title">Sam Dedio</h3><p>Fundador y gestor de cartera</p></aside>`,
      strategy: `<div class="section-heading section-heading--wide"><p class="eyebrow">Estrategias de inversión</p><h2 id="strategy-title">Estrategias de renta variable de EE. UU. guiadas por investigación.</h2><p>Las estrategias de Patrumin se basan en investigación fundamental de abajo hacia arriba, análisis a nivel de compañía y construcción disciplinada de carteras. Cada estrategia está diseñada para expresar un conjunto de oportunidades distinto sin depender de promesas de rendimiento.</p></div><div class="strategy-nav" aria-label="Strategy shortcuts"><a href="#strategy-smallcap">Smallcap</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-multicap">Multicap</a><a href="#strategy-smicrocap">SMICROCAP Growth</a></div><div class="strategy-list"><article class="strategy-panel" id="strategy-smallcap"><div><p class="card-kicker">Renta variable concentrada de compañías pequeñas</p><h3>Estrategia Patrumin U.S. Smallcap Equity</h3></div><div><p>La estrategia es una cartera concentrada de acciones estadounidenses de menor capitalización. Generalmente mantenemos entre 40 y 70 acciones para aprovechar nuestro enfoque de investigación fundamental de abajo hacia arriba.</p><p>Invierte en compañías pequeñas, normalmente con capitalizaciones bursátiles inferiores a $4B. Patrumin emplea un enfoque oportunista que no enfatiza un solo estilo de inversión, como crecimiento o valor.</p><p>Las carteras diversificadas se construyen con acciones de múltiples sectores de la economía, que pueden experimentar diferentes tasas de crecimiento. También buscamos invertir en compañías que creemos infravaloradas en relación con sus ganancias y potencial de generación de efectivo.</p><p>Nos atraen especialmente compañías cuyos productos o servicios pueden cambiar de forma fundamental el comportamiento de gasto de consumidores o clientes empresariales.</p><p class="strategy-risk">Los valores de pequeña capitalización implican mayor riesgo de emisor que los de mayor capitalización, y sus mercados pueden ser más volátiles y menos líquidos. Las compañías pequeñas pueden estar sujetas a movimientos de mercado más volátiles porque sus valores suelen negociarse con menor volumen y sus emisores son más sensibles a cambios en ganancias y perspectivas.</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div><p class="card-kicker">Renta de acciones disciplinada</p><h3>Estrategia Patrumin U.S. Dividends Plus+ Equity</h3></div><div><p>La estrategia Dividends Plus+ es un producto especializado creado por solicitudes e inquietudes persistentes de clientes. Dos tendencias demográficas poderosas son el envejecimiento de la generación baby boomer en Estados Unidos y el aumento de la esperanza de vida; las familias necesitan encontrar formas de generar ingresos por más tiempo.</p><p>La cartera se construye específicamente con solo 25 acciones negociadas en EE. UU. que pagan dividendos en efectivo y está diversificada en múltiples sectores económicos.</p><p>La estrategia busca superar el rendimiento total del S&amp;P 500* durante un ciclo de mercado, coincidente con un ciclo económico, de 4 a 6 años.</p><p>El "Plus" del nombre significa que también buscamos lograr apreciación de capital con parte de las posiciones para acentuar los rendimientos totales de la estrategia.</p><p class="strategy-risk">*Los índices no son gestionados y no se puede invertir directamente en un índice. El Standard &amp; Poor's 500 (S&amp;P 500) es un grupo no gestionado de valores considerado representativo del mercado accionario general. Es un índice ponderado por valor de mercado.</p></div></article><article class="strategy-panel" id="strategy-multicap"><div><p class="card-kicker">Exposición flexible a acciones de EE. UU.</p><h3>Estrategia Patrumin U.S. Multicap Equity</h3></div><div><p>La estrategia Multicap es nuestra cartera de mejores ideas. Se construye con inversiones en acciones de EE. UU. que cumplen nuestro proceso de investigación riguroso, analítico y basado en fundamentales.</p><p>Su objetivo es estar equilibrada a lo largo del espectro de capitalización, con exposición a smallcaps, midcaps y largecaps. La capitalización promedio ponderada generalmente supera los $20bb, reflejando esta diversificación*.</p><p>Es una cartera concentrada, entre 40 y 60 acciones, ofrecida en formato SMA. El objetivo de inversión es buscar superar al S&amp;P 500 en 2.00% a 3.00% anual mediante crecimiento de capital, durante un ciclo de mercado completo.</p><p>El estilo es core, con elementos de crecimiento, GARP y valor para maximizar oportunidades. La consideramos una estrategia de mejores ideas, independientemente de capitalización o estilo.</p><p>Creemos que los clientes se benefician de diversificación amplia, tanto por sectores como a través del espectro de capitalización. Nuestra experiencia en compañías pequeñas y medianas, muchas hoy líderes globales, aporta perspectiva en esta clase de activos.</p><p>También buscamos compañías que consideramos infravaloradas en relación con sus ganancias y generación de efectivo, especialmente aquellas cuyos productos o servicios cambian el comportamiento de gasto.</p><p class="strategy-risk">*La diversificación no garantiza ganancias ni protege contra pérdidas en un mercado bajista; es un método usado para ayudar a mitigar el riesgo de inversión.</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div><p class="card-kicker">Crecimiento de compañías emergentes</p><h3>Estrategia Patrumin U.S. SMICROCAP Growth Equity</h3></div><div><p>La estrategia invierte en compañías más pequeñas, incluidas con frecuencia en los índices Russell 2000 y Russell Microcap, así como en nuevas emisiones (IPOs). Es el único producto de estilo crecimiento de Patrumin y busca exposición adicional a sectores orientados al crecimiento como tecnología, salud, industriales y consumo discrecional.</p><p>Invertirá en compañías pequeñas y volátiles, incluidas aquellas con capitalizaciones inferiores a $100mm y ocasionalmente superiores a $5B. La cartera se construye con acciones de múltiples sectores.</p><p>Una prioridad clave es identificar e invertir en compañías que puedan experimentar tasas rápidas de crecimiento, independientemente de ponderaciones sectoriales. Nos atraen especialmente compañías con productos o servicios que cambian comportamientos de gasto.</p><p class="strategy-risk">Los valores de pequeña y micro capitalización pueden implicar mayor riesgo de emisor, liquidez y mercado que los valores de compañías más grandes y establecidas.</p></div></article></div><div class="strategy-materials"><div><p class="card-kicker">Materiales de estrategia</p><h3>Factsheets e información adicional</h3></div><p>La información adicional sobre las estrategias U.S. Smallcap Equity, U.S. Dividends Plus+ Equity y U.S. Multicap Equity puede encontrarse en el PDF de factsheet de cada producto, incluyendo rendimiento, diez principales posiciones, ponderaciones sectoriales e información detallada. Para solicitar más información sobre U.S. SMICROCAP Growth Equity, o cualquier estrategia de Patrumin, escriba a <a href="mailto:info@patrumin.com">info@patrumin.com</a>.</p><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Solicitar materiales</a></div>`,
      review: `<div><p class="eyebrow">Revisión de cartera sin costo</p><h2 id="review-title">Una mirada clara a comisiones, eficiencia fiscal, posiciones y ajuste.</h2><p>La revisión de cartera sin costo de Patrumin está diseñada para ayudar a los inversionistas a entender qué poseen, qué pagan, dónde pueden importar las consideraciones fiscales y si las posiciones heredadas aún sirven a sus objetivos.</p><a class="button button--primary" href="#contact">Solicitar revisión sin costo</a></div><div class="review-list"><article><h3>Transparencia de comisiones</h3><p>Revisión clara de honorarios de asesoría, gastos incluidos en productos y costos de gestores.</p></article><article><h3>Eficiencia fiscal</h3><p>Identificación de consideraciones para cuentas imponibles y puntos de coordinación con asesores fiscales.</p></article><article><h3>Posiciones heredadas</h3><p>Evaluación de posiciones concentradas, valores heredados e inversiones que quizá ya no se alineen con objetivos de largo plazo.</p></article><article><h3>Ajuste de cartera</h3><p>Conexión entre asignación, riesgo, necesidades de ingresos y liquidez sin lenguaje de venta agresivo.</p></article></div>`,
      insights: `<div class="section-heading"><p class="eyebrow">Perspectivas</p><h2 id="insights-title">Comentario de mercado y recursos para inversionistas.</h2><p>Un espacio reservado para comentarios de Patrumin, actualizaciones de estrategia, documentos técnicos e información de precios.</p></div><div class="card-grid card-grid--three"><article class="insight-card"><p class="card-kicker">Comentario de mercado</p><h3>Notas trimestrales próximamente</h3><p>Las futuras actualizaciones pueden incluir observaciones de mercado, temas de cartera y comentarios para clientes y prospectos.</p></article><article class="insight-card"><p class="card-kicker">Documento técnico</p><h3>Good Yield Is Hard To Find</h3><p>Recurso existente de Patrumin presentado como educación para inversionistas, no como afirmación de rendimiento.</p></article><article class="insight-card"><p class="card-kicker">Transparencia</p><h3>Información de precios de gestión de inversiones</h3><p>La información de precios y reportes GIPS&reg; Composite pueden presentarse junto con divulgaciones apropiadas.</p></article></div>`,
      contact: `<div><p class="eyebrow">Contacto</p><h2 id="contact-title">Inicie una conversación confidencial.</h2><p>Para clientes potenciales, asesores y familias que evalúan una relación de gestión de cartera más transparente o una revisión de cartera sin costo.</p></div><div class="contact-actions" aria-label="Contact options"><a class="contact-link" href="tel:+18447287864"><span>Teléfono</span>844-728-7864</a><a class="contact-link" href="tel:+12393256498"><span>Oficina</span>239-325-6498</a><a class="contact-link" href="mailto:info@patrumin.com"><span>Email</span>info@patrumin.com</a><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Portfolio%20Review%20Request">Solicitar revisión sin costo</a></div>`,
      footerDisclosures: `<p>Este sitio se publica únicamente para residentes de Estados Unidos. Los representantes de asesores de inversión solo pueden realizar negocios con residentes de estados y jurisdicciones donde estén debidamente registrados. La respuesta a una solicitud de información puede demorarse hasta obtener el registro apropiado o determinar una exención.</p><p>No todos los servicios mencionados están disponibles en todos los estados ni a través de todos los asesores. Para más información, contacte <a href="mailto:info@patrumin.com">info@patrumin.com</a> o llame al <a href="tel:+18447287864">844-728-7864</a>.</p><p>El rendimiento pasado no garantiza resultados futuros. Invertir implica riesgo, incluida la posible pérdida de capital. La información se presenta con fines educativos y no debe considerarse garantía o promesa de resultados.</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | Política de privacidad | Divulgaciones legales | Form ADV2</p>`
    }
  };
  translations.fr = {
    title: "Patrumin Investors | Gestion disciplinée de portefeuilles actions",
    description: "Patrumin Investors est un conseiller en investissement enregistré de type boutique, axé sur la gestion disciplinée de portefeuilles actions, la transparence fiduciaire et la recherche fondamentale de long terme.",
    text: {
      ...translations.es.text,
      skip: "Aller au contenu",
      registered: "Conseiller en Investissement Enregistré (RIA)",
      languageLabel: "Langue",
      navAbout: "À propos",
      navStrategies: "Stratégies Actions",
      navSmallcap: "Actions smallcap américaines",
      navDividends: "Dividends Plus+ américain",
      navAllcap: "Actions allcap américaines",
      navSmicrocap: "Croissance U.S. SMICROCAP",
      navBalancedEqIncome: "Actions-Revenu Équilibré",
      navCustomBalanced: "Équilibré Personnalisé",
      navGipsComposite: "Rapports Composites GIPS",
      navPerformance: "Performance",
      navInsights: "Analyses",
      navContact: "Contact",
      navCta: "Revue offerte",
      heroEyebrow: "RIA boutique | Portefeuilles actions américaines",
      heroCopy: "Gestion indépendante de portefeuilles axée sur une sélection patiente de titres, l'analyse du flux de trésorerie disponible, des frais transparents et une approche fiduciaire consciente du risque pour les familles et institutions fortunées.",
      heroPrimary: "Explorer les stratégies",
      heroSecondary: "Revue de portefeuille offerte",
      heroBandOne: "Une entreprise à la fois",
      heroBandTwo: "La sélection de titres compte",
      heroBandThree: "Conçu pour les investisseurs de long terme",
      footerAdvisory: "Les services de conseil en investissement sont offerts par Patrumin Investors, LLC, conseiller en investissement enregistré."
    },
    html: {
      ...en.html,
      heroLede: `The Analysis You Need<sup class="reg-mark">&reg;</sup> pour des portefeuilles actions disciplinés de long terme.`,
      overview: `<div><p class="eyebrow">Présentation de la société</p><h2>Recherche indépendante et discipline de clientèle privée.</h2></div><div class="overview__copy"><p>Patrumin Investors repose sur la recherche entreprise par entreprise, la patience et une compréhension claire de la manière dont les sociétés génèrent des flux de trésorerie dans le temps. La société cherche à identifier tôt les produits, services et secteurs susceptibles de modifier les dépenses des consommateurs ou des entreprises.</p><p>Ce travail soutient un processus actions américaines ciblé, transparent, reproductible et aligné sur les obligations fiduciaires.</p></div>`,
      principles: `<div class="section-heading"><p class="eyebrow">Principes d'investissement</p><h2 id="principles-title">Patient, réfléchi, discipliné, compétent.</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><span class="card-kicker">01</span><h3>Patient</h3><p>Nous recherchons des actions susceptibles de se distinguer sur un horizon d'un à deux ans, pas de quelques mois.</p></article><article class="principle-card"><span class="card-kicker">02</span><h3>Réfléchi</h3><p>Nous évaluons les compromis entre rendement potentiel et risque avant toute décision d'investissement.</p></article><article class="principle-card"><span class="card-kicker">03</span><h3>Discipliné</h3><p>Nous analysons le flux de trésorerie disponible et nous concentrons sur la détention d'entreprises plutôt que sur le market timing.</p></article><article class="principle-card"><span class="card-kicker">04</span><h3>Compétent</h3><p>Des décennies d'analyse de sociétés, secteurs, industries et états financiers nourrissent notre lecture du changement économique.</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">À propos de Patrumin</p><h2 id="about-title">Un conseiller boutique axé sur l'analyse avant l'allocation.</h2><p>L'équipe de gestion de Patrumin possède plus de 30 ans d'expérience sur le marché actions américain. Cette expérience fournit une base pour construire des portefeuilles d'actions américaines.</p><p>Patrumin combine recherche de terrain, échanges avec les directions, conférences sectorielles et analyse qualitative et financière rigoureuse. L'objectif est de comprendre une société, ses concurrents et sa position sectorielle avant d'engager du capital.</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">« Nous nous efforçons d'identifier tôt les produits et services qui changeront les dépenses des consommateurs ou des entreprises. »</p><h3 id="leader-title">Sam Dedio</h3><p>Fondateur et gérant de portefeuille</p></aside>`,
      strategy: `<div class="section-heading section-heading--wide"><p class="eyebrow">Stratégies d'investissement</p><h2 id="strategy-title">Stratégies actions américaines guidées par la recherche.</h2><p>Les stratégies de Patrumin reposent sur la recherche fondamentale bottom-up, l'analyse entreprise par entreprise et une construction de portefeuille disciplinée. Chaque stratégie vise un univers d'opportunités distinct sans promesse de performance.</p></div><div class="strategy-nav" aria-label="Strategy shortcuts"><a href="#strategy-smallcap">Smallcap</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-multicap">Multicap</a><a href="#strategy-smicrocap">SMICROCAP Growth</a></div><div class="strategy-list"><article class="strategy-panel" id="strategy-smallcap"><div><p class="card-kicker">Actions concentrées de petites sociétés</p><h3>Stratégie Patrumin U.S. Smallcap Equity</h3></div><div><p>La stratégie est un portefeuille concentré de petites actions américaines. Nous détenons généralement 40 à 70 titres afin de tirer parti de notre approche de recherche fondamentale bottom-up.</p><p>Elle investit dans de petites sociétés, généralement avec une capitalisation inférieure à $4B. Patrumin adopte une approche opportuniste qui ne privilégie pas un style unique, croissance ou valeur.</p><p>Les portefeuilles sont construits avec des titres de plusieurs secteurs, qui peuvent connaître des rythmes de croissance différents. Nous recherchons aussi des sociétés que nous estimons sous-évaluées au regard de leurs bénéfices et de leur potentiel de génération de trésorerie.</p><p>Nous sommes particulièrement attirés par les sociétés dont les produits ou services peuvent modifier fondamentalement le comportement de dépense des consommateurs ou entreprises.</p><p class="strategy-risk">Les titres de petite capitalisation comportent un risque émetteur plus élevé que les grandes capitalisations, et leurs marchés peuvent être plus volatils et moins liquides.</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div><p class="card-kicker">Revenu actions discipliné</p><h3>Stratégie Patrumin U.S. Dividends Plus+ Equity</h3></div><div><p>La stratégie Dividends Plus+ est un produit spécialisé créé en réponse aux demandes récurrentes des clients. Deux tendances démographiques importantes sont le vieillissement des baby-boomers américains et l'allongement de l'espérance de vie; les familles doivent générer des revenus sur des périodes plus longues.</p><p>Le portefeuille comprend uniquement 25 actions cotées aux États-Unis versant des dividendes en espèces, diversifiées sur plusieurs secteurs économiques.</p><p>La stratégie cherche à dépasser le rendement total du S&amp;P 500* sur un cycle de marché de 4 à 6 ans, coïncidant avec un cycle économique.</p><p>Le « Plus » indique que nous cherchons également une appréciation du capital sur une partie des titres afin de renforcer le rendement total.</p><p class="strategy-risk">*Les indices ne sont pas gérés et les investisseurs ne peuvent pas investir directement dans un indice. Le Standard &amp; Poor's 500 (S&amp;P 500) est un groupe non géré de titres considéré comme représentatif du marché actions général.</p></div></article><article class="strategy-panel" id="strategy-multicap"><div><p class="card-kicker">Exposition flexible aux actions américaines</p><h3>Stratégie Patrumin U.S. Multicap Equity</h3></div><div><p>La stratégie Multicap est notre portefeuille de meilleures idées. Elle est construite avec des actions américaines répondant à notre processus de recherche rigoureux, analytique et fondamental.</p><p>Elle vise un équilibre sur l'ensemble du spectre de capitalisation, avec exposition aux petites, moyennes et grandes capitalisations. La capitalisation moyenne pondérée dépasse généralement $20bb, reflétant cette diversification*.</p><p>Il s'agit d'un portefeuille concentré de 40 à 60 titres, proposé en compte géré séparément. L'objectif est de chercher à dépasser le S&amp;P 500 de 2,00 % à 3,00 % par an via la croissance du capital sur un cycle complet.</p><p>Le style est core, avec des éléments croissance, GARP et valeur. Nous considérons cette stratégie comme un portefeuille de meilleures idées, indépendamment de la capitalisation ou du style.</p><p>Nous pensons que les clients bénéficient d'une diversification par secteurs et par capitalisations. Notre expérience dans les petites et moyennes sociétés apporte une perspective utile pour la sélection de titres.</p><p>Nous recherchons des sociétés sous-évaluées au regard de leurs bénéfices et de leur génération de trésorerie, notamment celles dont les produits ou services changent les comportements de dépense.</p><p class="strategy-risk">*La diversification ne garantit pas un profit et ne protège pas contre les pertes dans un marché baissier; elle vise à aider à atténuer le risque d'investissement.</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div><p class="card-kicker">Croissance de sociétés émergentes</p><h3>Stratégie Patrumin U.S. SMICROCAP Growth Equity</h3></div><div><p>La stratégie investit dans de plus petites sociétés souvent incluses dans les indices Russell 2000 et Russell Microcap, ainsi que dans de nouvelles émissions (IPO). C'est le seul produit de style croissance de Patrumin et il cherche une exposition accrue aux secteurs orientés croissance comme la technologie, la santé, l'industrie et la consommation discrétionnaire.</p><p>Elle investira dans des sociétés plus petites et volatiles, y compris avec des capitalisations inférieures à $100mm et parfois supérieures à $5B. Le portefeuille est construit à partir de plusieurs secteurs.</p><p>Une priorité est d'identifier des sociétés susceptibles de connaître une croissance rapide, indépendamment des pondérations sectorielles. Nous sommes attirés par les sociétés dont les produits ou services changent les comportements de dépense.</p><p class="strategy-risk">Les titres de petites et micro-capitalisations peuvent présenter des risques émetteur, liquidité et marché plus élevés que les titres de sociétés plus grandes et établies.</p></div></article></div><div class="strategy-materials"><div><p class="card-kicker">Documents de stratégie</p><h3>Factsheets et informations complémentaires</h3></div><p>Des informations supplémentaires sur les stratégies U.S. Smallcap Equity, U.S. Dividends Plus+ Equity et U.S. Multicap Equity figurent dans les PDF de factsheet, notamment performance, dix principales positions, pondérations sectorielles et détails de stratégie. Pour demander plus d'informations sur U.S. SMICROCAP Growth Equity ou toute stratégie Patrumin, écrivez à <a href="mailto:info@patrumin.com">info@patrumin.com</a>.</p><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">Demander les documents</a></div>`,
      review: `<div><p class="eyebrow">Revue de portefeuille offerte</p><h2 id="review-title">Une vision claire des frais, de l'efficacité fiscale, des positions et de l'adéquation.</h2><p>La revue de portefeuille offerte par Patrumin vise à aider les investisseurs à comprendre ce qu'ils détiennent, ce qu'ils paient, les considérations fiscales pertinentes et si les positions historiques servent encore leurs objectifs.</p><a class="button button--primary" href="#contact">Demander une revue offerte</a></div><div class="review-list"><article><h3>Transparence des frais</h3><p>Revue claire des frais de conseil, des coûts intégrés aux produits et des frais de gestion.</p></article><article><h3>Efficacité fiscale</h3><p>Identification des points à considérer pour les comptes imposables et coordination avec les conseils fiscaux.</p></article><article><h3>Positions historiques</h3><p>Évaluation des positions concentrées, titres hérités et placements qui peuvent ne plus correspondre aux objectifs de long terme.</p></article><article><h3>Adéquation du portefeuille</h3><p>Lien entre allocation, risque, besoins de revenu et liquidité, sans langage commercial agressif.</p></article></div>`,
      insights: `<div class="section-heading"><p class="eyebrow">Analyses</p><h2 id="insights-title">Commentaires de marché et ressources investisseurs.</h2><p>Un espace réservé aux commentaires de Patrumin, mises à jour de stratégie, livres blancs et informations de tarification.</p></div><div class="card-grid card-grid--three"><article class="insight-card"><p class="card-kicker">Commentaire de marché</p><h3>Notes trimestrielles à venir</h3><p>Les futures mises à jour pourront inclure observations de marché, thèmes de portefeuille et commentaires pour clients et prospects.</p></article><article class="insight-card"><p class="card-kicker">Livre blanc</p><h3>Good Yield Is Hard To Find</h3><p>Ressource Patrumin existante présentée comme contenu éducatif, non comme promesse de performance.</p></article><article class="insight-card"><p class="card-kicker">Transparence</p><h3>Information sur la tarification de la gestion</h3><p>Les informations de tarification et rapports GIPS&reg; Composite peuvent être présentés avec les divulgations appropriées.</p></article></div>`,
      contact: `<div><p class="eyebrow">Contact</p><h2 id="contact-title">Commençons une conversation confidentielle.</h2><p>Pour les clients potentiels, conseillers et familles qui évaluent une relation de gestion de portefeuille plus transparente ou une revue de portefeuille offerte.</p></div><div class="contact-actions" aria-label="Contact options"><a class="contact-link" href="tel:+18447287864"><span>Téléphone</span>844-728-7864</a><a class="contact-link" href="tel:+12393256498"><span>Bureau</span>239-325-6498</a><a class="contact-link" href="mailto:info@patrumin.com"><span>Email</span>info@patrumin.com</a><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Portfolio%20Review%20Request">Demander une revue offerte</a></div>`,
      footerDisclosures: `<p>Ce site est publié uniquement pour les résidents des États-Unis. Les représentants de conseillers en investissement ne peuvent exercer qu'auprès de résidents des États et juridictions où ils sont dûment enregistrés. Une réponse à une demande d'information peut être différée jusqu'à obtention de l'enregistrement approprié ou détermination d'une exemption.</p><p>Tous les services mentionnés ne sont pas disponibles dans tous les États ni par l'intermédiaire de chaque conseiller. Pour plus d'informations, contactez <a href="mailto:info@patrumin.com">info@patrumin.com</a> ou appelez le <a href="tel:+18447287864">844-728-7864</a>.</p><p>Les performances passées ne garantissent pas les résultats futurs. Investir comporte des risques, y compris une perte possible du capital. Les informations sont fournies à des fins éducatives et ne constituent pas une garantie ou promesse de résultats.</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | Politique de confidentialité | Mentions légales | Form ADV2</p>`
    }
  };
  translations.ja = {
    title: "Patrumin Investors | 規律ある株式ポートフォリオ運用",
    description: "Patrumin Investors は、規律ある株式ポートフォリオ運用、受託者としての透明性、長期的な企業調査に重点を置くブティック型登録投資顧問です。",
    text: {
      ...translations.es.text,
      skip: "本文へ移動",
      registered: "登録投資顧問（RIA）",
      languageLabel: "言語",
      navAbout: "会社情報",
      navStrategies: "株式戦略",
      navSmallcap: "米国小型株式",
      navDividends: "米国 Dividends Plus+",
      navAllcap: "米国オールキャップ株式",
      navSmicrocap: "米国 SMICROCAP 成長",
      navBalancedEqIncome: "バランス型株式インカム",
      navCustomBalanced: "カスタムバランス",
      navGipsComposite: "GIPS コンポジットレポート",
      navPerformance: "パフォーマンス",
      navInsights: "インサイト",
      navContact: "お問い合わせ",
      navCta: "無料診断",
      heroEyebrow: "ブティック RIA | 米国株式ポートフォリオ",
      heroCopy: "忍耐強い銘柄選択、フリーキャッシュフロー分析、透明な手数料、リスクを意識した受託者としての管理に重点を置いた独立系ポートフォリオ運用です。",
      heroPrimary: "戦略を見る",
      heroSecondary: "無料ポートフォリオ診断",
      heroBandOne: "一社ずつ分析",
      heroBandTwo: "銘柄選択が重要",
      heroBandThree: "長期投資家のために設計",
      footerAdvisory: "投資助言サービスは、登録投資顧問である Patrumin Investors, LLC により提供されます。"
    },
    html: {
      ...en.html,
      heroLede: `The Analysis You Need<sup class="reg-mark">&reg;</sup>：規律ある長期米国株式ポートフォリオのための分析。`,
      overview: `<div><p class="eyebrow">会社概要</p><h2>独立した調査とプライベートクライアントの規律。</h2></div><div class="overview__copy"><p>Patrumin Investors は、企業単位の調査、忍耐、そして企業が長期的にどのようにキャッシュを生み出すかについての明確な理解を基盤としています。当社は、消費者または企業顧客の支出行動を変える可能性のある製品、サービス、産業を早期に見極めることを目指しています。</p><p>その取り組みは、透明性があり、反復可能で、受託者責任に沿った米国株式プロセスを支えています。</p></div>`,
      principles: `<div class="section-heading"><p class="eyebrow">投資原則</p><h2 id="principles-title">忍耐、思慮、規律、専門性。</h2></div><div class="card-grid card-grid--four"><article class="principle-card"><span class="card-kicker">01</span><h3>忍耐</h3><p>数か月ではなく、今後1年から2年で成果が期待できる銘柄を探します。</p></article><article class="principle-card"><span class="card-kicker">02</span><h3>思慮</h3><p>投資判断の前に、潜在的なリターンとリスクのバランスを検討します。</p></article><article class="principle-card"><span class="card-kicker">03</span><h3>規律</h3><p>フリーキャッシュフローの特性を重視し、市場のタイミングではなく企業の保有に集中します。</p></article><article class="principle-card"><span class="card-kicker">04</span><h3>専門性</h3><p>企業、セクター、産業、財務諸表に関する長年の調査が、事業変化に対する当社の見方を形作っています。</p></article></div>`,
      about: `<div class="about__main"><p class="eyebrow">Patrumin について</p><h2 id="about-title">資本配分の前に分析を重視するブティック型投資顧問。</h2><p>Patrumin の投資運用チームは、米国株式市場で30年以上の経験を有しています。その幅広い経験と視点は、米国株式ポートフォリオ構築の基盤となります。</p><p>Patrumin は、現地調査、経営陣との対話、業界会議、厳格な定性・財務分析を組み合わせます。資本を投じる前に、企業、競合、業界内での位置づけを理解することが目的です。</p></div><aside class="leader-panel" aria-labelledby="leader-title"><p class="quote">「私たちは、消費者または企業の支出行動を変える製品やサービスを早期に把握することを目指しています。」</p><h3 id="leader-title">Sam Dedio</h3><p>創業者兼ポートフォリオマネージャー</p></aside>`,
      strategy: `<div class="section-heading section-heading--wide"><p class="eyebrow">投資戦略</p><h2 id="strategy-title">調査主導の米国株式戦略。</h2><p>Patrumin の戦略は、ボトムアップのファンダメンタル調査、企業単位の分析、規律あるポートフォリオ構築に基づいています。各戦略は、運用成果を約束することなく、異なる機会集合を表現することを目的としています。</p></div><div class="strategy-nav" aria-label="Strategy shortcuts"><a href="#strategy-smallcap">Smallcap</a><a href="#strategy-dividends-plus">Dividends Plus+</a><a href="#strategy-multicap">Multicap</a><a href="#strategy-smicrocap">SMICROCAP Growth</a></div><div class="strategy-list"><article class="strategy-panel" id="strategy-smallcap"><div><p class="card-kicker">集中型の小型株式</p><h3>Patrumin U.S. Smallcap Equity Strategy</h3></div><div><p>この戦略は、小型米国株で構成される集中型ポートフォリオです。通常40から70銘柄を保有し、ボトムアップのファンダメンタル調査を活用します。</p><p>通常、株式時価総額が40億ドル未満の小型企業に投資します。Patrumin は成長やバリューといった単一の投資スタイルを強調せず、機会主義的なアプローチを採用します。</p><p>ポートフォリオは複数の経済セクターの銘柄で構成され、それぞれ異なる成長率を示す可能性があります。また、利益とキャッシュ創出力に対して割安と考える企業を探します。</p><p>消費者または企業顧客の支出行動を根本的に変える製品やサービスを持つ企業に特に注目しています。</p><p class="strategy-risk">小型株は大型株に比べて発行体リスクが高く、市場はより変動しやすく流動性が低い場合があります。取引量が少なく、収益や見通しの変化に影響されやすいため、市場変動が大きくなることがあります。</p></div></article><article class="strategy-panel" id="strategy-dividends-plus"><div><p class="card-kicker">規律ある株式インカム</p><h3>Patrumin U.S. Dividends Plus+ Equity Strategy</h3></div><div><p>Dividends Plus+ 戦略は、顧客からの継続的な要望と問い合わせを受けて作られた専門商品です。米国ベビーブーマー世代の高齢化と平均寿命の伸びという2つの大きな人口動態により、家族はより長い期間収入を生み出す方法を必要としています。</p><p>このポートフォリオは、現金配当を支払う米国取引株式25銘柄のみで構成され、複数の経済セクターに分散されています。</p><p>戦略は、経済サイクルと一致する4から6年の市場サイクルにわたり、S&amp;P 500* のトータルリターンを上回ることを目指します。</p><p>名称の「Plus」は、総投資リターンを高めるため、一部の保有株式で資本増価も目指すことを示しています。</p><p class="strategy-risk">*指数は運用されておらず、投資家は指数に直接投資することはできません。Standard &amp; Poor's 500（S&amp;P 500）は、株式市場全体を代表すると考えられる非運用の証券グループです。</p></div></article><article class="strategy-panel" id="strategy-multicap"><div><p class="card-kicker">柔軟な米国株式エクスポージャー</p><h3>Patrumin U.S. Multicap Equity Strategy</h3></div><div><p>Multicap 戦略は、当社のベストアイデア・ポートフォリオです。厳格で分析的、ファンダメンタル主導の調査プロセスを満たす米国株式で構成します。</p><p>小型・中型・大型株へのエクスポージャーを持ち、時価総額全体にわたってバランスを取ることを目指します。加重平均時価総額は通常200億ドルを超え、この分散を反映しています*。</p><p>この戦略は40から60銘柄の集中型ポートフォリオで、SMA形式で提供されます。完全な市場サイクルを通じ、資本成長によりS&amp;P 500を年率2.00%から3.00%上回ることを目指します。</p><p>投資スタイルはコアで、成長、GARP、バリューの要素を含みます。時価総額やスタイルにかかわらず、ベストアイデア戦略と考えています。</p><p>当社は、顧客がセクターおよび時価総額全体にわたる幅広い分散から恩恵を受けると考えています。中小型企業への長年の投資経験は、この資産クラスでの銘柄選択に有用な視点をもたらします。</p><p>利益とキャッシュ創出力に対して割安と考える企業、特に支出行動を変える製品やサービスを持つ企業を探します。</p><p class="strategy-risk">*分散投資は利益を保証するものではなく、下落市場での損失を防ぐものでもありません。投資リスクの軽減を助ける方法です。</p></div></article><article class="strategy-panel" id="strategy-smicrocap"><div><p class="card-kicker">新興企業の成長</p><h3>Patrumin U.S. SMICROCAP Growth Equity Strategy</h3></div><div><p>この戦略は、Russell 2000 および Russell Microcap 指数に含まれることが多い小型企業や新規公開株（IPO）に投資します。Patrumin 唯一の成長スタイル商品であり、テクノロジー、ヘルスケア、資本財、一般消費財などの成長志向セクターへの追加的エクスポージャーを目指します。</p><p>株式時価総額が1億ドル未満の企業や、時に50億ドルを超える企業を含む、変動性の高い小型企業に投資します。ポートフォリオは複数のセクターの銘柄で構成されます。</p><p>重要な投資優先事項は、業種やセクター比率にかかわらず、急速な成長を経験する可能性のある企業を特定し投資することです。支出行動を変える製品やサービスを持つ企業に特に注目します。</p><p class="strategy-risk">小型およびマイクロ時価総額証券は、大型で成熟した企業の証券よりも発行体、流動性、市場リスクが高い場合があります。</p></div></article></div><div class="strategy-materials"><div><p class="card-kicker">戦略資料</p><h3>ファクトシートと追加情報</h3></div><p>U.S. Smallcap Equity、U.S. Dividends Plus+ Equity、U.S. Multicap Equity の各商品ファクトシート PDF には、パフォーマンス、上位10銘柄、セクター比率、戦略の詳細情報が含まれます。U.S. SMICROCAP Growth Equity またはその他の Patrumin 戦略に関する追加情報は、<a href="mailto:info@patrumin.com">info@patrumin.com</a> までお問い合わせください。</p><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Strategy%20Materials%20Request">戦略資料を依頼</a></div>`,
      review: `<div><p class="eyebrow">無料ポートフォリオ診断</p><h2 id="review-title">手数料、税務効率、保有銘柄、適合性を明確に確認。</h2><p>Patrumin の無料ポートフォリオ診断は、投資家が何を保有し、何を支払い、どこで税務上の配慮が重要になり得るか、また既存の保有銘柄が長期目標に合っているかを理解するためのものです。</p><a class="button button--primary" href="#contact">無料診断を依頼</a></div><div class="review-list"><article><h3>手数料の透明性</h3><p>助言報酬、商品内コスト、運用会社費用をわかりやすく確認します。</p></article><article><h3>税務効率</h3><p>課税口座に関する検討事項と税務アドバイザーとの連携ポイントを確認します。</p></article><article><h3>既存保有銘柄</h3><p>集中投資、相続した証券、長期目標に合わない可能性のある保有銘柄を評価します。</p></article><article><h3>ポートフォリオ適合性</h3><p>配分、リスク、収入ニーズ、流動性を攻撃的な販売表現なしで整理します。</p></article></div>`,
      insights: `<div class="section-heading"><p class="eyebrow">インサイト</p><h2 id="insights-title">市場コメントと投資家向けリソース。</h2><p>Patrumin のコメント、戦略更新、ホワイトペーパー、価格情報を掲載するためのスペースです。</p></div><div class="card-grid card-grid--three"><article class="insight-card"><p class="card-kicker">市場コメント</p><h3>四半期ノート近日公開</h3><p>将来的な更新では、市場観察、ポートフォリオテーマ、顧客および見込み顧客向けコメントを掲載できます。</p></article><article class="insight-card"><p class="card-kicker">ホワイトペーパー</p><h3>Good Yield Is Hard To Find</h3><p>既存の Patrumin リソースを、運用成果の主張ではなく投資家教育として位置づけます。</p></article><article class="insight-card"><p class="card-kicker">透明性</p><h3>投資管理価格情報</h3><p>価格情報と GIPS&reg; Composite レポートは、適切な開示とともに提示できます。</p></article></div>`,
      contact: `<div><p class="eyebrow">お問い合わせ</p><h2 id="contact-title">機密性の高いご相談を始めましょう。</h2><p>より透明性の高いポートフォリオ運用関係、または無料ポートフォリオ診断を検討する見込み顧客、アドバイザー、ご家族向けです。</p></div><div class="contact-actions" aria-label="Contact options"><a class="contact-link" href="tel:+18447287864"><span>電話</span>844-728-7864</a><a class="contact-link" href="tel:+12393256498"><span>オフィス</span>239-325-6498</a><a class="contact-link" href="mailto:info@patrumin.com"><span>メール</span>info@patrumin.com</a><a class="button button--primary" href="mailto:info@patrumin.com?subject=Patrumin%20Portfolio%20Review%20Request">無料診断を依頼</a></div>`,
      footerDisclosures: `<p>本サイトは米国居住者のみを対象として公開されています。投資顧問代表者は、正式に登録されている、または登録免除が認められる州および管轄区域の居住者とのみ業務を行うことができます。情報請求への回答は、適切な登録または免除の確認まで遅れる場合があります。</p><p>本サイトで言及されるすべてのサービスが、すべての州またはすべてのアドバイザーを通じて利用できるわけではありません。詳細は <a href="mailto:info@patrumin.com">info@patrumin.com</a> または <a href="tel:+18447287864">844-728-7864</a> までお問い合わせください。</p><p>過去の実績は将来の結果を保証するものではありません。投資には元本損失を含むリスクがあります。本サイトの情報は教育目的であり、投資結果の保証または約束とみなされるべきではありません。</p><p class="footer-meta">&copy; 2026 Patrumin Investors, LLC | プライバシーポリシー | 法的開示 | Form ADV2</p>`
    }
  };
};

extendTranslations();

const languageSelect = document.querySelector("#language-select");

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = dictionary.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.description);
  }

  Object.entries(dictionary.text).forEach(([key, value]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach((element) => {
      element.textContent = value;
    });
  });

  Object.entries(dictionary.html).forEach(([key, value]) => {
    document.querySelectorAll(`[data-i18n-html="${key}"]`).forEach((element) => {
      element.innerHTML = value;
    });
  });

  if (languageSelect) {
    languageSelect.value = language;
  }
  window.localStorage.setItem("patrumin-language", language);
};

if (languageSelect) {
  const savedLanguage = window.localStorage.getItem("patrumin-language") || "en";
  applyLanguage(savedLanguage);

  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}
