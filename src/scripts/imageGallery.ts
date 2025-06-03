let viewer: HTMLDivElement | null = null;
let currentIndex = 0;
let imageElements: HTMLImageElement[] = [];

function createSVGIcon(isLeft: boolean): SVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("width", "30");
  svg.setAttribute("height", "30");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("fill", "none");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.classList.add("lucide", isLeft ? "lucide-chevron-left" : "lucide-chevron-right", "pulse");
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", isLeft ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6");
  
  svg.appendChild(path);
  
  return svg;
}

function showImage(index: number) {
  if (!viewer) return;

  const overlay = viewer.querySelector('.overlay') as HTMLDivElement;
  const img = overlay.querySelector('img') as HTMLImageElement;

  const newImage = imageElements[index];
  img.src = newImage.src;
  img.alt = newImage.alt;
}

function closeViewer() {
  document.startViewTransition(() => {
    viewer?.remove();
    viewer = null;
    currentIndex = 0;
  });
}

function navigate(direction: number) {
  currentIndex = (currentIndex + direction + imageElements.length) % imageElements.length;
  showImage(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  imageElements = Array.from(document.querySelectorAll<HTMLImageElement>('.image-container img'));

  imageElements.forEach((img, i) => {
    img.addEventListener('click', () => {
      if (viewer) return;

      currentIndex = i;

        viewer = document.createElement('div');
        viewer.className = 'image-viewer fastAppear';

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.tabIndex = 0;

        const fullImage = document.createElement('img');
        fullImage.src = img.src;
        fullImage.alt = img.alt;

        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.textContent = '×';

        const prevButton = document.createElement('button');
        prevButton.className = 'nav-button prev';
        prevButton.setAttribute('aria-label', 'Previous image');
        const leftIcon = createSVGIcon(true);
        prevButton.appendChild(leftIcon);

        const nextButton = document.createElement('button');
        nextButton.className = 'nav-button next';
        nextButton.setAttribute('aria-label', 'Next image');
        const rightIcon = createSVGIcon(false);
        nextButton.appendChild(rightIcon);

        overlay.appendChild(fullImage);
        overlay.appendChild(closeButton);
        overlay.appendChild(prevButton);
        overlay.appendChild(nextButton);
        viewer.appendChild(overlay);
        document.body.appendChild(viewer);

        closeButton.addEventListener('click', closeViewer);
        viewer.addEventListener('click', closeViewer);
        overlay.addEventListener('click', (e) => e.stopPropagation());
        overlay.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Escape') closeViewer();
          if (e.key === 'ArrowRight') navigate(1);
          if (e.key === 'ArrowLeft') navigate(-1);
        });
        prevButton.addEventListener('click', (e) => {
          e.stopPropagation();
          navigate(-1);
        });
        nextButton.addEventListener('click', (e) => {
          e.stopPropagation();
          navigate(1);
        });

        overlay.focus();
    });
  });
});