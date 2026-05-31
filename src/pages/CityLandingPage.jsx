import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const cityData = {
  varanasi: {
    name: 'Varanasi (Banaras)',
    hindi: 'Varanasi - Banaras',
    state: 'Uttar Pradesh',
    metaTitle: 'Best Digital Marketing Agency in Varanasi Banaras | Enzo Media',
    metaDesc: 'Top-rated digital marketing and SEO agency in Varanasi. Enzo Media helps local businesses dominate Google Maps, Social Media, and Performance Ads.',
    img: '/images/cities/varanasi.webp',
    accentColor: '#cc1e00',
    tagline: 'The Spiritual Capital With a Digital Future',
    heroStat: ['8,000 Cr+', 'Tourism Economy', '7.2 Crore+', 'Annual Visitors', '8 Lakh+', 'Businesses'],
    overview: 'Varanasi is one of the world\'s oldest living cities and is undergoing a quiet digital revolution. While the ghats remain timeless, the city\'s economy is rapidly modernising. With PM Modi\'s constituency driving Rs 4,200+ crore in infrastructure upgrades, Varanasi\'s tourism, retail, education, and hospitality sectors are exploding. In 2025 alone, the city recorded a historic 7.26 crore visitors. Yet 78% of local businesses here still have zero digital presence. That is your unfair advantage.',
    whyDigital: [
      {
        icon: '📱',
        title: 'Smartphone Penetration is Surging',
        body: 'Varanasi\'s active internet user base crossed 18 lakh in 2024, growing at 34% YoY. Over 71% of residents now use smartphones to search for local products and services — yet most local businesses are invisible on Google.',
      },
      {
        icon: '🛕',
        title: 'Tourism Creates Year-Round Demand',
        body: 'Over 7.2 Crore tourists and devotees visit Varanasi annually. Hotels, restaurants, tour operators, silk weavers, and dharmashala owners who rank on Google Maps capture walk-in customers worth lakhs — without spending on traditional ads.',
      },
      {
        icon: '🏫',
        title: 'Education Economy is Booming',
        body: 'BHU, IIT-BHU, and 120+ colleges make Varanasi a major education hub. Coaching institutes, hostels, and tiffin services targeting the 3 lakh+ student population can triple enrollments with targeted Meta Ads.',
      },
      {
        icon: '🧵',
        title: 'Banarasi Silk Has Global Demand',
        body: 'Banarasi sarees are a Rs 1,200 crore industry. Weavers and retailers selling through Instagram and Meesho/Flipkart are earning 3-5x more than those relying on middlemen. E-commerce is the future for the silk industry.',
      },
    ],
    marketData: [
      { label: 'Internet Users (2025)', value: '18 Lakh+', note: 'Growing 34% YoY' },
      { label: 'Annual Visitors (2025)', value: '7.26 Crore', note: 'Post-Kashi Vishwanath Corridor surge' },
      { label: 'Local Businesses', value: '8 Lakh+', note: 'Only 22% have online presence' },
      { label: 'Silk Industry Size', value: 'Rs 1,200 Cr', note: 'Direct-to-consumer opportunity' },
      { label: 'Infrastructure Investment', value: 'Rs 4,200 Cr+', note: 'Central Govt allocation' },
      { label: 'Student Population', value: '3 Lakh+', note: 'BHU, IIT-BHU, and 120+ colleges' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'Smart City Expansion', detail: 'Varanasi Smart City Mission is digitising civic infrastructure, creating massive demand for local service providers found via online search.' },
      { year: '2026-27', headline: 'Tourism Doubles Post-Corridor', detail: 'Kashi Vishwanath Corridor Phase 2 and Ganga Cruise projects are expected to push annual footfall past 20 million, creating fresh demand for hospitality marketing.' },
      { year: '2027-30', headline: 'Digital-First Consumer Generation', detail: 'Millennials and Gen-Z in Varanasi are driving e-commerce adoption. Local fashion, food, and wellness brands that build digital presence today will dominate the next decade.' },
    ],
    industries: [
      { name: 'Tourism and Hospitality', icon: '🛕', urgency: 'Critical' },
      { name: 'Banarasi Silk and Textiles', icon: '🧵', urgency: 'Critical' },
      { name: 'Education and Coaching', icon: '🎓', urgency: 'High' },
      { name: 'Real Estate', icon: '🏠', urgency: 'High' },
      { name: 'Healthcare and Clinics', icon: '🏥', urgency: 'Medium' },
      { name: 'Food and Restaurants', icon: '🍛', urgency: 'Medium' },
    ],
    quote: 'Varanasi businesses are sitting on a goldmine of digital opportunity. The city gets over 7 Crore visitors a year — but most shops are not even on Google Maps.',
  },

  ayodhya: {
    name: 'Ayodhya',
    hindi: 'Ayodhya - Ram Nagari',
    state: 'Uttar Pradesh',
    metaTitle: 'Digital Marketing Agency in Ayodhya | Real Estate and Tourism | Enzo Media',
    metaDesc: 'Enzo Media helps real estate developers, hotels, and businesses in Ayodhya capture the massive investment boom with performance marketing and SEO.',
    img: '/images/cities/ayodhya.webp',
    accentColor: '#f57c00',
    tagline: 'India\'s Fastest Growing Investment Destination',
    heroStat: ['85,000 Cr+', 'Planned Investment', '50,000+', 'New Hotel Rooms', '50 Crore+', 'Annual Visitors (2025)'],
    overview: 'Ayodhya is not just a religious city — it is India\'s fastest-growing investment destination. The Ram Mandir consecration in January 2024 triggered one of India\'s biggest real estate and tourism booms. Rs 85,000+ crore worth of projects are planned. Property prices have surged 300-500% in 2 years. Hotels, resorts, restaurants, and retail are mushrooming. For any business here — digital marketing is not optional. It is survival.',
    whyDigital: [
      {
        icon: '🏗️',
        title: 'Real Estate Boom = High-Intent Online Buyers',
        body: '90% of property investors research online before buying. With Ayodhya property prices doubling every 18 months, developers who run targeted Google and Meta Ads are closing crore+ deals. Those who do not will lose deals to competitors who do.',
      },
      {
        icon: '✈️',
        title: 'Tourism Infrastructure Demands Digital Marketing',
        body: 'Ayodhya Airport\'s new terminal, new hotels, and the Saryu riverfront development are creating a hospitality economy. Pilgrims and tourists now book hotels, travel packages, and guides entirely online. Zero digital presence = zero bookings.',
      },
      {
        icon: '📸',
        title: 'National and International Media Spotlight',
        body: 'Ayodhya is now a globally recognised brand. Businesses here have a rare chance to be found by crores of devotees searching online from across India and the world. SEO and social media can turn that attention into revenue.',
      },
      {
        icon: '🏪',
        title: 'Retail and F&B Explosion',
        body: 'National brands like McDonald\'s, Big Bazaar, and luxury hotels are entering Ayodhya. Local businesses that do not establish digital presence risk being buried by these brands in Google Search results within 12 months.',
      },
    ],
    marketData: [
      { label: 'Planned Investment', value: 'Rs 85,000 Cr+', note: 'Across real estate, tourism, infra' },
      { label: 'Circle Rate Hikes', value: 'Up to 200%', note: 'Updated to reflect true market values' },
      { label: 'Annual Visitors (2025)', value: '50 Crore+', note: 'Post-Ram Mandir tourism explosion' },
      { label: 'Land Prices (Core Zone)', value: '₹20K-25K /sqft', note: 'Near temple areas (speculative highs)' },
      { label: 'Airport Capacity', value: '10 Lakh pax/yr', note: 'New international terminal' },
      { label: 'New Road Projects', value: 'Rs 7,400 Cr', note: '4-lane highway network' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'International Tourism Begins', detail: 'With the new airport operational and 5-star hotel chains entering, Ayodhya will attract NRI devotees and international pilgrims. Multilingual digital marketing will be critical.' },
      { year: '2026-27', headline: 'Retail and F&B Competition Peaks', detail: 'National food and retail chains are entering Ayodhya. Local businesses that build strong Google Maps and Instagram presence now will retain loyal customers as competition intensifies.' },
      { year: '2027-30', headline: 'Ayodhya Becomes a Tier-1 Market', detail: 'With Rs 85,000 crore in ongoing investment, Ayodhya\'s GDP is projected to grow 4x by 2030. Early adopters of digital marketing will own the market before it becomes crowded.' },
    ],
    industries: [
      { name: 'Real Estate and Developers', icon: '🏗️', urgency: 'Critical' },
      { name: 'Hotels and Hospitality', icon: '🏨', urgency: 'Critical' },
      { name: 'Travel and Tour Operators', icon: '✈️', urgency: 'High' },
      { name: 'Retail and Shopping', icon: '🛍️', urgency: 'High' },
      { name: 'Food and Restaurants', icon: '🍛', urgency: 'High' },
      { name: 'Spiritual and Wellness', icon: '🛕', urgency: 'Medium' },
    ],
    quote: 'Ayodhya is the single biggest economic opportunity in UP right now. The businesses that invest in digital marketing today will own this market for the next decade.',
  },

  gonda: {
    name: 'Gonda',
    hindi: 'Gonda - UP',
    state: 'Uttar Pradesh',
    metaTitle: 'Digital Marketing Agency in Gonda | School Admissions and Local Business | Enzo Media',
    metaDesc: 'Enzo Media specialises in school admission campaigns, local lead generation, and brand building for businesses in Gonda, UP.',
    img: '/images/cities/gonda.webp',
    accentColor: '#d44000',
    tagline: 'Gonda\'s Businesses Are Ready. Is Your Digital Presence?',
    heroStat: ['41 Lakh+', 'District Population', '500+', 'Schools and Institutes', 'Rs 3,500 Cr', 'District GDP'],
    overview: 'Gonda, headquarters of the Gonda district in Eastern UP, is a rapidly developing market with a district population of 41 lakh+ (city population is ~1.68 lakh). The city\'s economy centres around education, agriculture, retail, and local services. With the Ayodhya boom happening just 100km away, Gonda is experiencing significant economic spillover. The city has one of UP\'s highest concentrations of schools and coaching institutes — all competing for the same parents. Digital marketing is the only scalable way to win in this environment.',
    whyDigital: [
      {
        icon: '🎓',
        title: 'School Admissions War Has Gone Digital',
        body: 'Gonda has 500+ schools and coaching institutes. Parents now Google "best school in Gonda" before anything else. Schools running Google Ads and maintaining strong social media are filling seats 40% faster than those relying on banners and pamphlets alone.',
      },
      {
        icon: '📱',
        title: 'Smartphone Adoption is Accelerating',
        body: 'Mobile internet penetration in Gonda district crossed 58% in 2024 and is growing fast, driven by cheap 4G data. Businesses that reach customers on their phones win the sale before competitors even know the customer exists.',
      },
      {
        icon: '🌾',
        title: 'Agriculture Economy Supports SME Spending',
        body: 'Gonda\'s agricultural prosperity creates disposable income for local SMEs in hardware, retail, and medical. These business owners are investing in digital presence to grow beyond word-of-mouth limitations.',
      },
      {
        icon: '🚗',
        title: 'Ayodhya Spillover Creates New Customers',
        body: 'With Gonda being a major connectivity hub for pilgrims heading to Ayodhya via road and railway, local hotels, dhabas, auto services, and retail shops are seeing new customer traffic. Google Maps presence captures this transit demand 24/7.',
      },
    ],
    marketData: [
      { label: 'District Population', value: '41.5 Lakh+', note: '2026 census-projected aggregate' },
      { label: 'Schools and Institutes', value: '500+', note: 'Including coaching centres' },
      { label: 'Internet Users (est.)', value: '12 Lakh+', note: '4G coverage across district' },
      { label: 'City Literacy Rate', value: '80%+', note: 'Significantly higher than district average' },
      { label: 'District GDP', value: 'Rs 3,500 Cr', note: 'Agriculture-led economy' },
      { label: 'Distance to Ayodhya', value: '110 km', note: 'Major connectivity hub' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'Railway Connectivity Boost', detail: 'Gonda Junction upgrades and new train routes to Ayodhya and Lucknow will increase commercial traffic, creating new business opportunities for digitally-present local brands.' },
      { year: '2026-27', headline: 'Education Sector Consolidation', detail: 'National coaching brands like Allen and Aakash are expanding into district-level cities. Local institutes that build strong Google and social media presence now will retain students before big brands enter.' },
      { year: '2027-30', headline: 'Digital-First SME Economy', detail: 'UP government\'s ODOP scheme is helping Gonda\'s cottage industries reach national markets. Online marketplaces and social media marketing will be essential for scale.' },
    ],
    industries: [
      { name: 'Schools and Coaching Institutes', icon: '🎓', urgency: 'Critical' },
      { name: 'Healthcare and Clinics', icon: '🏥', urgency: 'High' },
      { name: 'Retail and General Trade', icon: '🏪', urgency: 'High' },
      { name: 'Hotels and Lodges', icon: '🏨', urgency: 'Medium' },
      { name: 'Agriculture and Agri-Business', icon: '🌾', urgency: 'Medium' },
      { name: 'Auto and Transport Services', icon: '🚗', urgency: 'Medium' },
    ],
    quote: 'In Gonda, parents now search Google before choosing a school. Coaching institutes that are invisible online are losing admissions to smaller, digital-first competitors.',
  },

  delhi: {
    name: 'Delhi NCR',
    hindi: 'Delhi NCR',
    state: 'Delhi / NCR',
    metaTitle: 'Digital Marketing Agency for Delhi NCR Brands | Performance Ads | Enzo Media',
    metaDesc: 'Enzo Media helps Delhi NCR brands scale with high-ROI Google Ads, Meta Ads, social media, and brand strategy. Serving Ghaziabad, Noida, and Delhi.',
    img: '/images/cities/delhi.webp',
    accentColor: '#b82a00',
    tagline: 'India\'s Most Competitive Market Demands India\'s Best Marketing',
    heroStat: ['3.3 Crore+', 'Population (NCR)', 'Rs 20 Lakh Cr', 'GDP (NCR Region)', '2.8 Crore+', 'Internet Users'],
    overview: 'Delhi NCR is India\'s most competitive commercial market and the country\'s largest urban economy with an aggregated GDP exceeding Rs 20 lakh crore (Delhi NCT alone reports ₹13.27 lakh crore GSDP for 2025-26). For any brand — whether a D2C startup in Noida or a luxury business in South Delhi — the battle for customer attention is fought entirely online. With 2.8 crore+ active internet users and 93% smartphone penetration, Delhi NCR is where brands are made or buried. Half-hearted digital marketing here is the same as no marketing at all.',
    whyDigital: [
      {
        icon: '📊',
        title: 'India\'s Most Competitive Ad Market',
        body: 'Delhi NCR has the highest concentration of advertising spend per business in India. If your competitors are running Google Ads and you are not, they are capturing customers who were looking for exactly what you offer. In NCR, digital presence equals market share.',
      },
      {
        icon: '🛒',
        title: 'E-Commerce and D2C Explosion',
        body: 'Delhi NCR is India\'s number 1 e-commerce origin hub with 35% of all Flipkart and Amazon orders originating from NCR. D2C brands in fashion, food, electronics, and wellness are scaling from 0 to Rs 10 crore revenue purely via Meta and Google Ads.',
      },
      {
        icon: '🏢',
        title: 'B2B Market Is Entirely Digital-First',
        body: '78% of B2B buyers in NCR research vendors on LinkedIn and Google before the first call. Businesses without a strong digital profile lose deals before the conversation even starts. LinkedIn Ads and SEO are non-negotiable for B2B in NCR.',
      },
      {
        icon: '🏙️',
        title: 'Real Estate Hypercompetition',
        body: 'NCR\'s real estate market in Noida, Greater Noida, Gurugram, and Ghaziabad generates India\'s highest volume of property search queries. Developers spending Rs 5 lakh per month on digital ads are generating Rs 50-100 crore in site visits.',
      },
    ],
    marketData: [
      { label: 'NCR Population', value: '3.3 Crore+', note: 'Delhi + Noida + Gurgaon + Gzb' },
      { label: 'Internet Users', value: '2.8 Crore+', note: '93% smartphone penetration' },
      { label: 'Regional GDP', value: 'Rs 20 Lakh Cr', note: 'Combined NCR economic output (Delhi NCT: ₹13.27L Cr)' },
      { label: 'Per Capita Income (Delhi)', value: '₹5.31 Lakh', note: '2.5x higher than India average (2025-26)' },
      { label: 'Digital Ad Spend (NCR)', value: 'Rs 12,000 Cr/yr', note: 'Fastest growing region' },
      { label: 'Startup Count (Delhi)', value: '14,000+', note: 'All competing for digital attention' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'AI-Driven Ad Automation Peaks', detail: 'Google and Meta\'s AI-driven campaign tools are transforming how NCR brands advertise. Brands with expert management will achieve 3-5x better ROAS than those running ads independently.' },
      { year: '2026-27', headline: 'Short-Form Video Commerce Explodes', detail: 'Instagram Reels, YouTube Shorts, and WhatsApp Channels are becoming primary sales tools. NCR brands that build strong video marketing now will own customer attention as the next social commerce wave hits.' },
      { year: '2027-30', headline: 'Hyper-Personalisation Becomes Standard', detail: 'AI-powered ad personalisation will let brands serve different messages to different audience segments simultaneously. Early adopters will dominate their categories as personalisation becomes the baseline expectation.' },
    ],
    industries: [
      { name: 'Real Estate and Developers', icon: '🏗️', urgency: 'Critical' },
      { name: 'D2C and E-Commerce Brands', icon: '🛒', urgency: 'Critical' },
      { name: 'Education and EdTech', icon: '🎓', urgency: 'High' },
      { name: 'Healthcare and Wellness', icon: '🏥', urgency: 'High' },
      { name: 'B2B Services and SaaS', icon: '🏢', urgency: 'High' },
      { name: 'Food and QSR Chains', icon: '🍔', urgency: 'Medium' },
    ],
    quote: 'In Delhi NCR, your digital presence is your storefront. If you are not on the first page of Google, you do not exist for 94% of potential customers.',
  },

  prayagraj: {
    name: 'Prayagraj',
    hindi: 'Prayagraj - Allahabad',
    state: 'Uttar Pradesh',
    metaTitle: 'Digital Marketing Agency in Prayagraj | Enzo Media',
    metaDesc: 'Enzo Media helps Prayagraj businesses grow with performance ads, SEO, and brand strategy — especially education, coaching, and Kumbh economy sectors.',
    img: '/images/cities/varanasi.webp',
    accentColor: '#d44000',
    tagline: 'Prayagraj — Where Tradition Meets Transformation',
    heroStat: ['66.3 Crore', 'Mahakumbh 2025 Turnout', '800+', 'Coaching Institutes', 'Rs 3 Lakh Cr', 'Mahakumbh Revenue'],
    overview: 'Prayagraj is the administrative capital of UP and home to the Sangam — one of India\'s most sacred religious sites. The Mahakumbh 2025 attracted a historic 66.3 crore visitors, putting Prayagraj on the global map. Beyond pilgrimage, the city is one of India\'s largest education hubs with 800+ coaching institutes preparing lakhs of students for UPSC, engineering, and medical exams. Both sectors — tourism and education — are rapidly going digital.',
    whyDigital: [
      { icon: '🏛️', title: 'Kumbh Economy Creates Permanent Business', body: 'Mahakumbh 2025 generated an estimated Rs 3 lakh crore in economic activity. Businesses in hospitality, transport, and retail that built digital presence captured international bookings.' },
      { icon: '📚', title: 'Coaching Capital of UP', body: 'Prayagraj\'s Civil Lines coaching belt rivals Kota. 800+ institutes compete for the same pool of UPSC and competitive exam aspirants. Institutes with strong YouTube presence and Google Ads fill batches faster.' },
      { icon: '🌐', title: 'High-Income Student Migration', body: 'Students from Bihar, Jharkhand, MP, and across UP migrate to Prayagraj for coaching. Institutes, PG accommodations, and mess services can triple revenue with targeted digital outreach.' },
      { icon: '🏗️', title: 'Infrastructure Investment Creates Demand', body: 'Post-Kumbh infrastructure upgrades are attracting real estate investment. Developers need digital marketing to capture high-intent buyers searching for properties in Prayagraj.' },
    ],
    marketData: [
      { label: 'Mahakumbh 2025 Attendance', value: '66.3 Crore', note: 'Actual ritual dips recorded over 45 days' },
      { label: 'Coaching Institutes', value: '800+', note: 'Civil Services, Engineering, Medical' },
      { label: 'Student Population', value: '2.5 Lakh+', note: 'Annual migration to city' },
      { label: 'Kumbh Economic Activity', value: 'Rs 3 Lakh Cr', note: 'Estimated GDP push for UP' },
      { label: 'UP Mela Budget Allocation', value: 'Rs 6,380 Cr+', note: 'Invested in security, tech & transit' },
      { label: 'Airport Expansion', value: 'Rs 3,200 Cr', note: 'New terminal capacity' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'Post-Kumbh Tourism Infrastructure', detail: 'Prayagraj\'s new Kumbh permanent infrastructure will drive year-round religious tourism. Hotels and tour operators that establish digital presence now will capture the long-tail of Kumbh tourism.' },
      { year: '2026-27', headline: 'Online Education Competition', detail: 'EdTech giants like Unacademy and PW are targeting Prayagraj\'s coaching market. Local institutes that build strong offline + online hybrid presence will retain students.' },
      { year: '2027-30', headline: 'Prayagraj as a Smart City', detail: 'Smart City Mission investment will digitise commerce and services, creating a customer base that expects to find everything online.' },
    ],
    industries: [
      { name: 'Coaching and Education', icon: '📚', urgency: 'Critical' },
      { name: 'Hotels and Homestays', icon: '🏨', urgency: 'Critical' },
      { name: 'Real Estate', icon: '🏠', urgency: 'High' },
      { name: 'PG and Hostel Services', icon: '🏠', urgency: 'High' },
      { name: 'Food and Mess Services', icon: '🍛', urgency: 'Medium' },
      { name: 'Religious and Spiritual', icon: '🛕', urgency: 'Medium' },
    ],
    quote: 'Prayagraj coaching institutes are in the fight of their lives against EdTech platforms. Digital marketing is not a luxury — it is how they survive the next 5 years.',
  },

  ghaziabad: {
    name: 'Ghaziabad',
    hindi: 'Ghaziabad - NCR',
    state: 'Uttar Pradesh (NCR)',
    metaTitle: 'Digital Marketing Agency in Ghaziabad NCR | Enzo Media',
    metaDesc: 'Enzo Media helps Ghaziabad businesses grow with Google Ads, Meta Ads, and SEO. Specialising in real estate, education, and local lead generation.',
    img: '/images/cities/delhi.webp',
    accentColor: '#b82a00',
    tagline: 'The Gateway to Delhi NCR — Where Growth is Non-Negotiable',
    heroStat: ['28 Lakh+', 'Urban Population', 'Rs 65,000 Cr', 'Real Estate Market', '900+', 'Manufacturing Units'],
    overview: 'Ghaziabad — dubbed the Gateway to UP — is one of India\'s fastest-growing NCR cities. With proximity to Delhi, a booming real estate market, and India\'s largest industrial belt, Ghaziabad represents a unique commercial opportunity. The city\'s urban middle class is India\'s most aspirational consumer segment. Combined with massive infrastructure projects like the Delhi-Meerut Expressway and Metro Phase 2, Ghaziabad businesses that go digital now are setting up for exponential growth.',
    whyDigital: [
      { icon: '🏗️', title: 'Real Estate is Ghaziabad\'s Biggest Opportunity', body: 'Ghaziabad\'s Rs 65,000 crore real estate market is driven by first-time buyers researching properties online. Developers running targeted Google Ads generate 10x more qualified leads than hoardings.' },
      { icon: '🚇', title: 'Metro Connectivity Expanding Customer Base', body: 'Delhi Metro Red Line and upcoming Phase 4 expansions are making Ghaziabad increasingly connected. Businesses in Indirapuram, Vaishali, and Kaushambi are seeing customers from across NCR.' },
      { icon: '🏭', title: 'Industrial Economy Needs B2B Marketing', body: 'Ghaziabad\'s 900+ manufacturing units in sectors like engineering, chemicals, and food processing need B2B digital marketing to access pan-India clients. LinkedIn Ads and Google Ads deliver 5-8x ROI.' },
      { icon: '👨‍👩‍👧', title: 'Aspirational Middle Class Drives Consumption', body: 'Ghaziabad\'s urban middle class — engineers, IT professionals, and government employees — are heavy online shoppers. Clinics, schools, and service providers that dominate Google and Instagram capture this high-value segment.' },
    ],
    marketData: [
      { label: 'Urban Population', value: '28 Lakh+', note: 'One of UP\'s largest cities' },
      { label: 'Property Price Growth', value: '24% YoY', note: 'Surging demand in luxury & 3BHK housing (2025-26)' },
      { label: 'Manufacturing Units', value: '900+', note: 'Industrial B2B opportunity' },
      { label: 'Avg Property Price', value: '₹7,650 /sq ft', note: 'As of 2026, centering NH-24 and RRTS corridor' },
      { label: 'Metro Stations', value: '18+', note: 'Red Line + upcoming extensions' },
      { label: 'NCR Sales Share', value: '16%', note: 'Of total Delhi-NCR property transactions' },
    ],
    futureTrends: [
      { year: '2025-26', headline: 'Metro Phase 4 Opens New Markets', detail: 'New metro corridors will increase Ghaziabad\'s commercial zones. Businesses near upcoming stations need to establish digital presence before competition multiplies.' },
      { year: '2026-27', headline: 'Real Estate Enters Luxury Segment', detail: 'With Delhi prices out of reach, luxury projects are launching in Ghaziabad. High-net-worth buyers in this segment rely entirely on premium digital experiences.' },
      { year: '2027-30', headline: 'Smart Manufacturing Needs Digital Sales', detail: 'Industry 4.0 adoption in Ghaziabad\'s manufacturing belt will require industrial businesses to market on LinkedIn, B2B portals, and Google to access national and export markets.' },
    ],
    industries: [
      { name: 'Real Estate and Builders', icon: '🏗️', urgency: 'Critical' },
      { name: 'Schools and Coaching', icon: '🎓', urgency: 'High' },
      { name: 'Healthcare and Clinics', icon: '🏥', urgency: 'High' },
      { name: 'Manufacturing and B2B', icon: '🏭', urgency: 'High' },
      { name: 'Retail and Lifestyle', icon: '🛍️', urgency: 'Medium' },
      { name: 'Food and Restaurants', icon: '🍔', urgency: 'Medium' },
    ],
    quote: 'Ghaziabad is NCR but priced like a Tier-2 city — that\'s why smart businesses are rushing in. Digital marketing is what separates those who capture this wave from those who miss it.',
  },
};

