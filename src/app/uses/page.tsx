export default function UsesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">What I Use</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Hardware
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>MacBook Pro 14-inch (M3 Pro)</li>
            <li>Logitech G915 X LIGHTSPEED TKL</li>
            <li>Finalmouse Ultralight Phantom</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Development Tools
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Visual Studio Code</li>
            <li>Docker</li>
            <li>Postman</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Software
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Figma</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
