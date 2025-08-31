# Proyecto transporte

Estructura portfolio

![image.png](04d19e5e-54fa-4da7-9c1d-f9eb799803cb.png)

```json
{
	type: quote-subtitle,
	quote-text: “” ,
	subquote-text: “” ,
	
	
}
```

![image.png](a238185e-656c-4de8-86c8-4f3d6c1adcd6.png)

```json
{
	type: data-point,
	data-text: “” ,
	subquote-text: “” ,
}
```

Imagen

```json
{
	type: image,
	image-source: “portfolio.jpg” ,
	alt-text: “”,
  caption: “”,
}
```

Quotes

```json
{
	type: quote,
	text: “”,
}
```

Icon captions + blank subquote

```json
{
	icon: "cross mark emoji",
	quote-text: “” ,
	subquote-text: “” ,
}
```

Callout 

```json
{
type: callout,
text: “¿Qué opinan los usuarios sobre la app Tarjeta Transporte de la EMT y qué cambios les ayudarían a usarla de forma más cómoda en su día a día?”,
}
```

## 

## Rediseño: Tarjeta Transporte Madrid

El rediseño de la app de la “Tarjeta de transporte de EMT Madrid” surge al detectar fricciones en la recarga de títulos. A través de investigación con distintos perfiles de usuario, identifiqué barreras en el uso de NFC, errores de recarga y falta de confianza en el sistema. Mi propuesta busca ofrecer una experiencia más rápida, clara y accesible que favorezca el uso del transporte público.

**Fechas:**  05/2025 - 08/2025

**Herramientas usadas:** Figma Google Forms Zoom Notion Miro (iconos)

# Investigar

**Problema**

```json
{
type: callout,
text: “"Los usuarios del transporte público en Madrid experimentan fricciones y errores frecuentes al recargar sus títulos en la app actual, lo que genera desconfianza y dificulta su uso. Necesitan una forma rápida, intuitiva y fiable de gestionar sus recargas y desplazamientos, que les brinde mayor control, optimice su tiempo y favorezca el uso del transporte público frente al privado”,
}
```

---

### 

Recargar el abono de transporte en Madrid debería ser simple, pero la app oficial convierte este trámite cotidiano en una fuente de frustración: cobros duplicados (unas 200 reclamaciones al mes) y caídas constantes del sistema dejan a los usuarios atrapados sin acceso al transporte. Hasta 2022, la ciudad había logrado que más personas optaran por el transporte público, pero en el último año ese impulso se está frenando, justo cuando más usuarios dependen del servicio. Estos puntos de dolor afectan directamente la vida diaria: desde planes sociales frustrados hasta dificultades para fomentar un transporte más ecológico.

**Objetivos (Research goals)**

- Entender cómo y cuándo los usuarios recargan sus títulos de transporte: tipo de abono, canal de recarga, frecuencia y errores habituales.
- Identificar barreras y puntos de fricción en la recarga digital, especialmente vía NFC: nivel de comodidad con la tecnología, compatibilidad del móvil y claridad del proceso.
- Explorar cómo los usuarios perciben el control y la seguridad al gestionar su abono: ¿Confían en el sistema? ¿Revisan su saldo con frecuencia?
- Observar cómo varían estas experiencias según tipo de usuario (habitual, turista, perfiles tecnológicos) para personalizar mejoras.
- Detectar necesidades y deseos de los usuarios que no están directamente relacionados con la recarga, pero impactan su experiencia general.
- Recoger opiniones sobre la app actual para guiar decisiones de rediseño y priorización de mejoras.

**¿Cómo lo hacen en otras grandes ciudades?**

Al analizar cómo ciudades con alto flujo de usuarios gestionan las fricciones en transporte, observé que la mayoría apuestan por eliminar billetes físicos y conectar la movilidad con servicios cotidianos, como compras de última hora.

```json
{
type: quote,
text: ““Mientras voy a coger el metro, me quiero comprar una botella de agua””,
}
```

Integrar estas necesidades en la app no solo simplifica la experiencia de usuario, sino que refuerza la marca como un servicio versátil y presente en la vida diaria, convirtiéndola en el método de recarga preferido por nuevos y recurrentes usuarios.

**Auditoría competitiva / Competitive audit** 

Llevé a cabo una auditoría de competidores centrada en seis grandes áreas metropolitanas internacionales: Madrid, París, Londres, Nueva York, Seúl y Tokio.

