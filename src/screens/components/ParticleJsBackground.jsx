// import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { useEffect, useState } from "react";
import '../../styles/ParticleJsBackground.css'

const ParticleJsBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // this loads the tsparticles bundle with all features
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: {
            color: {
                // value: "#ffffff",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 100 },
                push: { quantity: 4 },
            },
        },
        particles: {
            color: { value: "#6441e9" },
            //   color: { value: "#ff5722" },
            links: {
                color: "#6441e9",
                distance: 150,
                enable: true,
            },
            move: { enable: true, speed: 5 },
            number: { value: 100 },
            size: { value: { min: 1, max: 5 } },
        },
    };

    if (init) {
        return (
            <div className="particles-background">
                <Particles id="tsparticles" options={options}/>
            </div>
        );
    }

    return <></>;
};

export default ParticleJsBackground;
