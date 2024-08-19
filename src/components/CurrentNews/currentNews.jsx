import style from './currentNews.module.css'
import { useEffect, useState } from 'react';

const CurrentNews = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('/api/discordMessages')
            .then(response => {
                console.log('Response status:', response.status);
                return response.text();  // Read as text first
            })
            .then(text => {
                console.log('Response text:', text);  // Log the raw text
                try {
                    const data = JSON.parse(text);  // Parse the text as JSON
                    setMessages(data);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            })
            .catch(error => console.error('Error fetching messages:', error));
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
}

export default CurrentNews;
