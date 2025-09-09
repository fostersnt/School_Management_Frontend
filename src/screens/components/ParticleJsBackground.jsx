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
            color: { value: "#ff5722" },
            //   color: { value: "#ff5722" },
            links: {
                color: "#ff5722",
                distance: 150,
                enable: true,
            },
            move: { enable: true, speed: 3 },
            number: { value: 20 },
            size: { value: { min: 1, max: 20 } },
        },
    };

    if (init) {
        return (
            // <div className="particles-background">
                <Particles id="tsparticles" options={options}/>
            // </div>
        );
    }

    return <></>;
};

export default ParticleJsBackground;
