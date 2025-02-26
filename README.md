# LeonardoUI – Expo UI Components

Welcome to [LeonardoUI](https://github.com/leodebarros/leonardo-ui), a growing set of React Native components built specifically for **Expo** applications. This repository is based on [Expo](https://expo.dev) and created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

**Light Mode Screenshots**

<p align="center">
  <img src="https://amplify-mouapp-dev-110551-deployment.s3.eu-west-2.amazonaws.com/public/cover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIASZBVI2BBLAYEDLQR%2F20250226%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190943Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCWV1LXdlc3QtMiJHMEUCIQDOEG34ZFu2bnLABjfJCPkc01hulhziklqNxvBN0s00RAIgJMkR8gRcokzjwQrdnSVQYexPsQ5z%2BIT9E2bCrLKbCWIq7AIIZBAAGgwxOTEyMzc3NzEzMzAiDNJPglC3tfYNsPLOgirJAraygvbTgBSvkPgbMqk%2B5QFzhu%2FDnkD3kglGGK5z88z4I0v3Xu8EBcyBTXvQEU9KP7UEC3vD9qXfq%2B5SLM4FyRX5bwIdM51g1Ec2wZjl0YJK2G1zxi4oAApsHdJQHGe36X%2FP1rHLh0SngffUvbku0CpkdFIZY1Z4HP7wCt7Kc50l5BUd5%2B1h3IAk2y2EDsnYnLVEeWlxvf0hkGa5oPafebJ%2BAq9SwNnrFMID5LVdogkpAQbtbfIXk7HlZX0a0epQilyXPwnNyo5Dt2%2BS2qsO%2FTOHEgCa2FidApr5kcgMd5Z8fguYPFa9BhBBdFcs8RFLB%2BAzZlmu9YebL0g2rVX2HLl3HED9ZRtMqGCaP4BS%2BWNV9lSJh%2Fn5OxMB132FFGRzaqzB2IlZJyMU%2BrMXEp8K26w3zWGGRVmbi%2BnA2bMCCF3mGtrVE5%2F2ynTKMMSY%2Fb0GOrMCLyKRrl7a2QQCzLsKCbOG4U0SYQNtddDwgrLDyLvZuF8JP%2FRpb2pA8v%2F3WarII%2BcfaWdlss286dtECFJ8I3TR%2BLl%2FEVa1BIeUkZi%2BcfDTkEJerdV2wl5DAmqyF%2Fvj9r6uYzCz92xY4gOYf7X5UtvvJ4%2FvMzxraWoiAFknzKXhG1vC%2FZoLVuCfr4SqhxrS3ZBQuELOcEzrFu9ueB9oH95%2FCSPgYPEi2eYekIH68jV7Gf0IEGYnNNsHPRc2ukdAN%2BlvWW%2BZnFF3yVIHCY9aXfpGib9%2B5hHUKppVcz82Q6Hu9yWK8eFDag9cb3u%2FhXy8x9TahoLmAvIaSuasnNCiOub5Gt9m2yzD6vL6Xucc4qMpKRFXBNFXbSX1h3SaKJWKt807pP7UPGLmoXnw86CDm7yC%2B2FOSg%3D%3D&X-Amz-Signature=d183be3d5fddec019bb6f2beb08b61c92859332375d53b42c5a30c05c5bfd8f0&X-Amz-SignedHeaders=host&response-content-disposition=inline">
</p>

**Dark Mode Screenshots**

<p align="center">
  <img src="https://amplify-mouapp-dev-110551-deployment.s3.eu-west-2.amazonaws.com/public/cover-dark.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIASZBVI2BBO7MA7GER%2F20250226%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T191548Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCWV1LXdlc3QtMiJHMEUCIQDMGPOrFNnXpsoa7awZQ%2FYmKnz%2FpRV1X7AQEQ2rk2hFUgIgSPaNgWh4Li8NOLA%2Bts%2FE0FFPPSGYX37MfX5t%2BH0HxV0q7AIIZBAAGgwxOTEyMzc3NzEzMzAiDH31Ytcnh0sDYurfIyrJAjOxbIbbAln0GbLS6VFKnRmCli%2FjeDAycRfxThkmzdMXlns%2B0G7DpXcn00GnheZ0iqczAo5xou9CJUAkLFjEmFwg9jgRREMXvlJ%2FZ9znbHcwGLU%2BVgC0DBMXgva3tHhkQJWBWpTOV%2Fjb7p5ZKKr3dgVVIRwbi8n%2Br1hZXRrLVXnmUU0O1fdUEzDOR2mIa68bvr7T3nPhtLLldoOEbyqX0dfohM3EMSKCT30Ff9F17XxQ3%2F02jjeY6pDyL0HUQetC4TYLqyKv7Y4Fy%2B%2BhG55auoDLxngstuAb%2B09U%2FWBcKqh5%2BsHJwpcvXQhwbKD3sF6pVF9D7Xnoxf4dnT3qwr3%2FoolMfZQWcnI5StT%2BslMnWIfBBihHwOH7t%2FJjNxJk4qEJWDPS9Z1UWsf6K%2FaOkHZwc2E8A2uk3HvABz6u86wYobqwJoLNdq%2BshUJxMMSY%2Fb0GOrMC0XV8Mh6hNthd%2Bmak1MKG9XHP2HI3vjiwSCAuHaHdGXCJACn6iPr8Gjc0MkO3UbV8NkXfnNMvh7I8ufgBU2BBrtKZfVxEW1r%2FKb6Ts4opsZaMWPR22f8O9rMevHoM2OHuBziQs7tMi55RH4oPyGVhJCYwfzjiBJ9U5qYjiNeY361g0dP8o5Z6HnHf0HJ3etXdSMFFr%2B6Pls%2B%2FBOxYDE2XIuoQ%2Bvi75P9Z8Jq5kXK1RfSIV6jYUup%2B2fLcVZX9foH5zo6k0U0d6JKq2zdLgKI1N6%2FUWIz8IJptIYMFTdcxd7HD7XEngsr7NKGhHeKw07fvCXPfvMb%2BoAY9ZTHsnj2TP7byRDRPnmLo4Wn1qWWasZMNjebk6LeSJ5y4wT7eCZavsKiz8FC380yJbS%2BX1wJhBuIewg%3D%3D&X-Amz-Signature=b3c3d184e93b0aa3647de5c5ee1b020bf479138431dd316551a7de3c420c76cb&X-Amz-SignedHeaders=host&response-content-disposition=inline"/>
</p>

---

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   yarn install
   ```

2. **Start the app**

   ```bash
   yarn start
   ```

   In the output, you'll find options to open the app in:
   - A [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can begin developing by editing files in the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

---

## ⚙️ About LeonardoUI

LeonardoUI is a collection of reusable, themeable UI components designed for Expo apps. While the code is set up with Yarn, you can use **npm** if you prefer.

### ✨ Features:
- **Customizable**: Built to adapt to your app’s branding.
- **Expo-first**: Optimized for Expo’s environment.
- **Minimal Dependencies**: Focus on performance and easy maintenance.
- **Theming**: Simple approach to custom colors, typography, and more.

---

## 📚 Current Components

Below is a list of existing components and their statuses:

1. **Action**: A compact, interactive button with an icon for quick actions (share, save, etc.).
2. **Button**: A tappable element that triggers an action, with multiple styles and states.
3. **Card**: A versatile container grouping related content and actions (summaries, previews).
4. **Chip**: A small, interactive UI element for filters, categories, or short info.
5. **Dialog (Work in progress)**: A modal overlay requiring user interaction, e.g., confirmations, alerts.
6. **Featured**: A visually prominent section highlighting key content, e.g., promotions or articles.
7. **Filter**: A pill-shaped control for filtering or refining content, often in a horizontal scroll.
8. **Header**: A structured title bar providing screen context, navigation, or descriptions.
9. **Input (Coming soon)**: A text field for user input, with validation and flexible styling.
10. **List**: A structured collection of items, common in menus, settings, or data displays.
11. **Options**: A grouped set of selectable items or settings, often used in preference panels.
12. **Radio Button**: A circular selector for picking a single option among many.
13. **Switch**: A toggle component switching between two states, e.g., on/off.
14. **Text**: A configurable component for consistent text styling across the app.
15. **Tabs (Coming soon)**: A navigational component organizing content into panels.
16. **Toast**: A brief, non-intrusive notification providing feedback or status messages.

If you don’t see a component you need, feel free to contribute or open an issue!

---

## 🏆 Best Practices & Tips

- Use **Expo Router** to manage navigation.
- Keep components composable (compose them into screens or smaller sections).

---

## 🏗️ Contributing

LeonardoUI is **MIT licensed** and open for contributions. If you like this library, consider helping out:

1. **Open an Issue**: Suggest a feature or report a bug.
2. **Submit a Pull Request**: Implement a new component or fix existing issues.
3. **Improve the Docs**: Clarify usage, add examples, or share best practices.

### Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/leodebarros/leonardo-ui.git
   cd leonardo-ui
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the Expo dev server:
   ```bash
   yarn start
   ```

---

## Learn More About Expo

- **[Expo documentation](https://docs.expo.dev/)** for fundamentals and advanced guides.
- **[Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)** for step-by-step tutorials.
- **[Expo on GitHub](https://github.com/expo/expo)** for open-source contributions.
- **[Discord community](https://chat.expo.dev)** to chat with other Expo developers.

---

## License

[MIT](https://github.com/leodebarros/leonardo-ui/blob/main/LICENSE)

> **Tip**: If you like what I’m building, please ⭐ the repo and spread the word!
