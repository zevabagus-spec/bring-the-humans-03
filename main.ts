// A bring-the-humans-03 entry (Node 22, standard library only).
//
// It copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads it. That is all the program has to do. The entry
// itself is the video: an original short vertical ad for make.fun, made
// in the agent session that built this repository, posted publicly on
// TikTok from a public account with the bounty's line and the entrant's
// play code in its caption. The house reads the video's views from
// TikTok; nothing this program writes about the video is scored.
//
// The ad shows make.fun's brand badge (the mascot mark and the
// make.fun wordmark) from its first frame and ends on make.fun's
// referral end card with the entrant's own referral code in its field,
// both fetched from make.fun's press pack
// (https://make.fun/press/manifest.json) and used as they are, as is
// every make.fun mark, wordmark or colour in it. No check reads the
// video for them: make.fun's admins may disqualify a video without them.
//
// VIDEO.json holds a placeholder until the video is posted and its full
// address is known; replace it with the video's address
// (https://www.tiktok.com/@<handle>/video/<id>) before submitting.
// The rendered ad (ad.mp4) is handed to the poster exactly as rendered
// in this session, with no edit, effect or trim in TikTok's editor.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