En una primera fase, el análisis exploró la propuesta de valor, las ventajas y desventajas de cada compañía a través de preguntas clave:

- ¿Qué hace que esta compañía sea única?
- ¿Cuáles son sus principales ventajas?
- ¿Dónde podrían existir inconvenientes?

Una vez recolectada la información, se generaron perfiles claros de cada compañía:

```json
{
type: quote-subtitle,
quote-text: “EMT Madrid” ,
subquote-text: “Ofrece una aplicación para distintos servicios de transporte, pero sigue anclada en un sistema multioperador arcaico” ,
}
```

```json
{
type: quote-subtitle,
quote-text: “**Île-de-France Mobilités:**” ,
subquote-text: “Dispone de un sistema postpago según el servicio utilizado, aunque con costes operativos elevados” ,
}
```

```json
{
type: quote-subtitle,
quote-text: “**TFL Oyster**” ,
subquote-text: “Integra el pago a través de Wallet/Apple Pay, pero pierde visibilidad sobre sus usuarios” ,
}
```

```json
{
type: quote-subtitle,
quote-text: “**OMNY System**” ,
subquote-text: “Permite establecer límites de uso para evitar cobros indebidos, pero no es accesible ya que no contempla todas las reducciones de tarifa” ,
}
```

```json
{
type: quote-subtitle,
quote-text: “**T-money**” ,
subquote-text: “Permite usar una sola tarjeta para toda la ciudad, aunque enfrenta barreras culturales entre Oriente y Occidente” ,
}
```

```json
{
type: quote-subtitle,
quote-text: “**Suica / Pasmo**” ,
subquote-text: “Ofrece una tarjeta digital válida en todos los transportes y algunos comercios, pero la fragmentación entre operadores privados dificulta la experiencia” ,
}
```

```json
{
type: image,
image-source: “competitive_audit.jpg” ,
alt-text: “Competitive audit”,
caption: “Competitive audit”,
}
```

**Oportunidades/Key Insights**

Estos hallazgos nos permiten identificar los puntos críticos de fricción y oportunidades de mejora, sirviendo como base para el rediseño de la app y la priorización de funcionalidades

```json
{
type: data-point,
data-text: “Usabilidad” ,
subquote-text: “Aumenta la confianza y facilita la adopción de la app” ,
}
```

```json
{
type: data-point,
data-text: “Fare capping” ,
subquote-text: “Considerar pagos por uso, abonos semanales y descuentos automáticos” ,
}
```

```json
{
type: data-point,
data-text: “Automatizaciones” ,
subquote-text: “Automatizar acciones frecuentes según patrones de uso para mejorar la experiencia del usuario” ,
}
```

### Entrevista a los usuarios

```json
{
type: callout,
text: “**¿Qué opinan los usuarios sobre la app Tarjeta Transporte de la EMT y qué cambios les ayudarían a usarla de forma más cómoda en su día a día?**”,
}
```

```json
{
type: image,
image-source: “users_research.jpg” ,
alt-text: “Grupos de investigación”,
caption: “Grupos de investigación”,
}
```

El cuestionario se aplicó tanto de manera digital como telefónica, ofreciendo apoyo a los participantes cuando lo necesitaron y las cuestiones se agruparon en 6 clústeres:

- Hábitos de recarga
- Fricciones en la experiencia digital (NFC)
- Percepción de control y confianza
- Diferencias de uso entre perfiles de usuario
- Descubrimiento de oportunidades no anticipadas
- Rediseño de la app existente

Para rediseñar la aplicación de recarga de abonos de la EMT, enfoqué mi investigación en aspectos clave como la usabilidad, la claridad de la información, la accesibilidad y la satisfacción general.

Llevé a cabo un estudio mixto de carácter **cuantitativo**, mediante un formulario en Google Forms basado en una escala Likert de 5 puntos para medir el grado de acuerdo o desacuerdo en relación con posibles puntos de dolor, y también **cualitativo**, a través de preguntas abiertas que permitieron identificar oportunidades de mejora.

### **Hallazgos clave/Key findings**

La entrevista arrojó 5 hallazgos clave: 

```json
{
icon: "Warning emoji",
quote-text: “**Confianza limitada**” ,
subquote-text: “Los usuarios prefieren recargar en estaciones porque perciben el flujo de la app como poco confiable” ,
}
```

