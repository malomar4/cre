let questions = []; // Este array se llenará según el tema seleccionado
let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultText = document.getElementById('result');
const nextButton = document.getElementById('nextBtn');
const homeButton = document.getElementById('homeBtn'); // Botón para volver a la página principal
const allQuestions = {
    "examen1": [
      // Pregunta 1
{
    "question": "La fecha de la ley 10",
    "options": [
        "10 abril de 2005",
        "26 de abril de 1994"
    ],
    "answer": "26 de abril de 1994"
},

// Pregunta 2
{
    "question": "Luego que un aspirante a Corredor o Vendedor de Bienes Raíces haya tomado el curso preparatorio, éste tendrá:",
    "options": [
        "Hasta un máximo de 2 años para tomar el examen de reválida o dentro de este periodo, el aspirante podrá tomar el examen de reválida hasta un máximo de 5 intentos. O sea, tienen 2 años para tomar el examen de reválida o 5 intentos en el examen, durante el mismo periodo, lo que ocurra primero.",
        "Hasta un máximo de 2 años desde la expedición del certificado del curso de Corredor y Vendedor.",
        "Hasta 5 intentos en la reválida de bienes raíces.",
        "No hay límite de tiempo y/o intentos en la reválida de bienes raíces."
    ],
    "answer": "Hasta un máximo de 2 años para tomar el examen de reválida o dentro de este periodo, el aspirante podrá tomar el examen de reválida hasta un máximo de 5 intentos. O sea, tienen 2 años para tomar el examen de reválida o 5 intentos en el examen, durante el mismo periodo, lo que ocurra primero."
},

// Pregunta 3
{
    "question": "Las contribuciones de la propiedad se imponen",
    "options": [
        "en año natural",
        "en año fiscal"
    ],
    "answer": "en año natural"
},

// Pregunta 4
{
    "question": "Las contribuciones de la propiedad las cobra:",
    "options": [
        "el CRIM",
        "el Departamento de estado"
    ],
    "answer": "el CRIM"
},

// Pregunta 5
{
    "question": "La Junta de Bienes Raíces está adscrita a:",
    "options": [
        "Departamento de Estado",
        "Departamento de Justicia"
    ],
    "answer": "Departamento de Estado"
},

// Pregunta 6
{
    "question": "¿Cuál de las siguientes es un acto proscrito?",
    "options": [
        "Retener el depósito cuando un cliente no cualifica para un préstamo",
        "No Retener el depósito de buena fe cuando el cliente no cualifica para el préstamo"
    ],
    "answer": "Retener el depósito cuando un cliente no cualifica para un préstamo"
},

// Pregunta 7
{
    "question": "La Servidumbre de Paso es:",
    "options": [
        "Gravamen sobre un inmueble en beneficio de otro",
        "Gravamen sobre dos inmuebles en beneficio del mismo dueño"
    ],
    "answer": "Gravamen sobre un inmueble en beneficio de otro"
},

// Pregunta 8
{
    "question": "¿Cuáles de las siguientes es un acto proscrito?",
    "options": [
        "No poner el número de licencia de bienes raíces y nombre en anuncios",
        "Poner el número de licencia"
    ],
    "answer": "No poner el número de licencia de bienes raíces y nombre en anuncios"
},

// Pregunta 9
{
    "question": "¿De cuánto es la fianza del propietario cuándo la propiedad está fuera de Puerto Rico?",
    "options": [
        "1 millón o el 6%",
        "100,000%"
    ],
    "answer": "1 millón o el 6%"
},

// Pregunta 10
{
    "question": "¿A dónde el Corredor y Empresa informa de la cuenta de Plica?",
    "options": [
        "Junta",
        "Junta y DACO"
    ],
    "answer": "Junta y DACO"
},

// Pregunta 11
{
    "question": "En el contrato Neto:",
    "options": [
        "No hay que recomendar tasación",
        "Hay que recomendar la Tasación"
    ],
    "answer": "Hay que recomendar la Tasación"
},

// Pregunta 12
{
    "question": "Donación es:",
    "options": [
        "a título gratuito",
        "a título unilateral"
    ],
    "answer": "a título gratuito"
},

// Pregunta 13
{
    "question": "Para que la hipoteca sea válida:",
    "options": [
        "Inscribirlo en DACO",
        "Escritura Pública e inscribirlo en el Registro de la Propiedad"
    ],
    "answer": "Escritura Pública e inscribirlo en el Registro de la Propiedad"
},

// Pregunta 14
{
    "question": "¿A quién le corresponde los Honorarios de la Escritura de Cancelación de Hipoteca?",
    "options": [
        "Al Vendedor",
        "Al Comprador"
    ],
    "answer": "Al Vendedor"
},

// Pregunta 15
{
    "question": "Mercado Secundario",
    "options": [
        "Fannie Mae, Fredie Mac, Ginnie Mae",
        "Banco Popular"
    ],
    "answer": "Fannie Mae, Fredie Mac, Ginnie Mae"
},

// Pregunta 16
{
    "question": "María y José se casaron a los 18 años cada uno. El día de su boda el papa de José le regala $100,000 a los dos para una casa. José llama a corredor para que le busque una casa para comprarla. ¿Cuál de las siguientes es la correcta?",
    "options": [
        "Ninguno puede comprar porque son menores de edad",
        "Si pueden comprar porque se emanciparon"
    ],
    "answer": "Si pueden comprar porque se emanciparon"
},

// Pregunta 17
{
    "question": "Una obsolescencia de la fachada de una casa es una:",
    "options": [
        "Obsolescencia Externa",
        "Obsolescencia Funcional"
    ],
    "answer": "Obsolescencia Funcional"
},

// Pregunta 18
{
    "question": "Pagar a plazo se conoce como:",
    "options": [
        "Amortización",
        "Lotificación"
    ],
    "answer": "Amortización"
},

// Pregunta 19
{
    "question": "¿Quién creo la Junta Examinadora de Corredores de Bienes Raíces?",
    "options": [
        "Ley 139",
        "Ley 10"
    ],
    "answer": "Ley 139"
},

// Pregunta 20
{
    "question": "¿Cuál agencia otorga subsidio bajo sección 8?",
    "options": [
        "HUD (Housing and urban development)",
        "DACO"
    ],
    "answer": "HUD (Housing and urban development)"
},

// Pregunta 21
{
    "question": "La Farmer Home Administration es mejor conocida en PR:",
    "options": [
        "Por sus programas de préstamos para la vivienda en zona rural solamente",
        "Préstamos FHA"
    ],
    "answer": "Por sus programas de préstamos para la vivienda en zona rural solamente"
},

// Pregunta 22
{
    "question": "La veracidad, confianza o autoridad legítima atribuida a información contenida en el Registro de la Propiedad que se tiene por autentica y con fuerza probatoria, ¿mientras no se pruebe lo contrario se llama?",
    "options": [
        "Fe Pública Registral",
        "Tracto sucesivo"
    ],
    "answer": "Fe Pública Registral"
},

// Pregunta 23
{
    "question": "Se considera bienes no inmuebles (bienes muebles):",
    "options": [
        "lo que está dentro del edificio",
        "casa de madera"
    ],
    "answer": "lo que está dentro del edificio"
},

// Pregunta 24
{
    "question": "El Certificado de Inscripción como propietario en el DACO cuando se dedique en Puerto Rico a la venta de bienes inmuebles localizados fuera del Estado Libre Asociado de Puerto Rico será efectivo por el término de:",
    "options": [
        "1 año a partir de la expedición y será renovable anualmente",
        "2 años a partir de la expedición y será renovable anualmente",
        "3 años a partir de la expedición y será renovable anualmente",
        "4 años a partir de la expedición y será renovable anualmente"
    ],
    "answer": "1 año a partir de la expedición y será renovable anualmente"
},

// Pregunta 25
{
    "question": "Carlos Propietario contrató a Miguel Corredor de Bienes Raíces para vender su propiedad y consiguió un Comprador que le dio una opción de $11,000. Luego de presentar los documentos al Banco, pasado un mes, el Banco le denegó el préstamo ¿Qué debe hacer el Corredor?",
    "options": [
        "No devolver la opción",
        "Devolver la opción al Comprador"
    ],
    "answer": "Devolver la opción al Comprador"
},

// Pregunta 26
{
    "question": "Un Corredor de Bienes Raíces se le venció su licencia y al año, del vencimiento, la Junta de Bienes Raíces le notifica al Corredor por correo certificado con acuse de recibo, que tendrá 30 días para renovar la licencia de bienes raíces. Si el Corredor no inicia la gestión de renovación de licencia, dentro del término anterior, la Junta de Bienes Raíces podrá:",
    "options": [
        "Anular la licencia de bienes raíces",
        "Cancelar la licencia de bienes raíces",
        "Destruir la licencia de bienes raíces",
        "Inactivar la licencia de bienes raíces"
    ],
    "answer": "Inactivar la licencia de bienes raíces"
},

// Pregunta 27
{
    "question": "Si una propiedad con pozo séptico y en su área hay alcantarillado José la quiere comprar por FHA, la agencia que obliga a conectarse al alcantarillado es:",
    "options": [
        "Salud",
        "ARPE"
    ],
    "answer": "Salud"
},

// Pregunta 28
{
    "question": "El Valor en el mercado lo determina:",
    "options": [
        "Oferta y Demanda",
        "el Corredor"
    ],
    "answer": "Oferta y Demanda"
},

// Pregunta 29
{
    "question": "¿Qué libro da inicio al Registro de la Propiedad?",
    "options": [
        "Diario de presentación",
        "Bitácora",
        "Tomo",
        "Finca"
    ],
    "answer": "Diario de presentación"
},

// Pregunta 30
{
    "question": "La Junta de Bienes Raíces se compone de cuántos miembros:",
    "options": [
        "5 miembros",
        "9 miembros"
    ],
    "answer": "5 miembros"
},

// Pregunta 31
{
    "question": "¿Cuál de los siguientes es un gravamen involuntario?",
    "options": [
        "hipoteca",
        "contribuciones, expropiación forzosa: 1. Necesidad Pública y 2. Justa Compensación"
    ],
    "answer": "contribuciones, expropiación forzosa: 1. Necesidad Pública y 2. Justa Compensación"
},

// Pregunta 32
{
    "question": "¿Cuál es la ley que obliga el uso del número de licencia en los anuncios?",
    "options": [
        "Ley 10 de 1994",
        "Reglamento 5567"
    ],
    "answer": "Ley 10 de 1994"
},

// Pregunta 33
{
    "question": "Un Corredor de Bienes Raíces dejó vencer su licencia de bienes raíces. Vencida su licencia vendió una propiedad y cobró comisión. Al momento de solicitar la renovación de su licencia de bienes raíces ¿A qué se expone el Corredor según la ley?",
    "options": [
        "Su licencia no será concedida hasta pasado un (1) año de la fecha de solicitud, sin menoscabo de la responsabilidad que puedan imponerse a tenor con lo dispuesto por ley o reglamento.",
        "A una multa de 1 millón.",
        "Su licencia se cancela automáticamente.",
        "Su licencia de corredor sería nula."
    ],
    "answer": "Su licencia no será concedida hasta pasado un (1) año de la fecha de solicitud, sin menoscabo de la responsabilidad que puedan imponerse a tenor con lo dispuesto por ley o reglamento."
},

// Pregunta 34
{
    "question": "¿Quién compra los préstamos convencionales non-conforming (JUMBO, PRESTAN 1 MILLÓN)?",
    "options": [
        "Inversionistas Privados",
        "GNMA"
    ],
    "answer": "Inversionistas Privados"
},

// Pregunta 35
{
    "question": "División o subdivisión de un solar o parcela de terreno se conoce como:",
    "options": [
        "Segregación",
        "Lotificación"
    ],
    "answer": "Lotificación"
},

// Pregunta 36
{
    "question": "¿Los intereses de un second home se puede deducir de la planilla?",
    "options": [
        "Si. Siempre que la propiedad esté localizada en Puerto Rico",
        "Nunca"
    ],
    "answer": "Si. Siempre que la propiedad esté localizada en Puerto Rico"
},

// Pregunta 37
{
    "question": "La cabida de una propiedad para la exención contributiva del Veterano es hasta:",
    "options": [
        "1000 metros cuadrados en zona urbana y 1 cuerda en zona rural",
        "1 cuerda en ambas"
    ],
    "answer": ""
},

// Pregunta 38
{
    "question": "Si una persona tiene una reclamación contra el Corredor debe hacerla en:",
    "options": [
        "DACO",
        "DACO y la Fianza"
    ],
    "answer": "DACO"
},

// Pregunta 39
{
    "question": "El señor Heriberto, que vive en una Égida, hizo un poder duradero para nombrar como apoderada a una hija para que ésta vendiera una propiedad. La hija:",
    "options": [
        "Puede vender la propiedad ya que ésta tenía vigente un poder duradero.",
        "No puede vender la propiedad porque Heriberto estaba vivo.",
        "No puede vender la propiedad porque hay que esperar que Heriberto se mude de la Égida.",
        "Puede vender la propiedad porque es un acto de administración."
    ],
    "answer": "Puede vender la propiedad ya que ésta tenía vigente un poder duradero."
},

// Pregunta 40
{
    "question": "Para que haya quorum en la Junta de Bienes Raíces debe haber mínimo:",
    "options": [
        "3 miembros",
        "4 miembros"
    ],
    "answer": "3 miembros"
},

// Pregunta 41
{
    "question": "Los exámenes de bienes raíces se ofrecen en:",
    "options": [
        "Español",
        "Español e Inglés"
    ],
    "answer": "Español e Inglés"
},

// Pregunta 42
{
    "question": "¿A quién se le paga una obligación?",
    "options": [
        "Al acreedor o al que autorizó a recibirlo",
        "Al deudor"
    ],
    "answer": "Al acreedor o al que autorizó a recibirlo"
},

// Pregunta 43
{
    "question": "El certificado de inscripción en DACO se usa para:",
    "options": [
        "Venta de Propiedades ubicadas fuera de Puerto Rico",
        "Para vender propiedades ubicadas en la isla"
    ],
    "answer": "Venta de Propiedades ubicadas fuera de Puerto Rico"
},

// Pregunta 44
{
    "question": "La escritura de rectificación se usa para:",
    "options": [
        "Corregir algún error que cambie el estado jurídico de la escritura y los otorgantes tienen que estar presentes",
        "Es lo mismo que Acta de Subsanación"
    ],
    "answer": "Corregir algún error que cambie el estado jurídico de la escritura y los otorgantes tienen que estar presentes"
},

// Pregunta 45
{
    "question": "La primera ley de subsidio estatal es:",
    "options": [
        "Bankhead Jones",
        "Ley 10 del 5 de julio de 1973"
    ],
    "answer": "Ley 10 del 5 de julio de 1973"
},

// Pregunta 46
{
    "question": "¿Qué tipo de reparaciones hay que hacer en un préstamo de FHA?",
    "options": [
        "Pintar y arreglar las paredes Descascaradas",
        "Limpiar y Cambiar las losetas"
    ],
    "answer": "Pintar y arreglar las paredes Descascaradas"
},

// Pregunta 47
{
    "question": "¿Cuáles son los tipos de testamentos?",
    "options": [
        "Ológrafo y Abierto",
        "Cerrado, Abierto y Exclusivo"
    ],
    "answer": "Ológrafo y Abierto"
},

// Pregunta 48
{
    "question": "La servidumbre de paso se hace por:",
    "options": [
        "Contrato",
        "Escritura"
    ],
    "answer": "Escritura"
},

// Pregunta 49
{
    "question": "La ley de Condominios:",
    "options": [
        "Ley 129 del 16 de agosto de 2020",
        "Ley 103 de 2003"
    ],
    "answer": "Ley 129 del 16 de agosto de 2020"
},

// Pregunta 50
{
    "question": "Los testigos de Conocimiento son:",
    "options": [
        "Es conocido por el notario y asegura al notario la identidad de las partes",
        "Testigos Idóneos"
    ],
    "answer": "Es conocido por el notario y asegura al notario la identidad de las partes"
},

// Pregunta 51
{
    "question": "Una propiedad donde para entrar a un cuarto hay que pasar por otro es:",
    "options": [
        "Obsolescencia funcional",
        "Obsolescencia externa"
    ],
    "answer": "Obsolescencia funcional"
},

// Pregunta 52
{
    "question": "La definición de Urbanización es:",
    "options": [
        "11 solares con sus estructuras o más",
        "700 unidades de vivienda"
    ],
    "answer": "11 solares con sus estructuras o más"
},

// Pregunta 53
{
    "question": "El comprobante para la licencia de Empresa de Bienes Raíces es de:",
    "options": [
        "500",
        "200"
    ],
    "answer": "500"
},

// Pregunta 54
{
    "question": "¿Cuáles son las Responsabilidades de un Administrador de Propiedades?",
    "options": [
        "Debe estar a cargo de la parte operacional de la propiedad, Mercadeo, del mantenimiento de la Propiedad, de los ingresos y gastos de la propiedad y llevar record de estos y la Administración en General",
        "No tiene ninguna responsabilidad"
    ],
    "answer": "Debe estar a cargo de la parte operacional de la propiedad, Mercadeo, del mantenimiento de la Propiedad, de los ingresos y gastos de la propiedad y llevar record de estos y la Administración en General"
},

// Pregunta 55
{
    "question": "Un modo de extinguir una obligación es:",
    "options": [
        "Compensación, Cumplimiento de Pago, Condonación",
        "CUL – DE – SAC"
    ],
    "answer": "Compensación, Cumplimiento de Pago, Condonación"
},

// Pregunta 56
{
    "question": "Si la hipoteca final es de 324,000 y los gastos de cierre son 3,000 ¿Calcule el seguro Hazard?",
    "options": [
        "81.0",
        "113.03"
    ],
    "answer": "81.0"
},

// Pregunta 57
{
    "question": "Corredor de Bienes Raíces anunció en Facebook, Instagram y TikTok una propiedad a la venta con la siguiente información: Se vende hermosa casa, 3 cuartos, 2 baños, sala, comedor, cocina, marquesina grande, lote 1,000 mc, 3000 pies cuadrados, piscina. Tel. (787) – 787 - xxxx, Corredor de Bienes Raíces.",
    "options": [
        "El anuncio no está correcto porque falta el número de licencia del Corredor de Bienes Raíces.",
        "El anuncio está correcto porque un anuncio en las redes sociales no necesita el número de licencia del Corredor de Bienes Raíces.",
        "El anuncio no está correcto porque no se puede anunciar en las redes sociales.",
        "El anuncio está correcto por ley y la propiedad se puede vender."
    ],
    "answer": "El anuncio no está correcto porque falta el número de licencia del Corredor de Bienes Raíces."
},

// Pregunta 58
{
    "question": "El área de un rectángulo es:",
    "options": [
        "largo por ancho",
        "lado por lado",
        "½ de la base por la altura",
        "3.15 por el radio"
    ],
    "answer": "largo por ancho"
},

// Pregunta 59
{
    "question": "Según el Reglamento 5570 las licencias y otras gestiones se tramitan en:",
    "options": [
        "30 días",
        "15 días",
        "10 días",
        "20 días"
    ],
    "answer": "30 días"
},

// Pregunta 60
{
    "question": "El Pueblo de Mayagüez tiene el siguiente límite hipotecario en FHA:",
    "options": [
        "247,000",
        "200,160"
    ],
    "answer": "200,160"
},

// Pregunta 61
{
    "question": "Según el Reglamento 5570 del 3 de abril de 1997 las Certificaciones se tramita en:",
    "options": [
        "15 días",
        "30 días"
    ],
    "answer": "15 días"
},

// Pregunta 62
{
    "question": "La cláusula “DUE on SALE” o cláusula de Aceleración es:",
    "options": [
        "La que da derecho a declarar vencida una deuda",
        "La que obliga la inscripción rápida del inmueble en el Registro de la Propiedad"
    ],
    "answer": "La que da derecho a declarar vencida una deuda"
},

// Pregunta 63
{
    "question": "Luis Vendedor hizo un poder en Canadá para una venta de una propiedad. Para que el poder sea válido en Puerto Rico requiere:",
    "options": [
        "Apostille",
        "La certificación del County Clerk"
    ],
    "answer": "Apostille"
},

// Pregunta 64
{
    "question": "¿Cuál de los siguientes es un Elemento Común Voluntario?",
    "options": [
        "Azotea",
        "Paredes Maestras y Áreas Verdes"
    ],
    "answer": "Azotea"
},

// Pregunta 65
{
    "question": "El PMI se cobra en el préstamo",
    "options": [
        "FHA",
        "Convencional"
    ],
    "answer": "Convencional"
},

// Pregunta 66
{
    "question": "La sucesión Intestada se conoce como:",
    "options": [
        "La sucesión inter vivos",
        "Ab Intestato"
    ],
    "answer": "Ab Intestato"
},

// Pregunta 67
{
    "question": "El Reglamento de Asuntos Académicos de Bienes Raíces es el:",
    "options": [
        "Reglamento 9101 del 24 de julio de 2019",
        "Reglamento 5567 del 1996"
    ],
    "answer": "Reglamento 9101 del 24 de julio de 2019"
},

// Pregunta 68
{
    "question": "¿Cuántos créditos mandatorios en leyes y aspectos legales debe de tomar el Corredor de Bienes Raíces en Educación Continua según el Reglamento 9101 del 2019?",
    "options": [
        "3 créditos",
        "6 créditos"
    ],
    "answer": "3 créditos"
},

// Pregunta 69
{
    "question": "El Agente Administrador bajo la Ley de Condominios podrá ser:",
    "options": [
        "Una persona natural o jurídica, quien podrá o no pertenecer a la comunidad de titulares, y en quien el Consejo de Titulares, el Director o la Junta de Directores podrá delegar las facultades y deberes que les permita delegar el reglamento.",
        "Sólo persona natural y no pertenecer a la comunidad de titulares."
    ],
    "answer": "Una persona natural o jurídica, quien podrá o no pertenecer a la comunidad de titulares, y en quien el Consejo de Titulares, el Director o la Junta de Directores podrá delegar las facultades y deberes que les permita delegar el reglamento."
},

      
    ],
    "examen2": [
      // Pregunta 1
{
    "question": "DACO se creó a base de:",
    "options": [
        "Una ley orgánica.",
        "Una ley inorgánica.",
        "Un reglamento orgánico.",
        "Un reglamento analítico."
    ],
    "answer": "Una ley orgánica."
},
// Pregunta 2
{
    "question": "Un caso administrativo en DACO relacionado a bienes inmuebles debe ser resuelto en:",
    "options": [
        "120 días laborables",
        "120 días naturales",
        "135 días",
        "Ninguna de las anteriores"
    ],
    "answer": "120 días laborables"
},
// Pregunta 3
{
    "question": "DACO tiene poderes:",
    "options": [
        "Cuasi- judiciales y cuasi-legislativos",
        "Cuasi-administrativos y cuasi-ejecutivos.",
        "Cuasi-ejecutivos y cuasi-legislativos.",
        "Cuasi-judiciales y cuasi-ejecutivos."
    ],
    "answer": "Cuasi- judiciales y cuasi-legislativos"
},
// Pregunta 4
{
    "question": "La ley de DACO es la siguiente:",
    "options": [
        "Ley 5 del 23 de abril de 1973",
        "Ley 10 del 26 de abril de 1994",
        "Ley 5 del 23 de septiembre de 1973",
        "Ley 5 del 29 de abril de 1994"
    ],
    "answer": "Ley 5 del 23 de abril de 1973"
},
// Pregunta 5
{
    "question": "Las siglas de DACO significan:",
    "options": [
        "Departamento de Asuntos al Contribuyente",
        "Departamento de Asuntos al Consumidor",
        "Departamento de Asociación Conjunta",
        "Departamento de Asuntos al Capitolio"
    ],
    "answer": "Departamento de Asuntos al Consumidor"
},
// Pregunta 6
{
    "question": "El propósito primordial de DACO es:",
    "options": [
        "Calificar los documentos que se presentan para su inscripción",
        "Imponer el Desacato",
        "Proteger los derechos de los Consumidores",
        "Todas las anteriores"
    ],
    "answer": "Proteger los derechos de los Consumidores"
},
// Pregunta 7
{
    "question": "Según la ley de DACO, el Secretario tiene los siguientes poderes:",
    "options": [
        "Reglamentar, fijar, controlar y revisar los precios",
        "Atender consultas y prestar ayuda legal a los consumidores",
        "Comparecer en representación de los consumidores ante cualquier Tribunal",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 8
{
    "question": "El Secretario de DACO tiene facultad de:",
    "options": [
        "Imponer el Desacato",
        "Emitir una orden de Registro y Allanamiento",
        "Educar y orientar al consumidor",
        "Todas las anteriores"
    ],
    "answer": "Educar y orientar al consumidor"
},
// Pregunta 9
{
    "question": "El Oficial Examinador es",
    "options": [
        "La persona que preside las Vistas Administrativas tanto cuasi legislativa como cuasi judicial",
        "La persona que preside un Juicio en un Tribunal",
        "La persona que nombrada para emitir una orden o resolución",
        "La persona que trabaja en ARPE"
    ],
    "answer": "La persona que preside las Vistas Administrativas tanto cuasi legislativa como cuasi judicial"
},
// Pregunta 10
{
    "question": "Cuando la persona presenta una querella en DACO, la parte querellada tiene:",
    "options": [
        "10 días para contestar la querella.",
        "20 días para contestar la querella.",
        "30 días para contestar la querella.",
        "40 días para contestar la querella."
    ],
    "answer": "20 días para contestar la querella."
},
// Pregunta 11
{
    "question": "DACO puede imponer multas de hasta un máximo de:",
    "options": [
        "$10,000",
        "$20,000",
        "$30,000",
        "$40,000"
    ],
    "answer": "$10,000"
},
// Pregunta 12
{
    "question": "En todo Proceso Adjudicativo ante DACO se salvaguardarán los siguientes derechos:",
    "options": [
        "Derecho a Notificación oportuna de los cargos o querellas en contra de una parte",
        "Derecho a presentar evidencia y a una Adjudicación imparcial",
        "Derecho a que la decisión sea basada en el expediente",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 13
{
    "question": "La Agencia Administrativa que regula el negocio de Bienes Raíces en Puerto Rico es:",
    "options": [
        "DACO",
        "CRIM",
        "La Junta de Planificación",
        "ARPE"
    ],
    "answer": "DACO"
},
// Pregunta 14
{
    "question": "La Conferencia con Antelación a la Vista en DACO se define como:",
    "options": [
        "Oportunidad antes de la Vista para ver si su puede lograr un acuerdo",
        "Una Conferencia de Prensa",
        "Una orden o resolución de DACO",
        "Ninguna de las anteriores"
    ],
    "answer": "Oportunidad antes de la Vista para ver si su puede lograr un acuerdo"
},
// Pregunta 15
{
    "question": "Si DACO decide celebrar una Vista tiene el deber de notificarlo:",
    "options": [
        "Con 15 días de anticipación",
        "Con 20 días de anticipación",
        "Con 30 días de anticipación",
        "Con 60 días de anticipación"
    ],
    "answer": "Con 15 días de anticipación"
},
// Pregunta 16
{
    "question": "La Vista en DACO será:",
    "options": [
        "Privada, a menos que se solicite pública y el funcionario que preside la Vista lo autorice",
        "Privada, a menos que se solicite pública",
        "Pública, a menos que se solicite privada y el funcionario que preside la Vista lo autorice",
        "Ninguna de las anteriores"
    ],
    "answer": "Pública, a menos que se solicite privada y el funcionario que preside la Vista lo autorice"
},
// Pregunta 17
{
    "question": "El Reglamento 8599 del 28 de mayo de 2015 es:",
    "options": [
        "El Reglamento contra prácticas y anuncios engañosos",
        "El Reglamento contra imposiciones contributivas",
        "El Reglamento que complementa la ley 10 (1994). El Reglamento 5567",
        "Ninguna de las anteriores"
    ],
    "answer": "El Reglamento contra prácticas y anuncios engañosos"
},
// Pregunta 18
{
    "question": "Después de concluida una Vista en DACO la orden o resolución final debe ser emitida, por escrito, dentro de:",
    "options": [
        "90 días",
        "120 días",
        "160 días",
        "0 días"
    ],
    "answer": "90 días"
},
// Pregunta 19
{
    "question": "La parte adversamente afectada por una orden o resolución de DACO tiene derecho a presentar una Moción de Reconsideración dentro de:",
    "options": [
        "20 días, desde el archivo de la notificación de la orden o resolución",
        "30 días, desde el archivo de la notificación de la orden o resolución",
        "90 días, desde el archivo de la notificación de la orden o resolución",
        "120 días, desde el archivo de la notificación de la orden o resolución"
    ],
    "answer": "20 días, desde el archivo de la notificación de la orden o resolución"
},
// Pregunta 20
{
    "question": "La parte adversamente afectada por una orden o resolución de DACO que haya agotado todos los remedios administrativos podrá presentar una Solicitud de Revisión dentro de:",
    "options": [
        "20 días, ante el Tribunal de Circuito de Apelaciones",
        "30 días, ante el Tribunal de Circuito de Apelaciones",
        "90 días, ante el Tribunal de Circuito de Apelaciones",
        "120 días, ante el Tribunal de Circuito de Apelaciones"
    ],
    "answer": "30 días, ante el Tribunal de Circuito de Apelaciones"
},
// Pregunta 21
{
    "question": "Toda Corporación debe comparecer ante una Vista:",
    "options": [
        "Con Abogado",
        "Sin Abogado",
        "Personalmente",
        "Ninguna de las anteriores"
    ],
    "answer": "Con Abogado"
},
// Pregunta 22
{
    "question": "Tibio Comprador se querelló contra Chanchullo Corredor en el Departamento de Asuntos del Consumidor (DACO) reclamando el dinero depositado en la Cuenta Plica. Posteriormente DACO emitió una resolución en contra del Corredor. El Corredor puede hacer lo siguiente:",
    "options": [
        "Ir en auxilio al Tribunal Supremo",
        "Presentar una moción de reconsideración a DACO",
        "Presentar una moción de revisión a DACO",
        "Presentar una moción de reconsideración al Tribunal Superior"
    ],
    "answer": "Presentar una moción de reconsideración a DACO"
},
// Pregunta 23
{
    "question": "La ley Federal dispone que, en la compraventa y el arrendamiento, hay que orientar a las partes sobres los peligros de la pintura a base de plomo de aquellas propiedades construidas en o antes de:",
    "options": [
        "1978",
        "2000"
    ],
    "answer": "1978"
},
// Pregunta 24
{
    "question": "Las funciones del Notario son:",
    "options": [
        "Autenticar documentos, Dar fe notarial, Asesorar, Custodiar el protocolo",
        "Ofrecer Hipotecas a bajo costo"
    ],
    "answer": "Autenticar documentos, Dar fe notarial, Asesorar, Custodiar el protocolo"
},
// Pregunta 25
{
    "question": "¿Quienes son las partes otorgantes en una compraventa?",
    "options": [
        "Comprador y Vendedor (Propietario)",
        "Banco"
    ],
    "answer": "Comprador y Vendedor (Propietario)"
},
// Pregunta 26
{
    "question": "Cuando un notario prepara y entrega una escritura el original debe:",
    "options": [
        "Archivarla en su Protocolo",
        "Guardarla"
    ],
    "answer": "Archivarla en su Protocolo"
},
// Pregunta 27
{
    "question": "El Notario representa a:",
    "options": [
        "El comprador solamente",
        "Ambas partes"
    ],
    "answer": "Ambas partes"
},
// Pregunta 28
{
    "question": "¿Qué se necesita para registrar en el Registro de la Propiedad una herencia?",
    "options": [
        "La instancia",
        "contrato"
    ],
    "answer": "La instancia"
},
// Pregunta 29
{
    "question": "En la sucesión testada el Testador puede disponer de la siguiente manera a sus Descendientes:",
    "options": [
        "La mitad para los descendientes y la otra mitad de libre disposición",
        "½ de legitima larga más libre disposición"
    ],
    "answer": "La mitad para los descendientes y la otra mitad de libre disposición"
},
// Pregunta 30
{
    "question": "El orden sucesoral en la Sucesión Intestada es:",
    "options": [
        "Descendientes en línea recta y el Cónyuge Viudo (supérstite), Ascendientes, Parientes Colaterales, Colaterales Ordinarios hasta el sexto grado, El Pueblo de PR (ELA)",
        "lo que diga el testamento"
    ],
    "answer": "Descendientes en línea recta y el Cónyuge Viudo (supérstite), Ascendientes, Parientes Colaterales, Colaterales Ordinarios hasta el sexto grado, El Pueblo de PR (ELA)"
},
// Pregunta 31
{
    "question": "¿Para que un Corredor o Vendedor pueda vender una propiedad debe ser Realtor?",
    "options": [
        "Si debe ser Realtor",
        "No. Solo debes tener licencia de Corredor o Vendedor"
    ],
    "answer": "No. Solo debes tener licencia de Corredor o Vendedor"
},
// Pregunta 32
{
    "question": "¿Qué son los elementos comunes limitados bajo la ley de Condominios?",
    "options": [
        "Son para algunos titulares. Son áreas comunales que se la han asignados a varios titulares el uso. Ejemplo. El pasillo",
        "Son áreas procomunales"
    ],
    "answer": "Son para algunos titulares. Son áreas comunales que se la han asignados a varios titulares el uso. Ejemplo. El pasillo"
},
// Pregunta 33
{
    "question": "¿Qué significa lotificación?",
    "options": [
        "es la división o sub división de una solar, predio o parcela de terreno en dos o mas partes, para la venta, traspaso, cesión, arrendamiento, donación, uso, división de herencia o para cualquier otra transacción.",
        "Herencia"
    ],
    "answer": "es la división o sub división de una solar, predio o parcela de terreno en dos o mas partes, para la venta, traspaso, cesión, arrendamiento, donación, uso, división de herencia o para cualquier otra transacción."
},
// Pregunta 34
{
    "question": "¿Para una segregación requiere:",
    "options": [
        "Permiso de ARPE (OgPE – Oficina de Gerencia de Permisos)",
        "Permiso del Departamento de Justicia"
    ],
    "answer": "Permiso de ARPE (OgPE – Oficina de Gerencia de Permisos)"
},
// Pregunta 35
{
    "question": "¿Para pedir información sobre un Corredor de Bienes Raíces en la Junta se requiere:",
    "options": [
        "Hacerla por escrito",
        "Llamar por teléfono"
    ],
    "answer": "Hacerla por escrito"
},
// Pregunta 36
{
    "question": "El término para la Usucapión Extraordinaria es de:",
    "options": [
        "20 años",
        "10 años"
    ],
    "answer": "20 años"
},
// Pregunta 37
{
    "question": "La Lapidaria es:",
    "options": [
        "La certificación de Valores contributivos. Historial contributivo de la propiedad inmueble. Indica si tiene exoneración entre otras cosas.",
        "Certificación de deudas"
    ],
    "answer": "La certificación de Valores contributivos. Historial contributivo de la propiedad inmueble. Indica si tiene exoneración entre otras cosas."
},
// Pregunta 38
{
    "question": "¿Cuántas horas de educación continua requiere el Corredor anual?",
    "options": [
        "6",
        "4"
    ],
    "answer": "6"
},
// Pregunta 39
{
    "question": "En la ley de condominios si hay que hacer alguna reparación en un apartamento:",
    "options": [
        "El titular debe dejarlo entrar",
        "El titular se puede negar"
    ],
    "answer": "El titular debe dejarlo entrar"
},
// Pregunta 40
{
    "question": "El Registrador de la Propiedad notificó una falta a Teresa de la Escritura de Compraventa que presentó en Registro. Teresa tiene:",
    "options": [
        "50 días para corregir la falta.",
        "60 días para corregir la falta."
    ],
    "answer": "50 días para corregir la falta."
},
// Pregunta 41
{
    "question": "El Principio de Legalidad significa:",
    "options": [
        "Primero en tiempo primero en derecho",
        "Todo lo que se presente e inscriba en el registro de la propiedad debe cumplir con la ley."
    ],
    "answer": "Todo lo que se presente e inscriba en el registro de la propiedad debe cumplir con la ley."
},
// Pregunta 42
{
    "question": "¿Qué son los Fondos Home del Departamento de la Vivienda?",
    "options": [
        "El Programa de Asistencia Directa al Comprador (HBA por sus siglas en inglés) otorga hasta un máximo de $55,000 para compradores que no son propietarios de una vivienda al momento de solicitar la asistencia del Programa de Asistencia Directa al Comprador. El Programa de Asistencia Directa al Comprador financiado con fondos asignados por el Departamento de Vivienda y Desarrollo Urbano de los Estados Unidos (HUD).",
        "Fondos para préstamos estudiantiles"
    ],
    "answer": "El Programa de Asistencia Directa al Comprador (HBA por sus siglas en inglés) otorga hasta un máximo de $55,000 para compradores que no son propietarios de una vivienda al momento de solicitar la asistencia del Programa de Asistencia Directa al Comprador. El Programa de Asistencia Directa al Comprador financiado con fondos asignados por el Departamento de Vivienda y Desarrollo Urbano de los Estados Unidos (HUD)."
},
// Pregunta 43
{
    "question": "El Acceso Controlado en Puerto Rico lo regula:",
    "options": [
        "El Código Municipal de Puerto Rico (ley 107 del 14 de agosto de 2020)",
        "Ley 104 del 1958"
    ],
    "answer": "El Código Municipal de Puerto Rico (ley 107 del 14 de agosto de 2020)"
},
// Pregunta 44
{
    "question": "La ley de Hogar Seguro es:",
    "options": [
        "Es la ley del 13 de septiembre del 2011 donde dispone que todo individuo o jefe de familia, domiciliado en Puerto Rico, tendrá derecho a poseer y disfrutar, en concepto de hogar seguro.",
        "Es la ley de exoneración contributiva"
    ],
    "answer": "Es la ley del 13 de septiembre del 2011 donde dispone que todo individuo o jefe de familia, domiciliado en Puerto Rico, tendrá derecho a poseer y disfrutar, en concepto de hogar seguro."
},
// Pregunta 45
{
    "question": "¿Cuál de los siguientes es una persona jurídica?",
    "options": [
        "Una corporación",
        "Un ser humano"
    ],
    "answer": "Una corporación"
},
// Pregunta 46
{
    "question": "Cuando dos personas o más son dueños de una propiedad se conoce como:",
    "options": [
        "Comunidad de Bienes",
        "Expropiación Forzosa"
    ],
    "answer": "Comunidad de Bienes"
},
// Pregunta 47
{
    "question": "Permuta significa:",
    "options": [
        "Intercambio de Bienes",
        "Una Donación"
    ],
    "answer": "Intercambio de Bienes"
},
// Pregunta 48
{
    "question": "El contrato de cobroke significa:",
    "options": [
        "Significará negocios entre Corredores y Vendedores o entre Empresas y Corredores. (Venta Compartida).",
        "Es un contrato de Opción de Compraventa"
    ],
    "answer": "Significará negocios entre Corredores y Vendedores o entre Empresas y Corredores. (Venta Compartida)."
},
// Pregunta 49
{
    "question": "Si el contrato de Opción depende de un financiamiento hipotecario el contrato genera una:",
    "options": [
        "Obligación Pura",
        "Obligación Suspensiva"
    ],
    "answer": "Obligación Suspensiva"
},
// Pregunta 50
{
    "question": "El Matrimonio es:",
    "options": [
        "Es una Institución Civil que procede de un contrato civil en virtud del cual dos personas naturales se obligan mutuamente a ser cónyuges, y a cumplir la una para con la otra los deberes que la ley les impone.",
        "Es un acuerdo verbal"
    ],
    "answer": "Es una Institución Civil que procede de un contrato civil en virtud del cual dos personas naturales se obligan mutuamente a ser cónyuges, y a cumplir la una para con la otra los deberes que la ley les impone."
},
// Pregunta 51
{
    "question": "El recurso legal para sacar de la posesión legal a un Inquilino que incumplió con el contrato se conoce como:",
    "options": [
        "Desahucio",
        "Promesa"
    ],
    "answer": "Desahucio"
},
// Pregunta 52
{
    "question": "Los elementos procomunales bajo la Ley de Condominios son:",
    "options": [
        "Son aquellas áreas susceptibles de Aprovechamiento Independiente (Apartamento o Locales) cuya Titularidad le haya sido asignada al Consejo de Titulares.",
        "Son la Fachada"
    ],
    "answer": "Son aquellas áreas susceptibles de Aprovechamiento Independiente (Apartamento o Locales) cuya Titularidad le haya sido asignada al Consejo de Titulares."
},
// Pregunta 53
{
    "question": "¿Cuáles son los tipos de emancipación?",
    "options": [
        "Automática, Por Matrimonio, Por el Tribunal (legal) y por los Padres con Patria Potestad.",
        "Por Matrimonio, Por la Junta, Por Mutuo Acuerdo y por el DACO"
    ],
    "answer": "Automática, Por Matrimonio, Por el Tribunal (legal) y por los Padres con Patria Potestad."
},
// Pregunta 54
{
    "question": "¿Cuáles de los siguientes son los vicios del consentimiento?",
    "options": [
        "Dolo, Error, Violencia e Intimidación",
        "Consentimiento, Objeto y Causa"
    ],
    "answer": "Dolo, Error, Violencia e Intimidación"
},
// Pregunta 55
{
    "question": "La ley Federal dispone que, en la compraventa y el arrendamiento, hay que orientar a las partes sobres los peligros de la pintura a base de plomo de aquellas propiedades construidas en o antes de:",
    "options": [
        "1978",
        "2000"
    ],
    "answer": "1978"
}

    ],
    "examen3": [
      
      // Pregunta 1
{
    "question": "El LTV máximo en FHA es de:",
    "options": [
        "96.5%",
        "10%",
        "100%",
        "Hasta un 80% de LTV"
    ],
    "answer": "96.5%"
},
// Pregunta 2
{
    "question": "La Hipoteca 203h de FHA:",
    "options": [
        "Es un préstamo garantizado",
        "Es un préstamo privado de los Inversionistas Privados",
        "Es un préstamo para asegurar hipotecas a las víctimas de un Área de Desastres Mayores Declaradas Presidencialmente para la compra o reconstrucción de una propiedad Familiar Única",
        "Es un préstamo de construcción convencional, comercial e Industrial"
    ],
    "answer": "Es un préstamo para asegurar hipotecas a las víctimas de un Área de Desastres Mayores Declaradas Presidencialmente para la compra o reconstrucción de una propiedad Familiar Única"
},
// Pregunta 3
{
    "question": "El distrito DS es:",
    "options": [
        "Desarrollo Selectivo",
        "Desarrollo Sancionado",
        "Desarrollo Salubrista",
        "Desarrollo Sección"
    ],
    "answer": "Desarrollo Selectivo"
},
// Pregunta 4
{
    "question": "¿Cuáles son los requisitos de la Expropiación Forzosa (Dominio Eminente)?",
    "options": [
        "Comercial y Residencial",
        "Necesidad Pública y Justa Compensación",
        "Escritura Pública",
        "Inscribirlo en el Registro de la Propiedad"
    ],
    "answer": "Necesidad Pública y Justa Compensación"
},
// Pregunta 5
{
    "question": "Servidumbre de Equidad son:",
    "options": [
        "Las condiciones amplias a la propiedad",
        "Las condiciones restrictivas al uso, goce y disfrute de una propiedad",
        "El derecho de Uso y Habitación",
        "La escritura de Compraventa"
    ],
    "answer": "Las condiciones restrictivas al uso, goce y disfrute de una propiedad"
},
// Pregunta 6
{
    "question": "Para modificar la servidumbre de equidad necesita:",
    "options": [
        "unanimidad",
        "mayoría"
    ],
    "answer": "unanimidad"
},
// Pregunta 7
{
    "question": "Para modificar y enmendar el Reglamento en un Condominio se requiere:",
    "options": [
        "Mayoría de los Titulares",
        "Por lo menos la mitad más uno de los Titulares presentes",
        "Que el titular único del inmueble o, si hubiere más de uno (1), dos terceras (2/3) de todos los titulares, que a su vez, reúnan dos terceras (2/3) partes de las participaciones en las áreas comunes",
        "1/3 de los Titulares sin convocatoria"
    ],
    "answer": "Que el titular único del inmueble o, si hubiere más de uno (1), dos terceras (2/3) de todos los titulares, que a su vez, reúnan dos terceras (2/3) partes de las participaciones en las áreas comunes"
},
// Pregunta 8
{
    "question": "La Junta de Directores de un Condominio puede imponer una multa de:",
    "options": [
        "Al titular o residente que viole las normas de convivencia estatuidas en la escritura matriz, la ley o el Reglamento de hasta $200.00 por cada violación.",
        "Al titular o residente que viole las normas de convivencia estatuidas en la escritura matriz, la ley o el Reglamento de hasta $300.00 por cada violación.",
        "Al titular o residente que viole las normas de convivencia estatuidas en la escritura matriz, la ley o el Reglamento de hasta $100.00 por cada violación.",
        "Al titular o residente que viole las normas de convivencia estatuidas en la escritura matriz, la ley o el Reglamento de hasta $50.00 por cada violación."
    ],
    "answer": "Al titular o residente que viole las normas de convivencia estatuidas en la escritura matriz, la ley o el Reglamento de hasta $100.00 por cada violación."
},
// Pregunta 9
{
    "question": "¿Cuál de los siguientes es un Elemento Común limitado bajo la ley de Condominios?",
    "options": [
        "Pasillos, Ascensores y Escaleras",
        "Los árboles",
        "Los carros de los titulares",
        "La seguridad"
    ],
    "answer": "Pasillos, Ascensores y Escaleras"
},
// Pregunta 10
{
    "question": "José quiere comprar mediante un préstamo FHA una propiedad cuyo precio de Venta es 120,000 y la Tasación es de 130,000. ¿Calcule la Hipoteca Máxima?",
    "options": [
        "125,450",
        "115,800",
        "120,000",
        "130,000"
    ],
    "answer": "115,800"
},
// Pregunta 11
{
    "question": "Migdalia dueña de un apartamento en un Condominio contrató a Javier Corredor de Bienes Raíces para que le administre su apartamento y lo rente a corto plazo por la plataforma Airbnb. Javier Corredor de Bienes Raíces verificó la Escritura Matriz y el Reglamento y no encontró una prohibición de arrendar a corto plazo y procede a rentarlo. Javier Corredor:",
    "options": [
        "Cumplió con la ley porque verificó correctamente",
        "Cumplió con la ley porque no es el Dueño sino el Corredor",
        "No cumplió con la ley porque el tenía que buscar sólo en la Escritura Matriz",
        "No cumplió con la ley porque tenía que buscar sólo en el Reglamento"
    ],
    "answer": "Cumplió con la ley porque verificó correctamente"
},
// Pregunta 12
{
    "question": "¿Cuál de los siguientes se considera un elemento común general necesario?",
    "options": [
        "La Azotea",
        "El Vuelo",
        "El terreno",
        "El Carro"
    ],
    "answer": "El Vuelo"
},
// Pregunta 13
{
    "question": "Para que un Condómino se le prive de los Servicios de Agua, Luz, Cable TV etc. por cuotas de mantenimiento adeudadas tiene que:",
    "options": [
        "Adeudar 2 o más meses consecutivos de cuotas de mantenimiento",
        "Adeudar 3 o más meses consecutivos de cuotas de mantenimiento",
        "Adeudar 1 mes solamente",
        "Adeudar 2 o más meses por separado de cuotas de mantenimiento"
    ],
    "answer": "Adeudar 2 o más meses consecutivos de cuotas de mantenimiento"
},
// Pregunta 14
{
    "question": "¿Cuáles de los siguientes elementos comunes se considera un elemento común general voluntario?:",
    "options": [
        "El vuelo",
        "La Azotea",
        "Las Paredes Maestras",
        "Techos"
    ],
    "answer": "La Azotea"
},
// Pregunta 15
{
    "question": "El distrito M significa:",
    "options": [
        "A Mejorarse (requiere Mejoras)",
        "Industrial Pesado",
        "A mar seco",
        "Mercado Secundario"
    ],
    "answer": "A Mejorarse (requiere Mejoras)"
},
// Pregunta 16
{
    "question": "Se podrá financiar una propiedad de cuatro unidades por FHA:",
    "options": [
        "Falso, porque no se puede comprar propiedades para más de una familia",
        "Cierto, FHA financia de una a cuatro unidades siempre y cuando el propietario viva en ella y sea su residencia principal.",
        "Cierto, porque FHA financia propiedades de uno sola unidad",
        "Ninguna de las anteriores"
    ],
    "answer": "Cierto, FHA financia de una a cuatro unidades siempre y cuando el propietario viva en ella y sea su residencia principal."
},
// Pregunta 17
{
    "question": "Corresponde al Consejo de Titulares en un Condominio:",
    "options": [
        "Aprobar la ejecución de obras extraordinarias y mejoras y recabar fondos para su realización. El presupuesto anual incluirá una partida de fondo de reserva que no será menor del 5% del presupuesto operacional del condominio para ese año",
        "Aprobar la ejecución de obras extraordinarias y mejoras y recabar fondos para su realización. El presupuesto anual incluirá una partida de fondo de reserva que no será menor del 10% del presupuesto operacional del condominio para ese año.",
        "Aprobar la ejecución de obras extraordinarias y mejoras y recabar fondos para su realización. El presupuesto anual incluirá una partida de fondo de reserva que no será menor del 15% del presupuesto operacional del condominio para ese año.",
        "Aprobar la ejecución de obras extraordinarias y mejoras y recabar fondos para su realización. El presupuesto anual incluirá una partida de fondo de reserva que no será menor del 75% del presupuesto operacional del condominio para ese año."
    ],
    "answer": "Aprobar la ejecución de obras extraordinarias y mejoras y recabar fondos para su realización. El presupuesto anual incluirá una partida de fondo de reserva que no será menor del 5% del presupuesto operacional del condominio para ese año"
},
// Pregunta 18
{
    "question": "Para que el Condominio cualifique para los préstamos de FHA se le requiere lo siguiente:",
    "options": [
        "En el presupuesto del Condominio debe aparecer el detalle de una partida para el fondo de reserva, que represente el 10% de dicho presupuesto.",
        "En el presupuesto del Condominio debe aparecer el detalle de una partida para el fondo de reserva, que represente el 15% de dicho presupuesto.",
        "En el presupuesto del Condominio debe aparecer el detalle de una partida para el fondo de reserva, que represente el 20% de dicho presupuesto.",
        "En el presupuesto del Condominio debe aparecer el detalle de una partida para el fondo de reserva, que represente el 25% de dicho presupuesto."
    ],
    "answer": "En el presupuesto del Condominio debe aparecer el detalle de una partida para el fondo de reserva, que represente el 10% de dicho presupuesto."
},
// Pregunta 19
{
    "question": "Ricardo titular renta su apartamento por 1 año a Rodrigo arrendatario y acordaron en el contrato que Rodrigo se obligaba a pagar la cuota de mantenimiento. Rodrigo nunca pagó la cuota de mantenimiento y al año la Junta presenta una demanda a Ricardo titular en cobro de $2,400 de la cuota de mantenimiento no pagada. ¿Quién está obligado a pagar la cuota de mantenimiento?:",
    "options": [
        "La Junta",
        "Rodrigo porque lo acordó en el contrato",
        "Ricardo porque es el titular, aunque haya pactado lo contrario en el contrato",
        "El Consejo de Titulares"
    ],
    "answer": "Ricardo porque es el titular, aunque haya pactado lo contrario en el contrato"
},
// Pregunta 20
{
    "question": "La Urbanización con acceso controlado el Tormento Vivir prohibió la entrada a la Policía para resolver un asunto. ¿La Urbanización le puede prohibir la entrada a la Policía?:",
    "options": [
        "Si le puede prohibir la entrada por cualquier circunstancia.",
        "No se le puede prohibir, bajo ninguna circunstancia, el libre acceso de la Policía, Bomberos o cualquier otro servicio de emergencia, incluyendo los servicios de ambulancias públicas o privadas y de los empleados de las corporaciones públicas o privadas, sus agentes o contratistas que ofrecen servicio de agua, energía eléctrica, teléfono o recogido de desperdicios sólidos dentro de la comunidad objeto del control de acceso",
        "Si porque la policía no se identificó",
        "La Comunidad puede decidir prohibirle la entrada a la policía, bomberos etc… por seguridad"
    ],
    "answer": "No se le puede prohibir, bajo ninguna circunstancia, el libre acceso de la Policía, Bomberos o cualquier otro servicio de emergencia, incluyendo los servicios de ambulancias públicas o privadas y de los empleados de las corporaciones públicas o privadas, sus agentes o contratistas que ofrecen servicio de agua, energía eléctrica, teléfono o recogido de desperdicios sólidos dentro de la comunidad objeto del control de acceso"
},
// Pregunta 21
{
    "question": "¿Quién tiene autoridad de autorizar un Sistema de Control de Acceso son?",
    "options": [
        "Los Comités",
        "Los Municipios",
        "La Policía",
        "La Asociación"
    ],
    "answer": "Los Municipios"
},
// Pregunta 22
{
    "question": "La obligación de pago del control de acceso recaerá en:",
    "options": [
        "Los propietarios de fincas en las que se haya inscrito la autorización o permiso.",
        "Los propietarios que autorizaron la solicitud para establecer el control de acceso, según fue implantado.",
        "Todo propietario adquirente de una finca, ubicada en una urbanización, calle o comunidad que ha sido autorizada por el municipio correspondiente para controlar el acceso o que, a la fecha de la compraventa, se encontrara en trámite de obtener el consentimiento de tres cuartas (3/4) partes de los propietarios y así conste en actas.",
        "Todas las anteriores."
    ],
    "answer": "Todas las anteriores."
},
// Pregunta 23
{
    "question": "Para conceder permiso de Acceso Controlado el Municipio podrá requerir una fianza cuya cuantía no excederá de:",
    "options": [
        "$2,000.",
        "$3,000.",
        "$10,000.",
        "1 millón o el 6% de cada contrato de opción de compraventa"
    ],
    "answer": "$3,000."
},
// Pregunta 24
{
    "question": "Toda persona que adquiera una propiedad con control de acceso notificará al Consejo o Asociación de Residentes:",
    "options": [
        "su nombre, dirección y fecha en que adquirió la propiedad no más tarde de los 30 días siguientes a la fecha de adquisición.",
        "su nombre, dirección y fecha en que adquirió la propiedad no más tarde de los 60 días siguientes a la fecha de adquisición.",
        "su nombre, dirección y fecha en que adquirió la propiedad no más tarde de los 90 días siguientes a la fecha de adquisición.",
        "su nombre, dirección y fecha en que adquirió la propiedad no más tarde de los 120 días siguientes a la fecha de adquisición."
    ],
    "answer": "su nombre, dirección y fecha en que adquirió la propiedad no más tarde de los 30 días siguientes a la fecha de adquisición."
},
// Pregunta 25
{
    "question": "El Corredor de Bienes Raíces le cobró comisión al prospecto comprador y al vendedor sin que el Corredor se lo dijera a ambos. El Corredor de Bienes Raíces:",
    "options": [
        "Viola el Reglamento de Ética",
        "No viola el Reglamento de Ética",
        "Viola la ley 10 de 1994 y el Reglamento de Ética",
        "Viola el LPRA de Puerto Rico"
    ],
    "answer": "Viola la ley 10 de 1994 y el Reglamento de Ética"
},
// Pregunta 26
{
    "question": "¿Cuál de los siguientes es un acto proscrito?",
    "options": [
        "Ofrecer una propiedad a la venta sin el consentimiento de su propietario.",
        "En el caso de los Vendedores, representar a otro corredor o empresa que no sea aquella para la cual presta servicios como empleado o contratista independiente, sin el consentimiento de dicho corredor o empresa.",
        "En el caso de los Vendedores, aceptar una comisión por servicios prestados de una persona que no sea el corredor o empresa para quien trabaja, sin el consentimiento de las partes y del corredor o empresa para quien trabaja.",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 27
{
    "question": "Para un anuncio de venta de una propiedad se debe indicar:",
    "options": [
        "Sólo un número de teléfono",
        "Sólo un número de dirección",
        "El número de teléfono, nombre del Corredor o Empresa, así como el número de licencia",
        "Sólo el número de licencia"
    ],
    "answer": "El número de teléfono, nombre del Corredor o Empresa, así como el número de licencia"
},
// Pregunta 28
{
    "question": "El método de Ventas Comparables:",
    "options": [
        "Es el método que se basa en los ingresos de la propiedad",
        "Es el método menos usado en la tasación y se basa en el costo o reproducción de la propiedad",
        "Es el método más usado en la tasación de propiedades similares vendidas",
        "Es el método de Capitalización de Ingresos"
    ],
    "answer": "Es el método más usado en la tasación de propiedades similares vendidas"
},
// Pregunta 29
{
    "question": "¿Cuál es la mejor forma de tasación para un Comerciante o Inversionista?",
    "options": [
        "Método por Costo",
        "Método de Capitalización de Ingresos",
        "Método de Ventas Comparables",
        "Ninguna de las anteriores"
    ],
    "answer": "Método de Capitalización de Ingresos"
},
// Pregunta 30
{
    "question": "La Sra. Enid contrata a José Corredor para que éste le vendiera su casa. Sin embargo, Ricardo Corredor convenció a la Sra. Enid de rescindir el contrato con José Corredor para que Ricardo Corredor le vendiera la propiedad. ¿Puede José Corredor demandar a Ricardo Corredor?:",
    "options": [
        "Sí lo puede demandar porque Ricardo Corredor hizo algo contrario a la ley",
        "Sí lo puede demandar porque La Sra. Enid conocía a José Corredor",
        "No lo puede demandar porque Ricardo Corredor no hizo nada contrario a la ley",
        "No lo puede demandar porque Ricardo Corredor tiene licencia de bienes raíces"
    ],
    "answer": "Sí lo puede demandar porque Ricardo Corredor hizo algo contrario a la ley"
},
// Pregunta 31
{
    "question": "Mariam aspirante a la licencia de Corredor de Bienes Raíces pasó su examen de reválida. ¿Cuántos días tiene para presentar los documentos y requisitos para solicitar la licencia de bienes raíces?",
    "options": [
        "Tiene 30 días contando desde el día que pasó el examen de reválida",
        "Tiene 60 días contando desde el día que pasó el examen de reválida",
        "Tiene 90 días contando desde el día que pasó el examen de reválida",
        "Tiene 120 días contando desde el día que pasó el examen de reválida"
    ],
    "answer": "Tiene 90 días contando desde el día que pasó el examen de reválida"
},
// Pregunta 32
{
    "question": "La cuenta de plica (cuenta especial):",
    "options": [
        "Debe generar intereses",
        "No puede generar intereses y debe ser una cuenta aparte de su cuenta personal",
        "Debe ser su cuenta personal",
        "Debe ser sólo para los Vendedores de Bienes Raíces"
    ],
    "answer": "No puede generar intereses y debe ser una cuenta aparte de su cuenta personal"
},
// Pregunta 33
{
    "question": "Según la ley 10 del 1994 la Junta de Bienes Raíces es nombrada por un término de:",
    "options": [
        "8 años",
        "4 años",
        "2 años",
        "3 años"
    ],
    "answer": "4 años"
},
// Pregunta 34
{
    "question": "Según la ley el Corredor de Bienes Raíces:",
    "options": [
        "Es parte de la transacción",
        "Es un intermediario de la transacción",
        "Es el notario de la transacción",
        "Es el banco de la transacción"
    ],
    "answer": "Es un intermediario de la transacción"
},
// Pregunta 35
{
    "question": "La fianza del Corredor y Vendedor de Bienes Raíces es de:",
    "options": [
        "20,000",
        "10,000",
        "1 millón o el 6%",
        "100,000"
    ],
    "answer": "10,000"
},
// Pregunta 36
{
    "question": "La fianza de la Empresa de Bienes Raíces es de:",
    "options": [
        "20,000",
        "10,000",
        "1 millón o el 6%",
        "100,000"
    ],
    "answer": "20,000"
},
// Pregunta 37
{
    "question": "¿Cuántas horas anuales de Educación Continua debe tomar el Corredor de Bienes Raíces?:",
    "options": [
        "5 horas",
        "6 horas",
        "4 horas",
        "24 horas"
    ],
    "answer": "6 horas"
},
// Pregunta 38
{
    "question": "El comprobante de rentas internas para la licencia de Corredor y Vendedor de Bienes Raíces es de:",
    "options": [
        "500",
        "200",
        "100",
        "1 millón"
    ],
    "answer": "200"
},
// Pregunta 39
{
    "question": "El comprobante de rentas internas para Empresa de Bienes Raíces es de:",
    "options": [
        "500",
        "200",
        "100",
        "1 millón"
    ],
    "answer": "500"
},
// Pregunta 40
{
    "question": "¿Qué pasa si un Corredor de Bienes Raíces sometió la renovación de licencia antes de los 30 días del vencimiento de su licencia?:",
    "options": [
        "Se le prorrogará automáticamente dicha licencia por el término que se tome la Junta en la consideración de su solicitud",
        "Hay que esperar 90 días para que la Junta se reúna para la licencia nueva",
        "Hay que presentar una declaración jurada haciendo constar que no hizo ninguna transacción de bienes raíces",
        "Se le inactiva su licencia"
    ],
    "answer": "Se le prorrogará automáticamente dicha licencia por el término que se tome la Junta en la consideración de su solicitud"
},
// Pregunta 41
{
    "question": "¿Qué pasa si un Corredor de Bienes Raíces sometió la renovación de licencia después de transcurridos 90 días del vencimiento de dicha licencia?:",
    "options": [
        "Se le prorrogará automáticamente dicha licencia por el término que se tome la Junta en la consideración de su solicitud",
        "Hay que esperar 90 días para que la Junta se reúna para la licencia nueva",
        "Hay que presentar una declaración jurada haciendo constar que no hizo ninguna transacción de bienes raíces",
        "Se le inactiva su licencia"
    ],
    "answer": "Hay que presentar una declaración jurada haciendo constar que no hizo ninguna transacción de bienes raíces"
},
// Pregunta 42
{
    "question": "¿Qué pasa si una persona se dedica a la profesión de Corredor o Vendedor de Bienes Raíces sin licencia en Puerto Rico?",
    "options": [
        "Comete delito menos grave (multa de $500 o cárcel no mayor de 6 meses o ambas penas a discreción del Tribunal)",
        "Comete delito grave con multa no menor de $1,000 ni mayor de $25,000 o cárcel por un término no mayor de 1 año o ambas penas a discreción del Tribunal",
        "Comete una falta",
        "Comete agresión"
    ],
    "answer": "Comete delito menos grave (multa de $500 o cárcel no mayor de 6 meses o ambas penas a discreción del Tribunal)"
},
// Pregunta 43
{
    "question": "¿Cuál de los siguientes es un elemento de todo contrato?",
    "options": [
        "Oneroso",
        "Consentimiento",
        "Gratuito",
        "Virtual"
    ],
    "answer": "Consentimiento"
},
// Pregunta 44
{
    "question": "¿Cuál de los siguientes es un contrato bilateral?",
    "options": [
        "Contrato de Opción de Compraventa",
        "Contrato de Promesa de Compraventa"
    ],
    "answer": "Contrato de Promesa de Compraventa"
},
// Pregunta 45
{
    "question": "Si un Corredor vendió o alquiló una propiedad, ¿Cuánto tiempo tiene para quitar algún anuncio?",
    "options": [
        "72 horas",
        "24 horas",
        "90 días",
        "120 días"
    ],
    "answer": "72 horas"
},
// Pregunta 46
{
    "question": "¿Quiénes son las partes en un contrato de opción de compraventa?",
    "options": [
        "El Corredor",
        "El Vendedor y el Comprador",
        "El notario",
        "El Banco"
    ],
    "answer": "El Vendedor y el Comprador"
},
// Pregunta 47
{
    "question": "En el contrato de corretaje semi exclusivo:",
    "options": [
        "Si el dueño vende cobra comisión",
        "Si el dueño vende no paga la comisión, pero si el Corredor o Vendedor de Bienes Raíces vende tiene derecho a la comisión",
        "El corredor tiene exclusividad",
        "Todos los corredores y vendedores pueden vender la propiedad"
    ],
    "answer": "Si el dueño vende no paga la comisión, pero si el Corredor o Vendedor de Bienes Raíces vende tiene derecho a la comisión"
},
// Pregunta 48
{
    "question": "Previo al Reglamento 9101 del 2019, ¿Cuál fue el Reglamento que estableció la Educación a Distancia?",
    "options": [
        "Ley 10",
        "Reglamento 7962 de Asuntos Académicos",
        "Reglamento 6631",
        "Reglamento de DACO"
    ],
    "answer": "Reglamento 7962 de Asuntos Académicos"
},
// Pregunta 49
{
    "question": "¿Cuál es el propósito del Reglamento 5571? – REGLAMENTO DE ETICA",
    "options": [
        "Establecer las normas que requieren la conducta de los Corredores, Vendedores y Empresas de Bienes Raíces en Puerto Rico",
        "Establecer la profesión de bienes raíces",
        "Establecer las normas sólo a los Corredores",
        "Establecer las normas sólo a los Vendedores"
    ],
    "answer": "Establecer las normas que requieren la conducta de los Corredores, Vendedores y Empresas de Bienes Raíces en Puerto Rico"
},
      // Pregunta 50
{
    "question": "Mediante los Mapas de Zonificación:",
    "options": [
        "Se establecen las normas que debe seguir en las diferentes actividades sociales y económicas",
        "Se establece las normas en los contratos",
        "Se establece las normas en bienes raíces",
        "Se estable los códigos de bienes raíces"
    ],
    "answer": "Se establecen las normas que debe seguir en las diferentes actividades sociales y económicas"
},
      // Pregunta 51
{
    "question": "Ricardo Vendedor de Bienes Raíces, contratado por Jesús Corredor de Bienes Raíces, vendió una propiedad exitosamente y colocó un rótulo que dice: “!VENDIDO por RICARDO VENDEDOR DE BIENES RAÍCES!”. ¿Cuál de las siguientes es correcta?:",
    "options": [
        "Ricardo Vendedor lo puede hacer porque cumple con la ley",
        "Ricardo Vendedor no lo puede hacer porque le corresponde sólo al Corredor Principal",
        "Se puede hacer porque todos pueden poner un anuncio de “VENDIDO”",
        "Ninguna de las anteriores"
    ],
    "answer": "Ricardo Vendedor no lo puede hacer porque le corresponde sólo al Corredor Principal"
},
// Pregunta 52
{
    "question": "¿Qué es la Declaración de Cierre “Closing Disclosure”?",
    "options": [
        "Es un formulario estandarizado de 5 páginas que desglosa todos los términos y costos finales del préstamo hipotecario del Cliente e incluye: El monto del préstamo hipotecario, la tasa de interés, los costos del cierre, el Pago de Hipoteca final y los términos del préstamo",
        "Es la Tasación del Préstamo",
        "Es la mensura",
        "El pagaré Hipotecario"
    ],
    "answer": "Es un formulario estandarizado de 5 páginas que desglosa todos los términos y costos finales del préstamo hipotecario del Cliente e incluye: El monto del préstamo hipotecario, la tasa de interés, los costos del cierre, el Pago de Hipoteca final y los términos del préstamo"
},
// Pregunta 53
{
    "question": "¿Cuánto tiempo tiene el Cliente para recibir la Declaración de Cierre o “Closing Disclosure” que desglosa todos los términos y costos finales del préstamo hipotecario?:",
    "options": [
        "3 días hábiles antes de la fecha del cierre",
        "72 horas antes del cierre",
        "33 horas antes del cierre",
        "24 días antes del cierre"
    ],
    "answer": "3 días hábiles antes de la fecha del cierre"
},
// Pregunta 54
{
    "question": "Miguel dueño contrata a José Corredor para que éste la venda su propiedad. Sin embargo, Miguel dueño no tiene la escritura de título de propiedad. No obstante, Miguel Dueño le dice a José Corredor que, aunque no exista un título de propiedad, su familia lleva muchos años viviendo la propiedad. El Corredor le dice a Miguel dueño que debería orientarse legalmente sobre el concepto de:",
    "options": [
        "Usucapión (Prescripción Adquisitiva)",
        "Arrendamiento",
        "Compensación",
        "Donación"
    ],
    "answer": "Usucapión (Prescripción Adquisitiva)"
},
// Pregunta 55
{
    "question": "La Junta de Planificación es:",
    "options": [
        "La Agencia encargada de establecer la Zonificación en Puerto Rico y hace enmiendas a los Mapas de Zonificación en Puerto Rico",
        "DACO",
        "ARPE",
        "OGPE"
    ],
    "answer": "La Agencia encargada de establecer la Zonificación en Puerto Rico y hace enmiendas a los Mapas de Zonificación en Puerto Rico"
},
// Pregunta 56
{
    "question": "¿Cómo se busca información en Registro de la Propiedad en Puerto Rico?",
    "options": [
        "Número de Catastro",
        "Por los Libros",
        "Número de Seguro Social",
        "Fecha de Nacimiento"
    ],
    "answer": "Por los Libros"
},
// Pregunta 57
{
    "question": "El principio registral de Tracto Sucesivo significa:",
    "options": [
        "Primero en tiempo primero en derecho",
        "Cadena de Dueños sin interrupción que aparecen en una Finca en el Registro de la Propiedad",
        "Publicidad",
        "Inscripción Constitutiva"
    ],
    "answer": "Cadena de Dueños sin interrupción que aparecen en una Finca en el Registro de la Propiedad"
},
// Pregunta 58
{
    "question": "Una de las mejores maneras y forma de cualificar a un Cliente para un préstamo hipotecario es:",
    "options": [
        "Con sus Planillas, Seguro Social y las W-2",
        "Con su Reputación",
        "Con un estado",
        "De manera verbal"
    ],
    "answer": "Con sus Planillas, Seguro Social y las W-2"
},
// Pregunta 59
{
    "question": "Cuando un Notario autoriza una escritura pública, el original de dicha escritura lo hace formar parte:",
    "options": [
        "De la Copia Certificada",
        "De su Protocolo",
        "De su Registro",
        "De su Diccionario"
    ],
    "answer": "De su Protocolo"
},
// Pregunta 60
{
    "question": "María quiere comprar una casa cuyo valor es de 165,000. María solicitó un préstamo hipotecario e hizo una aportación (down payment) del 20% y el Banco le prestó 132,000. ¿Calcule el LTV?",
    "options": [
        "80%",
        "90%",
        "100%",
        "85%"
    ],
    "answer": "90%"
},
// Pregunta 61
{
    "question": "Descubren a un Corredor de Bienes Raíces que sólo trabaja y le da servicio de corretaje a personas con 50 años o más. El Corredor:",
    "options": [
        "Hace su trabajo correctamente",
        "No está cometiendo ningún discrimen",
        "Estaría cometiendo una conducta discriminatoria porque no puede discriminar por razones de sexo, color, raza, religión, incapacidad, nacionalidad, ni edad al ofrecer sus servicios profesionales",
        "No estaría cometiendo ninguna falta"
    ],
    "answer": "Estaría cometiendo una conducta discriminatoria porque no puede discriminar por razones de sexo, color, raza, religión, incapacidad, nacionalidad, ni edad al ofrecer sus servicios profesionales"
},
// Pregunta 62
{
    "question": "José Corredor de Bienes Raíces licenciado, que trabaja para una Empresa de Bienes Raíces, quiere hacer sus Anuncios y Rótulos con su nombre “José Corredor”, su número de teléfono y su número de licencia de Bienes Raíces. ¿Cómo debe ser el Anuncio o Rótulo?",
    "options": [
        "Sólo con el nombre de José Corredor, su número de teléfono y número de licencia.",
        "Sólo con el nombre de José Corredor y su número de licencia.",
        "Además del nombre de “José Corredor”, su número de teléfono y número de su licencia de Bienes Raíces deberá incluir el Nombre de la Empresa, número de teléfono y el número de licencia de la Empresa para operar.",
        "Ninguna de las anteriores"
    ],
    "answer": "Además del nombre de “José Corredor”, su número de teléfono y número de su licencia de Bienes Raíces deberá incluir el Nombre de la Empresa, número de teléfono y el número de licencia de la Empresa para operar."
},
// Pregunta 63
{
    "question": "La tasación del CRIM es de 24,000. El dueño tiene derecho a la Ley 24 y pagó sus contribuciones el 17 de julio con una Tasa Contributiva de 10.40%. ¿Cuánto pagó de contribuciones?",
    "options": [
        "421.20",
        "0",
        "15,000",
        "464.85"
    ],
    "answer": "421.20"
},
// Pregunta 64
{
    "question": "Un Instructor General de Bienes Raíces debe:",
    "options": [
        "tener al menos cinco años de experiencia en la Industria de los Bienes Raíces, contados a partir de la primera licencia emitida por la Junta como Corredor de Bienes Raíces. En adición deberá poseer un bachillerato universitario. Deberá completar un mínimo de 3 horas por año en materias para educadores, para un total de 15 horas, durante el período de vigencia de su certificado (5 años).",
        "Puede ser cualquier persona",
        "No tiene que ser Corredor",
        "Debe ser Abogado Notario"
    ],
    "answer": "tener al menos cinco años de experiencia en la Industria de los Bienes Raíces, contados a partir de la primera licencia emitida por la Junta como Corredor de Bienes Raíces. En adición deberá poseer un bachillerato universitario. Deberá completar un mínimo de 3 horas por año en materias para educadores, para un total de 15 horas, durante el período de vigencia de su certificado (5 años)."
},
// Pregunta 65
{
    "question": "Un miembro de la Junta de Bienes Raíces fue nombrado el 8 de febrero de 2010 y renuncia el 1 de febrero de 2011. Para sustituirlo, nombran a Iris como nuevo miembro de la Junta. ¿Cuándo termina su término?",
    "options": [
        "7 de febrero de 2014",
        "31 de enero de 2015",
        "4 de enero de 2005",
        "No se puede nombrar"
    ],
    "answer": "7 de febrero de 2014"
},
// Pregunta 66
{
    "question": "Juan titular de un apartamento tiene la intención de vender su estacionamiento INDIVIDUALIZADO en el Condominio donde vive. ¿Cuántos días tiene el Juan para notificar a la Junta de Directores de su intención de Vender el estacionamiento en el Condominio?",
    "options": [
        "10 días",
        "20 días",
        "30 días",
        "40 días"
    ],
    "answer": "10 días"
},
// Pregunta 67
{
    "question": "El Vendedor de una propiedad puede hacer una aportación a los gastos de cierre del Comprador en un Financiamiento Hipotecario:",
    "options": [
        "Si se puede hacer (Seller Concession)",
        "No se puede hacer",
        "Sólo si el Abogado lo decide",
        "Sólo si la Junta lo decide"
    ],
    "answer": "Si se puede hacer (Seller Concession)"
},
// Pregunta 68
{
    "question": "¿Cuál de los reglamentos es el que complementa la ley 10 del 26 de abril de 1994 de bienes raíces en Puerto Rico?:",
    "options": [
        "Reglamento 5567 del 3 de abril de 1997 – Reglamento Para Implantar la Ley 10",
        "Reglamento 5568 del 3 de abril de 1997 – Reglamento Para Implantar la Ley 10",
        "Reglamento 9101 del 3 de abril de 1997 – Reglamento Para Implantar la Ley 10",
        "Reglamento del Registro de la Propiedad"
    ],
    "answer": "Reglamento 5567 del 3 de abril de 1997 – Reglamento Para Implantar la Ley 10"
},
// Pregunta 69
{
    "question": "El Reglamento 5567 (1997) dispone que toda violación a la Ley o a los reglamentos emitidos a su amparo podrá ser penalizada con multas administrativas que no excederán de:",
    "options": [
        "$5,000 dólares por cada violación",
        "$10,000 dólares por cada violación",
        "$15,000 dólares por cada violación",
        "$25,000 dólares por cada violación"
    ],
    "answer": "$5,000 dólares por cada violación"
},
// Pregunta 70
{
    "question": "Obed Comprador tiene 18 años y con su dinero quiere comprar una casa, con vista al mar, que le gustó y que está vendiendo un Corredor de Bienes Raíces. ¿Qué debe hacer el Corredor de Bienes Raíces?",
    "options": [
        "El Corredor de Bienes Raíces nunca se la puede vender porque tiene 18 años.",
        "El Corredor de Bienes Raíces le puede vender la propiedad a Obed Comprador con el consentimiento y autorización de sus Padres con Patria Potestad conforme a la ley para que la compraventa sea válida.",
        "El Corredor de Bienes Raíces no le puede vender la propiedad ya que es una propiedad inmueble.",
        "El Corredor de Bienes Raíces se la puede vender ya que Obed está emancipado."
    ],
    "answer": "El Corredor de Bienes Raíces le puede vender la propiedad a Obed Comprador con el consentimiento y autorización de sus Padres con Patria Potestad conforme a la ley para que la compraventa sea válida."
},
// Pregunta 71
{
    "question": "El testamento ológrafo es:",
    "options": [
        "Todo hecho a puño y letra del testador",
        "Puede ser en computadora y firma electrónica del testador",
        "Requiere testigos y a puño y letra del testador",
        "Fechado y escrito en computador y firmado a puño y letra del testador."
    ],
    "answer": "Todo hecho a puño y letra del testador"
},
// Pregunta 72
{
    "question": "Rosa Compradora presenta una querella contra Corredor de Bienes Raíces en DACO. Según la ley 10 (1994) DACO podrá hacer lo siguiente:",
    "options": [
        "Devolverle o pagarle a Rosa Compradora cualquier dinero que esté reclamando.",
        "Ordenar la congelación de la Cuenta de Plica",
        "Ordenar la congelación de la Fianza radicada hasta que concluya el procedimiento administrativo.",
        "Ordenar la suspensión de la licencia de bienes raíces inmediatamente por 1 año."
    ],
    "answer": "Ordenar la congelación de la Fianza radicada hasta que concluya el procedimiento administrativo."
},
// Pregunta 73
{
    "question": "En una Comunidad con Acceso Controlado el guardia de seguridad no puede requerir a un visitante en la entrada lo siguiente:",
    "options": [
        "El nombre del visitante; lugar o residencia a visitar;",
        "Marca, modelo, color y número de tablilla del vehículo",
        "La hora de entrada y salida.",
        "La licencia de Conducir."
    ],
    "answer": "La licencia de Conducir."
},
// Pregunta 74
{
    "question": "En la ley que reglamenta el Control de Acceso se prohíbe lo siguiente:",
    "options": [
        "La ley 22 de Tránsito en Puerto Rico",
        "Entrar una lancha",
        "El uso de las Facilidades Comunales si no eres residente",
        "La entrada de motoras."
    ],
    "answer": "El uso de las Facilidades Comunales si no eres residente"
},
// Pregunta 75
{
    "question": "Si una propiedad se vende en Puerto Rico y el Vendedor es un no-residente en Puerto Rico se le va a retener del pago que se la haga a dicho Vendedor:",
    "options": [
        "El 15%",
        "El 20%",
        "El 25%",
        "El 40%"
    ],
    "answer": "El 15%"
},
// Pregunta 76
{
    "question": "Según la reglamentación RESPA el Kickback es:",
    "options": [
        "Se le prohibió a los Bancos el pago de comisiones por referidos de clientes.",
        "Se le prohibió a los Bancos el discrimen.",
        "Se le prohibió a los Corredores el pago por Referidos de Clientes.",
        "Se le permite a los Bancos pagar por referidos de clientes."
    ],
    "answer": "Se le prohibió a los Bancos el pago de comisiones por referidos de clientes."
},
// Pregunta 77
{
    "question": "En un Financiamiento Hipotecario el comprar Puntos de Descuentos:",
    "options": [
        "Baja la Tasa de Interés y aumenta el rendimiento del Banco.",
        "Sube el interés de un préstamo.",
        "Te dan descuento en la compra de un Carro.",
        "El Banco te da descuento en la comisión del Corredor."
    ],
    "answer": "Baja la Tasa de Interés y aumenta el rendimiento del Banco."
},
// Pregunta 78
{
    "question": "El Préstamo Convencional Non-conforming son:",
    "options": [
        "Préstamo Jumbos y los compra Inversionistas Privados",
        "Préstamos Conforming",
        "Préstamo que los compra Fannie Mae",
        "Préstamo Asegurado y Garantizado por Agencia Federal"
    ],
    "answer": "Préstamo Jumbos y los compra Inversionistas Privados"
},
// Pregunta 79
{
    "question": "Según la ley de condominios el adquirente involuntario debe de pagar:",
    "options": [
        "todas las cuotas de mantenimiento",
        "Sólo 6 cuotas de mantenimiento"
    ],
    "answer": "Sólo 6 cuotas de mantenimiento"
},
// Pregunta 80
{
    "question": "Según la ley de condominios el adquirente voluntario debe de pagar:",
    "options": [
        "todas las cuotas de mantenimiento",
        "Sólo 6 cuotas de mantenimiento"
    ],
    "answer": "todas las cuotas de mantenimiento"
},
// Pregunta 81
{
    "question": "El valor nominal del certificado de elegibilidad en veterano es de:",
    "options": [
        "40,000",
        "36,000"
    ],
    "answer": "36,000"
},
// Pregunta 82
{
    "question": "EL BPO es:",
    "options": [
        "Broker Price Opinion",
        "CMA (Comparative Market Analysis)"
    ],
    "answer": "Broker Price Opinion"
},
// Pregunta 83
{
    "question": "Un Administrador necesita:",
    "options": [
        "Licencia",
        "Registrarse en DACO"
    ],
    "answer": "Registrarse en DACO"
},
// Pregunta 84
{
    "question": "¿Para qué se inscribe el Contrato de Arrendamiento en el Registro de la Propiedad?:",
    "options": [
        "Para proteger al Arrendatario",
        "Para que el contrato sea válido"
    ],
    "answer": "Para proteger al Arrendatario"
},
// Pregunta 85
{
    "question": "Otorgante que no sabe leer:",
    "options": [
        "Se debe leer dos veces, una por un testigo y una por el Notario",
        "3 testigos instrumentales idóneos"
    ],
    "answer": "Se debe leer dos veces, una por un testigo y una por el Notario"
},
// Pregunta 86
{
    "question": "Las iniciales de VA significa",
    "options": [
        "Veteran Affairs",
        "Veteran Administration"
    ],
    "answer": "Veteran Affairs"
},
// Pregunta 87
{
    "question": "El CMA es:",
    "options": [
        "Análisis Comparativo del Mercado",
        "Plot Plan"
    ],
    "answer": "Análisis Comparativo del Mercado"
},
// Pregunta 88
{
    "question": "¿Cuántos metros cuadrados hay en 7 cuerdas de terreno?:",
    "options": [
        "27,512.78 metros cuadrados",
        ".00178 metros cuadrados",
        "10.369 metros cuadrados",
        "3,930.3966 metros cuadrados"
    ],
    "answer": "27,512.78 metros cuadrados"
},
// Pregunta 89
{
    "question": "¿Qué permisos se requiere para una construcción nueva?:",
    "options": [
        "Permiso de DACO",
        "Permiso de OGPe y Endosos"
    ],
    "answer": "Permiso de OGPe y Endosos"
},
// Pregunta 90
{
    "question": "¿Qué es un Condominio Mixto?:",
    "options": [
        "Un Condominio con apartamentos tanto residencia o comercial. O sea, una combinación de ambos.",
        "Es un Condominio totalmente residencial.",
        "Es un Condominio totalmente comercial.",
        "Es un Condominio con Acceso Controlado Urbano."
    ],
    "answer": "Un Condominio con apartamentos tanto residencia o comercial. O sea, una combinación de ambos."
},
// Pregunta 91
{
    "question": "El propósito de la Junta de Planificación:",
    "options": [
        "El mejor uso y proteger los terrenos en Puerto Rico",
        "Otorgar permisos de uso"
    ],
    "answer": "El mejor uso y proteger los terrenos en Puerto Rico"
},
// Pregunta 92
{
    "question": "Redlining son:",
    "options": [
        "Distritos Discriminados",
        "Distritos No discriminados",
        "Distritos Universales",
        "Distrito de Convenciones"
    ],
    "answer": "Distritos Discriminados"
},
// Pregunta 93
{
    "question": "Reciprocidad significa",
    "options": [
        "la concesión de licencia sin haber tomado el examen",
        "Debes de tomar el curso de bienes raíces y el examen para la licencia"
    ],
    "answer": "la concesión de licencia sin haber tomado el examen"
},
// Pregunta 94
{
    "question": "José Corredor contrató a una compañía para que le hiciera unos flyers de una propiedad que está vendiendo y la misma compañía lo entrega casa por casa. ¿Es legal que la compañía entregue los flyers?",
    "options": [
        "Es legal",
        "Es ilegal porque constituye un acto proscrito"
    ],
    "answer": "Es legal"
},
// Pregunta 95
{
    "question": "Ricardo Titular de un apartamento quiere saber qué no le toca hacer en el Condominio:",
    "options": [
        "Mantenimiento a los estacionamientos y áreas comunales",
        "Pintar su apartamento",
        "Limpiar su apartamento",
        "Limpiar y organizar su ropa en los closets y gavetas"
    ],
    "answer": "Mantenimiento a los estacionamientos y áreas comunales"
},
// Pregunta 96
{
    "question": "Arrendador y Arrendatario firmaron un contrato de arrendamiento de una propiedad por el término de 3 años a $300 mensuales. Sin embargo, Arrendatario subarrendó la propiedad a José por $600. Determine la actuación de Arrendatario:",
    "options": [
        "Legal, porque sin en el Contrato Arrendador no le prohibió a Arrendatario subarrendar éste lo puede hacer.",
        "Ilegal, porque es contrato fue entre Arrendador y Arrendatario.",
        "Ilegal porque el contrato de arrendamiento es Unilateral.",
        "Legal, porque el arrendatario lo puede hacer siempre, aunque se pacte lo contrario."
    ],
    "answer": "Legal, porque sin en el Contrato Arrendador no le prohibió a Arrendatario subarrendar éste lo puede hacer."
},
// Pregunta 97
{
    "question": "Las partes y el notario acordaron que éste le va a cobrar en honorarios el 1% del valor de la compraventa que es de 546,000 ¿Calcule los Honorarios de la escritura Original de Compraventa?",
    "options": [
        "2,000",
        "4,000",
        "5,895",
        "5,460"
    ],
    "answer": "5,460"
}
   
    ],
    "examen4": [
   
// Pregunta 1
{
    "question": "José ha sido presidente de la Junta de Directores del Condominio sin miedo por 3 años consecutivos. Según la ley de condominios José no podrá ser presidente hasta transcurridos:",
    "options": [
        "2 años desde que ocupó ese puesto",
        "3 años desde que ocupó ese puesto",
        "4 años desde que ocupó ese puesto",
        "Nunca será presidente. Jamás."
    ],
    "answer": "2 años desde que ocupó ese puesto"
},
// Pregunta 2
{
    "question": "Cuál de los siguientes representa un número de catastro digital:",
    "options": [
        "144-018-635-00-000",
        "123-365-1256-35",
        "125-369-364-398-3987-99",
        "126-254-256-985-32-12"
    ],
    "answer": "144-018-635-00-000"
},
// Pregunta 3
{
    "question": "Para que una persona tenga derecho a la ley de hogar seguro (ley 195 del 13 de septiembre de 2011) tiene que:",
    "options": [
        "Estar ocupado por éste o por su familia exclusivamente como residencia principal",
        "Estar ocupado por éste y sus inquilinos exclusivamente como residencia principal",
        "Estar ocupado por sus inquilinos exclusivamente como residencia principal",
        "Estar ocupado por sus vecinos, amigos e inquilinos como residencia principal y segundas compras"
    ],
    "answer": "Estar ocupado por éste o por su familia exclusivamente como residencia principal"
},
// Pregunta 4
{
    "question": "Corredor de Bienes Raíces solicitó a una compañía de rótulos a instalar un rótulo de SE VENDE en la propiedad listada. Sin embargo, el Corredor no pidió permiso al dueño de la propiedad. El Corredor:",
    "options": [
        "No debió pedir permiso ya que era un listado de corretaje",
        "No debió pedir permiso ya que se sobre entiende que el Corredor tiene permiso para rotular según la ley 10 del 1994",
        "Debió solicitar permiso del dueño antes de rotular la propiedad",
        "Tanto el Corredor y el Vendedor de Bienes Raíces tiene permiso para rotular"
    ],
    "answer": "Debió solicitar permiso del dueño antes de rotular la propiedad"
},
// Pregunta 5
{
    "question": "La compraventa de una propiedad será por un financiamiento FHA. Sin embargo, la tasación que se hizo, el Tasador solicitó hacer una serie de reparaciones a la propiedad. Dichas reparaciones serán hechas por:",
    "options": [
        "El Comprador",
        "El Vendedor",
        "El Corredor",
        "Por acuerdo entre las partes"
    ],
    "answer": "El Vendedor"
},
// Pregunta 6
{
    "question": "El corredor y vendedor que trabajan por servicios profesionales deben de pagar por seguro social:",
    "options": [
        "10%",
        "15.3%",
        "14%",
        "7.5%"
    ],
    "answer": "15.3%"
},
// Pregunta 7
{
    "question": "Milagros tiene 6 hijos mayores de edad y otorga un poder duradero donde nombra como apoderado a su hijo José que siempre la cuidaba y la ayudaba en todo. Milagros muere y José habla con sus hermanos para poder vender la propiedad con el poder y éstos dijeron que sí. ¿Puede José vender la propiedad con el poder duradero?",
    "options": [
        "Sí porque el poder que se hizo era uno duradero",
        "Sí porque todos los hermanos se pusieron de acuerdo",
        "No porque José está vivo todavía",
        "No porque se dejó sin efecto con la muerte de Milagros"
    ],
    "answer": "No porque se dejó sin efecto con la muerte de Milagros"
},
// Pregunta 8
{
    "question": "De qué manera se puede buscar una propiedad en el Registro de la Propiedad en Puerto Rico que no sea por número de finca:",
    "options": [
        "Folio",
        "Asiento",
        "Catastro",
        "Nombre del Propietario"
    ],
    "answer": "Catastro"
},
// Pregunta 9
{
    "question": "En un financiamiento el estudio de título tiene una duración de:",
    "options": [
        "15 días",
        "30 días",
        "60 días",
        "90 días"
    ],
    "answer": "30 días"
},
// Pregunta 10
{
    "question": "La Donación en Puerto Rico le impone al Donatario lo siguiente:",
    "options": [
        "Cargas y gravámenes de la propiedad donada",
        "Cargas y gravámenes de otras propiedades",
        "Entregarle al donante dinero en efectivo",
        "Todas las anteriores"
    ],
    "answer": "Cargas y gravámenes de la propiedad donada"
},
// Pregunta 11
{
    "question": "Un Corredor de Bienes Raíces depositó dinero suyo en su cuenta de plica. Según el Reglamento de Ética el Corredor:",
    "options": [
        "Debe mantener una Cuenta Especial (Cuenta de Plica), que no devengue intereses y esté separada de su cuenta personal",
        "Puede depositar dinero suyo en su Cuenta de Plica siempre y cuando la Junta tenga conocimiento",
        "Puede depositar dinero suyo en su Cuenta de Plica siempre y cuando las partes estén de acuerdo",
        "Debe mantener una Cuenta de Plica (Cuenta de Ahorros), que genere intereses y esté separada de su cuenta personal"
    ],
    "answer": "Debe mantener una Cuenta Especial (Cuenta de Plica), que no devengue intereses y esté separada de su cuenta personal"
},
// Pregunta 12
{
    "question": "Si una propiedad está ubicada en dos municipios, ¿en qué sección del Registro la Propiedad se inscribe primero?",
    "options": [
        "Se deberá presentar en la sección del Registro de la Propiedad del municipio que radique la mayor cabida de la propiedad",
        "Se deberá presentar en la sección del Registro de la Propiedad más cercana a la propiedad",
        "Se puede presentar e inscribir en cualquier sección del Registro de la Propiedad",
        "Hay que realizar un expediente de dominio primero en el predio con menos cabida"
    ],
    "answer": "Se deberá presentar en la sección del Registro de la Propiedad del municipio que radique la mayor cabida de la propiedad"
},
// Pregunta 13
{
    "question": "Para un préstamo convencional al 95% LTV el cliente debe de tener en el crédito una empírica de:",
    "options": [
        "600 o más",
        "700 o más",
        "800 o más",
        "900 o más"
    ],
    "answer": "700 o más"
},
// Pregunta 14
{
    "question": "Ricardo Vendedor de Bienes Raíces trabaja para JKL Realty. La información que debe tener en los anuncios y rótulos es la siguiente:",
    "options": [
        "Nombre del Vendedor de Bienes Raíces y número de teléfono",
        "Nombre del Vendedor de Bienes Raíces y número de teléfono",
        "Nombre del Vendedor de Bienes Raíces con su número de licencia, Nombre de JKL Realty y su número de licencia y número de teléfono",
        "Sólo el número de licencia de la compañía"
    ],
    "answer": "Nombre del Vendedor de Bienes Raíces con su número de licencia, Nombre de JKL Realty y su número de licencia y número de teléfono"
},
// Pregunta 15
{
    "question": "Varios herederos se ponen de acuerdo para firmar un contrato de opción de compraventa de una propiedad ubicada en Caguas. Sin embargo, uno de los herederos estaba de vacaciones por Orlando Florida, pero está de acuerdo que se dé la venta. Para que el contrato sea válido:",
    "options": [
        "Hay que esperar que el heredero que está de vacaciones llegue a Puerto Rico porque todos los herederos deben de firmar el contrato para que sea válido",
        "1 sólo heredero puede firmar porque el contrato es un acto de administración",
        "El contrato es válido sin la firma del heredero que está de vacaciones porque al momento de la compraventa estará presente",
        "El contrato es válido porque es una excepción a la ley 10 del 1994"
    ],
    "answer": "Hay que esperar que el heredero que está de vacaciones llegue a Puerto Rico porque todos los herederos deben de firmar el contrato para que sea válido"
},
// Pregunta 16
{
    "question": "El Corredor de Bienes Raíces puso un anuncio de una propiedad a la venta en clasificadosonline.com y expresó, en dicho anuncio, su nombre, número de teléfono, así como su número de licencia de Corredor de Bienes Raíces. Sin embargo, no puso fotos de la propiedad ni la foto suya como Corredor de Bienes Raíces. El anuncio:",
    "options": [
        "Está incorrecto porque debe poner las fotos de la propiedad y la foto suya por ley",
        "Está correcto porque no está obligado a poner fotos de la propiedad ni la foto suya",
        "Está incorrecto porque si no pone las fotos de la propiedad cómo los compradores potenciales podrán ver la propiedad",
        "Todas las anteriores"
    ],
    "answer": "Está correcto porque no está obligado a poner fotos de la propiedad ni la foto suya"
},
// Pregunta 17
{
    "question": "¿Una persona que viva 6 meses en Puerto Rico y 6 meses en Estados Unidos tiene derecho a la exoneración contributiva de su propiedad?:",
    "options": [
        "No. Porque la tiene que vivir sin salir de la propiedad sin excepción",
        "No. Porque la propiedad está en Puerto Rico",
        "Si lo puede hacer en algunos casos",
        "Nunca"
    ],
    "answer": "Si lo puede hacer en algunos casos"
},
// Pregunta 18
{
    "question": "Rosa Corredora anunció una casa para la venta ubicada en Canovanas y en su anuncio dice: “Cerca del Aeropuerto, Farmacias y Escuelas”. En este caso:",
    "options": [
        "El anuncio no está bien porque debió ser más objetiva en el anuncio",
        "El anuncio está correcto y en todo caso todo queda cerca a la propiedad",
        "El anuncio no está bien porque la forma correcta es especificar la distancia en millas, entre el inmueble y el lugar mencionado",
        "En anuncio no está correcto porque debió decir el nombre del Aeropuerto, Farmacias y Escuelas"
    ],
    "answer": "El anuncio no está bien porque la forma correcta es especificar la distancia en millas, entre el inmueble y el lugar mencionado"
},
// Pregunta 19
{
    "question": "Un Corredor de bienes raíces está vendiendo una casa en Caguas y en su anuncio lo hizo de la siguiente manera: SE VENDE Casa espectacular con 4 cuartos, 2 baños, sala, comedor, cocina, terraza, balcón, piscina, 600 mc y marquesina para 2 vehículos. Precio: 200 mil, Tel. 787-1234. Diga si el anuncio está bien:",
    "options": [
        "Está bien el anuncio porque cumple con todo lo requisito de ley",
        "Está mal el anuncio porque debió mencionar su nombre completo y su número de licencia de bienes raíces",
        "Está mal el anuncio porque debió detallar mejor la casa",
        "Ninguna de las anteriores"
    ],
    "answer": "Está mal el anuncio porque debió mencionar su nombre completo y su número de licencia de bienes raíces"
},
// Pregunta 20
{
    "question": "Cuál de los siguientes es un ejemplo de rescisión de contrato:",
    "options": [
        "Cuando se deja sin efecto, mediante declaración judicial, un contrato, como, por ejemplo, por causal existente al momento de celebrar el contrato",
        "Cuando no se deja sin efecto un contrato por las partes otorgantes",
        "Cuando por disposición de ley un contrato se hace jurídico",
        "Todas las anteriores"
    ],
    "answer": "Cuando se deja sin efecto, mediante declaración judicial, un contrato, como, por ejemplo, por causal existente al momento de celebrar el contrato"
},
// Pregunta 21
{
    "question": "Rosa Corredora de Bienes Raíces quiere comprar un apartamento en Luquillo. Sin embargo, Rosa Corredora le dijo al dueño de la propiedad que como ella era Corredora de Bienes Raíces le iba cobrar también un 5% de comisión de la compraventa. Rosa Corredora:",
    "options": [
        "Puede cobrar un 5% de comisión",
        "Puede Comprar la propiedad y cobrar un 5% de comisión porque la ley 10 se lo permite",
        "No puede cobrar comisión y a la misma vez ser parte compradora de la compraventa",
        "No puede cobrar comisión porque si no es con un contrato de corretaje exclusivo"
    ],
    "answer": "No puede cobrar comisión y a la misma vez ser parte compradora de la compraventa"
},
// Pregunta 22
{
    "question": "Una vez que la Junta de Bienes Raíces le expida una licencia de Corredor de Bienes Raíces, ¿Cuántos días tiene para notificar la FIANZA y CUENTA DE PLICA a DACO?:",
    "options": [
        "90 días",
        "60 días",
        "30 días",
        "Dentro de los 4 años de la vigencia de la licencia"
    ],
    "answer": "90 días"
},
// Pregunta 23
{
    "question": "Para que haya una Donación de Bienes Inmuebles se requiere:",
    "options": [
        "Que se haga en Escritura Pública y que el Donatario la acepte",
        "Que se exprese el bien donado, cargas y gravámenes",
        "La aceptación y agradecimiento del Donatario",
        "Todas las anteriores"
    ],
    "answer": "Que se haga en Escritura Pública y que el Donatario la acepte"
},
// Pregunta 24
{
    "question": "El Short Sale:",
    "options": [
        "Se conoce como Venta Previa a la Ejecución de la Hipoteca. Es un acuerdo entre el deudor y el acreedor para aceptar vender la propiedad por menos del total adeudado. Normalmente se les ofrece a los deudores que demuestren no tener la capacidad de retener la propiedad. Este acuerdo debe tener la aprobación previa del acreedor o el Inversionista",
        "Es una Ejecución Hipotecaria",
        "Es cuando se vende la Propiedad en Pública Subasta en el Tribunal y el Banco la adquiere como propiedad reposeída por la mitad del tipo mínimo",
        "Es la entrega voluntaria de una propiedad conocida como DACIÓN EN PAGO"
    ],
    "answer": "Se conoce como Venta Previa a la Ejecución de la Hipoteca. Es un acuerdo entre el deudor y el acreedor para aceptar vender la propiedad por menos del total adeudado. Normalmente se les ofrece a los deudores que demuestren no tener la capacidad de retener la propiedad. Este acuerdo debe tener la aprobación previa del acreedor o el Inversionista"
},
// Pregunta 25
{
    "question": "¿Qué es la Renta sobre nivel de Ventas Prestablecido (Overage Rent – Alquiler excedente)?:",
    "options": [
        "Es un renta o cantidad adicional (sobre un monto base) que paga el Inquilino al propietario sobre las ventas del Inquilino por encima de un monto específico en dólares; que se encuentran con frecuencia en los arrendamientos minoristas. También conocido como alquiler porcentual (alquiler por porcentaje). Este tipo de alquiler se utiliza más en centros comerciales y restaurantes. Todos los presentes sin Convocatoria",
        "Es una Aportación del Arrendador al local que está rentando como por ejemplo hacer mejoras a la misma para un Inquilino particular",
        "Es la Absorción en una propiedad de alquiler definida esta como la forma en que los inversionistas de bienes raíces comerciales miden la demanda de los inquilinos (arrendatarios) y se mide en pies cuadrados. La absorción total es el total de pies cuadrados nuevos arrendados por los inquilinos",
        "Es la demanda en bienes residenciales"
    ],
    "answer": "Es un renta o cantidad adicional (sobre un monto base) que paga el Inquilino al propietario sobre las ventas del Inquilino por encima de un monto específico en dólares; que se encuentran con frecuencia en los arrendamientos minoristas. También conocido como alquiler porcentual (alquiler por porcentaje). Este tipo de alquiler se utiliza más en centros comerciales y restaurantes. Todos los presentes sin Convocatoria"
},
// Pregunta 26
{
    "question": "¿Cuál de los siguientes es una conducta ética requerida a los Corredores y Vendedores de Bienes Raíces?:",
    "options": [
        "Presentar las ofertas y contraofertas en una forma objetiva y; No rotular propiedad alguna sin la previa autorización de su propietario",
        "Conducir sus negocios de forma que evite controversias con los demás",
        "Obtener compensación de los demás vendedores y los compradores o arrendadores y arrendatarios solamente cuando ambas partes están informadas y lo acepten",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 27
{
    "question": "¿Cuál de los siguientes es una conducta ética requerida a los Corredores de Bienes Raíces en Puerto Rico?",
    "options": [
        "Usar el término “vendido” en rótulos, anuncios o en cualquier forma permitida únicamente cuando se es corredor principal",
        "Mantener a sus clientes informados de los avances que ha realizado en la transacción",
        "Cooperar con otros corredores cuando ello sea en el mejor interés del cliente",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 28
{
    "question": "¿Qué debe hacer un Propietario de un terreno inscrito en el Registro de la Propiedad que construye una Edificación y quiere que conste dicha Edificación en el Registro en la Finca del terreno?",
    "options": [
        "Una affidavit",
        "Una Constancia de Obra Nueva (Acta Notarial de Edificación de Obra Nueva por un Notario)",
        "Un borrador",
        "Una segregación"
    ],
    "answer": "Una Constancia de Obra Nueva (Acta Notarial de Edificación de Obra Nueva por un Notario)"
},
// Pregunta 29
{
    "question": "Según el Reglamento 9101 el Vendedor de Bienes Raíces licenciado debe de tomar como Educación Continua en electivas:",
    "options": [
        "4 créditos de Educación Continua en Electivas",
        "12 créditos de Educación Continua en Electivas",
        "16 créditos de Educación Continua en Electivas",
        "Ninguna de las anteriores"
    ],
    "answer": "4 créditos de Educación Continua en Electivas"
},
// Pregunta 30
{
    "question": "¿Cuál de los siguientes es un Acto Proscrito?",
    "options": [
        "Inducir a una parte en una transacción de bienes raíces a rescindir un contrato válido para hacer uno nuevo con el objeto de beneficiar al Corredor, Vendedor o Empresa de Bienes Raíces",
        "No notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa por escrito y como parte del mismo, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico. El propietario o el prospecto comprador certificará con su firma que ha recibido la orientación de parte del corredor",
        "Ofrecer o continuar ofreciendo una propiedad a la venta, o en arrendamiento, cuando la misma no se encuentre ya disponible, so color de obtener negocios sobre otras propiedades disponibles para realizar algún negocio jurídico. A tales fines, cuando sea final la transacción de compra o de arrendamiento de la propiedad, el corredor tendrá un término máximo de setenta y dos (72) horas para excluir dicha propiedad de cualquier listado de propiedades disponibles o para informar que la misma ya ha sido vendida y/o arrendada",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
      
      // Pregunta 30
{
    "question": "¿Cuál de los siguientes es un Acto Proscrito?",
    "options": [
        "Inducir a una parte en una transacción de bienes raíces a rescindir un contrato válido para hacer uno nuevo con el objeto de beneficiar al Corredor, Vendedor o Empresa de Bienes Raíces",
        "No notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa por escrito y como parte del mismo, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico. El propietario o el prospecto comprador certificará con su firma que ha recibido la orientación de parte del corredor",
        "Ofrecer o continuar ofreciendo una propiedad a la venta, o en arrendamiento, cuando la misma no se encuentre ya disponible, so color de obtener negocios sobre otras propiedades disponibles para realizar algún negocio jurídico. A tales fines, cuando sea final la transacción de compra o de arrendamiento de la propiedad, el corredor tendrá un término máximo de setenta y dos (72) horas para excluir dicha propiedad de cualquier listado de propiedades disponibles o para informar que la misma ya ha sido vendida y/o arrendada",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 31
{
    "question": "¿Cuál de los siguientes es un Acto Proscrito?",
    "options": [
        "Discriminar hacia cualquiera de las partes en una transacción de bienes raíces por razón de raza, color, religión, sexo, incapacidad física o mental, estatus familiar u origen nacional",
        "Previo el otorgamiento de un contrato de corretaje o listado neto, no orientar adecuadamente al cliente sobre el alcance de la transacción y la conveniencia de utilizar los servicios de un tasador profesional",
        "Ocultar deliberadamente información esencial sobre las condiciones de una propiedad, con el ánimo de inducir a una de las partes a concluir la transacción en unos términos que, de conocerlos, no hubiese realizado la transacción o pagado un precio menor",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 32
{
    "question": "¿Cuál de los siguientes es un Acto Proscrito?",
    "options": [
        "No exhibir al público en su lugar de trabajo la licencia expedida por la Junta",
        "En el caso de los Vendedores, representar a otro corredor o empresa que no sea aquella para la cual presta servicios como empleado o contratista independiente, sin el consentimiento de dicho corredor o empresa",
        "En el caso de los Vendedores, aceptar una comisión por servicios prestados de una persona que no sea el corredor o empresa para quien trabaja, sin el consentimiento de las partes y del corredor o empresa para quien trabaja",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 33
{
    "question": "Si una persona que no sabe leer desea comprar una propiedad:",
    "options": [
        "Deberá firmar los documentos con una X",
        "El notario leerá el contrato por el cuál éste será participe",
        "Se debe leer dos veces. Una por un testigo y el notario",
        "Ninguna de las anteriores"
    ],
    "answer": "Se debe leer dos veces. Una por un testigo y el notario"
},
// Pregunta 34
{
    "question": "¿Cuál de los siguientes se deben registrar en DACO cuando se va a vender propiedades fuera de Puerto Rico en Puerto Rico?",
    "options": [
        "El Propietario",
        "El Corredor",
        "El Vendedor y la Empresa",
        "El Propietario, Vendedores, Corredores y Empresas de Bienes Raíces"
    ],
    "answer": "El Propietario, Vendedores, Corredores y Empresas de Bienes Raíces"
},
// Pregunta 35
{
    "question": "El Testamento Abierto:",
    "options": [
        "El testador debe tener 14 años o más",
        "Ante Notario",
        "No requiere testigos instrumentales salvo que el otorgante (testador) o el notario lo solicite",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 36
{
    "question": "El TRID (TILA-RESPA Integrated Disclosures) se implementó para:",
    "options": [
        "Enmendar la ley 10",
        "Agilizar el proceso de compraventa y ayudar al Comprador y Vendedor a entender el proceso del financiamiento",
        "Inscribir los procesos más rápidos en el Registro de la Propiedad",
        "Nada"
    ],
    "answer": "Agilizar el proceso de compraventa y ayudar al Comprador y Vendedor a entender el proceso del financiamiento"
},
// Pregunta 37
{
    "question": "El Contrato de Arrendamiento Comercial Neto significa:",
    "options": [
        "El Inquilino paga el alquiler más el costo adicional del impuesto de la propiedad y los costos de mantenimiento (CAM)",
        "El Inquilino paga el alquiler, impuesto a la propiedad, el seguro de la propiedad",
        "El Inquilino paga el alquiler, el impuesto a la propiedad, seguros y el costo de operación. Los costos de operación pueden incluir el servicio de agua y costos de mantenimiento",
        "Es lo mismo que el Contrato Residencial"
    ],
    "answer": "El Inquilino paga el alquiler, el impuesto a la propiedad, seguros y el costo de operación. Los costos de operación pueden incluir el servicio de agua y costos de mantenimiento"
},
// Pregunta 38
{
    "question": "El distrito de Zonificación que permite actividades comerciales en áreas residenciales es:",
    "options": [
        "R-3",
        "R-2",
        "C-1",
        "C-3"
    ],
    "answer": "C-1"
},
// Pregunta 39
{
    "question": "Jesús Corredor de bienes raíces le consiguió un buen financiamiento en un Banco a Rosa Compradora, pero no le dijo a ella que él era el accionista mayoritario del Banco. ¿Fue ético lo que hizo el Corredor?",
    "options": [
        "No fue ético porque el reglamento de ética dispone: No recomendar a un cliente el uso de los servicios de otra organización en la cual ésta tenga intereses sin divulgar tal interés al momento de hacer su recomendación",
        "Si lo puede hacer",
        "Sí fue ético porque es el accionista mayoritario si lo puede hacer",
        "Sí fue ético porque la ley lo protege"
    ],
    "answer": "No fue ético porque el reglamento de ética dispone: No recomendar a un cliente el uso de los servicios de otra organización en la cual ésta tenga intereses sin divulgar tal interés al momento de hacer su recomendación"
},
// Pregunta 40
{
    "question": "En el caso de Empresa de Bienes Raíces como Sociedad:",
    "options": [
        "Todos los socios deben ser accionistas",
        "Todos los socios, salvo los comanditarios, tienen que ser accionistas",
        "Todos los socios, salvo los comanditarios o miembro deberán ser tenedor individual de licencia de Corredor o Vendedor de Bienes Raíces expedida por la Junta",
        "Se inscribe en el Departamento de Estado"
    ],
    "answer": "Todos los socios, salvo los comanditarios o miembro deberán ser tenedor individual de licencia de Corredor o Vendedor de Bienes Raíces expedida por la Junta"
},
// Pregunta 41
{
    "question": "El derecho a construir sobre el vuelo en un Condominio se conoce como:",
    "options": [
        "Derecho de Sobre elevación",
        "Derecho de Sobre carga",
        "Derecho de Equidad",
        "Derecho a Nivelar"
    ],
    "answer": "Derecho de Sobre elevación"
},
// Pregunta 42
{
    "question": "Un Veterano va a solicitar un préstamo VA y le requieren un Co-deudor. El Co-deudor debe:",
    "options": [
        "Ser Veterano y aplicar",
        "Presentar un Certificado de Elegibilidad",
        "No tiene que ser Veterano",
        "Ser Reservista o miembro de la Guardia Nacional por 6 años mínimo"
    ],
    "answer": "No tiene que ser Veterano"
},
// Pregunta 43
{
    "question": "El Quorum por ley para que haya reunión de la Junta de Bienes Raíces es de:",
    "options": [
        "5",
        "4",
        "3",
        "2"
    ],
    "answer": "3"
},
// Pregunta 44
{
    "question": "La suma de dinero que un prospecto comprador entrega a un Corredor o Vendedor se conoce como:",
    "options": [
        "Depósito de Buena Fe",
        "Fianza de Fidelidad",
        "Seguro",
        "Multa"
    ],
    "answer": "Depósito de Buena Fe"
},
// Pregunta 45
{
    "question": "¿Qué ajustes hace el banco para aumentar su rendimiento en la venta del préstamo a un inversionista secundario?:",
    "options": [
        "Puntos de Descuentos",
        "Tasa de Interés anual",
        "Good Faith Estimate",
        "Ninguna de las anteriores"
    ],
    "answer": "Puntos de Descuentos"
},
// Pregunta 46
{
    "question": "Milagros tiene una residencia principal con exoneración contributiva. Milagros construyó un segundo piso como unidad independiente. Milagros tiene derecho a:",
    "options": [
        "No tiene derecho a la exoneración contributiva en la propiedad del segundo piso porque ésta no es parte de su residencia principal",
        "El segundo piso tiene exoneración contributiva",
        "Ninguna de las dos propiedades tiene exoneración contributiva",
        "Las dos tienen exoneración contributiva"
    ],
    "answer": "No tiene derecho a la exoneración contributiva en la propiedad del segundo piso porque ésta no es parte de su residencia principal"
},
// Pregunta 47
{
    "question": "Julio contrata a Javier, que no tiene licencia de bienes raíces, para que éste le venda su propiedad. Acordaron que si Javier le vende la propiedad a Julio éste le pagaría una comisión de $5,000. A quien van a penalizar:",
    "options": [
        "Se va a penalizar sólo a Julio por ofrecerle dinero a Javier",
        "Se va a penalizar a Julio y a Javier (a los dos) por la ley 10 (1994)",
        "Se penaliza sólo a Javier",
        "No se penaliza a ninguno porque es un acuerdo entre las partes y es válido"
    ],
    "answer": "Se va a penalizar a Julio y a Javier (a los dos) por la ley 10 (1994)"
},
// Pregunta 48
{
    "question": "La persona que sufra pérdida o daño debido a cualquier acción u omisión por parte de un Corredor, Vendedor o Empresa de Bienes Raíces, podrá establecer una acción solicitando la indemnización por la pérdida o daño sufrido contra:",
    "options": [
        "Junta de Bienes Raíces",
        "El Corredor de Bienes Raíces y el seguro del Fondo",
        "El Vendedor de Bienes Raíces y el DACO",
        "La Compañía aseguradora directamente, contra el Corredor, Vendedor o Empresa de Bienes Raíces o contra ambos"
    ],
    "answer": "La Compañía aseguradora directamente, contra el Corredor, Vendedor o Empresa de Bienes Raíces o contra ambos"
},
// Pregunta 49
{
    "question": "Los parámetros de cualificación en un préstamo VA son:",
    "options": [
        "29% y 41%",
        "28% y 36%",
        "31% y 43%",
        "100%"
    ],
    "answer": "29% y 41%"
},
// Pregunta 50
{
    "question": "¿Quién puede ser administrador interino en la Ley de Condominios?:",
    "options": [
        "El Corredor de Bienes Raíces",
        "Un Vendedor de Bienes Raíces",
        "El Titular o Titulares que sometan el Inmueble al Régimen tendrán la Administración Inicial",
        "El Banco"
    ],
    "answer": "El Titular o Titulares que sometan el Inmueble al Régimen tendrán la Administración Inicial"
},
// Pregunta 51
{
    "question": "¿Cuándo comienza la Administración Interina en la Ley de Condominios?",
    "options": [
        "Tan pronto se venda un apartamento comenzará la Administración Interina",
        "Tan pronto se venda todos los apartamentos comenzará la Administración Interina",
        "Cuando el Banco lo decida",
        "Se puede comenzar cuando quiera"
    ],
    "answer": "Tan pronto se venda un apartamento comenzará la Administración Interina"
},
// Pregunta 52
{
    "question": "Los permisos de uso necesarios para establecer un negocio en una propiedad ya terminada son:",
    "options": [
        "Permiso de uso",
        "Endoso de bomberos",
        "Endoso de salud ambiental, Certificación de exclusión categórica",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 53
{
    "question": "¿Qué significa Propiedad Reposeída?",
    "options": [
        "Propiedad adquirida por un Acreedor (Institución) en una venta en Pública Subasta",
        "El Foreclosure",
        "La participación a VIVA voz",
        "La modificación de la hipoteca"
    ],
    "answer": "Propiedad adquirida por un Acreedor (Institución) en una venta en Pública Subasta"
},
// Pregunta 54
{
    "question": "El sueldo anual del Director Administrativo del Registro de la Propiedad será:",
    "options": [
        "De un 5% adicional sobre el sueldo del Registrador de la Propiedad",
        "De un 10% adicional sobre el sueldo del Registrador de la Propiedad",
        "De un 15% adicional sobre el sueldo del Registrador de la Propiedad",
        "De un 20% adicional sobre el sueldo del Registrador de la Propiedad"
    ],
    "answer": "De un 10% adicional sobre el sueldo del Registrador de la Propiedad"
},
// Pregunta 55
{
    "question": "La Ley de CondoHoteles en Puerto Rico es:",
    "options": [
        "La Ley núm. 249 del 12 de agosto de 2008",
        "La Ley Núm. 204 de 28 de diciembre de 2016",
        "La Ley de Condominios",
        "La Ley de Control de Acceso"
    ],
    "answer": "La Ley Núm. 204 de 28 de diciembre de 2016"
},
// Pregunta 56
{
    "question": "La Ley de Propiedad Vacacional de Puerto Rico (Time-Shares (Tiempo Compartido) es:",
    "options": [
        "La Ley núm. 249 del 12 de agosto de 2008",
        "La Ley Núm. 204 de 28 de diciembre de 2016",
        "La Ley de Condominios",
        "La Ley de Control de Acceso"
    ],
    "answer": "La Ley núm. 249 del 12 de agosto de 2008"
},
// Pregunta 57
{
    "question": "El Procedimiento de la Subasta Judicial es:",
    "options": [
        "Se celebra una Primera Subasta por el Tipo Mínimo que será el Precio acordado entre los contratantes en la escritura de hipoteca y no admitirá ninguna oferta más baja. Si no se adjudica la Primera Subasta, se celebra una Segunda Subasta, pero el precio de venta de la propiedad es 2/3 partes del Precio fijado para la Primera Subasta. De no producirse la adjudicación en la Segunda Subasta, se celebra una Tercera Subasta, pero, en esta ocasión, el precio de venta de la propiedad es la mitad (1/2) del precio fijado para la Primera subasta. Si la Tercera Subasta se declara desierta se adjudica la propiedad a favor del Acreedor por la totalidad de la cantidad adeudada",
        "Un procedimiento en DACO",
        "Un procedimiento de modificación de hipoteca",
        "Un procedimiento en OgPE"
    ],
    "answer": "Se celebra una Primera Subasta por el Tipo Mínimo que será el Precio acordado entre los contratantes en la escritura de hipoteca y no admitirá ninguna oferta más baja. Si no se adjudica la Primera Subasta, se celebra una Segunda Subasta, pero el precio de venta de la propiedad es 2/3 partes del Precio fijado para la Primera Subasta. De no producirse la adjudicación en la Segunda Subasta, se celebra una Tercera Subasta, pero, en esta ocasión, el precio de venta de la propiedad es la mitad (1/2) del precio fijado para la Primera subasta. Si la Tercera Subasta se declara desierta se adjudica la propiedad a favor del Acreedor por la totalidad de la cantidad adeudada"
},
// Pregunta 58
{
    "question": "La función principal del Registrador es:",
    "options": [
        "Autorizar documentos que se presenten en el Registro",
        "Verificar e investigar los documentos que se presenten en el Registro",
        "Inspeccionar los documentos que se presenten en el Registro",
        "Calificar los documentos que se presenten en el Registro"
    ],
    "answer": "Calificar los documentos que se presenten en el Registro"
},
// Pregunta 59
{
    "question": "El Registrador de la Propiedad notificó una falta a Rafael Guillermo de la Escritura de Compraventa que presentó. Rafael Guillermo tiene:",
    "options": [
        "50 días para corregir la falta",
        "60 días para corregir la falta",
        "70 días para corregir la falta",
        "120 días para corregir la falta"
    ],
    "answer": "60 días para corregir la falta"
},
// Pregunta 60
{
    "question": "El Registrador de la Propiedad notificó una falta a Rafael Guillermo de la Escritura de Compraventa que presentó. Rafael Guillermo tiene derecho a presentar:",
    "options": [
        "Demanda en daños y perjuicios",
        "Injuction",
        "Escrito de Recalificación (Tiene 20 días improrrogables)",
        "Recurso Gubernativo (al Tribunal Supremo) y su decisión final y firme"
    ],
    "answer": "Escrito de Recalificación (Tiene 20 días improrrogables)"
},
// Pregunta 61
{
    "question": "El Geolocalizador es:",
    "options": [
        "Una Herramienta de la Junta de Planificación para evaluación de terrenos. Provee datos sobre catastro, zonas inundables, tipos de suelo, reglamentación, entre otros. Útil para profesionales autorizados (OGPE), tasadores, planificadores, ingenieros, arquitectos y todo proponente ante agencias de regulación y permisos",
        "Es el número de Catastro",
        "Una Herramienta utilizada para inspeccionar Hoteles de Lujo",
        "Ninguna de las anteriores"
    ],
    "answer": "Una Herramienta de la Junta de Planificación para evaluación de terrenos. Provee datos sobre catastro, zonas inundables, tipos de suelo, reglamentación, entre otros. Útil para profesionales autorizados (OGPE), tasadores, planificadores, ingenieros, arquitectos y todo proponente ante agencias de regulación y permisos"
},
// Pregunta 62
{
    "question": "Vendedor y Comprador acuerdan en un contrato que la compraventa de un terreno está sujeta a que OgPe apruebe la segregación de la misma. Determine qué clase de condición fue impuesta en el contrato de compraventa:",
    "options": [
        "Condición Pura",
        "Condición Resolutoria",
        "Condición Suspensiva",
        "Condición Subjetiva"
    ],
    "answer": "Condición Suspensiva"
},
// Pregunta 63
{
    "question": "¿Cuáles son los requisitos de todos los contratos?",
    "options": [
        "Consentimiento, objeto y causa",
        "Consentimiento, Dolo, Violencia e Intimidación",
        "Dolo, Error, Violencia e Intimidación",
        "Residencial, Comercial e Industrial"
    ],
    "answer": "Consentimiento, objeto y causa"
},
// Pregunta 64
{
    "question": "¿El Principio de Especialidad en el Registro de la Propiedad significa?:",
    "options": [
        "Que la propiedad es única y especial en el Registro de la Propiedad",
        "Garantiza Cadena de Dueños sin saltos",
        "Primero en tiempo, Primero en Derecho",
        "Que el Registro es Público"
    ],
    "answer": "Que la propiedad es única y especial en el Registro de la Propiedad"
},
// Pregunta 65
{
    "question": "¿Quién escoge el Notario en una compraventa?",
    "options": [
        "El Vendedor",
        "El Comprador",
        "El Notario",
        "Por acuerdo entre las partes"
    ],
    "answer": "El Comprador"
},
// Pregunta 66
{
    "question": "El Registro de la Propiedad está adscrita administrativamente:",
    "options": [
        "Departamento de Estado",
        "Departamento de Justicia de Puerto Rico",
        "DACO",
        "Registro Demográfico"
    ],
    "answer": "Departamento de Justicia de Puerto Rico"
},
// Pregunta 67
{
    "question": "El Registrador es nombrado por:",
    "options": [
        "El Gobernador con la aprobación del Senado por un término de 12 años",
        "El Gobernador con la aprobación del Senado por ningún término",
        "El Gobernador con la aprobación del Senado por un término de 5 años",
        "El presidente de los EU"
    ],
    "answer": "El Gobernador con la aprobación del Senado por un término de 12 años"
},
// Pregunta 68
{
    "question": "Qué contribuciones no tiene que pagar el Corredor de Bienes Raíces:",
    "options": [
        "CRIM",
        "Hacienda",
        "IRS",
        "Seguro Social"
    ],
    "answer": "Seguro Social"
},
// Pregunta 69
{
    "question": "Por ley la cuenta de plica hay que informársela a:",
    "options": [
        "DACO",
        "Departamento de Estado",
        "DACO y Junta de Bienes Raíces",
        "CRIM"
    ],
    "answer": "DACO y Junta de Bienes Raíces"
},
// Pregunta 70
{
    "question": "Moises fue nombrado como Albacea para vender una propiedad. Sin embargo, Moises tenía su licencia vencida de Corredor de Bienes Raíces. Moises vendió exitosamente la propiedad y cobró el pago por la venta. Moises:",
    "options": [
        "Puede vender la propiedad como Albacea y tiene derecho al pago",
        "No puede vender la propiedad como Albacea",
        "No puede venderla porque independientemente sea Albacea su licencia está vencida",
        "Puede cobrar comisión dos veces más gastos legales por escritura"
    ],
    "answer": "Puede vender la propiedad como Albacea y tiene derecho al pago"
},
// Pregunta 71
{
    "question": "El Documento utilizado en los negocios de bienes raíces para acreditar que un prospecto Comprador visitó una propiedad que está a la venta por un Corredor de Bienes Raíces se conoce como:",
    "options": [
        "Tarjeta de Presentación",
        "Showing Report",
        "Recibo de Negocio Real Estate",
        "Ninguna de las anteriores"
    ],
    "answer": "Showing Report"
},
// Pregunta 72
{
    "question": "Bajo la Ley de Condominios los Condominios Mixtos son:",
    "options": [
        "Condominios residenciales y comerciales",
        "Condominios urbanos, rural (rústico) y propiedad horizontal"
    ],
    "answer": "Condominios residenciales y comerciales"
},
// Pregunta 73
{
    "question": "¿Qué son los Elementos Procomunales bajo la Ley de Condominios?:",
    "options": [
        "Son elementos comunes que se destinen al servicio de más de un titular con exclusión de los demás, tales como pasillos, escaleras y ascensores especiales, servicios sanitarios comunes a los apartamentos de un mismo piso y otros análogos",
        "Son las áreas susceptibles de aprovechamiento independiente, sean apartamentos, estacionamientos o locales, cuya titularidad le haya sido asignada al Consejo de Titulares. Lo serán también las unidades privadas que adquiera el Consejo de Titulares mediante cesión, ejecución en cobro de deudas o por cualquier otro medio legítimo",
        "Son áreas comunales necesarias, voluntarias y específicas bajo el Reglamento de la Ley de Condominios",
        "Ninguna de las anteriores"
    ],
    "answer": "Son elementos comunes que se destinen al servicio de más de un titular con exclusión de los demás, tales como pasillos, escaleras y ascensores especiales, servicios sanitarios comunes a los apartamentos de un mismo piso y otros análogos"
},
// Pregunta 74
{
    "question": "El Consejo de Titulares bajo la Ley de Condominios:",
    "options": [
        "Pueden ser titulares, ocupantes y arrendatarios del Condominio. El Consejo se puede incorporar y no tiene personalidad jurídica",
        "Son todos los titulares de apartamentos en un Condominio. Tiene personalidad jurídica propia y no se puede incorporar o asumir la forma de sociedad",
        "Son todos los Inquilinos que viven en el Condominio",
        "Son todos los residentes y ciudadanos en Puerto Rico"
    ],
    "answer": "Son todos los titulares de apartamentos en un Condominio. Tiene personalidad jurídica propia y no se puede incorporar o asumir la forma de sociedad"
},
// Pregunta 75
{
    "question": "Para que un Condómino se le prive de los Servicios de Agua Potable, Luz, Gas, Teléfono etc. por cuotas de mantenimiento adeudadas tiene que:",
    "options": [
        "Adeudar 2 o más plazos de cuotas, cuotas especiales, derramas, multas con pago vencido de sesenta (60) días o más, o alguna prima vencida del seguro comunal por cualquiera de los apartamentos de los que sea titular",
        "Adeudar 3 o más meses consecutivos de cuotas de mantenimiento",
        "Adeudar 1 mes solamente",
        "Adeudar 2 o más meses por separado de cuotas de mantenimiento"
    ],
    "answer": "Adeudar 2 o más plazos de cuotas, cuotas especiales, derramas, multas con pago vencido de sesenta (60) días o más, o alguna prima vencida del seguro comunal por cualquiera de los apartamentos de los que sea titular"
},
// Pregunta 76
{
    "question": "La Junta de Directores no podrá suspender ningún servicio al Titular Moroso, según dispone la Ley de Condominios, a menos que medie una notificación al titular la cual deberá realizarse con no menos de:",
    "options": [
        "10 días de anticipación",
        "15 días de anticipación",
        "20 días de anticipación",
        "30 días de anticipación"
    ],
    "answer": "30 días de anticipación"
},
// Pregunta 77
{
    "question": "Un titular no podrá votar ni expresarse en una Asamblea cuando:",
    "options": [
        "Adeuden 3 plazos o más de cuotas de mantenimiento o derramas o cuotas especiales o multas vencidas de 60 días o más o prima vencida del seguro comunal",
        "Adeuden 2 plazos o más de cuotas de mantenimiento o derramas o cuotas especiales o multas vencidas de 60 días o más o prima vencida del seguro comunal",
        "Adeuden 4 plazos o más de cuotas de mantenimiento o derramas o cuotas especiales o multas vencidas de 60 días o más o prima vencida del seguro comunal",
        "Siempre podrá votar y expresarse en una Asamblea, aunque deba cuota de mantenimiento"
    ],
    "answer": "Adeuden 2 plazos o más de cuotas de mantenimiento o derramas o cuotas especiales o multas vencidas de 60 días o más o prima vencida del seguro comunal"
},
// Pregunta 78
{
    "question": "Corresponde al Consejo de Titulares autorizar a la Junta de Directores, mediante delegación expresa en el reglamento, para imponer multas al titular, por las violaciones a las normas de convivencia estatuidas en la escritura matriz, la ley o el reglamento cometidas por parte del titular, su ocupante, su residente, su visitante o su suplidor hasta la suma de:",
    "options": [
        "$100",
        "$200",
        "$10,000",
        "1 millón"
    ],
    "answer": "$200"
},
// Pregunta 79
{
    "question": "El Consejo de Titulares podrá nombrar a la Junta de Directores y al Administrador de Condominios por:",
    "options": [
        "Unanimidad",
        "2/3 partes de todos los titulares, que a su vez, reúnan dos terceras (2/3) partes de las participaciones de las áreas comunes",
        "Mayoría",
        "40% del Consejo de Titulares"
    ],
    "answer": "2/3 partes de todos los titulares, que a su vez, reúnan dos terceras (2/3) partes de las participaciones de las áreas comunes"
},
// Pregunta 80
{
    "question": "Según la ley de Condominios, el Poder otorgado por el dueño titular de un apartamento a otra persona para que lo represente en dicha reunión y pueda votar a nombre de dicho titular se llama:",
    "options": [
        "Hipoteca",
        "Mandato",
        "Proxy",
        "Arrendamiento de Servicios"
    ],
    "answer": "Proxy"
},
// Pregunta 81
{
    "question": "En los condominios donde no se logre elegir un Director o una Junta de Directores por no haber personas que puedan o quieran ocupar dichos puestos, cualquier titular podrá acudir al foro competente para solicitar que se designe a un:",
    "options": [
        "Síndico que realice las funciones que le corresponderían al Director o a la Junta",
        "Corredor que realice las funciones que le corresponderían a los miembros de Junta"
    ],
    "answer": "Síndico que realice las funciones que le corresponderían al Director o a la Junta"
},
// Pregunta 82
{
    "question": "Según la ley de condominios el Síndico lo nombra:",
    "options": [
        "El Tribunal o DACO por 6 meses",
        "El DACO solamente"
    ],
    "answer": "El Tribunal o DACO por 6 meses"
},
// Pregunta 83
{
    "question": "El libro donde se detallan las inscripciones que están pendientes de calificar por el Registrador para su inscripción y que no es un libro oficial se conoce como:",
    "options": [
        "Diario de Presentación",
        "Bitácora",
        "Libro de Registro",
        "Registro Mercantil"
    ],
    "answer": "Bitácora"
},
// Pregunta 84
{
    "question": "Ricardo y Linet compraron una casa en común. Acordaron en el contrato de compraventa el 30% y 70% de participación respectivamente. Sin embargo, Linet piensa vender su por ciento de participación a Joshua. ¿Qué derecho si alguno tiene Ricardo?:",
    "options": [
        "Derecho de Tanteo",
        "Derecho de Retracto",
        "Derecho de Propiedad",
        "Derecho Absoluto"
    ],
    "answer": "Derecho de Retracto"
},
// Pregunta 85
{
    "question": "El Corredor vendió una propiedad en 616,000 y cobró 4% de comisión. ¿De cuánto fue su comisión?:",
    "options": [
        "24,640",
        "50,000",
        "24,000",
        "38,600"
    ],
    "answer": "24,640"
},
// Pregunta 86
{
    "question": "La Ley 272 del 2003 dispone:",
    "options": [
        "Que todo dueño que renta a corto plazo (90 días o menos) debe de pagar un impuesto de habitación (room tax) de 7%",
        "Que todo dueño que renta a largo plazo debe de pagar un incentivo contributivo",
        "Que todo dueño que rente por Airbnb debe estar registrado",
        "Que todo dueño no paga nada por rentar"
    ],
    "answer": "Que todo dueño que renta a corto plazo (90 días o menos) debe de pagar un impuesto de habitación (room tax) de 7%"
},
// Pregunta 87
{
    "question": "El estacionamiento en un Condominio puede ser:",
    "options": [
        "Mancomunado",
        "Elemento Común General, Limitado o Privado",
        "Necesario",
        "Solidario"
    ],
    "answer": "Elemento Común General, Limitado o Privado"
},
// Pregunta 88
{
    "question": "Los parámetros de cualificación en un préstamo Convencional son:",
    "options": [
        "29% y 41%",
        "28% y 36%",
        "31% y 43%",
        "100%"
    ],
    "answer": "28% y 36%"
},
// Pregunta 89
{
    "question": "Los directores y gerentes de una Empresa de Bienes Raíces deben ser:",
    "options": [
        "Corredores o Vendedores de Bienes Raíces",
        "No tienen que ser corredores",
        "Abogados",
        "Contables"
    ],
    "answer": "Corredores o Vendedores de Bienes Raíces"
},
// Pregunta 90
{
    "question": "¿Qué es el MLS?",
    "options": [
        "Es el 'Servicio Múltiple de Información de Propiedades Disponibles' - (Multiple Listing Service Program)",
        "Es el servicio de contribuciones",
        "Es el Mortgage Loan Services",
        "Ninguna de las anteriores"
    ],
    "answer": "Es el 'Servicio Múltiple de Información de Propiedades Disponibles' - (Multiple Listing Service Program)"
},
// Pregunta 91
{
    "question": "¿Cuál de los siguientes es o son actos o prácticas proscritas a vendedores, corredores y empresas en la venta de bienes inmuebles localizados fuera de Puerto Rico?:",
    "options": [
        "Ofrecer excursiones en o fuera de Puerto Rico con el único propósito de lograr que las partes compren bienes inmuebles sin antes explicarles a los participantes en tales excursiones que éstas son parte de una campaña de promoción con miras a obtener clientes para la venta directa o indirecta de bienes inmuebles",
        "Ofrecer vender o vender bienes inmuebles utilizando como promoción que dicho inmueble se encuentra ubicado 'cerca de' algún poblado, ciudad o punto de interés determinado, sin especificar la distancia en millas, entre inmueble y el lugar mencionado",
        "No exhibir al público en el lugar de su trabajo el Certificado de Registro que expida el Departamento de Asuntos del Consumidor",
        "Todas las anteriores"
    ],
    "answer": "Todas las anteriores"
},
// Pregunta 92
{
    "question": "Un contrato perfeccionado significa:",
    "options": [
        "Entrega de la cosa",
        "Acuerdo en el precio y en el objeto (Con el mero consentimiento de las partes tanto oral como escrito)"
    ],
    "answer": "Acuerdo en el precio y en el objeto (Con el mero consentimiento de las partes tanto oral como escrito)"
},
// Pregunta 93
{
    "question": "Carlos Comprador adquirió una casa en Bayamón. A los 5 meses, Carlos se percata que el techo se filtraba a tal punto que no se podía vivir. Carlos no sabía de la filtración cuando compró la propiedad ya que no se veía a simple vista. Carlos Comprador tiene derecho a:",
    "options": [
        "Saneamiento por Evicción",
        "Saneamiento por Vicios Ocultos y tiene 6 meses"
    ],
    "answer": "Saneamiento por Vicios Ocultos y tiene 6 meses"
},
// Pregunta 94
{
    "question": "El arrendatario (inquilino) puede rentar a otras personas?",
    "options": [
        "Si, siempre y cuando no se prohíba en el contrato",
        "No"
    ],
    "answer": "Si, siempre y cuando no se prohíba en el contrato"
},
// Pregunta 95
{
    "question": "El Albacea puede vender una propiedad sin ser Corredor de Bienes Raíces?",
    "options": [
        "No",
        "Si. Porque la ley 10 no le aplica"
    ],
    "answer": "Si. Porque la ley 10 no le aplica"
},
// Pregunta 96
{
    "question": "Cuantas veces la Junta da el examen de bienes raíces anual para Corredor y Vendedor?",
    "options": [
        "2 y debe de transcurrir 60 días entre examen",
        "5"
    ],
    "answer": "2 y debe de transcurrir 60 días entre examen"
},
// Pregunta 97
{
    "question": "¿Cuándo entró en vigor la ley 10 de 1994?:",
    "options": [
        "26 de abril de 1994",
        "24 de julio de 1994"
    ],
    "answer": "26 de abril de 1994"
},
// Pregunta 98
{
    "question": "Hipoteca tácita es:",
    "options": [
        "Un impuesto sobre propiedad inmueble",
        "Una exoneración de la propiedad"
    ],
    "answer": "Un impuesto sobre propiedad inmueble"
},
      [
    {
        // 99
        "question": "En un arrendamiento cuando hay que hacer una reparación urgente el Arrendatario tiene derecho a una reducción en la renta cuando:",
        "options": [
            "Pasán más de 50 días",
            "Pasán más de 40 días"
        ],
        "answer": "Pasán más de 40 días"
    },
    {
        // 100
        "question": "Carlos y Pedro son co deudores de una hipoteca. Si Banco va contra Carlos por la totalidad de la deuda, Carlos puede ir contra Pedro para cobrar la mitad de lo que pagó:",
        "options": [
            "Correcto",
            "Incorrecto"
        ],
        "answer": "Correcto"
    },
    {
        // 101
        "question": "El Principio de Legalidad significa:",
        "options": [
            "Todo lo que se presente e inscriba en el Registro de la Propiedad debe cumplir con la ley",
            "Debe haber una cadena de dueño"
        ],
        "answer": "Todo lo que se presente e inscriba en el Registro de la Propiedad debe cumplir con la ley"
    },
    {
        // 102
        "question": "Una propiedad en el Registro de la Propiedad se organiza por:",
        "options": [
            "Finca",
            "Catastro"
        ],
        "answer": "Finca"
    },
    {
        // 103
        "question": "FHA no aprueba lo siguiente:",
        "options": [
            "Ventanas selladas con cemento",
            "Casas habitables"
        ],
        "answer": "Ventanas selladas con cemento"
    },
    {
        // 104
        "question": "La tasación es:",
        "options": [
            "Una opinión de valor",
            "Una conclusión de precio"
        ],
        "answer": "Una opinión de valor"
    },
    {
        // 105
        "question": "Qué es lo que afecta el Mercado en Bienes Raíces:",
        "options": [
            "Las entregas de las propiedades",
            "Oferta y Demanda"
        ],
        "answer": "Oferta y Demanda"
    },
    {
        // 106
        "question": "Cuantos enfoques de valoración hay:",
        "options": [
            "3",
            "2"
        ],
        "answer": "3"
    },
    {
        // 107
        "question": "Qué es el Canvasing?:",
        "options": [
            "El \"canvassing\" o puerta a puerta. Otra forma de lograr un contacto personal con nuevos clientes es el \"canvassing\". Este procedimiento consiste en organizar con otros Corredores o con compañeros de tu oficina recorridos para promocionar tu Negocio o sólo mostrarles a otros Corredores de Bienes Raíces o Clientes las propiedades que usted tiene listada para vender o rentar.",
            "Son los referidos"
        ],
        "answer": "El \"canvassing\" o puerta a puerta. Otra forma de lograr un contacto personal con nuevos clientes es el \"canvassing\". Este procedimiento consiste en organizar con otros Corredores o con compañeros de tu oficina recorridos para promocionar tu Negocio o sólo mostrarles a otros Corredores de Bienes Raíces o Clientes las propiedades que usted tiene listada para vender o rentar."
    },
    {
        // 108
        "question": "Equidad significa:",
        "options": [
            "Participación, interés o valor neto en el mercado que le corresponde al propietario descontando los gravámenes que le afecten",
            "Contrato de Corretaje"
        ],
        "answer": "Participación, interés o valor neto en el mercado que le corresponde al propietario descontando los gravámenes que le afecten"
    },
    {
        // 109
        "question": "El libro donde se presentan los documentos para su inscripción en el Registro de la Propiedad se conoce como:",
        "options": [
            "Diario de Presentación",
            "Bitácora",
            "Libro de Registro",
            "Registro Mercantil"
        ],
        "answer": "Diario de Presentación"
    },
    {
        // 110
        "question": "Cuando el mismo Dueño de Finca #1 y Finca #2 forma 1 sola nueva Finca, eso se conoce como:",
        "options": [
            "Agregación",
            "Agrupación",
            "Segregación",
            "División"
        ],
        "answer": "Agrupación"
    },
    {
        // 111
        "question": "El Principio que protege al Tercero Registral que inscribe de buena fe su derecho en el Registro se conoce como:",
        "options": [
            "Principio de Fe Pública Registral",
            "Principio de Tracto Sucesivo",
            "Principio de Legalidad",
            "Principio de Inscripción"
        ],
        "answer": "Principio de Fe Pública Registral"
    }
]



      
      
    ],
};

    
  

function loadQuestions(topic) {
    questions = allQuestions[topic];
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('container').style.display = 'block';
}

function displayQuestion() {
    let current = questions[currentQuestion];
    questionText.innerHTML = current.question;
    optionsContainer.innerHTML = '';

    // Mezcla las opciones de respuesta
    let shuffledOptions = shuffleArray(current.options);

    shuffledOptions.forEach(option => {
        let button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', (e) => checkAnswer(e, current.answer));
        optionsContainer.appendChild(button);
    });
}

// Función para mezclar un arreglo (Algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(e, correctAnswer) {
    let selectedOption = e.target.innerText;
    if (selectedOption === correctAnswer) {
        e.target.style.backgroundColor = '#4CAF50';
        score++;
    } else {
        e.target.style.backgroundColor = '#FF0000';
        Array.from(optionsContainer.children).forEach(button => {
            if (button.innerText === correctAnswer) {
                button.style.backgroundColor = '#4CAF50';
            }
        });
    }
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
    });
    displayResult();
}

function displayResult() {
    resultText.innerHTML = `Respuestas correctas: ${score} de ${questions.length}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        resultText.innerHTML = '';
        nextButton.style.display = 'none';
    } else {
        showFinalResults();
    }
}

function showFinalResults() {
    questionText.innerHTML = '¡Has completado el cuestionario!';
    optionsContainer.innerHTML = '';
    resultText.innerHTML = `Puntuación final: ${score} de ${questions.length}`;
    nextButton.innerHTML = 'Reiniciar';
    nextButton.onclick = restartQuiz;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.innerHTML = 'Siguiente Pregunta';
    nextButton.onclick = nextQuestion;
    nextButton.style.display = 'none';
    resetOptionButtonStyles();
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('container').style.display = 'none';
}

function resetOptionButtonStyles() {
    Array.from(optionsContainer.children).forEach(button => {
        button.style.backgroundColor = '';
        button.disabled = false;
    });
}

// Manejador de eventos para el botón de volver a la página principal
homeButton.addEventListener('click', function() {
    document.getElementById('container').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
});

nextButton.addEventListener('click', nextQuestion);

// Inicialización
document.getElementById('container').style.display = 'none';
