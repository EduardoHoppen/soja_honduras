const STORAGE_KEY = 'site-language';
const DEFAULT_LANGUAGE = 'pt-BR';
const SUPPORTED_LANGUAGES = ['pt-BR', 'en', 'es'];

const TRANSLATIONS = {
  'pt-BR': {
    ui: {
      downloadPdf: 'Baixar PDF',
      languageLabel: 'Idioma',
      languageAriaLabel: 'Selecionar idioma',
      showRecommendation: 'Ver enfoque recomendado',
      hideRecommendation: 'Ocultar enfoque recomendado',
      slideFallback: 'Slide {number}'
    },
    nav: {
      'slide-1': 'Portada',
      'slide-2': 'Localização',
      'slide-3': 'Clima',
      'slide-4': 'Fotoperíodo',
      'slide-5': 'Temperatura',
      'slide-6': 'Chuvas',
      'slide-7': 'Solos',
      'slide-8': 'Topografia',
      'slide-9': 'Encerramento'
    },
    text: {
      'Condições edafoclimáticas · Honduras · Olancho': 'Condições edafoclimáticas · Honduras · Olancho',
      'Condições Edafoclimáticas de Honduras': 'Condições Edafoclimáticas de Honduras',
      'para Soja': 'para Soja',
      'Faixa latitudinal de Honduras': 'Faixa latitudinal de Honduras',
      'Faixa térmica predominante': 'Faixa térmica predominante',
      'Regime pluviométrico anual': 'Regime pluviométrico anual',
      'Meses com maior concentração de chuvas': 'Meses com maior concentração de chuvas',
      'Montanhas': 'Montanhas',
      'Áreas com maior restrição operacional e mecanização mais limitada.': 'Áreas com maior restrição operacional e mecanização mais limitada.',
      'Vales': 'Vales',
      'Áreas mais favoráveis para cultivo e operação mecanizada.': 'Áreas mais favoráveis para cultivo e operação mecanizada.',
      'Slide 2 · Localização geográfica': 'Slide 2 · Localização geográfica',
      '1. Localização e recorte técnico': '1. Localização e recorte técnico',
      'Latitude': 'Latitude',
      'Região foco': 'Região foco',
      'Ambiente': 'Ambiente',
      'Tropical': 'Tropical',
      'Objetivo': 'Objetivo',
      'Base técnica para soja': 'Base técnica para soja',
      'Slide 3 · Clima geral': 'Slide 3 · Clima geral',
      'Dados climáticos centrais de Honduras para leitura inicial do ambiente.': 'Dados climáticos centrais de Honduras para leitura inicial do ambiente.',
      '2. Clima geral: dados objetivos': '2. Clima geral: dados objetivos',
      'Temperatura': 'Temperatura',
      'Faixa térmica predominante em ambiente tropical.': 'Faixa térmica predominante em ambiente tropical.',
      'Umidade relativa': 'Umidade relativa',
      'Faixa elevada durante boa parte do período chuvoso.': 'Faixa elevada durante boa parte do período chuvoso.',
      'Radiação': 'Radiação',
      'Alta disponibilidade de energia ao longo do ano.': 'Alta disponibilidade de energia ao longo do ano.',
      'Janela climática': 'Janela climática',
      'Slide 4 · Fotoperíodo': 'Slide 4 · Fotoperíodo',
      '~14°N indica ambiente de dias relativamente curtos e menor oscilação anual.': '~14°N indica ambiente de dias relativamente curtos e menor oscilação anual.',
      '3. Fotoperíodo': '3. Fotoperíodo',
      'Efeito esperado: influência direta no florescimento.': 'Efeito esperado: influência direta no florescimento.',
      'Risco agronômico: florescimento precoce em materiais sensíveis.': 'Risco agronômico: florescimento precoce em materiais sensíveis.',
      'Jan': 'Jan',
      'Fev': 'Fev',
      'Mar': 'Mar',
      'Abr': 'Abr',
      'Mai': 'Mai',
      'Jun': 'Jun',
      'Jul': 'Jul',
      'Ago': 'Ago',
      'Set': 'Set',
      'Out': 'Out',
      'Nov': 'Nov',
      'Dez': 'Dez',
      'Honduras: menor oscilação anual': 'Honduras: menor oscilação anual',
      'Brasil Sul: maior amplitude anual': 'Brasil Sul: maior amplitude anual',
      'Slide 5 · Temperatura': 'Slide 5 · Temperatura',
      '4. Temperatura de Honduras': '4. Temperatura de Honduras',
      'Faixa': 'Faixa',
      'Alta': 'Alta',
      'Variação anual': 'Variação anual',
      'Baixa': 'Baixa',
      'Slide 6 · Regime de chuvas': 'Slide 6 · Regime de chuvas',
      'Regime anual: 1000–1400 mm com estação chuvosa concentrada entre 05–11.': 'Regime anual: 1000–1400 mm com estação chuvosa concentrada entre 05–11.',
      '5. Regime de chuvas': '5. Regime de chuvas',
      'Distribuição: concentração no período maio–novembro.': 'Distribuição: concentração no período maio–novembro.',
      'Período seco: dezembro–abril.': 'Período seco: dezembro–abril.',
      'Slide 7 · Solos': 'Slide 7 · Solos',
      'Foco principal: pH, textura e status do solo.': 'Foco principal: pH, textura e status do solo.',
      '6. Solos': '6. Solos',
      'Leitura funcional: profundidade, estrutura e drenagem.': 'Leitura funcional: profundidade, estrutura e drenagem.',
      'pH': 'pH',
      'Textura': 'Textura',
      'Franco a franco-argiloso': 'Franco a franco-argiloso',
      'Status': 'Status',
      'Solos corrigíveis': 'Solos corrigíveis',
      'Slide 8 · Topografia': 'Slide 8 · Topografia',
      'Predomínio de relevo irregular com cultivo favorecido em áreas de vale.': 'Predomínio de relevo irregular com cultivo favorecido em áreas de vale.',
      '7. Topografia': '7. Topografia',
      'Limitação principal: mecanização.': 'Limitação principal: mecanização.',
      'Encerramento · Pergunta técnica': 'Encerramento · Pergunta técnica',
      'Pergunta técnica final': 'Pergunta técnica final',
      'Latitude:': 'Latitude:',
      'Temperatura:': 'Temperatura:',
      'Chuvas:': 'Chuvas:',
      'Enfoque recomendado:': 'Enfoque recomendado:'
    },
    html: {
      title: 'Condições Edafoclimáticas de Honduras para Soja',
      heroTitle: 'Condições Edafoclimáticas de Honduras<br>para Soja',
      heroSubtitle:
        'Leitura técnica objetiva das condições de <strong>latitude</strong>, <strong>temperatura</strong>, <strong>regime de chuvas</strong>, <strong>solo</strong> e <strong>topografia</strong>, com foco em <strong>Olancho (~14°N)</strong>.',
      finalQuestion:
        'Com base em <strong>~14°N</strong>, <strong>24–30 °C</strong>, <strong>1000–1400 mm/ano</strong>, solos <strong>franco a franco-argilosos</strong> e relevo com predominância irregular, quais materiais de soja devem ser priorizados para validação inicial em Honduras?',
      finalAnswer:
        '<strong>Enfoque recomendado:</strong> priorizar materiais com adaptação tropical, estabilidade fenológica em baixa latitude e arquitetura compatível com as condições reais de Olancho.'
    },
    attrs: {
      mapAlt: 'Mapa de Honduras com Olancho destacado',
      soilAlt: 'Perfil de solo Honduras',
      topoAlt: 'Mapa topográfico de Honduras com Olancho destacado'
    }
  },

  en: {
    ui: {
      downloadPdf: 'Download PDF',
      languageLabel: 'Language',
      languageAriaLabel: 'Select language',
      showRecommendation: 'Show recommended approach',
      hideRecommendation: 'Hide recommended approach',
      slideFallback: 'Slide {number}'
    },
    nav: {
      'slide-1': 'Cover',
      'slide-2': 'Location',
      'slide-3': 'Climate',
      'slide-4': 'Photoperiod',
      'slide-5': 'Temperature',
      'slide-6': 'Rainfall',
      'slide-7': 'Soils',
      'slide-8': 'Topography',
      'slide-9': 'Closing'
    },
    text: {
      'Condições edafoclimáticas · Honduras · Olancho': 'Edaphoclimatic conditions · Honduras · Olancho',
      'Condições Edafoclimáticas de Honduras': 'Edaphoclimatic Conditions of Honduras',
      'para Soja': 'for Soybean',
      'Faixa latitudinal de Honduras': 'Latitudinal range of Honduras',
      'Faixa térmica predominante': 'Predominant temperature range',
      'Regime pluviométrico anual': 'Annual rainfall regime',
      'Meses com maior concentração de chuvas': 'Months with highest rainfall concentration',
      'Montanhas': 'Mountains',
      'Áreas com maior restrição operacional e mecanização mais limitada.': 'Areas with greater operational restriction and more limited mechanization.',
      'Vales': 'Valleys',
      'Áreas mais favoráveis para cultivo e operação mecanizada.': 'Areas more favorable for cultivation and mechanized operation.',
      'Slide 2 · Localização geográfica': 'Slide 2 · Geographic location',
      '1. Localização e recorte técnico': '1. Location and technical focus',
      'Latitude': 'Latitude',
      'Região foco': 'Focus region',
      'Ambiente': 'Environment',
      'Tropical': 'Tropical',
      'Objetivo': 'Objective',
      'Base técnica para soja': 'Technical basis for soybean',
      'Slide 3 · Clima geral': 'Slide 3 · General climate',
      'Dados climáticos centrais de Honduras para leitura inicial do ambiente.': 'Core climate data of Honduras for an initial environmental reading.',
      '2. Clima geral: dados objetivos': '2. General climate: objective data',
      'Temperatura': 'Temperature',
      'Faixa térmica predominante em ambiente tropical.': 'Predominant temperature range in a tropical environment.',
      'Umidade relativa': 'Relative humidity',
      'Faixa elevada durante boa parte do período chuvoso.': 'High range during much of the rainy season.',
      'Radiação': 'Radiation',
      'Alta disponibilidade de energia ao longo do ano.': 'High energy availability throughout the year.',
      'Janela climática': 'Climate window',
      'Slide 4 · Fotoperíodo': 'Slide 4 · Photoperiod',
      '~14°N indica ambiente de dias relativamente curtos e menor oscilação anual.': '~14°N indicates an environment with relatively short days and lower annual variation.',
      '3. Fotoperíodo': '3. Photoperiod',
      'Efeito esperado: influência direta no florescimento.': 'Expected effect: direct influence on flowering.',
      'Risco agronômico: florescimento precoce em materiais sensíveis.': 'Agronomic risk: early flowering in sensitive materials.',
      'Jan': 'Jan',
      'Fev': 'Feb',
      'Mar': 'Mar',
      'Abr': 'Apr',
      'Mai': 'May',
      'Jun': 'Jun',
      'Jul': 'Jul',
      'Ago': 'Aug',
      'Set': 'Sep',
      'Out': 'Oct',
      'Nov': 'Nov',
      'Dez': 'Dec',
      'Honduras: menor oscilação anual': 'Honduras: lower annual variation',
      'Brasil Sul: maior amplitude anual': 'Southern Brazil: greater annual amplitude',
      'Slide 5 · Temperatura': 'Slide 5 · Temperature',
      '4. Temperatura de Honduras': '4. Temperature in Honduras',
      'Faixa': 'Range',
      'Alta': 'High',
      'Variação anual': 'Annual variation',
      'Baixa': 'Low',
      'Slide 6 · Regime de chuvas': 'Slide 6 · Rainfall regime',
      'Regime anual: 1000–1400 mm com estação chuvosa concentrada entre 05–11.': 'Annual regime: 1000–1400 mm with the rainy season concentrated between 05–11.',
      '5. Regime de chuvas': '5. Rainfall regime',
      'Distribuição: concentração no período maio–novembro.': 'Distribution: concentration from May to November.',
      'Período seco: dezembro–abril.': 'Dry season: December to April.',
      'Slide 7 · Solos': 'Slide 7 · Soils',
      'Foco principal: pH, textura e status do solo.': 'Main focus: pH, texture and soil status.',
      '6. Solos': '6. Soils',
      'Leitura funcional: profundidade, estrutura e drenagem.': 'Functional reading: depth, structure and drainage.',
      'pH': 'pH',
      'Textura': 'Texture',
      'Franco a franco-argiloso': 'Loam to clay loam',
      'Status': 'Status',
      'Solos corrigíveis': 'Correctable soils',
      'Slide 8 · Topografia': 'Slide 8 · Topography',
      'Predomínio de relevo irregular com cultivo favorecido em áreas de vale.': 'Predominance of irregular relief, with cultivation favored in valley areas.',
      '7. Topografia': '7. Topography',
      'Limitação principal: mecanização.': 'Main limitation: mechanization.',
      'Encerramento · Pergunta técnica': 'Closing · Technical question',
      'Pergunta técnica final': 'Final technical question',
      'Latitude:': 'Latitude:',
      'Temperatura:': 'Temperature:',
      'Chuvas:': 'Rainfall:',
      'Enfoque recomendado:': 'Recommended approach:'
    },
    html: {
      title: 'Edaphoclimatic Conditions of Honduras for Soybean',
      heroTitle: 'Edaphoclimatic Conditions of Honduras<br>for Soybean',
      heroSubtitle:
        'Objective technical reading of <strong>latitude</strong>, <strong>temperature</strong>, <strong>rainfall regime</strong>, <strong>soil</strong> and <strong>topography</strong>, focused on <strong>Olancho (~14°N)</strong>.',
      finalQuestion:
        'Based on <strong>~14°N</strong>, <strong>24–30 °C</strong>, <strong>1000–1400 mm/year</strong>, <strong>loam to clay-loam</strong> soils and predominantly irregular relief, which soybean materials should be prioritized for initial validation in Honduras?',
      finalAnswer:
        '<strong>Recommended approach:</strong> prioritize materials with tropical adaptation, phenological stability at low latitude, and architecture compatible with the real conditions of Olancho.'
    },
    attrs: {
      mapAlt: 'Map of Honduras highlighting Olancho',
      soilAlt: 'Soil profile of Honduras',
      topoAlt: 'Topographic map of Honduras highlighting Olancho'
    }
  },

  es: {
    ui: {
      downloadPdf: 'Descargar PDF',
      languageLabel: 'Idioma',
      languageAriaLabel: 'Seleccionar idioma',
      showRecommendation: 'Ver enfoque recomendado',
      hideRecommendation: 'Ocultar enfoque recomendado',
      slideFallback: 'Diapositiva {number}'
    },
    nav: {
      'slide-1': 'Portada',
      'slide-2': 'Ubicación',
      'slide-3': 'Clima',
      'slide-4': 'Fotoperiodo',
      'slide-5': 'Temperatura',
      'slide-6': 'Lluvias',
      'slide-7': 'Suelos',
      'slide-8': 'Topografía',
      'slide-9': 'Cierre'
    },
    text: {
      'Condições edafoclimáticas · Honduras · Olancho': 'Condiciones edafoclimáticas · Honduras · Olancho',
      'Condições Edafoclimáticas de Honduras': 'Condiciones Edafoclimáticas de Honduras',
      'para Soja': 'para Soja',
      'Faixa latitudinal de Honduras': 'Rango latitudinal de Honduras',
      'Faixa térmica predominante': 'Rango térmico predominante',
      'Regime pluviométrico anual': 'Régimen pluviométrico anual',
      'Meses com maior concentração de chuvas': 'Meses con mayor concentración de lluvias',
      'Montanhas': 'Montañas',
      'Áreas com maior restrição operacional e mecanização mais limitada.': 'Áreas con mayor restricción operativa y mecanización más limitada.',
      'Vales': 'Valles',
      'Áreas mais favoráveis para cultivo e operação mecanizada.': 'Áreas más favorables para el cultivo y la operación mecanizada.',
      'Slide 2 · Localização geográfica': 'Diapositiva 2 · Ubicación geográfica',
      '1. Localização e recorte técnico': '1. Ubicación y recorte técnico',
      'Latitude': 'Latitud',
      'Região foco': 'Región foco',
      'Ambiente': 'Ambiente',
      'Tropical': 'Tropical',
      'Objetivo': 'Objetivo',
      'Base técnica para soja': 'Base técnica para soja',
      'Slide 3 · Clima geral': 'Diapositiva 3 · Clima general',
      'Dados climáticos centrais de Honduras para leitura inicial do ambiente.': 'Datos climáticos centrales de Honduras para una lectura inicial del ambiente.',
      '2. Clima geral: dados objetivos': '2. Clima general: datos objetivos',
      'Temperatura': 'Temperatura',
      'Faixa térmica predominante em ambiente tropical.': 'Rango térmico predominante en ambiente tropical.',
      'Umidade relativa': 'Humedad relativa',
      'Faixa elevada durante boa parte do período chuvoso.': 'Rango elevado durante gran parte del período lluvioso.',
      'Radiação': 'Radiación',
      'Alta disponibilidade de energia ao longo do ano.': 'Alta disponibilidad de energía a lo largo del año.',
      'Janela climática': 'Ventana climática',
      'Slide 4 · Fotoperíodo': 'Diapositiva 4 · Fotoperiodo',
      '~14°N indica ambiente de dias relativamente curtos e menor oscilação anual.': '~14°N indica un ambiente de días relativamente cortos y menor oscilación anual.',
      '3. Fotoperíodo': '3. Fotoperiodo',
      'Efeito esperado: influência direta no florescimento.': 'Efecto esperado: influencia directa sobre la floración.',
      'Risco agronômico: florescimento precoce em materiais sensíveis.': 'Riesgo agronómico: floración precoz en materiales sensibles.',
      'Jan': 'Ene',
      'Fev': 'Feb',
      'Mar': 'Mar',
      'Abr': 'Abr',
      'Mai': 'May',
      'Jun': 'Jun',
      'Jul': 'Jul',
      'Ago': 'Ago',
      'Set': 'Sep',
      'Out': 'Oct',
      'Nov': 'Nov',
      'Dez': 'Dic',
      'Honduras: menor oscilação anual': 'Honduras: menor oscilación anual',
      'Brasil Sul: maior amplitude anual': 'Sur de Brasil: mayor amplitud anual',
      'Slide 5 · Temperatura': 'Diapositiva 5 · Temperatura',
      '4. Temperatura de Honduras': '4. Temperatura de Honduras',
      'Faixa': 'Rango',
      'Alta': 'Alta',
      'Variação anual': 'Variación anual',
      'Baixa': 'Baja',
      'Slide 6 · Regime de chuvas': 'Diapositiva 6 · Régimen de lluvias',
      'Regime anual: 1000–1400 mm com estação chuvosa concentrada entre 05–11.': 'Régimen anual: 1000–1400 mm con estación lluviosa concentrada entre 05–11.',
      '5. Regime de chuvas': '5. Régimen de lluvias',
      'Distribuição: concentração no período maio–novembro.': 'Distribución: concentración en el período mayo–noviembre.',
      'Período seco: dezembro–abril.': 'Período seco: diciembre–abril.',
      'Slide 7 · Solos': 'Diapositiva 7 · Suelos',
      'Foco principal: pH, textura e status do solo.': 'Foco principal: pH, textura y estado del suelo.',
      '6. Solos': '6. Suelos',
      'Leitura funcional: profundidade, estrutura e drenagem.': 'Lectura funcional: profundidad, estructura y drenaje.',
      'pH': 'pH',
      'Textura': 'Textura',
      'Franco a franco-argiloso': 'Franco a franco-arcilloso',
      'Status': 'Estado',
      'Solos corrigíveis': 'Suelos corregibles',
      'Slide 8 · Topografia': 'Diapositiva 8 · Topografía',
      'Predomínio de relevo irregular com cultivo favorecido em áreas de vale.': 'Predominio de relieve irregular con cultivo favorecido en áreas de valle.',
      '7. Topografia': '7. Topografía',
      'Limitação principal: mecanização.': 'Limitación principal: mecanización.',
      'Encerramento · Pergunta técnica': 'Cierre · Pregunta técnica',
      'Pergunta técnica final': 'Pregunta técnica final',
      'Latitude:': 'Latitud:',
      'Temperatura:': 'Temperatura:',
      'Chuvas:': 'Lluvias:',
      'Enfoque recomendado:': 'Enfoque recomendado:'
    },
    html: {
      title: 'Condiciones Edafoclimáticas de Honduras para Soja',
      heroTitle: 'Condiciones Edafoclimáticas de Honduras<br>para Soja',
      heroSubtitle:
        'Lectura técnica objetiva de las condiciones de <strong>latitud</strong>, <strong>temperatura</strong>, <strong>régimen de lluvias</strong>, <strong>suelo</strong> y <strong>topografía</strong>, con foco en <strong>Olancho (~14°N)</strong>.',
      finalQuestion:
        'Con base en <strong>~14°N</strong>, <strong>24–30 °C</strong>, <strong>1000–1400 mm/año</strong>, suelos <strong>franco a franco-arcillosos</strong> y relieve con predominio irregular, ¿qué materiales de soja deben priorizarse para validación inicial en Honduras?',
      finalAnswer:
        '<strong>Enfoque recomendado:</strong> priorizar materiales con adaptación tropical, estabilidad fenológica en baja latitud y arquitectura compatible con las condiciones reales de Olancho.'
    },
    attrs: {
      mapAlt: 'Mapa de Honduras con Olancho destacado',
      soilAlt: 'Perfil de suelo de Honduras',
      topoAlt: 'Mapa topográfico de Honduras con Olancho destacado'
    }
  }
};

