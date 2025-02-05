import { useState } from "react";

const haversine = (
  latFrom: number,
  lngFrom: number,
  latTo: number,
  lngTo: number
) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = degToRad(latTo - latFrom);
  const dLon = degToRad(lngTo - lngFrom);

  latFrom = degToRad(latFrom);
  latTo = degToRad(latTo);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(latFrom) *
      Math.cos(latTo);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
};
const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

const HaversineExample = () => {
  const [latFrom, setLatFrom] = useState(0);
  const [lngFrom, setLngFrom] = useState(0);
  const [latTo, setLatTo] = useState(0);
  const [lngTo, setLngTo] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gap: 4 }}>
      <div>
        <span>Lat from </span>
        <input
          value={latFrom}
          onChange={(e) => setLatFrom(Number(e.target.value))}
          type="number"
          style={{ border: "1px solid #ddd", padding: 8, width: "100%" }}
          placeholder="lat from"
        />
      </div>
      <div>
        <span>Lng from </span>
        <input
          value={lngFrom}
          onChange={(e) => setLngFrom(Number(e.target.value))}
          type="number"
          style={{ border: "1px solid #ddd", padding: 8, width: "100%" }}
          placeholder="lng from"
        />
      </div>
      <div>
        <span>Lng to </span>
        <input
          value={latTo}
          onChange={(e) => setLatTo(Number(e.target.value))}
          type="number"
          style={{ border: "1px solid #ddd", padding: 8, width: "100%" }}
          placeholder="lat to"
        />
      </div>
      <div>
        <span>Lat to </span>
        <input
          value={lngTo}
          onChange={(e) => setLngTo(Number(e.target.value))}
          type="number"
          style={{ border: "1px solid #ddd", padding: 8, width: "100%" }}
          placeholder="lng to"
        />
      </div>
      <button
        style={{ gridColumn: "span 2 / span 2", padding: 4 }}
        onClick={() => setResult(haversine(latFrom, lngFrom, latTo, lngTo))}
      >
        caculator
      </button>
      <p>
        Result: <span style={{ fontWeight: 600 }}>{result.toFixed(3)} KM</span>
      </p>
    </div>
  );
};

export default HaversineExample;
