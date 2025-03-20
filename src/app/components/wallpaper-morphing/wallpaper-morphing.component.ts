import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ElementRef, Inject, PLATFORM_ID, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper-morphing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wallpaper-morphing.component.html',
  styleUrl: './wallpaper-morphing.component.scss'
})
export class WallpaperMorphingComponent implements OnInit, AfterViewInit, OnDestroy {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number | null = null;
  private blobs: Blob[] = [];
  private isDarkMode: boolean = false;
  private observer: MutationObserver | null = null;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
    }
  }

ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.setupCanvas();
    this.setupThemeObserver();
  }
}

ngOnDestroy(): void {
  if (isPlatformBrowser(this.platformId)) {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    window.removeEventListener('resize', this.handleResize);
  }
}

private setupCanvas(): void {
  if (!isPlatformBrowser(this.platformId)) return;

  this.canvas = this.renderer.createElement('canvas');
  this.ctx = this.canvas!.getContext('2d');
  if (!this.ctx) return;

  this.resizeCanvas();
  this.renderer.setStyle(this.canvas, 'position', 'absolute');
  this.renderer.setStyle(this.canvas, 'top', '0');
  this.renderer.setStyle(this.canvas, 'left', '0');
  this.renderer.setStyle(this.canvas, 'width', '100%');
  this.renderer.setStyle(this.canvas, 'height', '100%');
  this.renderer.setStyle(this.canvas, 'z-index', '-1');

  const container = this.elementRef.nativeElement.querySelector('.wallpaper-container');
  if (container) {
    this.renderer.appendChild(container, this.canvas);
  } else {
    console.error('Elemento .wallpaper-container não encontrado.');
  }
  this.setupBlobs();
  this.startAnimation();
  window.addEventListener('resize', this.handleResize);
}

  private setupThemeObserver(): void {
    if (!isPlatformBrowser(this.platformId)) return;
  
    window.addEventListener('storage', (event) => {
      if (event.key === 'dark-mode') {
        this.isDarkMode = event.newValue === 'true';
      }
    });
  
    window.addEventListener('themeChange', () => {
      this.isDarkMode = localStorage.getItem('dark-mode') === 'true';
    });
  }

  private handleResize = (): void => {
    if (!isPlatformBrowser(this.platformId)) return;
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.canvas) return;
    const parent = this.elementRef.nativeElement;
    this.canvas.width = parent.offsetWidth || window.innerWidth;
    this.canvas.height = parent.offsetHeight || window.innerHeight;
  }

  private setupBlobs(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.canvas) return;
    this.blobs = [];
    const numBlobs = 5;
    for (let i = 0; i < numBlobs; i++) {
      this.blobs.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: 100 + Math.random() * 200,
        xSpeed: (Math.random() - 0.5) * 2,
        ySpeed: (Math.random() - 0.5) * 2
      });
    }
  }

  private startAnimation(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.animate();
  }

  private animate = (): void => {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
    const blackColor = getComputedStyle(document.documentElement).getPropertyValue('--black').trim() || '#000000';
    const whiteColor = getComputedStyle(document.documentElement).getPropertyValue('--white').trim() || '#f1f1f1';
    const baseColor = this.isDarkMode ? blackColor : whiteColor;
    const blobColor = this.isDarkMode ? 'rgba(50, 50, 50, 0.7)' : 'rgba(220, 220, 220, 0.7)';
    this.ctx.fillStyle = baseColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.globalCompositeOperation = 'multiply';
  
    for (const blob of this.blobs) {
      blob.x += blob.xSpeed;
      blob.y += blob.ySpeed;
      if (blob.x < -blob.radius) blob.x = this.canvas.width + blob.radius;
      if (blob.x > this.canvas.width + blob.radius) blob.x = -blob.radius;
      if (blob.y < -blob.radius) blob.y = this.canvas.height + blob.radius;
      if (blob.y > this.canvas.height + blob.radius) blob.y = -blob.radius;
      const gradient = this.ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.radius
      );
      gradient.addColorStop(0, blobColor);
      gradient.addColorStop(1, 'transparent');
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.globalCompositeOperation = 'source-over';
    this.animationFrameId = requestAnimationFrame(this.animate);
  }
}

interface Blob {
  x: number;
  y: number;
  radius: number;
  xSpeed: number;
  ySpeed: number;
}