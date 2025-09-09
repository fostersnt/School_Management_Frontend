// import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { useEffect, useState } from "react";

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
        return <Particles id="tsparticles" options={options} style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1
        }} />;
    }

    return <></>;
};

export default ParticleJsBackground;
