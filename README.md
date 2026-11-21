# The World in One Day — Friday 20 November 2026

[![News Image 20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![Rank](https://make.fun/badge/news-image-20261120/Noman7860000/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/Noman7860000/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

A newspaper front page for Friday 20 November 2026: six illustrated panels,
each telling one verified story from that day, readable from the image alone.
Every illustration was drawn from scratch with shapes and text — no photos,
no copied artwork, no network fetches.

**How it works:** `main.ts` (Node 22, standard library only) copies the
finished `entry.png` beside it into the output directory as `entry.png`,
then verifies the copy landed whole (same byte count, non-empty, under the
1 MiB limit). Two runs write byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The six stories

1. **KYIV BRIDGES STRUCK** — Russia's overnight missile-and-drone barrage
   hits three bridges over the Dnipro in Kyiv; eight people killed and 28
   injured across Ukraine.
   Source: https://srnnews.com/fire-broke-out-in-ukraines-kyiv-after-missile-strike-mayor-says/
2. **POLAND AIRSPACE BREACHED** — Two Russian missiles and a jet-powered
   drone cross into Poland during the attack on Ukraine; Warsaw calls it a
   provocation and asks NATO for more air defence.
   Source: https://www.europesays.com/poland/38733/
3. **ASIAN MARKETS PLUNGE** — The Nikkei falls 4.8%, the Kospi 5% and
   Taiwan's Taiex 6% on Friday as the AI sell-off deepens; Asia heads for
   its worst week since 2020.
   Sources: https://oneturn.news/news/ and
   https://khelja.in/asian-stock-markets-crash-kospi-plunges-4-7-nikkei-tumbles-4-8-as-ai-selloff-deepens-despite-anthropics-81-billion-ipo/
4. **ESTONIA SHUTS RUSSIA BORDER** — Estonia announces its road border
   crossings with Russia will close from 1 December for at least six months;
   Moscow calls it a new "Iron Curtain".
   Source: https://www.europesays.com/russia/92440/
5. **EU-UK SUMMIT IN BRUSSELS** — The second post-Brexit EU-UK summit seals
   deals on food, carbon markets and a youth-mobility scheme for up to
   100,000 young people each way; von der Leyen calls it a "turning point".
   Sources: https://www.europesays.com/europe/186356/ and
   https://www.consilium.europa.eu/en/press/press-releases/2026/11/20/joint-statement-eu-united-kingdom-summit-20-november-2026/pdf/
6. **COP31 FINAL DAY** — The Antalya climate talks reach their Friday
   deadline with a slimmed-down draft that drops all fossil-fuel phase-out
   language and admits warming will overshoot 1.5°C.
   Source: https://news.un.org/en/story/2026/11/1168839

## Entry details

- Image: `entry.png`, 1024×1024 PNG, under 1 MiB
- Program: `main.ts` (Node 22, stdlib only, no network)
- Competition: https://make.fun/bounty/news-image-20261120
- Referral: https://make.fun/r/9y40b2n3
