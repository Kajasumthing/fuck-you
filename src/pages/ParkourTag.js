import './Projects.css';
import background from '../assets/Background4.jpg';
import { useEffect, useState } from 'react';

function ParkourTag() {
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
                <h1 className="project-title">Pakourtag game (opendeurdag)</h1>
                <div className="project-content-center">
                    <h3>
                        Tijdens de kerstvakantie kreeg ik een uitnodiging van iemand die ik online ken en redelijk wat ervaring
                        heeft met de grafische aspecten te maken van games. Hij vroeg of ik zin had om mee te werken aan een
                        spel samen met een paar anderen die ik ken. Ik had zijn uitnodiging geaccepteerd omdat het thema van
                        het spel mij heel wat interesseerde. Het idee was om een soort tikkertje te maken met parkour elementen
                        erin vermengd "Parkourtag". Dit is dan hetgene waaraan ik het meeste van mijn tijd gespendeerd heb in
                        de 2de helft van het jaar. En ook hetgene waar ik het liefst aan werkte, geen traumas zoals bij de
                        python game en ik moest niet zelf de animaties en map maken voor het spel gelijk bij de gamejam game.
                        Ik moest enkel de code schrijven voor het spel en dat vond ik wel wijs. Eerst maakte ik gewoon een
                        script waarmee de speler kan sprinten, daarna voor te crouchen en dan voor te sliden. Hierna heb ik
                        kort een kleine "Anti-Cheat" gemaakt zodat spelers niet zouden zeuren (alhoewel deze niet perfect was).
                        Daarna was er een pauze tussen de volgende keer dat ik aan het spel werktte, maar wanneer ik er weer
                        aan begon heb ik fall damage toegevoegd, zodat je schade krijgt wanneer je van hoogtes valt en ook
                        een rol zodat je minder schade krijgt als je goed timed wanneer je rolt (juist voordat je de grond
                        raakt). Dan heb ik mij gefocust op interacties met muren, namelijk dat je op de uiteindes van muren
                        kan klimmen en dat je de muren zelf ook kan beklimmen. Als laatste functie heb ik een "Vault"
                        toegevoegd. Als je sprint terwijl je dichtbij een lage muur bent en dan springt zal je een vault
                        doen. Uiteindelijk als laatste voor de opendeurdag heb ik kleine "Time-Trials" gemaakt rond de
                        map zodat mensen uitdagingen kunnen doen rond de map en de controls gebruiken om een zo snel
                        mogelijke tijd te behalen.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default ParkourTag;
