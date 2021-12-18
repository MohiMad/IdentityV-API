export default async function getStringifiedData(endpoint){
    const res = await fetch(endpoint);
    const data = await res.json();

    return JSON.stringify(data);
}