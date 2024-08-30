export default async function loadMap() {
    (g => { var h: Promise<unknown>, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
    });

    const { Map } = await google.maps.importLibrary("maps");
    return new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 43.4705, lng: -80.542 },
        zoom: 17,
        mapId: 'map'
    });
}
        // const lines = {
        //     ...geoJson,
        //     features: geoJson.features.filter(f => f.geometry.type == 'LineString')
        // };
        // map.data.addGeoJson(lines);
        // map.data.setStyle(feature => {
        //     const type = feature.getProperty('type');
        //     let strokeColor = 'black';
        //     if (type == 'bridge') strokeColor = 'green';
        //     if (type == 'hallway') strokeColor = '#668cff';
        //     if (type == 'tunnel') strokeColor = '#86592d';
        //     return {
        //         strokeColor: strokeColor,
        //         strokeWeight: 4
        //     };
        // });

        // route?.graphLocations.forEach(loc => {
        // 	if (loc.prevLocation != null) {
        // 		const line = new google.maps.Polyline({
        // 			path: loc.path.map(point => { return { lat: point[1], lng: point[0] } }) as any[],
        // 			strokeColor: 'red',
        // 			strokeWeight: 6,
        // 			zIndex: 1
        // 		});
        // 		line.setMap(map);
        // 	}
        // });