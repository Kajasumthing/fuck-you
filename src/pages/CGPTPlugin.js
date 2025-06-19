import './Projects.css';
import background from '../assets/Background5.gif';
import { useEffect, useState } from 'react';

function CGPTPlugin() {
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
                <h1 className="project-title">ChatGPT Plugin</h1>
                <div className="project-content-center">
                    <h3>
                        Deze plugin is een op maat gemaakte interface in Roblox Studio waarmee gebruikers rechtstreeks kunnen communiceren met ChatGPT via een lokaal draaiende API. De plugin laat je vragen stellen of codevoorstellen doen in een chatvenster, en de gegenereerde antwoorden worden netjes weergegeven binnen Roblox Studio zelf – met ondersteuning voor opgemaakte tekst en gekleurde codeblokken. Het idee is om ontwikkelaars (of studenten!) te helpen bij het begrijpen, schrijven of verbeteren van scripts zonder Roblox Studio te verlaten.
                        De plugin is geschreven in Luau, de scripttaal van Roblox. Hij bestaat uit de volgende onderdelen:

                        1. Toolbar en knop
                        De plugin voegt een knop toe aan de menubalk van Roblox Studio. Wanneer je erop klikt, wordt een zwevend venster geopend of gesloten.

                        2. Zwevend venster (widget)
                        Er wordt een zwevend UI-venster gecreëerd waarin de hele gebruikersinterface komt te staan.

                        3. Gebruikersinterface (UI)
                        Het UI bestaat uit:

                        Een invoerveld onderaan voor de gebruiker om vragen of opdrachten te typen.

                        Een knop om het bericht te verzenden.

                        Een scrollbaar tekstvak waarin de antwoorden worden weergegeven, inclusief ondersteuning voor meerdere regels en opgemaakte code.

                        Wanneer je een prompt typt en op "Enter" klikt of op de knop drukt, wordt de inhoud naar een lokaal draaiende webserver gestuurd via een HTTP POST-aanvraag.

                        De prompt wordt ingepakt in JSON-formaat en verstuurd naar een endpoint. ChatGPT genereert een antwoord en dit wordt vervolgens verwerkt.

                        Het antwoord van ChatGPT kan gewone tekst zijn of een codeblok. Om die op een mooie manier weer te geven, worden ze eerst opgesplitst in tekstsegmenten of codeblokken via de formatMarkdown-functie. Elk codeblok wordt apart behandeld.

                        Vervolgens zorgt de highlightSyntax-functie ervoor dat belangrijke elementen in de code een kleur krijgen:

                        Rode kleur voor syntaxiswoorden zoals local, function, if, then, enz.

                        Groene kleur voor functies zoals print(), math.abs(), enz.

                        Gele kleur voor booleans zoals true en false.

                        In plaats van een onbewerkbare TextLabel, wordt bewust gekozen voor een TextBox. Deze laat toe dat gebruikers:

                        De code selecteren en kopiëren

                        De syntaxis-kleuring behouden

                        De tekst niet per ongeluk bewerken (dankzij TextEditable = false)

                        Elk codeblok heeft ook een kopieerknop rechtsboven waarmee de inhoud in het klembord wordt gezet.

                        De plugin zorgt ervoor dat de chatgeschiedenis automatisch past binnen het scrollvenster. Bovendien zijn codeblokken:

                        Automatisch in hoogte aangepast

                        Horizontaal scrollbaar als de regels te lang zijn

                        Dit alles verhoogt de leesbaarheid en bruikbaarheid van de gegenereerde code.

                        Deze plugin kan uitstekend ingezet worden in de klas:

                        Leerlingen kunnen sneller feedback vragen op scripts

                        Begrijpen van fouten in code wordt visueel ondersteund

                        Stimuleert zelfstandig leren en programmeren met hulp van AI

                        Leerkrachten kunnen de plugin ook gebruiken om:

                        Lesmateriaal op maat te genereren

                        Hulp te bieden zonder zelf steeds code na te kijken

                        Voorbeelden direct te laten tonen door de AI

                        De plugin werkt met een lokaal draaiende HTTP-server (zoals een Express.js API) die communiceert met OpenAI’s GPT-modellen. Hiervoor is Node.js en een internetverbinding nodig. De plugin zelf draait volledig in de Roblox Studio-omgeving en maakt gebruik van standaard API’s zoals HttpService.

                        Deze plugin biedt een krachtige brug tussen AI en Roblox Studio. Het stelt gebruikers in staat om in realtime te communiceren met ChatGPT, codevoorbeelden te ontvangen, uitleg te krijgen en alles binnen een nette UI in Studio zelf. Door de focus op bruikbaarheid en educatieve ondersteuning is het een ideaal hulpmiddel voor zowel programmeurs als docenten die werken met Roblox in de klas.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CGPTPlugin;
