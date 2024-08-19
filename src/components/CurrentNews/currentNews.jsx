import style from './currentNews.module.css'
import { useEffect, useState } from 'react';

const CurrentNews = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('api/discordMessages')
            .then(response => response.json())
            .then(data => setMessages(data))
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
