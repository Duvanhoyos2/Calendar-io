# Calendar-io

## Abrir y modificar

1. Descarga `index.html` y guárdalo en una carpeta de tu computador.
2. Haz doble clic en `index.html` para abrir la aplicación en Chrome o Edge.
3. Abre ese mismo archivo en VS Code para modificarlo. Todo el HTML, diseño CSS y JavaScript está dentro del archivo, ordenado y con comentarios.
4. Guarda con Ctrl + S y recarga el navegador.

No necesitas instalar Node.js, dependencias ni ejecutar comandos. No necesitas los archivos separados de versiones anteriores.

## Tus datos

Los registros se guardan en el navegador. Exporta un respaldo desde el menú antes de cambiar de navegador, mover el archivo o reemplazar una versión: el almacenamiento de archivos locales depende del navegador y de su ruta. Los datos de la versión que se ejecutaba con servidor no se trasladan automáticamente; expórtalos allí e impórtalos en esta versión. No hay sincronización entre dispositivos.

Los totales financieros son del día seleccionado, en pesos colombianos. Los recordatorios se revisan con la aplicación abierta y al volver a abrirla; no hay alarmas con la aplicación cerrada.

El dictado depende del soporte y los permisos del navegador. Algunos navegadores restringen el micrófono en archivos locales; en ese caso puedes escribir o usar el dictado del teclado. La captura real de voz requiere una prueba manual. Usa la aplicación en la moto solo cuando estés detenido en un lugar seguro.

## Dictar notas

Pulsa «Dictar una nota» y acepta el permiso del micrófono. Habla: cuando el navegador termine de reconocer la frase, la nota se guarda automáticamente en el día seleccionado. También puedes pulsar «Terminar y guardar». No se guarda ninguna nota si no se recibe texto. La nota contiene el texto reconocido, no una grabación de audio.

El reconocimiento usa el servicio de voz del navegador y puede necesitar Internet. Si falla, el mensaje explica si se trata de permisos, micrófono no disponible, conexión o falta de soporte, y permite reintentar sin cerrar la nota. El código no puede eludir los permisos del navegador. En archivos locales, si el navegador bloquea el servicio, Windows + H con el cursor en la descripción permite dictar mediante Windows; con esta alternativa hay que pulsar Guardar registro manualmente.

Se verificó el flujo con reconocimiento simulado: transcripción y guardado automático, persistencia al recargar, error de permisos sin sobrescribirlo, reintento, parada manual y silencio sin crear una nota vacía. La captura física del micrófono y el servicio de reconocimiento deben probarse en el equipo del usuario.
