import React from 'react';
import { Link } from 'react-router-dom';

const Game2Page = () => {
    return (
        <div className="game1-body">
            <video id="video-bg" autoPlay loop muted>
                <source src="game2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="info-container">
                <div className="info-content">
                    <h2 
                        id="counter-strike" 
                        style={{ whiteSpace: 'nowrap', position: 'absolute', fontFamily: 'csgoFont', fontSize: '60px' }}
                    >
                        Counter-Strike 2
                    </h2>
                    <div className="tournament-info" style={{ marginLeft: '10px' }}>
                        <h2>What to Expect</h2>
                        <p>Prepare for intense competitive battles in Counter Strike 2 tournaments. Here's what our tournaments offer:</p>
                        <ul>
                            <li>High-octane 5v5 team-based matches</li>
                            <li>Individual skill showcases in solo competitions</li>
                            <li>Diverse game modes to test your versatility</li>
                            <li>Frequent tournaments with varying challenges and rewards</li>
                            <li>An active gaming community for networking and camaraderie</li>
                        </ul>
                    </div>

                    <div className="eligibility">
                        <h2>Eligibility</h2>
                        <p>To participate in Counter Strike 2 tournaments, you must:</p>
                        <ul>
                            <li>Have a valid Counter Strike 2 account</li>
                            <li>Meet any age or region-specific requirements</li>
                            <li>Abide by fair play standards and uphold sportsmanship</li>
                        </ul>
                    </div>

                    <div className="gameplay">
                        <h2>How It's Played</h2>
                        <p>Counter Strike 2 is a renowned first-person shooter known for its strategic gameplay and fast-paced action. In our tournaments, teams engage in thrilling battles across various maps, strategizing and coordinating to complete objectives and eliminate opponents. With a focus on teamwork, communication, and precise shooting skills, Counter Strike 2 tournaments provide an exhilarating experience for players and spectators alike.</p>
                    </div>
                </div>

                <div className="create-tournament">
                    <center>
                        <Link to="/create-tournament">
                            <button>Create Tournament</button>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default Game2Page;
