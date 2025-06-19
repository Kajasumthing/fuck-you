import './Projects.css';
import background from '../assets/Background2.gif';
import { useEffect, useState } from 'react';

function PythonGame() {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        document.body.style.overflow = 'auto'; // scroll mogelijk
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
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
                <h1 className="project-title">Python Game Blog</h1>
                <div className="project-content-center">
                    <h3>
                        Ik haat deze app met heel mijn ziel.
                        Deze app was volledig gemaakt in Python met behulp van de Pygame library en de python IDE PyCharm,
                        iets wat ik niemand anders zou aanraden. Eerst was ik begonnen met een paar basisprojecten te maken
                        met behulp van pygame zoals
                        een scherm dat constant epileptische aanvallen bezorgt of snake nagemaakt aan de hand van een
                        tutorial. Nadat ik vond dat ik genoeg
                        had geoefend besloot ik om mij in te zetten voor een groter spel te maken. Ik wou een soort van rpg
                        spel maken waarbij de speler
                        start in een soort van gras zone waarbij je eerst tegen een karakter kon praten die dan begon uit te
                        leggen dat de wereld om zeep
                        was. Hij legt uit dat de 4 uithoeken van de wereld veranderd waren in verschillende soorten hellen.
                        Links was alles omgezet in een
                        permanente sneeuwstorm waardoor je moeilijk kon zien wat je deed. Rechts was het een woestijn
                        geworden vol met vulkanen
                        waar het te warm was om ook maar een dag te overleven en waar de grond vanonder je voeten valt.
                        Onderaan was het een moeras waar
                        je nog geen stap kon zetten of je werd achtervolgd door een bende carnivorische beesten. En
                        uiteindelijk was bovenaan de plaats
                        waar de persoon zich bevond die de hele wereld zo heeft gemaakt, en waar het einddoel van het spel
                        zou zijn. Voor te starten begon
                        ik gewoon met wat controls te maken zodat de speler zich kon bewegen in het spel. Het spel was 2d
                        met een top-down view dus je kon
                        enkel naar links/rechts en boven/onder gaan. Daarna vond ik mijn eerste obstakel, namelijk ervoor
                        zorgen dat de speler niet door
                        muren kan lopen. Dit duurde een paar wekene tegen dat het opgelost was maar uiteindelijk kreeg ik
                        het aan de praat. Daarna moest
                        ik ervoor zorgen dat de speler van ruimte kon veranderen. Dus keek ik elke 1/60 seconden waar de
                        speler zich bevondt op het scherm,
                        als hij 5 pixels van een van de randen stond dan verplaats ik hem naar het volgende scherm in die
                        richting en houd bij in een counter
                        waar hij zich bevindt met x en y coordinaten. Na dit begon ik met de sneeuw sectie te maken. NOOIT
                        MEER WIL IK DIT DOEN. Het idee was
                        simpel op papier: je hebt een ijsveld met een blok of meerdere blokken ijs erop die je kan duwen,
                        deze ijsblokken glijden door tot
                        wanneer ze een muur raken. Wat in werkelijkheid gebeurde is dit:
                    </h3>
                    <img
                        src="https://media.discordapp.net/attachments/1102825675997593660/1248549263533932544/2024-05-1611-58-08-Trim-Trim-ezgif.com-video-to-gif-converter.gif?ex=683fff1d&is=683ead9d&hm=643308af7b54147072daf91c4b27f3442dbed9818de2de4ac7f9f637e671eb1e&="
                        alt="Python Game preview"
                        className="project-gif"
                    />
                    <img
                        src="https://media.discordapp.net/attachments/1102825675997593660/1248549288502624276/2024-05-2113-52-28-Trim-ezgif.com-video-to-gif-converter.gif?ex=6842a223&is=684150a3&hm=304997768aaa1d520a7ab5e88d8b26449b3fee45f7c2631c7b0649bd003094ab&="
                        alt="Mentale breakdown"
                        className="project-gif"
                    />
                    <img
                        src="https://media.discordapp.net/attachments/1102825675997593660/1248549248744558664/2024-05-0211-39-23-Trim-ezgif.com-video-to-gif-converter.gif?ex=6842a219&is=68415099&hm=fb8df9d151d98728b01f0a0645de55ae257c60bfc493a2b3906b3cb081ee271a&="
                        alt="fuck deze shit"
                        className="project-gif"
                    />
                    <h3>
                        Uiteindelijk duurde het meer dan een maand tegen dat ik deze verdomde dozen aan de praat kreeg en ze
                        werkten zoals dat ze moesten werken. Daardoor had ik geen tijd meer voor de andere 3 secties van de map
                        te maken en de traumas die ik heb overgehouden aan dit maken zorgden ervoor dat ik er het volgende jaar niet
                        meer aan wou verderwerken.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default PythonGame;