const urgencyStyle = {
  Critical: { background: 'rgba(204,30,0,0.1)', border: '1px solid rgba(204,30,0,0.3)', color: '#cc1e00' },
  High:     { background: 'rgba(212,64,0,0.08)', border: '1px solid rgba(212,64,0,0.25)', color: '#d44000' },
  Medium:   { background: 'rgba(120,80,20,0.08)', border: '1px solid rgba(120,80,20,0.2)', color: '#7a5010' },
};

const CityLandingPage = () => {
  const { cityId: paramId } = useParams();
  const location = useLocation();
  const cityId = paramId || location.pathname.replace('/marketing-agency-', '');
  const data = cityData[cityId] || cityData.varanasi;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.metaTitle;
  }, [data]);

  return (
    <main style={{ background: 'var(--background)', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '75vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(' + data.img + ')', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />

        <Link to="/" style={{ position: 'absolute', top: '100px', left: '4%', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', zIndex: 2, fontFamily: "'Space Grotesk', sans-serif" }}>
          Back to Home
        </Link>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '5rem' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: data.accentColor, fontFamily: "'Space Grotesk', sans-serif", marginBottom: '1rem' }}>
              Market Research Report — {data.state}
            </div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1, color: '#fff', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
              {data.name}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.8)', fontWeight: 500, maxWidth: '600px', lineHeight: 1.5, marginBottom: '3rem' }}>
              {data.tagline}
            </p>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              {[0, 2, 4].map((i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{data.heroStat[i]}</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginTop: '0.3rem', fontFamily: "'Space Grotesk', sans-serif" }}>{data.heroStat[i + 1]}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARKET OVERVIEW */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="city-2col">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="section-label">Market Overview</span>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Why {data.name} is a{' '}
                <span style={{ background: 'linear-gradient(135deg, ' + data.accentColor + ', #f57c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Digital Gold Mine.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{data.overview}</p>
              <blockquote style={{ marginTop: '2rem', padding: '1.25rem 1.5rem', borderLeft: '3px solid ' + data.accentColor, background: 'var(--section-bg)', borderRadius: '0 12px 12px 0', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                "{data.quote}"
              </blockquote>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="section-label">Key Market Data</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                {data.marketData.map((stat) => (
                  <div key={stat.label} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 900, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, ' + data.accentColor + ', #f57c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.3rem 0 0.2rem' }}>{stat.label}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>{stat.note}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY DIGITAL MARKETING */}
      <section style={{ padding: '100px 0', background: 'var(--section-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Why Digital Marketing</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text-primary)', maxWidth: '800px', margin: '0 auto' }}>
              4 Reasons Online Marketing is{' '}
              <span style={{ background: 'linear-gradient(135deg, ' + data.accentColor + ', #f57c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Non-Negotiable</span>
              {' '}in {data.name}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="city-2col">
            {data.whyDigital.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: '100px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="section-label">Industry Focus</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Who We Help in {data.name}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="city-3col">
            {data.industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ padding: '1.5rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{ind.icon}</span>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{ind.name}</div>
                  <span style={{ fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.2rem 0.5rem', borderRadius: '50px', ...urgencyStyle[ind.urgency] }}>{ind.urgency}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE TRENDS */}
      <section style={{ padding: '100px 0', background: 'var(--section-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-label">Future Market Projections</span>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
              What is Coming for{' '}
              <span style={{ background: 'linear-gradient(135deg, ' + data.accentColor + ', #f57c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{data.name}</span>
            </h2>
          </div>
          <div>
            {data.futureTrends.map((trend, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '3rem', padding: '2.5rem 0', borderBottom: '1px solid var(--border-color)', alignItems: 'start' }} className="trend-row">
                <div>
                  <span style={{ display: 'inline-block', padding: '0.35rem 0.9rem', background: data.accentColor + '15', border: '1px solid ' + data.accentColor + '35', borderRadius: '50px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em', color: data.accentColor, fontFamily: "'Space Grotesk', sans-serif" }}>{trend.year}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{trend.headline}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{trend.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ background: data.accentColor + '08', border: '1px solid ' + data.accentColor + '25', borderRadius: '24px', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: data.accentColor, fontFamily: "'Space Grotesk', sans-serif", marginBottom: '0.75rem' }}>Free Strategy Audit — {data.name}</div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '480px' }}>
                Ready to Dominate {data.name}?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.75rem' }}>
                Get a free 30-min audit — we will show you exactly where your competition is beating you online and how to reverse it.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Free Audit
              </button>
              <a href="https://wa.me/919220797941" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#25D366', textDecoration: 'none' }}>
                WhatsApp Us Instead
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <Contact />

      <style>{`
        @media (max-width: 768px) {
          .city-2col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .city-3col { grid-template-columns: 1fr 1fr !important; }
          .trend-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
        @media (max-width: 480px) {
          .city-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
};

export default CityLandingPage;
