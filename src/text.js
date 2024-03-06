import Typewriter from "typewriter-effect";


export const Text = () => {
    return (
        <Typewriter 
        options={{
            strings: [
                "Frontend Developer",
                "UX/UI Designer",
                "Technical Writer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
        }}
        />
    )
};