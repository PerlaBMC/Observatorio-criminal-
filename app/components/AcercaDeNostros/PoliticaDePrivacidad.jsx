import styles from "./aboutUs.module.css";

const PoliticaDePrivacidad = () => {
	return (
		<>
			<div className={styles.aboutUs}>
				<h2>Política de Privacidad</h2>
				<p>
					En Observatorio Criminológico valoramos y respetamos la privacidad de
					las personas que visitan nuestro sitio web. La presente política de
					privacidad tiene como finalidad informar de manera clara cómo se
					recopila, utiliza y protege la información que los usuarios
					proporcionan al navegar en esta plataforma.
				</p>
				<p>
					Al utilizar este sitio web, el usuario acepta las prácticas descritas
					en esta política de privacidad.
				</p>
				<h2>Información que recopilamos</h2>
				<p>
					Observatorio Criminológico puede recopilar información de forma
					automática cuando los usuarios navegan por el sitio web. Esta
					información puede incluir datos técnicos como:
				</p>
				<div className={styles.lista}>
					<li>Dirección IP</li>
					<li>Tipo de navegador</li>
					<li>Sistema operativo</li>
					<li>Páginas visitadas dentro del sitio</li>
					<li>Páginas visitadas dentro del sitio</li>
					<li>Fecha y hora de acceso</li>
					<br />
				</div>
				<p>
					Estos datos se recopilan con fines estadísticos y para mejorar el
					funcionamiento, seguridad y experiencia de navegación del sitio.
				</p>
				<p>
					En caso de que el usuario decida comunicarse con nosotros a través de
					formularios o medios de contacto disponibles en el sitio, también
					podríamos recibir información como nombre, correo electrónico u otros
					datos que el usuario proporcione voluntariamente.
				</p>
				<h2>Cookies</h2>
				<p>
					Este sitio web puede utilizar cookies, que son pequeños archivos
					almacenados en el navegador del usuario que permiten reconocer visitas
					futuras y mejorar la experiencia de navegación.
				</p>
				<p>Las cookies pueden utilizarse para:</p>
				<div className={styles.lista}>
					<li>Analizar el tráfico del sitio</li>
					<li>Recordar preferencias del usuario</li>
					<li>Medir el rendimiento del contenido publicado</li>
					<br />
				</div>
				<p>
					El usuario puede configurar su navegador para rechazar o eliminar
					cookies en cualquier momento. Sin embargo, algunas funciones del sitio
					podrían verse afectadas si las cookies se desactivan.
				</p>
				<h2>Servicios de terceros</h2>
				<p>
					Observatorio Criminológico puede utilizar servicios de terceros que
					ayudan a analizar el tráfico del sitio web o mostrar publicidad. Estos
					servicios pueden recopilar información de acuerdo con sus propias
					políticas de privacidad.
				</p>
				<p>
					Entre estos servicios pueden encontrarse herramientas de análisis web
					o plataformas de publicidad que utilizan cookies u otras tecnologías
					similares para mostrar contenido relevante para los usuarios.
				</p>
				<h2>Enlaces a sitios externos</h2>
				<p>
					El sitio web puede contener enlaces a páginas externas. Observatorio
					Criminológico no se hace responsable de las políticas de privacidad,
					contenidos o prácticas de dichos sitios. Se recomienda a los usuarios
					revisar las políticas de privacidad de cada página que visiten.
				</p>
				<h2>Protección de la información</h2>
				<p>
					Observatorio Criminológico adopta medidas razonables para proteger la
					información recopilada y evitar accesos no autorizados, alteraciones o
					divulgación indebida de los datos.
				</p>
				<p>
					No obstante, es importante recordar que ningún sistema de transmisión
					o almacenamießnto de información en internet es completamente seguro.
				</p>
				<h2>Cambios en la política de privacidad</h2>
				<p>
					Observatorio Criminológico se reserva el derecho de actualizar o
					modificar esta política de privacidad en cualquier momento con el fin
					de adaptarla a cambios legales, técnicos o de funcionamiento del
					sitio.
				</p>
				<p>
					Se recomienda a los usuarios revisar periódicamente esta sección para
					mantenerse informados sobre cualquier actualización.
				</p>
				<h2>Contacto</h2>
				<p>
					Si tienes preguntas sobre esta política de privacidad o sobre el
					manejo de información en este sitio web, puedes comunicarte a través
					de los medios de contacto disponibles en la plataforma.
				</p>
			</div>
		</>
	);
};

export default PoliticaDePrivacidad;
