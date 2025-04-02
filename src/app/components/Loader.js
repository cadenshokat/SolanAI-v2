import React from 'react';

export default function Loader () {
    return (
        /* From Uiverse.io by rushiraj_9882 */ 
        <div
        className="w-[100%] h-screen gap-1 pt-40 pb-40 relative flex items-center justify-center"
        >
        <div
            className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.15s]"
        >
            <div className="w-1 h-4 bg-green-500"></div>
            <div className="w-3 h-10 bg-green-500 rounded-sm"></div>
            <div className="w-1 h-4 bg-green-500"></div>
        </div>

        <div
            className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]"
        >
            <div className="w-1 h-4 bg-red-500"></div>
            <div className="w-3 h-10 bg-red-500 rounded-sm"></div>
            <div className="w-1 h-4 bg-red-500"></div>
        </div>

        <div
            className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.1s]"
        >
            <div className="w-1 h-4 bg-green-500"></div>
            <div className="w-3 h-10 bg-green-500 rounded-sm"></div>
            <div className="w-1 h-4 bg-green-500"></div>
        </div>

        <div
            className="flex flex-col items-center animate-[bounce_1s_ease-in-out_infinite_0.2s]"
        >
            <div className="w-1 h-4 bg-red-500"></div>
            <div className="w-3 h-10 bg-red-500 rounded-sm"></div>
            <div className="w-1 h-4 bg-red-500"></div>
        </div>
        </div>

    )
}