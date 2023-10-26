import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactElement } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TheMCBrothers',
    description: 'We love Minecraft! Developing Useless Mod and more...',
    keywords: ['TheMCBrothers', 'Minecraft', 'Mods'],
};

export default function RootLayout({
    children,
}: {
    children: ReactElement;
}): ReactElement {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
