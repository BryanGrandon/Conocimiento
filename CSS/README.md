# Apuntes CSS

CSS (Cascading Style Sheets) Hojas de estilo en cascada, lo que nos permite agregarle estilos a los documentos HTML

## Valores y Unidades

---

### Keywords

- none: "ninguno"
- inherit: Sera heredado del elemento padre
- initial: Restablece el valor inicial
- unset: Restablece el valor heredado

### Medidas

<dl>
    <dt>Absolutas</dt>
    <dd>Medidas que no cambian, sin inportar el tamaño del proyecto</dd>
    <dd>px, in, cm, pc, mm, q</dd>
    <br />
    <dt>Relativas</dt>
    <dd>Medidas que cambian, por cientos valores establecidos</dd>
    <dd>em, rem</dd>
    <br />
    <dt>Flexibles</dt>
    <dd>Medidas relativas al tamaño del viewport</dd>
    <dd>vw, vmin, vmax, </dd>
</dl>

## Posicionamiento

---

<dl>
    <dt>static</dt>
    <dd>Posicionamiento estatico. Utiliza ek orden natural de los elementos HTML</dd>
    <br />
    <dt>relative</dt>
    <dd>Posicionamiento relativo. Los elementos se mueven ligeramente en base a su posicion estatica</dd>
    <br />
    <dt>absolute</dt>
    <dd>Posicionamiento absoluto. Los elementos se colocan en base al contenedor padre</dd>
    <br />
    <dt>fixed</dt>
    <dd>Posicionamiento fijo. Item al absoluto, pero aunque hagamos scroll no se mueve</dd>
    <br />
    <dt>sticky</dt>
    <dd>Posicionamiento "pegado". Similar al relativo, usado para pegar menus a la parte superior</dd>
</dl>
