# TP 10 - Formulario de Inscripción

Formulario de inscripción "Success Web" hecho con Expo (React Native) y react-hook-form.

## Cómo correr el proyecto

1. Instalar las dependencias:

   ```bash
   npm install
   ```

2. Levantar el proyecto con Expo:

   ```bash
   npx expo start
   ```

3. Desde la terminal que abre Expo, elegir cómo abrirlo: escanear el QR con la app Expo Go (Android/iOS), o presionar `a` (emulador Android), `i` (simulador iOS) o `w` (navegador).

## Validación elegida

Se usó **react-hook-form**, con cada campo envuelto en un `Controller` y las reglas de validación declaradas en la prop `rules`:

- `required` para los campos obligatorios (nombre, apellido, email, cantidad de propiedades, tipo de tarjeta).
- `pattern` para validar el formato del email.
- `min` para exigir un mínimo de propiedades.
- `validate` con funciones propias para los campos numéricos opcionales (hectáreas, patrimonio, bitcoins), verificando con `isNaN` que lo cargado sea un número aunque el campo no sea obligatorio.

Se eligió react-hook-form en lugar de manejar el estado y la validación a mano porque:

- Evita re-renderizar todo el formulario en cada tecla presionada (los inputs son no controlados por defecto), lo que resulta en mejor rendimiento en un formulario con varios campos.
- Centraliza las reglas de validación junto a cada campo (`rules`) en vez de dispersar `if`s de validación en el submit.
- Expone los errores de forma directa a través de `formState.errors`, lo que permite mostrar el mensaje correspondiente debajo de cada campo (`Campo` renderiza `error={errors.campo?.message}`).
- Simplifica el reseteo del formulario (`reset()`) después de un envío exitoso.

## Bonus resueltos

- **Ticket/certificado de confirmación**: al enviar el formulario con éxito se muestra un modal (`src/components/Ticket`) con los datos cargados a modo de "certificado de admisión", en vez de solo limpiar el formulario o mostrar un alert.
- **Selector (Picker) para el tipo de tarjeta**: el campo "Tarjeta de Estatus" usa `@react-native-picker/picker` con opciones predefinidas (Gold, Platinum, Centurion) en lugar de un texto libre.
- **Manejo de teclado**: uso de `KeyboardAvoidingView` para que el teclado no tape los campos, y `ScrollView` con `keyboardShouldPersistTaps="handled"` y `onScrollBeginDrag` para cerrar el teclado al scrollear sin interferir con el foco de los inputs.
- **Tema visual propio**: paleta de colores y tipografías centralizadas en `src/theme` para mantener un estilo consistente ("dorado/lujo") en todos los componentes.
