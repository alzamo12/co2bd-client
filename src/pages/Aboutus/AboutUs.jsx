import React from 'react';

const AboutUs = () => {
    return (

        <div className="bg-secondary text-green-900 min-h-screen flex flex-col items-center px-6 py-12 my-16">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-green-800 mb-6">About Us</h1>

            {/* Intro Section */}
            <p className="max-w-3xl text-center text-lg leading-relaxed mb-12">
                At <span className="font-bold text-green-600">CO2BD</span>, we believe
                that small actions can create big change. We are a{" "}
                <span className="font-semibold">social development platform</span>{" "}
                built to inspire, connect, and empower individuals who care about the
                planet and its people. Our mission is simple:{" "}
                <span className="font-semibold italic">
                    build a better, greener, and more connected future — together.
                </span>
            </p>

            {/* What We Do */}
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-green-500">
                    <h2 className="text-xl font-bold mb-3 text-green-700">
                        🌿 Empower Communities
                    </h2>
                    <p>
                        Providing tools and resources to help communities take meaningful
                        action for social and environmental betterment.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-green-500">
                    <h2 className="text-xl font-bold mb-3 text-green-700">
                        🌏 Raise Awareness
                    </h2>
                    <p>
                        Sharing knowledge about climate change, sustainability, and social
                        welfare to inspire informed action.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 text-center border-l-4 border-green-500">
                    <h2 className="text-xl font-bold mb-3 text-accent">
                        🤝 Connect People
                    </h2>
                    <p>
                        Bringing like-minded individuals and organizations together for
                        greater impact and long-term change.
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <div className="max-w-4xl text-center mt-16">
                <h2 className="text-2xl font-bold text-accent mb-4">Our Vision</h2>
                <p className="text-lg">
                    A world where{" "}
                    <span className="font-semibold text-primary">
                        people and nature thrive together
                    </span>
                    , powered by collaboration, innovation, and compassion.
                </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12">
                <button className=" btn btn-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md transition">
                    Join the Movement
                </button>
            </div>
        </div>

    );
};

export default AboutUs;