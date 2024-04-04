const puppeteer = require('puppeteer');

describe('Emulando Dispostivos', () => {

    let browser
    let page 
    let globalTime = 20000
    beforeEach(async () => {
            browser = await puppeteer.launch({
            headless: false,
            slowMo: 0, 
            devtools: false,
            // viewport va mas enfocado a el tamaño del contenido web y no agranda la ventana de google

            // defaultViewport: { 
            //     width: 2100,
            //     height: 1080
            // 
            // Args se encarga de darle el tamaño a la ventana de google
            //args: ['--window-size=1920,1080'],
            // Este nos ayuda a que nuestra pagina este al mismo tamaño de la ventana
            defaultViewport: null
            })
            page = await browser.newPage()
        
    }, globalTime)

    afterEach(async () => {
        await browser.close();
    }, globalTime)

    test('Emulando dispositivos de forma manual', async () => {
        await page.goto('https://platzi.com', {waitUntil: 'load'});
        const titulo = await page.title()
        const url = await page.url()
        console.log('titulo', titulo)
        console.log('url', url)

    }, 60000) // 30000 es el timeout que se especificara para que nuestro sitio intente realizar la prueba

    it('Extraer la información de un elemento', async () => {
        await page.goto('https://platzi.com', {waitUntil: 'load'});
        await page.waitForSelector('body > main > header > div > nav > ul > li:nth-child(3) > a');
        const nombreBoton = await page.$eval('body > main > header > div > nav > ul > li:nth-child(3) > a', element => element.textContent);
        console.log('BottonName: ',nombreBoton)
    }, 60000)

    it('Contar los elementos de una pagina', async ()=> {
        await page.goto('https://platzi.com', {waitUntil: 'load'});
        await page.$$eval('img', (imagenes)=> imagenes.length)
    }, 60000)
})