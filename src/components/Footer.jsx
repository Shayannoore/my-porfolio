import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="container mx-auto px-6 text-center">
                {/* <div className="flex items-center justify-center space-x-2 text-slate-400 mb-4">
                    <span>Created with</span>
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                    <span>by</span>
                    <span className="font-bold text-slate-900">Shayan Noore</span>
                </div> */}
                <p className="text-slate-400 text-sm">
                    © {new Date().getFullYear()} All Rights Reserved. Built with React & Tailwind v4.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