const LOOKUP = buildLookup();

function buildLookup() {
  const lookup = new Map();

  Object.entries(TRANSLATIONS).forEach(([lang, dictionary]) => {
    Object.entries(dictionary.text).forEach(([canonicalPt, value]) => {
      lookup.set(normalizeText(value), canonicalPt);
    });

    Object.values(dictionary.html).forEach((value) => {
      lookup.set(normalizeText(stripHtml(value)), value);
    });
  });

  return lookup;
}

function normalizeText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function stripHtml(value) {
  const temp = document.createElement('div');
  temp.innerHTML = value;
  return temp.textContent || temp.innerText || '';
}

function getBrowserLanguage() {
  const browserLanguage = navigator.language || DEFAULT_LANGUAGE;
  if (browserLanguage.toLowerCase().startsWith('pt')) return 'pt-BR';
  if (browserLanguage.toLowerCase().startsWith('es')) return 'es';
  if (browserLanguage.toLowerCase().startsWith('en')) return 'en';
  return DEFAULT_LANGUAGE;
}

function resolveLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

export function getCurrentLanguage() {
  return resolveLanguage(localStorage.getItem(STORAGE_KEY) || getBrowserLanguage());
}

export function t(path, replacements = {}) {
  const language = getCurrentLanguage();
  const dictionary = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];

  const value = path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), dictionary)
    ?? path.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), TRANSLATIONS[DEFAULT_LANGUAGE])
    ?? '';

  if (typeof value !== 'string') return value;

  return Object.entries(replacements).reduce(
    (text, [key, replacement]) => text.replaceAll(`{${key}}`, replacement),
    value
  );
}

