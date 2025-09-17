# Mori Font Integration

## Available Font Files ✅

The following Pangram Pangram Mori font files are available in this directory:

**Active WOFF2 Files (Web Optimized):**
- `PPMori-Regular.woff2` (Regular weight - 400) ✅ In Use
- `PPMori-SemiBold.woff2` (SemiBold weight - 600) ✅ In Use  
- `PPMori-Extralight.woff2` (Extralight weight - 200) ✅ In Use

**OTF Files (Available but not currently used):**
- `PPMori-Regular.otf` (Regular weight - 400)
- `PPMori-SemiBold.otf` (SemiBold weight - 600) 
- `PPMori-RegularItalic.otf` (Regular Italic - 400)
- `PPMori-SemiBoldItalic.otf` (SemiBold Italic - 600)
- `PPMori-Extralight.otf` (Extralight weight - 200)
- `PPMori-ExtralightItalic.otf` (Extralight Italic - 200)

## Font Usage

The following classes are available for using Mori font:

- `font-heading` - Uses Mori for headings with fallback to Inter
- `text-heading` - Applies Mori font with regular weight (400)
- `text-heading-light` - Applies Mori font with extralight weight (200)
- `text-heading-semibold` - Applies Mori font with semibold weight (600)
- `text-heading-bold` - Applies Mori font with semibold weight (600)
- `text-brutalist` - Combines Mori semibold with brutalist styling (uppercase, tight tracking)

## Integration Status ✅

✅ Font loading configuration added to `app/layout.tsx`
✅ Tailwind config updated with `font-heading` family
✅ CSS utilities created for heading styles
✅ Font files available and configured

## Current Implementation

The main heading "THE EXPLORIMENTALIST" on the homepage uses `text-heading-semibold` class, displaying in Mori SemiBold weight.

## Testing

Run the development server:
```bash
npm run dev
```

All headings will now display in the Mori font family with appropriate weights.