'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "fcbc4497438f7347742bc4c1240e9180",
"index.html": "c1b3b3607e395045ab7c673067dcf449",
"/": "c1b3b3607e395045ab7c673067dcf449",
"main.dart.js": "6b6dd14396a20ff401de38ebcc4c8d32",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9ba7151040eae252c485bbc700511357",
".git/config": "0d3472c48f45f215e893470fbb931119",
".git/objects/61/3b32059df2c372c08faa85195c83f8eebc3dea": "af0cc8f4064e69de260dfb20a0f8a5b3",
".git/objects/61/57d90ac5bc280c708580ac123e3be688e23d62": "31f0ca0d06fcdba29f3f82c5458711fc",
".git/objects/50/dd3fc5fa6a97eedfe9bc279251e3fa75187c28": "db845b57bd4fdc6eb22a7a13198823e8",
".git/objects/50/e0dc4f16933a23943122e72296b85d4f449fc9": "7ac5e4cf109dfb1e8f48b7c9877bf8d5",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/c5a900a39af9dfdf074deb2dec3b95e93d718e": "1c9db5d3375429e19846b2585038f754",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/3a033c89bf57a4f44bf29d73deb651ceab053e": "070aed2d671d84513d5ec21bf0845da7",
".git/objects/32/888d92d35a3482e56d0f74df7a7a31375e7b10": "2a3b4e41ac93792a466adec151272a96",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/3d/9ea1808ff56d6b1d9cb2c124bc4d3a2ab9bedd": "d3a673ef63125de416a18f7192424701",
".git/objects/58/566fae10bc4f586d7a18b1ea98e181ce04b441": "5a0bfb64e40f50a4593b0ac837589202",
".git/objects/58/d0041088a8d3377dd9350f980d0eff949f75d6": "2942064b4532542306769893bc421fbe",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/a9d0b430dcd4660be30c982a795e948995a05a": "356b9364db15ce00c827785533b1462a",
".git/objects/5f/418895a32c7642722f54615c8915a916b33496": "137d18066ac421cab5685a5870e200ec",
".git/objects/33/d03d9318eb06db1f06944e8c3348175ca612ac": "d65ddbb612da75c2034917f7bb81445f",
".git/objects/9d/2c0c68b12b7d83000dc9116c9b1fdd2dcc59c2": "a145e02f7ce25f11202b98b09f56d49d",
".git/objects/a4/93f94095b2ec86a3b20e81e7827b03eeb9c0cf": "4d932094847ddf7942e1b50030479171",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ac/0f253460b02b20a44c42f57743491c72d227a9": "f9604d53f4eaa3b2b9def32b8d2e7dff",
".git/objects/bb/2df2f0700df38251a25dad2df718585017589f": "42e2e8410c4eab44abfad0a5dcdccfff",
".git/objects/bb/74523428746e9c3ca3e4477d70c840b62a08a4": "9945e6c63a8f6099bf5dbd59f61231c4",
".git/objects/df/fcd6dd382c6c9c2db5ea6fac45950314cf8118": "6f967a200cee1cec791d8f11a2089810",
".git/objects/b4/9b4d5ebcac27aaa62f5547134c4eed7a3dbb50": "faf8c9f9f7ba5da151e6bf27a396a666",
".git/objects/a5/ac0dac0d0dea9d678bbb1b4a0c42587b9e54f8": "a5d7172db8f3e5370c5ca7067e08f0db",
".git/objects/bd/3c89aae26999abe770b42a80dd02668e3be6fe": "8a54771e2114aa8ccb58dc5ee1db1f0d",
".git/objects/bd/7446ea390b2b20fe0a809090ad3bc237f89600": "96965c7dffc6f35562a68712f676e8ea",
".git/objects/d1/4d2a6ab32bfc014a3739eacec170e264fb9b60": "556d39172a65139bece8961db71c494a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1dd6de8f21f8a659cb2762cbc8812b302fa823": "87e1630af7214ca41a16bfb31c7daca4",
".git/objects/ae/f6c83fb0b9566e3dac824e4dcfd8a4bef143db": "e15103e8d443499da37ffdfbdb995b7e",
".git/objects/ab/720b6a36fd4afe13dc3e83f65e93e0dbe5d869": "d2ab08f3ed2d3d705dc54573361458d4",
".git/objects/e5/1acf5064927193c2971f95d3703f477e67a0b5": "3ae215071ee79a48bd1f07194da39d6a",
".git/objects/e5/34bdb43c9db40385e13f67dbdc106e57267f90": "07cfa51b934ebb06cad8450cf7eaa106",
".git/objects/f4/3c06056b2bccfef215497ba5e881bd4021ab06": "567f040d2383005d2414200693c7514a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/f4d3b65c2a012c485a8a155e7ff9069ff7f667": "db42efd434f50980aa1408db155f6da0",
".git/objects/c9/88362fb64c22bbb3ac0308533d9e85b407fd53": "0945853c811acc559bdc05e4d3b6b788",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/f265bef02eb43578f6d7c4cf565c061314fa23": "24a17f0caa206c197057155a6d87e1a7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/0c696674e677f9070812c9b83579cc374ebaaf": "cdb78afab1ec099a121bd2749d729b70",
".git/objects/18/51e30100c0de2a351bbb293e394273c79ce4ff": "b46af01d77b5e471b319abe568a398b7",
".git/objects/11/5f4c29230a902fb92b18de5a2a1ae54a364bbc": "47c817f6c87d518e82a987e13fa82290",
".git/objects/11/9b6a7a27b6e5870e4e178fc7892b428722722e": "ad3202deea13c8bf2d40a10a248f96fe",
".git/objects/29/42903c8231fd8882f28302e7cdee859e90c0e8": "5491326f0474c5b605fc540c0f57968f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/bee7d984535b3db51469b04b64efdd6435275a": "1487086a820939da0f4434e7b388d9e5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/59e2bdbff6dd0a669bbdb573ced9427aa93d0b": "142f14baa4ecd505e6efd4a059a307a6",
".git/objects/17/c759c2aea0a420f8f11d39d9d1f9ed53df37b6": "5f9fbf836d0e4fcfcc593f75883c7177",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/84c1f9509a6c896e60e7e887073ce73a77aa5a": "9eaf7fb6ef75c45062fcae9f3e98d2b5",
".git/objects/4c/34147998bccd457b37ab474062f35b7a94618e": "6aa3c9cb1feb8c3cea2a7c3dab3b20e9",
".git/objects/4c/4b8a05aec45317375ed9bc1f2187d3464943da": "d82c2755f3b21efe4373ac90d3549c4d",
".git/objects/21/092a00756e7f1ace89c905b3219456974b7f06": "ad321e18d01c017919cb5febf02cdf53",
".git/objects/86/53d5518e0b767611f99a13bf04f1496d618838": "b02b0548b325cdcb4c44fab2af476769",
".git/objects/72/391a81dfb4f1c1837b28a1a57536b2687ce28f": "7aeee6a145716c84d5b7dfac7fe27d30",
".git/objects/44/9b37a51dde040fba3e122d4cf5a8ce8e9968b6": "e1ba64acf22490d62fb2ef2158069ff8",
".git/objects/44/3fbce80caefe9575678bbe125cde7b8b38b092": "aed5ceefdf21ad38546af7c3d2c8eaf4",
".git/objects/43/4690a2f0d7b90437ae2b643a28cc5bf62b92f5": "58df3f3d9f8816e7511efd0a784be7b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/4cbc39ba7280555f73e305b4d87b6278c7c688": "033986df93cf9ba11957fb3b47dcbdac",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/15fac7e6248ace14808ad6aee3c7953a913d70": "ce8e1fa7d7dca55495ace025d71f1e6c",
".git/objects/00/8a30b5adfb999baf9e13572ac317d40ca8a585": "d2a5aaea9caa6f06089c35dfec28195f",
".git/objects/6e/7a05877cb14da5076c1f0781d67d0de4f870f8": "13ae92197ec21d026949b5660b2261cb",
".git/objects/53/6a24dd71d2ad3d1812b1ab5a6679ab35175af6": "c04e8c0ce1051465ada7d4401cd2ab85",
".git/objects/53/a20a11ba9a7d2ead68735a01fa65d83cac0e74": "4cb8610de2ee6873c7e7a57264885a4b",
".git/objects/6d/045d916c5811a7194bf45826f30909028ea9ce": "9a0b962f372a7a752b0833890a14e73e",
".git/objects/52/28c2192b40e6000263b839cdefe51c9e8f5c43": "d88c03e8b20a918cbf69fdd7884d1fe2",
".git/objects/63/57a832fac4bdc1f89724f526e6b8ab1799d53a": "8f85181e229ab4b089af0c48d148be2f",
".git/objects/63/b59afaca0d5ca605c8079a7ab3150e6cea09f4": "5623a22c15e6ff220dfdb5fd3595090b",
".git/objects/0a/20f7394a23de942fae119b09d13cfa0af221ed": "97b4c89fa5032ebe3fbfbf3b56928db4",
".git/objects/64/d400ff52fe9c9ce69b16be7ebcb8644700649a": "a782041abc6b7c44e158ead2086cfb0e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/503a05b819e8123d6e2528edf6fed2d3c0b6fa": "fb6ef0e2e7e9d978e82347e53daaa36a",
".git/objects/dc/3ebe56268b4b8f7b8b2381255be3208fee801c": "f07c52c00e76d17796574bef500ae1b5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b0da36d52ca860ee0b78f988bbb301a728a74b": "18ae3a7e09d7d88ef7737e8457a91ede",
".git/objects/c4/598b0f7468369e5776e094f0ef8593fb99bdc0": "fc97476faec093eb1d8bd3593aacf6a3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/01a7571fac360dceef5971260cc1934140a24c": "fbf589a4ce406e0a38094c2f81e98621",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/e9/0fa6fd277e87c05830d9d7b892149f2ff27158": "f678acb17702031ae10dd2b5e66ff0e9",
".git/objects/f1/fd6b3e7b2cc65f62c0cd61bf6b6608a65fa933": "f7f597cfd7dda62e0df254f27fb7518e",
".git/objects/e7/f784ae7d87f1967ae0684337951faf2579d4eb": "54ab9987f16af1e464f338b6ea6e6f5c",
".git/objects/e7/e789c5d6bca35598cd2289a5f2ae35eb3ea3a0": "d574c5ba8c0725f6f2b8f683f4ffce0b",
".git/objects/e7/1eed59d60fdf360bad1c649a32f4c4baad882d": "2b987fbed85ebb71e00c6646da01431c",
".git/objects/cb/63e4c6d9fc7efa0a0c655f83378d532973d02a": "38b9dc394baa587b1479df508a06a43e",
".git/objects/46/ba7acd522c3ef982eda11287dfc0d097b549bb": "e00a1afc5ebe0518cf2a5bc677bc7b5e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/13044d2dd71e82e24f006c3bbba6036f541820": "b17c3b59b3957a214078665cc0499919",
".git/objects/77/76968b94ab445e2967ba32947a59cc09957eb2": "5ad9abcd2aed4b460d380b0450f0f03c",
".git/objects/77/ba6cd286a8e310ae5b88ac2947424ad108b16b": "3ac70852744aee0b3bcfa110be2fb551",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/100f46f640a5e7190d6b17c092a7f0059581a7": "b9703118fb67798d17eb020ee8e17916",
".git/objects/4f/36c3b70d7b840134bd96ce633f8104fd34f03e": "c14aed8322c538b530909838d8baf78f",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/3563a453a9bb86ff93c239f849ed4fc9aa0fdb": "28e0fbfc070d6e6558bf358114db1edb",
".git/objects/1d/7dca79bdc0d7977a4ffd5d8e9de4adc9df597a": "977698f248575e0714f7c02c7accfee6",
".git/objects/1d/39af73341f3d6f1a403d8f70419c69e148b705": "6a0ceb06fa88615c2b05a4022da356fd",
".git/objects/71/074ad62fa00e9197bf8bac132421f5619756ef": "55cb3955227acd83eeb4c63487228937",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/47/01fa1d8b8c29df0fb643143dc9a2b9eb7c5e49": "ca5846d274ac295ebf9e4bf1bea3186b",
".git/objects/78/1d4fbb7cca1976936d379eb72977e547273c22": "05630e190e6f4cad5659f64c9af23c71",
".git/objects/8b/844670a1d419873064408a4c1446b8dcb6c6b4": "69d61fd194f62eeda013cf1d077aab6f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/897d0db21d5187b1e578251e12b7889a6e7937": "17d72e2b1749eadadccb1f59305e74e9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "319f501698acb783b0b07cfa2a6a6df9",
".git/logs/refs/heads/main": "5c9365a884db9cf07b7262b170b83ab4",
".git/logs/refs/remotes/origin/main": "334c84be3d4f38637b67337b5234235b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a1f77f01b6c77c6a824e5566208f9c33",
".git/refs/remotes/origin/main": "a1f77f01b6c77c6a824e5566208f9c33",
".git/index": "dd5ed5404f5f3727fccc36f828663ad0",
".git/COMMIT_EDITMSG": "d8b0b24dfee05260e3c47c63e0afb5c7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ad5e7003a1b8b67db77a351cd45a90f7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89f39441bb22fa70b4bec7e3491aa3fe",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
