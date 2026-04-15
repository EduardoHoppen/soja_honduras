# 🌱 Edaphoclimatic Conditions of Honduras for Soybean

Projeto desenvolvido com foco em análise técnica das condições **edafoclimáticas de Honduras**, com ênfase na região de **Olancho (~14°N)**, visando suporte à tomada de decisão para **validação de cultivares de soja em ambiente tropical**.

🔗 **Acesse o projeto online:**
👉 https://eduardohoppen.github.io/soja_honduras/

---

## 📌 Objetivo

Este projeto tem como objetivo apresentar, de forma **visual, técnica e interativa**, os principais fatores ambientais que impactam o cultivo de soja em Honduras:

* Latitude e fotoperíodo
* Temperatura
* Regime de chuvas
* Tipos de solo
* Topografia

A proposta é servir como base para:

* estudos agronômicos
* validação de materiais genéticos
* apresentações técnicas

---

## 🧠 Abordagem

A aplicação foi construída como uma **página interativa estilo scrollytelling**, onde cada seção representa um bloco técnico de análise.

O conteúdo foi estruturado para:

* leitura progressiva (scroll)
* clareza visual
* suporte a apresentações (inclusive exportação em PDF)

---

## 🌍 Internacionalização (i18n)

O projeto conta com suporte a múltiplos idiomas:

* 🇧🇷 Português (padrão)
* 🇺🇸 Inglês
* 🇪🇸 Espanhol

### Funcionalidades:

* seletor de idioma no topo da página
* persistência via `localStorage`
* atualização dinâmica sem reload
* adaptação de:

  * textos
  * navegação (dots)
  * botões (PDF e CTA)
  * atributos acessíveis (aria-label, alt)

---

## 🖨️ Exportação em PDF

A página permite exportação completa em PDF:

* botão "Baixar PDF" no topo
* layout adaptado via `@media print`
* ocultação de elementos interativos
* conteúdo otimizado para impressão

---

## 🧩 Estrutura do Projeto

```bash
soja_honduras/
│
├── index.html
│
├── scripts/
│   ├── app.js
│   ├── i18n.js
│   ├── navigation.js
│   ├── reveal.js
│   ├── print.js
│   └── cta.js
│
├── styles/
│   ├── base.css
│   ├── components.css
│   ├── responsive.css
│   └── print.css
│
├── assets/
│   ├── mapa_honduras.png
│   ├── mapa_topografico_honduras.png
│   └── solo_honduras.png
│
└── README.md
```

---

## ⚙️ Tecnologias Utilizadas

* HTML5
* CSS3 (modularizado + responsivo)
* JavaScript (ES Modules)
* IntersectionObserver API
* LocalStorage
* Lucide Icons

---

## 🧱 Arquitetura

O projeto segue uma abordagem modular:

### 🔹 `app.js`

Responsável por inicializar todos os módulos

### 🔹 `i18n.js`

Sistema de internacionalização:

* gerenciamento de idioma
* tradução dinâmica
* eventos globais (`languagechange`)

### 🔹 `navigation.js`

* navegação por dots
* controle de slide ativo
* barra de progresso

### 🔹 `reveal.js`

* animações on-scroll

### 🔹 `print.js`

* preparação da página para exportação em PDF

### 🔹 `cta.js`

* controle do botão de recomendação final

---

## 📱 Responsividade

A aplicação é totalmente responsiva:

* desktop → layout completo com navegação lateral
* mobile → adaptação de elementos e simplificação visual
* otimização de UX no seletor de idioma

---

## ♿ Acessibilidade

* uso de `aria-label` dinâmico
* controle de idioma via `lang` no HTML
* contraste adequado para leitura
* navegação assistida por teclado

---

## 🚀 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/EduardoHoppen/soja_honduras.git

# Acesse a pasta
cd soja_honduras

# Abra o index.html no navegador
```

Ou utilize uma extensão como:

* Live Server (VS Code)

---

## 📈 Possíveis evoluções

* migração para sistema i18n baseado em JSON externo (`/locales`)
* exportação em PPT por slide
* integração com dados climáticos reais (API)
* modo apresentação (fullscreen)
* geração dinâmica de gráficos

---

## 👨‍🎓 Autores

Projeto desenvolvido por:

* Eduardo Steffens Hoppen
* Matheus Gomes
* Leonardo Dias

Universidade de Passo Fundo (UPF)

---

## 📄 Licença

Este projeto foi desenvolvido para fins **acadêmicos e comerciais**, conforme definido pelos autores.

---

## 🤝 Contribuição

Contribuições são bem-vindas!

Sinta-se livre para:

* abrir issues
* sugerir melhorias
* enviar pull requests

---

## ⭐ Considerações finais

Este projeto representa a integração entre:

* conhecimento agronômico
* análise técnica
* desenvolvimento web

com o objetivo de transformar dados complexos em uma experiência visual clara, interativa e útil para tomada de decisão.

---
