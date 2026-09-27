# Terminal Terrestre «El Parque»

**Página publicada:** https://el-parque-los-otakus.vercel.app/  
**Repositorio:** https://github.com/61454674-tech/terminal-terrestre-el-parque

Proyecto académico de Los Otakus para la Universidad Continental. La rama `main` de este repositorio está conectada con Vercel: cada cambio enviado a GitHub Desktop mediante **Push origin** genera un nuevo despliegue.

## Presentación en otra computadora

1. Inicia sesión en **GitHub Desktop**. En **File > Clone repository…**, busca `terminal-terrestre-el-parque` en la pestaña **GitHub.com** y pulsa **Clone**. Este paso copia el repositorio completo a la computadora; no necesitas descargar ni extraer un ZIP.
2. Con el repositorio seleccionado, pulsa **Repository > Open in Visual Studio Code**.
3. Edita `index.html` o las páginas de `HTML/` y guarda con **Ctrl + S**. Con la extensión Live Server, pulsa **Go Live** para comprobar el cambio localmente.
4. Vuelve a GitHub Desktop. En **Changes**, escribe una descripción y pulsa **Commit to main**. Después pulsa **Push origin**: este segundo paso envía el cambio a GitHub.
5. Abre el [proyecto en Vercel](https://vercel.com/61454674-3588/el-parque-los-otakus/deployments). Cuando el último despliegue indique **Ready**, abre la [página pública](https://el-parque-los-otakus.vercel.app/) y actualiza el navegador.

Si ya tienes el repositorio clonado en esa computadora, usa **Fetch origin** y **Pull origin** antes de editar para recibir los cambios más recientes.

## Estructura

- `HTML/`: páginas interiores.
- `JS_CSS/`: `base.css`, `style.css` y `codigo.js`.
- `IMAGENES/`: imágenes del terminal y fotografías del equipo.

`index.html` está en la raíz para que Live Server y Vercel abran el inicio. `vercel.json` conserva las direcciones anteriores como `/servicios`.
