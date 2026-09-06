# Credits & Licenses

Otiyot is fully open source. The application code is under the **MIT License**
(see [LICENSE](LICENSE)). Everything bundled or loaded is under a permissive or
open license — nothing here carries copyleft obligations on the app.

## Fonts

| Font | Use | Author | License |
|------|-----|--------|---------|
| **Gveret Levin AlefAlefAlef** | Hebrew handwriting (embedded) | Gili Levin & Shavit Yaacov — [AlefAlefAlef](https://alefalefalef.co.il) | SIL Open Font License 1.1 — [OFL text](fonts/GveretLevin-OFL.txt), [source repo](https://github.com/AlefAlefAlef/gveret-levin) |
| **Frank Ruhl Libre** | Hebrew print | Michal Sahar et al. | SIL Open Font License 1.1 (via Google Fonts) |
| **Nunito** | Interface text | Vernon Adams et al. | SIL Open Font License 1.1 (via Google Fonts) |

The Gveret Levin font file is embedded in `index.html` (base64) so the app works
offline; its OFL license text is included at
[`fonts/GveretLevin-OFL.txt`](fonts/GveretLevin-OFL.txt) as the OFL requires.
Nunito and Frank Ruhl Libre are loaded at runtime from Google Fonts.

## Texts

- **Sefaria** — Hebrew texts and translations in the Library are fetched live
  from the [Sefaria API](https://developers.sefaria.org). Each passage displays
  its own license (typically **CC-BY**, **CC-BY-SA**, or **Public Domain**) and
  links back to Sefaria, per Sefaria's terms. No API key is required.

## Everything else

- UI text, code, curated vocabulary/grammar content, and the retold folk-tale
  stories were written for this project and are covered by the MIT License above.
- Emoji are rendered by the operating system's own emoji font (not bundled).
