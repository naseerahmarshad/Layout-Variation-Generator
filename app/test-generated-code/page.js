import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="hero bg-blue-500 text-white py-20 px-10">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white">Welcome to My App</h1>
                    <p className="mt-4 text-lg text-white">Discover amazing features and improve your productivity.</p>
                    <button className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full">
                        Get Started
                    </button>
                </div>
            </section>
        </>
    );
}
