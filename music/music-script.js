/**
 * MUSIC-SCRIPT.JS
 */

import '/src/js/components/base.js';

const artistData = [
    {
        name: "Bakar",
        popularSongs: [
            {
                title: "Hell N Back",
                videoUrl: "https://files.catbox.moe/si3pb8.mp4"
            },
            {
                title: "Big Dreams",
                videoUrl: "https://files.catbox.moe/pmxt92.mp4"
            },
            {
                title: "The Mission",
                videoUrl: "https://files.catbox.moe/3p7r99.mp4"
            },
        ],
        songs: [
            {
                title: "Youthenasia",
                spotifyUrl: "https://open.spotify.com/track/21yECssJG7tIwZ06EwTZEC",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "4:05",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Not From Here",
                spotifyUrl: "https://open.spotify.com/track/0VhUQrbIn4lgmWyJVtZnzV",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "4:12",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "The Mission",
                spotifyUrl: "https://open.spotify.com/track/1hNfSHVnBPd5GCFSqqA6Zo",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "3:11",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Gotham",
                spotifyUrl: "https://open.spotify.com/track/4UkGSEwcxFW3FvtekdKoRm?si=4e41551dba274c26",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "4:19",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Alone Again",
                spotifyUrl: "https://open.spotify.com/track/7loZhAtONLruIFyaVNVab7?si=dbbd650bc41345df",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "3:39",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "NW3",
                spotifyUrl: "https://open.spotify.com/track/3NSBOLzrxMri9OEyxYeWov?si=d72f7a326a094480",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451?format=webp&width=573&height=573",
                duration: "3:53",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Alive!",
                spotifyUrl: "https://open.spotify.com/track/4Yf2S4ArywzowFQZmesSI9?si=a5b335a340374a65",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2736f61ea5fff15872b314468e8",
                duration: "3:52",
                isFavorite: true
            },
            {
                title: "To Open My Heart",
                spotifyUrl: "https://open.spotify.com/track/3HsZxv09GQxyratt8cmvcd?si=e029b2717b0f4481",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2736f61ea5fff15872b314468e8",
                duration: "3:40",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Unhealthy",
                spotifyUrl: "https://open.spotify.com/track/7ewFgEaH0wII9QmpcTCkcA?si=dab438106a0947cd",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fe7dd6de1fa0853b5a0701a9",
                duration: "2:33",
                isFavorite: true,
                isObsessed: true   
            },
            {
                title: "All In",
                spotifyUrl: "https://open.spotify.com/track/1gdTL35aKcrz1J5qGTqznF?si=fc7661f16c0c4259",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fe7dd6de1fa0853b5a0701a9",
                duration: "2:49",
                isFavorite: true,
                isObsessed: true,
            }
            // Add more songs for this artist
        ]
    },
    {
        name: "$uicideboy$",
        popularSongs: [
            {
                title: "Antarctica",
                videoUrl: "https://files.catbox.moe/ovuw6x.mp4"
            },
            {
                title: "1000 Blunts",
                videoUrl: "https://files.catbox.moe/pgf22d.mp4"
            },
            {
                title: "And to those i love thanks for sticking around",
                videoUrl: "https://files.catbox.moe/u8wdc1.mp4"
            },
        ],
        songs: [
            {
                title: "#1 Stunna",
                spotifyUrl: "https://open.spotify.com/track/0DB5hjYLs8uL9KtE0immhi",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273828e3c89d67979fc678be0bb",
                duration: "2:51",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Am/Pm",
                spotifyUrl: "https://open.spotify.com/track/23fF9E89dWW5ZnmRfsB5Kb?si=6eade21c86654943",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27354c0c1ea300d471e9eb90ae9",
                duration: "2:04",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Novus Ordo Seclorum",
                spotifyUrl: "https://open.spotify.com/track/1Hs7kaqR19n681bs3GdpK4?si=24f96d0140004c4d",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27354c0c1ea300d471e9eb90ae9",
                duration: "1:36",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "Kill Yourself",
                spotifyUrl: "https://open.spotify.com/track/4Gy5kycvHxatuBiNQBCPA6",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739f84f46d5f97a954ded6d079",
                duration: "2:45",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "..And So It Was",
                spotifyUrl: "https://open.spotify.com/track/5P45rIpV682KkvtZjZtuwB?si=45d450f6fdcc48d0",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273d060318e0c8cb5730a215386",
                duration: "4:58",
                isFavorite: true
            },
            {
                title: "Soul",
                spotifyUrl: "https://open.spotify.com/track/2XlfXMpWi3d07qmfmouX6x?si=a6e9abb1ac614bde",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2731bd6fcff112891502437b2c0",
                duration: "3:47",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "122 Days",
                spotifyUrl: "https://open.spotify.com/track/77o41Py1xkwaxs3200SKhW?si=75c9dc93ca544052",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739db03c8368f127291ced4263",
                duration: "2:26",
                isFavorite: true
            },
            {
                title: "Peso",
                spotifyUrl: "https://open.spotify.com/track/0fhpUfg3hPSafKZKY9HubU?si=bb871c9249e840fa",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fbc974279c3da95e37a6fae1",
                duration: "2:35",
                isFavorite: true
            },
            {
                title: "Sleepy Hollow - Slopped & Chewed",
                spotifyUrl: "https://open.spotify.com/track/3Ni6hQT6y66krcdYl1Hv3L?si=40424b63e62b4109",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fbc974279c3da95e37a6fae1",
                duration: "3:38",
                isFavorite: true,
                isObsessed: true,
            },
            {
                title: "HUNG UP ON THE COME UP",
                spotifyUrl: "https://open.spotify.com/track/20hfQW5iHNaFRo6toP9jF4?si=83ca93778f5d4908",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273eeb83ddd0fcfe67cb08284b7",
                duration: "1:29",
                isFavorite: true
            },
        ]
    },
    {
        name: "Artemas",
        popularSongs: [
            {
                title: "i like the way you kiss me",
                videoUrl: "https://files.catbox.moe/54tu4x.mp4"
            },
            {
                title: "if u think i'm pretty",
                videoUrl: "https://files.catbox.moe/a1bix7.mp4"
            },
            {
                title: "cross my heart",
                videoUrl: "https://files.catbox.moe/9ywdg5.mp4"
            },
        ],
        songs: [
            {
                title: "i always kinda knew you'd be the death of me",
                spotifyUrl: "https://open.spotify.com/track/3iUDHA6FGAKfHX2jmgF0vO?si=828edde22b3e4bb0",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "2:16",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "you've been a bad girl",
                spotifyUrl: "https://open.spotify.com/track/6Gron8VFcNPwj7ZamJe7Pt?si=bf4ddb58fb914fa7",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "2:23",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "stupid head",
                spotifyUrl: "https://open.spotify.com/track/5CcGu19vM6KONpXTyn44zd?si=26a4d40ae19b489f",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "2:31",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "dirty little secret",
                spotifyUrl: "https://open.spotify.com/track/1lau6K2YSP5APtkzNJxVyB?si=9c1a3f3767e84286",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "3:01",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "my babydoll",
                spotifyUrl: "https://open.spotify.com/track/592myufKPcidAJLT2P8QXw?si=b4792768e99b4f40",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "2:31",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "i love you regardless",
                spotifyUrl: "https://open.spotify.com/track/1TZGvrmcn8cvRQioBRjuMR?si=78462e40c3c648ef",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "2:56",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "wet dreams",
                spotifyUrl: "https://open.spotify.com/track/6Q57LMIIjmbOBkvXe8ADW4?si=5beda12c98194956",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "1:39",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "shall we celebrate?",
                spotifyUrl: "https://open.spotify.com/track/5xKHORmwcry4AsHMEfDE98?si=468229f32baa40e1",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fabe0943f6dd962a792b42a1",
                duration: "2:06",
                isFavorite: true
            },
            {
                title: "ur special to me",
                spotifyUrl: "https://open.spotify.com/track/2rYXXYRrP3qOOPkUsUTsal?si=95d3ea39e2634aa5",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fabe0943f6dd962a792b42a1",
                duration: "1:54",
                isFavorite: true
            },
            {
                title: "fucked up kinda dream",
                spotifyUrl: "https://open.spotify.com/track/6XBC0YeyL43dDVjPSdWUEw?si=29b9978df3b74a77",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fabe0943f6dd962a792b42a1",
                duration: "2:33",
                isFavorite: true
            },
        ]
    },
    {
        name: "Killa Fonic",
        popularSongs: [
            {
                title: "Niciun Glont Nu Doare Cat Doare Dragostea",
                videoUrl: "https://files.catbox.moe/xw3mva.mp4"
            },
            {
                title: "Bambolina",
                videoUrl: "https://files.catbox.moe/bwr2tx.mp4"
            },
            {
                title: "Miami Bici",
                videoUrl: "https://files.catbox.moe/0xth1t.mp4"
            },
        ],
        songs: [
            {
                title: "Rim$e$",
                spotifyUrl: "https://open.spotify.com/track/4w4W7y8GrtmSUrR00oWEa3?si=4525b1a3c37349f9",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27331cb97ed068ca83619513aa9",
                duration: "2:22",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Iti Scriu Inapoi",
                spotifyUrl: "https://open.spotify.com/track/2owpozRdpdzE63iFwGhsC7?si=30a487bef9ef40af",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27331cb97ed068ca83619513aa9",
                duration: "2:44",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Pietrificat",
                spotifyUrl: "https://open.spotify.com/track/5uAjE7OR7eipAZI7cA2UVm?si=61b7390a75f14679",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27331cb97ed068ca83619513aa9",
                duration: "3:44",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "4 Dimineata",
                spotifyUrl: "https://open.spotify.com/track/54um8CoIJFE3E3TxvOTpmG?si=269af2b80fe34055",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27331cb97ed068ca83619513aa9",
                duration: "3:08",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Somnambul",
                spotifyUrl: "https://open.spotify.com/track/5Yqg9kjCas74kNBV3c0dNt?si=db78da53ba614209",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273679fc2b0f6fb5f000805ef77",
                duration: "2:55",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "JE$us",
                spotifyUrl: "https://open.spotify.com/track/523ktOFsOiMbiRKlCpci3O?si=7d25e813883d4e75",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273679fc2b0f6fb5f000805ef77",
                duration: "5:49",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Toti Sub Acelasi Cer",
                spotifyUrl: "https://open.spotify.com/track/3YGfX2CI4SAzqv6DVsnkPF?si=dd7d670544a34e22",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273679fc2b0f6fb5f000805ef77",
                duration: "2:02",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Misterios",
                spotifyUrl: "https://open.spotify.com/track/6lOWoytmNWxKIb7ODl2KOG?si=db6a10acb3ff4b93",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2732f4c03c4b8885bb5f7867d96",
                duration: "3:42",
                isFavorite: true,
                isNostalgic: true
            },
            {
                title: "Exodus",
                spotifyUrl: "https://open.spotify.com/track/1lrNlXAROp03pnJ24sc2Z0?si=f77ac53aa8a245d8",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273082a215136db5f64c09c49d9",
                duration: "4:28",
                isFavorite: true,
                isNostalgic: true
            },
            {
                title: "9 Ciori",
                spotifyUrl: "https://open.spotify.com/track/5X2kx9dd6cMLJUHbVemEoF?si=1b2e928a3f854ca2",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2735b9e5f222ba2dd6f8944c1d4",
                duration: "3:05",
                isFavorite: true,
                isNostalgic: true
            },
        ]
    },
    {
        name: "Mareux",
        popularSongs: [
            {
                title: "The Perfect Girl",
                videoUrl: "https://files.catbox.moe/5hj9o8.mp4"
            },
            {
                title: "Killer",
                videoUrl: "https://files.catbox.moe/kef3ch.mp4"
            },
            {
                title: "Summertime",
                videoUrl: "https://files.catbox.moe/ghqdh3.mp4"
            },
        ],
        songs: [
            {
                title: "Cold Summer",
                spotifyUrl: "https://open.spotify.com/track/2xRmuKQYdruqHCC8hY4OHB?si=0f17975ff29b4ffd",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27384de0e7589ec2b06f3df4d84",
                duration: "4:43",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Sail",
                spotifyUrl: "https://open.spotify.com/track/57Nez0yOaE9h7HuPObxDJP?si=0e373995ef0b43cd",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27384de0e7589ec2b06f3df4d84",
                duration: "2:43",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Leech",
                spotifyUrl: "https://open.spotify.com/track/1E6AyRgbhDllNzYQXeS4iL?si=df028eb6e2c94993",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273088e9fde007c85411435b38e",
                duration: "4:31",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Hurt",
                spotifyUrl: "https://open.spotify.com/track/2zwMa9uUtUToEcBw6Iu5Pv?si=be256fa40bef4dd9",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737cd3768fecefe743c5465b57",
                duration: "3:19",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Diosa",
                spotifyUrl: "https://open.spotify.com/track/0riw5or60woTnxgEtsBZFt?si=e2b61ad835b2415f",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737cd3768fecefe743c5465b57",
                duration: "4:22",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Little Lies",
                spotifyUrl: "https://open.spotify.com/track/2BdnDERIrouwEuNDx1fxOg?si=07734dc75816467c",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737cd3768fecefe743c5465b57",
                duration: "4:15",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Lovers From The Past",
                spotifyUrl: "https://open.spotify.com/track/0Mf3S3C47hxQlLEqFGjlOJ?si=75c8b0824dfb4250",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737cd3768fecefe743c5465b57",
                duration: "3:19",
                isFavorite: true,
                isNostalgic: false
            },
            {
                title: "Blackout",
                spotifyUrl: "https://open.spotify.com/track/7HMPSmje7Q1wu4XvfuvJZp?si=3f45d326ccd04f59",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27322de2f10c176dc8152047c17",
                duration: "5:17",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Inamorata",
                spotifyUrl: "https://open.spotify.com/track/5wpljkskGv4spHoubqPLZz?si=3bd31d4f0b02451c",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2730137858b064b65146f94b16d",
                duration: "3:13",
                isFavorite: true,
                isNostalgic: false
            },
            {
                title: "Dance Floor Dolor",
                spotifyUrl: "https://open.spotify.com/track/0ocImbYiDNIiayVE2nE6PA?si=cd6dff20dfce4d68",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738e2950353b3867e559a6d308",
                duration: "5:09",
                isFavorite: true,
                isNostalgic: false
            },
        ]
    },
    {
        name: "Miguel Angeles",
        popularSongs: [
            {
                title: "PROTECTION CHARM",
                videoUrl: "https://files.catbox.moe/4m27gb.mp4"
            },
            {
                title: "DEATH RATTLE",
                videoUrl: "https://files.catbox.moe/ulmooi.mp4"
            },
            {
                title: "FORGOTTEN CHILD",
                videoUrl: "https://files.catbox.moe/76ltv3.mp4"
            },
        ],
        songs: [
            {
                title: "lil horn's theme",
                spotifyUrl: "https://open.spotify.com/track/5rcD6SgDvss0ja4N0DumJ2?si=d4764591d9fa4a2e",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273f844cc9215c92368783ebb2c",
                duration: "2:48",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Save My Soul!",
                spotifyUrl: "https://open.spotify.com/track/6jWe7hYUnTDsG7Mdm1uDUJ?si=98e7822a72a8455d",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27350bee8cc558140c08f0e8e5e",
                duration: "2:37",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "DOGEATDOG",
                spotifyUrl: "https://open.spotify.com/track/02SO66qOplgOMm3r2fuG0m?si=61d51ea833a84229",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27380780883be115fc9bfb33590",
                duration: "3:08",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "CRUSHER",
                spotifyUrl: "https://open.spotify.com/track/3Y4bOsMmv25B3XPVPfrcVF?si=26522949b3de4742",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737b61f66a17d93d2a6a167de0",
                duration: "2:20",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "EMBRAC3",
                spotifyUrl: "https://open.spotify.com/track/2EpPsuXAGL6cZkM3pbcrD8?si=04b3843862ec4845",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737b61f66a17d93d2a6a167de0",
                duration: "4:22",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "DON'T JUMP!",
                spotifyUrl: "https://open.spotify.com/track/7LqFcAqmDaKGlQSrc5NFez?si=994aff2643974126",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273f77d480051d88f39704504df",
                duration: "1:48",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "INNOCENCE",
                spotifyUrl: "https://open.spotify.com/track/5n7ten5j7Xep6rVyoPYCFW?si=ad45dabe42ad4ecd",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273501f5069a13c20b0a83a8116",
                duration: "2:58",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "NOVEMBERR",
                spotifyUrl: "https://open.spotify.com/track/62HnBMEdZjeFCd2T8g37T8?si=1936e7e6e7104bd0",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739ad10104c60fb9deff5b7f34",
                duration: "2:51",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "BLOOD ON MY HANDS",
                spotifyUrl: "https://open.spotify.com/track/5JXcoOrZVS1GPjUKEdl0xM?si=12b3b0bc234f4686",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27374cb92e3c428c806af039ba2",
                duration: "3:18",
                isFavorite: true,
                isNostalgic: false
            },
            {
                title: "a home in the sky",
                spotifyUrl: "https://open.spotify.com/track/4BiI1XZaEhjr4V77JNABO3?si=1f1348f22ad74f2b",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2735ae597b5af582fd1a75baafd",
                duration: "2:31",
                isFavorite: true,
                isNostalgic: false,
                isObsessed: true
            },
        ]
    },
    {
        name: "Joji",
        popularSongs: [
            {
                title: "SLOW DANCING IN THE DARK",
                videoUrl: "https://files.catbox.moe/u39p0t.mp4"
            },
            {
                title: "Glimpse Of Us",
                videoUrl: "https://files.catbox.moe/3am1kw.mp4"
            },
            {
                title: "Sanctuary",
                videoUrl: "https://files.catbox.moe/siauj8.mp4"
            },
        ],
        songs: [
            {
                title: "Will He",
                spotifyUrl: "https://open.spotify.com/track/4apZVURUvTrT9S51LBuXON?si=c45bce964caf4dea",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
                duration: "3:22",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Demons",
                spotifyUrl: "https://open.spotify.com/track/3IsOr4fNjL24DtkNIBqjKz?si=4965813914774851",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
                duration: "2:56",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Window",
                spotifyUrl: "https://open.spotify.com/track/7kdhk2tiGUgIPwZRd2if6I?si=2cc4b12a3f0946ad",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
                duration: "2:32",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false
            },
            {
                title: "Bitter Fuck",
                spotifyUrl: "https://open.spotify.com/track/3LKgZUoFX1c4uT1CPDoOhz?si=047c344590134fb9",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
                duration: "2:34",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "WANTED U",
                spotifyUrl: "https://open.spotify.com/track/4rf7Mjit1TCiNaDgdn6peQ?si=ed87d68dc8844cfb",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "4:11",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "CAN'T GET OVER YOU",
                spotifyUrl: "https://open.spotify.com/track/1c4qQG0WFrhSZxWGHjN1qA?si=161932fbea4a4f5b",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "1:47",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "YEAH RIGHT",
                spotifyUrl: "https://open.spotify.com/track/52ooD6LHuXFubM6d1CDD93?si=7772eca49f6a4bee",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "2:54",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "WHY AM I STILL IN LA",
                spotifyUrl: "https://open.spotify.com/track/6gdwDKR1y2qERKi2CHpxqq?si=a6360521a4c04cff",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "3:19",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "NO FUN",
                spotifyUrl: "https://open.spotify.com/track/3nNjA76lO6zbLKugA0tdOw?si=e562f148ad9243d6",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "2:48",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "I'LL SEE YOU IN 40",
                spotifyUrl: "https://open.spotify.com/track/2YTNma2z5qiOWYPMBGBFES?si=622b37e44f914fc6",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "4:13",
                isFavorite: true,
                isObsessed: true,
                isNostalgic: false
            },
        ]
    },
    // Add more artists here
    
];

