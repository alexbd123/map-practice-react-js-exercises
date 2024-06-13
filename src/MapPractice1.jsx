import { useEmojiGenerator } from "./useEmojiGenerator";
import React from 'react'

export default function MapPractice1() {
    const emojisArray = useEmojiGenerator();
    console.log("emojisArray", emojisArray);
    const emojiElements = emojisArray.map(emoji => <div className="emoji">{emoji}</div>)

    return (
        <div className="mapPractice">
            <h2>Map Practice 1</h2>
            <div className="emojiList">
                {emojiElements}
            </div>
        </div>
    );
}
