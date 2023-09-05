const host = `${window.location.protocol}//${window.location.host}`;
let repositories = [
    {
        "id": 253876530,
        "name": "SINTA Project",
        "description": "Aplikasi manajemen pengeluaran kegiatan kabupaten Sumedang.",
        "homepage": "https://sinta.sumedangkab.go.id/",
        "image": `${host}/img/projects/253876530.png`,
        "url": null,
        "tools": ["Backpack", "Laravel 10", "SQL", "Bootstrap", "JQuery"],
        "visibility": "private"
    },
    {
        "id": 666323017,
        "name": "uji-validitas-dan-reliabilitas",
        "description": "sistem untuk membuat uji validitas dan reabilitas",
        "homepage": "https://alfaz86.github.io/uji-validitas-dan-reliabilitas/",
        "image": `${host}/img/projects/666323017.png`,
        "url": "https://github.com/alfaz86/uji-validitas-dan-reliabilitas",
        "tools": ["HTML", "JavaScript", "Bootstrap"],
        "visibility": "public"
    },
    {
        "id": 546380567,
        "name": "NOIU Event Organizer",
        "description": "Web Company Profile NOIU-EO",
        "homepage": "https://noiu-eo.com/",
        "image": `${host}/img/projects/546380567.png`,
        "url": null,
        "tools": ["Next.js (8.18.0)", "JavaScript", "Tevily", "CSS"],
        "visibility": "private"
    },
    {
        "id": 679257556,
        "name": "next-note",
        "description": "Aplikasi Note sederhana menggunakan Nextjs",
        "homepage": "https://next-note-alfaz86.vercel.app",
        "image": `${host}/img/projects/679257556.png`,
        "url": "https://github.com/alfaz86/next-note",
        "tools": ["Next.js (8.19.2)", "TypeScript", "Tailwindcss"],
        "visibility": "public"
    },
    {
        "id": 735380461,
        "name": "GSI Project",
        "description": "Aplikasi Penggadaian Gadai Express Indonesia",
        "homepage": "https://cms.gadaiexpress.id/",
        "image": `${host}/img/projects/735380461.png`,
        "url": null,
        "tools": ["Laravel 8", "PHP", "SQL", "Bootstrap", "JQuery"],
        "visibility": "private"
    },
    {
        "id": 561660831,
        "name": "boses-resto",
        "description": "aplikasi restoran dengan javascript pwa",
        "homepage": "https://alfaz86.github.io/boses-resto/",
        "image": `${host}/img/projects/561660831.png`,
        "url": "https://github.com/alfaz86/boses-resto",
        "tools": ["PWA", "HTML", "JavaScript", "CSS"],
        "visibility": "public"
    },
    {
        "id": 578866482,
        "name": "pwa-app-service",
        "description": "aplikasi spa service sederhana dengan pwa",
        "homepage": "https://pwa-app-service.000webhostapp.com/",
        "image": `${host}/img/projects/578866482.png`,
        "url": "https://github.com/alfaz86/pwa-app-service",
        "tools": ["PWA", "Native PHP", "SQL"],
        "visibility": "public"
    },
    {
        "id": 579651000,
        "name": "java-cd-music",
        "description": "Aplikasi manajemen data music menggunakan Java",
        "homepage": null,
        "image": `${host}/img/projects/579651000.png`,
        "url": "https://github.com/alfaz86/java-cd-music",
        "tools": ["Java", "SQL"],
        "visibility": "public"
    },
    {
        "id": 665437821,
        "name": "Balqis Syar'i",
        "description": "Sistem pengelolaan penjualan baju gamis dengan Framework Laravel.",
        "homepage": null,
        "image": `${host}/img/projects/665437821.png`,
        "url": null,
        "tools": ["Laravel 8", "Raja Ongkir", "Bootstrap", "SQL"],
        "visibility": "private"
    },
    {
        "id": 876123339,
        "name": "Karisma Rawat",
        "description": "Aplikasi rawat rumah sakit karisma subang.",
        "homepage": null,
        "image": `${host}/img/projects/876123339.png`,
        "url": null,
        "tools": ["Laravel 8", "Bootstrap", "SQL"],
        "visibility": "private"
    },
    {
        "id": 538587338,
        "name": "next-ongkir",
        "description": "Check harga ongkir menggunakan api raja ongkir.",
        "homepage": null,
        "image": `${host}/img/projects/538587338.png`,
        "url": "https://github.com/alfaz86/next-ongkir",
        "tools": ["Next.js", "JavaScript", "SQL", "Tailwindcss"],
        "visibility": "public"
    },
    {
        "id": 574727687,
        "name": "laravel-cafe",
        "description": "Aplikasi data menu makanan menggunakan Framework Laravel.",
        "homepage": null,
        "image": `${host}/img/projects/574727687.png`,
        "url": "https://github.com/alfaz86/laravel-cafe",
        "tools": ["Laravel 8", "SQL"],
        "visibility": "public"
    },
    {
        "id": 570374343,
        "name": "laravel-note",
        "description": "aplikasi note sederhana dengan framework laravel",
        "homepage": null,
        "image": `${host}/img/projects/570374343.png`,
        "url": "https://github.com/alfaz86/laravel-note",
        "tools": ["Laravel 8", "CKEditor4", "SQL"],
        "visibility": "public"
    },
    {
        "id": 889640091,
        "name": "POS Bangunan",
        "description": "Aplikasi Point Of Sale untuk toko keramik dan bangunan.",
        "homepage": null,
        "image": `${host}/img/projects/889640091.png`,
        "url": null,
        "tools": ["Laravel (8.83.27)", "SQL", "Bootstrap"],
        "visibility": "private"
    },
    {
        "id": 559212434,
        "name": "pwa-kalkulator",
        "description": "pwa kalkulator",
        "homepage": "https://alfaz86.github.io/pwa-kalkulator/",
        "image": `${host}/img/projects/559212434.png`,
        "url": "https://github.com/alfaz86/pwa-kalkulator",
        "tools": ["PWA", "HTML", "Javascript"],
        "visibility": "public"
    },
]