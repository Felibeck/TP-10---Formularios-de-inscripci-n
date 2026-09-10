# Success Web - Formulario de Inscripción

Aplicación móvil desarrollada con React Native y Expo que simula un formulario de admisión para un club exclusivo de personas con alto patrimonio.

## Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ instalado
- npm o yarn
- Expo CLI (se instala con las dependencias)

### Pasos para correr el proyecto

1. **Clonar o descargar el proyecto**
```bash
cd "TP-10---Formularios-de-inscripción"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npx expo start
```

4. **Ejecutar en el emulador o dispositivo**
   - Presiona `i` para abrir en emulador de iOS
   - Presiona `a` para abrir en emulador de Android
   - Escanea el código QR con la app Expo Go en tu teléfono

## Estructura del Proyecto

```
src/
├── components/
│   ├── Formulario/          # Componente del formulario (sin lógica de estado)
│   └── Ticket/              # Componente que muestra el certificado
├── screens/
│   └── InscripcionScreen/   # Pantalla contenedora con lógica de estado
└── theme/                   # Colores y estilos globales
```

## Decisiones de Validación

### 1. **Validación con React Hook Form**
Elegimos **React Hook Form** como librería principal de validación porque:
- ✅ Integración nativa con componentes React Native
- ✅ Control granular mediante `Controller`
- ✅ Validación declarativa y fácil de mantener
- ✅ Mejor rendimiento (no re-renderiza el formulario completo en cada cambio)
- ✅ Soporte para validaciones síncronas y asincrónicas

### 2. **Estrategia de Validación Multi-capa**

#### **Validación de Campo Individual (rules)**
Cada campo tiene reglas específicas validadas en tiempo real:

- **Nombre y Apellido**: `required` - Campo obligatorio
- **Email**: `required` + `pattern` - Obligatorio y debe cumplir formato `usuario@dominio`
- **Cantidad de Propiedades**: `required` + `validate` + `min` - Obligatorio, debe ser número y mínimo 10
- **Tipo de Tarjeta**: `required` - Debe seleccionar una opción
- **Hectáreas, Patrimonio, BTC**: `validate` - Opcionales pero si se completan, deben ser números

#### **Validación en Tiempo Real**
Los errores se muestran inmediatamente bajo cada campo, guiando al usuario:
```jsx
{error && <Text style={styles.error}>{error}</Text>}
```

#### **Validación al Enviar (handleSubmit)**
React Hook Form previene el envío si hay errores en la validación. Solo procesa si todo es válido.

### 3. **Conversión de Tipos**
En `InscripcionScreen`, convertimos los strings a números antes de pasar los datos:
```javascript
const payload = {
    ...data,
    numPropiedades: Number(data.numPropiedades),
    hectareas: Number(data.hectareas),
    Patrimonio: Number(data.Patrimonio),
    btc: Number(data.btc),
};
```
**Por qué**: Los inputs de texto siempre retornan strings. Convertimos explícitamente para mantener la integridad de tipos en los datos finales.

### 4. **UX de Errores**
- Errores aparecen en **rojo** (`colors.error`) bajo el campo problemático
- Texto en **itálica** para diferenciación visual
- Mensajes claros en español para la audiencia
- Sin envío de datos si hay errores (prevención de datos inválidos)

## Arquitectura de Componentes

### Separación de Responsabilidades
```
InscripcionScreen (Padre)
├── Estado: ticketData
├── Lógica: handleFormSubmit, handleCloseTicket
├── Renderización condicional
└── Children:
    ├── Formulario (componente presentacional)
    └── Ticket (componente presentacional)
```

**Ventajas**:
- ✅ Estados centralizados
- ✅ Componentes reutilizables sin lógica acoplada
- ✅ Fácil testing y mantenimiento
- ✅ Flujo de datos unidireccional

## Tecnologías Utilizadas

- **React Native** - Framework UI multiplataforma
- **Expo** v57.0.0 - Toolchain para React Native
- **React Hook Form** - Validación de formularios
- **@react-native-picker/picker** - Selector Picker para opciones

## Flujo de la Aplicación

1. Usuario abre la app → Ve `Formulario`
2. Completa los campos → Validación en tiempo real
3. Presiona "Certificar mi Éxito" → Si todo es válido:
   - Datos se convierten a tipos correctos
   - Estado cambia a `ticketData`
   - Se muestra `Ticket` con resumen
4. Presiona "Volver a inscribir" → Estado vuelve a null
5. Regresa a `Formulario` vacío

## Notas de Desarrollo

- La app está optimizada para dispositivos móviles
- Los estilos usan diseño responsive con `maxWidth: 480`
- Todos los inputs numéricos tienen `keyboardType="number-pad"`
- Colores y tipografía centralizados en `src/theme`

---

**Versión**: 1.0  
**Estado**: Completado según TP-10
