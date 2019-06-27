Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

```jsx
<Button appearance="primary">Primary</Button>{' '}
<Button appearance="secondary">Secondary</Button>{' '}
<Button appearance="success">Success</Button>{' '}
<Button appearance="danger">Danger</Button>{' '}
<Button appearance="warning">Warning</Button>{' '}
<Button appearance="info">Info</Button>{' '}
<Button appearance="light">Light</Button>{' '}
<Button appearance="dark">Dark</Button>
```

The Button component is designed to be used with the `<button>` element. However, you can also use this component as `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

```jsx
<Button as="a" href="#">Link</Button>{' '}
<Button type="submit">Button</Button>{' '}
<Button as="input" type="button" value="Input" />{' '}
<Button as="input" type="submit" value="Submit" />{' '}
<Button as="input" type="reset" value="Reset" />
```

In need of a button, but not the hefty background colors they bring? Add the `"outline"` variant to remove all background images and colors on any button.

```jsx
<Button variant="outline" appearance="primary">Primary</Button>{' '}
<Button variant="outline" appearance="secondary">Secondary</Button>{' '}
<Button variant="outline" appearance="success">Success</Button>{' '}
<Button variant="outline" appearance="danger">Danger</Button>{' '}
<Button variant="outline" appearance="warning">Warning</Button>{' '}
<Button variant="outline" appearance="info">Info</Button>{' '}
<Button variant="outline" appearance="light">Light</Button>{' '}
<Button variant="outline" appearance="dark">Dark</Button>
```

Fancy larger or smaller buttons? Use the `buttonSize` prop for additional sizes.

```jsx
<Button appearance="primary" buttonSize="lg">Large button</Button>{' '}
<Button appearance="secondary" buttonSize="lg">Large button</Button>
```

```jsx
<Button appearance="primary" buttonSize="sm">Small button</Button>{' '}
<Button appearance="secondary" buttonSize="sm">Small button</Button>
```

Create block level buttons—those that span the full width of a parent—by adding `fluid`.

```jsx
<Button fluid appearance="primary" buttonSize="lg">Block level button</Button>
<br />
<Button fluid appearance="secondary" buttonSize="lg">Block level button</Button>
```