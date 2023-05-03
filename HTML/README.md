# Apuntes de HTML

HTML (HyperText Markup Lenguage) it is a markup language that is used to create and structure the content of web pages.

---

## Document

The documents HTML have ending ( .html ).

Emmet.io allows us to create Basic structure for HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

---

## Metadata

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta
    name="description"
    constent="The main function of the website (No more than 165 character)"
  />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="image.png" />
  <title>website title</title>
</head>
```

---

## Group

```html
<p></p>

<!-- White Space -->
<pre></pre>

<!-- Ordered List -->
<ol>
  <li></li>
</ol>

<!-- Unordered List -->
<ul>
  <li></li>
</ul>

<!-- Description List -->
<dl>
  <dt></dt>
  <dd></dd>
</dl>

<!-- Cites -->
<blockquote></blockquote>

<!-- illustration optional -->
<figure>
  <figcaption></figcaption>
</figure>
```

---

## Text

```html
<p>
  <!-- strong text -->
  <strong></strong>

  <!-- Emphasized text -->
  <em></em>

  <!-- highlighted -->
  <mark></mark>

  <!-- italica -->
  <i></i>

  <!-- bold -->
  <b></b>

  <!-- underlining -->
  <u></u>

  <!-- strikethrough -->
  <s></s>

  <span></span>
  <cite></cite>

  <!-- links -->
  <a href="" target="_blank">link name</a>
</p>
```

---

## Content types

```html
<!-- Image -->
<img src="imageAddress.png" alt="image name" />

<!-- Video -->
<video src="videoAddress.mp4" controls></video>

<!-- Audio -->
<audio src="audioAddress.mp3" controls></audio>
```

## Table

```html
<table>
  <caption></caption>
  <thead>
    <tr>
      <th>(1)</th>
      <th>(2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(1)</td>
      <td>(2)</td>
    </tr>
  </tbody>
  <!-- Result -->
  <tfoot>
    <tr>
      <td>(1)</td>
      <td>(2)</td>
    </tr>
  </tfoot>
</table>
```

## Form

```html
<form action="">
  <fieldset>
    <legend>Fieldset name</legend>
    <label for="">Name input</label>
    <input type="" name="" id="" />

    <!-- Options -->
    <select name="" id="">
      <option value="option1">Opcion - 1</option>
      <option value="option2">Opcion - 2</option>
    </select>

    <input type="text" list="items" />
    <datalist id="items">
      <option value="1">Opcion 1</option>
      <option value="2">Opcion 2</option>
    </datalist>

    <!-- Button -->
    <button>Submit</button>
    <input type="submit" value="Submit" id="" />
  </fieldset>
</form>
```

## Interactivas

- detals
  - summary
- dialog

## Scripts

- script
  - defer
  - async

## Semanticas

- h1 - h6
- main
- div
- header
- secction
- article
- footer
- aside
- address
