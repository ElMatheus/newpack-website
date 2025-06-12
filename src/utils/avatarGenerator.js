export function createAvatarPlaceholder(name, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;

  const context = canvas.getContext('2d');

  // Fill background
  context.fillStyle = color || '#00AFEF20';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  const initial = name ? name.charAt(0).toUpperCase() : 'A';
  context.fillStyle = '#00AFEF';
  context.font = 'bold 100px Poppins, Arial, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(initial, canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL('image/png');
}
