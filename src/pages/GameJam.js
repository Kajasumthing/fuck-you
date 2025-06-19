import './Projects.css';
import background from '../assets/Background3.gif';
import { useEffect, useState } from 'react';

function GameJam() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.body.style.overflow = 'auto'; // scroll mogelijk
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 100;
        setOffset({ x, y });
    };

    return (
        <div className="project-wrapper" onMouseMove={handleMouseMove}>
            {/* Dynamische achtergrond met muisbeweging */}
            <div
                className="project-background"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: `${50 + offset.x}% ${50 + offset.y}%`
                }}
            />
            <div className="overlay" />

            {/* Inhoud */}
            <div className="project-container">
                <h1 className="project-title">Creator's Dilemma (Gamejam game)</h1>
                <div className="project-content-center">
                    <h3>
                        Na het einde van het schooljaar 2023-2024 begon ik meer te werken in Roblox Studio voor games te
                        maken, eerst met
                        een paar gemakkelijke projecten en in Augustus van de zomervakantie heb ik deelgenomen aan een
                        Game Jam, een soort
                        evenement waarbij je een bepaalde hoeveelheid tijd krijgt om een spel te maken, in dit geval was
                        het 7 dagen. Mijn
                        idee was om een spel te maken geïnspireerd door het spel "Five Nights at Freddy's". Een spel
                        waarbij je vast zit in een office tijdens de nachtshiften en er faulty robots je proberen te
                        vermoorden tijdens de nacht.
                    </h3>
                    <img
                        src="https://media1.tenor.com/m/ZTnG3zbpwfYAAAAd/fnaf-freddy.gif"
                        alt="HARHARHARHARHAHR"
                        className="project-image"
                    />
                    <h3>
                        Het idee van het spel is is dat er een indringer in je huis is geraakt en dat je van middernacht tot
                        6 uur 's ochtends moet overleven tot wanneer de politie aankomt en hem oppakt. Je jaagt de
                        indringer weg door met een flashlight op zijn gezicht te schijnen wanneer je hem ziet. Er is ook een
                        kans dat hij probeert binnen te dringen via de tv en dan moet je de tv gewoon uitschakelen. Ik wou
                        hieraan eerst verderwerken en het mijn definitieve eindproject maken, maar heb dan besloten om aan
                        iets anders te werken wanneer ik er voor uitgenodigd werd.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default GameJam;
