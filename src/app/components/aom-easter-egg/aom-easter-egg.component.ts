import { Component, ElementRef, ViewChild } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-aom-easter-egg',
  standalone: true,
  templateUrl: './aom-easter-egg.component.html',
  styleUrls: ['./aom-easter-egg.component.scss']
})
export class AomEasterEggComponent {
  @ViewChild('eggBtn', { static: false, read: ElementRef }) eggBtn?: ElementRef<HTMLButtonElement>;

  public showMessage = false;

  private getOriginFrom(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    return { x: cx / window.innerWidth, y: cy / window.innerHeight };
  }

  blast(event: MouseEvent) {
    const btn = event.currentTarget as HTMLElement;
    const origin = this.getOriginFrom(btn);

    const scalar = 1.6;

    // Try emoji shape 🥝 ; TS types may not include this API, so cast to any
    const shapeFromText = (confetti as any).shapeFromText?.bind(confetti);
    const kiwiShape = shapeFromText ? shapeFromText({ text: '🥝', scalar }) : null;

    const base = {
      origin,
      particleCount: 1,
      angle: 210,
      spread: 90,
      startVelocity: 30,
      gravity: 0.2,
      drift: -0.4,       // tire vers la gauche
      ticks: 360,
      scalar,
      disableForReducedMotion: true
    } as const;

    if (kiwiShape) {
      (confetti as any)({ ...base, shapes: [kiwiShape] });
    } else {
      confetti({
        ...base,
        colors: ['#6dbf4b', '#3d8b37', '#a3d977', '#7d5a3c', '#f2f2f2'],
        shapes: ['circle', 'square']
      });
    }

    // petit “afterglow” focalisé (quelques kiwis qui suivent la même direction)
    const end = Date.now() + 350;
    const loop = () => {
      if (Date.now() > end) return;
      if (kiwiShape) {
        (confetti as any)({
          ...base,
          shapes: [kiwiShape],
          origin: {
            x: Math.min(1, origin.x + (Math.random() - 0.5) * 0.02),
            y: Math.max(0, origin.y - Math.random() * 0.03)
          }
        });
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false
    }, 5000);
  }
}
