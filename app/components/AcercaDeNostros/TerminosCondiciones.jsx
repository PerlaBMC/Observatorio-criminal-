import styles from "./aboutUs.module.css";

const TerminosCondiciones = () => {
	return (
		<>
			<div className={styles.aboutUs}>
				<h2>Términos y Condiciones de Uso</h2>
				<p>
					El acceso y uso del sitio web Observatorio Criminológico implica la
					aceptación de los presentes términos y condiciones. Al navegar por
					esta plataforma, el usuario reconoce haber leído, comprendido y
					aceptado las disposiciones aquí establecidas.
				</p>
				<p>
					Si el usuario no está de acuerdo con alguno de estos términos, se
					recomienda abstenerse de utilizar el sitio.
				</p>
				<h2>Uso del sitio web</h2>
				<p>
					Observatorio Criminológico es una plataforma dedicada a la
					investigación, análisis y divulgación de información sobre
					criminología, violencia, delincuencia, crimen organizado y seguridad
					pública.
				</p>
				<p>
					El contenido publicado tiene fines informativos, académicos y de
					divulgación, y busca contribuir a una mejor comprensión de los
					fenómenos delictivos y de los problemas relacionados con la seguridad
					y la justicia.
				</p>
				<p>
					Los usuarios se comprometen a utilizar el sitio web de manera
					responsable y conforme a la legislación vigente, evitando cualquier
					uso que pueda afectar el funcionamiento del sitio o los derechos de
					terceros.
				</p>
				<h2>Propiedad intelectual</h2>
				<p>
					Todos los contenidos publicados en Observatorio Criminológico,
					incluyendo textos, artículos, análisis, imágenes, gráficos, diseño y
					estructura del sitio, se encuentran protegidos por las leyes de
					propiedad intelectual.
				</p>
				<p>
					Salvo que se indique lo contrario, los contenidos pertenecen a
					Observatorio Criminológico o se utilizan con las autorizaciones
					correspondientes.
				</p>
				<p>
					Queda prohibida la reproducción, distribución, modificación o
					utilización del contenido con fines comerciales sin la autorización
					previa y por escrito del titular del sitio.
				</p>
				<p>
					No obstante, se permite la cita de fragmentos del contenido con fines
					informativos o académicos, siempre que se otorgue el crédito
					correspondiente y se incluya un enlace al artículo original.
				</p>
				<h2>Uso de la información</h2>
				<p>
					La información publicada en este sitio tiene un carácter informativo y
					analítico. Aunque se procura que los contenidos sean precisos y estén
					basados en investigación y fuentes confiables, Observatorio
					Criminológico no garantiza que toda la información se encuentre libre
					de errores o que esté completamente actualizada en todo momento.
				</p>
				<p>
					El uso que los usuarios hagan de la información contenida en el sitio
					es responsabilidad exclusiva de cada persona.
				</p>
				<h2>Enlaces a sitios externos</h2>
				<p>
					Este sitio puede contener enlaces a páginas web de terceros con fines
					informativos o de referencia. Observatorio Criminológico no controla
					ni se responsabiliza por el contenido, políticas o prácticas de
					privacidad de dichos sitios externos.
				</p>
				<p>
					Se recomienda a los usuarios revisar los términos y políticas de cada
					página que visiten.
				</p>
				<h2>Uso indebido del sitio</h2>
				<p>Queda prohibido utilizar el sitio web para:</p>
				<div className={styles.lista}>
					<li>Realizar actividades ilegales</li>
					<li>Difundir contenido falso o engañoso</li>
					<li>
						Intentar acceder sin autorización a sistemas o datos del sitio
					</li>
					<li>
						Interferir con el funcionamiento del sitio o con la experiencia de
						otros usuarios
					</li>
					<br />
				</div>
				<p>
					Cualquier uso indebido podrá dar lugar a la restricción de acceso o a
					las acciones legales que correspondan.
				</p>
				<h2>Modificaciones del sitio y de los términos</h2>
				<p>
					Observatorio Criminológico se reserva el derecho de modificar,
					actualizar o eliminar contenidos del sitio web en cualquier momento y
					sin previo aviso.
				</p>
				<p>
					Asimismo, estos términos y condiciones pueden actualizarse
					periódicamente para reflejar cambios en el funcionamiento del sitio o
					en la legislación aplicable.
				</p>
				<div className={styles.botonAtras}>
					<a href="/">Atrás</a>
				</div>
			</div>
		</>
	);
};

export default TerminosCondiciones;
