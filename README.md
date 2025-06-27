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

### 🧭 Relative Paths in React Router

- If a path **starts with `/`**, it's an **absolute path** — it matches from the root.
- If a path **doesn't start with `/`**, it's a **relative path** — resolved based on the current route.
- When using **nested routes** inside `<Routes>`, you should **prefer relative paths** in your `<Link>` or `<NavLink>`.
- To link to the **same route as the parent**, use `"."` as the path.
- Use the `end` prop on `<NavLink>` to ensure it only matches the **exact path**.

```jsx
<div className="flex gap-3 py-4">
  <NavLink to="." end>Dashboard</NavLink>
  <NavLink to="income">Income</NavLink>
  <NavLink to="vans">Vans</NavLink>
  <NavLink to="reviews">Reviews</NavLink>
</div>
```

- If we are not using nested routes, or we want to link relative to the current URL path instead of the matched route, use `relative="path`.
```jsx
<Link to=".." relative="path">Back</Link>
```
- If we are using nested routes then
```jsx
<Link to="..">Back</Link>
```