```json
{
icon: "Hammer and Wrench emoji",
quote-text: “**Errores en la pasarela de pago**” ,
subquote-text: “Fallos técnicos y problemas de lectura interrumpen el proceso de recarga” ,
}
```

```json
{
icon: "Cross Mark emoji",
quote-text: “**Alta tasa de abandono**” ,
subquote-text: “1 de cada 3 usuarios no completa la recarga debido a la complejidad del flujo” ,
}
```

```json
{
icon: "Sparkles emoji",
quote-text: “**Deseo de personalización**” ,
subquote-text: “Guardar ajustes o recargas favoritas es la funcionalidad más deseada” ,
}
```

```json
{
icon: "Dizzy face emoji",
quote-text: “Poco intuitiva” ,
subquote-text: “La app cumple su función, pero la navegación y los flujos generan fricción y confusión” ,
}
```

```json
{
type: quote,
text: “ Lo que más echo en falta es tener un botón de "recarga habitual" o "favoritos" para cargar con sólo darle un botón y no tener q estar buscando mi título.
-A."
}
```

# Definir

### 

Con lo aprendido en la investigación, armé perfiles y recorridos de usuario para identificar sus principales puntos de dolor. Esto me sirvió como guía clara para enfocar las ideas de diseño.

### Personas

```json
{
	type: image,
	image-source: “Persona_1.jpg” ,
	alt-text: “Persona 1. ”,
  caption: “Persona 1: Laura es una joven farmacéutica que viaja diariamente en metro y necesita una forma clara y confiable de consultar su saldo y confirmar sus recargas, porque le genera ansiedad no saber si el proceso funcionó correctamente ”,
}
```

```json
{
	type: image,
	image-source: “Persona_2.jpg” ,
	alt-text: “Persona 2. ”,
  caption: “Persona 2: Matías necesita sentirse acompañado y seguro durante las recargas, porque sin una guía clara y accesible abandona la app y recarga presencialmente, perdiendo tiempo valioso en su trayecto”,
}
```

```json
{
	type: image,
	image-source: “Persona_3.jpg” ,
	alt-text: “Persona 3. ”,
  caption: “êrsona 3: Jorge es un ejecutivo de mediana edad con una agenda apretada que necesita realizar sus recargas de forma rápida y sin fricciones, porque le frustra perder tiempo repitiendo datos y no poder pagar con el método que le resulte más cómodo en ese momento ”,
}
```

```json
{
	type: image,
	image-source: “Persona_4.jpg” ,
	alt-text: “Persona 4. ”,
  caption: “Persona 4: Joel necesita una forma de recargar su abono sin depender directamente de sus padres, porque le incomoda no tener control sobre su propio transporte ”,
}
```

### Journey maps

```json
{
type: image,
image-source: “Journey map_1.jpg” ,
alt-text: “Journey map de Persona 1 ”,
caption: “ ”,
}
```

```json
{
type: image,
image-source: “Journey map_2.jpg” ,
alt-text: “Journey map de Persona 2 ”,
caption: “ ”,
}
```

```json
{
type: image,
image-source: “Journey map_3.jpg” ,
alt-text: “Journey map de Persona 3 ”,
caption: “ ”,
}
```

```json
{
type: image,
image-source: “Journey map_4.jpg” ,
alt-text: “Journey map de Persona 4 ”,
caption: “ ”,
}
```

### **Solución del problema**

Personificar los hallazgos jugó un papel importante en mi capacidad de empatizar con los usuarios. Cada persona me hizo reflexionar sobre los diferentes objetivos que podían tener, las emociones que surgían durante el uso y sus necesidades específicas.  

Gracias a esto, pude definir la solución del problema: 

```json
{
type: callout,
text: “Rediseñé la app de la Tarjeta de Transporte de EMT Madrid para minimizar las fricciones previas y ofrecer una experiencia más rápida, confiable y accesible. El nuevo diseño permite a los usuarios recargar títulos de manera intuitiva con un flujo simplificado y configuraciones favoritas, navegar por una interfaz clara e inclusiva que se adapta a distintos perfiles de usuario, y recibir feedback inmediato con alertas preventivas que aumentan la confianza y el control sobre su saldo, fomentando así el uso del transporte público.”,
}
```

# Idear