function replaceTextNodes(language) {
  const targetDictionary = TRANSLATIONS[language];
  if (!targetDictionary) return;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('script, style, select, option')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const updates = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const trimmed = normalizeText(node.textContent);
    const canonicalKey = LOOKUP.get(trimmed) || trimmed;

    if (targetDictionary.text[canonicalKey]) {
      updates.push({
        node,
        from: trimmed,
        to: targetDictionary.text[canonicalKey]
      });
    }
  }

  updates.forEach(({ node, from, to }) => {
    node.textContent = node.textContent.replace(from, to);
  });
}

function replaceHtmlBlocks(language) {
  const dictionary = TRANSLATIONS[language];
  if (!dictionary) return;

  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) heroTitle.innerHTML = dictionary.html.heroTitle;

  const heroSubtitle = document.querySelector('.hero .hero-subtitle');
  if (heroSubtitle) heroSubtitle.innerHTML = dictionary.html.heroSubtitle;

  const finalSection = document.querySelectorAll('.slide');
  const lastSlide = finalSection[finalSection.length - 1];

  if (lastSlide) {
    const paragraphs = lastSlide.querySelectorAll('p');
    if (paragraphs[1]) {
      paragraphs[1].innerHTML = dictionary.html.finalQuestion;
    }
  }

  const ctaAnswer = document.getElementById('ctaAnswer');
  if (ctaAnswer) ctaAnswer.innerHTML = dictionary.html.finalAnswer;

  document.title = dictionary.html.title;
}

