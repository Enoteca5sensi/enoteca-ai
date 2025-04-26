import { useState } from 'react';

export default function Sommelier() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([
    { sender: 'ai', text: 'Benvenut* nell’Enoteca 5 Sensi! 🍷 Di che vino hai voglia oggi?' }
  ]);

  const handleSend = () => {
    if (!userInput.trim()) return;
    const updatedConversation = [...conversation, { sender: 'user', text: userInput }];
    setConversation(updatedConversation);
    setUserInput('');

    setTimeout(() => {
      let aiResponse = { sender: 'ai', text: '' };

      if (userInput.toLowerCase().includes('rosso')) {
        aiResponse.text = "Ti consiglio il nostro Barolo d'autore. Elegante, profondo! [Scopri il vino](/vini/barolo-dautore)";
      } else if (userInput.toLowerCase().includes('bianco')) {
        aiResponse.text = "Ottima scelta! Ti propongo il Vermentino della Costa, fresco e minerale. [Scopri il vino](/vini/vermentino-costa)";
      } else if (userInput.toLowerCase().includes('dolce')) {
        aiResponse.text = "Se ami i vini dolci, prova il nostro Moscato Fior d'Arancio. [Scopri il vino](/vini/moscato-fior-arancio)";
      } else {
        aiResponse.text = "Abbiamo tante proposte! Preferisci un consiglio per un'occasione speciale o per un regalo?";
      }

      setConversation(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sommelier Virtuale 🍷</h1>
      <div className="mb-4 h-96 overflow-y-auto bg-gray-100 rounded-xl p-4">
        {conversation.map((msg, index) => (
          <div key={index} className={msg.sender === 'ai' ? 'text-left' : 'text-right'}>
            <p className={msg.sender === 'ai' ? 'bg-white p-2 rounded-xl inline-block' : 'bg-green-100 p-2 rounded-xl inline-block'}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border p-2 rounded flex-grow"
          placeholder="Scrivi qui la tua preferenza..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Invia
        </button>
      </div>
    </div>
  );
}
