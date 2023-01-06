import { appImages } from './helpers/appImages';
import './App.css';

export function MaquetaApp() {
    return (
      <div>
        <body class="theme-dark" data-theme-color="#3d3935">
          <main className="main">
          <section className="section initial"> 
            <img className="intro-image" src={appImages("./intro.png")}alt="" />
            <h1 className="title">¿Cuánto cuesta desarrollar mi <strong>app</strong>?</h1>
            <p className="subtitle">Calcula de forma rápida el costo para crear tu app, contestando estas sencillas preguntas.</p>
            <button className="button text-uppercase js--start">Empezar</button>
          </section>


          <section className="section question" data-question-id={1} data-pph="true" style={{display: 'none'}}>
            <h2 className="question-title">¿Qué nivel de calidad estás buscando?</h2>
            <div className="answer-group row-of-3">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={60}> <img className="answer-image js--answer-image" src={appImages("./intro.png")} data-src={appImages("./answer-1-1.png")} alt="Calidad óptima" /> <span className="answer-text">Calidad óptima</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-1-2.png" alt="Buena relación calidad/precio" /> <span className="answer-text">Buena relación calidad/precio</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-1-3.png" alt="No me importa tanto la calidad" /> <span className="answer-text">No me importa tanto la calidad</span> </div>
              </div>
            </div> <span className="text-bold question-progress">1/10</span> <span className="text-bold price-progress js--price-progress">-</span> </section>
          <section className="section question" data-question-id={2} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Qué tipo de App necesitas?</h2>
            <div className="answer-group row-of-4">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={60}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-2-1.png" alt="Aplicación Android" /> <span className="answer-text">Aplicación Android</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={60}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-2-2.png" alt="Aplicación iOS" /> <span className="answer-text">Aplicación iOS</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={60}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-2-3.png" alt="Aplicación Windows Phone" /> <span className="answer-text">Aplicación Windows Phone</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={4} data-answer-weight={100}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-2-4.png" alt="Aplicación Android + iOS" /> <span className="answer-text">Aplicación Android + iOS</span> </div>
              </div>
            </div> <span className="text-bold question-progress">2/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={3} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Qué diseño quieres que tenga tu App?</h2>
            <div className="answer-group row-of-4">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-3-1.png" alt="Interfaz sencilla" /> <span className="answer-text">Interfaz sencilla</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={120}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-3-2.png" alt="Interfaz personalizada" /> <span className="answer-text">Interfaz personalizada</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={80}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-3-3.png" alt="Interfaz replicada de la web" /> <span className="answer-text">Interfaz replicada de la web</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={4} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-3-4.png" alt="No necesito diseño" /> <span className="answer-text">No necesito diseño</span> </div>
              </div>
            </div> <span className="text-bold question-progress">3/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={4} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Cómo quieres sacar beneficio a tu App?</h2>
            <div className="answer-group row-of-4">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={5}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-4-1.png" alt="Aplicación gratuita con publicidad" /> <span className="answer-text">Aplicación gratuita con publicidad</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={5}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-4-2.png" alt="Aplicación de pago" /> <span className="answer-text">Aplicación de pago</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-4-3.png" alt="Compras dentro de la app" /> <span className="answer-text">Compras dentro de la app</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={4} data-answer-weight={10}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-4-4.png" alt="Otros / No lo sé todavía" /> <span className="answer-text">Otros / No lo sé todavía</span> </div>
              </div>
            </div> <span className="text-bold question-progress">4/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={5} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Tu App necesita un sistema de login ?</h2>
            <div className="answer-group row-of-4">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-5-1.png" alt="Sí, con redes sociales y email" /> <span className="answer-text">Sí, con redes sociales y email</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={25}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-5-2.png" alt="Sí, con email" /> <span className="answer-text">Sí, con email</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-5-3.png" alt="No" /> <span className="answer-text">No</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={4} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-5-4.png" alt="No lo sé todavía" /> <span className="answer-text">No lo sé todavía</span> </div>
              </div>
            </div> <span className="text-bold question-progress">5/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={6} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Tu App tiene que estar integrada con un sitio web?</h2>
            <div className="answer-group row-of-3">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-6-1.png" alt="Sí" /> <span className="answer-text">Sí</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-6-2.png" alt="No" /> <span className="answer-text">No</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-6-3.png" alt="No lo sé" /> <span className="answer-text">No lo sé</span> </div>
              </div>
            </div> <span className="text-bold question-progress">6/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={7} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Los usuarios tienen sus propios perfiles?</h2>
            <div className="answer-group row-of-3">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-7-1.png" alt="Sí" /> <span className="answer-text">Sí</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-7-2.png" alt="No" /> <span className="answer-text">No</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-7-3.png" alt="No lo sé" /> <span className="answer-text">No lo sé</span> </div>
              </div>
            </div> <span className="text-bold question-progress">7/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={8} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Tu app necesita un panel de administración?</h2>
            <div className="answer-group row-of-3">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-8-1.png" alt="Sí" /> <span className="answer-text">Sí</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-8-2.png" alt="No" /> <span className="answer-text">No</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-8-3.png" alt="No lo sé" /> <span className="answer-text">No lo sé</span> </div>
              </div>
            </div> <span className="text-bold question-progress">8/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={9} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿Qué idiomas usará tu aplicación?</h2>
            <div className="answer-group row-of-3">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-9-1.png" alt="Un único idioma" /> <span className="answer-text">Un único idioma</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={20}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-9-2.png" alt="Bilingüe" /> <span className="answer-text">Bilingüe</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={40}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-9-3.png" alt="Multilingüe" /> <span className="answer-text">Multilingüe</span> </div>
              </div>
            </div> <span className="text-bold question-progress">9/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section question" data-question-id={10} data-pph="false" style={{display: 'none'}}>
            <h2 className="question-title">¿En qué estado se encuentra tu proyecto?</h2>
            <div className="answer-group row-of-4">
              <div className="col">
                <div className="answer js--answer" data-answer-id={1} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-10-1.png" alt="Sólo es una idea" /> <span className="answer-text">Sólo es una idea</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={2} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-10-2.png" alt="Boceto ya preparado" /> <span className="answer-text">Boceto ya preparado</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={3} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-10-3.png" alt="App en desarrollo" /> <span className="answer-text">App en desarrollo</span> </div>
              </div>
              <div className="col">
                <div className="answer js--answer" data-answer-id={4} data-answer-weight={0}> <img className="answer-image js--answer-image" src="img/app/intro.png" data-src="img/app/answer-10-4.png" alt="App ya desarrollada" /> <span className="answer-text">App ya desarrollada</span> </div>
              </div>
            </div> <span className="text-bold question-progress">10/10</span> <span className="text-bold price-progress js--price-progress">-</span> <span className="link question-previous js--previous">← Anterior</span> </section>
          <section className="section results" style={{display: 'none'}}>
            <p className="intro">¡Bien! ¡Hemos terminado!</p>
            <h3>¡Compártenos si te ha gustado!</h3>
            <div className="results-share">
              <div id="share" data-url="https://www.cuantocuestamiapp.co" data-facebook="Share" data-twitter="Tweet" data-twitter_text="Calcula de forma sencilla el coste para crear una #App con @Yeeply_ES. Obtén un #presupuesto estimado al instante en" data-linkedin="LinkedIn" data-google="Google +" />
            </div>
            <h2>El costo estimado de tu app es<br />
              <span className="claim">
                <span className="js--total-price">-</span>
              </span>
            </h2>
            <div className="results-container">
              <p><span className="link js--toggle-results">Editar respuestas</span></p>
              <ul className="results-summary js--results-summary">
                <li className="result js--result" data-question-id={1}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Qué nivel de calidad estás buscando?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={2}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Qué tipo de App necesitas?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={3}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Qué diseño quieres que tenga tu App?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={4}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Cómo quieres sacar beneficio a tu App?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={5}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Tu App necesita un sistema de login ?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={6}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Tu App tiene que estar integrada con un sitio web?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={7}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Los usuarios tienen sus propios perfiles?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={8}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Tu app necesita un panel de administración?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={9}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿Qué idiomas usará tu aplicación?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
                <li className="result js--result" data-question-id={10}> <img className="result-image js--result-image" src="img/app/answer-1-1.png" alt="" />
                  <div className="result-body"> <span className="result-question">¿En qué estado se encuentra tu proyecto?</span> <span>
                      <b className="result-answer js--result-answer" />&nbsp;
                      <span className="result-change js--change">Cambiar</span> </span>
                  </div>
                </li>
              </ul>
            </div>
            <p>En Yeeply seleccionamos los mejores <strong>desarrolladores de apps y webs</strong> para tu proyecto. Publica tu proyecto en Yeeply o mira algunos de nuestros <a href="https://www.yeeply.com/clientes?utm_source=CCMA-CO&utm_medium=stories&utm_campaign=microsites" rel="nofollow">casos de éxito</a>.</p> <a className="button js--start-project ypOpenPublishProjectModal" href="javascript:void(0)" rel="nofollow">
              Crea tu proyecto
            </a> 
            <span className="link results-restart js--restart">← Volver a empezar</span> </section>
          <div className="more more-info">
            <div className="full-more-info">
              <section className="more-content">
                <h2>¿Cuánto cuesta hacer una app?</h2>
                <p>¿Te estás preguntando cuánto valdría crear tu aplicación? ¡Entonces estás en el lugar adecuado! Esta es una herramienta digital impulsada por Yeeply que puedes utilizar, de forma totalmente gratuita, para <strong>calcular el costo de tu aplicación</strong>.</p>
                <p>Es muy sencilla de utilizar. En primer lugar, pulsa sobre el botón de "Calcular coste". A continuación deberás responder a algunas preguntas con detalles de la aplicación que tienes en mente. En total te llevará alrededor de un minuto y como resultado obtendrás un <strong>presupuesto aproximado para el desarrollo de tu aplicación.</strong></p>
                <p>Sin embargo, recuerda que este resultado será solo una estimación, ya que hay muchos factores que afectarán al precio final de tu app. Por ejemplo, no es lo mismo crear una <b>aplicación nativa</b> que crear una <b>app multiplataforma</b> o una <b>web app</b>.</p>
                <p>¡Queremos ayudarte a tomar la decisión acertada! Por eso sigue leyendo para repasar algunos elementos que afectan al precio de tu aplicación.👇</p>
                <h2>Factores que influyen en el costo de una app</h2>
                <p>Ten en cuenta todos los factores de esta lista a la hora de <strong>calcular cuánto cuesta hacer una app</strong>:</p>
                <ul>
                  <li><b>Funcionalidades</b>: cuanto más compleja sea tu app, más costosa será de desarrollar. Por ejemplo, si quieres añadir a tu aplicación un sistema de mensajería, como un chat en tiempo real con contenido multimedia, o un registro que permita hacer login mediante email o redes sociales, seguramente te acabe saliendo más caro. Por eso valora en un primer momento qué funcionalidades son importantes y cuáles pueden esperar a próximas revisiones de la aplicación.</li>
                  <li><b>Calidad</b>: una app con muchos detalles es una app que necesitará más trabajo por parte de los/las desarrolladores/as. Puede merecer la pena si quieres que tu aplicación se vea bien, pero ten en cuenta que esto tendrá un coste.</li>
                  <li><b>Tiempo</b>: ¿para cuándo necesitas tener lista tu aplicación? ¿Vas a ser flexible con la fecha de entrega? Si se trata de un proyecto urgente que necesitas tener listo para una fecha concreta, es posible que el precio sea más alto. Cuanto más flexible seas con la fecha de entrega, más económico será el proyecto.</li>
                  <li><b>Costo del lanzamiento</b>: si tu aplicación no es una aplicación interna y se dirige al consumidor final, tendrás que encargarte de que este la encuentre. ¡Subirla a la App Store o Google Play Store no siempre es suficiente! Necesitarás una estrategia de marketing para dar visibilidad a tu app y realizar una campaña de ASO. Esto, por supuesto, tiene un costo que debes tener en cuenta.</li>
                  <li><b>Costo de mantenimiento</b>: incluso cuando tu aplicación esté terminada seguirás necesitando algo de apoyo técnico. Piensa que el mundo de la tecnología móvil avanza muy rápido y tu aplicación no puede quedarse anticuada. Por ello seguramente necesitarás contratar un servicio de mantenimiento por bolsa de horas que te ayudará a adaptar tu app a los nuevos dispositivos, nuevos tamaños de pantalla, nuevos hardwares… También se encargará de resolver cualquier fallo que surja.</li>
                  <li><b>Otros costes adicionales</b>: como, por ejemplo, el costo de subir la aplicación a los marketplaces de descarga. Para la App Store de iOS tendrás que pagar una cuota anual mientras en la Play Store solo hará falta que realices un pago único para cada app que subas.</li>
                </ul>
                <h2>Cuánto cuesta crear un app según el tipo de desarrollo</h2>
                <p>Cuando empieces a hablar con un equipo de desarrollo estos te plantearán varias opciones para el diseño de tu app. Existen tres tipos de desarrollo que debes conocer:</p>
                <ul>
                  <li><b>Aplicación nativa</b>. Estas apps están desarrolladas específicamente para un sistema operativo, como iOS, Android o Windows. Suelen tener un buen rendimiento porque están hechas a medida. El inconveniente es que, si quieres que tu aplicación funcione en varios sistemas operativos tendrás que preparar un desarrollo para cada uno de ellos. Esto engordará el presupuesto de tu aplicación.</li>
                  <li><b>Aplicación multiplataforma</b>. En este caso, la aplicación se podría utilizar en cualquier sistema operativo, ya que el código está preparado para ello. El inconveniente de este tipo de apps es que tienen un acceso limitado al hardware (como por ejemplo la cámara o el GPS) y suelen ser un poco más lentas. Como ventaja, al necesitar sólo un código el desarrollo es más rápido y menos costoso.</li>
                  <li><b>Web app</b>. Este último tipo de aplicación también funciona en varios dispositivos ya que se carga a través de un navegador de internet. Debido a esto no es necesario descargarla. De la misma manera que sucede con las apps multiplataforma, estas aplicaciones pueden tener un acceso limitado al hardware del dispositivo.</li>
                </ul>
                <p>Cada una de estas tres opciones tiene sus ventajas y desventajas y, por supuesto, un costo de desarrollo muy diferente. No existe una opción correcta: deberás elegir la que mejor se adapte a tus necesidades.</p>
                <p>Por ejemplo, si tu aplicación va a ser utilizada por muchos usuarios lo mejor será que crees una <b>app nativa</b>, aunque su coste sea un poco más elevado; mientras que si va a ser utilizada por menos usuarios, como sucedería con una app interna para una empresa, puedes optar por una <b>app multiplataforma</b>.</p>
                <h2>Cuánto cuesta desarrollar una app según el sistema operativo</h2>
                <p>Otra decisión que deberás tomar a la hora de desarrollar una app para mejorar tu negocio es en qué <b>sistema operativo</b> quieres que se muestre.</p>
                <p>El costo de tu app será diferente dependiendo de si está creada para <b>iOS, Android o Windows Phone</b>. También será muy diferente si decides que tu aplicación debe verse en varios sistemas operativos. Si todavía no tienes esta decisión tomada, no te preocupes: lo mejor es que hables con un experto para que te aconseje.</p>
                <p>¿Nuestra recomendación? Que apuestes por un desarrollo que <b>se adapte a cualquier sistema operativo</b>. Aunque el gasto pueda ser un poco más elevado, si piensas en el largo plazo te acabará saliendo rentable. Esto es porque es más económico hacer este desarrollo para varias plataformas al principio que tener que hacerlos más adelante y por separado.</p>
                <p>El precio por hora de un/a desarrollador/a no es el mismo para cualquier sistema operativo. Actualmente, <b>es más costoso contratar a un/a desarrollador/a nativo para iOS</b> que este mismo perfil para Android ya que el precio medio que cobran por hora de trabajo es más elevado. Además, para cualquiera de los dos casos el desarrollo será más costoso si lo realizas a través de una empresa de desarrollo en vez de con un/a freelancer.</p>
                <h2>¿Cuál es el plazo estimado para desarrollar una aplicación?</h2>
                <p><b>Desarrollar una aplicación no es cuestión de días</b>. Como ya te habrás dado cuenta con todo lo que hemos explicado, primero debes tomar muchas decisiones (tipo de desarrollo, tipo de app, sistema operativo…). Cuando todo esto esté claro, podrás pasar a la fase de diseño y trabajar mockups y wireframes. Estos materiales pasarán después a manos del equipo de desarrollo. En este punto se iniciará la programación de la aplicación, que finalizará cuando se superen las fases de pruebas y corrección de fallos.</p>
                <p>El tiempo medio de desarrollo de una aplicación es de <b>18 semanas</b>, aunque esto es solo una estimación. Cada aplicación es un mundo.</p>
                <p>Por eso, lo mejor es que hables de forma clara con tu equipo de desarrollo si tienes una fecha límite que deben respetar. Deja claro que esa fecha de entrega es fundamental para que ellos/as puedan organizar un <b>calendario de entregas</b> que te será muy útil para hacer seguimiento y asegurarte de que cada fase del proyecto se completa dentro del tiempo previsto.</p>
                <h2>¿Es una buena idea ofrecer tu app de forma gratuita?</h2>
                <p>Si estás creando una app para el consumidor final (en vez de una app interna, por ejemplo), seguro que te has parado a pensar en su monetización. Empieza por <b>analizar a fondo a tus competidores</b> y ver qué están haciendo.</p>
                <p>¿Qué pasa si tus competidores ofrecen una app similar de forma gratuita? Si este es tu caso, la mejor opción es que tú también lo hagas para tener más posibilidades de descarga. Existen otras maneras para monetizar tu app como, por ejemplo, <b>a través de anuncios publicitarios</b>.</p>
                <p>Pero si finalmente decides cobrar por la descarga de tu app, asegúrate de que este cobro está justificado. Deja muy claro en la descripción del market los beneficios que se obtienen con ese pago y asegúrate de poner un precio justo.</p>
                <h2>Beneficios de hacer un app para tu negocio</h2>
                <p>Existen muchas razones por las cuales puedes lanzarte a hacer una app para tu negocio. Estas son algunas:</p>
                <ul>
                  <li>Un app es la mejor solución si tu clientela necesita <b>reservar una cita</b> contigo para ser atendidos. No perderás tu tiempo atendiendo llamadas telefónicas, ganarás tiempo y te hará el trabajo mucho más fácil.</li>
                  <li>Si tu negocio requiere de una <b>gestión interna</b> a través de diversas herramientas o en papel una app es muy buena idea para <b>coordinar tu empresa</b> de manera centralizada y sencilla.</li>
                  <li>Otra razón es que necesitas un app para dar <b>valor añadido</b> a tus usuario y/o negocio.</li>
                </ul>
                <h3>¿Puede ser una app la solución a alguno de mis problemas?</h3>
                <p>Rotundamente sí. Las apps nos acompañan constantemente desde hace años. En nuestras casas disponemos por lo menos de un aparato inteligente. Esto convierte a las aplicaciones en un <b>canal directo de comunicación</b> entre negocios y clientes potenciales. Por esta razón debes aprovechar su apogeo.</p>
                <h3><a href="https://www.yeeply.com/blog/cuando-necesita-empresa-aplicacion-movil/?utm_source=CCMA-CO&utm_medium=modal&utm_campaign=microsites" target="_blank" rel="nofollow">¿Cómo sé si mi empresa necesita un app?</a></h3>
                <p>Si quieres que tu empresa vaya sobre ruedas, en primer lugar debes descubrir cuáles son sus <b>puntos débiles</b>. Es posible que descubras que una app puede ser la solución para alguno de ellos.</p>
                <p>Para empezar, realiza un <b>estudio de la competencia</b> sin pensar en el costo que tiene la aplicación móvil. Comprueba, por ejemplo, si disponen de apps para trabajar en diferentes servicios que todavía se gestionan de manera offline.</p>
                <p>En estos momentos, tenemos la posibilidad de adquirir una gran cantidad de aplicaciones para la gestión y una <b>aplicación móvil personalizada</b> puede dar valor a tu negocio. Esta primera fase de análisis te aportará una mejor definición para cualquier proyecto y de esta manera el presupuesto necesario de la aplicación móvil será más válido.</p>
                <p>En función de tu problema, estarás buscando una u otra solución. <b>Te presentamos algunas de las soluciones</b> para que puedan valerte como ejemplo y que puedes leer en el siguiente <a href="https://www.yeeply.com/blog/que-app-para-empresas-te-conviene/?utm_source=CCMA-CO&utm_medium=modal&utm_campaign=microsites" target="_blank" rel="nofollow">artículo del blog de Yeeply</a>.</p>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <h3>PROBLEMA DETECTADO</h3></th>
                      <th>
                        <h3>TIPO DE APP / SOLUCIÓN</h3></th>
                      <th>
                        <h3>OBJETIVO A LOGRAR</h3></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gestión de informes lenta</td>
                      <td>Apps de gestión</td>
                      <td>Gestionar los informes</td>
                    </tr>
                    <tr>
                      <td>Compras abandonadas y visitas breves en dispositivos móviles</td>
                      <td>Apps m-commerce</td>
                      <td>Aumentar ventas desde dispositivos móviles</td>
                    </tr>
                    <tr>
                      <td>Organización de turnos y vacaciones poco eficiente</td>
                      <td>Comunicación interna</td>
                      <td>Organización más efectiva</td>
                    </tr>
                    <tr>
                      <td>Comunicaciones internas lentas y en diferentes canales</td>
                      <td>Mensajería instantánea</td>
                      <td>Comunicación centralizada y homogénea</td>
                    </tr>
                    <tr>
                      <td>Pocos clientes vuelven a comprar por segunda vez</td>
                      <td>Fidelización de usuarios</td>
                      <td>Conseguir clientes recurrentes</td>
                    </tr>
                    <tr>
                      <td>Generación de facturas a clientes lenta</td>
                      <td>Servicio complementario a clientes</td>
                      <td>Enviar automáticamente facturas a los clientes</td>
                    </tr>
                    <tr>
                      <td>La marca no se percibe como moderna o innovadora</td>
                      <td>App de Branding</td>
                      <td>Mejorar la imagen de marca, más innovadora y móvil</td>
                    </tr>
                    <tr>
                      <td>Necesidad de formar a los trabajadores continuamente</td>
                      <td>App de formación interna</td>
                      <td>Cursos breves a través de la app para formar a los trabajadores</td>
                    </tr>
                    <tr>
                      <td>Otro problema detectado</td>
                      <td>Consultoría para encontrar una solución a medida</td>
                      <td>Crear una app o proyecto móvil a medida</td>
                    </tr>
                  </tbody>
                </table>
                <h2>Opciones para hacer una app</h2>
                <p>¿Te queda algo más clara la forma de desarrollo que te interesa para tu aplicación y sabes cuánto cuesta crear una app aproximadamente? Si la respuesta es afirmativa, quizás ha llegado el momento de ponernos en marcha con el siguiente paso: <b>comenzar con tu proyecto de aplicación móvil</b>.</p>
                <p>En internet encontrarás diferentes <b>herramientas para hacer apps de forma gratuita y fácil</b>, pero el problema es que el resultado final no es ni mucho menos profesional —aunque para un primer prototipo de tu idea puede valerte—.</p>
                <p>Si de verdad necesitas un app móvil para tu negocio y sacar rentabilidad a tu tiempo y tu dinero, <b>la mejor opción es dejarlo en manos de profesionales</b>. Te mostramos tres opciones, pero en primer lugar te explicaremos los diferentes perfiles de profesionales que trabajan en la creación de una aplicación móvil.</p>
                <p>Ya te hemos explicado lo importante que es disponer de los/las mejores desarrolladores/as para la elaboración de tu proyecto, pero para nada es el único perfil que formará parte en la elaboración completa de tu aplicación.</p>
                <p>En primer lugar, el <b>equipo de diseño</b> desarrollará el aspecto visual de la app antes de mandarlo al equipo de desarrollo. No solo se encargará del aspecto gráfico de la app. Además trabajará la interfaz de usuario (<b>UI</b>) y la usabilidad (<b>UX</b>) para garantizar que todo fluya correctamente en la versión final de la aplicación móvil. Existen grandes profesionales y cualificados que están específicamente especializados en estas dos áreas.</p>
                <p>Posteriormente, cuando el diseño esté finalizado, pasará al siguiente nivel con el <b>equipo de desarrollo</b>. ¡Un mismo desarrollador/a no puede hacer cualquier tipo de app! Los lenguajes de programación son muy diferentes entre sí. Así que en función del tipo de app móvil que necesitas para tu proyecto lo mejor es buscar al desarrollador/a adecuado/a para este.</p>
                <p>Por último, tal y como hablamos anteriormente, deberás disponer de una estrategia de marketing estudiada, si tu app es B2C, para lograr que tus potenciales clientes descarguen la aplicación. En este momento necesitarás un <b>equipo de marketing</b>, especialistas en ASO, SEM, SEO, campañas...</p>
                <p><b>¿En qué lugar se encuentran estos perfiles?</b> Ahora te mostraremos tres diferentes cada uno de los cuales, tal y como comprobarás, te mostrarán diferentes presupuestos.</p>
                <h3>Opción 1: Freelance</h3>
                <p>La opción idónea puede ser este perfil si tu proyecto no es de gran escala, en varias plataformas online puedes encontrar <b>diferentes profesionales freelance</b> que, además, dispondrán de referencias de clientes que han trabajado y depositado su confianza en ellos.</p>
                <p>Es posible que tenga <b>menos costo</b> una app desarrollada por un/a freelance, pero también puedes encontrarte con muchas desventajas. Por una parte, existe una alta competencia entre profesionales en este sector de desarrollo. Por otra, los presupuestos que elaboran suelen ser bajos, para que te resulten atractivos, y finalmente lo pagues con la calidad final de tu proyecto de aplicación móvil.</p>
                <p>Otro problema que te surgirá si necesitas de varios profesionales para tu proyecto...<b>¿Cómo pretendes coordinarlos a todos?</b> ¿Van a entenderse entre ellos? ¿Puedes asumir todo el trabajo necesario para coordinarlos tú mismo? Si no tienes tiempo para ello, no te preocupes, tenemos otras dos opciones.</p>
                <h3>Opción 2: Agencia desarrolladora de apps</h3>
                <p>Las agencias desarrolladoras de apps están especializadas en productos tecnológicos como el que quieres crear y, por ello, <b>disponen de todos los perfiles necesarios que necesitas</b>. Este tipo de agencias tienen un coste mucho mayor que la anterior opción, contratar a un freelance, pero tienen algunas ventajas.</p>
                <p>En primer lugar, siempre estarás desde el primer momento con el <b>mismo proveedor</b>. Esto te proporcionará más tiempo para supervisar el proyecto por completo, será cómodo y te permitirá estar más centrado en todas la fases del proceso. Su experiencia es fácilmente validable (¡solicítales trabajos anteriores de apps móviles que hayan desarrollado!).</p>
                <p>El <b>presupuesto elevado</b> que presentan estas agencias es el principal inconveniente y no suelen ser muy flexibles, así que cualquier modificación que necesites en tu proyecto no te resultará económica.</p>
                <h3>Opción 3: Marketplace</h3>
                <p>Los marketplaces son un tipo de sitio web en la que puedes encontrar servicios tecnológicos y <b>subcontratar a uno o más equipos</b> para la elaboración completa de tu proyecto sin preocuparte de nada. Yeeply es un buen ejemplo de marketplace, así es cómo funciona:</p>
                <ul>
                  <li><b>Publica tu proyecto</b>, con todos los detalles que te sea posible.</li>
                  <li>Estudiando tus necesidades al completo, plazos y presupuesto incluidos, contactaremos con el <b>equipo adecuado</b> para ti y te conectaremos con él.</li>
                  <li>Una vez esté claro tu proyecto y estés de acuerdo con tu equipo asignado, te harán llegar una <b>propuesta económica</b>. Si se adapta a tus necesidades, ¡comenzaréis a trabajar juntos! Si de lo contrario no ha sido posible un acuerdo, solicitaremos un presupuesto a un equipo diferente.</li>
                </ul>
                <p>La mayor de las ventajas de dejarlo todo en manos de Yeeply es que no tendrás que preocuparte de nada. No perderás el tiempo en buscar al mejor equipo ya que todos nuestros profesionales tienen un <b>proceso de certificación</b>. Nuestra forma de trabajo hará que conectes con los mejores profesionales que necesitas para tu proyecto.</p>
                <p>Con Yeeply trabajarás con <b>profesionales de cualquier especialidad</b> y todo ello con un solo socio. La variedad y deslocalización de los profesionales de nuestra plataforma nos facilita ofrecerte el presupuesto adaptado a tus necesidades.</p>
                <h2>¿Cómo empezar tu proyecto con Yeeply?</h2>
                <p>¿Estás preparado para comenzar? Cuéntanos lo que necesitas para poner en marcha tu proyecto de app en el siguiente <a href="https://www.yeeply.com/?utm_source=CCMA-CO&utm_medium=modal&utm_campaign=microsites#publish-project" target="_blank" rel="nofollow">enlace</a>. Simplemente necesitamos que contestes a las preguntas del formulario habilitado para ello.</p>
                <p>Una vez recibido el formulario contactaremos contigo para solventar cualquier duda que pueda surgir. <b>Te acompañaremos ayudándote siempre para que tu decisión sea la correcta</b>. Contamos con una gran experiencia en el sector tecnológico y principalmente el desarrollo de aplicaciones.</p>
                <p>Más de 750 negocios y empresas han confiado en nosotros, hemos sacado adelante más de 1.000 proyectos, principalmente de apps móviles de todos los estilos. Si lo deseas, puedes comprobar a través de este <a href="https://www.yeeply.com/clientes/?utm_source=CCMA-CO&utm_medium=modal&utm_campaign=microsites" target="_blank" rel="nofollow">enlace</a> las empresas y negocios que confían en nosotros. ¿Quieres que tu idea de proyecto se convierta en realidad? <b>Con nuestra experiencia y trabajo te ayudamos para cualquier aplicación</b>. ¿Te animas?</p>
              </section>
            </div>
          </div>
        </main>
        <footer className="footer">
          <div className="footer-right about">
            <div className="made-by"> <span>Patrocinado por</span>
              <a href="https://www.yeeply.com?utm_source=CCMA-CO&utm_medium=logo&utm_campaign=microsites" target="_blank" rel="nofollow">
                <svg className="yeeply-logo" viewBox="18.408 244.466 669.643 221.068" xmlns="http://www.w3.org/2000/svg">
                  <g fillRule="evenodd" clipRule="evenodd" fill="#FFF">
                    <path d="M101.73 301.52c-1.48 6.013-3.18 12.55-5.028 19.568-1.848 7.06-3.812 14.153-5.81 21.322-1.998 7.202-4.07 14.187-6.135 20.98-2.072 6.802-4.07 12.965-5.993 18.536-2.072-5.57-4.287-11.734-6.584-18.535-2.33-6.794-4.62-13.78-6.842-20.98-2.215-7.17-4.362-14.262-6.36-21.322-1.998-7.02-3.737-13.555-5.218-19.568H18.408c6.584 23.842 13.644 45.347 21.117 64.474 7.467 19.167 14.975 36.398 22.45 51.774-2.148 6.02-4.737 10.695-7.767 14.153-3.07 3.378-7.433 5.09-13.093 5.09-2.847 0-5.55-.265-8.1-.672-2.588-.482-5.476-1.34-8.73-2.528l-5.877 26.927c2.88 1.19 6.543 2.303 11.02 3.31 4.438.964 9.323 1.487 14.643 1.487 6.367 0 11.912-.748 16.682-2.195 4.77-1.49 9.064-3.786 12.835-6.945 3.77-3.194 7.284-7.21 10.464-12.033 3.18-4.906 6.36-10.81 9.547-17.72 8.282-19.202 15.94-39.035 22.965-59.46 7.026-20.432 13.752-42.303 20.193-65.663H101.73z" />
                    <path d="M172.216 349.055c.45-2.67 1.223-5.307 2.255-7.91 1.04-2.6 2.556-4.897 4.48-6.91 1.922-1.963 4.327-3.56 7.208-4.75 2.888-1.187 6.326-1.82 10.32-1.82 4.146 0 7.658.666 10.465 1.93 2.812 1.264 5.103 2.894 6.958 4.864 1.85 1.97 3.214 4.232 4.105 6.76.883 2.562 1.406 5.164 1.55 7.834h-47.34zm-29.36 38.552c2.515 7.582 6.435 14.152 11.72 19.684 5.287 5.538 11.987 9.887 20.045 13.08 8.066 3.153 17.53 4.75 28.402 4.75 4.294 0 8.582-.26 12.875-.666 4.287-.482 8.316-1.08 12.087-1.712 3.778-.666 7.175-1.48 10.247-2.412 3.03-.89 5.51-1.82 7.36-2.745l-4.547-26.927c-3.96 1.706-9.064 3.12-15.314 4.233-6.252 1.15-12.612 1.707-19.08 1.707-10.138 0-18.237-2.113-24.223-6.42-6.034-4.275-9.43-10.07-10.212-17.347h79.775c.15-1.787.292-3.866.44-6.204s.26-4.49.26-6.46c0-20.025-4.988-35.21-14.942-45.538-9.98-10.32-23.557-15.485-40.713-15.485-7.366 0-14.54 1.373-21.49 4.083-6.993 2.752-13.17 6.76-18.53 12.074-5.395 5.307-9.723 11.958-13.018 19.9-3.29 7.95-4.92 17.24-4.92 27.825.002 8.84 1.26 17.006 3.78 24.582z" />
                    <path d="M344.968 349.055c-.448-2.67-1.223-5.307-2.256-7.91-1.04-2.6-2.555-4.897-4.478-6.91-1.923-1.963-4.328-3.56-7.21-4.75-2.887-1.187-6.325-1.82-10.32-1.82-4.145 0-7.657.666-10.463 1.93-2.812 1.264-5.108 2.894-6.957 4.864-1.848 1.97-3.214 4.232-4.104 6.76-.892 2.562-1.408 5.164-1.557 7.834h47.345zm29.36 38.552c-2.515 7.582-6.436 14.152-11.722 19.684-5.293 5.538-11.985 9.887-20.044 13.08-8.065 3.153-17.53 4.75-28.408 4.75-4.287 0-8.574-.26-12.87-.666-4.286-.482-8.315-1.08-12.093-1.712-3.77-.666-7.174-1.48-10.238-2.412-3.037-.89-5.51-1.82-7.358-2.745l4.545-26.927c3.954 1.706 9.063 3.12 15.308 4.233 6.25 1.15 12.617 1.707 19.086 1.707 10.13 0 18.23-2.113 24.223-6.42 6.026-4.275 9.43-10.07 10.212-17.347h-79.775c-.15-1.787-.3-3.866-.442-6.204-.15-2.337-.258-4.49-.258-6.46 0-20.025 4.987-35.21 14.935-45.538 9.988-10.32 23.563-15.485 40.72-15.485 7.358 0 14.533 1.373 21.49 4.083 6.985 2.752 13.162 6.76 18.53 12.074 5.394 5.307 9.722 11.958 13.018 19.9 3.29 7.95 4.913 17.24 4.913 27.825-.002 8.84-1.26 17.006-3.773 24.582z" id="reversed-e" />
                    <path d="M501.657 336.172c-2.807-7.8-6.876-14.452-12.163-19.908-5.327-5.423-11.836-9.662-19.568-12.632-7.767-2.97-16.53-4.49-26.37-4.49-4.138 0-8.432.223-12.87.59-4.47.373-8.872.89-13.2 1.488-4.33.59-8.467 1.338-12.387 2.154-3.962.815-7.435 1.705-10.47 2.603v159.557h33.136v-45.646c3.812 1.672 7.807 2.93 11.944 3.86 4.145.89 8.582 1.372 13.317 1.372 8.582 0 16.157-1.556 22.74-4.607 6.585-3.044 12.096-7.352 16.532-12.85 4.443-5.495 7.84-12.106 10.137-19.757 2.29-7.65 3.438-16.19 3.438-25.555 0-9.654-1.405-18.377-4.218-26.178zm-54.29 60.425c-3.66 0-7.282-.442-10.87-1.373-3.587-.89-6.51-2.045-8.73-3.418v-62.992c1.74-.292 3.96-.557 6.7-.78 2.696-.218 5.652-.368 8.832-.368 9.728 0 17.053 3.227 22.006 9.696 4.953 6.46 7.433 15.077 7.433 25.812 0 22.28-8.467 33.423-25.372 33.423z" />
                    <path d="M572.11 396.597c-4.18-.3-7.508-.965-9.948-2.04-2.438-1.08-4.328-2.452-5.66-4.165-1.332-1.67-2.215-3.71-2.664-6.162-.44-2.453-.666-5.198-.666-8.283v-131.48l-33.13 5.496V383.04c0 6.463.625 12.26 1.923 17.382 1.257 5.13 3.656 9.512 7.21 13.113 3.512 3.6 8.322 6.387 14.383 8.39 6.067 1.97 14.017 3.045 23.78 3.195l4.772-28.523z" />
                    <path d="M653.026 301.52c-1.474 6.013-3.18 12.55-5.028 19.568-1.848 7.06-3.805 14.153-5.803 21.322-1.997 7.202-4.07 14.187-6.142 20.98-2.072 6.802-4.07 12.965-5.993 18.536-2.065-5.57-4.287-11.734-6.584-18.535-2.324-6.794-4.62-13.78-6.835-20.98-2.22-7.17-4.368-14.262-6.366-21.322-1.997-7.02-3.73-13.555-5.21-19.568h-35.36c6.583 23.842 13.65 45.347 21.118 64.474 7.474 19.167 14.98 36.398 22.45 51.774-2.142 6.02-4.73 10.695-7.768 14.153-3.07 3.378-7.433 5.09-13.093 5.09-2.846 0-5.544-.265-8.1-.672-2.588-.482-5.47-1.34-8.723-2.528l-5.884 26.927c2.887 1.19 6.55 2.303 11.02 3.31 4.445.964 9.323 1.487 14.65 1.487 6.36 0 11.904-.748 16.68-2.195 4.77-1.49 9.06-3.786 12.83-6.945 3.777-3.194 7.29-7.21 10.47-12.033 3.18-4.906 6.36-10.81 9.54-17.72 8.283-19.202 15.94-39.035 22.965-59.46 7.025-20.432 13.76-42.303 20.193-65.663h-35.024z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}
