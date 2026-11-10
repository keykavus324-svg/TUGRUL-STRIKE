# TUĞRUL STRIKE — Saltline Operasyonu

Küçük harita, büyük savaş. Tek komando, 6 silahlı düşman, çöl bileşkesi "Saltline".

## Oynanış
- **Görev:** 3 dakika içinde bileşkedeki 6 düşmanı etkisiz hale getir.
- **Silahlar:** TUĞRUL-47 otomatik tüfek (30 mermi) + P9 tabanca (12 mermi). Kafa vuruşu 4× hasar.
- **Düşmanlar:** Devriye → Alarm → Çatışma yapay zekâsı; siper değiştirir, strafe yapar, burst ateş açar.

## Kontroller
| Tuş | Eylem |
|---|---|
| WASD | Hareket |
| Fare | Nişan / Bak |
| Sol Tık | Ateş |
| Sağ Tık | Nişan al (ADS) |
| R | Şarjör değiştir |
| Shift | Koş |
| Space | Zıpla |
| C | Eğil |
| 1 / 2 | Tüfek / Tabanca |
| Esc | Duraklat |

## Teknoloji / Görsel
- Three.js + Vite, tamamen prosedürel PBR dokular (albedo + normal + roughness, canvas ile üretilir)
- PCF yumuşak gölgeler, ACES ton eşleme, UnrealBloom, film greni + vinyet, PMREM ortam yansımaları
- Prosedürel gökyüzü (FBM bulutlar + güneş), toz parçacıkları, tracer, kovan, namlu alevi, etki parçacıkları
- WebAudio ile tamamen prosedürel sesler (ateş, adım, ortam rüzgârı) — harici dosya yok
- Ana menüde canlı 3D sahne üzerinde sinematik kamera turu

## Çalıştırma
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # üretim derlemesi -> dist/
```

## Proje yapısı
```
src/
  main.js     oyun döngüsü, ateş/çarpma, menüler
  world.js    Saltline haritası (binalar, kule, konteyner, jeep, dekor)
  textures.js prosedürel PBR doku üretimi
  player.js   FPS kontrolcü (koş/zıpla/eğil, head-bob, sarsıntı)
  weapon.js   TUĞRUL-47 + P9 viewmodel, geri tepme, ADS, şarjör
  enemies.js  6 düşman AI + insan modeli
  effects.js  parçacıklar, tracer, kovan, namlu alevi, toz
  audio.js    prosedürel WebAudio sesleri
  ui.js       HUD, radar, pusula, killfeed, ekranlar
```
