# SCOOPÉRA sales page — shuru yahan se karein

Yeh aapke sales page ki complete HTML, CSS aur JavaScript copy hai. Design, screenshots, fonts aur aapka Gumroad link included hain. Is page ko chalane ke liye WordPress, PHP, database ya npm build ki zarurat nahi hai.

## 1. ZIP extract karein

ZIP par right-click karke **Extract All** karein. Extracted files mein `index.html`, `styles.css`, `app.js`, `config.js` aur `assets` folder milenge. Computer par `index.html` double-click karke page dekh sakte hain.

## 2. GitHub par upload karein

1. GitHub mein **New repository** banayein; naam `scoopera-sales-page` rakh sakte hain.
2. **Add file → Upload files** se extracted files aur poora `assets` folder upload karein.
3. `index.html` repository ke main level par hona chahiye. ZIP ko akela upload na karein; GitHub use automatically extract nahi karta.
4. **Commit changes** karein. Files `main` branch mein rahengi.

`.nojekyll` ek optional compatibility file hai. Agar computer ise chhupa de, Cloudflare hosting ke liye iski zarurat nahi hai.

## 3. Sales page ko host karein

**GitHub repository aur GitHub Pages hosting alag cheezein hain.** GitHub Pages ke official rules online businesses aur primarily commercial transactions facilitate karne wali websites ko restrict karte hain. SCOOPÉRA ka yeh page theme sell karne ke liye hai, isliye recommended setup: **files GitHub par, website Cloudflare Pages par**.

Cloudflare Pages GitHub ke public aur private repositories dono connect kar sakta hai.

1. Cloudflare dashboard mein **Workers & Pages → Create application → Pages** kholein.
2. **Connect to Git** / **Import an existing Git repository** chunein.
3. Apna GitHub account connect karke `scoopera-sales-page` repository select karein.
4. Neeche wali settings lagayein:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None / blank |
| Build command | `exit 0` |
| Build output directory | `.` — repository root, jahan index.html hai |
| Root directory (advanced) | Blank |
| Environment variables | Koi nahi |

5. **Save and Deploy** karein. Deployment complete hone par jo actual live URL mile, use apne Instagram bio, Pinterest pins aur Facebook posts mein share karein.

Aapke account mein dashboard labels thode alag ho sakte hain. Official links neeche diye hain. GitHub mein future file changes commit karne par connected Cloudflare project automatically update ho sakta hai.

## Gumroad link already connected hai

Header, hero aur price card ke purchase buttons yeh URL use karte hain:

https://muaazshk6.gumroad.com/l/scoopera-wordpress-theme?wanted=true

Link badalna ho to `config.js` mein `checkoutUrl` edit karein. Current display price **$29 USD** hai. Price badalne par `index.html` mein visible price aur title/description text bhi update karein.

Paid WordPress theme ZIP ko is public sales website mein upload na karein. Use Gumroad ke paid product files mein rakhein, jahan se buyers ko delivery milegi.

## Kya verify kiya gaya

- ZIP ke root mein `index.html` hai.
- Images, fonts, scripts aur CSS bundled hain; remote asset downloads ki dependency nahi hai.
- Relative asset paths checked hain, isliye root domain aur repository subfolder dono ke liye structure portable hai.
- JavaScript syntax aur teen checkout controls ka configuration checked hai.
- Koi secret key, hosting login, Git history ya paid theme ZIP export mein nahi hai.
- Aapke GitHub/Cloudflare account par deployment nahi kiya gaya. Naya browser/device audit ya payment transaction test nahi kiya gaya.

## Official guides — checked 26 September 2026

- GitHub Pages usage limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Cloudflare Pages Git integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare static HTML settings: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
