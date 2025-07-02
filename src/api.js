export async function getVans(){
  const response = await fetch("/api/vans");
  const data = await response.json();
  return data.vans;
}

export async function getVan(id){
  const response = await fetch(`/api/vans/${id}`);
  const data = await response.json();
  return data.vans;
}

export async function getHostVans(){
  const response = await fetch("/api/host/vans");
  const data = await response.json();
  return data.vans;
}

export async function getHostVan(id){
  const response = await fetch(`/api/host/vans/${id}`);
  const data = await response.json();
  return data.vans;
}