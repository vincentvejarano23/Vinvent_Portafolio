
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon as X } from './icons/XIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';
import { CollectionIcon } from './icons/CollectionIcon';
import type { Illustration as MediaItemType } from '../types';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

const MediaItem = ({ item, className, objectFit = 'cover' }: { item: MediaItemType, className?: string, objectFit?: 'cover' | 'contain' }) => {
    // The component currently renders an img tag for both 'image' and 'video' types.
    // This can be expanded for actual video playback if needed.
    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className || ''} w-full h-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'}`}
            loading="lazy"
            decoding="async"
        />
    );
};

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[];
}) => {
    const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

    useEffect(() => {
        setCurrentAlbumIndex(0);
    }, [selectedItem.id]);

    const isAlbum = selectedItem.type === 'album' && Array.isArray(selectedItem.albumImages) && selectedItem.albumImages.length > 0;

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isAlbum) return;
        setCurrentAlbumIndex((prev) => (prev + 1) % selectedItem.albumImages!.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isAlbum) return;
        setCurrentAlbumIndex((prev) => (prev - 1 + selectedItem.albumImages!.length) % selectedItem.albumImages!.length);
    };

    const mediaToDisplay: MediaItemType = isAlbum
        ? { ...selectedItem, url: selectedItem.albumImages![currentAlbumIndex] }
        : selectedItem;
    
    if (!isOpen) return null;

    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 pb-32"
                onClick={onClose}
            >
                {isAlbum && (
                    <m.button data-interactive="true" onClick={handlePrev} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[70] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </m.button>
                )}

                <m.div
                    layoutId={`media-${selectedItem.id}`}
                    className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <AnimatePresence mode="wait">
                        <m.div
                            key={mediaToDisplay.url}
                            className="w-full h-full flex flex-col"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                            exit={{ y: -20, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
                        >
                           <div className="flex-grow w-full flex items-center justify-center min-h-0">
                                <img
                                    src={mediaToDisplay.url}
                                    alt={mediaToDisplay.title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            </div>
                            <div className="flex-shrink-0 text-center mt-4">
                                <h3 className="text-white text-xl font-bold">{selectedItem.title} {isAlbum && `(${currentAlbumIndex + 1}/${selectedItem.albumImages?.length})`}</h3>
                                <p className="text-white/80 text-sm mt-1">{selectedItem.desc}</p>
                            </div>
                        </m.div>
                    </AnimatePresence>
                </m.div>

                {isAlbum && (
                     <m.button data-interactive="true" onClick={handleNext} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[70] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </m.button>
                )}

                <m.button
                    data-interactive="true"
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className='w-5 h-5' />
                </m.button>
            </m.div>
            
            <div className="fixed z-[60] bottom-5 left-0 right-0 flex justify-center pointer-events-none">
                 <div className="flex justify-center">
                    <m.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.1}
                        className="relative flex rounded-xl bg-black/40 backdrop-blur-lg border border-white/20 shadow-lg touch-none cursor-grab active:cursor-grabbing pointer-events-auto items-center -space-x-3 px-4 py-2"
                    >
                        {mediaItems.map((item, index) => (
                            <m.div
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                data-interactive="true"
                                className={`relative group w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer
                                    ${selectedItem.id === item.id ? 'ring-2 ring-lime-400' : 'hover:ring-2 hover:ring-white/50'}`
                                }
                                style={{ zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index }}
                                initial={{ scale: 1, y: 0 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.25 : 1,
                                    y: selectedItem.id === item.id ? -8 : 0,
                                }}
                                whileHover={{ scale: 1.3, y: -8, zIndex: 40, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                                <MediaItem item={item} />
                                {item.type === 'album' && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <CollectionIcon className="w-5 h-5 text-white" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </>
    );
};

const InteractiveBentoGallery: React.FC<{ mediaItems: MediaItemType[] }> = ({ mediaItems }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);

    return (
        <div className="w-full">
            <AnimatePresence>
                {selectedItem && (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={true}
                        onClose={() => setSelectedItem(null)}
                        setSelectedItem={setSelectedItem}
                        mediaItems={mediaItems}
                    />
                )}
            </AnimatePresence>
            <m.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[100px] md:auto-rows-[120px]"
            >
                {mediaItems.map((item, index) => (
                    <m.div
                        key={item.id}
                        layoutId={`media-${item.id}`}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${item.span} bg-[#1a2c1a]/30`}
                        onClick={() => setSelectedItem(item)}
                        data-interactive="true"
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 350, damping: 35, delay: index * 0.05 } }
                        }}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    >
                        <MediaItem item={item} objectFit={item.objectFit} />
                        {item.type === 'album' && (
                            <div className="absolute bottom-2 right-2 p-1 bg-black/60 rounded-full z-10">
                                <CollectionIcon className="w-4 h-4 text-white" />
                            </div>
                        )}
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300 group-hover:backdrop-blur-sm group-hover:bg-black/60"
                        >
                            <img src="https://i.imgur.com/9iNSCv2.png" alt="Watermark" className="w-1/2 h-1/2 object-contain opacity-50 transition-all duration-300 group-hover:opacity-80 group-hover:scale-105" />
                        </div>
                    </m.div>
                ))}
            </m.div>
        </div>
    );
};

export default InteractiveBentoGallery;
