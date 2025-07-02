export async function getVans(){
  const response = await fetch("/api/vans");
  if (!response.ok) {
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}

export async function getVan(id){
  const response = await fetch(`/api/vans/${id}`);
  if(!response.ok){
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}

export async function getHostVans(){
  const response = await fetch("/api/host/vans");
  if(!response.ok){
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}

export async function getHostVan(id){
  const response = await fetch(`/api/host/vans/${id}`);
  if(!response.ok){
    throw {
      message: "Failed to fetch Vans",
      statusText: response.statusText,
      status: response.statusText,
    }
  }
  const data = await response.json();
  return data.vans;
}