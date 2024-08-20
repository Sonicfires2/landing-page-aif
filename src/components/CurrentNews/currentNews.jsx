import { useEffect, useState } from 'react';

const CurrentNews = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('https://landing-page-aif.vercel.app/api/messages'); // Specify the full URL with port
                const text = await response.text(); // Read the raw response as text
                console.log('Raw response:', text); // Log the raw text
                
                // Attempt to parse the text as JSON
                const data = JSON.parse(text);
                setMessages(data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Discord Channel Messages</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>
                        <strong>{msg.author}:</strong> {msg.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrentNews;