function replaceAttributes(language) {
  const dictionary = TRANSLATIONS[language];
  if (!dictionary) return;

  const images = Array.from(document.querySelectorAll('img'));
  images.forEach((img) => {
    const currentAlt = normalizeText(img.getAttribute('alt'));
    if (currentAlt === normalizeText(TRANSLATIONS['pt-BR'].attrs.mapAlt) || currentAlt === normalizeText(TRANSLATIONS.en.attrs.mapAlt) || currentAlt === normalizeText(TRANSLATIONS.es.attrs.mapAlt)) {
      img.setAttribute('alt', dictionary.attrs.mapAlt);
    }
    if (currentAlt === normalizeText(TRANSLATIONS['pt-BR'].attrs.soilAlt) || currentAlt === normalizeText(TRANSLATIONS.en.attrs.soilAlt) || currentAlt === normalizeText(TRANSLATIONS.es.attrs.soilAlt)) {
      img.setAttribute('alt', dictionary.attrs.soilAlt);
    }
    if (currentAlt === normalizeText(TRANSLATIONS['pt-BR'].attrs.topoAlt) || currentAlt === normalizeText(TRANSLATIONS.en.attrs.topoAlt) || currentAlt === normalizeText(TRANSLATIONS.es.attrs.topoAlt)) {
      img.setAttribute('alt', dictionary.attrs.topoAlt);
    }
  });

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.setAttribute('aria-label', dictionary.ui.languageAriaLabel);
  }

  const languageText = document.querySelector('[data-language-label]');
  if (languageText) {
    languageText.textContent = dictionary.ui.languageLabel;
  }
}

