These email templates use table for layout, because few email client does not
support marging and padding so it is hard to use `<div>` tag for layout,
media query is also not supported through out all the email clients.

# Requirement
1. Gulp
2. We are using few gulp packages to create final build which make the css
inline and replace images urls with absolute url.

# Build
- Final tempalte should be used from build folder.

# Instructions:
- We have single style.css file which have all the css used by templates.
- This css file have 2 sections:
  - Basic layout section which target different email client.
  - Flight centre style guide for email. Add any new css below this section.
- Each row in email template layout is `<tr>` which contain other table inside
for one, two or three column layout.
- If you need to create full width image use below code:

```html
<tr>
  <td class="full-width-image">
    <img src="images/header.jpg" width="600" alt="" />
  </td>
</tr>
```

- If you need to create one column use below code:

```html
<tr>
  <td class="one-column">
    <table width="100%">
      <tr>
        <td class="inner">
          <p class="h1">Lorem ipsum dolor sit amet</p>
          <p>Maecenas sed ante pellentesque, posuere leo id, eleifend dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent laoreet malesuada cursus. Maecenas scelerisque congue eros eu posuere. Praesent in felis ut velit pretium lobortis rhoncus ut erat.</p>
        </td>
      </tr>
    </table>
  </td>
</tr>
```

- If you need to create two column use below code:

```html
<tr>
  <td class="two-column">
    <!--[if (gte mso 9)|(IE)]>
    <table width="100%">
    <tr>
    <td width="50%" valign="top">
    <![endif]-->
    [column to go here]
    <!--[if (gte mso 9)|(IE)]>
    </td><td width="50%" valign="top">
    <![endif]-->
    [column to go here]
    <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </td>
</tr>
```

- If you need to create three column use below code:

```html
<tr>
  <td class="three-column">
    <!--[if (gte mso 9)|(IE)]>
    <table width="100%">
    <tr>
    <td width="200" valign="top">
    <![endif]-->
    [column to go here]
    <!--[if (gte mso 9)|(IE)]>
    </td><td width="200" valign="top">
    <![endif]-->
    [column to go here]
    <!--[if (gte mso 9)|(IE)]>
    </td><td width="200" valign="top">
    <![endif]-->
    [column to go here]
    <!--[if (gte mso 9)|(IE)]>
    </td>
    </tr>
    </table>
    <![endif]-->
  </td>
</tr>
```
