import Image from 'next/image';
import React, { ReactElement } from 'react';

export default function Home(): ReactElement {
    return (
        <main className="flex min-h-screen flex-col items-center justify-evenly p-6">
            <Image
                alt="TheMCBrothers"
                src="/themcbrothers.svg"
                className="w-full max-w-fit"
                width={0}
                height={0}
            />
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
                New Beta Website
            </h1>
            <p className="text-center text-lg italic lg:text-2xl">
                This website is currently under construction!
            </p>
        </main>
    );
}
