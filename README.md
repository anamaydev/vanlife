# React Routers

### How to highlight active page?
- Instead of using `<Link/>` use `<NavLink/>`
- `<NavLink/>` can take function or styles object
  - destructure the `isActive` boolean to check if the page is active or not
```jsx
<NavLink
  to="/host"
  className={({isActive}) => (isActive ? "page-link active-page-link": "page-link")}
>Host</NavLink>
<NavLink
  to="/about"
  className={({isActive}) => (isActive ? "page-link active-page-link": "page-link")}
>About</NavLink>
<NavLink
  to="/vans"
  className={({isActive}) => (isActive ? "page-link active-page-link": "page-link")}
>Vans</NavLink>
```
- `end` prop can be added if the link is active and multiple sublinks 
