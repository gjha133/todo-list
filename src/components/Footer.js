import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <span className="icon">{`<`}{`/`}{`>`}</span>
            <p className="info">
                Developed by <span className="name"> <a href="https://github.com/gjha133" target="_blank" rel="noreferrer" className="link">
                    Gautam Jha
                </a></span>
            </p>
        </div>
    )
}