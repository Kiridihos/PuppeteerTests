const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {

    it('Debe abrir yu cerrar el navegador', async () => {
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
        await page.goto('https://es.wikipedia.org/') 
        await page.setDefaultTimeout(5000);
        await page.waitForSelector('img');

        //Recargar la imagen
        await page.reload();
        await page.waitForSelector('img');

        //Navegar a otro sitio
        await page.goto('https://www.platzi.com')
        await page.waitForSelector('body > main > header > div > figure > svg')


        //Navegar hacia atras
        await page.goBack();
        await page.waitForSelector('img');

        // Navegar hacia adelante
        await page.goForward();
        await page.waitForSelector('img');

        //ir a pagina 2
        const page2 = await browser.newPage();
        await page2.goto('https://youtube.com')

        await browser.close();


    }, 30000) // 30000 es el timeout que se especificara para que nuestro sitio intente realizar la prueba
})