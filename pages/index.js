import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Benvenut* nell’Enoteca AI 🍷</h1>
      <p className="mb-8">Il tuo sommelier virtuale è pronto ad aiutarti!</p>
      <Link href="/sommelier">
        <a className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition">Parla con il Sommelier</a>
      </Link>
    </div>
  );
}