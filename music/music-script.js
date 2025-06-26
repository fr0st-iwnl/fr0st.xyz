/**
 * MUSIC-SCRIPT.JS
 */

import '/src/js/components/base.js';

const ARTIST_CONFIG = {
    "$uicideboy$": 248,
    "Stromae": 38,
    "Bakar": 45,
    "Artemas": 36,
    "Killa Fonic": 116,
    "Mareux": 26,
    "Joji": 37
};

const artistData = [
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
                title: "New World Depression",
                spotifyUrl: "https://open.spotify.com/album/1lKWIQuLHxdlifTuudutTl?si=bSqMB7I-TyO_oVYcCu_04g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27335d777c5fa4a353b87ad62bd",
                duration: "34:15",
                isFavorite: true,
                isObsessed: false,
                isAlbum: true
            },
            {
                title: "Sing Me a Lullaby, My Sweet Temptation",
                spotifyUrl: "https://open.spotify.com/album/3elJRIffdqvypuxoDND2Q3?si=Px-YbeMqS9G5sR4AtzJIMQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273db20089661aff3a8070600ca",
                duration: "36:06",
                isFavorite: false,
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Long Term Effects of SUFFERING",
                spotifyUrl: "https://open.spotify.com/album/3dgsCZMswt6TWbsKcMgoO2?si=ms58UH3OQnew4GiNreUa_g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273b25093d7ccdce4a848988f9e",
                duration: "33:02",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Stop Staring At the Shadows",
                spotifyUrl: "https://open.spotify.com/album/7rKmLxCFlmtIxGpX4HYgs4?si=otKn7o6NTm2QKexZdRZJSw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273e2bab14ce82f78a4160376a1",
                duration: "26:07",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "I Want to Die In New Orleans",
                spotifyUrl: "https://open.spotify.com/album/2ivOxIKDHxEo6WMD9m3ytn?si=9XV3uzX-TK6u5e9QBKf6cQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739db03c8368f127291ced4263",
                duration: "42:29",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Eternal Grey",
                spotifyUrl: "https://open.spotify.com/album/2hAoB9uIsHVFABuuOREFmB?si=XzhaDkJ7Q_-a0RnbSfkQYw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27309c67f4a00626c5dfacbdf6f",
                duration: "31:06",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Dark Side of the Clouds",
                spotifyUrl: "https://open.spotify.com/album/3blujlZ2W1BZAM9KcHrbP8?si=CJ5YjIC_ROeH9qcmq2K_xA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27354c0c1ea300d471e9eb90ae9",
                duration: "25:31",
                isObsessed: true,
                isAlbum: true
            },
            
            {
                title: "Grey Sheep II",
                spotifyUrl: "https://open.spotify.com/album/1aVnxqszPG45yn2nFsVQRS?si=USs-O-5QQ4-P9-l6pQe4-Q",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738abb1b7abadd031c551aaa8c",
                duration: "16:15",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Now the Moon's Rising",
                spotifyUrl: "https://open.spotify.com/album/12RWpV5WUjYo4SisuFWMNK?si=o6XMttVYQKShed5LZZSN8g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273eede8ca62134dd7bdecb6085",
                duration: "20:07",
                isFavorite: true,
                isAlbum: true
            },
            {
                title: "My Liver Will Handle What My Heart Can't",
                spotifyUrl: "https://open.spotify.com/album/2VrpzWjnsiELWKXOJAFhme?si=-XovTpmARoSfnqDX8zY5YA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273dcff3103179d992594a227db",
                duration: "29:22",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Grey Sheep",
                spotifyUrl: "https://open.spotify.com/album/3bZ9pTGwh1vPskRRf9uymq?si=e8pRCax1RQS5BIrJfiqFgA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737e977572c5271666dc76cb9a",
                duration: "14:51",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "High Tide in the Snake's Nest",
                spotifyUrl: "https://open.spotify.com/album/7gMzKwKAsbooGeKgDlX2TL?si=2-2cCMUASguifBu6Qkkvnw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739170408b39b66a6185f6534a",
                duration: "25:51",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "YUNGDEATHLILLIFE",
                spotifyUrl: "https://open.spotify.com/album/4CUUYKJvxsH5E18kkPQofa?si=AOw1ahp_QC63go24KkpDkg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27308459c90026555f846559fcc",
                duration: "28:03",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "7th or St. Tammany",
                spotifyUrl: "https://open.spotify.com/album/4BqLJSu0S1KEsA6DBbJ9L4?si=tU7kB5xMRVyQLD0jqNgZOw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2732417400ddf7445276814eeb6",
                duration: "27:40",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Gray/Grey",
                spotifyUrl: "https://open.spotify.com/album/3uOjCKXJFyF5hbWz7mGYrr?si=vi9Bpy5qRvmcXzHt8L5rQQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273828e3c89d67979fc678be0bb",
                duration: "39:33",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "YIN YANG TAPES: Summer Season (1989-1990)",
                spotifyUrl: "https://open.spotify.com/album/6hRJl2spj8CQ7PRLdyNc3f?si=0W_tPYYOSn2HJd_HCzY1Vw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2732889122750969ea1da920379",
                duration: "12:24",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "I No Longer Fear The Razor Guarding My Heel (V)",
                spotifyUrl: "https://open.spotify.com/album/5HV1423uFq5uNui7tZBBas?si=WGndD6Q9Q7uBOzdGHym_Aw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739ae2d5f3220065aaf33ad145",
                duration: "7:34",
                isFavorite: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part I: The $uicide Saga",
                spotifyUrl: "https://open.spotify.com/album/4g8hUhboWsPGn0mzRWtneS?si=xUbcLgfHTTqwLUKEakD5sg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739f84f46d5f97a954ded6d079",
                duration: "17:29",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part II: The Black Suede Saga",
                spotifyUrl: "https://open.spotify.com/album/160wKL8ToSj86SmU6yF9bQ?si=10DW6zLtSxWx8YrQZpdkGg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27375404246c0f6d2f9985355cb",
                duration: "7:53",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part III: The Budd Dwyer Saga",
                spotifyUrl: "https://open.spotify.com/album/763MgGtSgjC4mRxGKU7MPX?si=7Mh-m5tYSLmTA7YVN5qmHA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2731ff638d8a65327699aa79dba",
                duration: "18:13",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part IV: The Trill Clinton Saga",
                spotifyUrl: "https://open.spotify.com/album/1CfmjMXQtYDHMN3MzkTCkP?si=FCbZh_6vSmKCMxMYN-Smww",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fbc974279c3da95e37a6fae1",
                duration: "16:05",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part V: The Fuck Bitches, Get Death Saga",
                spotifyUrl: "https://open.spotify.com/album/3u6Hj5bT6hDGQyJFTY3H5O?si=majSyCWVQqGi17JibwUiag",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27318fd4eff60ddd70c3fdc67d8",
                duration: "11:33",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part VI: The Tsunami Saga",
                spotifyUrl: "https://open.spotify.com/album/6I7fZ1MfvXz38j2qSmxshv?si=QxE7fNiVTIuIDkAxX_a33g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273547dd05a3c59de38fe62dd32",
                duration: "17:12",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part VII: The Fuck God Saga",
                spotifyUrl: "https://open.spotify.com/album/76xmioDynjnDufXs3KUmdP?si=3q9ns1utSH2fvcxautBwRQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273a7c1f1dca26c7ccf25d26cb9",
                duration: "18:41",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "KILL YOURSELF Part VIII: The Seppuku Saga",
                spotifyUrl: "https://open.spotify.com/album/5zM8f8uilt4a77oZUZ4zVp?si=mRhJ84lZQJeVFRy9SjOLDg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273ceca1161551919e6c572292d",
                duration: "9:53",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part XII: The Dark Glacier Saga",
                spotifyUrl: "https://open.spotify.com/album/0Jbf4eYSaqLj4OW0xCrJlj?si=8JtSVk4_QOGP53v77aAwaA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273b53ec3f3f09f8b19a5e0235d",
                duration: "6:15",
                isFavorite: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part XIII: The Atlantis Saga",
                spotifyUrl: "https://open.spotify.com/album/1jDAnHgqCfYMNsRj63Dd7u?si=rvNxF1V9R16BaqwiFQowbA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27307bba1f8abbeb68e5d0c3477",
                duration: "6:57",
                isFavorite: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part XVI: The Faded Stains Saga",
                spotifyUrl: "https://open.spotify.com/album/1VJbqV5tHd4wP7n5iJhYIY?si=z07FWj42RI23FUQ2fe4BsA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273af1033945c0e113118ec5e05",
                duration: "7:12",
                isFavorite: true,
                isAlbum: false
            },
            {
                title: "KILL YOURSELF Part XIX: The Deep End Saga",
                spotifyUrl: "https://open.spotify.com/album/6zFDOD1SXs27ERSlm1q7kY?si=FA1TZ6n9TDC1fkUQZuGy0w",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273949dea13d2de4215e8c16314",
                duration: "6:03",
                isFavorite: true,
                isAlbum: false
            },
            {
                title: "I No Longer Fear the Razor Guarding My Heel",
                spotifyUrl: "https://open.spotify.com/album/5QvM8XR1GooXrA7TgIr6Ok?si=BWy1FgQARKSGw1gfQINg3g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273774096669395b9d64fa2fcbe",
                duration: "7:08",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "I No Longer Fear the Razor Guarding My Heel (II)",
                spotifyUrl: "https://open.spotify.com/album/4mPlRdH5ZL0BppctJqjVoR?si=cBccvEvlTdS2YFjl1Okq_Q",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273bf0108d97740e68e4d4c4b49",
                duration: "6:59",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "$outh $ide $uicide",
                spotifyUrl: "https://open.spotify.com/album/1p8YahLiju8skFYWBJTEOl?si=zeILctIfTqWihD2rZ6dgDA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273a3abea866819645928a0b3f2",
                duration: "16:01",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Black $uicide",
                spotifyUrl: "https://open.spotify.com/album/3ZGK4y6cOXAsWYO9bYAYDm?si=25HIAVKOTWqlDGXBiB51kg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273d060318e0c8cb5730a215386",
                duration: "18:40",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Black $uicide Side C: The Seventh Seal",
                spotifyUrl: "https://open.spotify.com/album/2kx2zE6RYdyZ1IRhVz70xC?si=kj1C0oAGRd2ezjYfOn04mg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27348fc9636a3877a1f9bf7e39f",
                duration: "15:23",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Scrape",
                spotifyUrl: "https://open.spotify.com/album/3sgiP6GpKFy0Vo1TzVjcDo?si=jUIVk51HTj26ExZeHbOvrA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738bd49fc9d49f8251ba58b1a2",
                duration: "1:43",
                isObsessed: true,
            },
            {
                title: "HUNG UP ON THE COME UP",
                spotifyUrl: "https://open.spotify.com/album/3EfQ14xG8NNIakzIn8h2ar?si=Kqb1W79DT0WNudIP8bmRxA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273eeb83ddd0fcfe67cb08284b7",
                duration: "1:29",
                isObsessed: true,
            },
            {
                title: "Either Hated or Ignored",
                spotifyUrl: "https://open.spotify.com/album/3EjT7eLhdQ4VqlJFSJVHOZ?si=iDocb8s-Trmrl_pwe7MfjQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273d7fa82ff4010814fac7c3170",
                duration: "2:33",
                isObsessed: true,
            },
            {
                title: "FUCKALLOFYOU2K18",
                spotifyUrl: "https://open.spotify.com/album/5tNhTXfldKPoTERG8BUoXa?si=RjYG3BvtTJuXdXFDSqvL-A",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273ffa5895a19d8b40082967f54",
                duration: "1:58",
                isObsessed: true,
            },
            {
                title: "Suicide Bay",
                spotifyUrl: "https://open.spotify.com/album/1ySIijavk4gdqDTeBPiVOz?si=y5CXcAmeScGenIysWaWQsQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27332a223ef2d3552ce538b4697",
                duration: "3:40",
                isObsessed: true,
            },
            {
                title: "G Double O D",
                spotifyUrl: "https://open.spotify.com/track/3AFjeh1izw06u17JBeRoej?si=a0305eaed3e14708",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273af484517eba8aba63d95c894",
                duration: "5:54",
                isObsessed: true,
            },
        ]
    },
    {
        name: "Stromae",
        popularSongs: [
            {
                title: "Papaoutai",
                videoUrl: "https://files.catbox.moe/rascbo.mp4"
            },
            {
                title: "Alors on danse",
                videoUrl: "https://files.catbox.moe/ycp9xr.mp4"
            },
            {
                title: "tous les mêmes",
                videoUrl: "https://files.catbox.moe/anbbl6.mp4"
            },
        ],
        songs: [
            {
                title: "Cheese (2010)",
                spotifyUrl: "https://open.spotify.com/album/4kEbcH3VT6NYfpv8Wkkk80?si=WfLz0kPnS7SA3pPcvH5Apw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273ae373174b14e3eac81554402",
                duration: "41:55",
                isObsessed: true,
                isAlbum: true,
            },
            {
                title: "Racine Carrée (2013)",
                spotifyUrl: "https://open.spotify.com/album/6uyslsVGFsHKzdGUosFwBM?si=YjVtBXvbRICIciGcKoQwgw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273ab580fab750cc9baf0d52b5c",
                duration: "45:31",
                isObsessed: true,
                isNostalgic: true,
                isAlbum: true
            },
            {
                title: "Multitude (2022)",
                spotifyUrl: "https://open.spotify.com/album/6EwTLRHMROD853Kv1lAMex?si=RBMfZFvnTyyenywowgLG1Q",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2736af3a93773dcb59a67ab2953",
                duration: "38:53",
                isObsessed: true,
                isAlbum: true
            }
        ]
    },
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
                title: "Halo",
                spotifyUrl: "https://open.spotify.com/album/3xGVAgbCAxl2c40vRVRjoe?si=1pj4fmk4TCuV77avcXlLRw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2736f61ea5fff15872b314468e8",
                duration: "34:04",
                isObsessed: true,
                isAlbum: true,
            },
            {
                title: "Nobody's Home",
                spotifyUrl: "https://open.spotify.com/album/231jpal5NKt2c1QFN1D6AZ?si=uqTrq5FpTBGFssi6uzCviA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273388fbcd53f6d4647cbf10451",
                duration: "47:40",
                isObsessed: true,
                isAlbum: true,
            },
            {
                title: "Badkid",
                spotifyUrl: "https://open.spotify.com/album/2QaQGxQuEV9hZYMhpS6Zax?si=bCLrennDTX-ZQgffMyixTQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fe7dd6de1fa0853b5a0701a9",
                duration: "29:38",
                isObsessed: true,
                isAlbum: true,
            },
            {
                title: "Will You Be My Yellow?",
                spotifyUrl: "https://open.spotify.com/album/12nH1R4NqEtaOQ5M7RA63p?si=ml9UywqfS-yRaELDYCiJOw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2735bbe47313dfc5a6d6249a487",
                duration: "15:54",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Chill",
                spotifyUrl: "https://open.spotify.com/album/4Pj5Ytw6QtM5lPJSZnpII7?si=A-b-14Z2TWOcw4T7FbENMA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737c1ca5a38521b23b0c15f99c",
                duration: "6:00",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Small Town Girl",
                spotifyUrl: "https://open.spotify.com/track/7tbpHQMGcySPP07HlhWcBQ?si=88d374fb2f004a44",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273a86d416227e9aeb68255e9f0",
                duration: "3:05",
                isFavorite: true,
                isAlbum: false
            }
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
                title: "yustyna",
                spotifyUrl: "https://open.spotify.com/album/5nzSCZ7NhKvAysI0tmNOdD?si=M0EZRBCUSua9H75nwewu5g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738fe69d8df304ff053693653e",
                duration: "34:29",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "pretty",
                spotifyUrl: "https://open.spotify.com/album/2xpgb8R0BXVS2e1XnXI9xZ?si=eygM_mECR-OWnO7SXRD7Wg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273fabe0943f6dd962a792b42a1",
                duration: "30:13",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "southbound / test drive",
                spotifyUrl: "https://open.spotify.com/album/4Uh9XOh5hmX0Cw7JREc0AU?si=6PmDrvWZT8yLo9uC5dqC3A",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738ae0235c22283aa1a54ddfb2",
                duration: "5:26 ",
                isObsessed: true,
                isAlbum: false
            },
            {
                title: "Don't You Start",
                spotifyUrl: "https://open.spotify.com/album/1BMINfqQpH1PD4fEecGQfc?si=iGy6UpZPQgWinuWkUuEKpw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273315ed2288941faafa7bb29c0",
                duration: "3:03",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "You Were a Dream",
                spotifyUrl: "https://open.spotify.com/album/3TguXmUsKx3W6JUrQ2du3E?si=YHZSFWS5TU2lTIKjzf5k7A",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2739b82900f73c2393e53a73709",
                duration: "2:28",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "Tattoos",
                spotifyUrl: "https://open.spotify.com/album/2tp9gMf7LcerH6OK5pFWIe?si=mqo1XYdITGuSv8chQYw_8w",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27350f924e816266728a069f5e9",
                duration: "2:45",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "I'll Make You Miss Me",
                spotifyUrl: "https://open.spotify.com/album/3yRIVBkRxCMyhkwklUk25Z?si=41w9dRbuTtWZL1ygjGBH0g",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27307ca2674866ff3bcc4ac7342",
                duration: "3:00",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "Sink or Swim",
                spotifyUrl: "https://open.spotify.com/album/0QHzmTrTtLggERAjEX70CY?si=Qa21SZY1SRyySErsBsQOrw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737ab403e717752dcf3b1468e8",
                duration: "3:09",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "Can't Stop Loving You",
                spotifyUrl: "https://open.spotify.com/album/5cljaSxDCinxKScVYnFzXe?si=clBPsaAHR3WviN2XS3ClTg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273c6237a022a47caf73b67eb8d",
                duration: "3:49",
                isFavorite: false,
                isObsessed: true
            },
            {
                title: "Me n My Girl",
                spotifyUrl: "https://open.spotify.com/album/5zod1g9FgDO4eNNpjLMDPT?si=e1KvvDu2TFK35d_qXWEAfA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27332ff4230fd62db9e62d260dd",
                duration: "2:10",
                isFavorite: false,
                isObsessed: true
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
                title: "Ramses 1989",
                spotifyUrl: "https://open.spotify.com/album/5h65FxZ1eUm9ib3MHGL07U?si=HtpbR4uTTw6VRl1Tyxi4zg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273679fc2b0f6fb5f000805ef77",
                duration: "57:49",
                isObsessed: true,
                isNostalgic: true,
                isAlbum: true
            },
            {
                title: "Lama Crima",
                spotifyUrl: "https://open.spotify.com/album/34KJBztKyAou1TfOyt2TQM?si=PihOzAJPTwuyRVOy587oLA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27331cb97ed068ca83619513aa9",
                duration: "1:09:00",
                isObsessed: true,
                isNostalgic: true,
                isAlbum: true
            },
            {
                title: "Emotiv Munteana",
                spotifyUrl: "https://open.spotify.com/album/5tXcDWPG3RI80OFInNx9h2?si=EGVl9ZDwRg6Wjq0V4DOI9w",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2732f4c03c4b8885bb5f7867d96",
                duration: "22:21",
                isObsessed: true,
                isNostalgic: true,
                isAlbum: true
            },
            {
                title: "2089",
                spotifyUrl: "https://open.spotify.com/album/6ke5zdv0C3F1GAKVdjFIhk?si=bN1FwedPRNaZGuE_eI6ppw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2735633b411498d84061a3b290c",
                duration: "31:40",
                isFavorite: true,
                isNostalgic: false,
                isAlbum: true
            },
            {
                title: "Terra Vista",
                spotifyUrl: "https://open.spotify.com/album/2QscibxUEEmNLVfSi1b2mo?si=MeJh4V3eRoKQvefpSYBEtA",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273348cf9323fd43e3bc384d628",
                duration: "30:32",
                isObsessed: true,
                isNostalgic: false,
                isAlbum: true
            },
            {
                title: "Osvaldo",
                spotifyUrl: "https://open.spotify.com/album/6dupAMHCVqLmjNxIHJlfPV?si=xG-7nZ7LQ2K5VcNsAmPuWQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734682c8ad2c586c7b25406ab8",
                duration: "52:44",
                isObsessed: true,
                isNostalgic: false,
                isAlbum: true
            },
            {
                title: "RADIOFONIC",
                spotifyUrl: "https://open.spotify.com/album/28TjBMndTDtdBNWHbgtcbL?si=1DjBe46aQIeFcFRAyDFi1A",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734fd341bc0f2e3935f10c85a0",
                duration: "1:00:00",
                isFavorite: true,
                isObsessed: false,
                isNostalgic: false,
                isAlbum: true
            },
            {
                title: "2milinblunt",
                spotifyUrl: "https://open.spotify.com/album/2H0iTVABQYxdu9MUWCbkSt?si=1B5FAym3Rb-yC4ZNejI7tg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273b2442e4001a6f4b71d883d8c",
                duration: "2:17",
                isObsessed: true,
                isNostalgic: true,
            },
            {
                title: "Exodus",
                spotifyUrl: "https://open.spotify.com/track/1lrNlXAROp03pnJ24sc2Z0?si=f77ac53aa8a245d8",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273082a215136db5f64c09c49d9",
                duration: "4:28",
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "9 Ciori",
                spotifyUrl: "https://open.spotify.com/track/5X2kx9dd6cMLJUHbVemEoF?si=1b2e928a3f854ca2",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2735b9e5f222ba2dd6f8944c1d4",
                duration: "3:04",
                isFavorite: true,
                isNostalgic: true
            },
            {
                title: "Adorm",
                spotifyUrl: "https://open.spotify.com/track/4dKIj32okCArIY5w12O9Xg?si=bcbbfe5b5a8841a3",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738f4a423a90544cfbf276f6b5",
                duration: "3:28",
                isObsessed: true,
                isNostalgic: true
            },
            {
                title: "Lolita",
                spotifyUrl: "https://open.spotify.com/album/0YU2RBv1qulav4l9aUGFMo?si=MtmtZvK2QhyvtXGzvGwuVg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273a0a058d4de8ccf322f9074d2",
                duration: "2:42",
                isFavorite: true,
                isNostalgic: false
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
                title: "Lovers From The Past",
                spotifyUrl: "https://open.spotify.com/album/6Z4eMptTUBwtdJHQeNV91N?si=bwulXjxySAm53ry6NwLsQg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2737cd3768fecefe743c5465b57",
                duration: "34:58",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Nonstop Romance",
                spotifyUrl: "https://open.spotify.com/album/15NaFl1G4oj4aP6x7o7Tza?si=V6wzDh-qSu2NpKg67VnqdQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273b885da0e907572ed8f1e9da0",
                duration: "26:20",
                isFavorite: false,
                isAlbum: true,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Decade",
                spotifyUrl: "https://open.spotify.com/album/5nVWi9N2LrOLIZ1aKBmqwe?si=-gis0Cv9SnWxuHPKIYKEzw",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27384de0e7589ec2b06f3df4d84",
                duration: "10:57",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Leech",
                spotifyUrl: "https://open.spotify.com/track/1E6AyRgbhDllNzYQXeS4iL?si=df028eb6e2c94993",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273088e9fde007c85411435b38e",
                duration: "4:30",
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Blackout",
                spotifyUrl: "https://open.spotify.com/track/7HMPSmje7Q1wu4XvfuvJZp?si=3f45d326ccd04f59",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b27322de2f10c176dc8152047c17",
                duration: "5:17",
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Dance Floor Dolor",
                spotifyUrl: "https://open.spotify.com/track/0ocImbYiDNIiayVE2nE6PA?si=cd6dff20dfce4d68",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738e2950353b3867e559a6d308",
                duration: "5:09",
                isObsessed: true,
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
                title: "BALLADS 1",
                spotifyUrl: "https://open.spotify.com/album/5mIImcsuqpiSXg8XvFr81I?si=vv2uhnuSTMG1_ioZus9qHg",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2734cc52cd7a712842234e4fce2",
                duration: "35:11",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "Nectar",
                spotifyUrl: "https://open.spotify.com/album/65edimIChzNNK8VGn56pIK?si=LsGeQmqfRH6F4MOMkx_mVQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2738da6404284573219a9b1e2f4",
                duration: "53:14",
                isObsessed: true,
                isAlbum: true
            },
            {
                title: "In Tongues",
                spotifyUrl: "https://open.spotify.com/album/3dtSst4EXjGeZVQ5Sco315?si=vaR3QD6OSheZfZ4oN5jWXQ",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b2733a927e16c14f2aeb7c004e19",
                duration: "16:39",
                isFavorite: false,
                isObsessed: true,
                isNostalgic: false
            },
            {
                title: "Think About U (feat. Joji)",
                spotifyUrl: "https://open.spotify.com/track/3tZZvB5AlpLyZ378K4iC44?si=e41d53218a3c40b7",
                thumbnail: "https://i.scdn.co/image/ab67616d0000b273f2bb993c6c4a85f74ecca0b6",
                duration: "2:49",
                isFavorite: true,
            },
        ]
    },
];

