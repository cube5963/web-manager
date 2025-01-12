// components/TitleBar.tsx
import React from 'react';
import Image from 'next/image'

const TitleBar: React.FC = () => {
    return (
        <header className="flex items-center h-8 bg-gray-800 text-white px-3 select-none">
            <Image
                src="/images/logo.png"
                alt="App Icon"
                width={20}
                height={20}
                className="mr-2"
            />

            <div className="flex space-x-2 pr-16">
                <button className="h-8 hover:bg-gray-700">ファイル</button>
                <button className="h-8 hover:bg-gray-700">編集</button>
            </div>
        </header>
    );
};

export default TitleBar;
