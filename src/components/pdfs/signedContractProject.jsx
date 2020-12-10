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
    width: "95%",
    margin: "1rem",
    height: '90%'
  },
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 50,
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
    fontSize: 11,
    textAlign: "justify",
    marginBottom: "10pt",
  },
  date: {
    fontSize: 11,
    textAlign: "right",
    marginBottom: "10pt",
  },
  textSangria:{
    textIndent: 40,
    fontSize: 11,
    textAlign: "justify",
    marginBottom: "10pt",
  },
  textShort: {
    fontSize: 11,
    textAlign: "justify",
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
  footText :{
    fontSize: 7,
    textAlign: "justify",
    // marginBottom: "10pt",
  },
  tabla:{
    // textDecoration: "underline",
    fontWeight: "bold",
    fontSize:11,
    
  }
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
  project,
  imageData = false,
}) => {
  const date = new Date();
  const getDatesBetweenDates = (startDate, endDate) => {
    const sd=startDate.split('/')
    const ed=endDate.split('/')
    let dates = []
    //to avoid modifying the original date
    const theDate = new Date(sd[2],sd[1],sd[0])
    const theEndDate = new Date(ed[2],ed[1],ed[0])

    while (theDate < theEndDate) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates.length
  }

    const calculoRemuneracion =(arr)=>{
      return arr.reduce((pre,act)=> pre + parseInt(act.monto),0)
    }
    const remuneracion = calculoRemuneracion(project.cuotasDB)

  const duration=getDatesBetweenDates(project.plazos[0],project.plazos[1])
  const MyDocument = () => (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
        <Text style={styles.date}>{date.getDate()} de 
            {months[date.getMonth()]} de {date.getFullYear()}</Text>
        <Text style={styles.textShort}>Señores</Text>

        <Text style={styles.textShort}>
             Itesa Innovation Company SAS
        </Text>
        <Text style={styles.textShort}>
             Marcos Paz 2554, 3C
        </Text>
        <Text style={styles.textShort}>
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
          <Text style={styles.textSangria}>
          Por la presente, tengo el agrado de dirigirme a Itesa Innovation Company SAS, sociedad constituida de conformidad con las leyes de la República Argentina, con domicilio en Marcos Paz 2443 3ºC, Ciudad Autónoma de Buenos Aires (“Itesa”), a fin de hacerles llegar esta oferta que, en caso de ser aceptada, se regirá por los términos y condiciones establecidos en el Anexo A (la “Oferta”).
          </Text>
          <Text style={styles.textSangria}>
          Esta Oferta se considerará aceptada si, dentro de los veinte (20) días corridos de recibida, Itesa envía una carta de aceptación de esta Oferta.
          </Text>
          {imageData && (
          <Image src={`${imageData}`} style={styles.signature}></Image>
            )}
          <Text style={styles.signatureTexts}>____________________</Text>
          <Text style={styles.signatureTexts}>{project.name + " " + project.lastName}</Text>
          <Text style={styles.signatureTexts}>
            DNI Nro.
            {project.bankDetails.cuit.substring(2, project.bankDetails.cuit.length - 1)}
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
                {project.name + ' ' + project.lastName}, Documento Nacional de Identidad Nº {project.bankDetails.cuit.substring(2, project.bankDetails.cuit.length - 1)}, con domicilio en {project.address} (el “Prestador de Servicios”, y en forma conjunta con Itesa, las “Partes”); por la otra parte.
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
            <Text style={styles.textContent}>
                2.1. Servicios. Por el presente, Itesa contrata al Prestador de Servicios para que realice los servicios descriptos en el Anexo I1 del presente Contrato, conforme a las condiciones generales, definición de resultados y cronograma de actividades y de avance previstos en el referido Anexo (los “Servicios”).
            </Text>
            <Text style={styles.textContent}>
                2.2. Compromiso de Colaboración. Las Partes reconocen que para la adecuada realización de los Servicios es necesario que ambas Partes colaboren y cumplan en tiempo y forma con las obligaciones a su cargo. Por lo tanto, ambas Partes se obligan a realizar sus mayores esfuerzos para que la realización de los Servicios se efectúe en la forma y tiempo pactados. Esta colaboración no implica ninguna clase de co-autoría sobre los desarrollos resultantes de los Servicios. Las Partes declaran y reconocen que cualquier obra que resulte o se vincule de cualquier forma con la
            </Text>
            <Text style={styles.footText}>
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
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>

            <Text style={styles.title}>
              V. RESPONSABILIDAD
            </Text>
            <Text style={styles.textContent}>
            V.1. Responsabilidad. Las Partes reconocen que el Prestador de Servicios es un profesional experto en realización de servicios como los Servicios. Por lo tanto, las Partes acuerdan que, en caso en que Itesa recibiese reclamos de terceros por daños derivados de actividades del Prestador de Servicios y que dichos daños no fueren imputables a conductas de Itesa sino a las actividades realizadas por el Prestador de Servicios, el Prestador de Servicios mantendrá indemne y asumirá todas las consecuencias dañosas que pudiere sufrir Itesa, así como sus directores, empleados y demás funcionarios, por dichos daños. 
            </Text>
            <Text style={styles.textContent}>
                    
            V.2. Desembolsos y Reembolsos por Daños. En caso de que Itesa se encuentre obligada a desembolsar alguna suma de dinero (incluyendo, sin limitación, costas, costos y gastos de defensa razonables) como consecuencia de un reclamo de un tercero vinculado a lo establecido en el Artículo 7.1 del presente Contrato y que ese daño haya sido consecuencia de un accionar doloso, negligente o culpable del Prestador de Servicios, Itesa tendrá derecho a optar libremente entre: (i) que el Prestador de Servicios le reembolse todas las sumas abonadas por tal razón, dentro de los diez (10) días corridos de haber recibido una notificación por parte de Itesa del gasto en que ésta debió o deberá incurrir, o (ii) en caso en que Itesa aún deba realizar pagos al Prestador de Servicios en virtud de la Contraprestación, deducir de los pagos que deba realizarle al Prestador de Servicios los montos que hubieren sido efectivamente desembolsados o que razonablemente pudiere esperarse que debieran ser desembolsados. 
            </Text>
            <Text style={styles.textContent}>
              V.3. Vigencia; Supervivencia. Las disposiciones del presente Artículo VI subsistirán, y los derechos y obligaciones surgidos de él serán plenamente válidas y exigibles, aún concluido el Plazo de Vigencia del presente Contrato y sin perjuicio de potenciales resoluciones y/o resoluciones parciales o totales del Contrato que pudieren suceder. En caso en que ocurriese, las causas de la rescisión y/o resolución (parcial o total) del presente Contrato serán completamente irrelevantes para la subsistencia, validez y exigibilidad de las disposiciones aquí dispuestas. 
            </Text>

            <Text style={styles.title}>
            VI. INDEPENDENCIA DE LAS PARTES 
            </Text>

            <Text style={styles.textContent}>

              VI.1. Independencia. Las Partes declaran y garantizan que su relación en virtud de este Contrato es una relación contractual entre sujetos independientes, y no podrá entenderse ni interpretarse en ningún caso que crea o genera ninguna otra clase de relación que la pactada en este Contrato, como sociedad, asociación, joint ventureo contrato de trabajo. 
            </Text>
            <Text style={styles.textContent}>
              
              VI.2. Asesoramiento y Análisis. Las Partes manifiestan que han recibido suficiente asesoramiento sobre los términos y condiciones de este Contrato y que han analizado detenidamente todas sus implicancias, por lo que en ningún caso podrán argumentar que los términos y condiciones –en su conjunto o individualmente– fueron determinados unilateralmente por una Parte y adheridos por la otra. 

            </Text>
            <Text style={styles.textContent}>
              
              VI.3. Prohibición. A ninguna de las Partes, ni ninguna persona que actúe por ella o sea empleada por ella, podrá ser considerada, ni le es permitido presentarse, como empleado, socio, dependiente, representante, mandatario o asociado a la otra Parte.
            </Text>

            </View>
        </Page>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>

            <Text style={styles.title}>
            VII. VIGENCIA. RESOLUCIÓN Y RESCISIÓN DEL CONTRATO 
            </Text>

            <Text style={styles.textContent}>
            VII.1. Plazo de Vigencia. El Contrato tendrá una vigencia de {duration} días contados desde el 
             {project.plazos[0]} 
            (el “Plazo de Vigencia”). Una vez finalizado el Plazo de Vigencia, el Contrato se considerará automáticamente terminado y (con excepción de lo dispuesto en los Artículos VI y VIII del presente Contrato), no subsistirán obligaciones entre las Partes. El Contrato no se renovará automáticamente y no será necesario para que éste se considere terminado que ninguna de las Partes efectúe notificación alguna a la otra, sino que la simple conclusión del Plazo de Vigencia será suficiente para dar terminación al Contrato.
            </Text>
            <Text style={styles.textContent}>

            VII.2. Rescisión sin Causa. Itesa podrá, mediante notificación por escrito efectuada con no menos de diez (10) días de antelación, terminar anticipada e unilateralmente el presente Contrato, sin necesidad de expresión de causa y sin perjuicio del cumplimiento de las obligaciones pendientes entre las Partes al momento de la terminación. La terminación del Contrato en los términos previstos en el numeral anterior no otorgará derecho alguno de indemnización a favor del Prestador de Servicios.
            </Text>
            <Text style={styles.textContent}>
            VII.3. Rescisión con Causa1. El Contrato podrá ser resuelto con expresión de causa en los siguiente casos: 
            </Text>
            <Text style={styles.textContent}>
            (i) Por Itesa, sin observar un plazo de preaviso y sin necesidad de acción o declaración arbitral o judicial, en caso en de suspensión o cancelación por cualquier motivo del proyecto que se encuentra siendo desarrollado por el Prestador de Servicios para Itesa.
            </Text>
            <Text style={styles.textContent}>
            (ii) Por una Parte, sin observar un plazo de preaviso y sin necesidad de acción o declaración arbitral o judicial, si la otra Parte: (a) ingresa en un estado de insolvencia, cesación o suspensión de pagos, (b) se presenta en concurso preventivo, (c) presenta judicialmente un pedido de quiebra propio o su quiebra es decretada a pedido de terceros (en este caso, únicamente si no es levantado dentro de los cinco (5) días corridos de haber sido conocido por cualquier medio), (d) inicia negociaciones para alcanzar acuerdos extrajudiciales con la generalidad de sus acreedores o con los que sean titulares de una porción substancial de su pasivo, para obtener prórrogas, quitas o esperas, o (e) es iniciado cualquier otro procedimiento que sea indicativo de dificultades económico-financieras.
            </Text>
            <Text style={styles.textContent}>

            (iii) En caso de incumplimiento de las demás obligaciones principales que este Contrato le impone a las Partes, y que pudiendo corregirse, no se remedien dentro de los veinte (20) días corridos siguientes a la notificación correspondiente, a menos que las Partes acuerden un plazo mayor para corregir los incumplimientos debidamente notificados. 
            </Text>

            <Text style={styles.title}>
            VIII. CONFIDENCIALIDAD 
            </Text>
            <Text style={styles.textContent}>

            VIII.1. Información Confidencial. Cada Parte deberá mantener estricta confidencialidad respecto de la información recibida por la otra Parte en el marco de la ejecución del presente Contrato y, en caso del Prestador de Servicios, éste deberá mantener estricta confidencialidad respecto de todo tipo de información que se detalle en los Servicios (la “Información Confidencial”), quedándoles prohibido utilizar dicha información para beneficio propio -salvo en virtud de las disposiciones del presente Contrato- y/o de terceros. Cada una de las Partes reconoce que los conocimientos e Información Confidencial de una Parte son propiedad de esa Parte.
            </Text>
            <Text style={styles.textContent}>
              VIII.2. Limitaciones a la Confidencialidad. La información obtenida por las Partes en virtud de este Contrato no será entendida como Información Confidencial siempre y cuando se trate de:
            </Text>
            <Text style={styles.textContent}>
            (i) información que sea o devenga de conocimiento público sin violación del presente Contrato; 
            </Text>
            <Text style={styles.textContent}>
            (ii) información que hubiese sido suministrada expresamente libre de toda restricción en cuanto a su uso; y
            </Text>

            
           
            <Text style={styles.footText}>
            NTD: discutir otras causales de rescisión con causa.
            </Text>
            </View>
        </Page>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
            
           
            <Text style={styles.textContent}>
            (iii) información que sea suministrada a alguna de las Partes por alguna persona que no estuviese conectada o asociada con alguna de las Partes y que no estuviese vinculada por alguna obligación de confidencialidad en relación a dicha información.
            </Text>
            <Text style={styles.textContent}>
            VIII.3. Incumplimientos. El incumplimiento del deber de confidencialidad por Parte de cualquiera de las Partes o sus dependientes facultará a la otra Parte a resolver este Contrato y a reclamar el resarcimiento de los daños y perjuicios ocasionados. 
            </Text>
            <Text style={styles.textContent}>
            VIII.4. Plazo. Las Partes deberán mantener la confidencialidad de la Información Confidencial durante la vigencia del Contrato y, en caso de su terminación, rescisión o resolución, luego de su finalización por un plazo de dos (2) años.
            </Text>
            <Text style={styles.textContent}>
            VIII.5. En caso de que la Información Confidencial fuera requerida a cualquiera de las Partes por orden de autoridad administrativa o judicial competente, previamente a su divulgación, deberá notificar por escrito a la otra Parte de inmediato o a más tardar dentro del primer día hábil siguiente de recibida la notificación de la orden pertinente, a fin de que este último pueda adoptar las medidas correspondientes a los fines de proteger la Información Confidencial. Asimismo, las Partes podrán solicitar todas las medidas judiciales pertinentes a los fines de resguardar la Información Confidencial.
            </Text>

            <Text style={styles.title}>
            IX. MISCELÁNEAS 
            </Text>
              <Text style={styles.textContent}>
              IX.1. Nulidad parcial. Si alguna parte o cláusula de este Contrato fuese declarada inválida, permanecerán vigentes las restantes disposiciones del Contrato y los derechos y obligaciones de las Partes serán juzgados como si dicha parte o cláusula no estuviese escrita, conforme lo establecido por el Artículo 389 del Código Civil y Comercial de la Nación. En tal supuesto, las Partes se obligan a instrumentar de buena fe los mecanismos necesarios para mantener la vigencia y el buen funcionamiento del Contrato, teniendo en cuenta la finalidad del mismo.
              </Text>
              <Text style={styles.textContent}>
              IX.2. Cesión. Itesa podrá ceder este Contrato y/o los derechos que emerjan del Contrato sin previo consentimiento previo otorgado por el Prestador de Servicios. El Prestador de Servicios no podrá ceder este Contrato ni los derechos que emerjan del Contrato no podrán ser cedidos por ninguna de las Partes sin previo consentimiento otorgado por escrito por la otra Parte. 
              </Text>
              <Text style={styles.textContent}>
              IX.3. Notificaciones. Todas las comunicaciones, citaciones, intimaciones, reclamos, interpelaciones y notificaciones, judiciales o extrajudiciales que deban ser cursadas entre las Partes en el marco del presente Contrato se considerarán válidas si son realizadas en los siguientes domicilios que las partes constituyen: 
              </Text>

              <Text style={styles.textContent}>
              A Itesa:
              </Text>
              <Text style={styles.textShort}>
              Dirección: Marcos Paz 2443 3ºC
              </Text>
              <Text style={styles.textShort}>
              E-mail: hello@itesa.co
              </Text>
              <Text style={styles.textContent}>
              At.: Martin Pilossof
              </Text>


              <Text style={styles.textContent}>
                Al Prestador de Servicios:
              </Text>
              <Text style={styles.textShort}>
              Dirección: {project.bankDetails.address}
              </Text>
              <Text style={styles.textShort}>
              E-mail: {project.email}
              </Text>
              <Text style={styles.textContent}>
              At.: {project.name + '' + project.lastName}
              </Text>
              <Text style={styles.textContent}>
              IX.4. Asesoramiento. Las Partes declaran que la Oferta ha sido elaborada en forma conjunta por las Partes. Las Partes declaran que el Contrato no constituye un contrato de cláusulas predispuestas, atento a que cada disposición ha sido discutida y consensuada por las Partes.
              </Text>
              <Text style={styles.textContent}>
              IX.5. Ley aplicable. Este Contrato se regirá por las leyes de la República Argentina. 

                </Text>
                <Text style={styles.textContent}>
                IX.6. Jurisdicción. Toda controversia que se suscite entre las Partes con relación a este Contrato, su existencia, validez, calificación, interpretación, alcance, cumplimiento o resolución, se resolverá definitivamente por los tribunales civiles y comerciales ordinarios de la Ciudad Autónoma de Buenos Aires. 
              </Text>

            </View>
        </Page>

       
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>
                Anexo I
              </Text>
              <Text style={styles.title}>
                SERVICIOS Y CONTRAPRESTACIÓN
              </Text>
              

                <Text style={styles.textShort}>
                 Servicios : {project.servicios}
                </Text>
                <Text style={styles.textShort}>
                Remuneración : {remuneracion} $
                </Text>
                <Text style={styles.textShort}>
                Esquema de pagos : {project.cuotasDB[1].monto >0 ? "Cuotas" : "Pago unico"}
                </Text>
                
                <Text style={styles.textShort}>
                Duración del proyecto : {Math.floor(duration / 7) <1 ? (duration + ' dias') : (Math.floor(duration / 7)+ " semanas")} 
                </Text>
                <Text style={styles.textContent}>
                Tipo de facturación :{project.bankDetails.type}
                </Text>
               



              <Text style={styles.textContent}>
              * Los pagos se realizan por transferencia bancaria a la cuenta provista por el prestador de servicios. Para poder emitir el pago es requisito presentar la facturación del proyecto al mail hello@itesa.co. Los pagos al prestador de servicios se realizan de forma directa por Itesa el primer día hábil del mes entrante.
              </Text>



            </View>
        </Page>
        


    </Document>
  );
 return <MyDocument/>
  
};

export default Contract