function calculateTotalDuration() {
    let totalMinutes = 0;
    artistData.forEach(artist => {
        artist.songs.forEach(song => {
            // Handle all durations in the format "MM:SS" or "HH:MM:SS"
            const parts = song.duration.split(':').map(Number);
            
            if (parts.length === 2) {
                // Format is MM:SS
                totalMinutes += parts[0] + (parts[1] / 60);
            } else if (parts.length === 3) {
                // Format is HH:MM:SS
                totalMinutes += (parts[0] * 60) + parts[1] + (parts[2] / 60);
            }
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
    
    // Calculate total songs using the ARTIST_CONFIG
    const totalSongs = artistData.reduce((sum, artist) => {
        // If the artist has a configured song count, use that
        if (ARTIST_CONFIG[artist.name]) {
            return sum + ARTIST_CONFIG[artist.name];
        }
        // Otherwise use the actual count of songs in the array
        return sum + artist.songs.length;
    }, 0);
    
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
    // Get song count from configuration or use actual song count
    let songCount;
    if (ARTIST_CONFIG[artist.name]) {
        songCount = `${ARTIST_CONFIG[artist.name]} songs`;
    } else {
        songCount = `${artist.songs.length} songs`;
    }
    
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
                <span class="song-count">${songCount}</span>
            </div>
            <ul class="song-list">
                ${artist.songs.map((song, index) => `
                    <li class="song-item">
                        <div class="song-item-left">
                            <span class="song-number">#${index + 1}</span>
                            <img src="${song.thumbnail}" alt="${song.title}" class="song-thumbnail">
                            <div class="song-info">
                                <span class="song-title">${song.title}</span>
                                ${song.isFavorite ? '<span class="favorite-badge"><i class="fas fa-star"></i> Solid</span>' : ''}
                                ${song.isObsessed ? '<span class="obsessed-badge">❤️ Obsessed</span>' : ''}
                                ${song.isNostalgic ? '<span class="nostalgic-badge">🕰️ Nostalgic</span>' : ''}
                                ${song.isAlbum ? '<span class="album-badge">💿 Album</span>' : ''}
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
                    Last updated: June 27th 2025
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
                        <span class="filter-badge favorite-badge"><i class="fas fa-star"></i> Solid</span>
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
                        <input type="checkbox" value="album" checked> 
                        <span class="filter-badge album-badge">💿 Album</span>
                    </label>
                    <!-- <label class="tag-filter-item">
                        <input type="checkbox" value="untagged" checked> 
                        <span class="filter-badge untagged-badge">Untagged</span>
                    </label> -->
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
            
            // Hide entire artist section if no songs are visible
            const visibleSongs = section.querySelectorAll('.song-item[style*="display: flex"]');
            if (visibleSongs.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
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
        } else if (filter === 'album') {
            section.querySelectorAll('.song-item:has(.album-badge)').forEach(song => {
                song.style.display = 'flex';
            });
        } 
        /* else if (filter === 'untagged') {
            section.querySelectorAll('.song-item:not(:has(.favorite-badge)):not(:has(.obsessed-badge)):not(:has(.nostalgic-badge))').forEach(song => {
                song.style.display = 'flex';
            });
        } */
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

/* I don't know why this doesn't work I even tried to disable scrolling 
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
    initializeScrollbars();
});

// Function to initialize scrollbars for lists with more than 10 items
function initializeScrollbars() {
    // Apply the scrollable-list class to any song list with more than 10 items
    document.querySelectorAll('.song-list').forEach(list => {
        if (list.children.length > 10) {
            list.classList.add('scrollable-list');
        }
    });
}

