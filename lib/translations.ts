export type Lang = "en" | "de";

const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
      startProject: "Start a project",
    },
    footer: {
      tagline: "Full-service creative studio. Strategy, design, copy, and tech under one roof.",
      companyLabel: "Company",
      getInTouchLabel: "Get in touch",
      startProject: "Start a project",
      copyright: "All rights reserved.",
    },
    home: {
      tag: "Creative Studio",
      hero: "Think.\nBuild.\nLaunch.",
      subhero:
        "We are a full-service creative studio — strategy, design, copy, and tech — built for businesses that can't afford to wait.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See our services",
      featuresLabel: "How we work",
      featuresHeadline: "From brief to launch — we cover the full creative spectrum.",
      features: [
        {
          title: "Strategic Thinking",
          body: "Every project starts with why, not what. We dig into your market, audience, and goals before a single pixel moves.",
        },
        {
          title: "Bold Creative",
          body: "Design and copy that cuts through the noise. We build brands people remember and digital experiences they actually use.",
        },
        {
          title: "Built to Ship",
          body: "Fast turnaround without compromising quality. Lean processes and AI-assisted workflows mean you get more, faster.",
        },
        {
          title: "One Brief",
          body: "Strategy, design, copy, and tech under one roof. No translation loss between disciplines — just coherent creative.",
        },
        {
          title: "Honest Craft",
          body: "We don't overpromise. We show you what we can do, then we do it. Quality of work over quality of pitch.",
        },
        {
          title: "Outcomes First",
          body: "Beautiful work that doesn't perform is just decoration. We anchor every brief in business goals without sacrificing craft.",
        },
      ],
      worksLabel: "Selected Work",
      worksCta: "Start a project",
      servicesTeaserLabel: "One team. Every discipline.",
      servicesTeaserHeadline: "So you don't have to coordinate across five agencies.",
      servicesTeaserBody:
        "Brand strategy to live website — under one roof, one brief, zero translation loss.",
      servicesTeaserCta: "Tell us what you're building",
      services: [
        "Brand Strategy",
        "Identity & Design",
        "Copywriting & Content",
        "Digital & Web",
        "Campaigns",
        "MVP & Venture Building",
      ],
      testimonialsLabel: "What clients say",
      testimonials: [
        {
          quote:
            "Creative Brains delivered a brand identity that we're genuinely proud of. Fast, focused, and no nonsense.",
          name: "Sarah K.",
          title: "Founder",
          company: "Zentra",
        },
        {
          quote:
            "They think strategically and execute beautifully. Rare combination. We shipped our site in three weeks.",
          name: "Marcus T.",
          title: "CEO",
          company: "Loopline",
        },
        {
          quote: "The copy alone doubled our conversion rate. These people understand audiences.",
          name: "Lena R.",
          title: "Head of Marketing",
          company: "Vorto",
        },
      ],
      ctaBannerHeadline: "Ready to build something worth talking about?",
      ctaBannerBody: "The first conversation is free. The first idea is on us.",
      ctaBannerButton: "Get in touch",
    },
    about: {
      tag: "Our Story",
      hero: "The team that thinks and does.",
      subhero:
        "We built Creative Brains because the best creative work happens when strategy and execution are never separated.",
      missionLabel: "Our Mission",
      missionHeadline: "Creative work with no translation loss.",
      missionBody1:
        "Most agencies split strategy from creativity. Strategists write decks. Creatives execute. The handoff is where ideas die.",
      missionBody2:
        "At Creative Brains, the people who think are the people who build. That's what makes the work sharper — and the process faster. One team. One brief. Zero translation loss.",
      valuesLabel: "Our Values",
      values: [
        {
          title: "Honest craft over slick sales",
          body: "We don't overpromise. We show you what we can do, then we do it. Quality of work over quality of pitch.",
        },
        {
          title: "Speed as a creative discipline",
          body: "Fast doesn't mean rushed. It means lean processes, clear thinking, and a team that doesn't waste your time.",
        },
        {
          title: "Outcomes over aesthetics",
          body: "Beautiful work that doesn't perform is just decoration. We anchor every brief in business goals — without sacrificing craft.",
        },
        {
          title: "One team, zero handoffs",
          body: "The people who think are the people who build. Strategy and execution in the same room means sharper ideas, faster.",
        },
      ],
      teamLabel: "Meet the brains",
      teamBiosNote: "Photos coming soon.",
      team: [
        { initials: "AK", name: "Alex K.", title: "Creative Director", bio: "Drives creative vision and brand strategy. 10+ years building brands across DACH and beyond." },
        { initials: "SB", name: "Sophie B.", title: "Design Lead", bio: "Crafts visual systems that are precise, human, and unmistakably on-brand." },
        { initials: "CW", name: "Chris W.", title: "Copy Lead", bio: "Writes for clarity, edge, and impact — in German and English." },
        { initials: "TL", name: "Tim L.", title: "Tech Lead", bio: "Builds fast, accessible web products that perform in the real world." },
      ],
      stats: [
        { number: "5+", label: "Years in business" },
        { number: "80+", label: "Projects shipped" },
        { number: "40+", label: "Happy clients" },
        { number: "100%", label: "On-time delivery" },
      ],
      ctaHeadline: "Want to work with us?",
      ctaBody: "Tell us about your project. We'll respond within 24 hours.",
      ctaButton: "Get in touch",
    },
    services: {
      tag: "What we do",
      hero: "One team.\nEvery discipline.",
      subhero:
        "From brand strategy to live website, we cover the full creative spectrum — so you don't have to coordinate across five agencies.",
      services: [
        {
          number: "01",
          title: "Brand Strategy",
          oneliner: "Define who you are and why it matters",
          body: "We start with research, competitive mapping, and positioning work to build a brand strategy that holds up — in market, in pitch decks, and on billboards. Strategy is the foundation. Everything else follows.",
          checklist: [
            "Market & audience research",
            "Positioning and messaging framework",
            "Brand story and narrative",
            "Competitive differentiation",
          ],
        },
        {
          number: "02",
          title: "Identity & Design",
          oneliner: "Visual systems that are unmistakably you",
          body: "Logo, typography, colour system, motion, and every touchpoint in between. We build design systems that scale — not just a pretty logo for the launch deck.",
          checklist: [
            "Logo and brand mark",
            "Typography and colour system",
            "Component and UI design",
            "Brand guidelines",
          ],
        },
        {
          number: "03",
          title: "Copywriting & Content",
          oneliner: "Words that work — for humans and algorithms",
          body: "From brand narratives and taglines to long-form articles and UX copy. We write with clarity, edge, and purpose — always anchored in your audience's language.",
          checklist: [
            "Brand voice and tone guide",
            "Website and UX copy",
            "Content strategy",
            "Long-form and campaign copy",
          ],
        },
        {
          number: "04",
          title: "Digital & Web",
          oneliner: "Websites built to perform, not just impress",
          body: "Fast, accessible, and beautifully designed websites. We use modern stacks (Next.js, Tailwind, headless CMS) to ship sites that score on Lighthouse and convert in the real world.",
          checklist: [
            "Next.js / React development",
            "Performance-first engineering",
            "Accessibility (WCAG 2.1 AA)",
            "Vercel / headless CMS deployment",
          ],
        },
        {
          number: "05",
          title: "Campaigns",
          oneliner: "Full-funnel ideas from concept to conversion",
          body: "Launch campaigns, brand activations, and always-on content programmes. We concept, produce, and optimise across channels — social, paid, email, OOH.",
          checklist: [
            "Campaign concept and creative",
            "Social and paid creative",
            "Email programmes",
            "Measurement and optimisation",
          ],
        },
        {
          number: "06",
          title: "MVP & Venture Building",
          oneliner: "From idea to product-market fit — in 2–3 months",
          body: "We're more than an agency — we're venture partners. You have the idea; we build it together with real skin in the game. No blind hourly billing: a partner who thinks, builds, and shares responsibility. From first sketch to first real users, in 2–3 months.",
          checklist: [
            "Idea validation & market testing",
            "Product design & engineering",
            "Go-to-market strategy",
            "Service-for-equity / venture partner model",
          ],
        },
      ],
      processLabel: "The process",
      processHeadline: "How it works",
      process: [
        {
          step: "01",
          title: "Brief & Discovery",
          body: "We review your brief, ask the right questions, and align on goals, audience, and success metrics.",
        },
        {
          step: "02",
          title: "Strategy & Concept",
          body: "We develop the creative strategy and concept — the why behind every design, word, and build decision.",
        },
        {
          step: "03",
          title: "Build & Deliver",
          body: "We execute, iterate, and ship. No surprises. Transparent process and fast turnaround.",
        },
      ],
      ctaHeadline: "Tell us what you're building.",
      ctaBody: "The first conversation is free. The first idea is on us.",
      ctaButton: "Start a project",
    },
    contact: {
      tag: "Work with us",
      hero: "Let's make something worth talking about.",
      subhero: "Tell us about your project. We'll respond within 24 hours.",
      labelName: "Your name",
      labelCompany: "Company",
      labelEmail: "Email",
      labelService: "What do you need?",
      placeholderName: "Jane Smith",
      placeholderCompany: "Acme Inc.",
      placeholderEmail: "jane@acme.com",
      selectDefault: "Select a service",
      labelMessage: "Tell us about your project",
      placeholderMessage:
        "What are you building? What's the goal? Any deadline or budget in mind?",
      submitButton: "Send message",
      submitNote: "We respond within 24 hours on business days.",
      whatNextLabel: "What happens next",
      whatNext: [
        "We review your brief within 24 hours.",
        "We schedule a free 30-minute discovery call.",
        "We share a tailored proposal with scope, timeline, and investment.",
        "We kick off. Fast.",
      ],
      goodToKnowLabel: "Good to know",
      goodToKnow: [
        "The first conversation is free.",
        "The first idea is on us.",
        "No retainers required to start.",
        "Pricing is transparent from day one.",
      ],
      serviceOptions: [
        "Brand Strategy",
        "Identity & Design",
        "Copywriting & Content",
        "Digital & Web",
        "Campaigns",
        "Something else",
      ],
    },
  },

  de: {
    nav: {
      about: "Über uns",
      services: "Leistungen",
      contact: "Kontakt",
      startProject: "Projekt starten",
    },
    footer: {
      tagline: "Full-Service-Kreativstudio. Strategie, Design, Text und Technik unter einem Dach.",
      companyLabel: "Unternehmen",
      getInTouchLabel: "Kontakt aufnehmen",
      startProject: "Projekt starten",
      copyright: "Alle Rechte vorbehalten.",
    },
    home: {
      tag: "Kreativstudio",
      hero: "Marken, die\nWirkung zeigen.",
      subhero:
        "Wir sind ein Full-Service-Kreativstudio — Strategie, Design, Text und Technik — für Unternehmen, die keine Zeit zu verlieren haben.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "Unsere Leistungen",
      featuresLabel: "Wie wir arbeiten",
      featuresHeadline: "Vom Briefing bis zum Launch — wir decken das gesamte kreative Spektrum ab.",
      features: [
        {
          title: "Strategisches Denken",
          body: "Jedes Projekt beginnt mit dem Warum, nicht dem Was. Wir tauchen tief in Ihren Markt, Ihre Zielgruppe und Ziele ein, bevor ein einziges Pixel bewegt wird.",
        },
        {
          title: "Mutige Kreativität",
          body: "Design und Text, die aus der Masse herausstechen. Wir bauen Marken, an die sich Menschen erinnern, und digitale Erlebnisse, die wirklich genutzt werden.",
        },
        {
          title: "Bereit zum Liefern",
          body: "Schnelle Umsetzung ohne Qualitätsverlust. Schlanke Prozesse und KI-gestützte Workflows bedeuten: mehr Leistung, schneller.",
        },
        {
          title: "Ein Briefing",
          body: "Strategie, Design, Text und Technik unter einem Dach. Kein Informationsverlust zwischen den Disziplinen — nur kohärente Kreativarbeit.",
        },
        {
          title: "Ehrliches Handwerk",
          body: "Wir versprechen nicht zu viel. Wir zeigen, was wir können, und liefern es dann. Qualität der Arbeit über Qualität des Pitches.",
        },
        {
          title: "Ergebnisse zuerst",
          body: "Schöne Arbeit, die nicht performt, ist nur Dekoration. Wir verankern jedes Briefing in Geschäftszielen — ohne das Handwerk zu opfern.",
        },
      ],
      worksLabel: "Ausgewählte Projekte",
      worksCta: "Projekt starten",
      servicesTeaserLabel: "Ein Team. Alle Disziplinen.",
      servicesTeaserHeadline: "Damit Sie nicht fünf Agenturen koordinieren müssen.",
      servicesTeaserBody:
        "Von der Markenstrategie bis zur fertigen Website — unter einem Dach, ein Briefing, null Informationsverlust.",
      servicesTeaserCta: "Erzählen Sie uns, was Sie aufbauen",
      services: [
        "Markenstrategie",
        "Identität & Design",
        "Texten & Content",
        "Digital & Web",
        "Kampagnen",
        "MVP & Venture Building",
      ],
      testimonialsLabel: "Was Kunden sagen",
      testimonials: [
        {
          quote:
            "Creative Brains hat eine Markenidentität geliefert, auf die wir wirklich stolz sind. Schnell, fokussiert und ohne Umschweife.",
          name: "Sarah K.",
          title: "Gründerin",
          company: "Zentra",
        },
        {
          quote:
            "Sie denken strategisch und setzen wunderbar um. Eine seltene Kombination. Wir haben unsere Website in drei Wochen gelauncht.",
          name: "Marcus T.",
          title: "CEO",
          company: "Loopline",
        },
        {
          quote:
            "Allein die Texte haben unsere Conversion-Rate verdoppelt. Diese Leute verstehen Zielgruppen.",
          name: "Lena R.",
          title: "Head of Marketing",
          company: "Vorto",
        },
      ],
      ctaBannerHeadline: "Bereit, etwas Nennenswertes zu bauen?",
      ctaBannerBody: "Das erste Gespräch ist kostenlos. Die erste Idee geht auf uns.",
      ctaBannerButton: "Kontakt aufnehmen",
    },
    about: {
      tag: "Unsere Geschichte",
      hero: "Das Team, das denkt und handelt.",
      subhero:
        "Wir haben Creative Brains gegründet, weil die beste kreative Arbeit entsteht, wenn Strategie und Umsetzung nie getrennt werden.",
      missionLabel: "Unsere Mission",
      missionHeadline: "Kreative Arbeit ohne Informationsverlust.",
      missionBody1:
        "Die meisten Agenturen trennen Strategie von Kreativität. Strategen schreiben Präsentationen. Kreative setzen um. Bei der Übergabe sterben die Ideen.",
      missionBody2:
        "Bei Creative Brains sind die Menschen, die denken, auch die Menschen, die bauen. Das macht die Arbeit schärfer — und den Prozess schneller. Ein Team. Ein Briefing. Null Informationsverlust.",
      valuesLabel: "Unsere Werte",
      values: [
        {
          title: "Ehrliches Handwerk statt glänzender Verkäufe",
          body: "Wir versprechen nicht zu viel. Wir zeigen, was wir können, und liefern es dann. Qualität der Arbeit über Qualität des Pitches.",
        },
        {
          title: "Schnelligkeit als kreative Disziplin",
          body: "Schnell bedeutet nicht gehetzt. Es bedeutet schlanke Prozesse, klares Denken und ein Team, das Ihre Zeit nicht verschwendet.",
        },
        {
          title: "Ergebnisse über Ästhetik",
          body: "Schöne Arbeit, die nicht performt, ist nur Dekoration. Wir verankern jedes Briefing in Geschäftszielen — ohne das Handwerk zu opfern.",
        },
        {
          title: "Ein Team, keine Übergaben",
          body: "Die Menschen, die denken, sind die Menschen, die bauen. Strategie und Umsetzung im selben Raum bedeutet schärfere Ideen, schneller.",
        },
      ],
      teamLabel: "Die Köpfe dahinter",
      teamBiosNote: "Fotos folgen in Kürze.",
      team: [
        { initials: "AK", name: "Alex K.", title: "Creative Director", bio: "Verantwortet kreative Vision und Markenstrategie. 10+ Jahre Markenaufbau im DACH-Raum und darüber hinaus." },
        { initials: "SB", name: "Sophie B.", title: "Design Lead", bio: "Entwickelt visuelle Systeme, die präzise, menschlich und unverwechselbar sind." },
        { initials: "CW", name: "Chris W.", title: "Copy Lead", bio: "Schreibt mit Klarheit, Kante und Wirkung — auf Deutsch und Englisch." },
        { initials: "TL", name: "Tim L.", title: "Tech Lead", bio: "Baut schnelle, barrierefreie Web-Produkte, die in der Praxis performen." },
      ],
      stats: [
        { number: "5+", label: "Jahre im Geschäft" },
        { number: "80+", label: "Projekte geliefert" },
        { number: "40+", label: "Zufriedene Kunden" },
        { number: "100%", label: "Pünktliche Lieferung" },
      ],
      ctaHeadline: "Möchten Sie mit uns arbeiten?",
      ctaBody: "Erzählen Sie uns von Ihrem Projekt. Wir antworten innerhalb von 24 Stunden.",
      ctaButton: "Kontakt aufnehmen",
    },
    services: {
      tag: "Was wir tun",
      hero: "Ein Team.\nAlle Disziplinen.",
      subhero:
        "Von der Markenstrategie bis zur fertigen Website decken wir das gesamte kreative Spektrum ab — damit Sie nicht fünf Agenturen koordinieren müssen.",
      services: [
        {
          number: "01",
          title: "Markenstrategie",
          oneliner: "Definieren Sie, wer Sie sind und warum es wichtig ist",
          body: "Wir beginnen mit Recherche, Wettbewerbsanalyse und Positionierungsarbeit, um eine Markenstrategie zu entwickeln, die hält — auf dem Markt, in Pitches und auf Plakaten. Strategie ist das Fundament. Alles andere folgt.",
          checklist: [
            "Markt- & Zielgruppenanalyse",
            "Positionierungs- und Messaging-Framework",
            "Markenstory und Narrative",
            "Wettbewerbsdifferenzierung",
          ],
        },
        {
          number: "02",
          title: "Identität & Design",
          oneliner: "Visuelle Systeme, die unverwechselbar Sie sind",
          body: "Logo, Typografie, Farbsystem, Motion und alle Touchpoints dazwischen. Wir bauen Design-Systeme, die skalieren — nicht nur ein hübsches Logo für die Launch-Präsentation.",
          checklist: [
            "Logo und Markenzeichen",
            "Typografie- und Farbsystem",
            "Komponenten- und UI-Design",
            "Markenrichtlinien",
          ],
        },
        {
          number: "03",
          title: "Texten & Content",
          oneliner: "Worte, die funktionieren — für Menschen und Algorithmen",
          body: "Von Markennarrativen und Taglines bis zu Langform-Artikeln und UX-Texten. Wir schreiben mit Klarheit, Kante und Zweck — immer verankert in der Sprache Ihrer Zielgruppe.",
          checklist: [
            "Markenstimme und Tonleitfaden",
            "Website- und UX-Texte",
            "Content-Strategie",
            "Langform- und Kampagnentexte",
          ],
        },
        {
          number: "04",
          title: "Digital & Web",
          oneliner: "Websites, die performen — nicht nur beeindrucken",
          body: "Schnelle, barrierefreie und schön gestaltete Websites. Wir nutzen moderne Stacks (Next.js, Tailwind, Headless CMS), um Seiten zu liefern, die bei Lighthouse punkten und in der Praxis konvertieren.",
          checklist: [
            "Next.js / React-Entwicklung",
            "Performance-first Engineering",
            "Barrierefreiheit (WCAG 2.1 AA)",
            "Vercel / Headless-CMS-Deployment",
          ],
        },
        {
          number: "05",
          title: "Kampagnen",
          oneliner: "Full-Funnel-Ideen vom Konzept bis zur Konversion",
          body: "Launch-Kampagnen, Markenaktivierungen und Always-on-Content-Programme. Wir konzipieren, produzieren und optimieren kanalübergreifend — Social, Paid, E-Mail, OOH.",
          checklist: [
            "Kampagnenkonzept und Kreation",
            "Social- und Paid-Kreation",
            "E-Mail-Programme",
            "Messung und Optimierung",
          ],
        },
        {
          number: "06",
          title: "MVP & Venture Building",
          oneliner: "Von der Idee zum Product-Market-Fit — in 2–3 Monaten",
          body: "Wir sind mehr als eine Agentur — wir sind Venture-Partner. Sie haben die Idee; wir bauen sie gemeinsam mit echtem Engagement. Keine blinde Stundenabrechnung: ein Partner, der denkt, baut und Verantwortung teilt. Vom ersten Entwurf bis zu den ersten echten Nutzern, in 2–3 Monaten.",
          checklist: [
            "Ideenvalidierung & Markttests",
            "Produktdesign & Engineering",
            "Go-to-Market-Strategie",
            "Service-for-Equity / Venture-Partner-Modell",
          ],
        },
      ],
      processLabel: "Der Prozess",
      processHeadline: "So funktioniert es",
      process: [
        {
          step: "01",
          title: "Briefing & Discovery",
          body: "Wir prüfen Ihr Briefing, stellen die richtigen Fragen und stimmen uns zu Zielen, Zielgruppe und Erfolgskennzahlen ab.",
        },
        {
          step: "02",
          title: "Strategie & Konzept",
          body: "Wir entwickeln die kreative Strategie und das Konzept — das Warum hinter jeder Design-, Text- und Build-Entscheidung.",
        },
        {
          step: "03",
          title: "Bauen & Liefern",
          body: "Wir setzen um, iterieren und liefern. Keine Überraschungen. Transparenter Prozess und schnelle Umsetzung.",
        },
      ],
      ctaHeadline: "Erzählen Sie uns, was Sie aufbauen.",
      ctaBody: "Das erste Gespräch ist kostenlos. Die erste Idee geht auf uns.",
      ctaButton: "Projekt starten",
    },
    contact: {
      tag: "Zusammenarbeiten",
      hero: "Lassen Sie uns etwas Nennenswertes schaffen.",
      subhero: "Erzählen Sie uns von Ihrem Projekt. Wir antworten innerhalb von 24 Stunden.",
      labelName: "Ihr Name",
      labelCompany: "Unternehmen",
      labelEmail: "E-Mail",
      labelService: "Was brauchen Sie?",
      placeholderName: "Max Mustermann",
      placeholderCompany: "Muster GmbH",
      placeholderEmail: "max@muster.de",
      selectDefault: "Leistung auswählen",
      labelMessage: "Erzählen Sie uns von Ihrem Projekt",
      placeholderMessage:
        "Was bauen Sie auf? Was ist das Ziel? Gibt es einen Termin oder ein Budget?",
      submitButton: "Nachricht senden",
      submitNote: "Wir antworten innerhalb von 24 Stunden an Werktagen.",
      whatNextLabel: "Was als nächstes passiert",
      whatNext: [
        "Wir prüfen Ihr Briefing innerhalb von 24 Stunden.",
        "Wir vereinbaren ein kostenloses 30-minütiges Discovery-Call.",
        "Wir teilen ein maßgeschneidertes Angebot mit Umfang, Zeitplan und Investition.",
        "Wir legen los. Schnell.",
      ],
      goodToKnowLabel: "Gut zu wissen",
      goodToKnow: [
        "Das erste Gespräch ist kostenlos.",
        "Die erste Idee geht auf uns.",
        "Kein Retainer erforderlich, um zu starten.",
        "Preise sind von Tag eins an transparent.",
      ],
      serviceOptions: [
        "Markenstrategie",
        "Identität & Design",
        "Texten & Content",
        "Digital & Web",
        "Kampagnen",
        "Etwas anderes",
      ],
    },
  },
} as const;

export default translations;
