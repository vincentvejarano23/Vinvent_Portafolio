import type { Illustration, Project } from './types';

const spans = [
  "md:col-span-2 md:row-span-4 sm:col-span-2 sm:row-span-3",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-2 md:row-span-4 sm:col-span-2 sm:row-span-3",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  "md:col-span-2 md:row-span-3 sm:col-span-2 sm:row-span-2",
  "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-3",
  "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-3",
  "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
];

const rawIllustrations: Omit<Illustration, 'span'>[] = [
  { id: 1, type: 'image', title: "Amor antropomorfo", url: "https://i.pinimg.com/736x/73/57/9f/73579f2da434b221d1caac3199ba391b.jpg", desc: "El amor en una forma inesperada." },
  { id: 2, type: 'image', title: "Cindy", url: "https://i.pinimg.com/736x/4c/90/66/4c9066f3eb22aafa7ae7df758feae82f.jpg", desc: "Retrato de Cindy." },
  { id: 3, type: 'image', title: "Dameus", url: "https://i.pinimg.com/736x/06/2e/3c/062e3c6513aa28bc72dd72ca434cbacc.jpg", desc: "El misterioso Dameus." },
  { id: 4, type: 'image', title: "Volther vs Derek", url: "https://i.pinimg.com/736x/45/2a/3a/452a3a0363a96d0896c552b13f9deefa.jpg", desc: "Una batalla épica." },
  { id: 5, type: 'image', title: "Amor corrumpido", url: "https://i.pinimg.com/736x/8a/53/e8/8a53e839a20deaac97db9471d1ad3cbd.jpg", desc: "Una visión oscura del amor." },
  { id: 6, type: 'image', title: "El Emisario", url: "https://i.pinimg.com/736x/76/b5/31/76b531f79a9f6d158294ead486dc9ad4.jpg", desc: "El portador de mensajes." },
  { id: 7, type: 'image', title: "Barmaduc", url: "https://i.pinimg.com/736x/bc/f3/e4/bcf3e4c3eb7f72cbc5550f1b1235729b.jpg", desc: "El guerrero Barmaduc." },
  { id: 8, type: 'image', title: "Alice", url: "https://i.pinimg.com/736x/bb/b2/35/bbb23586c43898cfdfcc9c82bcb5a02c.jpg", desc: "Retrato de Alice." },
  { id: 9, type: 'image', title: "Lágrima del Diablo", url: "https://i.pinimg.com/736x/69/e8/68/69e86870f44b4e09237ffc83fb8e2329.jpg", desc: "La lágrima del diablo." },
  { id: 10, type: 'image', title: "Volther", url: "https://i.pinimg.com/736x/f2/82/db/f282dba5f684c2d04526669d40da20dc.jpg", desc: "El poderoso Volther." },
  { id: 11, type: 'image', title: "Dameus", url: "https://i.pinimg.com/736x/d8/cd/ac/d8cdac473ba261753992ab1a2ce3a4f0.jpg", desc: "Dameus en cuerpo completo." },
  { 
    id: 12, 
    type: 'album', 
    title: "Borradores", 
    desc: "Una colección de bocetos e ideas.", 
    url: "https://i.pinimg.com/736x/f2/c9/e9/f2c9e9c9b8f230df7edc5c5e62100ce3.jpg",
    albumImages: [
      "https://i.pinimg.com/736x/f2/c9/e9/f2c9e9c9b8f230df7edc5c5e62100ce3.jpg",
      "https://i.pinimg.com/736x/bf/ba/80/bfba80dad29d787ffc00c0a84de9623f.jpg",
      "https://i.pinimg.com/736x/8c/ba/4f/8cba4f7a92ef36a936ac0b3e7cbc364e.jpg",
      "https://i.pinimg.com/736x/05/88/43/058843675b89c4698563f8732d20bbc7.jpg"
    ]
  }
];


export const illustrationData: Illustration[] = rawIllustrations.map((item, index) => ({
  ...item,
  span: spans[index % spans.length]
}));


export const projectData: Project[] = [
  {
    id: 1,
    title: "DELAV - Servicios de Limpieza",
    description: "Página web para DELAV, una empresa dedicada a ofrecer servicios de limpieza profesionales para diversos sectores.",
    imageUrl: "https://s.wordpress.com/mshots/v1/http%3A%2F%2Fdelavperu.com?w=600&h=400&r=1",
    tags: ["Web Corporativa", "Servicios de Limpieza", "Diseño Web"],
    liveUrl: "http://delavperu.com",
  },
  {
    id: 2,
    title: "Air Perú Express Cargo",
    description: "Sitio web para Air Perú Express Cargo, presentando sus servicios de logística y transporte de carga a nivel nacional e internacional.",
    imageUrl: "https://s.wordpress.com/mshots/v1/http%3A%2F%2Fairperu.com.pe?w=600&h=400&r=1",
    tags: ["Logística", "Transporte de Carga", "Servicios"],
    liveUrl: "http://airperu.com.pe",
  },
  {
    id: 3,
    title: "Marco Peruana S.A.",
    description: "Web institucional para Marco Peruana, líder en soluciones para los sectores marítimo, industrial y minero.",
    imageUrl: "https://s.wordpress.com/mshots/v1/http%3A%2F%2Fmarco.com.pe?w=600&h=400&r=1",
    tags: ["Industria Marítima", "Minería", "Soluciones Industriales"],
    liveUrl: "http://marco.com.pe",
  },
];