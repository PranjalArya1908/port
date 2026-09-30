# Pranjal Arya // Developer Portfolio — One Tile & The Wolf Sanctum
> Engineered around a continuous 2,600-point 3D particle morphing engine & seamless in-app low-poly tile unravelling.

---

## 🌟 3D Particle Formations

The central 2,600-point particle cloud dynamically reshapes into tailored domain-specific 3D symbols with custom arc offsets (`arc = Math.sin(Math.PI * t) * 2.2`):

1. **01. About (Vision)** → **A Pair of Glasses in 3D**
   - Two rounded-rectangular lens rims, arched nose bridge, and dual temple arms extending deep into Z-space with ergonomic ear hooks.
2. **02. Education (Trajectory)** → **Laurel Hat (Mortarboard + Laurel Wreath)**
   - Academic graduation cap (flat diamond mortarboard plate, skull cap, and draping tassel) cradled by a classical curved laurel wreath with sprouting leaves.
3. **03. Engineering Core (Skills)** → **3D Code Symbol `</>`**
   - Volumetric left bracket `<`, forward slash `/`, and right bracket `>` with 3D extrusion thickness.
4. **04. CrowdSafe (Projects)** → **Crowd Density Symbol**
   - Cluster of stylized human silhouettes (front lead figure, left/right flanking figures, and background nodes) connected by live crowd flow network lines.
5. **05. Credify (Projects)** → **FinTech Smart Card & Crypto Shield**
   - 3D smart card/vault shield with an embossed EMV chip grid and glowing digital currency verification nodes.
6. **06. Contact (Uplink)** → **Interactive Celestial Burst**
   - Luminous orbital constellation that scatters dynamically in real-time on canvas hover.

---

## 🐺 The Wolf Sanctum & Low-Poly Tile Unravelling

- **Integrated In-App Architecture**: The Wolf Sanctum is built directly inside the main application—eliminating external page reloads.
- **Top-Left Wolf Tiled Logo**: 24-facet low-poly wolf face emblem in the top header.
- **Low-Poly Tile Curtain Transition**:
  - **Opening Sanctum**: Clicking the wolf logo launches an interlocking 192-tile geometric wave sweeping inward from the top-left, covering 100% of the screen. At peak coverage, the view swaps and the tiles **unravel from the center**, revealing the Wolf Sanctum.
  - **Returning to Portfolio**: Clicking **`← RETURN TO PORTFOLIO`** (or pressing `ESC` / `B`) triggers the tiles to swarm back in from the edges, covering the screen, and then retracting back into the top-left wolf logo.

---

## ⌨️ Controls & Navigation

| Action | Control |
| :--- | :--- |
| **Open Wolf Sanctum** | Click top-left Wolf Logo or press `W` |
| **Return to Portfolio** | Click `← RETURN TO PORTFOLIO` or press `ESC` / `B` |
| **Next / Previous Section** | `→` / `←` Arrow keys, `PageDown` / `PageUp`, or Mouse Wheel |
| **Menu / Direct Jump** | Click top bar links (`About`, `Education`, `Skills`, etc.) |
| **Interactive Parallax** | Move mouse to rotate 3D particle formations and wolf totem |

---

## 🚀 Running Locally

```bash
python3 -m http.server 5188
# Visit http://localhost:5188 in your browser
```
