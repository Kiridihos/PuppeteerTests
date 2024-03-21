const puppeteer = require('puppeteer');

describe('Interactuando con elementos', () => {

    it('Interactuando con elementos', async () => {
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
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
        await page.waitForSelector('#authentication > span');

        //Clic derecho
        await page.click('#authentication > span', {button: 'right', delay: 500});
        await new Promise(resolve => setTimeout(resolve, 3000));

        //esconder menu
        await page.click('#authentication > span', {button: 'left', delay: 500});
        await new Promise(resolve => setTimeout(resolve, 3000));

        //Doble clic
        //await page.click('#authentication > button',{clickCount:2, delay: 500})
        

        // Cuando suceden alertas del navegador, una manera de aceptarlos es la siguiente
        // page.on('dialog', async (dialog) => {
        //     console.log('Alerta detectada:', dialog.message())
        //     await dialog.accept()

            
        // });
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.type('#developer-name', 'Diego', {delay: 500});
        await new Promise(resolve => setTimeout(resolve, 3000));

        await page.click('#remote-testing')
        await page.click('#tried-test-cafe')
        await page.type('#comments', 'Esto es un comentario', {delay: 200})
        await page.click('#submit-button')
        await new Promise(resolve => setTimeout(resolve, 3000));

        await browser.close();


    }, 60000) // 30000 es el timeout que se especificara para que nuestro sitio intente realizar la prueba
})