function updateFixedUi(language) {
  const dictionary = TRANSLATIONS[language];

  const printButton = document.getElementById('printPdfBtn');
  if (printButton && !printButton.disabled) {
    printButton.textContent = dictionary.ui.downloadPdf;
  }

  const ctaButton = document.getElementById('ctaBtn');
  const ctaAnswer = document.getElementById('ctaAnswer');
  if (ctaButton && ctaAnswer) {
    const isOpen = ctaAnswer.style.display === 'block';
    ctaButton.textContent = isOpen ? dictionary.ui.hideRecommendation : dictionary.ui.showRecommendation;
  }
}

export function getSlideTitle(index, slideId) {
  const language = getCurrentLanguage();
  const dictionary = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];

  if (slideId && dictionary.nav[slideId]) {
    return dictionary.nav[slideId];
  }

  return dictionary.ui.slideFallback.replace('{number}', String(index + 1));
}

export function applyLanguage(language) {
  const resolvedLanguage = resolveLanguage(language);
  localStorage.setItem(STORAGE_KEY, resolvedLanguage);
  document.documentElement.lang = resolvedLanguage;

  replaceTextNodes(resolvedLanguage);
  replaceHtmlBlocks(resolvedLanguage);
  replaceAttributes(resolvedLanguage);
  updateFixedUi(resolvedLanguage);

  window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: resolvedLanguage } }));
}

export function initI18n() {
  const language = getCurrentLanguage();
  document.documentElement.lang = language;
  applyLanguage(language);

  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.value = language;
    languageSelect.addEventListener('change', (event) => {
      applyLanguage(event.target.value);
    });
  }
}