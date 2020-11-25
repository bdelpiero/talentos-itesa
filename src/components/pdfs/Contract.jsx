import React from "react";
import {
  PDFViewer,
  pdf,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    width: "75%",
    margin: "1rem",
    height: "45rem",
  },
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 30,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: "10pt",
  },
  subtitles: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: "10pt",
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: "10pt",
  },
  signature: {
    width: "30%",
    height: "auto",
    alignSelf: "center",
  },
  signatureTexts: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 10,
    marginBottom: "10pt",
  },
  martinSignature: {
    width: "30%",
    height: "auto",
    alignSelf: "center",
  },
});

const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const Contract = ({
  show,
  name,
  lastName,
  cuit,
  address,
  freelancerType,
  imageData = false,
}) => {
  const date = new Date();
  const MyDocument = () => (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>ACUERDO DE CONFIDENCIALIDAD</Text>
          <Text style={styles.textContent}>
            En Buenos Aires Argentina, a {date.getDate()} de{" "}
            {months[date.getMonth()]} de {date.getFullYear()}, entre Itesa
            Innovation Company SAS (“Itesa”), CUIT No. 30-71664275-1, con
            domicilio en Marcos Paz 2554, CABA, Buenos Aires, debidamente
            representada por Martin Pilossof, DNI número 38050978; y{" "}
            {name + " " + lastName} (la “Parte Receptora”), DNI No.{" "}
            {cuit.substring(2, cuit.length - 1)}, con domicilio en {address}, se
            ha convenido un contrato de confidencialidad (el “Acuerdo”), que se
            regirá por las siguientes cláusulas:
          </Text>
          <Text
            style={{
              fontSize: 10,
              textAlign: "justify",
              marginBottom: "10pt",
              fontWeight: "900pt",
            }}>
            PRIMERA
          </Text>
          <Text style={styles.textContent}>Definiciones.</Text>
          <Text style={styles.textContent}>
            A menos que del contexto en que sean empleados se desprenda otro
            sentido, los siguientes términos tendrán los significados que a
            continuación se indican, los que se harán extensivos a su uso en
            forma plural:
          </Text>
          <Text style={styles.textContent}>
            “Afiliada”: significa con respecto a cualquier persona, cualquier
            otra persona que directa o indirectamente controle o sea controlada
            por, o se encuentre bajo el control común, directo o indirecto, de
            dicha persona especificada. Control, significa, respecto de
            cualquier Persona (a) la tenencia, directa o indirecta de acciones o
            derechos sociales representativos del 19% o más de dicha persona, o
            (b) la facultad corporativa, contractual o de hecho para designar a
            la mayoría de los miembros del órgano de administración de dicha
            persona. Persona, significa una persona física, fideicomiso,
            sucesión, sociedad, joint venture, asociación, sociedad de
            responsabilidad limitada, sociedad por acciones u otra entidad, con
            o sin personalidad jurídica.
          </Text>
          <Text style={styles.textContent}>
            “Agente”: significa todo ejecutivo, representante, empleado o asesor
            de cualquiera especie de alguna de las Partes.
          </Text>
          <Text style={styles.textContent}>
            "Información Confidencial": significa cualquier información revelada
            por Itesa a la Parte Receptora. La Información Confidencial podrá
            incluir los métodos, fórmula, experiencia, tecnología, datos, bases
            de datos, sistemas, información legal, financiera, contractual y
            contable y cualquier otra información de naturaleza confidencial
            relacionada con, o de propiedad de, Itesa y/o de cualquiera de sus
            Afiliadas o Filiales, que haya sido o que vaya a ser revelada
            durante la vigencia del presente Acuerdo, directa o indirectamente
            por Itesa.
          </Text>
          <Text style={styles.textContent}>
            El término “Información Confidencial” no comprenderá cualquier
            información que: (i) se encontrare en posesión de la Parte Receptora
            o de alguno de sus Agentes con anterioridad o al momento de su
            revelación por Itesa, y que no sea directa o indirectamente
            proporcionada por esta última, (ii) esté a disposición del público
            en general, o posteriormente a la celebración del presente Acuerdo
            se ponga a disposición del público en general, salvo en cuanto tal
            disposición sea consecuencia de un incumplimiento de lo dispuesto
            por el presente Acuerdo; (iii) hubiere sido legalmente recibida por
            la Parte Receptora de un tercero, sin estar obligada a guardar
            secreto frente tal tercero y cuya revelación no haya violado ninguna
            limitación o restricción, (iv) fuere desarrollada independientemente
            por algún Agente de una Parte, sin conocimiento de cualquier
            limitación de revelación, de conformidad con el presente Acuerdo y
            sin referencia alguna a la Información Confidencial; o (v) haya sido
            autorizada su revelación por Itesa por escrito.
          </Text>
          <Text style={styles.textContent}>
            “Itesa”: significa la sociedad ITESA INNOVATION COMPANY., incluidas
            todas sus Afiliadas y sus Agentes.
          </Text>
          <Text style={styles.textContent}>
            “Parte”: cada una de las partes de este Acuerdo, así como sus
            Afiliadas.
          </Text>
          <Text style={styles.textContent}>
            “Servicios”: significan los servicios profesionales y/o técnicos que
            el Prestador de Servicios desempeñará para Itesa, en la medida que
            ambas Partes suscriban el respectivo contrato de prestación de
            servicios, de conformidad con lo establecido en la cláusula Segunda
            de este Acuerdo.
          </Text>
          <Text style={styles.subtitles}>SEGUNDA.</Text>
          <Text style={styles.textContent}>Objeto.</Text>
          <Text style={styles.textContent}>
            Itesa y la Parte Receptora evalúan actualmente la celebración de un
            contrato de prestación de servicios por el cual la Parte Receptora
            se obligaría a prestar a Itesa los siguientes servicios (los
            “Servicios”): {freelancerType}. Para tales efectos, Itesa comunicará
            a la Parte Receptora, o le dará acceso a, determinada Información
            Confidencial, cuyo tratamiento será regulado por las disposiciones
            de este Acuerdo.
          </Text>
          <Text style={styles.textContent}>
            Las Partes dejan expresa constancia que mientras no suscriban el
            contrato de prestación de servicios indicado en el párrafo anterior,
            ninguna de las Partes se encontrará sujeta a obligación legal alguna
            en relación a los Servicios, salvo en lo relativo a aquellas
            materias expresamente señaladas en este Acuerdo.
          </Text>
          <Text style={styles.subtitles}>TERCERA.</Text>
          <Text style={styles.textContent}>Confidencialidad.</Text>
          <Text style={styles.textContent}>
            La Parte Receptora se obliga a mantener en estricta confidencialidad
            y a no revelar a ningún tercero, la Información Confidencial. Esta
            obligación comprende también, sin que ello importe limitación, el
            deber de adoptar todas las medidas razonablemente adecuadas para
            impedir el acceso por cualquier tercero a la Información
            Confidencial, y el deber de mantener en un ambiente restringido y
            seguro todo soporte material, tecnológico, digital o magnético que
            pudiere contener Información Confidencial.
          </Text>
        </View>
      </Page>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.textContent}>
            En consecuencia, queda especialmente prohibido a la Parte Receptora,
            sin que ello importe limitación:
          </Text>
          <Text style={styles.textContent}>
            (i) distribuir o revelar cualquier parte de la Información
            Confidencial, por cualquier medio; (ii) permitir a cualquier tercero
            el acceso a todo o parte de la Información Confidencial; y (iii)
            usar la Información Confidencial para cualquier propósito diferente
            de la adecuada prestación de los Servicios, o acordado por escrito
            con Itesa. Sin perjuicio de lo anterior, la Parte Receptora podrá
            transmitir Información Confidencial a aquellos de sus Agentes que
            tengan la necesidad de conocer la Información Confidencial para la
            adecuada prestación de los Servicios, los que deberán estar
            informados del contenido del presente Acuerdo y prestar su
            consentimiento escrito para obligarse en los términos del mismo. La
            Parte Receptora será solidariamente responsable del cumplimiento por
            sus Agentes de las obligaciones impuestas por el presente Acuerdo.
          </Text>
          <Text style={styles.subtitles}>CUARTA.</Text>
          <Text style={styles.textContent}>Revelación Obligatoria.</Text>
          <Text style={styles.textContent}>
            Sin perjuicio de lo establecido en la cláusula precedente, no
            constituirá incumplimiento de este Acuerdo la revelación en que
            incurra la Parte Receptora en cuanto sea requerido por alguna
            autoridad pública competente, o en cuanto se encuentre obligado a
            revelar la Información Confidencial por disposición legal o
            regulatoria aplicable; lo anterior, en el entendido que antes de
            revelar la Información Confidencial, deberá notificar inmediatamente
            a Itesa del requerimiento de la autoridad (a menos que dicha
            notificación previa se encuentre prohibida). En tal evento, si Itesa
            no obtuviere una resolución judicial u otro recurso legal apropiado
            en contra de tal revelación antes de que ésta deba llevarse a cabo,
            la Parte Receptora deberá proporcionar única y exclusivamente
            aquella porción de Información Confidencial que sus asesores legales
            consideren legalmente indispensable para el cumplimiento de la orden
            de la autoridad respectiva, mediante opinión formulada por escrito;
            en este evento, la Parte Receptora deberá informar detalladamente
            por escrito a Itesa acerca de la Información Confidencial revelada,
            adjuntando copia de la referida opinión formulada por sus asesores
            legales.
          </Text>
          <Text style={styles.subtitles}>QUINTA.</Text>
          <Text style={styles.textContent}>Copias.</Text>
          <Text style={styles.textContent}>
            En caso que la Información Confidencial o una parte de la misma se
            incluya o se desarrolle en papel, disquetes, discos compactos (CD),
            digital video discs (DVD), o en cualquier otro soporte material, que
            en todo caso deberá encontrarse identificado claramente como
            "confidencial", la Parte Receptora deberá mantener dichos objetos en
            un lugar seguro y deberá abstenerse de realizar copias de los mismos
            sin la previa autorización por escrito de Itesa.
          </Text>
          <Text style={styles.textContent}>
            Al concluir la prestación de los Servicios, la Parte Receptora
            deberá restituir a Itesa todo soporte material, tecnológico, digital
            o magnético que contenga Información Confidencial, o bien destruir
            tales soportes según sea instruido al efecto por Itesa.
            Adicionalmente, al concluir la prestación de los Servicios, la Parte
            Receptora deberá destruir u obtener que se destruya toda copia o
            reproducción de cualquier material o cosa que contenga Información
            Confidencial, así como de todo apunte, nota, análisis, reporte,
            borrador, informe u otro trabajo análogo, que contenga Información
            Confidencial o derive de ella, lo cual incluye la destrucción de las
            mismas y su eliminación y/o borrado de cualquier sistema de
            almacenamiento físico, tecnológico, digital o magnético.
          </Text>
          <Text style={styles.textContent}>
            Si en cualquier momento la Parte Receptora y/o alguno de sus Agentes
            tomaran conocimiento en forma oral de Información Confidencial, ésta
            quedará también sujeta a las obligaciones de reserva de este
            Acuerdo.
          </Text>
          <Text style={styles.subtitles}>SEXTA.</Text>
          <Text style={styles.textContent}>Duración.</Text>
          <Text style={styles.textContent}>
            El presente Acuerdo surtirá sus efectos a partir de la fecha de su
            celebración y permanecerá en vigencia hasta transcurridos dos años
            contados desde que haya finalizado la prestación de los Servicios.
          </Text>
          <Text style={styles.textContent}>
            Con todo, si con posterioridad a la celebración de este Acuerdo
            Itesa contratare al Prestador de Servicios para que le preste
            servicios adicionales, toda Información Confidencial a que tenga
            acceso a la Parte Receptora con ocasión de la prestación de tales
            servicios quedará afecta a este Acuerdo, extendiéndose la vigencia
            de este Acuerdo hasta transcurridos dos años contados desde los
            últimos servicios prestados por la Parte Receptora a Itesa.
          </Text>
          <Text style={styles.subtitles}>SÉPTIMA.</Text>
          <Text style={styles.textContent}>Ley aplicable y jurisdicción.</Text>
          <Text style={styles.textContent}>
            El presente Acuerdo se rige por las leyes de la República de
            Argentina, sometiéndose las Partes irrevocablemente a la competencia
            de los tribunales ordinarios de justicia con asiento en la comuna de
            Buenos Aires.
          </Text>
          <Text style={styles.subtitles}>OCTAVA.</Text>
          <Text style={styles.textContent}>
            Este Acuerdo se suscribe en dos ejemplares de idéntico tenor y
            fecha, quedando cada uno de ellos en poder de una Parte.
          </Text>
          <Text style={styles.textContent}>
            [FIRMAS EN LA SIGUIENTE PÁGINA]
          </Text>
        </View>
      </Page>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          {imageData && (
            <Image src={`${imageData}`} style={styles.signature}></Image>
          )}
          <Text style={styles.signatureTexts}>____________________</Text>
          <Text style={styles.signatureTexts}>{name + " " + lastName}</Text>
          <Text style={styles.signatureTexts}>
            DNI Nro.
            {cuit.substring(2, cuit.length - 1)}
          </Text>
          <Image src='/firma_martin.png' style={styles.martinSignature}></Image>
          <Text style={styles.signatureTexts}>____________________</Text>
          <Text style={styles.signatureTexts}>
            Martin Pilossof Director General
          </Text>
          <Text style={styles.signatureTexts}>DNI Nro. 38050978</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFViewer style={styles.viewer}>
      <MyDocument />
    </PDFViewer>
  );
};

export default React.memo(Contract, (prevState, nextState) => {
  return prevState.show === nextState.show;
});
