const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Contenido del index.html', () => {
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('Tiene título correcto', () => {
    const title = document.querySelector('title');
    expect(title.textContent).toBe('La Cienega');
  });

  test('Contiene la sección de pruebas funcionales', () => {
    const section = document.querySelector('section');
    expect(section).not.toBeNull();
    expect(section.textContent).toMatch(/Pruebas Funcionales/);
  });

  test('Hay al menos 3 tarjetas de pruebas', () => {
    const cards = document.querySelectorAll('.card');
    expect(cards.length).toBeGreaterThanOrEqual(3);
  });
});
