const puppeteer = require('puppeteer');

describe('Tipos de espera', () => {

    it('Mostrar los diferentes tipos de espera', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 0, 
            devtools: false,
            // viewport va mas enfocado a el tamaño del contenido web y no agranda la ventana de google

            // defaultViewport: { 
            //     width: 2100,
            //     height: 1080
            // }
            // Args se encarga de darle el tamaño a la ventana de google
            //args: ['--window-size=1920,1080'],
            // Este nos ayuda a que nuestra pagina este al mismo tamaño de la ventana
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('https://platzi.com',{timeout: 10000});
        await page.waitForFunction(() => document.querySelector('body > main > header > div > nav > ul > li:nth-child(1) > a').innerText === 'Exporar')
        
        //body > main > section.HeroSection_HeroSection__sJMhH > h1
        await browser.close();


    }, 60000) // 30000 es el timeout que se especificara para que nuestro sitio intente realizar la prueba
})