function calculateTotalDuration() {
    let totalMinutes = 0;
    artistData.forEach(artist => {
        artist.songs.forEach(song => {
            const [minutes, seconds] = song.duration.split(':').map(Number);
            totalMinutes += minutes + (seconds / 60);
        });
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const remainingMinutes = Math.round(totalMinutes % 60);
    
    // Always use the compact format
    if (hours > 0) {
        return `${hours}h ${remainingMinutes}m`;
    }
    return `${remainingMinutes}m`;
}

function createArtistStats() {
    const totalArtists = artistData.length;
    const totalSongs = artistData.reduce((sum, artist) => sum + artist.songs.length, 0);
    const duration = calculateTotalDuration();
    
    return `
        <div class="stats-container">
            <div class="stats-box">
                <span class="stats-number">${totalArtists}</span>
                <span class="stats-label">Artists</span>
            </div>
            <div class="stats-box">
                <span class="stats-number">${totalSongs}</span>
                <span class="stats-label">Songs</span>
            </div>
            <div class="stats-box">
                <span class="stats-number">${duration}</span>
                <span class="stats-label">of Music</span>
            </div>
        </div>
    `;
}

function createArtistSection(artist) {
    return `
        <section class="artist-section">
            <div class="artist-header">
                <div class="artist-header-left">
                    <h2 class="artist-name">${artist.name}</h2>
                    ${artist.popularSongs && artist.popularSongs.length > 0 ? 
                        `<div class="popular-songs-trigger" data-artist="${artist.name}">
                            <i class="fas fa-play-circle"></i>
                            <span class="tooltip">Popular songs you might know</span>
                        </div>` 
                    : ''}
                </div>
                <span class="song-count">${artist.songs.length} songs</span>
            </div>
            <ul class="song-list">
                ${artist.songs.map((song, index) => `
                    <li class="song-item">
                        <div class="song-item-left">
                            <span class="song-number">#${index + 1}</span>
                            <img src="${song.thumbnail}" alt="${song.title}" class="song-thumbnail">
                            <div class="song-info">
                                <span class="song-title">${song.title}</span>
                                ${song.isFavorite ? '<span class="favorite-badge"><i class="fas fa-star"></i> Favourite</span>' : ''}
                                ${song.isObsessed ? '<span class="obsessed-badge">❤️ Obsessed</span>' : ''}
                                ${song.isNostalgic ? '<span class="nostalgic-badge">🕰️ Nostalgic</span>' : ''}
                            </div>
                        </div>
                        <div class="song-item-right">
                            <span class="song-duration">${song.duration}</span>
                            <a href="${song.spotifyUrl}" target="_blank" class="song-link" title="Listen on Spotify">
                                <i class="fab fa-spotify"></i>
                            </a>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </section>
    `;
}

function createYoutubeModal() {
    const modal = document.createElement('div');
    modal.className = 'youtube-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="nav-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
            <div class="video-container">
                <video 
                    id="my-video"
                    class="video-js vjs-default-skin"
                    controls
                    preload="auto"
                    width="640"
                    height="360"
                    data-setup="{}"
                >
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that supports HTML5 video
                    </p>
                </video>
            </div>
            <button class="nav-btn next-btn"><i class="fas fa-chevron-right"></i></button>
            <button class="close-btn"><i class="fas fa-times"></i></button>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function initializeVideoPlayer() {
    let currentArtist = null;
    let currentSongIndex = 0;
    let modal = null;
    let player = null;

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.popular-songs-trigger');
        if (trigger) {
            const artistName = trigger.dataset.artist;
            const artist = artistData.find(a => a.name === artistName);
            
            if (!modal) {
                modal = createYoutubeModal();
                setupModalControls();
            }

            currentArtist = artist;
            currentSongIndex = 0;
            modal.classList.add('active');
            loadVideo(currentArtist.popularSongs[currentSongIndex].videoUrl);
        }
    });

    function setupModalControls() {
        const closeBtn = modal.querySelector('.close-btn');
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            if (player) {
                player.pause();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentSongIndex > 0) {
                currentSongIndex--;
                loadVideo(currentArtist.popularSongs[currentSongIndex].videoUrl);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSongIndex < currentArtist.popularSongs.length - 1) {
                currentSongIndex++;
                loadVideo(currentArtist.popularSongs[currentSongIndex].videoUrl);
            }
        });
    }

    function loadVideo(url) {
        if (!player) {
            player = videojs('my-video');
        }
        player.src({
            type: 'video/mp4',
            src: url
        });
        player.load();
        player.play();
    }
}

function initializeMusicPage() {
    const mainContainer = document.querySelector('.music-container');
    if (!mainContainer) return;

    // Create filter and navigation menu
    const filterMenu = createFilterMenu();
    
    // Create artist stats
    const artistStats = createArtistStats();
    
    // Create artist sections
    const artistSections = artistData.map(artist => createArtistSection(artist)).join('');
    
    // Create Spotify footer
    const spotifyFooter = `
        <div class="spotify-footer">
            <a href="https://open.spotify.com/user/sfz4qpew7rrx9e4tgacwlig9l" target="_blank" rel="noopener noreferrer" class="spotify-link">
                <i class="fab fa-spotify"></i> Follow My Spotify Account
            </a>
        </div>
    `;
    
    // Combine everything
    mainContainer.innerHTML = `
        ${filterMenu}
        ${artistStats}
        <div class="artist-sections-container">
            ${artistSections}
        </div>
        ${spotifyFooter}
    `;
    
    initializeFilters();
}

function createFilterMenu() {
    const artistOptions = artistData.map(artist => 
        `<option value="${artist.name}">${artist.name}</option>`
    ).join('');
    
    return `
        <div class="welcome-section">
            <div class="welcome-content">
                <div class="welcome-title">
                    <h2>Welcome to my Music Page!</h2>
                </div>
                <p>This is where I share my favorite artists and songs. You'll find a mix of different genres and styles that I enjoy listening to. Feel free to explore my music taste and discover some great tunes!</p>
                <div class="last-updated">
                    Last updated: March 26th 2025
                </div>
            </div>
        </div>
        <div class="filter-menu">
            <div class="filter-section">
                <label class="section-title">Jump to Artist</label>
                <select id="artist-select">
                    <option value="">All Artists</option>
                    ${artistOptions}
                </select>
            </div>
            <div class="filter-section">
                <label class="section-title">Filter by Tags</label>
                <div class="tag-filters">
                    <label class="tag-filter-item">
                        <input type="checkbox" value="favorite" checked> 
                        <span class="filter-badge favorite-badge"><i class="fas fa-star"></i> Favourite</span>
                    </label>
                    <label class="tag-filter-item">
                        <input type="checkbox" value="obsessed" checked> 
                        <span class="filter-badge obsessed-badge">❤️ Obsessed</span>
                    </label>
                    <label class="tag-filter-item">
                        <input type="checkbox" value="nostalgic" checked> 
                        <span class="filter-badge nostalgic-badge">🕰️ Nostalgic</span>
                    </label>
                    <label class="tag-filter-item">
                        <input type="checkbox" value="untagged" checked> 
                        <span class="filter-badge untagged-badge">Untagged</span>
                    </label>
                </div>
            </div>
            <div class="filter-section">
                <label class="section-title">View Mode</label>
                <div class="view-mode-controls">
                    <button id="view-all-artists" class="view-mode-btn active">
                        <i class="fas fa-th-list"></i> All Artists
                    </button>
                    <button id="view-selected-artist" class="view-mode-btn" disabled>
                        <i class="fas fa-user"></i> Selected Artist
                    </button>
                </div>
            </div>
        </div>
    `;
}

function applyFilters() {
    const selectedFilters = Array.from(document.querySelectorAll('.tag-filter-item input:checked')).map(input => input.value);
    const viewSelectedBtn = document.getElementById('view-selected-artist');
    const artistSelect = document.getElementById('artist-select');
    
    if (viewSelectedBtn && viewSelectedBtn.classList.contains('active')) {
        const selectedArtist = artistSelect.value;
        const artistElements = document.querySelectorAll('.artist-name');
        for (let element of artistElements) {
            if (element.textContent.trim() === selectedArtist) {
                const artistSection = element.closest('.artist-section');
                if (artistSection) {
                    applyFiltersToSection(artistSection, selectedFilters);
                }
                break;
            }
        }
    } else {
        document.querySelectorAll('.artist-section').forEach(section => {
            applyFiltersToSection(section, selectedFilters);
        });
    }
}

function applyFiltersToSection(section, selectedFilters) {
    if (selectedFilters.length === 0) {
        section.querySelectorAll('.song-item').forEach(song => {
            song.style.display = 'none';
        });
        return;
    }
    
    section.querySelectorAll('.song-item').forEach(song => {
        song.style.display = 'none';
    });
    
    selectedFilters.forEach(filter => {
        if (filter === 'favorite') {
            section.querySelectorAll('.song-item:has(.favorite-badge)').forEach(song => {
                song.style.display = 'flex';
            });
        } else if (filter === 'obsessed') {
            section.querySelectorAll('.song-item:has(.obsessed-badge)').forEach(song => {
                song.style.display = 'flex';
            });
        } else if (filter === 'nostalgic') {
            section.querySelectorAll('.song-item:has(.nostalgic-badge)').forEach(song => {
                song.style.display = 'flex';
            });
        } else if (filter === 'untagged') {
            section.querySelectorAll('.song-item:not(:has(.favorite-badge)):not(:has(.obsessed-badge)):not(:has(.nostalgic-badge))').forEach(song => {
                song.style.display = 'flex';
            });
        }
    });
}

function initializeFilters() {
    const artistSelect = document.getElementById('artist-select');
    const viewAllBtn = document.getElementById('view-all-artists');
    const viewSelectedBtn = document.getElementById('view-selected-artist');
    
    if (artistSelect) {
        artistSelect.addEventListener('change', function() {
            const selectedArtist = this.value;
            
            if (viewSelectedBtn) {
                if (selectedArtist) {
                    viewSelectedBtn.disabled = false;
                    
                    if (viewSelectedBtn.classList.contains('active')) {
                        document.querySelectorAll('.artist-section').forEach(section => {
                            section.style.display = 'none';
                        });
                        
                        const artistElements = document.querySelectorAll('.artist-name');
                        for (let element of artistElements) {
                            if (element.textContent.trim() === selectedArtist) {
                                const artistSection = element.closest('.artist-section');
                                if (artistSection) {
                                    artistSection.style.display = 'block';
                                    
                                    applyFilters();
                                }
                                break;
                            }
                        }
                    }
                } else {
                    viewSelectedBtn.disabled = true;
                    if (viewAllBtn && !viewAllBtn.classList.contains('active')) {
                        viewAllBtn.click();
                    }
                }
            }
            
            // Scroll to artist if one is selected
            if (selectedArtist) {
                scrollToArtist(selectedArtist);
            }
        });
    }
    
    // View mode controls
    if (viewAllBtn && viewSelectedBtn) {
        viewAllBtn.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            // Update active state
            this.classList.add('active');
            viewSelectedBtn.classList.remove('active');
            
            // Show all artists
            document.querySelectorAll('.artist-section').forEach(section => {
                section.style.display = 'block';
            });
            
            // Re-apply tag filters
            applyFilters();
        });
        
        viewSelectedBtn.addEventListener('click', function() {
            if (this.classList.contains('active') || this.disabled) return;
            
            // Update active state
            this.classList.add('active');
            viewAllBtn.classList.remove('active');
            
            // Get selected artist
            const selectedArtist = artistSelect.value;
            if (!selectedArtist) return;
            
            // Hide all artists first
            document.querySelectorAll('.artist-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show only the selected artist
            const artistElements = document.querySelectorAll('.artist-name');
            for (let element of artistElements) {
                if (element.textContent.trim() === selectedArtist) {
                    const artistSection = element.closest('.artist-section');
                    if (artistSection) {
                        artistSection.style.display = 'block';
                        
                        // Apply tag filters within this artist only
                        applyFilters();
                    }
                    break;
                }
            }
        });
    }
    
    // Tag filtering
    const tagFilters = document.querySelectorAll('.tag-filter-item input');
    if (tagFilters.length) {
        tagFilters.forEach(filter => {
            filter.addEventListener('change', function() {
                applyFilters();
            });
        });
    }
}

function scrollToArtist(artistName) {
    const artistElements = document.querySelectorAll('.artist-name');
    
    for (let element of artistElements) {
        if (element.textContent.trim() === artistName) {
            const artistSection = element.closest('.artist-section');
            if (artistSection) {
                artistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return true;
            }
        }
    }
    return false;
}

/* I don't know why this doesn't work I tried to disable scrolling 
   with the help of AI but it didn't help me. :( */ 

// Variables to store scroll state
let scrollPosition = 0;
let scrollingDisabled = false;

function disableScroll() {
    if (scrollingDisabled) return;
    
    // Store current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Apply styles to prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    
    // For iOS Safari
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    
    scrollingDisabled = true;
}

// Function to enable scrolling
function enableScroll() {
    if (!scrollingDisabled) return;
    
    // Remove styles that prevent scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // For iOS Safari
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
    
    // Restore scroll position
    window.scrollTo(0, scrollPosition);
    
    scrollingDisabled = false;
}

// Function to open YouTube modal
function openYoutubeModal(artistName) {
    const modal = document.querySelector('.youtube-modal');
    if (!modal) return;
    
    // Disable scrolling
    disableScroll();
    
    // Show modal
    modal.classList.add('active');
    
    // Load videos for this artist
    const artist = artistData.find(a => a.name === artistName);
    if (artist && artist.popularSongs && artist.popularSongs.length > 0) {
        // Your existing code to load videos
    }
}

// Function to close YouTube modal
function closeYoutubeModal() {
    const modal = document.querySelector('.youtube-modal');
    if (!modal) return;
    
    // Re-enable scrolling
    enableScroll();
    
    // Hide modal
    modal.classList.remove('active');
    
    // Stop video if playing
    const videoElement = document.querySelector('.video-js');
    if (videoElement && videoElement.player) {
        videoElement.player.pause();
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set up triggers to open modal
    document.querySelectorAll('.popular-songs-trigger').forEach(trigger => {
        trigger.addEventListener('click', function() {
            const artistName = this.getAttribute('data-artist');
            openYoutubeModal(artistName);
        });
    });
    
    // Set up close button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeYoutubeModal);
    }
    
    // Close on background click
    const modal = document.querySelector('.youtube-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeYoutubeModal();
            }
        });
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.querySelector('.youtube-modal.active')) {
            closeYoutubeModal();
        }
    });
    
    // Prevent touchmove events on modal
    if (modal) {
        modal.addEventListener('touchmove', function(e) {
            if (scrollingDisabled) {
                e.preventDefault();
            }
        }, { passive: false });
    }
});

// Go Up Button Functionality
function initGoUpButton() {
    const goUpBtn = document.createElement('button');
    goUpBtn.className = 'go-up-btn';
    goUpBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(goUpBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            goUpBtn.classList.add('visible');
        } else {
            goUpBtn.classList.remove('visible');
        }
    });

    goUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMusicPage();
    initializeVideoPlayer();
    initGoUpButton();
});

