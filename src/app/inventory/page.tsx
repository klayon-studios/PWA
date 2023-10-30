"use client";

export default function Inventory() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold p-2">Inventory</h1>
      <div className="grid grid-cols-3 p-2">
        {[...Array(5)].map((_, i) => (
          <Item key={i} />
        ))}
      </div>
    </div>
  );
}

const Item = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden m-1 border border-muted-foreground">
      <img src="https://dl.openseauserdata.com/cache/originImage/files/b8c5130e888de1498955c18026d694d2.png" />
    </div>
  );
};
