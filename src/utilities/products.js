const products = [
    {
        id: 1,
        title: 'Almendras tostadas',
        img: '../products/almendras-tostadas-con-sal_2.jpg',
        details: 'Avellana pelada grande, premium, tostada con sal por 250grs.',
        origin: 'Argentina',
        benefits: 'Ricas en proteínas, grasas instauradas, calcio, hierro, potasio, vitaminas del complejo B y E. Equilibra los niveles de glucosa y colesterol.',
        uses: 'Para consumir sola como colación, para agregar en ensaladas, rellenos, picadas.',
        nutritionalFacts: 'Valor Energético: 179 kcal; Carbohidratos: 6.3 g; Proteínas: 6,3 g; Grasas Totales: 15 g; Grasas Saturadas: 1.2 g; Grasas Trans: 0 g; Fibra Alimentaria: 3,2 g; Sodio: 196.8 mg; Porción: 30 g.',
        price: 1700,
        stock: 23,
        categories: {
            nuts: true,
            breakfast: false,
            celiac: false,
            vegan: true,
            frozen: false
        }
        
    },

    {
        id: 2,
        title: 'Avellanas peladas',
        img: '../products/avellana-repelada-tostada_4.jpg',
        details: 'Avellanas peladas y tostadas por 250grs',
        origin: 'Argentina',
        benefits: 'Ricas en proteínas, grasas insaturadas, calcio, hierro, potasio, vitaminas del complejo B y E. Equilibra los niveles de glucosa y colesterol.',
        uses: 'Para consumir sola, para obtener su aceite o para confitería o untables.',
        nutritionalFacts: 'Valor Energético: 629 kcal; Carbohidratos: 16.7 g; Proteínas: 14.95 g; Grasas Totales: 60 g; Sodio 0%; Hierro 4.70 mg; Potasio 680 mg; Porción de referencia: 100 g.',
        price: 1800,
        stock: 27,
        categories: {
            nuts: true,
            breakfast: false,
            celiac: false,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 3,
        title: 'Caléndula',
        img: '../products/calendula-en-flores-x-100-g.jpg',
        details: 'caléndula en flores por 100grs',
        origin: 'Egipto',
        benefits: 'Muy efectiva como antiinflamatoria, cicatrizante y regeneradora celular. También es utilizada para aliviar y prevenir dolores menstruales.',
        uses: 'Infusión: 2 cucharadas chicas por taza. Con agua a 85/90°, tapar la taza y dejar 10 minutos. Colar y disfrutar. Se puede utilizar para hacer tintura madre. NO se recomienda endulzar ya que su mayor beneficio proviene de los principios activos amargos. Se puede colocar al mate cebado.',
        nutritionalFacts: 'No aporta cantidades significativas de energía, grasas ni minerales.',
        price: 250,
        stock: 13,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 4,
        title: 'Castañas',
        img: '../products/castanas-de-para_1.jpg',
        details: 'Castañas de para peladas por 250grs.',
        origin: 'Bolivia',
        benefits: 'Destacado aporte en selenio, posee capacidad antioxidante ideal para prevenir el envejecimiento celular. A su vez, aporta variedad de minerales como calcio, magnesio, fosforo, potasio, zinc y hierro. También contiene vitaminas del complejo B: B1, B2, B3, B5, B6 y Vitamina E. Ideales para el funcionamiento del sistema nervioso y el metabolismo energético. Ideal para prevenir enfermedades cardiovasculares debido a su contenido en aceites cardioprotectores.',
        uses: 'Ideal como colación, así como también para agregar a una granola, ensaladas y barritas de cereal. Puede agregarse como decoración o relleno de tortas, tartas, budines, galletitas, panes o pastas untables.',
        nutritionalFacts: 'Valor Energético: 89kcal=386kj (4%VD); Carbohidratos: 4,8g (2%VD); Proteínas: 2,3g (3%VD); Grasas Totales: 6,8g (12%VD); Grasas Saturadas: 1,4g (6%VD); Grasas Trans: 0 g; Fibra Alimentaria: 2 g; Sodio: 8 mg; Porción: 15g (1 cuchara de sopa).',
        price: 1750,
        stock: 42,
        categories: {
            nuts: true,
            breakfast: false,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 5,
        title: 'Granola sin pasas',
        img: '../products/granola-crujiente-sin-pasas_5.jpg',
        details: 'Granola crujiente sin pasas por 500grs',
        origin: 'Argentina',
        benefits: 'Rica en proteínas, hierro y vitaminas.',
        uses: 'Ideal para consumir con leche o yogur en el deasayuno o merienda.',
        nutritionalFacts: 'Valor Energético: 160 kcal=678 kj; Carbohidratos: 27 g; Proteínas: 3.7 g; Grasas Totales: 3.3 g; Grasas Saturadas: 1 g; Grasas Trans: 0 g; Fibra Alimentaria: 0.8 g; Sodio: 21 mg; Porción: 40 gr.',
        price: 780,
        stock: 19,
        categories: {
            nuts: true,
            breakfast: true,
            celiac: false,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 6,
        title: 'Hummus de poroto x 190g',
        img: '../products/hummus_de_poroto_mung_organico_sin_tacc_pampagourmet_190_g.png',
        details: 'Aderezo a base de porotos mung condimentados. Producto apto vegano, sin conservantes y orgánico. Sin TACC.',
        origin: 'Argentina',
        benefits: 'Contiene proteínas, minerales como el hierro, fósforo, potasio, calcio y magnesio,vitaminas del complejo B. A su vez, aporta grasas insaturadas, omega 6 y 9 que favorecen al cuidado cardiovascular. Al ser una legumbre, contiene fibra la cual colabora en brindar sensación de saciedad.',
        uses: 'Ideal para untar en tostadas, panes, galletitas. Se puede combinar con vegetales, carnes, sandwich y agregar en ensaladas. Mantener alejado de la luz solar en lugar fresco y seco. Una vez abierto mantener refrigerado y consumir dentro de los 21 días.',
        nutritionalFacts: 'Porción: 12g (1 cuchara de sopa); Valor energético: 18 Kcal = 75 kJ (1%VD); Carbohidratos: 1,6g (1% VD); Proteínas: 0,6g (1% VD); Grasas totales: 1g (2% VD); Grasas saturadas: 0g (0% VD); Grasas trans: 0g; Fibra alimentaria: 0,6g (2% VD); Sodio: 31mg (1% VD); * % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.',
        price: 650,
        stock: 34,
        categories: {
            nuts: false,
            breakfast: false,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 7,
        title: 'Mayonesa vegana',
        img: '../products/mayonesa-sin-huevo-mi-soja.jpg',
        details: 'Aderezo tipo "mayonesa", a base de porotos de soja orgánica, elaborado sin huevo. Apto para veganos. Apto Kosher.',
        origin: 'Argentina',
        benefits: 'Aderezo elaborado sin huevo, a base de ingredientes de origen vegetal, por lo cual no aporta colesterol. Indicado para quienes pretenden controlar el colesterol sanguíneo. Ideal para quienes siguen una alimentación vegana.',
        uses: 'Ideal para tanto para incorporar en ensaladas y picadas, como para saborizar nuestras preparaciones. Una vez abierto, conservar refrigerado y consumir dentro de los 30 días.',
        nutritionalFacts: 'Porción: Porción 12g (1 cuchara de sopa); Valor energético: 37 kcal= 157 kJ (2% VD*); Carbohidratos: 0,8g (0% VD); Proteínas: 0,1g (0% VD); Grasas totales: 3,7g (7% VD); Grasas saturadas: 0g (0% VD); Grasas trans: 0g; Fibra alimentaria: 0g (0% VD); Sodio: 300mg (13% VD); * % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.',
        price: 350,
        stock: 15,
        categories: {
            nuts: false,
            breakfast: false,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 8,
        title: 'Pan integral x 650g',
        img: '../products/pan-green-mills-integral-con-sal-cortado.jpg',
        details: 'Elaborado con parte de harina integral, sin el agregado de aceites hidrogenados, ni grasas de origen animal. Proporcionan la energía necesaria para las actividades diarias.',
        origin: 'Argentina',
        benefits: 'Destacado aporte de fibra. Brinda saciedad. No contiene grasas de origen animal ni lácteos.',
        uses: 'Ideal para desayunos y meriendas, para untar con quesos, hummus o mermeladas y dulces. Para realizar sándwiches o acompañar con las comidas',
        nutritionalFacts: 'Valor Energético: 167 kcal = 699 Kj (8%VD); Carbohidratos: 29 g (10%VD); Proteínas: 4,8 g (6%VD); Grasas Totales: 3,5 g (6%VD); Grasas Saturadas: 0,36 g (2%VD); Grasas Trans: 0 g; Fibra Alimentaria: 2,9 g (12%VD); Sodio: 270 mg (11%VD); Porción: 60 g (2 rebanadas).',
        price: 540,
        stock: 23,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: false,
            vegan: true,
            frozen: false
        }
    },

    {
        id: 9,
        title: 'Té negro',
        img: '../products/te-negro-en-hebras-x-100-g.jpg',
        details: 'Té negro en hebras por 100 grs',
        origin: 'Argentina',
        benefits: 'El té negro tiene propiedades estimulantes por su contenido en Teína. Su sabor es astringente y color oscuro intenso.',
        uses: '1 cuchara de té (5 gr) cada 220 ml de agua. Tiempo infusión: 3 - 5 minutos según intensidad deseada. Temperatura del agua: 100°.',
        nutritionalFacts: 'No aporta cantidades significativas de energía, grasas ni minerales.',
        price: 230,
        stock: 42,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },
    {
        id: 10,
        title: 'Avellanas con chocolate',
        img: '../products/avellanas-con-chocolate_2.jpg',
        details: 'Avellanas bañadas en chocolate. Paquete de 1kg.',
        origin: 'Argentina',
        benefits: 'Alimento sin TACC apto celíacos, fuente de vitaminas.',
        uses: 'Como golosina, para fiestas, como confitura.Para acompañar un té o un café.',
        nutritionalFacts: 'Valor Energético: 138Kcal=581 Kj (7%VD); Carbohidratos: 11g(4%VD); Proteínas: 2,3g(3%VD); Grasas Totales: 9,6g(17%VD); Grasas Saturadas: 5,0g(23%VD); Grasas Trans: 0.1 g; Fibra Alimentaria: 1,6g(6%VD); Sodio: 14mg(1%VD); Porción: 25g(8 unidades). % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ.',
        price: 3780,
        stock: 20,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: true,
            vegan: false,
            frozen: false
        }
    },
    {
        id: 11,
        title: 'Galletas Schar digestivas',
        img: '../products/digestive-cookies.jpg',
        details: 'Galletitas dulces. Libre de gluten, sin TACC. Schar es una fábrica Alemana experta y pionera en productos sin gluten desde 1922. Apto celíaco.',
        origin: 'Alemania',
        benefits: 'Galletitas con alto aporte de fibra.',
        uses: 'Ideal para incorporar en el desayuno, merienda, incluso como colación. Para acompañar con té, mate, leche, chocolatada o bebidas vegetales. También se pueden triturar y utilizar como base para tortas.',
        nutritionalFacts: 'Valor Energético: 143 kcal = 599 kJ; Carbohidratos: 19 g (6%VD); Proteínas: 1,8 g (2%VD); Grasas Totales: 6,6 g (12%VD); Grasas Saturadas: 3,0 g (14%VD); Grasas Trans: 0 g; Fibra Alimentaria: 1,8 g (7%VD); Sodio: 75 mg (3%VD); Porción: 30 g (3 unidades).',
        price: 500,
        stock: 36,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },
    {
        id: 12,
        title: 'Fideos de Quinoa x 250 g',
        img: '../products/fideos_quinoa.png',
        details: 'Pasta seca a base de harina de arroz, maíz y quinoa. Sin tacc. Apto celíaco. Sin sal agregada. No contiene aditivos ni grasas trans. Elaborado con maíz No GMO.',
        origin: 'Argentina',
        benefits: 'Pastas secas libre de gluten, ricas en fibra, sin agregado de aditivos, sin agregado de sal. Con alto aporte de proteínas.',
        uses: 'Ideales para servir con salsas,hongos, o vegetales. Salteados en woks, fríos en ensaladas o incluso en guisos o sopas. Se cocinan en 8 minutos.',
        nutritionalFacts: 'Valor Energético: 278 kcal = 1164 Kj (14%VD); Carbohidratos: 63 g (21%VD); Proteínas: 5,3 g (7%VD); Grasas Totales: 0,6 g (1%VD); Grasas Saturadas: 0 g (0%VD); Grasas Trans: 0.0 g; Fibra Alimentaria: 0,8 g (3%VD); Sodio: 1,4 mg (0%VD); Porción: 80 g (1 plato).',
        price: 500,
        stock: 25,
        categories: {
            nuts: false,
            breakfast: false,
            celiac: true,
            vegan: true,
            frozen: false
        }
    },
    {
        id: 13,
        title: 'Ghee: manteca clarificada x 300 g',
        img: '../products/manteca-clarificada-ahumada-ghee.jpg',
        details: 'Manteca Clarificada, más conocida como Ghee con sabor ahumado. Sin T.A.C.C.',
        origin: 'Argentina',
        benefits: 'En la cultura india se la conoce como "Oro Líquido" ya que es considerada un alimento sagrado por sus propiedades medicinales reconocidas en la ciencia milenaria Ayurveda.Fuente de vitaminas A, E y K2. Las vitaminas liposolubles que aporta fortalecen el sistema inmunológico. A la manteca se le retiran las proteínas del suero y las impurezas, obteniendo así, una manteca pura. Al tener mayor punto de humo, resiste altas temperaturas aportando color y sabor a las preparaciones. No tiene agregado de sal. Es uno de los principales alimentos elegidos en la dieta keto y paleo.',
        uses: 'Muy utilizada en Alimentación Ayurveda para cocinar y saltear vegetales, en reemplazo del aceite. También para agregarle a los pures, risottos, sopas, tartas o para untar tostadas o bruschettas. Otorga brillo, color y un sabor único a las preparaciones. Ideal para mezclar con hierbas aromáticas y aderezar carnes o vegetales a la parrilla o al horno. Conservar en un ambiente fresco, seco y a resguardo de la luz solar.',
        nutritionalFacts: 'Porción: 10g (1 cucharada sopera); Valor energético: 90 Kcal = 376 kJ (5% VD); Carbohidratos: 0g (0% VD); Proteínas: 0g (0% VD); Grasas totales: 10g (18 % VD); Grasas saturadas: 5,5g (25% VD); Grasas trans: 0,4g; Fibra alimentaria: 0g (0% VD); Sodio: 0mg (0% VD); * % Valores Diarios con base a una dieta de 2.000 kcal u 8.400 kJ.',
        price: 1000,
        stock: 9,
        categories: {
            nuts: false,
            breakfast: true,
            celiac: true,
            vegan: false,
            frozen: false
        }
    },
    {
        id: 14,
        title: 'Not chicken nuggets x 400 g',
        img: '../products/not-chicken-nugets.png',
        details: 'Nuggets veganos formados a base de proteínas vegetales con sabor a pollo, rebozados, prefritos y congelados..',
        origin: 'Argentina',
        benefits: 'Mismo sabor, aroma, color y textura que un pollo pero hecho 100% con ingredientes vegetales.',
        uses: 'Una alternativa vegana a los clásicos nuggets de pollo, pueden trozarse y mezclar en ensaladas o untarlos con salsas para su consumo.',
        nutritionalFacts: 'Valor energético: 309 kcal; Carbohidratos: 30 g; Proteínas: 15 g; Grasas Totales: 14 g; Grasas Saturadas: 1.4 g; Grasas Trans: 0 g; Fibra Alimentaria: 7.9 g; Sodio: 822 mg; Porción: 130 g (9 unidades).',
        price: 500,
        stock: 18, 
        categories: {
            nuts: false,
            breakfast: false,
            celiac: false,
            vegan: true,
            frozen: true
        }
    },
    {
        id: 15,
        title: 'Not chicken burger x 2u',
        img: '../products/not-chicken-burger.jpg',
        details: 'Medallón a base de proteina de arveja, garbanzo y haba congelado - NotChicken Burger - de The Not Company - NotCo..',
        origin: 'Argentina',
        benefits: 'Mismo sabor, aroma, color y textura que un pollo pero hecho 100% con ingredientes vegetales.',
        uses: 'Ideales para complementar una dieta vegana, puede acompañar ensaladas o consumirse tradicionalemente como hamburguesa.',
        nutritionalFacts: 'Valor energético: 174 kcal; Carbohidratos: 3.4 g; Proteínas: 13 g; Grasas Totales: 12 g; Grasas Saturadas: 1.1 g; Grasas Trans: 0 g; Fibra Alimentaria: 7.4 g; Sodio 600 mg; Porción: 100 g (1 unidad).',
        price: 790,
        stock: 22,
        categories: {
            nuts: false,
            breakfast: false,
            celiac: false,
            vegan: true,
            frozen: true
        }
    },
    {
        id: 16,
        title: 'Thai vegan nuggets',
        img: '../products/thai-nuggets-20u.png',
        details: 'Nuggets Thai por 20 unidades, veganos.',
        origin: 'Argentina',
        benefits: 'Sin conservantes, ni saborizantes. 100% naturales. Son aptos para intolerantes a la lactosa.',
        uses: 'Prefritos, caletarlos sin aceite. Conservar en heladera (20 días) o freezer (6 meses).',
        nutritionalFacts: 'Valor Energético: 228 kcal; Carbohidratos: 24 g; Proteínas: 6.7 g; Grasas Totales: 11g; Grasas Saturadas: 2.4 g; Grasas Trans: 0 g; Fibra Alimentaría: 4.8 g; Sodio: 278 mg; Porción: 72 g (3 unidades).',
        price: 500,
        stock: 11,
        categories: {
            nuts: false,
            breakfast: false,
            celiac: true,
            vegan: true,
            frozen: true
        }
    }
    
];

export default products