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
import Martin from '../../../views/firma_martin.png'

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
        <Text style={styles.textContent}>{date.getDate()} de 
            {months[date.getMonth()]} de {date.getFullYear()}</Text>
        <Text style={styles.textContent}>Señores</Text>

        <Text style={styles.textContent}>
             Itesa Innovation Company SAS
        </Text>
        <Text style={styles.textContent}>
             Marcos Paz 2554, 3C
        </Text>
        <Text style={styles.textContent}>
            Ciudad Autónoma de Buenos Aires
        </Text>
        <Text style={styles.textContent}>
            Argentina
        </Text>
        <Text style={styles.textContent}>
            Att.: Martin Pilossof
        </Text>
        <Text style={styles.textContent}>
            De mi mayor consideración,
        </Text>
          <Text style={styles.title}>PRESTACIÓN DE SERVICIOS</Text>
          <Text style={styles.textContent}>
          Por la presente, tengo el agrado de dirigirme a Itesa Innovation Company SAS, sociedad constituida de conformidad con las leyes de la República Argentina, con domicilio en Marcos Paz 2443 3ºC, Ciudad Autónoma de Buenos Aires (“Itesa”), a fin de hacerles llegar esta oferta que, en caso de ser aceptada, se regirá por los términos y condiciones establecidos en el Anexo A (la “Oferta”).
          </Text>
          <Text style={styles.textContent}>
          Esta Oferta se considerará aceptada si, dentro de los veinte (20) días corridos de recibida, Itesa envía una carta de aceptación de esta Oferta.
          </Text>
          <Text style={styles.signatureTexts}>____________________</Text>
          <Text style={styles.signatureTexts}>{name + " " + lastName}</Text>
          <Text style={styles.signatureTexts}>
            DNI Nro.
            {cuit.substring(2, cuit.length - 1)}
          </Text>
          </View>
        </Page>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
            <Text style={styles.title}>Anexo A</Text>
            <Text style={styles.title}>PRESTACIÓN DE SERVICIOS</Text>
            <Text style={styles.textContent}>
                Entre:
            </Text>
            <Text style={styles.textContent}>
                Itesa Innovation Company SAS, una sociedad constituida de acuerdo con las leyes de la República Argentina, con domicilio en Marcos Paz 2443 3ºC, Ciudad Autónoma de Buenos Aires (en adelante, “Itesa”); por una parte;
            </Text>
            <Text style={styles.textContent}>
               y 
            </Text>
            <Text style={styles.textContent}>
                {name + ' ' + lastName}, Documento Nacional de Identidad Nº {cuit.substring(2, cuit.length - 1)}, con domicilio en {address} (el “Prestador de Servicios”, y en forma conjunta con Itesa, las “Partes”); por la otra parte.
            </Text>
            <Text style={styles.textContent}>
                Las Partes acuerdan suscribir este contrato (el “Contrato”), que estará sujeto a los siguientes términos y condiciones: 
            </Text>
            <Text style={styles.title}>
                I. ANTECEDENTES
            </Text>
            <Text style={styles.textContent}>
                I.1. Itesa es una sociedad cuya actividad consiste en creación proyectos de innovación de uso propio y para terceros, fabricación de productos tecnológicos, comercialización de plataformas digitales, alocación de recursos y prestación de servicios.
            </Text>
            <Text style={styles.textContent}>
                I.2. El Prestador de Servicios se dedica a la consultoría y desarrollo de 
                {/* [descripción del expertise del freelancer]. */}
            </Text>
            <Text style={styles.textContent}>
                I.3. Itesa tiene interés en que el Prestador de Servicios desarrolle, para beneficio y uso exclusivo de Itesa, 
                {/* [breve descripción de los servicios a ser prestados]. */}
            </Text>
            <Text style={styles.textContent}>
                I.4. El Prestador de Servicios se encuentra dispuesto a realizar los Servicios a cambio de una contraprestación, la cual será pagada por Itesa de acuerdo con los términos y condiciones establecidos en el presente Contrato. 
            </Text>
            <Text style={styles.title}>
                II. OBJETO
            </Text>
            <Text style={styles.title}>
                2.1. Servicios. Por el presente, Itesa contrata al Prestador de Servicios para que realice los servicios descriptos en el Anexo I1 del presente Contrato, conforme a las condiciones generales, definición de resultados y cronograma de actividades y de avance previstos en el referido Anexo (los “Servicios”).
            </Text>
            <Text style={styles.title}>
                2.2. Compromiso de Colaboración. Las Partes reconocen que para la adecuada realización de los Servicios es necesario que ambas Partes colaboren y cumplan en tiempo y forma con las obligaciones a su cargo. Por lo tanto, ambas Partes se obligan a realizar sus mayores esfuerzos para que la realización de los Servicios se efectúe en la forma y tiempo pactados. Esta colaboración no implica ninguna clase de co-autoría sobre los desarrollos resultantes de los Servicios. Las Partes declaran y reconocen que cualquier obra que resulte o se vincule de cualquier forma con la
            </Text>
            <Text>
                NTD: preparar anexo con servicios prestados, cronograma, etc.
            </Text>

            </View>
        </Page>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
            
            <Text style={styles.textContent}>
                ejecución del presente Contrato, así como sus posteriores adaptaciones, modificaciones, actualizaciones y obras o productos derivados serán propiedad exclusiva de Itesa.
            </Text>
            <Text style={styles.textContent}>
                2.3. Compromiso de Información. El Proveedor de Servicios se obliga a: (i) informar inmediatamente a Itesa de cualquier incumplimiento conocido o sospechado relacionado con los Servicios, (ii) informar inmediatamente de cualquier copia o distribución de todos los desarrollos que los que Itesa fuese propietaria en razón del presente Contrato y de cualquier Información Confidencial (conforme el término se define más adelante) que el Prestador de Servicios pudiere recibir o tener en su poder en virtud de este Contrato, de los que el Prestador de Servicios tenga conocimiento o sospeche, y (iii) no ofrecer información alguna que permita o pueda permitir que terceros tengan acceso o utilicen los desarrollos o cualquier otro derecho de Itesa adquirido en virtud de los Servicios.
            </Text>
            <Text style={styles.title}>
                III. CONTRAPRESTACIÓN. PAGO
            </Text>
            <Text style={styles.textContent}>
                III.1. Contraprestación. Como contraprestación por la prestación de los Servicios, Itesa abonará al Prestador de Servicios la contraprestación descripta en el Anexo I1 (la “Contraprestación”).
            </Text>

            <Text style={styles.textContent}>
                III.2. Forma de Pago. El pago de la Contraprestación será efectuado en transferencia bancaria una vez finalizado los Servicios.
            </Text>
            <Text style={styles.textContent}>
                III.3. Facturación. El Prestador de Servicios estará obligado a facturar de forma A o C.
            </Text>
            <Text style={styles.textContent}>
                III.4. Limitación de Responsabilidad. Las Partes reconocen y aceptan que la Contraprestación constituye la totalidad del pago debido por Itesa al Prestador de Servicios por la realización de los Servicios (lo cual incluye, sin limitación, los desarrollos que pudieren resultar de la prestación de los Servicios, su seguimiento, mantenimiento y control). Por lo tanto, las Partes reconocen y aceptan que Itesa no deberá pagar por ningún motivo y en ningún caso ningún monto adicional o diferente a la Contraprestación. Una vez pagada por Itesa en su totalidad la Contraprestación, Itesa habrá cumplido con la totalidad de sus obligaciones de pago establecidas bajo el presente Contrato.
            </Text>
           
            <Text style={styles.title}>
                IV. PROPIEDAD INTELECTUAL
            </Text>
            <Text style={styles.textContent}>
                IV.1. Declaración de las Partes. Las Partes declaran y reconocen que los desarrollos realizados por el Prestador de Servicios para Itesa, sus especificaciones, fórmulas, técnicas, métodos, así como cualquier documentación, datos y archivos y, en adición a ello, cualquier material protegido bajo las leyes de propiedad intelectual, industrial, marcas, patentes, modelos, derechos de autor y secretos comerciales, que el Prestador de Servicios haya desarrollado, diseñado o preparado en virtud o en ocasión de los Servicios, basándose, o no, en conocimientos o información de propiedad de Itesa, son y serán de propiedad exclusiva de Itesa.
            </Text>
            <Text style={styles.textContent}>
                IV.2. Propiedad Intelectual. Itesa será la única y exclusiva propietaria de todos los desarrollos que derivaren de los Servicios, pudiendo utilizarlos y disponer libremente de ellos y realizar todos los cambios y mantenciones que estime convenientes. El Prestador de Servicios por el presente renuncia irrevocablemente a cualquier derecho vinculado con los referidos desarrollos o cualquier otro derecho derivado de los Servicios y por lo tanto manifiesta y reconoce que no tendrá ningún derecho sobre ellos, ni cualquier fórmula, técnica o métodos utilizados para llevar a cabo los Servicios, ni los beneficios derivados, vinculados y/o relacionados de cualquier forma, directa o indirectamente, con los Servicios realizados (incluyendo, sin limitación, cualquier beneficio económico obtenido por Itesa en razón de dichos Servicios).
            </Text>








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