Llegado este punto, ya contaba con una imagen mental muy rica sobre qué ocurría con la aplicación, cómo funcionaban otras empresas del mercado, quiénes eran los usuarios y qué necesitaban, cómo se sentían y hacia dónde tenía que caminar. 

### User Flow

Para trasladar toda esta información “a tierra” armé un User flow general de todos los casos de uso.

```json
{
type: image,
image-source: “Final_flowchart.jpg” ,
alt-text: “Primer User Flow general”,
caption: “Primer User flow general antes de sufrir cambios debido a la iteración ”,
}
```

Cada iteración me permitió mejorar la claridad del flujo y asegurar que los usuarios pudieran completar la tarea principal sin confusión. Este proceso de refinamiento fue clave para construir wireframes más efectivos y centrados en el usuario.

Algunos cambios a destacar fueron:

- **Punto Clave 1:** En el proceso de iteración, observamos que el tutorial inicial del login interrumpía la tarea principal, por lo que lo trasladé a la barra inferior, para dar acceso opcional.
- **Punto Clave 2:**  Respecto al apartado de grupo familiar, me di cuenta de que incluir tantas opciones en un apartado independiente dificultaba el uso de la app. Por eso, lo eliminé y trasladé sus funciones a otras secciones, logrando un flujo más simple y enfocado en las necesidades reales del usuario.

### Wireframings

Aquí muestro algunos wireframes analizando las iteraciones realizadas para entender cómo evolucionó el diseño a partir del feedback y las decisiones de usuario.

```json
{
type: image,
image-source: “Wireframes_login.jpg” ,
alt-text: “Wireframe del proceso de inicio de sesión”,
caption: “Wireframe del proceso de inicio de sesión ”,
}
```

Iteraciones realizadas:

- **Splash screen**
    - Se añadió una pantalla inicial con la imagen de marca.
    - Permite recargas rápidas sin necesidad de autenticarse.
- **Modales (pop-ups)**
    - Reemplazo de pop-ups por modales con feedback reforzado: colores, texto e iconos.
    - Inclusión de CTAs claros, menos intrusivos para el usuario.
- **Vinculación de tarjeta de abono**
    - Ajuste del flujo para reducir abandono causado por tarjetas cambiantes o dificultad para identificarlas.
    - Se mantuvo la funcionalidad pero simplificando la interacción.
- **Recuperación de contraseña**
    - Proceso con feedback constante mediante pantallas, iconos y modales.
    - Opción de abandonar la tarea sin frustración, mejorando la experiencia.
    
    ```json
    {
    type: image,
    image-source: “Wireframes_procesoderecarga.jpg” ,
    alt-text: “Wireframe del proceso de recarga”,
    caption: “Wireframe del proceso de recarga ”,
    }
    ```
    
    Iteraciones realizadas:
    
    - **Recargas rápidas vs nueva configuración**
        - Sección dividida en dos grupos: favoritos configurados para usuarios con prisa y nueva recarga.
        - Reduce el esfuerzo cognitivo y agiliza la navegación.
    - **Feedback continuo**
        - Elemento gráfico que indica pasos totales y progreso actual en la recarga.
        - Proporciona orientación clara durante todo el proceso.
    - **Selección de nueva configuración**
        - Opciones de zona tarifaria, tipo de abono y método de pago organizadas con jerarquía visual.
        - Mejora la comprensión y facilita la elección.
    - **Pantalla de confirmación**
        - Muestra detalles de la recarga antes de finalizar.
        - Permite abandonar el proceso si el usuario lo desea.
    - **Lectura NFC**
        - Tres pantallas que ofrecen feedback y guías claras para cada acción requerida.
        - Mejora la transparencia y reduce errores.
    

# Diseñar

### Mockups

Tras los wireframes, creé los mockups para transformar las estructuras iniciales en interfaces visuales completas. El objetivo fue **dar claridad y consistencia** a cada pantalla, asegurando que la experiencia del usuario fuera intuitiva y fácil de seguir.

```json
{
type: image,
image-source: “Mockups_full.jpg” ,
alt-text: “Mockups”,
caption: “Mockups”,
}
```

```json
{
type: image,
image-source: “Mockups_full.jpg” ,
alt-text: “Mockups”,
caption: “Mockups”,
}
```

### Design system

```json
{
	type: image,
	image-source: “Design_system.jpg” ,
	alt-text: “Design System”,
	caption: “”,
}
```

### Prototyping