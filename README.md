# Calendar-io

Asistente personal en español con calendario mensual y registros por día. Incluye notas, frases, tareas y eventos, estado de ánimo, ingresos y gastos en COP, cuaderno cristiano con referencia bíblica, dictado y registro de recordatorios.

## Desarrollo

Requiere Node.js 20 o posterior. No necesita instalar dependencias.

```sh
npm run dev
```

El servidor usa el puerto 3000, configurable con `PORT`. Para las pruebas de fechas, validación y cálculos financieros:

```sh
npm test
```

## Datos y límites de esta primera versión

- Los datos se guardan en `localStorage` del navegador. No hay cuenta, servidor de datos ni sincronización. Exporta e importa respaldos JSON desde el menú. Importar reemplaza los datos con confirmación.
- Los totales son del día seleccionado y se expresan en pesos colombianos.
- El dictado depende de Web Speech API, del permiso de micrófono y de HTTPS o localhost. El navegador puede procesar la voz mediante su proveedor externo. Revisa el texto y pulsa Guardar registro para conservarlo. Si no hay soporte, usa dictado del teclado o escritura. El reconocimiento de voz real no se ha validado con micrófono físico.
- Los recordatorios requieren fecha y hora. Se comprueban cada 15 segundos con la app abierta y al abrirla; los pendientes vencidos se muestran al regresar. Las notificaciones del sistema requieren permiso y soporte del navegador. No hay push ni alarmas con la app cerrada.
- Usa la aplicación en la moto solo después de detenerte en un lugar seguro.

## Validación realizada

Tres pruebas automatizadas de modelo y una comprobación en Chromium de creación de notas, persistencia al recargar, cálculo de balance, completar tareas, persistencia del ánimo, cuaderno cristiano y ausencia de desbordamiento horizontal a 390 px. El diálogo de dictado se verifica; la captura de audio requiere validación manual en un dispositivo compatible.
