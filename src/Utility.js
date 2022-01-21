const Utility = {
    getVersion: async () => {
        const res = await fetch("/version");
        const json = await res.json();
        return json?.version;
    }
}

export default Utility;