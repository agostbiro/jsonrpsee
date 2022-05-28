window.BENCHMARK_DATA = {
  "lastUpdate": 1653698611061,
  "repoUrl": "https://github.com/paritytech/jsonrpsee",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2891ca11f7da6be8022a9e165eaa9a90017d3d43",
          "message": "chore(release 0.4.1) (#513)",
          "timestamp": "2021-10-12T17:04:56Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/2891ca11f7da6be8022a9e165eaa9a90017d3d43"
        },
        "date": 1634084619291,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 197,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 229,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 185063,
            "range": "± 15069",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1931850,
            "range": "± 51733",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3710238,
            "range": "± 143235",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7226515,
            "range": "± 236273",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14120558,
            "range": "± 314479",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27667816,
            "range": "± 609309",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56019117,
            "range": "± 2017882",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 111479,
            "range": "± 10775",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 180233,
            "range": "± 12989",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 292386,
            "range": "± 25221",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 517401,
            "range": "± 54112",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1080651,
            "range": "± 168062",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2058063,
            "range": "± 148735",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3826794,
            "range": "± 359541",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 181991,
            "range": "± 13708",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1969144,
            "range": "± 107537",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3747837,
            "range": "± 190969",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7272838,
            "range": "± 282686",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14252038,
            "range": "± 455696",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28322099,
            "range": "± 1450969",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56269228,
            "range": "± 1678899",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 114682,
            "range": "± 11241",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 183313,
            "range": "± 9212",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 298256,
            "range": "± 19743",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 530863,
            "range": "± 31199",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1104499,
            "range": "± 114518",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2072102,
            "range": "± 162385",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3902460,
            "range": "± 489338",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 140092,
            "range": "± 10863",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 23874,
            "range": "± 2139",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2036,
            "range": "± 942",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "360a69a4a70129dc70f58f8de72e82d8e5c0553c",
          "message": "DRY error handling for methods (#515)\n\n* DRY error handling for methods\r\n\r\n* Fix clippy issues + unnecessary borrow",
          "timestamp": "2021-10-13T20:22:27Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/360a69a4a70129dc70f58f8de72e82d8e5c0553c"
        },
        "date": 1634170892793,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 148,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 166,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 130377,
            "range": "± 5232",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1602700,
            "range": "± 72845",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3124561,
            "range": "± 21755",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6135625,
            "range": "± 66297",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12099584,
            "range": "± 145985",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23993586,
            "range": "± 158404",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47941863,
            "range": "± 275108",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 65957,
            "range": "± 3089",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 125862,
            "range": "± 2108",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 207577,
            "range": "± 4951",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 368087,
            "range": "± 6588",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 783602,
            "range": "± 37779",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1465917,
            "range": "± 62877",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2847313,
            "range": "± 202990",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 129613,
            "range": "± 5115",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1614309,
            "range": "± 119292",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3115998,
            "range": "± 108461",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6126352,
            "range": "± 161821",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12153924,
            "range": "± 428417",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23961874,
            "range": "± 450693",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48279092,
            "range": "± 573299",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 63827,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 124822,
            "range": "± 3976",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 208287,
            "range": "± 6311",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 373698,
            "range": "± 13857",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 775994,
            "range": "± 33258",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1494833,
            "range": "± 84821",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2915125,
            "range": "± 231587",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 81005,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 13141,
            "range": "± 3292",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 922,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e734afe28e91be4ee45da570304636420da45d0a",
          "message": "chore: update readme to new pending release (#516)",
          "timestamp": "2021-10-14T11:16:58Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/e734afe28e91be4ee45da570304636420da45d0a"
        },
        "date": 1634257300919,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 170,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 129259,
            "range": "± 4457",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1601457,
            "range": "± 19061",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3118545,
            "range": "± 37921",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6168468,
            "range": "± 56247",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12240439,
            "range": "± 119715",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24267633,
            "range": "± 154385",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 48613732,
            "range": "± 363369",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 64693,
            "range": "± 2704",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 126518,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 209256,
            "range": "± 7248",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 379417,
            "range": "± 12063",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 776037,
            "range": "± 100966",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1485299,
            "range": "± 65942",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2875570,
            "range": "± 189431",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 130574,
            "range": "± 3184",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1609671,
            "range": "± 11929",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3123808,
            "range": "± 24103",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6150946,
            "range": "± 51927",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12223388,
            "range": "± 78711",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 24164629,
            "range": "± 163359",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48308199,
            "range": "± 255399",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65740,
            "range": "± 2794",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 126883,
            "range": "± 12219",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 207821,
            "range": "± 3454",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 375951,
            "range": "± 29984",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 757424,
            "range": "± 32912",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1459173,
            "range": "± 63359",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2807444,
            "range": "± 179449",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 83338,
            "range": "± 4217",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18609,
            "range": "± 2238",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 979,
            "range": "± 92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39",
          "message": "Bump actions/checkout from 2.3.4 to 2.3.5 (#532)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 2.3.4 to 2.3.5.\r\n- [Release notes](https://github.com/actions/checkout/releases)\r\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/checkout/compare/v2.3.4...v2.3.5)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/checkout\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-10-18T15:53:42Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39"
        },
        "date": 1634603035735,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 191,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 212,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 175495,
            "range": "± 28005",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1887292,
            "range": "± 59447",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3559604,
            "range": "± 222359",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6855268,
            "range": "± 186737",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13647661,
            "range": "± 317238",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 26963443,
            "range": "± 1068594",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 53731548,
            "range": "± 1229824",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 101948,
            "range": "± 7731",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 172734,
            "range": "± 9742",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 277139,
            "range": "± 52755",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 484863,
            "range": "± 80019",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1013446,
            "range": "± 231469",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1957566,
            "range": "± 131391",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3645859,
            "range": "± 373212",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 177994,
            "range": "± 41015",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1908111,
            "range": "± 71502",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3603466,
            "range": "± 199225",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6961046,
            "range": "± 326467",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13673074,
            "range": "± 806595",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27020522,
            "range": "± 966802",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 53713224,
            "range": "± 1045578",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 103827,
            "range": "± 24482",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 178431,
            "range": "± 20732",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 282434,
            "range": "± 32488",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 489957,
            "range": "± 70972",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1004955,
            "range": "± 49372",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1910025,
            "range": "± 124662",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3675222,
            "range": "± 394427",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 131382,
            "range": "± 9922",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18284,
            "range": "± 2873",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1969,
            "range": "± 445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39",
          "message": "Bump actions/checkout from 2.3.4 to 2.3.5 (#532)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 2.3.4 to 2.3.5.\r\n- [Release notes](https://github.com/actions/checkout/releases)\r\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/checkout/compare/v2.3.4...v2.3.5)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/checkout\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-10-18T15:53:42Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39"
        },
        "date": 1634689642840,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 200,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 218,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 184105,
            "range": "± 16855",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2074627,
            "range": "± 155665",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3911322,
            "range": "± 293963",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7450646,
            "range": "± 474411",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14850896,
            "range": "± 916374",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29026506,
            "range": "± 1092102",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 58780463,
            "range": "± 3302486",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 127571,
            "range": "± 95628",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 185400,
            "range": "± 25130",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 326849,
            "range": "± 79527",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 593260,
            "range": "± 86338",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1077690,
            "range": "± 100349",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2198515,
            "range": "± 469511",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4204669,
            "range": "± 664109",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 180858,
            "range": "± 30324",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2016483,
            "range": "± 113842",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3913305,
            "range": "± 272889",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7503406,
            "range": "± 457049",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14820655,
            "range": "± 831623",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29521163,
            "range": "± 1436157",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 58443721,
            "range": "± 3002883",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 130490,
            "range": "± 20388",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 190454,
            "range": "± 36375",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 329163,
            "range": "± 36050",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 532444,
            "range": "± 83750",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1137405,
            "range": "± 95079",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2189850,
            "range": "± 237722",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3974936,
            "range": "± 738675",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 150480,
            "range": "± 16218",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20606,
            "range": "± 6119",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1972,
            "range": "± 917",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39",
          "message": "Bump actions/checkout from 2.3.4 to 2.3.5 (#532)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 2.3.4 to 2.3.5.\r\n- [Release notes](https://github.com/actions/checkout/releases)\r\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/actions/checkout/compare/v2.3.4...v2.3.5)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: actions/checkout\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2021-10-18T15:53:42Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/4adf6665b9ef3e3e5f0eb06d080979be3bdc9f39"
        },
        "date": 1634775724828,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 169,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 132186,
            "range": "± 17459",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1596860,
            "range": "± 10238",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3112249,
            "range": "± 15674",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6133930,
            "range": "± 44246",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12166547,
            "range": "± 165780",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24036003,
            "range": "± 150471",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47884017,
            "range": "± 280314",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 65778,
            "range": "± 2620",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 125534,
            "range": "± 2414",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 207896,
            "range": "± 5024",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 380465,
            "range": "± 35713",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 774638,
            "range": "± 26200",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1501071,
            "range": "± 78340",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2875052,
            "range": "± 223333",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 126540,
            "range": "± 5696",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1602685,
            "range": "± 7496",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3095399,
            "range": "± 13687",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6108168,
            "range": "± 46207",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12074196,
            "range": "± 77421",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 24074772,
            "range": "± 511861",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 47886839,
            "range": "± 257874",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 67695,
            "range": "± 2984",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 125075,
            "range": "± 2026",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 208877,
            "range": "± 4233",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 373084,
            "range": "± 8922",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 762527,
            "range": "± 23523",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1487329,
            "range": "± 72379",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2890048,
            "range": "± 230176",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 83421,
            "range": "± 1320",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18546,
            "range": "± 2310",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1051,
            "range": "± 144",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1634862257470,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 198,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 236,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 193124,
            "range": "± 20491",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1976234,
            "range": "± 177540",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3779044,
            "range": "± 155405",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7233433,
            "range": "± 390970",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14057709,
            "range": "± 447392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28287236,
            "range": "± 1131283",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56506563,
            "range": "± 2067373",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 117470,
            "range": "± 11366",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 190389,
            "range": "± 52851",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 299181,
            "range": "± 59780",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 522345,
            "range": "± 197727",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1068605,
            "range": "± 114630",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2138902,
            "range": "± 296610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3950811,
            "range": "± 490114",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 183614,
            "range": "± 13290",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2008221,
            "range": "± 97088",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3759122,
            "range": "± 114973",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7474214,
            "range": "± 989968",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14378044,
            "range": "± 800224",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28451604,
            "range": "± 1072990",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56722131,
            "range": "± 2380068",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 121938,
            "range": "± 9476",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 188190,
            "range": "± 17961",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 300243,
            "range": "± 57047",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 514323,
            "range": "± 30373",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1052340,
            "range": "± 71576",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2039626,
            "range": "± 164576",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3976012,
            "range": "± 456154",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 143740,
            "range": "± 9541",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18036,
            "range": "± 1988",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2043,
            "range": "± 281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1634948505795,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 135366,
            "range": "± 11710",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1608313,
            "range": "± 51172",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3136788,
            "range": "± 89085",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6117680,
            "range": "± 817572",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12193868,
            "range": "± 224705",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24056222,
            "range": "± 198713",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47911216,
            "range": "± 547857",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 69620,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 127369,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 210845,
            "range": "± 14535",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 381353,
            "range": "± 11507",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 768454,
            "range": "± 43030",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1526434,
            "range": "± 261317",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2906119,
            "range": "± 285652",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 133052,
            "range": "± 8563",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1618720,
            "range": "± 121031",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3160610,
            "range": "± 76132",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6168800,
            "range": "± 147609",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12219328,
            "range": "± 377069",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 24249629,
            "range": "± 966913",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48502310,
            "range": "± 2563985",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 69052,
            "range": "± 2913",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 123422,
            "range": "± 3422",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 211857,
            "range": "± 5294",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 598654,
            "range": "± 14030",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 780385,
            "range": "± 24114",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2238444,
            "range": "± 209634",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4419816,
            "range": "± 730626",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 126666,
            "range": "± 6126",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 8116,
            "range": "± 3086",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 832,
            "range": "± 69",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635034988885,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 170,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 195,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 147452,
            "range": "± 5411",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1896831,
            "range": "± 138973",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3645424,
            "range": "± 39417",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7069945,
            "range": "± 130271",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14072471,
            "range": "± 198578",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27975605,
            "range": "± 459638",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 55852833,
            "range": "± 820315",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 77634,
            "range": "± 3489",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 141660,
            "range": "± 3744",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 230190,
            "range": "± 15857",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 407793,
            "range": "± 15354",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 819811,
            "range": "± 32175",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1570161,
            "range": "± 79504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3015571,
            "range": "± 233019",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 139367,
            "range": "± 7478",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1863973,
            "range": "± 37187",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3685789,
            "range": "± 75079",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7083947,
            "range": "± 112514",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14212384,
            "range": "± 168177",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28075659,
            "range": "± 501404",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56035498,
            "range": "± 781173",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 78926,
            "range": "± 3740",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 143155,
            "range": "± 2431",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 229480,
            "range": "± 6123",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 407573,
            "range": "± 22353",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 834460,
            "range": "± 60263",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1606716,
            "range": "± 85229",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3081832,
            "range": "± 276850",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 94023,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20445,
            "range": "± 1203",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1071,
            "range": "± 281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635121307947,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 163,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 131067,
            "range": "± 5306",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1600880,
            "range": "± 10063",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3118297,
            "range": "± 45374",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6171962,
            "range": "± 44927",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12230326,
            "range": "± 40674",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24128376,
            "range": "± 367763",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 48203451,
            "range": "± 270652",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 64698,
            "range": "± 2466",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 124501,
            "range": "± 1971",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 206451,
            "range": "± 3230",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 376205,
            "range": "± 16187",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 762815,
            "range": "± 29526",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1448584,
            "range": "± 73374",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2789323,
            "range": "± 214189",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 131056,
            "range": "± 2675",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1617902,
            "range": "± 29386",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3141706,
            "range": "± 16486",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6180004,
            "range": "± 36046",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12264916,
            "range": "± 64904",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 24194525,
            "range": "± 184915",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48317316,
            "range": "± 324579",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65091,
            "range": "± 1880",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 124778,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 206951,
            "range": "± 4813",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 376191,
            "range": "± 11816",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 740810,
            "range": "± 22357",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1443785,
            "range": "± 64545",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2779599,
            "range": "± 182417",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 82018,
            "range": "± 1751",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 13137,
            "range": "± 2959",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 976,
            "range": "± 115",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635207773822,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 188,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 217,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 160311,
            "range": "± 12084",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1792183,
            "range": "± 94945",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3739747,
            "range": "± 192079",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7023442,
            "range": "± 329438",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13265283,
            "range": "± 612590",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 26267353,
            "range": "± 1615960",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 51976495,
            "range": "± 2825561",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 102178,
            "range": "± 14722",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 160288,
            "range": "± 14447",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 260678,
            "range": "± 18434",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 483440,
            "range": "± 37270",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 974174,
            "range": "± 111908",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2005678,
            "range": "± 236043",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3612174,
            "range": "± 442388",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 164152,
            "range": "± 26375",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1977739,
            "range": "± 140448",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3458681,
            "range": "± 242491",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6649376,
            "range": "± 481318",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13356837,
            "range": "± 606804",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28152585,
            "range": "± 1671179",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56469418,
            "range": "± 2765480",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 98777,
            "range": "± 8525",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 177946,
            "range": "± 19387",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 292241,
            "range": "± 36566",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 509620,
            "range": "± 68627",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 944523,
            "range": "± 78349",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1746388,
            "range": "± 198254",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3630822,
            "range": "± 400380",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 130926,
            "range": "± 7617",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 24488,
            "range": "± 3829",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1511,
            "range": "± 943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635294174791,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 187,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 202,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 153258,
            "range": "± 22569",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2161251,
            "range": "± 233054",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3838907,
            "range": "± 310628",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7393702,
            "range": "± 390591",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 15001174,
            "range": "± 974955",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28866708,
            "range": "± 1406751",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 59011942,
            "range": "± 3337176",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 78597,
            "range": "± 7922",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 147932,
            "range": "± 19382",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 230343,
            "range": "± 9863",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 433194,
            "range": "± 78458",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 889545,
            "range": "± 175106",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1739693,
            "range": "± 241251",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3235003,
            "range": "± 353964",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 152570,
            "range": "± 15893",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1992566,
            "range": "± 149051",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3838624,
            "range": "± 197986",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7281637,
            "range": "± 432655",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14858614,
            "range": "± 689764",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29351023,
            "range": "± 2911914",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56458711,
            "range": "± 514275",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 82083,
            "range": "± 8749",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 147489,
            "range": "± 17794",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 242387,
            "range": "± 23903",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 433054,
            "range": "± 39945",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 848026,
            "range": "± 73134",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1620700,
            "range": "± 127285",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3031897,
            "range": "± 296748",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 95930,
            "range": "± 6665",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18923,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1351,
            "range": "± 493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635380634414,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 180,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 208,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 183441,
            "range": "± 28976",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1919313,
            "range": "± 93760",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3639059,
            "range": "± 146123",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7066352,
            "range": "± 300924",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13733105,
            "range": "± 527618",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27446185,
            "range": "± 959039",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 54795233,
            "range": "± 2748442",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 115646,
            "range": "± 8823",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 185815,
            "range": "± 92910",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 294775,
            "range": "± 35550",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 496570,
            "range": "± 116048",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1018896,
            "range": "± 108381",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1892315,
            "range": "± 320749",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3535575,
            "range": "± 557831",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 174232,
            "range": "± 25858",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1911610,
            "range": "± 247135",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3565198,
            "range": "± 307235",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6899989,
            "range": "± 430969",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13574383,
            "range": "± 748602",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 26952325,
            "range": "± 1005009",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 53834462,
            "range": "± 2972843",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 112309,
            "range": "± 13259",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 182057,
            "range": "± 45512",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 311358,
            "range": "± 64864",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 509392,
            "range": "± 65462",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1010825,
            "range": "± 86700",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1965311,
            "range": "± 173635",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3618067,
            "range": "± 520736",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 137542,
            "range": "± 45003",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20926,
            "range": "± 3744",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1593,
            "range": "± 417",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "926f8914b0233bf335824f409d30bc23bf4a205b",
          "message": "feat(ws client): support custom headers. (#535)\n\n* feat(ws client): support custom headers.\r\n\r\nClosing #531\r\n\r\n* remove empty line\r\n\r\n* address grumbles: more user-friendly API\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-client/src/client.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* address grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-21T11:46:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/926f8914b0233bf335824f409d30bc23bf4a205b"
        },
        "date": 1635466905682,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 167,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 130164,
            "range": "± 4050",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1587695,
            "range": "± 12610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3082286,
            "range": "± 96662",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6064549,
            "range": "± 146154",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12043965,
            "range": "± 250905",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23778575,
            "range": "± 161843",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47466975,
            "range": "± 253781",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 64479,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 123998,
            "range": "± 3159",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 206058,
            "range": "± 3786",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 365064,
            "range": "± 41768",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 740332,
            "range": "± 134806",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1456242,
            "range": "± 84060",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2728287,
            "range": "± 222796",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 125655,
            "range": "± 5268",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1598065,
            "range": "± 14557",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3085871,
            "range": "± 49957",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6056849,
            "range": "± 33905",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11989014,
            "range": "± 43078",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23686224,
            "range": "± 175806",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 47382973,
            "range": "± 408421",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 64469,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 122529,
            "range": "± 2903",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 204949,
            "range": "± 3578",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 366810,
            "range": "± 6348",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 741096,
            "range": "± 20907",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1479694,
            "range": "± 63644",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2825673,
            "range": "± 219349",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 80809,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 15348,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 918,
            "range": "± 105",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "68154226650808d795d018989ea269c60c47c96d",
          "message": "clients: add support for `webpki and native certificate stores` (#533)\n\n* Update tokio-rustls requirement from 0.22 to 0.23\r\n\r\nUpdates the requirements on [tokio-rustls](https://github.com/tokio-rs/tls) to permit the latest version.\r\n- [Release notes](https://github.com/tokio-rs/tls/releases)\r\n- [Commits](https://github.com/tokio-rs/tls/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tokio-rustls\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* push fixes but requires rustls-native-certs v0.6\r\n\r\n* update native certs to 0.6.0\r\n\r\n* fix clippy warnings\r\n\r\n* remove webpki roots support\r\n\r\n* Revert \"remove webpki roots support\"\r\n\r\nThis reverts commit 1144d567b343049ab7c967d320fc2fe162ba0f7c.\r\n\r\n* support both native cert store and webpki\r\n\r\n* sort deps in Cargo.toml\r\n\r\n* Update ws-client/src/transport.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-29T19:42:13Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/68154226650808d795d018989ea269c60c47c96d"
        },
        "date": 1635553409591,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 173,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 197,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 146603,
            "range": "± 4533",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1981558,
            "range": "± 26533",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3890740,
            "range": "± 73182",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7648604,
            "range": "± 82294",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14998075,
            "range": "± 151037",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29554484,
            "range": "± 391522",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 59682235,
            "range": "± 877530",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 74809,
            "range": "± 3634",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 135760,
            "range": "± 3406",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 224209,
            "range": "± 13165",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 399077,
            "range": "± 16556",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 798248,
            "range": "± 26065",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1554848,
            "range": "± 70255",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3033652,
            "range": "± 392381",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 145727,
            "range": "± 17814",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1999093,
            "range": "± 76529",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3869039,
            "range": "± 44172",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7610153,
            "range": "± 66003",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 15129219,
            "range": "± 215282",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29654067,
            "range": "± 369767",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 59156613,
            "range": "± 702086",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 76294,
            "range": "± 1644",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 140709,
            "range": "± 3278",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 226523,
            "range": "± 3865",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 405341,
            "range": "± 14747",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 805865,
            "range": "± 34062",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1569944,
            "range": "± 72776",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3003392,
            "range": "± 210696",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 109270,
            "range": "± 15416",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20300,
            "range": "± 2254",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1060,
            "range": "± 141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "68154226650808d795d018989ea269c60c47c96d",
          "message": "clients: add support for `webpki and native certificate stores` (#533)\n\n* Update tokio-rustls requirement from 0.22 to 0.23\r\n\r\nUpdates the requirements on [tokio-rustls](https://github.com/tokio-rs/tls) to permit the latest version.\r\n- [Release notes](https://github.com/tokio-rs/tls/releases)\r\n- [Commits](https://github.com/tokio-rs/tls/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tokio-rustls\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* push fixes but requires rustls-native-certs v0.6\r\n\r\n* update native certs to 0.6.0\r\n\r\n* fix clippy warnings\r\n\r\n* remove webpki roots support\r\n\r\n* Revert \"remove webpki roots support\"\r\n\r\nThis reverts commit 1144d567b343049ab7c967d320fc2fe162ba0f7c.\r\n\r\n* support both native cert store and webpki\r\n\r\n* sort deps in Cargo.toml\r\n\r\n* Update ws-client/src/transport.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-29T19:42:13Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/68154226650808d795d018989ea269c60c47c96d"
        },
        "date": 1635639754078,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 178,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 135036,
            "range": "± 6242",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1605231,
            "range": "± 25459",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3136342,
            "range": "± 22208",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6156585,
            "range": "± 22187",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12220375,
            "range": "± 71202",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24145569,
            "range": "± 218812",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 48128459,
            "range": "± 303031",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 68260,
            "range": "± 4560",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 130011,
            "range": "± 14073",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 214069,
            "range": "± 4145",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 383585,
            "range": "± 29123",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 790721,
            "range": "± 143407",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1546960,
            "range": "± 111494",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2992320,
            "range": "± 263052",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 136674,
            "range": "± 15073",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1619862,
            "range": "± 12552",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3143081,
            "range": "± 24214",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6194676,
            "range": "± 62863",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12205604,
            "range": "± 95675",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 24106349,
            "range": "± 198957",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48134007,
            "range": "± 301854",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 67164,
            "range": "± 2149",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 128365,
            "range": "± 2533",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 211232,
            "range": "± 5251",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 380458,
            "range": "± 7261",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 770905,
            "range": "± 30137",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1513865,
            "range": "± 65720",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2924600,
            "range": "± 233386",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 80102,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 12471,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 964,
            "range": "± 135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "68154226650808d795d018989ea269c60c47c96d",
          "message": "clients: add support for `webpki and native certificate stores` (#533)\n\n* Update tokio-rustls requirement from 0.22 to 0.23\r\n\r\nUpdates the requirements on [tokio-rustls](https://github.com/tokio-rs/tls) to permit the latest version.\r\n- [Release notes](https://github.com/tokio-rs/tls/releases)\r\n- [Commits](https://github.com/tokio-rs/tls/commits)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tokio-rustls\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* push fixes but requires rustls-native-certs v0.6\r\n\r\n* update native certs to 0.6.0\r\n\r\n* fix clippy warnings\r\n\r\n* remove webpki roots support\r\n\r\n* Revert \"remove webpki roots support\"\r\n\r\nThis reverts commit 1144d567b343049ab7c967d320fc2fe162ba0f7c.\r\n\r\n* support both native cert store and webpki\r\n\r\n* sort deps in Cargo.toml\r\n\r\n* Update ws-client/src/transport.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-10-29T19:42:13Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/68154226650808d795d018989ea269c60c47c96d"
        },
        "date": 1635726223556,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 173,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 193,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 144956,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1819437,
            "range": "± 36836",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3514170,
            "range": "± 63653",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6985949,
            "range": "± 119699",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13801840,
            "range": "± 356508",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27238797,
            "range": "± 405544",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 54779874,
            "range": "± 1823891",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 74803,
            "range": "± 2329",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 134757,
            "range": "± 4570",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 225595,
            "range": "± 5136",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 390818,
            "range": "± 42793",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 783953,
            "range": "± 44852",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1507387,
            "range": "± 74000",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2927009,
            "range": "± 223062",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 144237,
            "range": "± 6013",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1834309,
            "range": "± 29993",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3563315,
            "range": "± 64651",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7048937,
            "range": "± 73616",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13757960,
            "range": "± 160540",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27706673,
            "range": "± 388367",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 55500002,
            "range": "± 684280",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 75095,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 135095,
            "range": "± 4402",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 221475,
            "range": "± 5068",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 385957,
            "range": "± 30213",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 786641,
            "range": "± 27477",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1544345,
            "range": "± 71324",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2937119,
            "range": "± 245117",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 89082,
            "range": "± 3138",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18566,
            "range": "± 2663",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1000,
            "range": "± 127",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "092081a0a2b8904c6ebd2cd99e16c7bc13ffc3ae",
          "message": "fix(ws server): `batch` wait until all methods has been executed. (#542)\n\n* reproduce Kian's issue\r\n\r\n* fix ws server wait until batches has completed\r\n\r\n* fix nit\r\n\r\n* clippify\r\n\r\n* enable benches for ws batch requests\r\n\r\n* use stream instead of futures::join_all\r\n\r\n* clippify\r\n\r\n* address grumbles: better assert",
          "timestamp": "2021-11-01T11:20:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/092081a0a2b8904c6ebd2cd99e16c7bc13ffc3ae"
        },
        "date": 1635812733628,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 182,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 205,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 145867,
            "range": "± 14185",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1966874,
            "range": "± 160869",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3652749,
            "range": "± 179227",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7391556,
            "range": "± 663458",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14256088,
            "range": "± 549528",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29138484,
            "range": "± 2000156",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56805650,
            "range": "± 839941",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 78740,
            "range": "± 6725",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 144235,
            "range": "± 10018",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 240170,
            "range": "± 34767",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 407588,
            "range": "± 62531",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 860118,
            "range": "± 201096",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1626790,
            "range": "± 178385",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3071195,
            "range": "± 406296",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 149267,
            "range": "± 18020",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1931552,
            "range": "± 156910",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3683794,
            "range": "± 129336",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7226623,
            "range": "± 168209",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14255093,
            "range": "± 138462",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28049798,
            "range": "± 623071",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56002455,
            "range": "± 1055653",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 79212,
            "range": "± 6012",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 144488,
            "range": "± 50137",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 236274,
            "range": "± 34401",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 407195,
            "range": "± 62106",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 794959,
            "range": "± 30404",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1618846,
            "range": "± 182272",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2997684,
            "range": "± 245151",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 94838,
            "range": "± 7346",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20174,
            "range": "± 2670",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1325,
            "range": "± 291",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "092081a0a2b8904c6ebd2cd99e16c7bc13ffc3ae",
          "message": "fix(ws server): `batch` wait until all methods has been executed. (#542)\n\n* reproduce Kian's issue\r\n\r\n* fix ws server wait until batches has completed\r\n\r\n* fix nit\r\n\r\n* clippify\r\n\r\n* enable benches for ws batch requests\r\n\r\n* use stream instead of futures::join_all\r\n\r\n* clippify\r\n\r\n* address grumbles: better assert",
          "timestamp": "2021-11-01T11:20:41Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/092081a0a2b8904c6ebd2cd99e16c7bc13ffc3ae"
        },
        "date": 1635899220490,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 170,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 131920,
            "range": "± 2902",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1570270,
            "range": "± 25117",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3035186,
            "range": "± 28942",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5985988,
            "range": "± 77170",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11868841,
            "range": "± 159860",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23602166,
            "range": "± 240336",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47198738,
            "range": "± 282818",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 64821,
            "range": "± 2890",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 127902,
            "range": "± 7560",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 215081,
            "range": "± 3652",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 376379,
            "range": "± 13739",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 799999,
            "range": "± 24243",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1572973,
            "range": "± 151062",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2963295,
            "range": "± 605507",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 130526,
            "range": "± 3939",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1570145,
            "range": "± 23793",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3017147,
            "range": "± 26410",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5907490,
            "range": "± 91884",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11853297,
            "range": "± 171309",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23643331,
            "range": "± 210915",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 47289904,
            "range": "± 279866",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 64354,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 128560,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 214220,
            "range": "± 3632",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 371312,
            "range": "± 9410",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 777157,
            "range": "± 20454",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1531171,
            "range": "± 67177",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2935777,
            "range": "± 177196",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 83147,
            "range": "± 1984",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 15629,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 895,
            "range": "± 208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "¯\\_(ツ)_/¯",
            "username": "DefinitelyNotHilbert",
            "email": "92186471+DefinitelyNotHilbert@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3337b107bf29bef6067164c20c6a0b0b5bdc75",
          "message": "Proc mac support map param (#544)\n\n* feat(proc_macro): add support for map arguments\r\n\r\n* feat(proc_macro): formatting\r\n\r\n* feat(proc_macro): fix issues with Into trait\r\n\r\n* feat(proc_macro): param_format for methods\r\n\r\n* feat(proc_macro): improve param_format checking\r\n\r\n- Addressed @niklasad1's suggestion to use an Option instead of just\r\ndefaulting to \"array\".\r\n\r\n* feat(proc_macro): apply suggestions, add test case\r\n\r\n- Use enum for param format.\r\n- Extract parsing logic into separate function.\r\n- Add ui test.\r\n\r\n* feat(proc_macro): run cargo fmt\r\n\r\n* feat(proc_macro): address suggestions\r\n\r\n* feat(proc_macro): document param_kind argument\r\n\r\n* feat(proc_macro):  consistent spacing\r\n\r\nApply @maciejhirsz formatting suggestion.\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>\r\n\r\n* feat(proc_macro): apply suggestions\r\n\r\n- make parameter encoding DRY\r\n- remove strings from param_kind\r\n- return result from parse_param_kind\r\n\r\n* feat(proc_macro): formatting\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>",
          "timestamp": "2021-11-03T14:26:17Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/ff3337b107bf29bef6067164c20c6a0b0b5bdc75"
        },
        "date": 1635985594878,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 184,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 219,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 181606,
            "range": "± 22619",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1904024,
            "range": "± 145383",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3586908,
            "range": "± 242913",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6964183,
            "range": "± 372107",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13615817,
            "range": "± 833629",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27176059,
            "range": "± 1475992",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 54061318,
            "range": "± 2471320",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 104531,
            "range": "± 12132",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 184985,
            "range": "± 21673",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 296896,
            "range": "± 41797",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 522649,
            "range": "± 60880",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1066536,
            "range": "± 127768",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2005695,
            "range": "± 279731",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3838792,
            "range": "± 501870",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 179859,
            "range": "± 13369",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1929223,
            "range": "± 130525",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3629489,
            "range": "± 218707",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6946809,
            "range": "± 441843",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13840940,
            "range": "± 702753",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27391134,
            "range": "± 1711999",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 53765165,
            "range": "± 3659926",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 104797,
            "range": "± 22944",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 184078,
            "range": "± 40275",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 302387,
            "range": "± 64331",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 522098,
            "range": "± 69947",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1072447,
            "range": "± 108728",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2130123,
            "range": "± 221345",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3894367,
            "range": "± 538603",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 125493,
            "range": "± 65995",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 2905,
            "range": "± 7216",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1592,
            "range": "± 606",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "¯\\_(ツ)_/¯",
            "username": "DefinitelyNotHilbert",
            "email": "92186471+DefinitelyNotHilbert@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3337b107bf29bef6067164c20c6a0b0b5bdc75",
          "message": "Proc mac support map param (#544)\n\n* feat(proc_macro): add support for map arguments\r\n\r\n* feat(proc_macro): formatting\r\n\r\n* feat(proc_macro): fix issues with Into trait\r\n\r\n* feat(proc_macro): param_format for methods\r\n\r\n* feat(proc_macro): improve param_format checking\r\n\r\n- Addressed @niklasad1's suggestion to use an Option instead of just\r\ndefaulting to \"array\".\r\n\r\n* feat(proc_macro): apply suggestions, add test case\r\n\r\n- Use enum for param format.\r\n- Extract parsing logic into separate function.\r\n- Add ui test.\r\n\r\n* feat(proc_macro): run cargo fmt\r\n\r\n* feat(proc_macro): address suggestions\r\n\r\n* feat(proc_macro): document param_kind argument\r\n\r\n* feat(proc_macro):  consistent spacing\r\n\r\nApply @maciejhirsz formatting suggestion.\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>\r\n\r\n* feat(proc_macro): apply suggestions\r\n\r\n- make parameter encoding DRY\r\n- remove strings from param_kind\r\n- return result from parse_param_kind\r\n\r\n* feat(proc_macro): formatting\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>",
          "timestamp": "2021-11-03T14:26:17Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/ff3337b107bf29bef6067164c20c6a0b0b5bdc75"
        },
        "date": 1636071894773,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 165,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 200,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 171264,
            "range": "± 19400",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1769807,
            "range": "± 79053",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3377187,
            "range": "± 161489",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6451388,
            "range": "± 286928",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12916114,
            "range": "± 561096",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 25423820,
            "range": "± 997934",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 51315335,
            "range": "± 2510539",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 101837,
            "range": "± 13285",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 178945,
            "range": "± 18657",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 282349,
            "range": "± 25294",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 490372,
            "range": "± 24573",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1010463,
            "range": "± 102473",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1953050,
            "range": "± 196257",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3656525,
            "range": "± 369564",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 174313,
            "range": "± 11422",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1795556,
            "range": "± 108701",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3356530,
            "range": "± 250451",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6453307,
            "range": "± 275572",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12651035,
            "range": "± 409515",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 25508598,
            "range": "± 969130",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 51217113,
            "range": "± 2367427",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 100462,
            "range": "± 7074",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 179681,
            "range": "± 14352",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 288099,
            "range": "± 19017",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 489684,
            "range": "± 26985",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 969281,
            "range": "± 52892",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1886736,
            "range": "± 153318",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3522101,
            "range": "± 268186",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 132109,
            "range": "± 11435",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 21851,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2042,
            "range": "± 445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "32d29259acb644591592aaba0ded18649342d078",
          "message": "clients: request ID as RAII guard (#543)\n\n* request ID as RAII guard\r\n\r\n* clippify\r\n\r\n* fmt\r\n\r\n* address grumbles: naming\r\n\r\n`RequestIdGuard` -> `RequestIdManager`\r\n`RequestId` -> `RequestIdGuard`",
          "timestamp": "2021-11-05T16:15:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/32d29259acb644591592aaba0ded18649342d078"
        },
        "date": 1636158300235,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 171,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 186,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 143889,
            "range": "± 7910",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1909326,
            "range": "± 132817",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3536297,
            "range": "± 133067",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7278991,
            "range": "± 443976",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14342682,
            "range": "± 293799",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28308667,
            "range": "± 360176",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56315513,
            "range": "± 785502",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 76460,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 143397,
            "range": "± 3566",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 230763,
            "range": "± 5218",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 392139,
            "range": "± 25782",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 829484,
            "range": "± 29645",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1615756,
            "range": "± 105788",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3012918,
            "range": "± 233442",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 147077,
            "range": "± 6991",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1858045,
            "range": "± 56301",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3609671,
            "range": "± 111541",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7047858,
            "range": "± 218422",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13820362,
            "range": "± 339309",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27213222,
            "range": "± 589755",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 55424206,
            "range": "± 2423261",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 75654,
            "range": "± 2195",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 140661,
            "range": "± 5420",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 233808,
            "range": "± 10432",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 403114,
            "range": "± 13948",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 839635,
            "range": "± 27163",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1599744,
            "range": "± 77675",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3057410,
            "range": "± 228703",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 91433,
            "range": "± 4713",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 17583,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 868,
            "range": "± 154",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "32d29259acb644591592aaba0ded18649342d078",
          "message": "clients: request ID as RAII guard (#543)\n\n* request ID as RAII guard\r\n\r\n* clippify\r\n\r\n* fmt\r\n\r\n* address grumbles: naming\r\n\r\n`RequestIdGuard` -> `RequestIdManager`\r\n`RequestId` -> `RequestIdGuard`",
          "timestamp": "2021-11-05T16:15:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/32d29259acb644591592aaba0ded18649342d078"
        },
        "date": 1636244815306,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 179,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 212,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 177232,
            "range": "± 13607",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1895234,
            "range": "± 70193",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3538382,
            "range": "± 144681",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6861137,
            "range": "± 295824",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13488870,
            "range": "± 245616",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 26754043,
            "range": "± 875575",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 53653138,
            "range": "± 1012472",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 103460,
            "range": "± 17520",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 178606,
            "range": "± 15089",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 295356,
            "range": "± 54654",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 508318,
            "range": "± 104733",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1027107,
            "range": "± 76484",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2041546,
            "range": "± 154261",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3795515,
            "range": "± 582567",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 176117,
            "range": "± 17953",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1904831,
            "range": "± 140607",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3575168,
            "range": "± 197519",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6913312,
            "range": "± 342904",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13595435,
            "range": "± 363346",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 26717293,
            "range": "± 498452",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 53661687,
            "range": "± 1257429",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 101821,
            "range": "± 6331",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 177148,
            "range": "± 31419",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 285070,
            "range": "± 11766",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 507042,
            "range": "± 43029",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1040881,
            "range": "± 57011",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1989312,
            "range": "± 130070",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3639449,
            "range": "± 340203",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 133908,
            "range": "± 28561",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 22972,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1327,
            "range": "± 270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "32d29259acb644591592aaba0ded18649342d078",
          "message": "clients: request ID as RAII guard (#543)\n\n* request ID as RAII guard\r\n\r\n* clippify\r\n\r\n* fmt\r\n\r\n* address grumbles: naming\r\n\r\n`RequestIdGuard` -> `RequestIdManager`\r\n`RequestId` -> `RequestIdGuard`",
          "timestamp": "2021-11-05T16:15:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/32d29259acb644591592aaba0ded18649342d078"
        },
        "date": 1636331075215,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 150,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 167,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 132678,
            "range": "± 16216",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1617215,
            "range": "± 60757",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3107844,
            "range": "± 73762",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6094400,
            "range": "± 60762",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12187977,
            "range": "± 821519",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24204084,
            "range": "± 187249",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 48193248,
            "range": "± 585979",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 67637,
            "range": "± 2797",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 134934,
            "range": "± 25749",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 219560,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 394328,
            "range": "± 31836",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 813760,
            "range": "± 54510",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1603420,
            "range": "± 82222",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2974816,
            "range": "± 268460",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 133420,
            "range": "± 3190",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1600899,
            "range": "± 11932",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3076926,
            "range": "± 128057",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6017135,
            "range": "± 61644",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11927876,
            "range": "± 142381",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23832984,
            "range": "± 268133",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 47626451,
            "range": "± 514498",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 67133,
            "range": "± 2885",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 132027,
            "range": "± 2215",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 221045,
            "range": "± 3862",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 397448,
            "range": "± 11241",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 827395,
            "range": "± 53981",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1646666,
            "range": "± 323500",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3067498,
            "range": "± 304999",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 86333,
            "range": "± 3357",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 18076,
            "range": "± 2373",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 828,
            "range": "± 140",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Sosnin",
            "username": "slumber",
            "email": "48099298+slumber@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "afcf411d9bbf1fce95caacab8b5e66857880064b",
          "message": "Allow awaiting on server handles (#550)\n\n* Implement Future for server handles\r\n\r\n* Explicitly assert timeout errors in tests",
          "timestamp": "2021-11-08T15:57:06Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/afcf411d9bbf1fce95caacab8b5e66857880064b"
        },
        "date": 1636417570143,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 194,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 216,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 184547,
            "range": "± 11804",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1940627,
            "range": "± 134446",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3809204,
            "range": "± 153242",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7310849,
            "range": "± 225356",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14123516,
            "range": "± 560611",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27867133,
            "range": "± 1085440",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56159368,
            "range": "± 1485867",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 111461,
            "range": "± 7466",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 186249,
            "range": "± 14551",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 293161,
            "range": "± 61807",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 515389,
            "range": "± 32831",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1078152,
            "range": "± 56893",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2074089,
            "range": "± 243277",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3864221,
            "range": "± 451240",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 182153,
            "range": "± 13207",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1951266,
            "range": "± 73844",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3768924,
            "range": "± 264308",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7321215,
            "range": "± 332001",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14415786,
            "range": "± 474091",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28736184,
            "range": "± 1053579",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 56533180,
            "range": "± 2395245",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 111065,
            "range": "± 12474",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 187175,
            "range": "± 11003",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 302574,
            "range": "± 20567",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 518279,
            "range": "± 35467",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1039784,
            "range": "± 84783",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2040232,
            "range": "± 125316",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3805664,
            "range": "± 340665",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 135372,
            "range": "± 40025",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 24757,
            "range": "± 3792",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1693,
            "range": "± 807",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6dac20da11305f59707280fa5acf8b46de014316",
          "message": "ws server: respect max limit for received messages (#537)\n\n* ws server: don't kill connection max limit exceeds\r\n\r\n* Update ws-server/src/server.rs\r\n\r\n* actually use max size in soketto\r\n\r\n* rewrite me\r\n\r\n* improve logs\r\n\r\n* use soketto fix\r\n\r\n* rewrite me\r\n\r\n* fix nit\r\n\r\n* revert unintentional change\r\n\r\n* use soketto 0.7.1\r\n\r\n* fix logger\r\n\r\n* Update ws-server/src/server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-server/src/server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-server/src/server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-server/src/server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update ws-server/src/server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* fix build\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-09T14:57:30Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/6dac20da11305f59707280fa5acf8b46de014316"
        },
        "date": 1636504012299,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 202,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 238,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 178762,
            "range": "± 16735",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2130901,
            "range": "± 110979",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 4032871,
            "range": "± 274846",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7481547,
            "range": "± 398547",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14883151,
            "range": "± 802760",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29961876,
            "range": "± 1123083",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 58971529,
            "range": "± 2660537",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 118061,
            "range": "± 7920",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 197822,
            "range": "± 29318",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 318105,
            "range": "± 61507",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 576675,
            "range": "± 47570",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1167214,
            "range": "± 160290",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2246883,
            "range": "± 513817",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4159477,
            "range": "± 408294",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 184322,
            "range": "± 16248",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2104293,
            "range": "± 113261",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3942484,
            "range": "± 180725",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7837974,
            "range": "± 515302",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 15083717,
            "range": "± 587031",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29976130,
            "range": "± 1103995",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 60733020,
            "range": "± 2494301",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 116695,
            "range": "± 12088",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 201311,
            "range": "± 20866",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 323929,
            "range": "± 53511",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 544132,
            "range": "± 48954",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1113898,
            "range": "± 96084",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2164554,
            "range": "± 204194",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4156819,
            "range": "± 489589",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 141836,
            "range": "± 11958",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 26519,
            "range": "± 2451",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1693,
            "range": "± 699",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f9b99ad6f29d9ed3e4e7cbd96db0ade3a50e135f",
          "message": "Re-export tracing for macros (#555)",
          "timestamp": "2021-11-10T13:55:28Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/f9b99ad6f29d9ed3e4e7cbd96db0ade3a50e135f"
        },
        "date": 1636590399321,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 202,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 234,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 189251,
            "range": "± 32684",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2124766,
            "range": "± 116765",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 4032132,
            "range": "± 205895",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7690911,
            "range": "± 307949",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 15188763,
            "range": "± 549439",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29815761,
            "range": "± 1898552",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 59823669,
            "range": "± 2667480",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 112329,
            "range": "± 15059",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 198418,
            "range": "± 23077",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 318335,
            "range": "± 72394",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 555734,
            "range": "± 83598",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1115173,
            "range": "± 113615",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2282141,
            "range": "± 2100762",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4462782,
            "range": "± 603773",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 191091,
            "range": "± 19331",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2163838,
            "range": "± 177404",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 4023383,
            "range": "± 267221",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7908202,
            "range": "± 458333",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 15254920,
            "range": "± 897909",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29975356,
            "range": "± 1466757",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 60228617,
            "range": "± 3665142",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 111353,
            "range": "± 14071",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 196874,
            "range": "± 28647",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 317606,
            "range": "± 68371",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 556184,
            "range": "± 97556",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1134043,
            "range": "± 116767",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2127986,
            "range": "± 170272",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4015726,
            "range": "± 438121",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 142797,
            "range": "± 20497",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 25482,
            "range": "± 2757",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1868,
            "range": "± 711",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1636676781639,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 197,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 220,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 183653,
            "range": "± 15937",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1927070,
            "range": "± 94769",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3735045,
            "range": "± 128259",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7278758,
            "range": "± 359796",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13905927,
            "range": "± 793727",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27720469,
            "range": "± 1156657",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56987975,
            "range": "± 2133732",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 113306,
            "range": "± 10923",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 190527,
            "range": "± 9885",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 315245,
            "range": "± 28157",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 581610,
            "range": "± 59103",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1110904,
            "range": "± 84056",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2096386,
            "range": "± 156507",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3985912,
            "range": "± 422793",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 183433,
            "range": "± 13369",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2008194,
            "range": "± 98480",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3820761,
            "range": "± 188317",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7279250,
            "range": "± 299681",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14307750,
            "range": "± 693434",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28364398,
            "range": "± 1227807",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 57355601,
            "range": "± 2187973",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 111624,
            "range": "± 8280",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 188889,
            "range": "± 13612",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 311501,
            "range": "± 20581",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 540031,
            "range": "± 27855",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1086632,
            "range": "± 46185",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2139514,
            "range": "± 156911",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4158262,
            "range": "± 460091",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 136930,
            "range": "± 7847",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 25423,
            "range": "± 3065",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1103,
            "range": "± 363",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1636763152065,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 190,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 217,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 173288,
            "range": "± 23110",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1985220,
            "range": "± 164453",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3775018,
            "range": "± 202522",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7261147,
            "range": "± 445903",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14110660,
            "range": "± 552737",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27774989,
            "range": "± 1045695",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56043636,
            "range": "± 2314876",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 107331,
            "range": "± 8183",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 190334,
            "range": "± 15164",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 299290,
            "range": "± 33955",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 532239,
            "range": "± 80710",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1065589,
            "range": "± 86538",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2087740,
            "range": "± 212442",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3981089,
            "range": "± 666362",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 164380,
            "range": "± 18417",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1990062,
            "range": "± 270315",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3747447,
            "range": "± 185029",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7163857,
            "range": "± 353197",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14197195,
            "range": "± 666350",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28278738,
            "range": "± 1393976",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 57040241,
            "range": "± 3118745",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 106929,
            "range": "± 76643",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 185494,
            "range": "± 39668",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 297721,
            "range": "± 14348",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 527688,
            "range": "± 62207",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1043039,
            "range": "± 70054",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2049029,
            "range": "± 224696",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3712369,
            "range": "± 373919",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 137520,
            "range": "± 9100",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 24762,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1474,
            "range": "± 553",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1636849566881,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 180,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 212,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 183923,
            "range": "± 15990",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2009013,
            "range": "± 109984",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3775877,
            "range": "± 142973",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7286691,
            "range": "± 370174",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14715997,
            "range": "± 671857",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28624445,
            "range": "± 1320413",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 58642191,
            "range": "± 2812751",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 113566,
            "range": "± 9273",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 203675,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 333268,
            "range": "± 28104",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 576143,
            "range": "± 101228",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1163284,
            "range": "± 162082",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2266635,
            "range": "± 200378",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4026936,
            "range": "± 457679",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 185125,
            "range": "± 13267",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1987141,
            "range": "± 142887",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3707330,
            "range": "± 190925",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7329083,
            "range": "± 390782",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14338260,
            "range": "± 513643",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 28393005,
            "range": "± 1311445",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 55944504,
            "range": "± 1965250",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 110372,
            "range": "± 9509",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 196501,
            "range": "± 15022",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 326914,
            "range": "± 93326",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 565611,
            "range": "± 58030",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1128613,
            "range": "± 52609",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2175060,
            "range": "± 162663",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4092407,
            "range": "± 486390",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 140010,
            "range": "± 7351",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 24784,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1665,
            "range": "± 1069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1636936030683,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 204,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 233,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 200370,
            "range": "± 11544",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2143657,
            "range": "± 95915",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 4055660,
            "range": "± 175118",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7805634,
            "range": "± 283554",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 15339898,
            "range": "± 457602",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 30686773,
            "range": "± 908983",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 60690467,
            "range": "± 1623781",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 123994,
            "range": "± 18983",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 213552,
            "range": "± 17065",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 338092,
            "range": "± 26598",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 612835,
            "range": "± 56153",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1249596,
            "range": "± 184194",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2388042,
            "range": "± 181614",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4369278,
            "range": "± 508227",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 202592,
            "range": "± 11481",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2155762,
            "range": "± 92862",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 4070009,
            "range": "± 181578",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7760866,
            "range": "± 300291",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 15498640,
            "range": "± 908076",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 30485908,
            "range": "± 1035212",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 61399211,
            "range": "± 1822791",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 127560,
            "range": "± 7774",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 206549,
            "range": "± 24925",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 342130,
            "range": "± 44919",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 592528,
            "range": "± 45473",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1209416,
            "range": "± 98486",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2332008,
            "range": "± 185140",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4369312,
            "range": "± 460398",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 148233,
            "range": "± 13570",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 27242,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1964,
            "range": "± 1206",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1637022395535,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 198,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 228,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 192412,
            "range": "± 98443",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2039577,
            "range": "± 183239",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3860398,
            "range": "± 201414",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7609508,
            "range": "± 380249",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14763485,
            "range": "± 1034303",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 29811848,
            "range": "± 2064161",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 58966892,
            "range": "± 2890744",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 113256,
            "range": "± 23660",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 200132,
            "range": "± 18150",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 319274,
            "range": "± 79668",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 543212,
            "range": "± 59442",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1107195,
            "range": "± 91617",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2160985,
            "range": "± 194911",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4076774,
            "range": "± 479785",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 194725,
            "range": "± 15478",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2055229,
            "range": "± 217216",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3797572,
            "range": "± 223823",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7618696,
            "range": "± 513610",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14838242,
            "range": "± 885032",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29007955,
            "range": "± 1506192",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 58272458,
            "range": "± 2974273",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 112112,
            "range": "± 19614",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 194475,
            "range": "± 31892",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 306684,
            "range": "± 38946",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 539160,
            "range": "± 52636",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1100395,
            "range": "± 133648",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2170384,
            "range": "± 224026",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4030234,
            "range": "± 503850",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 146746,
            "range": "± 16643",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 26230,
            "range": "± 4243",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1718,
            "range": "± 1256",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Maciej Hirsz",
            "username": "maciejhirsz",
            "email": "1096222+maciejhirsz@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7",
          "message": "Periodically wake `DriverSelect` so we can poll whether or not `stop` had been called. (#556)\n\n* Fix some clippy issues\r\n\r\n* Add an interval to periodically wake the SelectDriver Waker\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Naming grumbles\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-11T15:53:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/aacf7c0ecdb71da345e7c5cb0283f5cb5a040bd7"
        },
        "date": 1637108756488,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 181,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 204,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 184630,
            "range": "± 11368",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2095128,
            "range": "± 223802",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3793270,
            "range": "± 232340",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7363401,
            "range": "± 332904",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14076687,
            "range": "± 710159",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27631186,
            "range": "± 1311612",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 56982499,
            "range": "± 3135455",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 112337,
            "range": "± 7631",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 187670,
            "range": "± 22991",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 303331,
            "range": "± 20313",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 530657,
            "range": "± 62656",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1085531,
            "range": "± 70060",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2157597,
            "range": "± 151773",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4000300,
            "range": "± 392388",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 180003,
            "range": "± 18763",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1949989,
            "range": "± 121418",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3685652,
            "range": "± 178078",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7078891,
            "range": "± 348500",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13930364,
            "range": "± 519505",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27678028,
            "range": "± 1245101",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 55393057,
            "range": "± 2614586",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 111566,
            "range": "± 7618",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 192901,
            "range": "± 16745",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 303202,
            "range": "± 41509",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 541821,
            "range": "± 33993",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1064585,
            "range": "± 96102",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2065995,
            "range": "± 179160",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3900368,
            "range": "± 419100",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 138388,
            "range": "± 13154",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 23662,
            "range": "± 3611",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1710,
            "range": "± 660",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David",
            "username": "dvdplm",
            "email": "dvdplm@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6af6db24b9f92e7f9ce1232d4f667f7d36db583a",
          "message": "Implement SubscriptionClient for HttpClient (#563)\n\nCloses https://github.com/paritytech/jsonrpsee/issues/448\r\n\r\nThis PR adds an implementation for `SubscriptionClient` to the `HttpClient` struct, which makes it possible for http clients to use macro-generated RPC servers. If an http client tries to set up a subscription it will fail with a `HttpNotImplemented` error.",
          "timestamp": "2021-11-17T13:53:27Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/6af6db24b9f92e7f9ce1232d4f667f7d36db583a"
        },
        "date": 1637195251129,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 195,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 220,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 187886,
            "range": "± 15438",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1995232,
            "range": "± 190948",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3668715,
            "range": "± 280351",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7207602,
            "range": "± 478169",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13990917,
            "range": "± 475301",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 27810268,
            "range": "± 1096429",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 55913815,
            "range": "± 2549271",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 122871,
            "range": "± 15822",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 204941,
            "range": "± 47347",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 330015,
            "range": "± 80786",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 581727,
            "range": "± 133620",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1144735,
            "range": "± 98839",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2194517,
            "range": "± 267125",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4412401,
            "range": "± 831003",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 189164,
            "range": "± 14804",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1970072,
            "range": "± 150372",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3679862,
            "range": "± 167255",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7121902,
            "range": "± 260735",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 13955204,
            "range": "± 434363",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 27622134,
            "range": "± 1237400",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 55811419,
            "range": "± 1904312",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 118803,
            "range": "± 15909",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 201239,
            "range": "± 19488",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 325287,
            "range": "± 42773",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 546574,
            "range": "± 33359",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1120714,
            "range": "± 117616",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2178586,
            "range": "± 165392",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4458554,
            "range": "± 548830",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 154283,
            "range": "± 35104",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 25115,
            "range": "± 3957",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1455,
            "range": "± 362",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0e46b5cea9cd632dc438a005c77bbaa5c2af562f",
          "message": "[rpc module]: improve `TestSubscription` to return `None` when closed (#566)\n\n* fix(TestSubscription): use None for closed.\r\n\r\n* add test for subscription close",
          "timestamp": "2021-11-18T11:03:57Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/0e46b5cea9cd632dc438a005c77bbaa5c2af562f"
        },
        "date": 1637281595035,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 191,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 218,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 188271,
            "range": "± 16792",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 2089520,
            "range": "± 153737",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3878102,
            "range": "± 184792",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 7467819,
            "range": "± 284020",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 14787906,
            "range": "± 842389",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 28877216,
            "range": "± 1066965",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 58591985,
            "range": "± 3030260",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 119205,
            "range": "± 10182",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 201465,
            "range": "± 12366",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 327575,
            "range": "± 58695",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 563309,
            "range": "± 33019",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1128317,
            "range": "± 156572",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2172089,
            "range": "± 198151",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4193193,
            "range": "± 503915",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 189252,
            "range": "± 10840",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 2019621,
            "range": "± 132925",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3867754,
            "range": "± 212481",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 7616332,
            "range": "± 352382",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 14868848,
            "range": "± 547442",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 29145874,
            "range": "± 1070076",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 57190019,
            "range": "± 2797455",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 122873,
            "range": "± 8918",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 206729,
            "range": "± 39787",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 329458,
            "range": "± 56476",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 568242,
            "range": "± 65115",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1157446,
            "range": "± 75012",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2156394,
            "range": "± 170268",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4088361,
            "range": "± 344284",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 156573,
            "range": "± 30390",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 21093,
            "range": "± 3987",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1779,
            "range": "± 1187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c6fd4bfee44aec6ebb10dae0fb2779562ecf125",
          "message": "feat: make it possible to override `method name` in subscriptions (#568)\n\n* feat: override `method` subscription notif\r\n\r\n* Arrow syntax for overwrites (#569)\r\n\r\n* check that unique notifs are used\r\n\r\n* check that custom sub name is unique\r\n\r\n* cargo fmt\r\n\r\n* address grumbles\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\n* commit added tests\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* grumbles\r\n\r\n* fix long lines\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* more grumbles\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-19T18:30:47Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/9c6fd4bfee44aec6ebb10dae0fb2779562ecf125"
        },
        "date": 1637367817828,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 134,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 159,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 135257,
            "range": "± 12587",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1692832,
            "range": "± 106717",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3304507,
            "range": "± 27286",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6416314,
            "range": "± 316240",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12878032,
            "range": "± 646541",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23101203,
            "range": "± 678737",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 45556645,
            "range": "± 358918",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 68759,
            "range": "± 3297",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 129345,
            "range": "± 5936",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 219782,
            "range": "± 5014",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 383303,
            "range": "± 16587",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 793115,
            "range": "± 28048",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1599423,
            "range": "± 74841",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2975907,
            "range": "± 177904",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 130509,
            "range": "± 11880",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1690689,
            "range": "± 79594",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3295327,
            "range": "± 160539",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6519235,
            "range": "± 112514",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11535964,
            "range": "± 182342",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 22723519,
            "range": "± 233240",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 45428849,
            "range": "± 326950",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 63729,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 130565,
            "range": "± 3540",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 217687,
            "range": "± 3118",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 388627,
            "range": "± 14514",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 822630,
            "range": "± 26801",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1569031,
            "range": "± 57213",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2952099,
            "range": "± 243021",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 92908,
            "range": "± 2176",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 14155,
            "range": "± 2050",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1064,
            "range": "± 124",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c6fd4bfee44aec6ebb10dae0fb2779562ecf125",
          "message": "feat: make it possible to override `method name` in subscriptions (#568)\n\n* feat: override `method` subscription notif\r\n\r\n* Arrow syntax for overwrites (#569)\r\n\r\n* check that unique notifs are used\r\n\r\n* check that custom sub name is unique\r\n\r\n* cargo fmt\r\n\r\n* address grumbles\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\n* commit added tests\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* grumbles\r\n\r\n* fix long lines\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update utils/src/server/rpc_module.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/rpc_macro.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update proc-macros/src/render_server.rs\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* more grumbles\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>\r\nCo-authored-by: David <dvdplm@gmail.com>",
          "timestamp": "2021-11-19T18:30:47Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/9c6fd4bfee44aec6ebb10dae0fb2779562ecf125"
        },
        "date": 1637454322327,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 157,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 181,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 162853,
            "range": "± 14864",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1826625,
            "range": "± 107156",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3415086,
            "range": "± 158441",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6592905,
            "range": "± 304135",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 13187360,
            "range": "± 773379",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 25509441,
            "range": "± 1070232",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 52107786,
            "range": "± 2579614",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 105376,
            "range": "± 8220",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 166653,
            "range": "± 16031",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 275484,
            "range": "± 21151",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 537568,
            "range": "± 44672",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1038457,
            "range": "± 63350",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1761400,
            "range": "± 217270",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3396936,
            "range": "± 371896",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 163661,
            "range": "± 12604",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1802315,
            "range": "± 96952",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3492926,
            "range": "± 166180",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6488774,
            "range": "± 374230",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 12912311,
            "range": "± 727826",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 25037655,
            "range": "± 1114367",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48055596,
            "range": "± 1774439",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 104000,
            "range": "± 26619",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 170765,
            "range": "± 23087",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 271140,
            "range": "± 23115",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 449095,
            "range": "± 19603",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 920579,
            "range": "± 79112",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1788433,
            "range": "± 127998",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3415206,
            "range": "± 348042",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 136350,
            "range": "± 6171",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20763,
            "range": "± 3385",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2056,
            "range": "± 635",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Vasile",
            "username": "lexnv",
            "email": "60601340+lexnv@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9a3c1e981bcdbbb558b1457bbd78277a14dca2da",
          "message": "proc-macros: Support deprecated methods for rpc client (#570)\n\n* proc-macros: Fix documentation typo of `rpc_identifier`\r\n\r\n* proc-macros: Support deprecated methods for rpc client (#564)\r\n\r\nCalling a deprecated method of the RPC client should warn\r\nthe user at compile-time.\r\n\r\nExtract the `#[deprecated]` macro as is while parsing the\r\nRpcMethod, and pass through the macro to the RPC client\r\nrendering.\r\n\r\n* tests/ui: Check deprecated method for rpc client (#564)\r\n\r\nTo ensure that the test will fail during compilation,\r\nwarnings are denied.\r\n\r\nCheck that the deprecate macro will generate warnings\r\njust for the methods that are utilized.",
          "timestamp": "2021-11-21T14:20:50Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/9a3c1e981bcdbbb558b1457bbd78277a14dca2da"
        },
        "date": 1637540662689,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 167,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 133819,
            "range": "± 12352",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1603383,
            "range": "± 21158",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3128342,
            "range": "± 26879",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6149978,
            "range": "± 48697",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 12147544,
            "range": "± 105478",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 24120850,
            "range": "± 249089",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 47987436,
            "range": "± 392381",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 69875,
            "range": "± 5497",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 132354,
            "range": "± 1699",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 222551,
            "range": "± 13084",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 397993,
            "range": "± 8610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 834106,
            "range": "± 67443",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1551237,
            "range": "± 89194",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2940183,
            "range": "± 217215",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 115687,
            "range": "± 13979",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1622746,
            "range": "± 11886",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3172366,
            "range": "± 34904",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6233930,
            "range": "± 257564",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11052683,
            "range": "± 298730",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 21798210,
            "range": "± 391564",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 48815521,
            "range": "± 776277",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65416,
            "range": "± 4409",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 132727,
            "range": "± 2275",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 222218,
            "range": "± 3643",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 398767,
            "range": "± 10149",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 851477,
            "range": "± 15489",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1637430,
            "range": "± 82201",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3101940,
            "range": "± 245061",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 95350,
            "range": "± 2074",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 16553,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1105,
            "range": "± 260",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e19e5051145c89f86ea02d01f52800cce9d1a516",
          "message": "Update hyper-rustls requirement from 0.22 to 0.23 (#571)\n\n* Update hyper-rustls requirement from 0.22 to 0.23\r\n\r\nUpdates the requirements on [hyper-rustls](https://github.com/ctz/hyper-rustls) to permit the latest version.\r\n- [Release notes](https://github.com/ctz/hyper-rustls/releases)\r\n- [Commits](https://github.com/ctz/hyper-rustls/compare/v/0.22.0...v/0.23.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: hyper-rustls\r\n  dependency-type: direct:production\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\n* make it work\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>",
          "timestamp": "2021-11-22T13:57:06Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/e19e5051145c89f86ea02d01f52800cce9d1a516"
        },
        "date": 1637627298512,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 201,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 227,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 197575,
            "range": "± 159330",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1801108,
            "range": "± 248239",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3284182,
            "range": "± 6862385",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6039286,
            "range": "± 2667777",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11771286,
            "range": "± 705857",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 22930068,
            "range": "± 8713585",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 46541946,
            "range": "± 22823541",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 114998,
            "range": "± 19536",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 200177,
            "range": "± 185355",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 313863,
            "range": "± 65323",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 544785,
            "range": "± 57990",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1098318,
            "range": "± 76649",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2149432,
            "range": "± 204720",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 4062892,
            "range": "± 576164",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 194035,
            "range": "± 22099",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1748863,
            "range": "± 270363",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3116361,
            "range": "± 198823",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5871916,
            "range": "± 602357",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11712625,
            "range": "± 816854",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 22548158,
            "range": "± 1243845",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 49323179,
            "range": "± 78612002",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 120676,
            "range": "± 146446",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 196739,
            "range": "± 328742",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 307303,
            "range": "± 316157",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 548371,
            "range": "± 139544",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1061095,
            "range": "± 79258",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2053973,
            "range": "± 209994",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 4090322,
            "range": "± 2113723",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 161104,
            "range": "± 119924",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 19709,
            "range": "± 30643",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1989,
            "range": "± 799",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "085df4144e87be2a0ec547d12cbe390d90a8b038",
          "message": "fix: better log for failed unsubscription call (#575)",
          "timestamp": "2021-11-23T19:24:24Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/085df4144e87be2a0ec547d12cbe390d90a8b038"
        },
        "date": 1637713624593,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 176,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 202,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 163296,
            "range": "± 20198",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1520508,
            "range": "± 71763",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2868665,
            "range": "± 313160",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5440761,
            "range": "± 249570",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10631478,
            "range": "± 467366",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 21066876,
            "range": "± 799757",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 41699977,
            "range": "± 1671255",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 99554,
            "range": "± 19296",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 185478,
            "range": "± 33692",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 297475,
            "range": "± 40243",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 542498,
            "range": "± 67774",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1097008,
            "range": "± 72496",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2060789,
            "range": "± 259514",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3736493,
            "range": "± 437662",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 175398,
            "range": "± 13531",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1539350,
            "range": "± 80755",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2858602,
            "range": "± 144547",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5429440,
            "range": "± 301847",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 10420112,
            "range": "± 574294",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 20832385,
            "range": "± 805006",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 42200206,
            "range": "± 1686585",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 106140,
            "range": "± 15255",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 186751,
            "range": "± 20768",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 301589,
            "range": "± 42147",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 520096,
            "range": "± 95176",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1063921,
            "range": "± 108542",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 2050194,
            "range": "± 200025",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3663076,
            "range": "± 426487",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 140135,
            "range": "± 11387",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 16082,
            "range": "± 4445",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1636,
            "range": "± 353",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David",
            "username": "dvdplm",
            "email": "dvdplm@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "42ffbcc608afce97af4e8b394fb9d31920888346",
          "message": "[chore] Release v0.5 (#574)\n\n* Bump version –> 0.5\r\nFix try-build tests\r\n\r\n* Changelog\r\n\r\n* Update CHANGELOG.md\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* Update CHANGELOG.md\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>",
          "timestamp": "2021-11-24T09:54:16Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/42ffbcc608afce97af4e8b394fb9d31920888346"
        },
        "date": 1637799851669,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 148,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 133385,
            "range": "± 5123",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1367659,
            "range": "± 29102",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2600571,
            "range": "± 12439",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5066514,
            "range": "± 90977",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10000284,
            "range": "± 96614",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19771100,
            "range": "± 143719",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 39468817,
            "range": "± 200938",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 67031,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 131296,
            "range": "± 7308",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 219753,
            "range": "± 6320",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 387131,
            "range": "± 7458",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 814259,
            "range": "± 15490",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1583305,
            "range": "± 53510",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2999059,
            "range": "± 258150",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 133950,
            "range": "± 2888",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1368793,
            "range": "± 7581",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2609705,
            "range": "± 11802",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5088684,
            "range": "± 23397",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 10009077,
            "range": "± 79080",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19679699,
            "range": "± 181975",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 39472463,
            "range": "± 204060",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 66220,
            "range": "± 2539",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 131852,
            "range": "± 4285",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 220746,
            "range": "± 3630",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 388086,
            "range": "± 10145",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 821368,
            "range": "± 18376",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1569145,
            "range": "± 57967",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2967958,
            "range": "± 231013",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 91643,
            "range": "± 1986",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 12715,
            "range": "± 1394",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1220,
            "range": "± 193",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d4e53f83c06bc2a477735f7cd9b6e18f311787dd",
          "message": "fix rpc error: support unquoted strings (#578)\n\n* fix rpc error: support unquoted strings\r\n\r\n* Update types/src/v2/error.rs\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>\r\n\r\nCo-authored-by: Maciej Hirsz <1096222+maciejhirsz@users.noreply.github.com>",
          "timestamp": "2021-11-25T19:15:57Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/d4e53f83c06bc2a477735f7cd9b6e18f311787dd"
        },
        "date": 1637886313413,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 154,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 171,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 133301,
            "range": "± 2644",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1351319,
            "range": "± 35639",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2597861,
            "range": "± 48454",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5013516,
            "range": "± 43016",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 9883980,
            "range": "± 110083",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19797178,
            "range": "± 198638",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 39359737,
            "range": "± 277467",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 66137,
            "range": "± 2714",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 131130,
            "range": "± 3754",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 217677,
            "range": "± 4934",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 391514,
            "range": "± 24552",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 811795,
            "range": "± 20165",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1574416,
            "range": "± 162021",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2961331,
            "range": "± 283808",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 132646,
            "range": "± 2799",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1353058,
            "range": "± 12016",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2564869,
            "range": "± 23797",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5008208,
            "range": "± 36935",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 9899763,
            "range": "± 535781",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19378073,
            "range": "± 132160",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 39094318,
            "range": "± 362667",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65604,
            "range": "± 2312",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 133015,
            "range": "± 35751",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 232311,
            "range": "± 16372",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 406283,
            "range": "± 42844",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 897985,
            "range": "± 123209",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1741745,
            "range": "± 84294",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3493230,
            "range": "± 380312",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 101201,
            "range": "± 24750",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 16270,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1698,
            "range": "± 442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8c8676999ea3ddc74ef907b1f27858405750c17f",
          "message": "chore: release v0.5.1 (#579)",
          "timestamp": "2021-11-26T08:41:25Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/8c8676999ea3ddc74ef907b1f27858405750c17f"
        },
        "date": 1637972660872,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 154,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 168,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 135134,
            "range": "± 8425",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1381774,
            "range": "± 29182",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2630665,
            "range": "± 13954",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5103994,
            "range": "± 27516",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10073188,
            "range": "± 67105",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19918668,
            "range": "± 172111",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 39666916,
            "range": "± 684147",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 69695,
            "range": "± 6700",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 133484,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 216684,
            "range": "± 4640",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 400137,
            "range": "± 16266",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 808887,
            "range": "± 16818",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1577615,
            "range": "± 63788",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3226992,
            "range": "± 309583",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 135626,
            "range": "± 4213",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1377629,
            "range": "± 9137",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2632475,
            "range": "± 13892",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5098699,
            "range": "± 31019",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 9998717,
            "range": "± 89129",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19828900,
            "range": "± 291713",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 39484741,
            "range": "± 243451",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 67407,
            "range": "± 2111",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 133452,
            "range": "± 6649",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 223536,
            "range": "± 3251",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 402715,
            "range": "± 32252",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 843680,
            "range": "± 17591",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1624026,
            "range": "± 50275",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3103390,
            "range": "± 307374",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 91558,
            "range": "± 1786",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 15822,
            "range": "± 1458",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1104,
            "range": "± 160",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8c8676999ea3ddc74ef907b1f27858405750c17f",
          "message": "chore: release v0.5.1 (#579)",
          "timestamp": "2021-11-26T08:41:25Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/8c8676999ea3ddc74ef907b1f27858405750c17f"
        },
        "date": 1638059215580,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 176,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 199,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 154184,
            "range": "± 6502",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1548863,
            "range": "± 46674",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2932562,
            "range": "± 83871",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5765408,
            "range": "± 276925",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11709492,
            "range": "± 396010",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23376995,
            "range": "± 865332",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 46226741,
            "range": "± 2459653",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 73879,
            "range": "± 3315",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 144311,
            "range": "± 13707",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 237166,
            "range": "± 10646",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 416428,
            "range": "± 39738",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 845424,
            "range": "± 36595",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1676243,
            "range": "± 125456",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3154950,
            "range": "± 224921",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 145753,
            "range": "± 8862",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1607356,
            "range": "± 53418",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3033272,
            "range": "± 82837",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5926815,
            "range": "± 256463",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11591512,
            "range": "± 174875",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 22977794,
            "range": "± 848712",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 46388191,
            "range": "± 672210",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 80687,
            "range": "± 6702",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 146203,
            "range": "± 3837",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 242374,
            "range": "± 8536",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 418085,
            "range": "± 16772",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 887441,
            "range": "± 40138",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1704010,
            "range": "± 98087",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3191180,
            "range": "± 254095",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 98034,
            "range": "± 4877",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4940,
            "range": "± 2305",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2850,
            "range": "± 667",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8c8676999ea3ddc74ef907b1f27858405750c17f",
          "message": "chore: release v0.5.1 (#579)",
          "timestamp": "2021-11-26T08:41:25Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/8c8676999ea3ddc74ef907b1f27858405750c17f"
        },
        "date": 1638145451817,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 137,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 177,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 132063,
            "range": "± 12979",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1356530,
            "range": "± 17423",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2375840,
            "range": "± 69953",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 4605271,
            "range": "± 228034",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 9772388,
            "range": "± 483233",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19626078,
            "range": "± 182909",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 35193180,
            "range": "± 284847",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 64585,
            "range": "± 1512",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 130987,
            "range": "± 5226",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 221050,
            "range": "± 3978",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 389286,
            "range": "± 13534",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 778836,
            "range": "± 23612",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1579285,
            "range": "± 57926",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3021929,
            "range": "± 224992",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 134630,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1353531,
            "range": "± 39217",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2609399,
            "range": "± 41870",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5059399,
            "range": "± 55044",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 9947223,
            "range": "± 111891",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19732561,
            "range": "± 334410",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 38547331,
            "range": "± 1865977",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65558,
            "range": "± 1989",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 129898,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 220547,
            "range": "± 3515",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 387214,
            "range": "± 8783",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 807017,
            "range": "± 14083",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1587375,
            "range": "± 71295",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2921127,
            "range": "± 255058",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 88537,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 11479,
            "range": "± 3597",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1156,
            "range": "± 135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "15b2f23858b06b6162b6821a7bbf0086f68c5eba",
          "message": "fix(http client): impl Clone (#583)",
          "timestamp": "2021-11-29T21:30:34Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/15b2f23858b06b6162b6821a7bbf0086f68c5eba"
        },
        "date": 1638231992742,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 191,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 213,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 164104,
            "range": "± 6783",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1668047,
            "range": "± 68970",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3121566,
            "range": "± 99946",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6039432,
            "range": "± 66474",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11763671,
            "range": "± 107824",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 23323444,
            "range": "± 201785",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 46472493,
            "range": "± 338606",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 81777,
            "range": "± 5918",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 152020,
            "range": "± 11564",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 256978,
            "range": "± 19779",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 449466,
            "range": "± 23869",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 943551,
            "range": "± 21548",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1858448,
            "range": "± 102888",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3483598,
            "range": "± 268427",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 162505,
            "range": "± 7546",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1635061,
            "range": "± 52424",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3070303,
            "range": "± 56785",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5914360,
            "range": "± 220300",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11732871,
            "range": "± 120690",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23156426,
            "range": "± 401798",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 46104917,
            "range": "± 537824",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 82982,
            "range": "± 4056",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 150430,
            "range": "± 5469",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 254250,
            "range": "± 9894",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 445096,
            "range": "± 9163",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 942379,
            "range": "± 30356",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1876783,
            "range": "± 109135",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3508872,
            "range": "± 217132",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 112596,
            "range": "± 4670",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 8094,
            "range": "± 1965",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 3497,
            "range": "± 742",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3c3f3ac9b6c12e81a39e845b898b085b9580b84e",
          "message": "fix(types): use `Cow` for deserializing `str` (#584)\n\n* fix(types): use `Cow` for deserializing `str`\r\n\r\n* use ToString",
          "timestamp": "2021-11-30T13:21:10Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/3c3f3ac9b6c12e81a39e845b898b085b9580b84e"
        },
        "date": 1638318382840,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 183,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 209,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 152684,
            "range": "± 6665",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1576735,
            "range": "± 29064",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2966404,
            "range": "± 68524",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5767342,
            "range": "± 161590",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11340806,
            "range": "± 184583",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 22046575,
            "range": "± 412610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 43266956,
            "range": "± 1057522",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 73267,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 142928,
            "range": "± 4015",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 234811,
            "range": "± 6732",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 418274,
            "range": "± 16056",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 870913,
            "range": "± 69543",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1681567,
            "range": "± 81993",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3213732,
            "range": "± 279144",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 149763,
            "range": "± 6024",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1554814,
            "range": "± 40333",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2953308,
            "range": "± 71090",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5708868,
            "range": "± 127581",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11148460,
            "range": "± 256602",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 22424884,
            "range": "± 433832",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 44340382,
            "range": "± 779200",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 73027,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 138752,
            "range": "± 3949",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 229208,
            "range": "± 5527",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 402718,
            "range": "± 14167",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 835494,
            "range": "± 26251",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1593705,
            "range": "± 75716",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3102776,
            "range": "± 276506",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 95857,
            "range": "± 2608",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 5305,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2417,
            "range": "± 429",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "be6f64ae65baf5ad1a5a0de8487aaf3407d39c5f",
          "message": "chore: release v0.6.0 (#587)",
          "timestamp": "2021-12-01T11:41:26Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/be6f64ae65baf5ad1a5a0de8487aaf3407d39c5f"
        },
        "date": 1638404764930,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 189,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 211,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 150364,
            "range": "± 9401",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1651869,
            "range": "± 61714",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3126799,
            "range": "± 183922",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 6017711,
            "range": "± 215070",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11530770,
            "range": "± 193093",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 22588339,
            "range": "± 570841",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 45059655,
            "range": "± 1144379",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 76456,
            "range": "± 7781",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 147488,
            "range": "± 3724",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 244647,
            "range": "± 9800",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 433394,
            "range": "± 13649",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 918846,
            "range": "± 79035",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1814188,
            "range": "± 76591",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3425691,
            "range": "± 271097",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 156784,
            "range": "± 6422",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1645697,
            "range": "± 48550",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3055967,
            "range": "± 56929",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 6044715,
            "range": "± 192555",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11757060,
            "range": "± 169687",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 23077870,
            "range": "± 696479",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 47066116,
            "range": "± 1200712",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 78867,
            "range": "± 5083",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 148812,
            "range": "± 16132",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 246406,
            "range": "± 6355",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 439201,
            "range": "± 23631",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 888416,
            "range": "± 23585",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1738291,
            "range": "± 118629",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3380465,
            "range": "± 242123",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 101587,
            "range": "± 5549",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 6199,
            "range": "± 1563",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 3437,
            "range": "± 572",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "66aa6c49175da7195d4ced15543d4a90a69cd015",
          "message": "Create gitlab pipeline  (#534)\n\n* add badge to readme\r\n\r\n* first version of pipeline\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* add pre-cache script\r\n\r\n* fmt and clippy stable\r\n\r\n* add check and test\r\n\r\n* remove output text file from bench\r\n\r\n* Update scripts/ci/pre_cache.sh\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* small fix\r\n\r\n* fix test and schedule\r\n\r\n* CI: verbose is a surplus\r\n\r\n* CI: separately check rustdoc linx\r\n\r\n* fix refs\r\n\r\n* add bench to gh-pages\r\n\r\n* fix refs\r\n\r\n* fix benchmarks\r\n\r\n* added vault to ci\r\n\r\n* fix vars\r\n\r\n* comment bench\r\n\r\n* fix benches name\r\n\r\n* added script to push benchmark results to VM\r\n\r\n* make script executable\r\n\r\n* change bench psuh executor\r\n\r\n* changed benchmark task to run on a dedicated node pool\r\n\r\n* change prometheus metric name for benchmarks\r\n\r\n* send 2 metrics with benchmark results\r\n\r\n* disable non-schedule jobs from schedule run\r\n\r\n* empty commit for benchmark test\r\n\r\n* change metric name\r\n\r\n* empty commit for benchmark test\r\n\r\n* empty commit for benchmark test\r\n\r\n* add cirunner label to vm metric\r\n\r\n* split vm metric to 2 metrics\r\n\r\n* change runner description to runner tag in ci scripts\r\n\r\n* add pass runner tags from benchmark to publish job\r\n\r\n* change runner tag to runner description\r\n\r\n* add debug message\r\n\r\n* empty commit for test\r\n\r\n* empty commit for test\r\n\r\n* Update .scripts/ci/push_bench_results.sh\r\n\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>\r\n\r\n* add defaults, remove dups, change ci image for publish-bench\r\n\r\n* remove pre_cache.sh\r\n\r\n* move interruptible to defaults\r\n\r\n* add issue to fixme comment\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>\r\nCo-authored-by: Denis P <denis.pisarev@parity.io>\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>",
          "timestamp": "2021-12-02T15:33:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/66aa6c49175da7195d4ced15543d4a90a69cd015"
        },
        "date": 1638491194923,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 192,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 219,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 182686,
            "range": "± 19041",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1547510,
            "range": "± 286316",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2674665,
            "range": "± 152337",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5248172,
            "range": "± 279041",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10516342,
            "range": "± 554163",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19551839,
            "range": "± 1289218",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 39653110,
            "range": "± 2491788",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 178902,
            "range": "± 13608",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 209202,
            "range": "± 19593",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 219418,
            "range": "± 20754",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 346894,
            "range": "± 27621",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 474121,
            "range": "± 43500",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 116865,
            "range": "± 28802",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 166196,
            "range": "± 10936",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 272272,
            "range": "± 16638",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 469350,
            "range": "± 53241",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 937759,
            "range": "± 102403",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1869005,
            "range": "± 166653",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3388756,
            "range": "± 374913",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 129805,
            "range": "± 21438",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 136240,
            "range": "± 10862",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 159799,
            "range": "± 11392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 274510,
            "range": "± 22780",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 412613,
            "range": "± 32288",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 165509,
            "range": "± 15627",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1424442,
            "range": "± 196274",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2682257,
            "range": "± 132259",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5099622,
            "range": "± 261040",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 9926922,
            "range": "± 512970",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19432780,
            "range": "± 1100457",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 38427999,
            "range": "± 2163428",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 171754,
            "range": "± 18609",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 187771,
            "range": "± 11845",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 205655,
            "range": "± 16500",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 337494,
            "range": "± 32239",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 545412,
            "range": "± 61211",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 114652,
            "range": "± 13237",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 178026,
            "range": "± 19851",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 289126,
            "range": "± 23776",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 498727,
            "range": "± 35108",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1038733,
            "range": "± 76424",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1939632,
            "range": "± 160405",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3553634,
            "range": "± 382143",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 128812,
            "range": "± 9278",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 140956,
            "range": "± 9957",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 170519,
            "range": "± 10272",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 348338,
            "range": "± 40216",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 514039,
            "range": "± 68421",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 148637,
            "range": "± 10904",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 22254,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2525,
            "range": "± 899",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "66aa6c49175da7195d4ced15543d4a90a69cd015",
          "message": "Create gitlab pipeline  (#534)\n\n* add badge to readme\r\n\r\n* first version of pipeline\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* add pre-cache script\r\n\r\n* fmt and clippy stable\r\n\r\n* add check and test\r\n\r\n* remove output text file from bench\r\n\r\n* Update scripts/ci/pre_cache.sh\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* small fix\r\n\r\n* fix test and schedule\r\n\r\n* CI: verbose is a surplus\r\n\r\n* CI: separately check rustdoc linx\r\n\r\n* fix refs\r\n\r\n* add bench to gh-pages\r\n\r\n* fix refs\r\n\r\n* fix benchmarks\r\n\r\n* added vault to ci\r\n\r\n* fix vars\r\n\r\n* comment bench\r\n\r\n* fix benches name\r\n\r\n* added script to push benchmark results to VM\r\n\r\n* make script executable\r\n\r\n* change bench psuh executor\r\n\r\n* changed benchmark task to run on a dedicated node pool\r\n\r\n* change prometheus metric name for benchmarks\r\n\r\n* send 2 metrics with benchmark results\r\n\r\n* disable non-schedule jobs from schedule run\r\n\r\n* empty commit for benchmark test\r\n\r\n* change metric name\r\n\r\n* empty commit for benchmark test\r\n\r\n* empty commit for benchmark test\r\n\r\n* add cirunner label to vm metric\r\n\r\n* split vm metric to 2 metrics\r\n\r\n* change runner description to runner tag in ci scripts\r\n\r\n* add pass runner tags from benchmark to publish job\r\n\r\n* change runner tag to runner description\r\n\r\n* add debug message\r\n\r\n* empty commit for test\r\n\r\n* empty commit for test\r\n\r\n* Update .scripts/ci/push_bench_results.sh\r\n\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>\r\n\r\n* add defaults, remove dups, change ci image for publish-bench\r\n\r\n* remove pre_cache.sh\r\n\r\n* move interruptible to defaults\r\n\r\n* add issue to fixme comment\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>\r\nCo-authored-by: Denis P <denis.pisarev@parity.io>\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>",
          "timestamp": "2021-12-02T15:33:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/66aa6c49175da7195d4ced15543d4a90a69cd015"
        },
        "date": 1638577622153,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 175,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 204,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 173542,
            "range": "± 17315",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1531663,
            "range": "± 77891",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2834853,
            "range": "± 126252",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5437153,
            "range": "± 454269",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10615999,
            "range": "± 339028",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 20825384,
            "range": "± 1033077",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 41042779,
            "range": "± 799692",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 182751,
            "range": "± 7143",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 189039,
            "range": "± 10974",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 207717,
            "range": "± 22191",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 342450,
            "range": "± 31404",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 497859,
            "range": "± 52858",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 111551,
            "range": "± 12136",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 183059,
            "range": "± 26853",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 298125,
            "range": "± 41971",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 522565,
            "range": "± 49388",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1038691,
            "range": "± 52638",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2024144,
            "range": "± 154931",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3780617,
            "range": "± 341024",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 126047,
            "range": "± 12828",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 154260,
            "range": "± 51035",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 173667,
            "range": "± 21133",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 310433,
            "range": "± 13394",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 488307,
            "range": "± 32448",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 183292,
            "range": "± 11455",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1580717,
            "range": "± 103752",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2870549,
            "range": "± 116383",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5525250,
            "range": "± 289769",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 10737739,
            "range": "± 636776",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 20952443,
            "range": "± 492842",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 41653042,
            "range": "± 977985",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 190162,
            "range": "± 43006",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 194760,
            "range": "± 15503",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 215924,
            "range": "± 10224",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 356229,
            "range": "± 24771",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 535818,
            "range": "± 57119",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 99940,
            "range": "± 10404",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 176412,
            "range": "± 14031",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 289177,
            "range": "± 44730",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 507391,
            "range": "± 92982",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 1013686,
            "range": "± 56528",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1944837,
            "range": "± 138707",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3652346,
            "range": "± 360497",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 123332,
            "range": "± 13805",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 137047,
            "range": "± 11098",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 153887,
            "range": "± 12058",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 315956,
            "range": "± 17319",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 500394,
            "range": "± 35959",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 143014,
            "range": "± 13744",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 16911,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1720,
            "range": "± 937",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "66aa6c49175da7195d4ced15543d4a90a69cd015",
          "message": "Create gitlab pipeline  (#534)\n\n* add badge to readme\r\n\r\n* first version of pipeline\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* add pre-cache script\r\n\r\n* fmt and clippy stable\r\n\r\n* add check and test\r\n\r\n* remove output text file from bench\r\n\r\n* Update scripts/ci/pre_cache.sh\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* small fix\r\n\r\n* fix test and schedule\r\n\r\n* CI: verbose is a surplus\r\n\r\n* CI: separately check rustdoc linx\r\n\r\n* fix refs\r\n\r\n* add bench to gh-pages\r\n\r\n* fix refs\r\n\r\n* fix benchmarks\r\n\r\n* added vault to ci\r\n\r\n* fix vars\r\n\r\n* comment bench\r\n\r\n* fix benches name\r\n\r\n* added script to push benchmark results to VM\r\n\r\n* make script executable\r\n\r\n* change bench psuh executor\r\n\r\n* changed benchmark task to run on a dedicated node pool\r\n\r\n* change prometheus metric name for benchmarks\r\n\r\n* send 2 metrics with benchmark results\r\n\r\n* disable non-schedule jobs from schedule run\r\n\r\n* empty commit for benchmark test\r\n\r\n* change metric name\r\n\r\n* empty commit for benchmark test\r\n\r\n* empty commit for benchmark test\r\n\r\n* add cirunner label to vm metric\r\n\r\n* split vm metric to 2 metrics\r\n\r\n* change runner description to runner tag in ci scripts\r\n\r\n* add pass runner tags from benchmark to publish job\r\n\r\n* change runner tag to runner description\r\n\r\n* add debug message\r\n\r\n* empty commit for test\r\n\r\n* empty commit for test\r\n\r\n* Update .scripts/ci/push_bench_results.sh\r\n\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>\r\n\r\n* add defaults, remove dups, change ci image for publish-bench\r\n\r\n* remove pre_cache.sh\r\n\r\n* move interruptible to defaults\r\n\r\n* add issue to fixme comment\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>\r\nCo-authored-by: Denis P <denis.pisarev@parity.io>\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>",
          "timestamp": "2021-12-02T15:33:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/66aa6c49175da7195d4ced15543d4a90a69cd015"
        },
        "date": 1638663958699,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 154,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 176,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 135456,
            "range": "± 3578",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1387481,
            "range": "± 12238",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 2640355,
            "range": "± 18546",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5107075,
            "range": "± 51634",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 10063092,
            "range": "± 105957",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 19859191,
            "range": "± 222064",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 39457164,
            "range": "± 939294",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 142419,
            "range": "± 3960",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 151536,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 166636,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 259350,
            "range": "± 7252",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 379254,
            "range": "± 43402",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 66232,
            "range": "± 2062",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 131579,
            "range": "± 3098",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 222021,
            "range": "± 3312",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 392663,
            "range": "± 9624",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 831091,
            "range": "± 38341",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1602322,
            "range": "± 51238",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3007074,
            "range": "± 238559",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 84371,
            "range": "± 3810",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 95515,
            "range": "± 14849",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 113781,
            "range": "± 3300",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 233276,
            "range": "± 59855",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 375114,
            "range": "± 22136",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 135540,
            "range": "± 4236",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1386780,
            "range": "± 44573",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 2631337,
            "range": "± 19552",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5088056,
            "range": "± 73943",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 10033651,
            "range": "± 103827",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 19935528,
            "range": "± 184880",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 39500820,
            "range": "± 1203068",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 142844,
            "range": "± 3551",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 154450,
            "range": "± 3102",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 170135,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 283547,
            "range": "± 5492",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 418838,
            "range": "± 16894",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 67466,
            "range": "± 2312",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 131853,
            "range": "± 4116",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 223365,
            "range": "± 9683",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 395849,
            "range": "± 16954",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 826216,
            "range": "± 16430",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1610883,
            "range": "± 72315",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3088921,
            "range": "± 209058",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 85938,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 96229,
            "range": "± 2358",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 116021,
            "range": "± 3254",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 245509,
            "range": "± 3242",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 407807,
            "range": "± 18072",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 93639,
            "range": "± 3038",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 15995,
            "range": "± 1129",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1064,
            "range": "± 281",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "66aa6c49175da7195d4ced15543d4a90a69cd015",
          "message": "Create gitlab pipeline  (#534)\n\n* add badge to readme\r\n\r\n* first version of pipeline\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* add pre-cache script\r\n\r\n* fmt and clippy stable\r\n\r\n* add check and test\r\n\r\n* remove output text file from bench\r\n\r\n* Update scripts/ci/pre_cache.sh\r\n\r\nCo-authored-by: David <dvdplm@gmail.com>\r\n\r\n* Update .gitlab-ci.yml\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\n\r\n* small fix\r\n\r\n* fix test and schedule\r\n\r\n* CI: verbose is a surplus\r\n\r\n* CI: separately check rustdoc linx\r\n\r\n* fix refs\r\n\r\n* add bench to gh-pages\r\n\r\n* fix refs\r\n\r\n* fix benchmarks\r\n\r\n* added vault to ci\r\n\r\n* fix vars\r\n\r\n* comment bench\r\n\r\n* fix benches name\r\n\r\n* added script to push benchmark results to VM\r\n\r\n* make script executable\r\n\r\n* change bench psuh executor\r\n\r\n* changed benchmark task to run on a dedicated node pool\r\n\r\n* change prometheus metric name for benchmarks\r\n\r\n* send 2 metrics with benchmark results\r\n\r\n* disable non-schedule jobs from schedule run\r\n\r\n* empty commit for benchmark test\r\n\r\n* change metric name\r\n\r\n* empty commit for benchmark test\r\n\r\n* empty commit for benchmark test\r\n\r\n* add cirunner label to vm metric\r\n\r\n* split vm metric to 2 metrics\r\n\r\n* change runner description to runner tag in ci scripts\r\n\r\n* add pass runner tags from benchmark to publish job\r\n\r\n* change runner tag to runner description\r\n\r\n* add debug message\r\n\r\n* empty commit for test\r\n\r\n* empty commit for test\r\n\r\n* Update .scripts/ci/push_bench_results.sh\r\n\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>\r\n\r\n* add defaults, remove dups, change ci image for publish-bench\r\n\r\n* remove pre_cache.sh\r\n\r\n* move interruptible to defaults\r\n\r\n* add issue to fixme comment\r\n\r\nCo-authored-by: Niklas Adolfsson <niklasadolfsson1@gmail.com>\r\nCo-authored-by: David <dvdplm@gmail.com>\r\nCo-authored-by: Denis P <denis.pisarev@parity.io>\r\nCo-authored-by: Denis Pisarev <17856421+TriplEight@users.noreply.github.com>",
          "timestamp": "2021-12-02T15:33:52Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/66aa6c49175da7195d4ced15543d4a90a69cd015"
        },
        "date": 1638750367972,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 189,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 212,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 154766,
            "range": "± 8370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 1614908,
            "range": "± 32865",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 3059231,
            "range": "± 36864",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 5934869,
            "range": "± 118556",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 11654027,
            "range": "± 55875",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 22868114,
            "range": "± 300975",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 45697043,
            "range": "± 339459",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 165209,
            "range": "± 6026",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 175395,
            "range": "± 4259",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 194486,
            "range": "± 2253",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 306439,
            "range": "± 6276",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 440530,
            "range": "± 11436",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 74667,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 145951,
            "range": "± 3172",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 241909,
            "range": "± 4484",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 420468,
            "range": "± 15121",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 897450,
            "range": "± 40108",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1707608,
            "range": "± 76361",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3254135,
            "range": "± 250730",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 96891,
            "range": "± 9736",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 109037,
            "range": "± 1688",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 129737,
            "range": "± 2788",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 278142,
            "range": "± 39552",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 440746,
            "range": "± 31610",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 154769,
            "range": "± 6175",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 1607585,
            "range": "± 14350",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 3054284,
            "range": "± 13297",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 5918785,
            "range": "± 58283",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 11667207,
            "range": "± 48849",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 22933888,
            "range": "± 236209",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 45599845,
            "range": "± 811070",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 168677,
            "range": "± 7082",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 182411,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 201027,
            "range": "± 3138",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 332778,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 496006,
            "range": "± 16052",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 76987,
            "range": "± 5610",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 146792,
            "range": "± 3818",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 243522,
            "range": "± 7172",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 426015,
            "range": "± 7505",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 881827,
            "range": "± 17309",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1682845,
            "range": "± 65861",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3170430,
            "range": "± 223510",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 99217,
            "range": "± 6471",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 112548,
            "range": "± 2807",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 130845,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 290287,
            "range": "± 4374",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 480997,
            "range": "± 9712",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 101983,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 7255,
            "range": "± 1270",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 3228,
            "range": "± 501",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3f1c7fcf4b19fc89bf1786cd89f6435b15e96948",
          "message": "clients: feature gate `tls` (#545)\n\n* clients: introduce tls feature flag\r\n\r\n* Update tests/tests/integration_tests.rs\r\n\r\n* fix: don't rebuild tls connector of every connect\r\n\r\n* fix tests + remove url dep\r\n\r\n* fix tests again",
          "timestamp": "2021-12-06T14:26:15Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/3f1c7fcf4b19fc89bf1786cd89f6435b15e96948"
        },
        "date": 1638836716419,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 160,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 176,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 124432,
            "range": "± 10927",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 210991,
            "range": "± 9576",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 391233,
            "range": "± 17392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 702918,
            "range": "± 32220",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 1337950,
            "range": "± 62874",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 2579969,
            "range": "± 95136",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 5120372,
            "range": "± 268354",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 150382,
            "range": "± 6557",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 162547,
            "range": "± 6740",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 176665,
            "range": "± 6743",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 280142,
            "range": "± 15832",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 407960,
            "range": "± 20130",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 68994,
            "range": "± 7902",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 134291,
            "range": "± 7560",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 222199,
            "range": "± 10852",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 389144,
            "range": "± 29175",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 800364,
            "range": "± 38238",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1523797,
            "range": "± 92224",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 2942126,
            "range": "± 240673",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 90638,
            "range": "± 11215",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 98586,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 113635,
            "range": "± 5449",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 250174,
            "range": "± 13224",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 388558,
            "range": "± 17490",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 138940,
            "range": "± 6569",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 220708,
            "range": "± 9352",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 398391,
            "range": "± 16954",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 705589,
            "range": "± 26167",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 1342035,
            "range": "± 71128",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 2639188,
            "range": "± 188883",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 5129043,
            "range": "± 262766",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 149876,
            "range": "± 7010",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 162244,
            "range": "± 7738",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 182698,
            "range": "± 7110",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 311927,
            "range": "± 14760",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 446503,
            "range": "± 19100",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 68398,
            "range": "± 3230",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 136866,
            "range": "± 5026",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 218269,
            "range": "± 8758",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 379052,
            "range": "± 19898",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 780894,
            "range": "± 35517",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1486557,
            "range": "± 70555",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 2806412,
            "range": "± 239008",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 93269,
            "range": "± 4442",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 102746,
            "range": "± 4939",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 117575,
            "range": "± 5748",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 257028,
            "range": "± 14120",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 429045,
            "range": "± 16753",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 89886,
            "range": "± 4790",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 5606,
            "range": "± 2559",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 2294,
            "range": "± 404",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7bb628af3a40caea3f6a9886bbfdfbdae4d7f865",
          "message": "clients: use `FxHashMap` instead `FnvHashMap` (#592)\n\n* deps: use `FxHashMap` instead `fnv`\r\n\r\n* fmt",
          "timestamp": "2021-12-07T15:49:26Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/7bb628af3a40caea3f6a9886bbfdfbdae4d7f865"
        },
        "date": 1638923215353,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 168,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 201,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 181321,
            "range": "± 48040",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 291106,
            "range": "± 22914",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 524098,
            "range": "± 24923",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 955152,
            "range": "± 56128",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 1829973,
            "range": "± 97515",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 3564376,
            "range": "± 320804",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 7220816,
            "range": "± 369458",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 181667,
            "range": "± 32531",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 190136,
            "range": "± 34102",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 210185,
            "range": "± 22660",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 329002,
            "range": "± 78060",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 464014,
            "range": "± 19988",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 102926,
            "range": "± 27629",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 173253,
            "range": "± 21022",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 284467,
            "range": "± 18844",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 486636,
            "range": "± 48643",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 993835,
            "range": "± 55828",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1950117,
            "range": "± 196819",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3563349,
            "range": "± 380508",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 124754,
            "range": "± 5349",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 136612,
            "range": "± 38521",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 157499,
            "range": "± 22401",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 291984,
            "range": "± 27165",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 453508,
            "range": "± 41274",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 174318,
            "range": "± 21539",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 286560,
            "range": "± 24868",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 539307,
            "range": "± 25057",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 1017768,
            "range": "± 82937",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 1851701,
            "range": "± 75461",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 3644546,
            "range": "± 312606",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 7389022,
            "range": "± 339857",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 178968,
            "range": "± 6991",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 191797,
            "range": "± 11679",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 206899,
            "range": "± 14402",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 336922,
            "range": "± 40058",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 503771,
            "range": "± 66689",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 101732,
            "range": "± 7314",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 179686,
            "range": "± 13901",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 287104,
            "range": "± 17823",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 479613,
            "range": "± 23466",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 968750,
            "range": "± 54983",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1869722,
            "range": "± 158122",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3444057,
            "range": "± 394370",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 127269,
            "range": "± 6343",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 140071,
            "range": "± 14809",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 157174,
            "range": "± 16641",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 308876,
            "range": "± 43829",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 485329,
            "range": "± 46050",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 139952,
            "range": "± 10248",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 20008,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1646,
            "range": "± 413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1ba1a33bdd188c2ff22acdb9cb92a006f54498c0",
          "message": "fix: duplicate env logger deps (#595)",
          "timestamp": "2021-12-08T17:25:51Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/1ba1a33bdd188c2ff22acdb9cb92a006f54498c0"
        },
        "date": 1639009561696,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 166,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 175,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 149740,
            "range": "± 48160",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 302488,
            "range": "± 18314",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 546538,
            "range": "± 30603",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 983248,
            "range": "± 57392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 1882620,
            "range": "± 136159",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 3670225,
            "range": "± 159627",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 7364459,
            "range": "± 394196",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 188467,
            "range": "± 17382",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 199268,
            "range": "± 14167",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 215712,
            "range": "± 19001",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 338498,
            "range": "± 25910",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 492691,
            "range": "± 50234",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 116263,
            "range": "± 13123",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 186592,
            "range": "± 29507",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 294266,
            "range": "± 57760",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 510106,
            "range": "± 30339",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 1033574,
            "range": "± 76829",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 2060098,
            "range": "± 205446",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3784336,
            "range": "± 388317",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 139977,
            "range": "± 9512",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 149292,
            "range": "± 9190",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 170446,
            "range": "± 17083",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 304736,
            "range": "± 23710",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 451895,
            "range": "± 44569",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 155994,
            "range": "± 17179",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 305266,
            "range": "± 23217",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 538700,
            "range": "± 35383",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 979513,
            "range": "± 78626",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 1861472,
            "range": "± 165488",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 3649585,
            "range": "± 148939",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 7218586,
            "range": "± 336982",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 193645,
            "range": "± 10306",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 202508,
            "range": "± 14377",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 222994,
            "range": "± 12298",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 359497,
            "range": "± 25259",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 544304,
            "range": "± 62718",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 113816,
            "range": "± 10846",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 182952,
            "range": "± 25850",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 290878,
            "range": "± 22843",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 494919,
            "range": "± 34153",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 981269,
            "range": "± 108864",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1919639,
            "range": "± 152545",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3607346,
            "range": "± 379493",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 140035,
            "range": "± 13697",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 150796,
            "range": "± 15949",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 169116,
            "range": "± 19710",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 325085,
            "range": "± 20934",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 527265,
            "range": "± 49652",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 149110,
            "range": "± 12588",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 17774,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1327,
            "range": "± 1032",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David",
            "username": "dvdplm",
            "email": "dvdplm@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b41acaba88774eedc4cd5ad59895e7dc6c437a59",
          "message": "Remove usage of the `palaver` crate in an example (#597)\n\n* Remove usage of the `palaver` crate in an example\r\n\r\n* fmt",
          "timestamp": "2021-12-09T15:19:44Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/b41acaba88774eedc4cd5ad59895e7dc6c437a59"
        },
        "date": 1639095850207,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 151,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 175,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip",
            "value": 122695,
            "range": "± 8215",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/2",
            "value": 211924,
            "range": "± 6703",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/4",
            "value": 392507,
            "range": "± 5575",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/8",
            "value": 710292,
            "range": "± 7422",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/16",
            "value": 1356401,
            "range": "± 29713",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/32",
            "value": 2647818,
            "range": "± 34453",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_connections/64",
            "value": 5272681,
            "range": "± 106918",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/2",
            "value": 137253,
            "range": "± 1869",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/5",
            "value": 145059,
            "range": "± 3941",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/10",
            "value": 156061,
            "range": "± 3221",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/50",
            "value": 238922,
            "range": "± 6391",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/100",
            "value": 352951,
            "range": "± 4544",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip",
            "value": 61606,
            "range": "± 2098",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/2",
            "value": 135119,
            "range": "± 4524",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/4",
            "value": 223607,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/8",
            "value": 397145,
            "range": "± 13345",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/16",
            "value": 833938,
            "range": "± 35977",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/32",
            "value": 1604721,
            "range": "± 113066",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_connections/64",
            "value": 3009640,
            "range": "± 211697",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/2",
            "value": 83375,
            "range": "± 3662",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/5",
            "value": 95447,
            "range": "± 3407",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/10",
            "value": 113197,
            "range": "± 4675",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/50",
            "value": 229911,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/100",
            "value": 359252,
            "range": "± 6405",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip",
            "value": 120519,
            "range": "± 6465",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/2",
            "value": 212698,
            "range": "± 5170",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/4",
            "value": 395231,
            "range": "± 4581",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/8",
            "value": 715267,
            "range": "± 5939",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/16",
            "value": 1363052,
            "range": "± 53812",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/32",
            "value": 2677797,
            "range": "± 83869",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_connections/64",
            "value": 5318321,
            "range": "± 98944",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/2",
            "value": 144407,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/5",
            "value": 153553,
            "range": "± 3068",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/10",
            "value": 170462,
            "range": "± 3851",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/50",
            "value": 279128,
            "range": "± 5567",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/100",
            "value": 412837,
            "range": "± 6635",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip",
            "value": 65360,
            "range": "± 1309",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/2",
            "value": 134718,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/4",
            "value": 225424,
            "range": "± 5185",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/8",
            "value": 398124,
            "range": "± 10288",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/16",
            "value": 852123,
            "range": "± 17307",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/32",
            "value": 1611260,
            "range": "± 54160",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_connections/64",
            "value": 3146241,
            "range": "± 273342",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/2",
            "value": 85809,
            "range": "± 2626",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/5",
            "value": 98162,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/10",
            "value": 114444,
            "range": "± 3766",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/50",
            "value": 243224,
            "range": "± 2614",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/100",
            "value": 388568,
            "range": "± 3309",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 90263,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 11773,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 1163,
            "range": "± 116",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "00aeb4ed42cdb923c83f93ddd645983ac364599f",
          "message": "ci: bring back daily benchmarks (#777)\n\n* ci: bring back daily benchmarks\r\n\r\n* remove ugly spaces",
          "timestamp": "2022-05-20T16:30:34Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/00aeb4ed42cdb923c83f93ddd645983ac364599f"
        },
        "date": 1653094186849,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 191,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 207,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 158838,
            "range": "± 37828",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 3215436,
            "range": "± 196160",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1373575,
            "range": "± 41565",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 326002,
            "range": "± 18252",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 583238,
            "range": "± 34795",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1062886,
            "range": "± 69212",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2046614,
            "range": "± 118739",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 4049442,
            "range": "± 245011",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 8145913,
            "range": "± 438039",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 16354609,
            "range": "± 806349",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 33465868,
            "range": "± 1770954",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 66858737,
            "range": "± 4154070",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 135785165,
            "range": "± 7152798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 156905,
            "range": "± 24972",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 167273,
            "range": "± 14760",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 182580,
            "range": "± 14442",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 322068,
            "range": "± 16778",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 482950,
            "range": "± 20489",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 9757760,
            "range": "± 677452",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 23480311,
            "range": "± 1409828",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 48883278,
            "range": "± 2224537",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 244342319,
            "range": "± 5955547",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 485912659,
            "range": "± 11454339",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2520132,
            "range": "± 26214",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5894996,
            "range": "± 59098",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 11523912,
            "range": "± 75891",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 56601942,
            "range": "± 633720",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 112878658,
            "range": "± 741931",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 120758,
            "range": "± 8198",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2609610,
            "range": "± 79154",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1335795,
            "range": "± 22812",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 451604,
            "range": "± 85477",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 845932,
            "range": "± 132215",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1671448,
            "range": "± 174245",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 3346135,
            "range": "± 489127",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 6818650,
            "range": "± 795582",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 13648484,
            "range": "± 1414906",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 26766524,
            "range": "± 2911619",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 56929900,
            "range": "± 3499921",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 117590414,
            "range": "± 6195890",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 239688480,
            "range": "± 8918028",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 620844,
            "range": "± 101934",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 1322059,
            "range": "± 255474",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 2516877,
            "range": "± 269799",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 5589777,
            "range": "± 472790",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 11340802,
            "range": "± 849119",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 23394946,
            "range": "± 1740426",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 47580397,
            "range": "± 2739549",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 96174166,
            "range": "± 4938174",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 195867365,
            "range": "± 8419614",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 412497765,
            "range": "± 18660994",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 126352,
            "range": "± 9296",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 150966,
            "range": "± 14702",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 165242,
            "range": "± 12897",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 319416,
            "range": "± 215696",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 482596,
            "range": "± 40698",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 5380640,
            "range": "± 322498",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 19127165,
            "range": "± 1529367",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 39894187,
            "range": "± 2086766",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 244828069,
            "range": "± 7269949",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 484731444,
            "range": "± 11647259",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2490395,
            "range": "± 39392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5862944,
            "range": "± 47824",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 11465439,
            "range": "± 159086",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 56373197,
            "range": "± 357174",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 112836894,
            "range": "± 591256",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 149482,
            "range": "± 8450",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 3207518,
            "range": "± 149703",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1375398,
            "range": "± 35407",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 316685,
            "range": "± 23188",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 602563,
            "range": "± 27212",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1072964,
            "range": "± 62161",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2072961,
            "range": "± 143527",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 3885665,
            "range": "± 236002",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 7963615,
            "range": "± 486710",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 15488190,
            "range": "± 933521",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 32291878,
            "range": "± 2399838",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 64995387,
            "range": "± 3446014",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 128950824,
            "range": "± 7193187",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 156441,
            "range": "± 14433",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 173970,
            "range": "± 16905",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 181960,
            "range": "± 12703",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 334287,
            "range": "± 22063",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 502686,
            "range": "± 25465",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 6410540,
            "range": "± 312550",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 15752399,
            "range": "± 769370",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 43487049,
            "range": "± 2386074",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 224959817,
            "range": "± 5779007",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 491782054,
            "range": "± 9593040",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2518514,
            "range": "± 38130",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5885949,
            "range": "± 39483",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 11517779,
            "range": "± 106490",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 56549445,
            "range": "± 546184",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 112636742,
            "range": "± 775163",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 112030,
            "range": "± 11167",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2730720,
            "range": "± 118721",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1348716,
            "range": "± 39703",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 441851,
            "range": "± 61568",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 836653,
            "range": "± 74557",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1644154,
            "range": "± 206768",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 3330060,
            "range": "± 490438",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 6991632,
            "range": "± 922967",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 14219535,
            "range": "± 1633773",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 28210325,
            "range": "± 2406998",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 54304599,
            "range": "± 3450164",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 110838288,
            "range": "± 5851387",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 232509587,
            "range": "± 9304464",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 592957,
            "range": "± 98819",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 1323872,
            "range": "± 114593",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 2571310,
            "range": "± 232020",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 5268195,
            "range": "± 473915",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 10995523,
            "range": "± 1128434",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 22887530,
            "range": "± 1907911",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 44722266,
            "range": "± 3094033",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 92266168,
            "range": "± 5670059",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 183409584,
            "range": "± 11533896",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 394142092,
            "range": "± 17092145",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 136888,
            "range": "± 10635",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 141687,
            "range": "± 11307",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 166173,
            "range": "± 18868",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 315399,
            "range": "± 24609",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 494880,
            "range": "± 49375",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 5260875,
            "range": "± 167501",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 14378357,
            "range": "± 1162812",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 39061311,
            "range": "± 2165868",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 246133787,
            "range": "± 6688110",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 486586877,
            "range": "± 10959388",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2486814,
            "range": "± 45186",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5869202,
            "range": "± 47923",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 11451262,
            "range": "± 54336",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 56536666,
            "range": "± 320134",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 112439359,
            "range": "± 454688",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 154686,
            "range": "± 10958",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 8668,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4981,
            "range": "± 1147",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "00aeb4ed42cdb923c83f93ddd645983ac364599f",
          "message": "ci: bring back daily benchmarks (#777)\n\n* ci: bring back daily benchmarks\r\n\r\n* remove ugly spaces",
          "timestamp": "2022-05-20T16:30:34Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/00aeb4ed42cdb923c83f93ddd645983ac364599f"
        },
        "date": 1653180497247,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 160,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 216,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 162500,
            "range": "± 15498",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 2895363,
            "range": "± 189004",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1369425,
            "range": "± 30986",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 284063,
            "range": "± 33403",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 515109,
            "range": "± 42377",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 931759,
            "range": "± 48610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1836889,
            "range": "± 105191",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 3510621,
            "range": "± 179118",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 6884678,
            "range": "± 361072",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 14111524,
            "range": "± 854059",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 28235062,
            "range": "± 1586893",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 56656064,
            "range": "± 2912550",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 119729106,
            "range": "± 4618340",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 148613,
            "range": "± 11265",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 158009,
            "range": "± 28877",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 169212,
            "range": "± 14125",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 295111,
            "range": "± 22307",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 441036,
            "range": "± 62233",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 8101009,
            "range": "± 603332",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 19246070,
            "range": "± 1666299",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 42158707,
            "range": "± 2899546",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 219619488,
            "range": "± 8856513",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 451016605,
            "range": "± 21393387",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2507523,
            "range": "± 72995",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5912710,
            "range": "± 145807",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 11523784,
            "range": "± 114957",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 56620707,
            "range": "± 256550",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 112918634,
            "range": "± 977944",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 104453,
            "range": "± 9482",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2294645,
            "range": "± 216020",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1344680,
            "range": "± 20659",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 437714,
            "range": "± 65828",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 748859,
            "range": "± 67235",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1379870,
            "range": "± 212381",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 3030619,
            "range": "± 407851",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 6315195,
            "range": "± 848250",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 13746259,
            "range": "± 1754152",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 26444912,
            "range": "± 2232553",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 53585336,
            "range": "± 3983346",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 104187815,
            "range": "± 5575213",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 212230628,
            "range": "± 10597287",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 601489,
            "range": "± 61109",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 1264440,
            "range": "± 130745",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 2424074,
            "range": "± 247273",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4977923,
            "range": "± 504791",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 10745204,
            "range": "± 1224728",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 20487399,
            "range": "± 2153781",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 44898245,
            "range": "± 3655617",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 86270807,
            "range": "± 4001986",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 170032416,
            "range": "± 7706839",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 358356433,
            "range": "± 16565302",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 118875,
            "range": "± 14158",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 127795,
            "range": "± 11441",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 151860,
            "range": "± 17864",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 281395,
            "range": "± 92130",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 476016,
            "range": "± 72142",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 4873133,
            "range": "± 318439",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 19299085,
            "range": "± 1957508",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 36334496,
            "range": "± 2884090",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 258880829,
            "range": "± 8105791",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 493458070,
            "range": "± 15183324",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2504124,
            "range": "± 45375",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5867603,
            "range": "± 87773",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 11482941,
            "range": "± 160654",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 56603357,
            "range": "± 565600",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 113051802,
            "range": "± 751088",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 145586,
            "range": "± 18137",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2995161,
            "range": "± 150732",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1360926,
            "range": "± 24905",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 273600,
            "range": "± 116006",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 514377,
            "range": "± 45352",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 934495,
            "range": "± 40134",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1772830,
            "range": "± 97967",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 3383370,
            "range": "± 188247",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 6792899,
            "range": "± 379548",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 14431491,
            "range": "± 861354",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 29661141,
            "range": "± 1522131",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 60225726,
            "range": "± 2580938",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 110096046,
            "range": "± 5105850",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 163863,
            "range": "± 19013",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 168612,
            "range": "± 18056",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 172687,
            "range": "± 10858",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 293833,
            "range": "± 21086",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 436236,
            "range": "± 38067",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 5472067,
            "range": "± 297256",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 13903200,
            "range": "± 983635",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 36417528,
            "range": "± 2108548",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 212123224,
            "range": "± 10217272",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 448554662,
            "range": "± 17505593",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2525377,
            "range": "± 41849",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5895591,
            "range": "± 96375",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 11518498,
            "range": "± 93687",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 56564217,
            "range": "± 638046",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 112860902,
            "range": "± 845872",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 107480,
            "range": "± 14630",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2353029,
            "range": "± 125809",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1345780,
            "range": "± 41496",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 412023,
            "range": "± 51922",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 783647,
            "range": "± 84071",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1434485,
            "range": "± 172859",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 3126121,
            "range": "± 448795",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 5969605,
            "range": "± 782726",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 12660113,
            "range": "± 1240553",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 24201829,
            "range": "± 1795756",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 49238409,
            "range": "± 3468978",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 98944933,
            "range": "± 6864908",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 205500282,
            "range": "± 17592557",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 564116,
            "range": "± 74053",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 1146176,
            "range": "± 99158",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 2309571,
            "range": "± 200570",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4941560,
            "range": "± 437404",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 9779686,
            "range": "± 827956",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 21205359,
            "range": "± 2242184",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 40882863,
            "range": "± 3241641",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 80537221,
            "range": "± 5572306",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 169300901,
            "range": "± 9454467",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 365547087,
            "range": "± 18652735",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 115622,
            "range": "± 11169",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 129788,
            "range": "± 10448",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 150651,
            "range": "± 16557",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 279602,
            "range": "± 24258",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 518839,
            "range": "± 54717",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 5069412,
            "range": "± 301759",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 12489796,
            "range": "± 975718",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 36321585,
            "range": "± 2808800",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 220332562,
            "range": "± 9345934",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 486779991,
            "range": "± 37260462",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2510156,
            "range": "± 48012",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5895381,
            "range": "± 154159",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 11499579,
            "range": "± 96864",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 56587797,
            "range": "± 584499",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 112646107,
            "range": "± 776541",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 182934,
            "range": "± 31233",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 13285,
            "range": "± 4541",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 5931,
            "range": "± 1505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "00aeb4ed42cdb923c83f93ddd645983ac364599f",
          "message": "ci: bring back daily benchmarks (#777)\n\n* ci: bring back daily benchmarks\r\n\r\n* remove ugly spaces",
          "timestamp": "2022-05-20T16:30:34Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/00aeb4ed42cdb923c83f93ddd645983ac364599f"
        },
        "date": 1653266916557,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 179,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 209,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 120853,
            "range": "± 7771",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 3794999,
            "range": "± 200884",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1287389,
            "range": "± 73991",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 236861,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 440737,
            "range": "± 6985",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 793150,
            "range": "± 8577",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1509769,
            "range": "± 42507",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2958010,
            "range": "± 58380",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 5866379,
            "range": "± 162661",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 11749197,
            "range": "± 345364",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 24148110,
            "range": "± 702343",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 48349293,
            "range": "± 2142783",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 96965469,
            "range": "± 2478029",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 115649,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 119428,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 150916,
            "range": "± 9074",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 272609,
            "range": "± 8573",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 453950,
            "range": "± 33875",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 10365757,
            "range": "± 595388",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 26467559,
            "range": "± 1388869",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 53651217,
            "range": "± 1910433",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 245195629,
            "range": "± 5593007",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 487440673,
            "range": "± 10044395",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2377947,
            "range": "± 32052",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5636799,
            "range": "± 43504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 11115334,
            "range": "± 65466",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 54414650,
            "range": "± 181720",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 108304338,
            "range": "± 300592",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 79238,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2577141,
            "range": "± 89309",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1279911,
            "range": "± 38545",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 396410,
            "range": "± 44338",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 719493,
            "range": "± 52050",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1374923,
            "range": "± 138150",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2851981,
            "range": "± 384407",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 5536619,
            "range": "± 571809",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 11660913,
            "range": "± 1009776",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 23930434,
            "range": "± 1486819",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 48004793,
            "range": "± 2240790",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 97070451,
            "range": "± 2948359",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 201073521,
            "range": "± 3476494",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 528937,
            "range": "± 44114",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 1132645,
            "range": "± 116007",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 2192358,
            "range": "± 160286",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4664445,
            "range": "± 339225",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 9119858,
            "range": "± 591731",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 19178031,
            "range": "± 1130503",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 39728284,
            "range": "± 2339592",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 79516383,
            "range": "± 1954827",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 156285529,
            "range": "± 3684776",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 324519711,
            "range": "± 6604277",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 90725,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 109803,
            "range": "± 11085",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 127219,
            "range": "± 1661",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 261259,
            "range": "± 2136",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 427035,
            "range": "± 29881",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 5878236,
            "range": "± 235269",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 20487856,
            "range": "± 1938830",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 45640821,
            "range": "± 1700153",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 246602019,
            "range": "± 6292637",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 478583038,
            "range": "± 11590810",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2376591,
            "range": "± 21490",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5627143,
            "range": "± 52664",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 11083885,
            "range": "± 65110",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 54366974,
            "range": "± 218675",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 108086636,
            "range": "± 308788",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 117167,
            "range": "± 3049",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 3136000,
            "range": "± 92463",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1284606,
            "range": "± 42163",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 231946,
            "range": "± 4732",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 430031,
            "range": "± 4740",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 785134,
            "range": "± 10974",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1492782,
            "range": "± 65143",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2903707,
            "range": "± 60950",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 5725823,
            "range": "± 146211",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 11474225,
            "range": "± 432154",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 23069744,
            "range": "± 903355",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 46020165,
            "range": "± 1024374",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 95286914,
            "range": "± 3447751",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 115159,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 118533,
            "range": "± 4988",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 132222,
            "range": "± 1714",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 263205,
            "range": "± 9145",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 420225,
            "range": "± 13137",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 6777758,
            "range": "± 393479",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 16783204,
            "range": "± 1032886",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 41470964,
            "range": "± 1540490",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 222575902,
            "range": "± 5116455",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 484754386,
            "range": "± 13618805",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2375280,
            "range": "± 33928",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5630627,
            "range": "± 41638",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 11089083,
            "range": "± 77894",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 54379901,
            "range": "± 161240",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 108397251,
            "range": "± 417923",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 78487,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2668688,
            "range": "± 91152",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1270764,
            "range": "± 28754",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 380322,
            "range": "± 36546",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 713282,
            "range": "± 53869",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1327085,
            "range": "± 126713",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2720393,
            "range": "± 287886",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 5584287,
            "range": "± 635443",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 11969482,
            "range": "± 1102749",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 24207884,
            "range": "± 1252221",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 45713654,
            "range": "± 1756878",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 93904101,
            "range": "± 2474157",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 192328712,
            "range": "± 4818721",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 529534,
            "range": "± 51593",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 1108859,
            "range": "± 87444",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 2196671,
            "range": "± 186800",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4521147,
            "range": "± 334964",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 9133842,
            "range": "± 674344",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 19077529,
            "range": "± 1018912",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 38984917,
            "range": "± 2179093",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 77290268,
            "range": "± 1827406",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 154175338,
            "range": "± 3404160",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 326661209,
            "range": "± 8867776",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 96368,
            "range": "± 5518",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 107356,
            "range": "± 3174",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 125880,
            "range": "± 1773",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 263492,
            "range": "± 6762",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 423599,
            "range": "± 8837",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 5561332,
            "range": "± 252059",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 14961184,
            "range": "± 814410",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 43190884,
            "range": "± 1953234",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 243609062,
            "range": "± 7232511",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 471341539,
            "range": "± 9957043",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2362107,
            "range": "± 33690",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5653873,
            "range": "± 43315",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 11100521,
            "range": "± 57604",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 54335693,
            "range": "± 237532",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 108320338,
            "range": "± 395680",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 103886,
            "range": "± 2809",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 5312,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4788,
            "range": "± 658",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f2025ce16cc2de1a59941cc6dc59b811f4218147",
          "message": "chore(deps): bump Swatinem/rust-cache from 1.3.0 to 1.4.0 (#778)\n\nBumps [Swatinem/rust-cache](https://github.com/Swatinem/rust-cache) from 1.3.0 to 1.4.0.\r\n- [Release notes](https://github.com/Swatinem/rust-cache/releases)\r\n- [Changelog](https://github.com/Swatinem/rust-cache/blob/v1/CHANGELOG.md)\r\n- [Commits](https://github.com/Swatinem/rust-cache/compare/v1.3.0...v1.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Swatinem/rust-cache\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-05-23T13:04:29Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/f2025ce16cc2de1a59941cc6dc59b811f4218147"
        },
        "date": 1653353069590,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 149,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 180,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 96469,
            "range": "± 3810",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 2581035,
            "range": "± 75826",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1168613,
            "range": "± 36424",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 201466,
            "range": "± 2581",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 373303,
            "range": "± 14411",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 675465,
            "range": "± 7942",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1292001,
            "range": "± 36848",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2536712,
            "range": "± 63859",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 5028834,
            "range": "± 228657",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 10035967,
            "range": "± 321199",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 20082905,
            "range": "± 578988",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 40895763,
            "range": "± 1200600",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 83173308,
            "range": "± 2289191",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 95857,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 100167,
            "range": "± 1630",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 112268,
            "range": "± 1162",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 227351,
            "range": "± 8586",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 365080,
            "range": "± 9160",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 9852036,
            "range": "± 338402",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 23531290,
            "range": "± 772328",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 45647040,
            "range": "± 972062",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 204895209,
            "range": "± 3157460",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 409978262,
            "range": "± 3008741",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2328173,
            "range": "± 60685",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5537731,
            "range": "± 80138",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 10869116,
            "range": "± 59370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 53559189,
            "range": "± 80143",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 106802751,
            "range": "± 331051",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 67125,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2016746,
            "range": "± 8471",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1172262,
            "range": "± 91871",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 345525,
            "range": "± 32203",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 612819,
            "range": "± 69167",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1156295,
            "range": "± 119495",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2557023,
            "range": "± 298004",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 4919314,
            "range": "± 460929",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 10006995,
            "range": "± 756762",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 20669113,
            "range": "± 1190663",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 41260228,
            "range": "± 2072699",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 83836824,
            "range": "± 2284447",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 172795939,
            "range": "± 3275676",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 454884,
            "range": "± 32544",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 973881,
            "range": "± 55265",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 1928377,
            "range": "± 140267",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4084818,
            "range": "± 349607",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 8236295,
            "range": "± 409925",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 16902966,
            "range": "± 732879",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 34417539,
            "range": "± 1278740",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 68253069,
            "range": "± 1839701",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 136889182,
            "range": "± 2809113",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 278799979,
            "range": "± 5683926",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 75663,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 89272,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 106095,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 219527,
            "range": "± 1961",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 353601,
            "range": "± 2788",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 4322088,
            "range": "± 47437",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 15406858,
            "range": "± 501751",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 30722915,
            "range": "± 1210774",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 200916303,
            "range": "± 6557830",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 396346849,
            "range": "± 7673568",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2343293,
            "range": "± 43627",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5540204,
            "range": "± 38678",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 10877809,
            "range": "± 96758",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 53545716,
            "range": "± 227468",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 106806608,
            "range": "± 360154",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 96028,
            "range": "± 2809",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2583722,
            "range": "± 31011",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1167626,
            "range": "± 57550",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 200111,
            "range": "± 3605",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 368777,
            "range": "± 5575",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 665884,
            "range": "± 9542",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1268228,
            "range": "± 17065",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2472079,
            "range": "± 82817",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 4929135,
            "range": "± 81665",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 9725990,
            "range": "± 307530",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 19603600,
            "range": "± 554070",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 39583705,
            "range": "± 903245",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 80425763,
            "range": "± 2078868",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 95636,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 99978,
            "range": "± 3764",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 111755,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 226535,
            "range": "± 8769",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 368173,
            "range": "± 10328",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 5213711,
            "range": "± 129529",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 13732524,
            "range": "± 685645",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 35307349,
            "range": "± 855117",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 188313647,
            "range": "± 3772716",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 414305966,
            "range": "± 5478647",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2317409,
            "range": "± 46630",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5530795,
            "range": "± 40528",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 10874238,
            "range": "± 102630",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 53524927,
            "range": "± 393514",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 106752905,
            "range": "± 227207",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 67615,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2106710,
            "range": "± 17628",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1153961,
            "range": "± 57921",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 344819,
            "range": "± 76101",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 611246,
            "range": "± 51294",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1141683,
            "range": "± 136527",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2313071,
            "range": "± 285857",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 4703325,
            "range": "± 439930",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 9739724,
            "range": "± 692668",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 20858292,
            "range": "± 1169779",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 40652722,
            "range": "± 2544014",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 82242349,
            "range": "± 2015680",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 168168897,
            "range": "± 3555169",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 448533,
            "range": "± 37383",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 964471,
            "range": "± 70999",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 1899177,
            "range": "± 147601",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4093690,
            "range": "± 380272",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 8084093,
            "range": "± 538662",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 16396909,
            "range": "± 642211",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 33993135,
            "range": "± 1382032",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 67245757,
            "range": "± 2497930",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 135204125,
            "range": "± 2449468",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 279599374,
            "range": "± 12626163",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 76562,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 91021,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 105654,
            "range": "± 2086",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 218400,
            "range": "± 2137",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 351163,
            "range": "± 2713",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 4592544,
            "range": "± 88649",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 12377908,
            "range": "± 272436",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 35303894,
            "range": "± 1134835",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 208099459,
            "range": "± 3641121",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 396212227,
            "range": "± 6843891",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2346583,
            "range": "± 46554",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5538569,
            "range": "± 32029",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 10879439,
            "range": "± 69247",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 53564681,
            "range": "± 262920",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 106759151,
            "range": "± 386168",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 86546,
            "range": "± 3774",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4182,
            "range": "± 824",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4115,
            "range": "± 615",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f2025ce16cc2de1a59941cc6dc59b811f4218147",
          "message": "chore(deps): bump Swatinem/rust-cache from 1.3.0 to 1.4.0 (#778)\n\nBumps [Swatinem/rust-cache](https://github.com/Swatinem/rust-cache) from 1.3.0 to 1.4.0.\r\n- [Release notes](https://github.com/Swatinem/rust-cache/releases)\r\n- [Changelog](https://github.com/Swatinem/rust-cache/blob/v1/CHANGELOG.md)\r\n- [Commits](https://github.com/Swatinem/rust-cache/compare/v1.3.0...v1.4.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: Swatinem/rust-cache\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-05-23T13:04:29Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/f2025ce16cc2de1a59941cc6dc59b811f4218147"
        },
        "date": 1653439485421,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 160,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 98116,
            "range": "± 4806",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 2797052,
            "range": "± 234054",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1178826,
            "range": "± 22139",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 203306,
            "range": "± 4180",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 378654,
            "range": "± 4537",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 687809,
            "range": "± 9005",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1325226,
            "range": "± 41607",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2511353,
            "range": "± 92736",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 4857094,
            "range": "± 133014",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 10212535,
            "range": "± 291650",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 20840616,
            "range": "± 519908",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 40144461,
            "range": "± 1140210",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 83016528,
            "range": "± 2785176",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 98642,
            "range": "± 2422",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 104368,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 116476,
            "range": "± 5370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 238666,
            "range": "± 11241",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 370701,
            "range": "± 13865",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 7964302,
            "range": "± 308555",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 24104208,
            "range": "± 996673",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 45951774,
            "range": "± 1589572",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 217410670,
            "range": "± 6702253",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 419628181,
            "range": "± 14429480",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2325538,
            "range": "± 12680",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5548570,
            "range": "± 17369",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 10944779,
            "range": "± 61450",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 53627588,
            "range": "± 463868",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 106993191,
            "range": "± 211737",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 70242,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2240259,
            "range": "± 55299",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1181095,
            "range": "± 30595",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 320951,
            "range": "± 35703",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 637813,
            "range": "± 42505",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1202225,
            "range": "± 146829",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2503779,
            "range": "± 267286",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 4934609,
            "range": "± 481693",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 10432658,
            "range": "± 1041438",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 22017288,
            "range": "± 1193988",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 43539370,
            "range": "± 1657527",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 88818313,
            "range": "± 2130506",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 181315867,
            "range": "± 4044973",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 469420,
            "range": "± 87811",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 997860,
            "range": "± 78111",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 1970170,
            "range": "± 144056",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4253838,
            "range": "± 359250",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 8341929,
            "range": "± 490374",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 17461757,
            "range": "± 865053",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 35560924,
            "range": "± 1695564",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 71440201,
            "range": "± 4141267",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 144706124,
            "range": "± 3632724",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 309584186,
            "range": "± 18225740",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 83396,
            "range": "± 2530",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 95304,
            "range": "± 4024",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 110640,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 225796,
            "range": "± 7654",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 362269,
            "range": "± 11784",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 5390089,
            "range": "± 285630",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 20651046,
            "range": "± 701370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 38170567,
            "range": "± 1573067",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 219257993,
            "range": "± 7917956",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 417441415,
            "range": "± 29031381",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2339931,
            "range": "± 23362",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5570042,
            "range": "± 24316",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 10958557,
            "range": "± 35064",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 53688457,
            "range": "± 435842",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 107005310,
            "range": "± 426281",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 97151,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2762182,
            "range": "± 115611",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1183749,
            "range": "± 29403",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 194840,
            "range": "± 4879",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 376803,
            "range": "± 6879",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 681660,
            "range": "± 16426",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1291697,
            "range": "± 42349",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2572903,
            "range": "± 93455",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 5023119,
            "range": "± 92157",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 10076050,
            "range": "± 256176",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 19391664,
            "range": "± 608253",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 41730849,
            "range": "± 1165921",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 84081102,
            "range": "± 2037569",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 97446,
            "range": "± 8663",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 102484,
            "range": "± 4682",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 116109,
            "range": "± 5001",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 233491,
            "range": "± 11273",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 373223,
            "range": "± 22481",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 5932881,
            "range": "± 175176",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 15592922,
            "range": "± 422424",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 38016448,
            "range": "± 1591368",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 191441228,
            "range": "± 6657626",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 408536051,
            "range": "± 12949952",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2325659,
            "range": "± 31088",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5561421,
            "range": "± 23274",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 10935499,
            "range": "± 42741",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 53679416,
            "range": "± 148357",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 106974153,
            "range": "± 544524",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 71297,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2399371,
            "range": "± 73993",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1205225,
            "range": "± 46832",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 344476,
            "range": "± 40522",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 629622,
            "range": "± 70606",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1180160,
            "range": "± 107397",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2481438,
            "range": "± 295128",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 4976575,
            "range": "± 416255",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 10572073,
            "range": "± 924335",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 21703108,
            "range": "± 1197403",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 42478592,
            "range": "± 1686451",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 87290840,
            "range": "± 2211741",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 175836794,
            "range": "± 4064721",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 460317,
            "range": "± 26734",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 991012,
            "range": "± 57981",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 1948082,
            "range": "± 141064",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4207738,
            "range": "± 298501",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 8191407,
            "range": "± 522603",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 17304956,
            "range": "± 837355",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 35025016,
            "range": "± 1316952",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 69227774,
            "range": "± 1904360",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 140715519,
            "range": "± 12542911",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 289924755,
            "range": "± 5397937",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 80943,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 94566,
            "range": "± 2895",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 109669,
            "range": "± 5252",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 220011,
            "range": "± 7044",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 356512,
            "range": "± 20390",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 5142078,
            "range": "± 201093",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 14175700,
            "range": "± 474376",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 39837879,
            "range": "± 1007308",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 210877760,
            "range": "± 7549391",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 412053241,
            "range": "± 10990832",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2342979,
            "range": "± 11149",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5552912,
            "range": "± 26292",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 10925739,
            "range": "± 31116",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 53687763,
            "range": "± 143523",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 106982416,
            "range": "± 388302",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 93797,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4648,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4444,
            "range": "± 596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Polakov",
            "username": "polachok",
            "email": "polachok@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "47d36b9b1b886422717a341086978ca10cdf7cad",
          "message": "fix: skip leading whitespace (#783)",
          "timestamp": "2022-05-25T21:20:32Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/47d36b9b1b886422717a341086978ca10cdf7cad"
        },
        "date": 1653525908696,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 146,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 168,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 96386,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 3152107,
            "range": "± 95774",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1167035,
            "range": "± 156653",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 204565,
            "range": "± 5253",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 376573,
            "range": "± 6249",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 681340,
            "range": "± 8345",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1300965,
            "range": "± 37804",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2555340,
            "range": "± 92858",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 5073921,
            "range": "± 178758",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 10157713,
            "range": "± 244872",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 20333613,
            "range": "± 566651",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 41563320,
            "range": "± 1332151",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 85019976,
            "range": "± 2398528",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 96872,
            "range": "± 11698",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 101143,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 113038,
            "range": "± 1583",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 230309,
            "range": "± 8982",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 368660,
            "range": "± 11447",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 9056743,
            "range": "± 386246",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 23266981,
            "range": "± 475624",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 45345647,
            "range": "± 1628101",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 209329553,
            "range": "± 3115619",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 410582241,
            "range": "± 2308927",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2414449,
            "range": "± 60815",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5544244,
            "range": "± 27631",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 10892531,
            "range": "± 55174",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 53569797,
            "range": "± 96109",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 106827290,
            "range": "± 193778",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 68791,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2096371,
            "range": "± 20055",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1175461,
            "range": "± 50671",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 346619,
            "range": "± 72582",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 626129,
            "range": "± 81323",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1192592,
            "range": "± 150125",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2486500,
            "range": "± 260332",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 5051761,
            "range": "± 525883",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 10351359,
            "range": "± 955689",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 23335232,
            "range": "± 1869256",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 46139610,
            "range": "± 2206043",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 94132592,
            "range": "± 3340602",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 194859367,
            "range": "± 4658246",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 487055,
            "range": "± 40980",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 1033645,
            "range": "± 92625",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 2154211,
            "range": "± 189510",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4540286,
            "range": "± 450037",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 8972371,
            "range": "± 666639",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 18812077,
            "range": "± 1100458",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 38280763,
            "range": "± 2261603",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 76533225,
            "range": "± 2098980",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 154633417,
            "range": "± 4435087",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 317473588,
            "range": "± 13773011",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 85300,
            "range": "± 6247",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 97446,
            "range": "± 3918",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 111931,
            "range": "± 4719",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 228900,
            "range": "± 6495",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 365642,
            "range": "± 19269",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 5014965,
            "range": "± 273896",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 17928434,
            "range": "± 1285539",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 33184910,
            "range": "± 1299152",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 204441470,
            "range": "± 10293652",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 375829414,
            "range": "± 10412567",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2353918,
            "range": "± 30276",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5576142,
            "range": "± 38205",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 10984539,
            "range": "± 43314",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 53607874,
            "range": "± 67011",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 106841327,
            "range": "± 464869",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 98822,
            "range": "± 3773",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2623377,
            "range": "± 69849",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1197838,
            "range": "± 24416",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 206039,
            "range": "± 8955",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 380280,
            "range": "± 10936",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 693307,
            "range": "± 33258",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1319853,
            "range": "± 33451",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2634749,
            "range": "± 117205",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 5254558,
            "range": "± 166863",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 10731763,
            "range": "± 391912",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 21708796,
            "range": "± 818384",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 42435161,
            "range": "± 1263406",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 88512414,
            "range": "± 1898488",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 101681,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 109096,
            "range": "± 2652",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 119103,
            "range": "± 3383",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 241063,
            "range": "± 8234",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 379062,
            "range": "± 10761",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 5828114,
            "range": "± 115460",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 14847203,
            "range": "± 213922",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 36982895,
            "range": "± 873134",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 192551691,
            "range": "± 2916969",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 411371258,
            "range": "± 3421021",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2322798,
            "range": "± 20204",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5550751,
            "range": "± 15471",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 10892780,
            "range": "± 31161",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 53548745,
            "range": "± 56368",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 106759440,
            "range": "± 78304",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 77178,
            "range": "± 6026",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2167034,
            "range": "± 39972",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1193729,
            "range": "± 46889",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 345084,
            "range": "± 30166",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 657590,
            "range": "± 61260",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1255208,
            "range": "± 117888",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2523653,
            "range": "± 303978",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 5284363,
            "range": "± 499261",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 11247119,
            "range": "± 760313",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 23439008,
            "range": "± 1168732",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 45325147,
            "range": "± 1931774",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 93441328,
            "range": "± 3040998",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 189276982,
            "range": "± 4640101",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 481300,
            "range": "± 37677",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 1032089,
            "range": "± 56411",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 2094490,
            "range": "± 199620",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4420859,
            "range": "± 349560",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 8884419,
            "range": "± 568610",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 18605648,
            "range": "± 1384392",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 38220709,
            "range": "± 2255051",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 74916801,
            "range": "± 8908748",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 144664536,
            "range": "± 5803022",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 302882285,
            "range": "± 9105821",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 82386,
            "range": "± 4192",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 96876,
            "range": "± 4481",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 114085,
            "range": "± 6409",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 229771,
            "range": "± 6965",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 367721,
            "range": "± 7760",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 4964132,
            "range": "± 308352",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 13276377,
            "range": "± 471415",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 39340829,
            "range": "± 1635539",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 209337793,
            "range": "± 4759059",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 399607224,
            "range": "± 6856695",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2356495,
            "range": "± 28719",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5574307,
            "range": "± 35354",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 10960881,
            "range": "± 42199",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 53622155,
            "range": "± 62007",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 106847809,
            "range": "± 98879",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 95091,
            "range": "± 5518",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4768,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4242,
            "range": "± 2107",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Polakov",
            "username": "polachok",
            "email": "polachok@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "47d36b9b1b886422717a341086978ca10cdf7cad",
          "message": "fix: skip leading whitespace (#783)",
          "timestamp": "2022-05-25T21:20:32Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/47d36b9b1b886422717a341086978ca10cdf7cad"
        },
        "date": 1653612318291,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 170,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 104171,
            "range": "± 9985",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 3225687,
            "range": "± 105981",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1189054,
            "range": "± 14188",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 203535,
            "range": "± 3139",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 380920,
            "range": "± 7695",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 687505,
            "range": "± 10322",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1312139,
            "range": "± 40220",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2600683,
            "range": "± 121798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 5236166,
            "range": "± 132126",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 10377353,
            "range": "± 400919",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 21230063,
            "range": "± 656642",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 43638169,
            "range": "± 1535061",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 88424206,
            "range": "± 17276191",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 99670,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 103778,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 115755,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 226293,
            "range": "± 9165",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 377758,
            "range": "± 12191",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 8544225,
            "range": "± 236107",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 21560961,
            "range": "± 899316",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 45920066,
            "range": "± 1576696",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 210826510,
            "range": "± 2283013",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 421535366,
            "range": "± 4234241",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2324534,
            "range": "± 9164",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5550119,
            "range": "± 16363",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 10950701,
            "range": "± 38571",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 53621386,
            "range": "± 49833",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 106854464,
            "range": "± 114094",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 70170,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2109565,
            "range": "± 17533",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1198314,
            "range": "± 41229",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 344029,
            "range": "± 54469",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 622118,
            "range": "± 51812",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1177220,
            "range": "± 134169",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2530226,
            "range": "± 309955",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 5022093,
            "range": "± 434693",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 10147419,
            "range": "± 841032",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 21772527,
            "range": "± 1188370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 42922987,
            "range": "± 2130685",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 87589071,
            "range": "± 1655792",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 182130982,
            "range": "± 5290731",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 472126,
            "range": "± 86529",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 992960,
            "range": "± 187249",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 1968020,
            "range": "± 120715",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4193782,
            "range": "± 373729",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 8457062,
            "range": "± 631072",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 17273509,
            "range": "± 880156",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 35422978,
            "range": "± 3463354",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 70638151,
            "range": "± 1879818",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 144914288,
            "range": "± 3641606",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 293628227,
            "range": "± 7247159",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 85184,
            "range": "± 3357",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 97902,
            "range": "± 3515",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 112105,
            "range": "± 1796",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 224086,
            "range": "± 6023",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 358168,
            "range": "± 7157",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 5212342,
            "range": "± 176113",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 17734202,
            "range": "± 1133616",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 35108872,
            "range": "± 1111217",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 208683132,
            "range": "± 8543679",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 414612366,
            "range": "± 7041010",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2351691,
            "range": "± 8402",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5574484,
            "range": "± 26045",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 11042040,
            "range": "± 22392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 53643733,
            "range": "± 411129",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 106907680,
            "range": "± 107215",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 99872,
            "range": "± 3191",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2471347,
            "range": "± 41296",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1184082,
            "range": "± 12295",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 199581,
            "range": "± 2699",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 372798,
            "range": "± 7390",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 673251,
            "range": "± 26701",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1291969,
            "range": "± 36088",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2539084,
            "range": "± 135621",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 4937198,
            "range": "± 138242",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 10018417,
            "range": "± 296692",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 19968211,
            "range": "± 568750",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 41369023,
            "range": "± 1198355",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 83654101,
            "range": "± 2235973",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 100281,
            "range": "± 2078",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 102458,
            "range": "± 1536",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 114912,
            "range": "± 1650",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 229681,
            "range": "± 10568",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 375833,
            "range": "± 12158",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 5891140,
            "range": "± 105539",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 15317412,
            "range": "± 272528",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 37232150,
            "range": "± 832082",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 196951562,
            "range": "± 2458640",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 429409045,
            "range": "± 7734633",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2327480,
            "range": "± 9955",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5588012,
            "range": "± 20459",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 10979325,
            "range": "± 34257",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 53630962,
            "range": "± 106817",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 106849621,
            "range": "± 78149",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 71270,
            "range": "± 1844",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2222845,
            "range": "± 15366",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1213768,
            "range": "± 34144",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 344111,
            "range": "± 29248",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 624917,
            "range": "± 71561",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1172736,
            "range": "± 114219",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2506832,
            "range": "± 269411",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 4858402,
            "range": "± 484640",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 10067482,
            "range": "± 931415",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 21183390,
            "range": "± 1352741",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 41834359,
            "range": "± 1507749",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 84681703,
            "range": "± 2166004",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 172385488,
            "range": "± 3607413",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 462992,
            "range": "± 51982",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 980506,
            "range": "± 54363",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 1934649,
            "range": "± 136486",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4162805,
            "range": "± 406134",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 8222175,
            "range": "± 512882",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 16964477,
            "range": "± 1099539",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 34672610,
            "range": "± 1124902",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 68935861,
            "range": "± 10298303",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 139844427,
            "range": "± 2526767",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 288801314,
            "range": "± 5310452",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 80144,
            "range": "± 3269",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 93796,
            "range": "± 2270",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 110099,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 222932,
            "range": "± 3785",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 355488,
            "range": "± 4278",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 4727873,
            "range": "± 187788",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 13964206,
            "range": "± 400518",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 37663941,
            "range": "± 781770",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 213837003,
            "range": "± 3930356",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 414977962,
            "range": "± 6686230",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2346664,
            "range": "± 13141",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5566917,
            "range": "± 19397",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 10930571,
            "range": "± 50200",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 53598320,
            "range": "± 43620",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 106865724,
            "range": "± 220086",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 92589,
            "range": "± 2786",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4843,
            "range": "± 898",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 4431,
            "range": "± 1029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexandru Vasile",
            "username": "lexnv",
            "email": "60601340+lexnv@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9fe25b1cf24a3bd6eba222a96ea1d9ab6523a80c",
          "message": "Implement `ping-pong` for WebSocket server (#782)\n\n* ws-server: Implement `ping-ping`\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Set builder's ping_interval\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Handle just `ping` frames\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Simplify `select`\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* Use `futures_util::select` instead of `select!` macro\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Avoid pinning the delay\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Log when a `Pong` frame is received\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>\r\n\r\n* ws-server: Use tokio for submitting pings\r\n\r\nSigned-off-by: Alexandru Vasile <alexandru.vasile@parity.io>",
          "timestamp": "2022-05-27T14:30:59Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/9fe25b1cf24a3bd6eba222a96ea1d9ab6523a80c"
        },
        "date": 1653698610088,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_v2_array_ref",
            "value": 128,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_v2_vec",
            "value": 151,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 94908,
            "range": "± 4263",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 2886445,
            "range": "± 162795",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1215992,
            "range": "± 64462",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 202326,
            "range": "± 6273",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 382586,
            "range": "± 27442",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 657190,
            "range": "± 8050",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 1257421,
            "range": "± 45668",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 2460863,
            "range": "± 104595",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 4875718,
            "range": "± 250196",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 9725662,
            "range": "± 291095",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 19483771,
            "range": "± 572835",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 39709530,
            "range": "± 952551",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 80654168,
            "range": "± 2574841",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 98190,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 102723,
            "range": "± 1535",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 114954,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 234620,
            "range": "± 10700",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 341799,
            "range": "± 14176",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/2",
            "value": 8880612,
            "range": "± 215741",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/5",
            "value": 21099512,
            "range": "± 700903",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/10",
            "value": 41674472,
            "range": "± 1556268",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/50",
            "value": 191523437,
            "range": "± 6247915",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/memory_intense/100",
            "value": 378449600,
            "range": "± 7350659",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/2",
            "value": 2397494,
            "range": "± 56216",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/5",
            "value": 5605014,
            "range": "± 77896",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/10",
            "value": 10974152,
            "range": "± 85572",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/50",
            "value": 53960056,
            "range": "± 261322",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/slow_call/100",
            "value": 107399095,
            "range": "± 380839",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 70099,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 2050118,
            "range": "± 53646",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1211264,
            "range": "± 79203",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/2",
            "value": 325662,
            "range": "± 46243",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/4",
            "value": 605888,
            "range": "± 82773",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/8",
            "value": 1217024,
            "range": "± 151531",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/16",
            "value": 2514320,
            "range": "± 304209",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/32",
            "value": 5022596,
            "range": "± 591333",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/64",
            "value": 10531524,
            "range": "± 927889",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/128",
            "value": 20673329,
            "range": "± 1190177",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/256",
            "value": 41927363,
            "range": "± 1690589",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/512",
            "value": 86688638,
            "range": "± 2968460",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/1024",
            "value": 177483752,
            "range": "± 6176645",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/2",
            "value": 468177,
            "range": "± 74944",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/4",
            "value": 1001413,
            "range": "± 111159",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/8",
            "value": 1928649,
            "range": "± 176581",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 4295527,
            "range": "± 317086",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 8091458,
            "range": "± 638537",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 16750444,
            "range": "± 1015799",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 35224637,
            "range": "± 1256815",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 69927167,
            "range": "± 2130390",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 142765780,
            "range": "± 2735694",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 303274320,
            "range": "± 6672041",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 79956,
            "range": "± 2048",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 95227,
            "range": "± 3211",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 110611,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 224982,
            "range": "± 8413",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 340883,
            "range": "± 2531",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/2",
            "value": 4339408,
            "range": "± 69232",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/5",
            "value": 16781887,
            "range": "± 499172",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/10",
            "value": 33570300,
            "range": "± 915396",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/50",
            "value": 194427976,
            "range": "± 2042432",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/memory_intense/100",
            "value": 370744794,
            "range": "± 8903608",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/2",
            "value": 2351389,
            "range": "± 34922",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/5",
            "value": 5619556,
            "range": "± 52056",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/10",
            "value": 10989497,
            "range": "± 74829",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/50",
            "value": 53783497,
            "range": "± 189489",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/slow_call/100",
            "value": 107221143,
            "range": "± 416493",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 93911,
            "range": "± 2441",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 2419665,
            "range": "± 65475",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1233799,
            "range": "± 62610",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 183402,
            "range": "± 2611",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 355407,
            "range": "± 10626",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 647291,
            "range": "± 5831",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 1292859,
            "range": "± 34793",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 2410325,
            "range": "± 103312",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 4729149,
            "range": "± 144081",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 9442341,
            "range": "± 198021",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 19286541,
            "range": "± 829020",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 38906981,
            "range": "± 1152393",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 77597658,
            "range": "± 1860827",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 97030,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 102178,
            "range": "± 1028",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 114427,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 236500,
            "range": "± 9135",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 369567,
            "range": "± 18263",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/2",
            "value": 4717447,
            "range": "± 83403",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/5",
            "value": 12675709,
            "range": "± 421149",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/10",
            "value": 33015817,
            "range": "± 745631",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/50",
            "value": 174812494,
            "range": "± 4407476",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/memory_intense/100",
            "value": 378058340,
            "range": "± 4270794",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/2",
            "value": 2388427,
            "range": "± 52785",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/5",
            "value": 5545696,
            "range": "± 77468",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/10",
            "value": 10926122,
            "range": "± 71006",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/50",
            "value": 53912584,
            "range": "± 519962",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/slow_call/100",
            "value": 107423610,
            "range": "± 946012",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 71064,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 2019944,
            "range": "± 47590",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1236932,
            "range": "± 65044",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/2",
            "value": 311601,
            "range": "± 72432",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/4",
            "value": 570350,
            "range": "± 46143",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/8",
            "value": 1137605,
            "range": "± 117388",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/16",
            "value": 2442193,
            "range": "± 254147",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/32",
            "value": 4988239,
            "range": "± 474686",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/64",
            "value": 9676040,
            "range": "± 928673",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/128",
            "value": 21047585,
            "range": "± 1388333",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/256",
            "value": 41607212,
            "range": "± 1788689",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/512",
            "value": 84381753,
            "range": "± 2100343",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/1024",
            "value": 172006154,
            "range": "± 2492793",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/2",
            "value": 461258,
            "range": "± 36884",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/4",
            "value": 991054,
            "range": "± 50940",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/8",
            "value": 1849269,
            "range": "± 133602",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 4106974,
            "range": "± 308205",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 8245130,
            "range": "± 429928",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 16703976,
            "range": "± 689374",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 34697427,
            "range": "± 1405533",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 68026179,
            "range": "± 2006572",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 138138491,
            "range": "± 2865449",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 286569092,
            "range": "± 5000979",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 79557,
            "range": "± 1868",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 95220,
            "range": "± 1234",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 109958,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 212387,
            "range": "± 3355",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 336934,
            "range": "± 8606",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/2",
            "value": 4359307,
            "range": "± 99541",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/5",
            "value": 11413504,
            "range": "± 214650",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/10",
            "value": 33739607,
            "range": "± 889683",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/50",
            "value": 192164302,
            "range": "± 2441793",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/memory_intense/100",
            "value": 350384722,
            "range": "± 13638927",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/2",
            "value": 2417235,
            "range": "± 47347",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/5",
            "value": 5605288,
            "range": "± 67088",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/10",
            "value": 10963233,
            "range": "± 74761",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/50",
            "value": 53899353,
            "range": "± 252328",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/slow_call/100",
            "value": 107351036,
            "range": "± 526608",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 89448,
            "range": "± 2778",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 4328,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 3526,
            "range": "± 689",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}