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

### Search Params
- import
  ```jsx 
  import {useParams, useSearchParams} from 'react-router-dom'
  ```
- initialise
  ```jsx
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredParams = searchParams.get("type");
  ```
- use / set
  - string initialization
    ```jsx
    <Link to={"?type=luxury"}>{data.type}</Link>
    ```
  - object / record initialization
    ```jsx
    <button onClick={() => {setSearchParams({type: `${data.type}`})}}>{data.type}</button>
    
    // to go back to current page (no filters)
    <button onClick={() => setSearchParams({})}>Clear</button>
    ```

> 🚨 Warning: if we hardcode the params like `to={"?type=luxury"}` then it will replace the whole URL. To avoid this we need to merge the other params with the new one and form new URL
- URLSearchParams() can be used to tackle this problem.
- here `to` is not an event handler so the function will run only once at the page load.
  ```jsx
  function getNewSearchParams(key, value){
    const newSearchParams = URLSearchParams(searchParams);
    if(value === null){
      newSearchParams.delete(key);
    }else{
      newSearchParams.set(key, value);
    }
  
    return `?${newSearchParams.toString()}`;
  }
  ```
  ```jsx
     <Link to={getNewSearchParams("type", data.type)}>{data.type}</Link>
  ```
- another method (using button tag)
  ```jsx
  function handleSearchParams(key, value) {
    setSearchParams(prevSearchParams => {
      const newSearchParams = prevSearchParams;
      if(value === null) newSearchParams.delete(key);
      else newSearchParams.set(key, value);
      return newSearchParams;
    });
  }
  ```
  ```jsx
  <button 
    key={type}
    onClick={() => handleSearchParams("type", type)}
  >{type[0].toUpperCase() + type.slice(1)}</button>)
  ```
  
### Link State
- browser can store some sort of link state, to use we can pass previous link/params as props
  ```jsx
  <Link to={van.id} state={{search: searchParams.toString()}}></Link>
  ```
- receive:
  ```jsx
  import {useParams, Link, useLocation} from "react-router-dom";

  const location = useLocation();
  
  <Link to={`..?${location.state?.search ?? ""}`} relative="path">Back to all vans</Link>
  ```
  
# splat route / catch all routes (404 page)
- we can put this catch all routes wherever we want in the layout.
```jsx
<Route path="*" element={NotFound}/>
```